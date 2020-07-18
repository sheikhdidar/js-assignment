/** start calculate feet to mile */
function feetToMile(feet){
        var mile = feet/5280;
        return mile;
}
var result = feetToMile(12500);
console.log(result);

/** end calculate feet to mile */

/**start woodCalculator */

function woodCalculator (chair, table, bed){
    var chairCalculator = chair * 1;
    var tableCalculator = table * 3;
    var bedCalculator = bed * 5;

    var totalWood = (chairCalculator + tableCalculator + bedCalculator);

    return totalWood;
}

/**end woodCalculator */

/**start brickCalcultor */

function brickCalculator (floor){
    var brick1 = 0;
    var brick2 = 0;
    var brick3 = 0;
    for(var i = 0; i <= floor; i++){
        if(i >= 1 && i <= 10){
            var brick1 = i*15*1000;
        }
        else if(i >= 11 && i <=20){
            var brick2 = (i-10)*12*1000;
        }
        else if(i > 20){
            var brick3 = (i-20)*10*1000;
        }
    }
    var total = (brick1 + brick2 + brick3);
    return total;

}
/**end brickCalcultor */

/** star tinyFriend  */

function tinyFriend(names){
    var smallname = names[0];
    for(var i =0; i < names.length; i++){
        var currentname = names[i];

        if(currentname.length < smallname.length){
            smallname = currentname;
        }
    }
    return smallname;
}

/**end tinyfriend */