module.exports = (sequelize, DataTypes) => {
    const TipoProduto = sequelize.define('TipoProduto',{
        tipoproduto: DataTypes.STRING,
    }, {
        tableName: 'tipoproduto',
        timestamps: false
    })
    

    return TipoProduto;
}
