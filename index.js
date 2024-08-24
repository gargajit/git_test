import express from "express";
import { randomSuperhero } from "superheroes";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    var mySuperhero = randomSuperhero();
    res.send(`<h1>I am ${mySuperhero}!</h1>`);
}); 
