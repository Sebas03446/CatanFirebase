const express = require('express');
const bodyParser = require('body-parser');
const {cardRouter} = require('./resources/card/card.router')
const {database} = require('./firebaseConnection')
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use('/v1',cardRouter)
function start(){
  try{  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  }) 
  }catch(error){
      console.log(error);
  }
}
module.exports = {
  start:start
}
/* export const start = () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 
} */

