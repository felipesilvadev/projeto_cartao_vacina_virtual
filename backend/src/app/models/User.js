import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      data_nascimento: Sequelize.DATE,
      rg: Sequelize.INTEGER,
      cpf: Sequelize.STRING,
      cns: Sequelize.INTEGER,
      coren: Sequelize.INTEGER,
      rua: Sequelize.STRING,
      numero_casa: Sequelize.INTEGER,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },
    {
      sequelize
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;


