const express = require("express");
const app = express();
const connection = require("./database/database");

app.set('view engine', 'ejs');

//Static
app.use(express.static("public"));

//Database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão Feita");
    }).catch((error)=>{
        console.log(error);
    })


app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, () => {
    console.log("O servidor está rodando!");
})