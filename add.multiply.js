/*
wood chair = 3cft; per chair
wood table = 10cft; per table
wood bad = 50cft; per bad
*/
function woodCalculation(chairQuantity, tableQuantity, badQuantity) {
    const perChair = 3;   
    const perTable = 10;   
    const perBad = 50;    
    // wood calculation 
    let chairWood = chairQuantity * perChair ;
    let tableWood = tableQuantity * perTable ;
    let badeWood = badQuantity * perBad ;
    const totalWoodNeeded = chairWood + tableWood + badeWood;
    // returning
    return totalWoodNeeded ;

}
let totalWood = woodCalculation(0, 0, 3);
console.log(totalWood,'cft');