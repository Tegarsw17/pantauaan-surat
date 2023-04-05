const dotenv = require('dotenv')

//${process.env.NODE_ENV}
dotenv.config({path: `.env.${process.env.NODE_ENV}`}) 

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: parseInt(process.env.DB_PORT, 10),
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
}