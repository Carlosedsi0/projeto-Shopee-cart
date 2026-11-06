import *as cartService from "./services/cart.js";
import creatitem from "./services/item.js";

const mycart = [];
const mywhishlist=[];

console.log("Seja Bem Vindo ao seu Carrinho da Shopee!");

//criando dois itens para o carrinho
const item1=await creatitem("funkpop Roronoa Zoro",131.09,1);
const item2=await creatitem("Funkpop Monk D. Luffy",142.02,3);

//-adcionei dois itens no carrinho
await cartService.addItem(mycart,item1);
await cartService.addItem(mycart,item2);

//await cartService.removeItem(mycart, item1);
//await cartService.removeitem(mycart,1);

await cartService.displaycart(mycart);
//await cartService.deleteItem(mycart,item2.name);
//await cartService.deleteItem(mycart,item1.name);
await cartService.calculetetotal(mycart);




//console.log(item2.subtotal());

