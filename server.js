const express = require('express');

// Requiring router modules
const appRouter = require('./routes/app');

// Create express app
const app = express();

// mount middleware
app.use('/app', appRouter);

app.listen(3000, function() {
    console.log('Listening on port 3000');
});