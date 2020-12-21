var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
const Connection_URL = "mongodb+srv://tuannguyen0719:Fg3b/i9a##*wfC3@cluster0.ianpi.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(Connection_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => app.listen(PORT, () => console.log(`Server Running on:${PORT}`))).catch(
    (error) => console.log(error.message));
mongoose.set('useFindAndModify', false);
