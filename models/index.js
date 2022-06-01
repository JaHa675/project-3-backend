const Character = require("./Character");
const User = require("./User");

User.hasMany(Character, { foreignKey: 'id', onDelete: 'SET NULL' });
Character.belongsTo(User, { foreignKey: 'id' });

module.exports = { Character, User };