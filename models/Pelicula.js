const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peliculaSchema = new Schema({
    title:String,
    genre:[String],
    year:String,
    rate:Number
});

//Modelo con Schema
module.exports = mongoose.model("Pelicula", peliculaSchema);