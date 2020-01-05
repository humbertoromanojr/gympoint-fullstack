import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
import AnswerGymHelpOrderMail from '../jobs/AnswerGymHelpOrderMail';

class AnswerGymHelpOrder {
  async run({ helpOrderId, answer }) {
    const helpOrder = await HelpOrder.findByPk(helpOrderId, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'nome', 'email'],
        },
      ],
    });

    if (!helpOrder) throw new Error('Help Order not exist');

    helpOrder.answer = answer;
    helpOrder.answer_at = new Date();

    await helpOrder.save();

    await Queue.add(AnswerGymHelpOrderMail.key, { helpOrder });

    return helpOrder;
  }
}

export default new AnswerGymHelpOrder();
