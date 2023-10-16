import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const connectToDb = () => {
	mongoose.connect(
		`mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.ll0vlnd.mongodb.net/?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
		},
	);
};

export default connectToDb;
