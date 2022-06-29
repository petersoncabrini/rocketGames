module.exports = (sequelize, DataTypes) => {
    const TipoProduto = sequelize.define('TipoProduto', {
        tipoproduto: DataTypes.STRING,
    }, {
        tableName: 'tipoproduto',
        timestamps: false
    })

    TipoProduto.associate = (models) => {
        TipoProduto.hasMany(models.Produto, { foreignKey: 'tipoproduto_id' })
    }
    return TipoProduto;
}
