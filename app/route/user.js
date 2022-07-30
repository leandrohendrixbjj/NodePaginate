const route = require('express').Router();

const users = [
   {id:1,name:'Leandro'},
   {id:2,name:'Soares'},
   {id:3,name:'Ribeiro'},
   {id:4,name:'Tatiana'},
   {id:5,name:'Lucia'},
   {id:6,name:'Nadia'},
];

route.get('/', (req,res) => {
  
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endsIndex = page * limit;

  const data = {};

  data.results = users.slice(startIndex,endsIndex);

  res.json(data);  

});

module.exports = route;