const express = require("express");
const app = express();

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {tilte: "The Witcher 3: Wild Hunt", studio: "CD Projekt Red", price: 60},
    {title: "Assassin's Creed Valhalla", studio: "Ubisoft", price: 50},
    {title: "Red Dead Redemption2", studio: "EA Sports", price: 60},
    {title: "Overwatch", studio: "Blizzard", price: 40},
    {title: "Cyberpunk 2077", studio: "CD Projekt Red", price : 45},
    {title: "Fortnite", studio:"Epic Games", price: 50},
    {title: "League of Legends", studio: "Riot Games", price: 45},
    {title: "GTA V", studio: "Rockstar Games", price: 30},
    {title: "Final Fantasy XIV", studio: " Square Enix", price: 40}



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

app.put('/novogame/:index', (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price };

    return res.json(games);
});