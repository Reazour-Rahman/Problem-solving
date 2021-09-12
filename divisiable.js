// for (let i = 1; i <=50; i++) {
//     if (i%5 ==0 && i%3 == 0){
//         console.log('foo');
//     }
//     else if (i % 3 == 0) {
//         console.log('Cricket')
//     }
//     else if (i % 5 == 0) {
//         console.log('Football')
//     }
    
//     else{
//         console.log(i);
//     }
// }

function foobar(i) {
    for (let i = 1; i <=50; i++) {
        if (i%5 ==0 && i%3 == 0){
            console.log('foo');
        }
        else if (i % 3 == 0) {
            console.log('Cricket')
        }
        else if (i % 5 == 0) {
            console.log('Football')
        }
        
        else{
            console.log(i);
        }
    }
    
    
}
let inputParameter = foobar(50);
console.log(inputParameter);