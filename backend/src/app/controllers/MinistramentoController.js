import Ministramento from '../models/Ministramento';
import User from '../models/User';
import Vacina from '../models/Vacina';

class MinistramentoController {
  async store(req, res) {
    const paciente = await User.findOne({ where: { cns: req.body.paciente }});
    const vacina = await Vacina.findOne({ where: { nome: req.body.vacina }});

    if(!paciente || !vacina) {
      return res.status(400).json({ message: 'Dados não encontrados!' });
    }

    const ministramento = await Ministramento.create({
      data: req.body.data,
      enfermeiro: req.userId,
      paciente: paciente.id,
      vacina: vacina.id,
      dose: req.body.dose,
    });

    return res.json(ministramento);
  }

  async findAll(req, res) {
    const ministramentos = await Ministramento.findAll({
      where: { paciente: req.userId, status: true },
      order: ['data'],
      include: [
        {
          model: User,
          as: 'enfermeiro_info',
          attributes: ['nome'],
        },
        {
          model: User,
          as: 'paciente_info',
          attributes: ['nome'],
        },
        {
          model: Vacina,
          as: 'vacina_info',
          attributes: ['nome'],
        }
      ]
    });

    if (!ministramentos) {
      return res.status(400).json({ message: 'Nenhum ministramento encontrado!' });
    }

    return res.json(ministramentos);

  }

  async find(req, res) {
    const faixa = req.params.faixa;

    const ministramentos = await Ministramento.findAll({
      where: { paciente: req.userId, status: true },
      order: ['data'],
      include: [
        {
          model: User,
          as: 'enfermeiro_info',
          attributes: ['nome'],
        },
        {
          model: User,
          as: 'paciente_info',
          attributes: ['nome'],
        },
        {
          model: Vacina,
          as: 'vacina_info',
          where: { faixa: faixa },
          attributes: ['nome'],
        }
      ]
    });

    if (!ministramentos) {
      return res.status(400).json({ message: 'Nenhum ministramento encontrado!' });
    }

    return res.json(ministramentos);
  }

  async update(req, res) {
    return res.send();
  }

  async delete(req, res) {
    await Ministramento.destroy({ where: { id: req.params.id }});

    return res.send();
  }
}

export default new MinistramentoController();
