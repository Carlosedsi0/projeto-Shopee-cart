//Casos de uso dos intens
//->criar um item com subtotal certo
async function creatitem(name,price,quantity) {
   return{
    name,
    price,
    quantity,
    subtotal() {
     return this.price * this.quantity;
    }
    };
}

export default  creatitem;