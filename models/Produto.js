module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: DataTypes.STRING,
        preco: DataTypes.STRING,
    }, {
        tableName: 'produto',
        timestamps: false
    })

    Produto.associate = (models) => {

        Produto.belongsTo(models.TipoConsole || models.TipoProduto, { foreignKey: 'tipoconsole_id', foreignKey: 'tipoproduto_id' })
        Produto.belongsToMany(models.Pedidos, { through: 'pedidos_has_produto', foreignKey: 'pedidos_id' })
    }


    return Produto;
}
