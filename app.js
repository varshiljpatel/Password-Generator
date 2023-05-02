import * as dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { nanoid } from 'nanoid';
import fs from 'fs';

// use environment variables
dotenv.config();

const app = express();
app.use(morgan('dev'));

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set view engine
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');


app.route('/')
.get(async (req, res) => {
    try {
        console.log('getting');
        await res.render('index', { password });
        console.log('getted');
    } catch (error) {
        console.log(error.message);
    }
})
app.route('/')
.post(async ({ body }, res) => {
    try {
        password = await nanoid(body.input);
        console.log('posting');
        await res.render('index', { password });
        console.log('posted');
        // res.redirect(password)
        console.log(password);
    } catch (error) {
        console.log(error.message);
    }
});

var password = ''
// set port
app.set('PORT', process.env.PORT || 8080);

app.listen(app.get('PORT'), () => {
    console.log('listening on port', app.get('PORT'));
});