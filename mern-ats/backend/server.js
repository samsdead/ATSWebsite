const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

 const customersRouter = require('./routes/customer');
 const staffRouter = require('./routes/staff');
 const addressRouter = require('./routes/address');
 const couponsRouter = require('./routes/coupons');
 const ticketSalesRouter = require('./routes/ticketSales');
 const blanksRouter = require('./routes/blanks');
 const stockRouter = require('./routes/stock');
 const currencyExchangeRateRouter = require('./routes/currencyExchangeRate');



 app.use('/customer', customersRouter);
 app.use('/staff', staffRouter);
 app.use('/address', addressRouter);
 app.use('/coupons', couponsRouter);
 app.use('/ticketSales', ticketSalesRouter);
 app.use('/blanks', blanksRouter);
 app.use('/stock', stockRouter);
 app.use('/currencyExchangeRate', currencyExchangeRateRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
