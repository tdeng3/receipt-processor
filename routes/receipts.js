const express = require('express');
const uuid = require('uuid');
const calculateTotalPoints = require('../services/calculateTotalPoints');

const router = express.Router();
const Receipts = {};
//Obj {"dsadwadwqd" : "60"}

router.post('/process', (req, res) => {
  const newReceipt = req.body;

  //error handler
  if (!newReceipt) {
    return res.status(404).json({ error: "This input receipt is invalid" });
  }
  
  const points = calculateTotalPoints(newReceipt);
  const id = uuid.v4();
  //Obj {"generated_ID" : "60"}
  //Obj[generated_ID] = 60
  Receipts[id] = points;
  res.json({ id });
});

router.get('/:id/points', (req, res) => {
  const id = req.params.id;
  if (!(id in Receipts)){
    return res.status(404).json({ error: "We cannot found this receipt" });
  }
  res.json({ points: Receipts[id] });
});

module.exports = router;
