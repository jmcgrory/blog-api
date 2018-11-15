import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import PassportControl from './config/PassportControl';
// import mongoose from 'mongoose';
// App Bootstrapping
var app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
var configuredPassport = new PassportControl(passport);
// Mongoose
/*
mongoose.connect({
    database: "mongodb://user_jamie_mcgrory:DATABASE.mlab.com:33895/jmcgrory",
    secret: "SECRET",
}, { useMongoClient: true });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to DB`);
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});*/
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(process.env.PORT);
