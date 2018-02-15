const express = require("express");
const router = express.Router();

router.get("/new", function(req,res){
    res.send("bliss")
})
.post("/edit", function(req,res){
    res.send("bliss")
})
.put("/add", function(req,res){
    res.send("bliss")
});

module.exports = router;

