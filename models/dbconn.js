// db/dbconn.js
import mongoose from 'mongoose';

 const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};


export default connectDB