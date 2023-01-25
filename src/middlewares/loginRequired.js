import Jwt from "jsonwebtoken";
import Admin from "../models/admin";



export default async (req, res, next) => {

    const { authorization } = req.headers;

    //Verifica se usuário está ou não logado
    if (!authorization) {
        return res.status(400).json({
            errors: ['Login required']
        })
    }

    const [, token] = authorization.split(' ');

    try {
        const dados = Jwt.verify(token, process.env.TOKEN_SECRET);

        const { id, email } = dados;

        const admin = await Admin.findOne({
            where: {
                id,
                email
            }
        })

        if (!admin) {
            return res.status(400).json({
                errors: ['Usuário inválido']
            });
        }

        req.adminId = id;
        req.adminEmail = email;

        next()

    } catch (e) {
        console.log(`AAAAAAAAAAAAAAAAAAAAAAaaa: ${e}`)
        return res.status(401).json({
            errors: ['Token expirado ou inválido']
        })
    }


}