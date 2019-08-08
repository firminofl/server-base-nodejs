module.exports = {
    async index(obj) {
        console.log(`Rota index (services)! | ${obj.id} - ${obj.name}`)
        return 200;
    },

    async store(req, res) {
        console.log(`Rota store!`)
    },

    async show(req, res) {
        console.log(`Rota show!`)
    },

    async update(req, res) {
        console.log(`Rota update!`)
    },

    async detroy(req, res) {
        console.log(`Rota detroy!`)
    }
}