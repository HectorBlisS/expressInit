//mongoose config
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/peliculas");



//1.- importacion de la libreria
const express = require("express");
const bodyParser = require('body-parser');

//2.- instancia de express
const app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//importacion de routers
const courseRouter = require("./routes/index.js");
const peliculasRouter = require("./routes/peliculas.js");

const users = [
    {
        name:"bliss",
        password:"bliss",
        age:"20",
        favoriteFood:"Barbacoa"
    }
];

// indicamos los estaticos
app.use(express.static("public"));

//indicamos el motor de "views"
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//a partir de qui escribimos nuestras rutas
app.get("/dulces", function(req,res,next){
    res.send("Traigan tributos!");
    next();
});

app.get("/", function(req,res,next){
    res.render("index", {bliss:false});
    next();
});

app.get("/login", function(req,res,next){
    const user = req.query.username;
    res.render("login_form", {error:user});
});

app.post("/login", function(req, res, next){

    users.forEach(user=>{
        if(user.name === req.body.username && user.password === req.body.password){
            res.send(`
                Hola ${req.body.username} Tenemos ${user.favoriteFood} para ti
            `)
        }else{
            res.render("login_form", {error:"incorrect password"});
        }
    })

});

app.get("/signup", function(req,res){
    res.render("signup_form");
});

app.post("/tsuki", (req,res)=>{
    var nuevoUsuario =     {
        name: req.body.username,
        password: req.body.password,
        age: req.body.age,
        favoriteFood: req.body.favoriteFood
    };
    users.push(nuevoUsuario);
    res.json(users);
});

app.get("/users/:userid", function(req,res){
    console.log("bliss");
    res.send(req.params.userid);
});

//usamos nuestros routers
app.use("/courses",courseRouter);
app.use("/peliculas", peliculasRouter);

app.get("/peliculas/new", function(req,res){
    const movie = new Pelicula({title:"InterBlisstelar"});
    movie.save();
    res.send("Agregada");
})


app.use(function(){
    console.log("BlisS needs candies");
});









//esta cochinada escucha!
app.listen(3000, function(err){
    if(err) console.log(err);
    console.log("Tu servidor está funcionando en el puerto 3000");
});

