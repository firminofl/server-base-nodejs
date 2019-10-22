/**
 * Autor: Filipe Firmino Lemos
 * Data: 22/10/2019
 * Contato: filipefirmino@gec.inatel.br
 */

const express = require('express');
const GlobalMessages = require('./controllers/GlobalMessages');
require("dotenv-safe").config()

//Iniciando o app
const app = express();
app.use(express.json());

//Rota de inicializacao do servidor
app.use('/', require("./routes/routes"));

//Definindo porta em que subiremos o servidor
let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}) 