import Aluno from "../models/aluno";


class HomeController {
    async index(req, res) {

        const novoAluno = await Aluno.create({
            numero: 12345,
            nome: 'Pedro',
            sobrenome: 'Dickson',
            email: 'teste@teste.com',
            idade: 23,
            curso: 'CFB',
            classe: 12,
            password: 'palavra',
        })

        res.json(novoAluno)
    }
}


export default new HomeController();