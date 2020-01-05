import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class Cancellationmail {
  get key() {
    return 'Cancellationmail';
  }

  async handle({ data }) {
    const { registration } = data;

    await Mail.sendMail({
      to: `${registration.student.nome} <${registration.student.email}>`,
      subject: `Cancelamento matrícula da Gympoint`,
      template: 'cancelation',
      context: {
        id: registration.id,
        user: registration.student.nome,
        plan: registration.plan.title,
        date: format(
          parseISO(registration.start_date),
          "'dia' dd 'de' MMMM, às ' H:mm'h'",
          { locale: pt }
        ),
      },
    });
  }
}

export default new Cancellationmail();
