import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import PassportControl from './config/PassportControl';
// import mongoose from 'mongoose';
import * as Routes from './routes';

// App Bootstrapping

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

const configuredPassport = new PassportControl(passport);

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

const routes = [



];

app.get('/', (req, res) => {

    res.send('404');

});

app.listen(process.env.PORT);
