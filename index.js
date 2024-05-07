require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Link = require('./models/link.model');
const app = express();

app.use(express.json());
app.use(cors());

const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const cluster = process.env.CLUSTER;
const appName = process.env.APP_NAME;
const customCollection = process.env.COLLECTION;

let path = '/api'
let uri =
    `mongodb+srv://${username}:${password}@${cluster}/${customCollection}?retryWrites=true&w=majority&appName=${appName}`;

app.get('/', function (req, res) {
    res.send('Map technologies');
});

// -------------------------------------------------------

app.post(`${path}/scan`, async (req, res) => {
    try {
        const url = await Link.create(req.body);
        console.log("url: ", url);
        let resp = [
            {
                name: "React",
                description: "Utilizado para crear interfaces de usuario interactivas.",
                type: "Frontend",
                objects: ["Componente1", "Componente2", "Componente3"]
            },
            {
                name: "Node.js",
                description: "Utilizado para el desarrollo del backend del sitio web.",
                type: "Backend",
                objects: ["Servidor", "API", "Rutas"]
            },
            {
                name: "MongoDB",
                description: "Base de datos NoSQL utilizada para almacenar datos del sitio web.",
                type: "Base de Datos",
                objects: ["Colección1", "Colección2", "Colección3"]
            }
        ];
        res.status(200).json(resp);
    } catch (error) {
        console.warn(error.message);
        res.status(500).json({ message: error.message });
    }
});

// -------------------------------------------------------

mongoose.connect(uri).then(() => {
    console.log('connected to database!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}).catch((e) => {
    console.log('Connection failed!', e)
})