const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://chandubopche:5UUOcoWTVqGIjTPc@cluster0.exuybjn.mongodb.net/MailBox?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true, // It is used to parse and interpret the MongoDB connection string in a way that is compatible with the MongoDB Node.js driver's updated URL parser.
			}
		);
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.error(error);
	}
};

module.exports = connectDB;
