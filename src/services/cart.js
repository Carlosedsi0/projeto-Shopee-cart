//quais ações meu carrinho pode ter

//casos de uso
//✅ ->adicionar item no carrinho
async function addItem(usercart,Item) {
    usercart.push(Item);
}
//->deletar item no carrinho
async function deleteItem(usercart, name) {
    const index= usercart.findIndex((item)=>item.name===name);

    if(index!== -1){
        usercart.splice(index, 1);
    }
}
//✅->remover item do carrinho,diminui um
//  item
async function removeItem(usercart,item) {
    //1.encontrar o index do item
    const indexFound=usercart.findIndex((p)=>p.name===item.name);
    //2.caso encontre o item
    if(indexFound=== -1){
        console.log("item não encontrado");
        return;
    }
    //3.item>1 subtrair um item, item =1deletar o item
    if(usercart[indexFound].quantity>1){
        usercart[indexFound].quantity-=1;
    return;
}
//4.item=1 deletar o item    
if(usercart[indexFound].quantity===1){
        usercart.splice(indexFound,1);
        return;
    }

}
  //transformar o indice do visual do usuario,para o indice do backend
    //const deleteindex= index - 1;
   //é maior do que zero e menor do que o tamanho do carrinho
    //if(index>=0 && index<usercart.length) {
        //usercart.splice(deleteindex,1);


//->calcular o total do carrinho 
async function calculetetotal(usercart) {
    console.log("\nShopee Cart TOTAL IS:");

    const result= usercart.reduce((total,Item)=>total + Item.subtotal(), 0);
    console.log(`🎁Total: R$ ${result.toFixed(2)}`);
}
async function displaycart(usercart) {
    console.log("\nShopee cart list:");
    usercart.forEach((item,index)=>{

        console.log(`${index +1}, ${item.name}- R$ ${item.price} | ${item.quantity}x | - Subtotal = ${item.subtotal().toFixed(2)}`);
    })
}

export{
    addItem,
    calculetetotal,
    removeItem,
    deleteItem,
    displaycart
};