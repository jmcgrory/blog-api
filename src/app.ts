import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import PassportControl from './config/PassportControl';
import mongoose from 'mongoose';
import * as Routes from './routes';
import * as jwt from 'jsonwebtoken'; // TODO: PLACEHOLDER TOKENIZR
import { ErrorNotice, SuccessNotice } from './notices';

// App Bootstrapping

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

// Passport Opts
app.use(passport.initialize());
// app.use(passport.session()); TODO: Not necessary?
new PassportControl(passport);

/* PLACEHOLDER TOKENIZR */
// const token = jwt.sign(
//     { lol: 'okay' }, // TODO: Make Unique for User...
//     process.env.PASSPORT_SECRET,
//     { expiresIn: 7200000 }, // 2 Hours
// );
// console.log(token);

// Mongoose

const connection = `mongodb://${process.env.DB_HOST}:${process.env.DB_URI}/jmcgr`;

mongoose.connect(connection, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log(`> mongoose connected on ${process.env.DB_URI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const routes = [
    Routes.ArticleRoute,
    Routes.GroupRoute,
    Routes.UserRoute,
    Routes.MediaRoute,
];

routes.forEach((Route) => {
    const url = Route.base;
    const router = new Route().getRouter();
    app.use(url, router);
});

app.get('/ping', (req, res) => {
    res.status(200).json(new SuccessNotice('Application is running.'));
});

app.get('*', (req, res) => {
    res.status(404).json(new ErrorNotice(
        '404 - This Route Does Not Exist',
        1000,
        'You have attempted to access a route which does not exist.'
    ).toObject());
});

app.listen(process.env.PORT);

console.log(`[API running on ${process.env.PORT}]`);
