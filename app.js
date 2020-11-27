const express = require('express');
const app = express();

const mainRouter = require('./routes/main')
const heroesRouter = require('./routes/heroes')

app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/', mainRouter);

app.use('/heroes', heroesRouter);