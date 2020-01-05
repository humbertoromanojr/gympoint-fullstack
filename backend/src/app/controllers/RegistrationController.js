import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

import RegistrationService from '../services/RegistrationService';

class RegistrationController {
  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const registration = await RegistrationService.run({
      student_id,
      plan_id,
      start_date,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const { id: registrationId } = req.params;

    const registration = await Registration.findByPk(registrationId);
    if (!registration) {
      return res.status(400).json({ error: 'Registration not exists' });
    }

    const regiUpdated = await registration.update(req.body);

    const { id, plan_id, student_id, start_date } = regiUpdated;

    return res.json({
      id,
      plan_id,
      student_id,
      start_date,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const registration = await Registration.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'price', 'duration'],
        },
      ],
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(registration);
  }

  async show(req, res) {
    const { id } = req.params;

    const registration = await Registration.findByPk(id, {
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'price', 'duration'],
        },
      ],
    });

    return res.json(registration);
  }

  async delete(req, res) {
    try {
      const { id: registrationId } = req.params;
      const registration = await Registration.findByPk(registrationId, {
        include: [
          {
            model: Plan,
            as: 'plan',
            attributes: ['title'],
          },
          {
            model: Student,
            as: 'student',
            attributes: ['nome', 'email'],
          },
        ],
      });

      if (!registration) {
        return res.status(400).json({ error: 'Registration not exists' });
      }

      await Queue.add(CancellationMail.key, {
        registration,
      });

      await Registration.destroy({ where: { id: registrationId } });

      return res.json(registration);
    } catch (error) {
      return res.status(404).json({ error: 'FALHA: Registration not found' });
    }
  }
}

export default new RegistrationController();
