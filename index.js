const express = require('express');
const PORT = process.env.PORT || 5000;
require('./services/passport');
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT);