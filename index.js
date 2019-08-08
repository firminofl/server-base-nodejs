/**
 * Autor: Filipe Firmino Lemos
 * Data: 08/08/2019
 * Contato: filipefirmino@gec.inatel.br
 */
const express = require('express');
const cors = require('cors');
const GlobalMessages = require('./controllers/GlobalMessages');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Rota de inicializacao do servidor
app.use('/', require("./routes/routes"));

const PORT = 3001
app.listen(PORT, () => {
    console.log(`${GlobalMessages.SERVER_RUNNING}`)
})