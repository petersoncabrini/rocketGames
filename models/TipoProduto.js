module.exports = (sequelize, DataTypes) => {
    const TipoProduto = sequelize.define('TipoProduto',{
        tipoproduto: DataTypes.STRING,
    }, {
        tableName: 'tipoproduto',
        timestamps: false
    })
    TipoProduto.belongsTo(models.produto, {foreignKey: 'tipoproduto_id'})

    return TipoProduto;
}
