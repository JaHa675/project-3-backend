const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");
class User extends Model {
    async checkPassword(password) {
        try {
            const data = await compare(password, this.password);
            return data;
        } catch (err) {
            return null;
        }
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
}, {
    hooks: {
        beforeCreate: async data => {
            data.password = await bcrypt.hash(data.password, 10);
            return data;
        },
        beforeUpdate: async data => {
            if (data.password) {
                data.password = await bcrypt.hash(data.password, 10);
            }
            return data;
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;