const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const user = db.User;

class UserController {
  static buscarUsuarios = async (req, res) => {
    try {
      const Usuario = await user.findAll({
        attributes: ["usuario", "nome", "email"],
      });
      res.status(200).json(Usuario);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static editarUsuario = async (req, res) => {
    try {
      const Usuario = await user.update(req.body, {
        where: {
          usuario: req.params.id,
        },
      });
      res.status(200).json(Usuario);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static buscarumUsuario = async (req, res) => {
    const { usuario } = req.body;
    try {
      const usuarioId = await user.findOne({
        where: {
          usuario: usuario,
        },
      });
      res
        .status(200)
        .json({ usuario: usuarioId.usuario, email: usuarioId.email });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static criarUsuario = async (req, res) => {
    try {
      const { usuario, nome, email, senha } = req.body;
      const salt = await bcrypt.genSalt(12);
      const senhaHash = await bcrypt.hash(senha, salt);
      const Usuario = await user.create({
        usuario,
        nome,
        email,
        senha: senhaHash,
      });
      res.status(200).json(Usuario);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static autenticarUsuario = async (req, res) => {
    try {
      const { usuario, senha } = req.body;

      const dadosUsuario = await user.findOne({
        where: {
          usuario: usuario,
        },
      });

      const checkSenha = await bcrypt.compare(senha, dadosUsuario.senha);
      console.log(checkSenha);

      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          usuario: dadosUsuario.usuario,
        },
        secret
      );

      res.status(200).json({ Autenticado: "Autenticado com Sucesso", token });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = UserController;
