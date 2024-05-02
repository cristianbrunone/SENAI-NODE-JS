//carregando o express
const express = require("express");
//instancio o express e carregando a biblioteca do expres dentro dessa const app
const app = express();


//Lista de Games
let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Fifa", studio: "EA Sports", price: 90},
    {title: "Batman", studio: "EA Sports", price: 90},
    {title: "Spiderman", studio: "Marvel", price: 80},
    {title: "Justice League", studio: "DC", price: 70},
]

const PORT = 3080; 
app.listen(PORT, () => {
    console.log(`Servidor funcionando no porto ${PORT}`);
});

app.get("/", (req, res) => {
    res.json(games);
});