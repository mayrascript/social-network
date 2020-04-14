const api = require('./dist/apps/api/main.js');
const express = require('express');
const path = require('path');

const app = express();
/*
app.use(express.static(__dirname+'/dist/apps/social-network'));
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/apps/social-network/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server.js is running');
});*/
