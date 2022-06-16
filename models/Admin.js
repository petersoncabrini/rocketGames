module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin',{
        login: DataTypes.STRING,
        nome: DataTypes.STRING,
        senha: DataTypes.STRING,
    }, {
        tableName: 'admin',
        timestamps: false
    })


    return Admin;
}