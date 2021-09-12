// const greeting = 'Hello How are you';

// function reverseString(text) {
//     for (const letter of text) {
//         // console.log(letter);
//     }
// }
// const reversed = reverseString(greeting);
// console.log(reversed);

// second method 

// function reverse(str) {
//     return str.split('').reverse('').join('')
// }
// console.log(reverse('JavaScript'));

// third Method 

function reverse (str){
    return [... str].reverse().join('');
}
console.log(reverse('Rabby'));