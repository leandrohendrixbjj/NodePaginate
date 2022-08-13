const express = require('express');
const app = express();
const bodyparse = require('body-parser');
const userRoute = require('./app/route/user/index.js');
const companyRoute = require('./app/route/empresa/index.js');
const config = require('./app/infra/config.json');

app.use(
  bodyparse.urlencoded({extended:true}),
  bodyparse.json()
);

app.use('/api/user', userRoute);
app.use('/api/company', companyRoute);

app.listen(config.api.port, () => {
    console.log(`NodePaginate is running at ${config.api.port}`);
});