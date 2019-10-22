/**
 * Autor: Filipe Firmino Lemos
 * Data: 22/10/2019
 * Contato: filipefirmino@gec.inatel.br
 */

const express = require('express');
const routes = express.Router();

const Controller = require('../controllers/Controller.js');

routes.get('/show', Controller.index);

routes.get('/show/:id', Controller.show);

routes.post('/store', Controller.store);

routes.put('/update/:id', Controller.update);

routes.delete('/delete/:id', Controller.detroy);

module.exports = routes; 