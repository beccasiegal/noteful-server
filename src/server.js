const knex = require('knex');
const app = require("./app");
const { PORT, DATABASE_URL } = require('./config')
console.log("Database url", DATABASE_URL);
const db = knex({
	client: 'pg',
	connection: {
	host: 'ec2-18-209-187-54.compute-1.amazonaws.com',
	user: 'biiluakxlfaobs',
	password: '1271cba11e542174f480ca512a51c3053e4b116565cff86909f1802f6cf8b4ee',
	database: 'd7sf6uk349u75g',
	ssl: true}
})

app.set('db', db)

app.listen(PORT, () => {
	console.log(`Server listening at localhost:${PORT}`);
});
