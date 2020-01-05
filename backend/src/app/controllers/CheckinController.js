import { Op, Sequelize } from 'sequelize';
import { subDays } from 'date-fns';

import CheckIn from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
    const { id: student_id } = req.params;
    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student no exist' });
    }

    // week sevem days
    const checkins = await CheckIn.findAll({
      where: {
        student_id,
        created_at: {
          [Op.between]: [subDays(new Date(), 7), new Date()],
        },
      },
    });

    if (checkins.length > 4) {
      return res.status(400).json({
        error: 'Student you already exceeded the verification limit.',
      });
    }

    const checkin = await CheckIn.create({ student_id });

    return res.json(checkin);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const { id: student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }

    const checkin = await CheckIn.findAll({
      where: { student_id },
      attributes: ['id', 'student_id', 'created_at'],
      order: Sequelize.literal('created_at DESC'),
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'email', 'idade', 'altura', 'peso'],
        },
      ],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
