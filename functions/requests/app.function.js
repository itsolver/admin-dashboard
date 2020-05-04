const { https } = require('firebase-functions');
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({ origin: true });

const validateFirebaseIdToken = require('./middlewares/auth');
const usersRoute = require('./routes/customers');

const app = express();

app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);

app.use('/customers', usersRoute);

export default https.onRequest(app);
