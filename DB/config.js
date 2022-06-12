const mongoose = require('mongoose');

module.exports = () => {
    /*
        mongodb+srv://root:<password>@cluster0.jztuj.mongodb.net/?retryWrites=true&w=majority
    */
    mongoose.connect('mongodb+srv://cluster0.jztuj.mongodb.net/', {
        dbName: 'RestAPI_youtube',
        user: 'root',
        pass: 'root',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB Connected...');
    }).catch(err => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log("Mongoose connected to db...");
    });

    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose connection is disconnected...");
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log("Mongoose connection is disconnected due to app termination...");
            process.exit(0);
        });
    });
}