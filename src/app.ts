import express, { Express } from 'express';
import dotenv from 'dotenv';
import { getLocationWeather } from './routes/weather';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import path from 'path';

dotenv.config();

const app: Express = express()

const PORT = process.env.PORT

const swaggerDocument = yaml.load(path.resolve('./swagger.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v2/weather/:location', getLocationWeather);

app.listen(PORT, () => {
  console.log(`Yara Works API listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.');
})