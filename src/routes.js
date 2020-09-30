const itensHandler = require ('./handlers/itens');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/itens',
        handler: itensHandler.getAll
    },
    {
        method: 'POST',
        path: '/api/v1/itens',
        handler: itensHandler.save
    }
]