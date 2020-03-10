import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Vacina extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      descricao: Sequelize.STRING,
      doses: Sequelize.INTEGER,
      faixa: Sequelize.STRING,
    },
    {
      sequelize
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Vacina;


