const knex = require("knex");

const knexfile = require("./knexfile");

const env = process.env.ENV || "development";
console.log(env);
const configOptions = knexfile[env];
console.log(configOptions);
module.exports = knex(configOptions);
