'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		fullname: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
  });

  return User;
};