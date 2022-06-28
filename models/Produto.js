module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto',{
        nome: DataTypes.STRING,
        preco: DataTypes.STRING,
    }, {
        tableName: 'produto',
        timestamps: false
    })

  Produto.associate = (models) => {
        Produto.belongsTo(models.TipoConsole || models.TipoProduto, {foreignKey: 'tipoconsole_id', foreignKey: 'tipoproduto_id'})
        Produto.belongsToMany(models.pedidos, {
            through:'pedidos_has_pedidos',
            foreignKey:'produto_idproduto',
            otherKey:'pedidos_idpedidos'

        })
    }

    return Produto;
}
