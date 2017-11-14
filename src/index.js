import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './renderer';

const site1 = express();
site1.use(express.static('public'));

site1.get('/', (req, res) => {
    res.redirect('0/index.html');
});

site1.listen(3000, () => {
    console.log('Listening on port 3000');
});

const site2 = express();
site2.use(express.static('public'));

site2.get('/', (req, res) => {
    res.redirect('1/index.html');
});

site2.listen(3001, () => {
    console.log('Listening on port 3001');
});

const site3 = express();
site3.use(express.static('public'));

site3.get('/', (req, res) => {
    res.redirect('2/index.html');
});

site3.listen(3002, () => {
    console.log('Listening on port 3002');
});