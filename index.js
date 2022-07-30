const express = require('express');
const app = express();
const bodyparse = require('body-parser');
const userRoute = require('./app/route/user.js');

app.use(bodyparse.urlencoded({extended:true}));
app.use('/api/user', userRoute);

app.listen(3000, () => {
    console.log('Server is running');
});