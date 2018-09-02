import 'babel-polyfill';
import express from 'express';
import path from 'path';
import tickets from 'ticket.json';

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));
app.get('/tickets', (req, res) => res.send(tickets));

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}.`));
