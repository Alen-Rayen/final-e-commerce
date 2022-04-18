/* const { comentarios } = require("../../controllers/usuarioController"); */

module.exports = (sequelize, DataTypes) => {

    let cols = {
       id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        timestamps: false
       },
       nombre: {
        type: DataTypes.STRING(85),
        timestamps: false
    }
    };

    let config = {
        tableName: 'categorias',
        timestamps: false
    };

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate = models => {
        Categoria.hasMany(models.Producto, {
            as: 'products',
            foreignKey: 'categoria_id'
        })
    }

    return Categoria;

}