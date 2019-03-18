import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import yaml from 'yamljs';
import swagger from 'swagger-ui-express';
import router from './routes/index';

const swaggerDoc = yaml.load(`${__dirname}/../../swagger.yaml`);

// initialize express
const app = express();

// configure bodyParser for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// use router
app.use(router);

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

app.get('/', (req, res) => {
  return res
    .status(200)
    .send('Welcome to Epic Mail App. A Email messaging platform');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log('app running on port', PORT);

module.exports = app;
