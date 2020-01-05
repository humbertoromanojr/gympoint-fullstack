import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { registration } = data;

    await Mail.sendMail({
      to: `${registration.student.nome} <${registration.student.email}>`,
      subject: `Confirmação de matrícula na Academia Gympoint`,
      template: 'registration',
      context: {
        id: registration.id,
        student: registration.student.nome,
        plan: registration.plan.title,
        price: registration.price,
        date_end: format(
          parseISO(registration.end_date),
          "' dia' dd 'de' MMMM, às ' H:mm'h'",
          { locale: pt }
        ),
      },
    });
  }
}

export default new RegistrationMail();
