import { Sequelize } from 'sequelize';

const db = new Sequelize('animalshelter', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;