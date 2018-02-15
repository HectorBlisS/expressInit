const express = require("express");
const router = express.Router();
const Pelicula = require("../models/Pelicula");

router.get("/new", function(req,res){
    res.render("pelicula_form");
})
.post("/new", function(req,res){
    const movie = new Pelicula({title:req.body.title});
    movie.save();
    res.send("pelicula guardada");
});

module.exports = router;