const knex = require('knex');
const app = require("./app");
const { PORT, DATABASE_URL } = require('./config')
console.log("Database url", DATABASE_URL);
const db = knex({
	client: 'pg',
	connection: DATABASE_URL,
	ssl: true
})

app.set('db', db)

app.listen(PORT, () => {
	console.log(`Server listening at http://ec2-18-209-187-54.compute-1.amazonaws.com:${PORT}`);
});
