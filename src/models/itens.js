const dbMongoose = require('mongoose');
const mSchema = dbMongoose.Schema;


const ItemSchema = new mSchema ({
    ItemID: Number,
    Nome: String
});

/* const TpItemSchema = new mSchema ({
    TpItemID: Number,
    Nome: String,
    Valor: Number
});

const ItemResultSchema = new mSchema ({
    ItemID: Number,
    TpItemID: Number,
    DataFim: Date
}); */

module.exports = dbMongoose.model('Item',ItemSchema);

