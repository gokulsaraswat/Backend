const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"postgres",
	"postgres",
	"123456789",
	{
		host:"localhost",
		dialect: "postgres" ///when you want to change any other database then change this one line only
	}
)

sequelize.sync();
{async () => {
	try{
		await sequelize.authenticate(); // Try kar db se connect hone ka
		console.log("Connection established with DB") //if done
	}catch(err){
		console.log("Error connecting to DB")
	}
}}

module.exports = sequelize;