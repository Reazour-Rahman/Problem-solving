function TotalAnimals(miles) {
    if ( miles <= 5) {
        const count = miles * 10;
        return count;
    }
    else if (miles <= 10) {
        const first10 =  miles * 30;
        return first10;
    }
    else if ( miles <= 20 ){
        const second20 = miles * 50;
        return second20;
    }
    else{
        const lastButNotLeast = miles * 100;
        return lastButNotLeast;
    }
}
let density = TotalAnimals(5);
console.log(density);