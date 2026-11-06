//Casos de uso dos intens
//->criar um item com subtotal certo
async function creatitem(name,price,quantity) {
   return{
    name,
    price,
    quantity,
    subtotal: ()=>price * quantity,
    };
}

export default  creatitem;