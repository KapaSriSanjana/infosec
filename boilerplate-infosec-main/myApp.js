const express = require('express');
const app = express();

let helmet = require('helmet')
const PORT = process.env.PORT || 3030;

module.exports=app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api',api);
app.get("/",function (request, response){
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`your app is listening on port ${port}`);
});











































