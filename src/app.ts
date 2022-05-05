import express, { Express } from 'express';
import dotenv from 'dotenv';
import { getLocationWeather } from './routes/weather';

dotenv.config();

const app: Express = express()

const PORT = process.env.PORT

app.get('/weather/:location', getLocationWeather);

app.listen(PORT, () => {
  console.log(`Yara Works API listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.');
})