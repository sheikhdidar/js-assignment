/** start calculate feet to mile */
// function feetToMile(feet){
//         var mile = feet/5280;
//         return mile;
// }
// var result = feetToMile(12500);
// console.log(result);

/** end calculate feet to mile */

/**start woodcalculator */

function woodCalculator (chair, table, bed){
    var chairCalculator = chair * 1;
    var tableCalculator = table * 3;
    var bedCalculator = bed * 5;

    var totalWood = (chairCalculator + tableCalculator + bedCalculator);

    return totalWood;
}
