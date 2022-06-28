module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define('Pedidos',{
        data_pedido: DataTypes.DATE,
        valor_total: DataTypes.STRING,
    }, {
        tableName: 'pedidos',
        timestamps: false
    })

   Pedidos.associate = (models) => {
        Pedidos.belongsTo(models.Usuario, {foreignKey: 'usuario_id'})
        Pedidos.belongsToMany(models.Produto, {
            through:'pedidos_has_pedidos',
            foreignKey:'produto_idproduto',
            otherKey:'pedidos_idpedidos'

        })
    }

    return Pedidos;
}
