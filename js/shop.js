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
//    console.log("Array cartList: " + JSON.stringify(cartList));
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
let result = [];
let nouCart = [];
// Exercise 4
function generateCart(ref) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    for(let i = 0; i<cartList.length; i++){
        
        if(nouCart[i] === undefined || nouCart.includes(cartList[i]) == false){
           
          if(contador.length == 0){
            nouCart.push(cartList[i]);
            contador.push(ref); 
            result = contador.filter(e => e == ref);   
          }else if(contador.includes(ref) === true){   
            result.push(ref);  
            const index = result.filter(s => s == ref);
            var quant = {quantity: index.length,
                subtotal: cartList[i].price * index.length,
                subtotalWithDiscount: parseFloat(0).toFixed()};
            nouCart.push(Object.assign(cartList[i], quant));
            console.log("Array index: " + JSON.stringify("Id: " + index)); 
          }else{
            nouCart.push(cartList[i]);
            contador.push(ref); 
            result.push(ref);
            }

        cart = nouCart.filter(element => {
        const isDuplicate = cart.includes(element.id);
        if (!isDuplicate) {
            cart.push(element.id);
            return true;
        }
        return false;
        });
        }
        applyPromotionsCart();
        console.log("Array contador: " + JSON.stringify("Id: " + contador)); 
        console.log("Array result: " + JSON.stringify("Id: " + result)); 
        console.log("Array cart: " + JSON.stringify(cart)); 
    }

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let idResult = result.filter(x => x == 1);
    let idResult2 = result.filter(x => x == 3);
    if(idResult.length >= 3){
        let discount = cart.find(d => d.id == 1).subtotalWithDiscount = 10;
        cart.find(d => d.id == 1).subtotal - discount;
    }

    if(idResult2.length >= 10){
        let totalProds = cart.find(x => x.id == 3).subtotal;
        let calcDiscount = cart.find(x => x.id == 3).subtotalWithDiscount = (totalProds / 100) * 33.3;
        cart.find(x => x.id == 3).subtotal = totalProds - calcDiscount; 
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}