import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'jaqueline',
      sobrenome: 'lacerda',
      email: 'jaqueline@gamil.com',
      idade: 23,
      peso: 56,
      altura: 170,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
