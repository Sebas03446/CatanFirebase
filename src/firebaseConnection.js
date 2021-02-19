var firebase = require("firebase/app");
require("firebase/database")

const config = {
    apiKey: "AIzaSyDgVOLvpt9hYE_uXS2zSv7PerusDyve9tY",
    authDomain: "catancards-d5888.firebaseapp.com",
    databaseURL: "https://catancards-d5888-default-rtdb.firebaseio.com/",
    storageBucket: "catancards-d5888-default-rtdb.appspot.com"
};
try{
  firebase.initializeApp(config);
  // Get a reference to the database service
  const database = firebase.database();
  console.log('se ha inicializado');
}catch(error){
        console.log('error ' + error )
}
module.exports={
    firebase:firebase,
    database:firebase.database()                              //***

}

