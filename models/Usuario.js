module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        CPF: DataTypes.STRING,
        email: DataTypes.CHAR,
        endereço: DataTypes.STRING,
        telefone: DataTypes.STRING,
        data_de_nascimento: DataTypes.STRING,
        senha: DataTypes.STRING
    }, {
        tableName: 'usuario',
        timestamps: false
    })
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Endereco, {foreignKey: 'usuario_id'})
    }
    return Usuario;
}
