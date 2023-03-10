import Admin from '../models/admin';

class AdminController {

    //Cria admin
    async store(req, res) {
        try {
            const novoAdmin = await Admin.create(req.body)
            res.json(novoAdmin);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }


    //Listar todos os admins
    async index(req, res) {
        try {
            const admin = await Admin.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email']
            });
            res.json(admin);
        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.message)
            })
        }
    }


    //Deleta admin
    async delete(req, res) {
        try {
            if (!req.params) {
                return res.status(400).json({
                    errors: ['ID inválido']
                })
            }

            const admin = await Admin.findByPk(req.params.id);

            await admin.destroy();
            return res.json({
                success: [`admin ${admin.nome} apagado com sucesso`]
            })



        } catch (e) {
            res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })
        }
    }


    //Atualiza admin
    async update(req, res) {
        try {
            if (!req.params) {
                return res.status(400).json({
                    errors: ['ID inválido']
                })
            }

            const admin = await Admin.findByPk(req.params.id);

            const novoAdmin = await admin.update(req.body);
            return res.json(novoAdmin);

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.massage)
            })

        }
    }



}


export default new AdminController();