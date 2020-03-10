import Agendamento from '../models/Agendamento';
import User from '../models/User';
import Vacina from '../models/Vacina';

class AgendamentoController {
  async store(req, res) {
    const paciente = await User.findOne({ where: { cns: req.body.paciente }});
    const vacina = await Vacina.findOne({ where: { nome: req.body.vacina }});

    if(!paciente || !vacina) {
      return res.status(400).json({ message: 'Dados não encontrados!' });
    }

    const agendamento = await Agendamento.create({
      data: req.body.data,
      enfermeiro: req.userId,
      paciente: paciente.id,
      vacina: vacina.id,
      dose: req.body.dose,
    });

    return res.json(agendamento);
  }

  async find(req, res) {
    const agendamentos = await Agendamento.findAll({
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

    if (!agendamentos) {
      return res.status(400).json({ message: 'Nenhum agendamento encontrado!' });
    }

    return res.json(agendamentos);

  }

  async delete(req, res) {
    await Agendamento.destroy({ where: { id: req.params.id }});

    return res.send();
  }
}

export default new AgendamentoController();
