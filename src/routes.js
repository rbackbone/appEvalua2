const itensHandler = require ('./handlers/itens');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/itens',
        handler: itensHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/itens/{id}',
        handler: itensHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/itens',
        handler: itensHandler.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/itens/{id}',
        handler: itensHandler.remove
    }
]