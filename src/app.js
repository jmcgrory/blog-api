import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
// App Bootstrapping
var app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(process.env.PORT);
