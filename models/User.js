import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import { compare, hash } from "bcrypt";

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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        required: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    is_online: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    image_url: {
        type: DataTypes.STRING,
        defaultValue: null
    }
}, {
    hooks: {
        beforeCreate: async data => {
            data.email = data.email.toLowerCase();
            data.password = await hash(data.password, 10);
            return data;
        },
        beforeUpdate: async data => {
            if (data.email) {
                data.email = data.email.toLowerCase();
            }
            if (data.password) {
                data.password = await hash(data.password, 10);
            }
            return data;
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

export default User;