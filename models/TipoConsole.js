module.exports = (sequelize, DataTypes) => {
    const TipoConsole = sequelize.define('TipoConsole',{
        tipoconsole: DataTypes.STRING,
    }, {
        tableName: 'tipoconsole',
        timestamps: false
    })
    TipoConsole.belongsTo(models.produto, {foreignKey: 'tipoconsole_id'})
  
    return TipoConsole;
}