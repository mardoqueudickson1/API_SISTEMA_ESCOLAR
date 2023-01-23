import Aluno from "../models/aluno";

class AlunoController {

    //Cria aluno
    async store(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body)
            res.json(novoAluno)
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


    //Atualizar 
    async update(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }
        } catch (error) {
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