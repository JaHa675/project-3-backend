const Character = require("./Character");
const User = require("./User");

User.hasMany(Character);
Character.belongsTo(User);

module.exports = { Character, User };