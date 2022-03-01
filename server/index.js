const express = require('express');
const path = require('path');

const app = express();
const apiCache = require('apicache');
const axios = require('axios');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { ping, getTags } = require('./controller/controller');

app.use(bodyParser.json());
app.use(morgan('dev'));

const cache = apiCache.middleware;

app.use(express.static(path.join(__dirname, '../client/public')));

const PORT = 3001;

app.get('/api/ping', cache('60 minutes'), ping);
app.get('/api/posts/:tags/:sortBy?/:direction?', cache('60 minutes'), getTags);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}!`);
});