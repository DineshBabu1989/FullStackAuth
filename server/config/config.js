module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: "test_database",
    host: process.env.PGHOST,
    dialect: "postgres"
  }
}