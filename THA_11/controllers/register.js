const User = require('../models/user');
const bcrypt = require('bcrypt');
/** check if email already exists 
 * password hash 
 * email lowercase
 * save
 */
const saltRounds = 10
const register = async (req, res) => {
	const { email , password} = req.body;
	try {
		const alreadyExist = await User.findOne ({where:{email}});
		if(alreadyExist){
			res.status(401).send("Email already exists");
		}
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password,salt);
		// bcrypt.hash(myPlaintextPassword,saltRounds,function(err,hash){

		// });
		const newUser = new User ( { email:email.toLowerCase(), password:hash,fullName:"gokul"})
		const savedUser = await newUser.save();
		res.status(201).send(savedUser) ///+ "User registered successfully")
	}
	catch (err) {
		console.error(err);
		res.status(500).send("Something went wrong")
	}
}

module.exports = register;