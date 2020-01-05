import { Sequelize } from 'sequelize';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { id: student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: { student_id },
      order: Sequelize.literal('created_at DESC'),
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'question', 'created_at', 'answer'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'email', 'peso', 'altura', 'idade'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const { id: student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }

    const helporder = await HelpOrder.create({ student_id, ...req.body });

    return res.json(helporder);
  }
}

export default new HelpOrderController();
