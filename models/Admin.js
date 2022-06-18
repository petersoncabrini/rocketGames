module.exports = (sequelize, DataTypes) => {
    // O método define() nos permite definir atribuições entre um modelo e uma tabela
    // O primeiro é um alias que identifica o model, 
    // o segundo é um objeto com a configuração das colunas do banco de dados,
    // e o terceiro é outro objeto com configurações adicionais
    const Admin = sequelize.define('Admin',{
        login: DataTypes.STRING,
        nome: DataTypes.STRING,
        senha: DataTypes.STRING,
    }, {
        tableName: 'admin',
        timestamps: false
    })

    // O que define() retorna será armazenado em uma variável com o nome do model, para posteriormente ser retornado pela função que criamos.
    return Admin;
}