//casos de uso dos itens

//criar item com subtotal 
async function createItem(nome,prince, quantity ) {
    return {
        nome, 
        prince,
        quantity,
        subtotal:() => prince *quantity
    };
};

export default createItem;