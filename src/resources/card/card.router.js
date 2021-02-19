
const express = require('express');
const {insertCard,getCard,updateCard,deleteCard}=require('../../Crud');
const cardRouter = express.Router();


const mockController = (req, res) => {
    res.json({ message: 'ok' })
    
  }
cardRouter
    .route('/')
    .get(getCard)
    .post(insertCard)
    .put(updateCard)
    .delete(deleteCard) 
module.exports = {
    cardRouter : cardRouter
}