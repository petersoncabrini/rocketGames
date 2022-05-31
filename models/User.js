const fs = require ('fs')

const User = {
    fileName: './database/users.json',

    // Criando usuario salvando na base de dados (users.json)
    create: function (userData) {
        let allUsers = this.getUsers()
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser)
        //JSON.stringify converte o array allUsers para JSON.
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ''))
        return newUser
    },

    // adicionar ID auto increment
    generateId: function(){
        let allUsers = this.getUsers()
        // seleciona o ultimo registro guardado em um array
        let lastUser = allUsers.pop()
        if (lastUser) {
            return lastUser.id + 1
        } else {
            return 1
        }
    },

    //Exibe todos os usuarios salvos em users.json (Corresponde ao SELECT * FROM Users)
    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    // Buscar usuario a partir do seu email (processo de login)
    findUserByEmail: function(email){
        let allUsers = this.getUsers()
        let userFound = allUsers.find(oneUser => oneUser.email === email)
        return userFound
    },

    // filtra o arquivo users.json por id
    findUserById: function(id){
        let allUsers = this.getData()
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },
   
} 

module.exports = User

