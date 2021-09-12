// const products = [
//     { Name: 'Laptop', price: 60000, quantity: 5},
//     { Name: 'watch', price: 3000, quantity: 3}, 
//     { Name: 'Mobile', price: 40000, quantity: 2},
//     { Name: 'etc', price: 2000, quantity: 1}
// ];
// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
    { Name: 'Laptop', price: 60000, quantity: 5},
    { Name: 'watch', price: 3000, quantity: 3}, 
    { Name: 'Mobile', price: 40000, quantity: 2},
    { Name: 'etc', price: 2000, quantity: 1}
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    productTotal = product.price * product.quantity;
    cartTotal =cartPrice + productTotal;
}
console.log(cartTotal);