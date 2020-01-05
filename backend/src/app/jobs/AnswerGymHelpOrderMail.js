import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class AnswerGymHelpOrderMail {
  get key() {
    return 'AnswerGymHelpOrderMail';
  }

  async handle({ data }) {
    const { helpOrder } = data;

    console.log('Aluno respondido!');

    await Mail.sendMail({
      to: `${helpOrder.student.nome} <${helpOrder.student.email}>`,
      subject: `Resposta ao pedido de auxílio da Gympoint`,
      template: 'helpOrder',
      context: {
        student: helpOrder.student.nome,
        question: helpOrder.question,
        answer: helpOrder.answer,
        answer_at: format(
          parseISO(helpOrder.answer_at),
          "'dia' dd 'de' MMMM, às ' H:mm'h'",
          { locale: pt }
        ),
      },
    });
  }
}

export default new AnswerGymHelpOrderMail();
