import Aluno from "../models/aluno";

class AlunoController {

  //Cria aluno
  async store(req, res) {

    const aleatorio = Math.floor(Math.random() * (1000 + 2000) + 1000)

    try {

      //Gera número aleatório para cda estudante com prefixo do ano atual
      const aleatorio = Math.floor(Math.random() * (10 + 20) + 10)
      const aleatorio2 = Math.floor(Math.random() * (0 + 9) + 0)

      const data = new Date
      const ano = data.getFullYear();
      const segundos = data.getSeconds();
      let numero = [ano, aleatorio, segundos].join('');

      if (numero.length < 8) numero = [ano, aleatorio, aleatorio2, segundos].join('');



      //Pega dados no corpo do campo
      let novoAluno = req.body;
      novoAluno['numero'] = numero

      const criaAluno = await Aluno.create(novoAluno)

      res.json(criaAluno)
      console.log(` ALEATORIOOOO: ${numero}`)

    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }

  }


  //Listar alunos
  async index(req, res) {

    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],

    });
    res.json(alunos)

  }


  //UPDATE
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

      const novosDados = await aluno.update(req.body)

      return res.json(novosDados);
    } catch (e) {
      return res.json(e.errors.map((err) => err.message))
    }
  }



  //DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }
      await aluno.destroy();
      return res.json({
        success: [`Aluno ${aluno.nome} apagado com sucesso`]
      });


    } catch (e) {
      return res.json(e.errors.map((err) => err.message))
    }
  }



}


export default new AlunoController();