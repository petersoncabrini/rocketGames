module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco',{
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        logradouro: DataTypes.STRING,
        numero: DataTypes.STRING,
        CEP: DataTypes.STRING,
        bairro: DataTypes.STRING,
        complemento: DataTypes.STRING
    }, {
        tableName: 'endereço',
        timestamps: false
    })

    return Endereco;
}
