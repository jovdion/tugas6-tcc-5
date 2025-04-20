import { Sequelize } from "sequelize";

const db = new Sequelize("api_catatan", "root", "",{
    host: "34.171.244.192",
    dialect: "mysql",
    logging: console.log,
});

// crud api = nama db

export default db;