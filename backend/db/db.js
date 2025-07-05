import mongoose from 'mongoose';

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log(' Connected to DB'))
    .catch((e) => console.error(' DB connection error:', e));
}

export default connectToDb;