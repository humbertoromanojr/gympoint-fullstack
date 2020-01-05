import { startOfHour, parseISO, isBefore, addMonths } from 'date-fns';

import Student from '../models/Student';
import Plan from '../models/Plan';
import Registration from '../models/Registration';

import Queue from '../../lib/Queue';
import RegistrationMail from '../jobs/RegistrationMail';

class RegistrationService {
  async run({ student_id, plan_id, start_date }) {
    const student = await Student.findByPk(student_id);
    if (!student) throw new Error('Student nos exist');

    const plan = await Plan.findByPk(plan_id);
    if (!plan) throw new Error('Plan nos exist');

    const dateStart = startOfHour(parseISO(start_date));
    if (isBefore(dateStart, new Date())) {
      throw new Error('Dates no permitted');
    }

    const dateEnd = addMonths(dateStart, plan.duration);
    const totalPrice = plan.price * plan.duration;

    // verify Active plan student
    const checkDateAgo = await Registration.findOne({
      where: { student_id },
    });

    if (checkDateAgo && !checkDateAgo.dateAgo) {
      throw new Error('Active plan student, at this Time');
    }

    await Registration.create({
      plan_id,
      student_id,
      start_date: dateStart,
      end_date: dateEnd,
      price: totalPrice,
    });

    const registration = await Registration.findOne({
      where: { plan_id, student_id },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['nome', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title'],
        },
      ],
    });

    await Queue.add(RegistrationMail.key, { registration });

    return registration;
  }
}

export default new RegistrationService();
