import Sequelize, { Model } from 'sequelize';
import { isBefore, isAfter, parseISO } from 'date-fns';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATEONLY,
        end_date: Sequelize.DATEONLY,
        price: Sequelize.DECIMAL,
        dateAgo: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN),
          get() {
            return isBefore(parseISO(this.end_date), new Date());
          },
        },
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN),
          get() {
            return (
              isBefore(parseISO(this.start_date), new Date()) &&
              isAfter(parseISO(this.end_date), new Date())
            );
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Registration;
