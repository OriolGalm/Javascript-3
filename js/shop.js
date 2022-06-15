// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;
var priceTotal = 0;
var contador = [];
let result = [];
let nouCart = [];

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
     for(let i = 0; i < products.length; i++){
        if(products[i].id == id){
            cartList.push(products[id-1]);
        }
    } 
    calculateTotal();
    generateCart(id);
}


// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(let i = 0; i<cartList.length; i++){
        priceTotal = cartList[i].price;
    }
    total += priceTotal;
    return total;   
}

// Exercise 4
function generateCart(ref) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    for(let i = 0; i<cartList.length; i++){
        
        if(nouCart[i] === undefined || nouCart.includes(cartList[i]) == false){

            contador.push(ref); 
            result = contador.filter(e => e == ref);               
            var quant = {quantity: result.length,
                subtotal: cartList[i].price * result.length,
                subtotalWithDiscount: 0};
            nouCart.push(Object.assign(cartList[i], quant));

            cart = nouCart.filter(element => {
            const isDuplicate = cart.includes(element.id);
            if (!isDuplicate) {
                cart.push(element.id);
                return true;
            }
            return false;
            });
        }
    }
    applyPromotionsCart(ref);
    console.log("Array cart: " + JSON.stringify(cart));
}

// Exercise 5
function applyPromotionsCart(ref) {
    // Apply promotions to each item in the array "cart"
    let idResult = result.filter(x => x == 1);
    let idResult2 = result.filter(x => x == 3);
    if(idResult.length >= 3 && ref == 1){
        let discount = cart.find(d => d.id == 1).subtotalWithDiscount = 10;
        totalProds1 = cart.find(d => d.id == 1).subtotal;
        cart.find(d => d.id == 1).subtotal = totalProds1 - discount;
    }

    if(idResult2.length >= 10 && ref == 3){
        let totalProds = cart.find(x => x.id == 3).subtotal;
        let calcDiscount = cart.find(x => x.id == 3).subtotalWithDiscount = (totalProds / 100) * 33.3;
        cart.find(x => x.id == 3).subtotal = totalProds - calcDiscount; 
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let t1 = "<table class='table'><thead><tr><th scope='col'>Product</th><th scope='col'>Price</th><th scope='col'>Qty.</th><th scope='col'>Total<small>(with discount)</small></th></tr></thead><tbody id='cart_list'>";
    for(let i = 0; i<cart.length; i++){
        t1 += `<tr scope='row'>
            <th>${cart[i].name}</th>
            <td>${cart[i].price}€</td>
            <td>${cart[i].quantity}</td>
            <td>${cart[i].subtotal}€</td>
            </tr>`;
    }
    t1 += "</tbody></table>";
    document.getElementById("taula").innerHTML = t1;    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    for(let i = 0; i < products.length; i++){
        if(products[i].id == id){
            cartList.push(products[id-1]);
        }
    } 
    calculateTotal();
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for(let i = 0; i<cartList.length; i++){
        
        if(nouCart[i] === undefined || nouCart.includes(cartList[i]) == false){

            contador.push(id); //Fico les id's que arriben per paràmetre a l'array contador
            result = contador.filter(e => e == id);//Separo les id's que són iguals a les que arriben per paràmetre, i les fico a l'array result               
            var quant = {quantity: result.length,
                subtotal: cartList[i].price * result.length,
                subtotalWithDiscount: 0};
            nouCart.push(Object.assign(cartList[i], quant));
            //Duplico l'array nouCart al cart per poder-lo manipular
            cart = nouCart.filter(element => {
            const isDuplicate = cart.includes(element.id);
            if (!isDuplicate) {
                cart.push(element.id);
                return true;
            }
            return false;
            });
            //Evita que apareguin els productes eliminats amb quantity a "0"
            for(let x = 0; x < cart.length; x++){
                if(cart[x].quantity == 0){
                    cart.splice(x, 1);
                }
            }
        }
    }
    applyPromotionsCart(id);
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(let i = 0; i<cart.length; i++){
        
    // 2. Add found product to the cartList array
        if(cart[i].id == id){
            for(let j = 0; j < contador.length; j++) {//Borro el producte de l'array contador
                if(contador[j] == id) {
                    contador.splice(j, 1);
                    break;
                }
            }//Amb el filter borro el producte dels arrays result 
            result = contador.filter(e => e == id);               
            cart[i].quantity = result.length;
            cart[i].subtotal = cart[i].price * result.length;
            //Elimina de l'array els productes amb quantity a "0"
            if(cart[i].quantity == 0){
                cart.splice(i, 1);
            }
        }
    }
    applyPromotionsCart(id);
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}