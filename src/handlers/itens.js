
const ItemModel = require('../models/itens');


const itemRetJSON = Item => ({
    type: 'Item',
    id: Item.id,
    attributes: {
        ItemID: Item.ItemID,
        Nome: Item.Nome             
    },
    links: {
        self: `/api/vi/itens/${Item.id}`
    }
});


const getAll = async (request, h) => {

    const Itens = await ItemModel.find({});

    return { data: Itens.map(itemRetJSON) };
};

const save = async (request, h) => {

    const { ItemID, Nome } = request.payload;
    const Item = new ItemModel;
    Item.ItemID = ItemID;
    Item.Nome = Nome;

    await Item.save();

    return h.response({ data: itemRetJSON(Item) }).code(201);
};

const remove = async (request, h) => {
    await ItemModel.findOneAndDelete({ _id: request.params.id});
    return h.response().code(204);    
};

const find = async (request) => {
    const itemRet = await ItemModel.findById(request.params.id);
    return  { data: itemRetJSON(itemRet) };    
};


module.exports = {
    getAll,
    save,
    remove,
    find
};