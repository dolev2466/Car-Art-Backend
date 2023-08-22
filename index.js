const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");

const carRoutes = require('./routes/cars-routes');
const userRoutes = require('./routes/user-routes');
const invitationRoutes = require('./routes/invitation-routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/uploads/images',express.static(path.join('uploads','images')));

app.use('/api/cars',carRoutes);

app.use('/api/login',userRoutes);

app.use('/api/invitations',invitationRoutes);


app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});


mongoose.connect('mongodb+srv://thila222:thila123@cluster0.pxukw51.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
  app.listen(8080);
})
.catch(err => {
  console.log(err);
});
