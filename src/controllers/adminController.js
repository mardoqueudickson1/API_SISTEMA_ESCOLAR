import Admin from '../models/admin';

class AdminController {

    //Cria aluno
    async store(req, res) {
        try {
            const novoAdmin = await Admin.create(req.body)
            res.json(novoAdmin);
        } catch (e) {

            console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAA ${e}`)
            res.status(400).json({
            errors: e.errors.map((err) => err.message)
            })
        }
    }

    //Listar alunos
    async index(req, res) {

        const admin = await Admin.findAll();
        res.json(admin);

    }


    

}


export default new AdminController();