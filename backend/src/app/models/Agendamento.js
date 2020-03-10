import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Agendamento extends Model {
  static init(sequelize) {
    super.init({
      data: Sequelize.DATE,
      enfermeiro: Sequelize.INTEGER,
      paciente: Sequelize.INTEGER,
      vacina: Sequelize.INTEGER,
      dose: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN,
    },
    {
      sequelize
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'enfermeiro', as: 'enfermeiro_info' });
    this.belongsTo(models.User, { foreignKey: 'paciente', as: 'paciente_info' });
    this.belongsTo(models.Vacina, { foreignKey: 'vacina', as: 'vacina_info' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Agendamento;
