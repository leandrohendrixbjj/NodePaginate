const route = require('express').Router();

const companies = [
   {id:1,name:'Gimba'},
   {id:2,name:'Totvs'},
   {id:3,name:'Prefeitura'},
   {id:4,name:'Allied'},
   {id:5,name:'APCD'},
   {id:6,name:'Movida'},
];

//Complet
route.get('/', paginate(companies), (req,res) => {
   if (req.query.limit == undefined || req.query.page == undefined){
    res.json(companies);
   }else{
     res.json(res.paginate);
   }
});

function paginate(companies){
  return (req,res,next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit); 
    const data = {}; 
   
    const startIndex = (page - 1) * limit;
    const endsIndex = page * limit;

    if (endsIndex < companies.length){
      data.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0){
      data.previous = {
        page: page - 1,
        limit: limit
      }
    }

    data.results = companies.slice(startIndex,endsIndex);
    
    res.paginate = data;
    
    next();      
  }
}

module.exports = route;