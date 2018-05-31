const express = require('express');
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


require('./models/User');
require('./services/passport');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
const app = express();
app.use(
    cookieSession({
        /* Set Cookie Time For 30 days */
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



app.listen(PORT);