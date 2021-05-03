// import dependencies
import express from 'express';
import cors from 'cors';
import heroes from '../data/heroes';
// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('Server says what?');
});

app.get('/api/heroes', (req, res) => {
  res.json(heroes);
});

app.get('/api/heroes/1', (req, res) => {
  res.json(heroes[0]);
});
export default app; 