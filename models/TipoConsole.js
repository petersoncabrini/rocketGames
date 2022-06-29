module.exports = (sequelize, DataTypes) => {
    const TipoConsole = sequelize.define('TipoConsole', {
        tipoconsole: DataTypes.STRING,
    }, {
        tableName: 'tipoconsole',
        timestamps: false
    })

    TipoConsole.associate = (models) => {
        TipoConsole.hasMany(models.Produto, { foreignKey: 'tipoconsole_id' })
    }
    return TipoConsole;
}
