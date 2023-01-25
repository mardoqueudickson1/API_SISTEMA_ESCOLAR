import Professor from "../models/professor";


class ProfessorController {

    //Cria profesor
    async store(req, res) {

        try {
            const novoProfessor = await Professor.create(req.body)
            res.json(novoProfessor)
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })
        }
    }


    //Lista todos os professores
    async index(req, res) {
        try {
            const prof = await Professor.findAll({
                attributes: ['id', 'nome', 'sobrenme', 'email', 'cadeira', 'classe']
            })
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })
        }
    }

}


export default new ProfessorController();
