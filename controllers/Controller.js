const ControllerService = require("../services/Controller")

module.exports = {
    async index(req, res) {
        console.log(`Rota index (controller)!`)
        let status = await ControllerService.index({id: 1, name: "Test"})
        console.log(`Status: ${status}`)
        return res.status(200).send({message: "Sucesso na requisição!"})
    },

    async store(req, res) {
        console.log(`Rota store (controller)!`)
    },

    async show(req, res) {
        console.log(`Rota show (controller)!`)
    },

    async update(req, res) {
        console.log(`Rota update (controller)!`)
    },

    async detroy(req, res) {
        console.log(`Rota detroy (controller)!`)
    }
}