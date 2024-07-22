const express = require('express');
const path = require('path');
const router = require('./routers/index');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

const PORT = 3000;
app.listen(PORT, () => console.log('Server listening on port ' + PORT));
