const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {

}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Character_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    class:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    level:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
});

module.exports = Character;