const {database, firebase} = require('./firebaseConnection')
const {Card}= require('./resources/card/card.model')

const insertCard = ( req, res) => {
    const {number,description} = req.body;
    const card1 = new Card(description, number);
    database.ref('cards/').push({
        card1
      }, (error) => {
        if (error) {
            console.log(error);
        } else {
           console.log('se ha guardado correctamente la información');
        }
      });
      res.send("se ha guardado")
}
const getCard = (req,res) => {
  var ref = firebase.database().ref("cards");
  ref.orderByChild("card1").on("child_added", function(snapshot) {
    console.log(snapshot.key)
    database.ref('cards/'+snapshot.key+'/card1').on("value", function(snapshot){
      console.log(snapshot.val());
    });
    

  });
    console.log('CARTAS');
    res.send('ver consola')
}
const updateCard = (req, res )=> {
  const {refNumber , number,description} = req.body;
  var adaNameRef = firebase.database().ref('cards/'+refNumber+'/card1');
  // Modify the 'first' and 'last' properties, but leave other data at
  // adaNameRef unchanged.
  adaNameRef.update({ number: number, description: description });
  res.send('Se ha actualizado la carta')
}
const deleteCard = (req, res )=> {
  const {refNumber} = req.body;
  var adaRef = firebase.database().ref('cards/'+refNumber);
  adaRef.remove()
    .then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
    res.send('Se ha eliminado con exito')
}


  
module.exports = {
    insertCard: insertCard,
    getCard:getCard,
    updateCard:updateCard,
    deleteCard:deleteCard
}