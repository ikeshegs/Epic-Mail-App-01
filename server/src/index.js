import express from 'express';
import bodyParser from 'body-parser';
<<<<<<< HEAD
import router from 'routes/index';
=======
import router from './routes/index';
>>>>>>> ea3be1aabed836524539835218474d0c91eecce4
import cors from 'cors';

// initialize express
const app = express();

// configure bodyParser for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// use router
app.use(router);

const PORT = process.env.PORT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      || 3000;
app.listen(PORT)
console.log('app running on port', PORT);

module.exports = app;
