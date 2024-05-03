const express = require("express");
const app = express();

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Batman", studio: "EA Sports", price: 90},
    {title: "Spiderman", studio: "Marvel", price: 80},
    {title: "Justice League", studio: "DC", price: 70},
]

const PORT = 3080; 
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use(express.json());

app.get("/", (req, res) => {
    res.json(games);
});

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title: title, studio: studio, price: price }

    // Agregamos el nuevo juego al array 'games'
    games.push(newGame);

    res.send("OK");
});
