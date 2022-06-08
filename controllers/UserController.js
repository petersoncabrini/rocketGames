const { validationResult } = require('express-validator');
const User = require('../models')
const bcrypt = require('bcryptjs')

const UserController = {
    login: function (req, res) {
        res.render('login');
    },
    criarConta: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            // Verificando se o email ja esta cadastrado, e caso exista, enviando erro pra view.
            let userExists = User.findUserByEmail(req.body.email)
            if (userExists) {
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Este email ja esta registrado'
                        }
                    },
                    old: req.body
                })
            }
            // Criando o usuario, e criptografando o req.body.password.
            let userCreate = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
            }
            // Invocando o metodo create da model, e fazendo um push ao JSON com o usuario criado.
            let userCreated = User.create(userCreate)
            res.render('painel')
            // Erros de validacao dos campos.
        } else {
            res.render('login', { errors: errors.mapped(), old: req.body })
        }
    },
    entrarConta: (req, res) => {
        let errors = validationResult(req);

        // Caso o campo email esteja vazio ao validar, retorna undefined e exibe o erro
        let userLogin = User.findUserByEmail(req.body.email)
        if (userLogin === undefined) {
            res.render('login', {
                errors: {
                    ERRO: {
                        msg: 'Dados incorretos, tente novamente!'
                    }
                }
            })
        }
        // Verifica se a senha enviada no formulario e igual a senha salva no banco (retorna booleano)
        let passwordVerified = bcrypt.compareSync(req.body.password, userLogin.password)
        req.session.userLogged = userLogin

        // Se a validacao estiver ok, o usuario for encontrado no banco e o passwordVerified retornar true, inicia a session e renderiza a view
        if (errors.isEmpty() && userLogin && passwordVerified) {
            res.render('painelLogado', {
                userLogged: req.session.userLogged
            });
            
            // req.session.emailUsuario = 'brucebat@gmail.com';
            // req.session.nomeUsuario = 'Bruce Wayne';
            // req.session.idUsuario = '1';
           
        } else {
            res.render('login', { errors: errors.mapped(), old: req.body })
        }
        console.log(req.body)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('home');
    }
}

module.exports = UserController