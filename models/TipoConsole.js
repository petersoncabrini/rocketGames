module.exports = (sequelize, DataTypes) => {
    const TipoConsole = sequelize.define('TipoConsole',{
        tipoconsole: DataTypes.STRING,
    }, {
        tableName: 'tipoconsole',
        timestamps: false
    })


    return TipoConsole;
}