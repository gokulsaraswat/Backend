mkdir THA_11
cd THA_11
npx express-generator
npm i && SET DEBUG=tha-11:* & npm start
//npm install and run command
actuall database logic is written in controllers
we use sequelize is known as ORM we will use thing we can use anywhere
npm install --save sequelize
node bcrypt (npm i -s bcrypt)
then go in postman 
https://localhost:3000/register and with body of
{ "gmail" : "name@name.name",
 "password" : "temporary",
"confirmPassword" }  Enter send 

