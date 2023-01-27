import Professor from "../models/professor";


class ProfessorController {

    //Cadastra professor na base de dados
    async store(req, res) {
        try {

            const profesor = await Professor.create(req.body)
            res.json(profesor);
        } catch (e) {

            console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAA ${e}`)
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }


    //Listar professor
    async index(req, res) {

        try {
            const professor = await Professor.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email', 'classe', 'cadeira'],

            });
            res.json(professor)
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })
        }


    }


    //Atualizar 
    async update(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado']
                })
            }

            const profesor = await Professor.findByPk(req.params.id);
            const novoProf = await profesor.update(req.body);
            res.json(novoProf);
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

            const profesor = await Professor.findByPk(req.params.id);

            if (!profesor) {
                return res.status(400).json({
                    errors: ['profesor não existe.']
                })
            }
            
            await profesor.destroy();
            return res.json({
                success: [`Profesor ${profesor.nome} apagado com sucesso`]
            });


        } catch (e) {
            return res.json(e.errors.map((err) => err.message))
        }
    }


}


export default new ProfessorController();
