import Vacina from '../models/Vacina';

class VacinaController {
  async store(req, res) {
    const vacina = await Vacina.create(req.body);

    return res.json({ vacina });
  }

  async find(req, res) {
    const vacinas = await Vacina.findAll({ where: { faixa: req.params.faixa }});

    if (!vacinas) {
      return res.status(400).json({ message: 'Nenhuma vacina encontrada!' });
    }

    return res.json(vacinas);
  }

  async update(req, res) {
    return res.send();
  }

  async delete(req, res) {
    await Vacina.destroy({ where: { nome: req.params.nome }});

    return res.send();
  }
}

export default new VacinaController();
