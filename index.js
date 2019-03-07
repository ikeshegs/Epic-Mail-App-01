import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/index';
import cors from 'cors';

// initialize express
const app = express();

// use router
app.use(router);

// configure bodyParser for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);


const PORT = process.env.PORT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      || 3000;
app.listen(PORT)
console.log('app running on port', PORT);

