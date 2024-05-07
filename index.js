require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let path = '/api'

app.get('/', function (req, res) {
    res.send('Map technologies');
});

// -------------------------------------------------------

app.post(`${path}/scan`, async (req, res) => {
    try {

        console.log("url: ", req.body);
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
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})