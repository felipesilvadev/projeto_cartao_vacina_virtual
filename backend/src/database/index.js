import Sequelize from 'sequelize';

import User from '../app/models/User';
import Vacina from '../app/models/Vacina';
import Agendamento from '../app/models/Agendamento';
import Ministramento from '../app/models/Ministramento';

import databaseConfig from '../config/database';

const models = [User, Vacina, Agendamento, Ministramento];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
