const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:123456@localhost:5432/dsgn");

sequelize
	.authenticate()
	.then(() => {
		// eslint-disable-next-line
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		// eslint-disable-next-line
		console.error('Unable to connect to the database:', err);
	});
