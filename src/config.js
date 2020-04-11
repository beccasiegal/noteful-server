module.exports = {
	PORT: process.env.PORT || 8000,
	NODE_ENV: process.env.NODE_ENV || "development",
	DATABASE_URL:
		process.env.DATABASE_URL ||
		DATABASE_URL="postgresql://biiluakxlfaobs:1271cba11e542174f480ca512a51c3053e4b116565cff86909f1802f6cf8b4ee@ec2-18-209-187-54.compute-1.amazonaws.com/d7sf6uk349u75g",
	TEST_DATABASE_URL:
		process.env.TEST_DATABASE_URL ||
		"postgresql://rebecca@localhost/noteful-test",
	
};
