import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import AnswerGymHelpOrder from '../services/AnswerGymHelpOrder';

class GymHelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'question', 'created_at', 'answer'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'idade', 'altura', 'peso'],
        },
      ],
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(helpOrders);
  }

  async update(req, res) {
    const { answer } = req.body;
    const { id: helpOrderId } = req.params;

    const helpOrder = await AnswerGymHelpOrder.run({
      helpOrderId,
      answer,
    });

    return res.json(helpOrder);
  }
}

export default new GymHelpOrderController();
