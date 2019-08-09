module.exports = {
    async index(obj) {
        //metodo 
        await doRequest(true)
            .then(response => {
                console.log(`Rota index (services)! | Atributo: ${response.nome} | ${obj.id} - ${obj.name}`)
            })
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

function doRequest(resolver) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                // rejeitá-la
                reject("Reject Promise!")
            }
            resolve({
                id: 1,
                nome: "Teste"
            });
        }, 5000);
    });
}