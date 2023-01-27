import Curso from "../models/curso";
import Professor from "../models/professor";



class CursoController {


    //Cadastra curso na base ded dados
    async store(req, res) {
        try {

            const novoCurso = await Curso.create(req.body)
            res.json(novoCurso);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }


    //Listar todos os cursos
    async index(req, res) {
        try {
            const curso = await Curso.findAll({
                attributes: ['id', 'nome'],
                order: [['id', 'DESC'], [Professor, 'id', 'DESC']],

                include: {
                    model: Professor,
                    attributes: ['id', 'nome', 'sobrenome', 'email']
                }
            });
            res.json(curso);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }


    //Deleta curso
    async delete(req, res) {
        try {
            if (!req.params) {
                return res.status(400).json({
                    errors: ['ID inválido']
                })
            }

            const curso = await Curso.findByPk(req.params.id);

            await curso.destroy();
            return res.json({
                success: [`Curso ${curso.nome} apagado com sucesso`]
            })



        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })
        }
    }



    //Atualiza curso
    async update(req, res) {
        try {
            if (!req.params) {
                return res.status(400).json({
                    errors: ['ID inválido']
                })
            }

            const curso = await Curso.findByPk(req.params.id);

            const novoCurso = await curso.update(req.body);
            return res.json(novoCurso);

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })

        }
    }
}

export default new CursoController;