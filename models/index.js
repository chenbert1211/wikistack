const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

db.define("Page", {
    title: Sequelize.STRING,
    slug: Sequelize.TEXT,
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN,
})

db.define("User", {
    name: Sequelize.STRING,
    email: Sequelize.TEXT,
})



module.exports = {
  db
}