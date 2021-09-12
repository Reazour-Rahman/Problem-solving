const phones = [
    { Name: 'Samsung Galaxy S21 Ultra', price : 140000, ram : 12, Camera : 108},
    { Name: 'Xiomi Mi Note11 Ultra ', price : 70000, ram : 12, Camera : 108},
    { Name: 'Huawei P50', price : 120000, ram : 16, Camera : 108},
    { Name: 'Pcoco x3 pro', price : 25000, ram : 8, Camera : 48},
    { Name: 'Realme Gt', price : 30000, ram : 6, Camera : 64},
    { Name: 'walton s21', price : 15000, ram : 4, Camera : 32},
    { Name: 'Infinix hot 10', price : 11000, ram : 4, Camera : 32},
    { Name: 'Nokia N8', price : 29000, ram : 1, Camera : 8},
]
let cheapest =phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);