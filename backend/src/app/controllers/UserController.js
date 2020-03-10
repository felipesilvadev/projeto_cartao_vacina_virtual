import Sequelize from 'sequelize';
import User from '../models/User';

const Op = Sequelize.Op;

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email:req.body.email } });

    if(userExists) {
      return res.status(400).json({ message: 'Usuário já cadastrado!' })
    }

    const user = await User.create(req.body);

    return res.json({ user });
  }

  async findaAll(req, res) {
    const users = await User.findAll({ where: { coren: { [Op.not]: null}, provider: false } });

    if (!users) {
      return res.status(400).json({ message: 'Nenhum usuário encontrado!' });
    }

    return res.json(users);
  }

  async find(req, res) {
    const user = await User.findOne({ where: { cns:req.params.cns } });

    if (!user) {
      return res.status(400).json({ message: 'Nenhum usuário encontrado!' });
    }

    return res.json(user);
  }

  async update(req, res) {
    const { oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha inválida!' });
    }

    const newUser = await user.update(req.body);

    return res.json(newUser);
  }

  async delete(req, res) {
    await User.destroy({ where: { cns: req.params.cns } });

    return res.send();
  }

  async auth(req, res) {
    const user = await User.findByPk(req.params.id);

    const newUser = await user.update({provider: true});

    return res.json(newUser);
  }

  async delete(req, res) {
    await User.destroy({ where: { cns: req.params.cns } });

    return res.send();
  }
}

export default new UserController();
