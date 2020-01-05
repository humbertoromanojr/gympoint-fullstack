import Sequelize, { Model } from 'sequelize';
import { parseISO, differenceInYears } from 'date-fns';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        peso: Sequelize.DECIMAL,
        idade: Sequelize.INTEGER,
        /* idade: {
          type: Sequelize.VIRTUAL,
          get() {
            return differenceInYears(new Date(), parseISO(this.nascimento));
          },
        }, */
        altura: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Student;
