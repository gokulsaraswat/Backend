const { DataType, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
	fullName: {
		type: DataTypes.STRING,
		allowNULL:false
	},
	email:{
		type: DataTypes.STRING,
		allowNULL: false
	},
	password: {
		type: DataTypes.STRING,
		allowNULL: false
	}
});
//these are the database checks making table with checks 

module.exports = User;