import Admin from "../models/admin";
import Jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {

    try {
      const { email = '', password = '' } = req.body

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas']
        })
      }


      const admin = await Admin.findOne({ where: { email } })

      if (!admin) {
        return res.status(401).json({
          errors: ['Usuário não existe!']
        })
      }

      if (!(await admin.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida.']
        })
      }


      const { id } = admin
      const token = Jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      })

      res.json({ token, admin: { nome: admin.nome, id, email } })
    } catch (e) {
      console.log(e)
    }


  }
}


export default new TokenController();


