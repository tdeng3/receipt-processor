const express = require('express');
const receiptsRouter = require('./routes/receipts');

const app = express();
app.use(express.json());
app.use('/receipts', receiptsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port 5000`);
});
