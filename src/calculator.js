const base = {
    quarter: Number(0),
    loonie: Number(0),
    toonie: Number(0),
    five: Number(0),
    ten: Number(0),
    twenty: Number(0),
    fifty: Number(0),
    hundred: Number(0),
  };

export default function calculateCashout(input, total, float){


    let difference = Number(total - float); // Need to get this to zero
    let cashout = Object.assign({}, base);             // This is what needs to be taken out
    let register = Object.assign({}, input);            // This is what needs to be left in

    console.log(`Total: ${total} Float: ${float} Difference: ${difference}`);
    while( difference > 0) {

        console.log("Outside Switch.  Difference: " + difference);
        console.log(`Quarters: ${register.quarter}`);
        

        if (difference >= 100 && register.hundred >= 100){
            console.log("-100");
            difference -= 100;
            cashout.hundred += 100;
            register.hundred -= 100;
        }
        else if (difference >= 50 && register.fifty >= 50){
            console.log("-50");
            difference -= 50;
            cashout.fifty += 50;
            register.fifty -= 50;
        }
        else if (difference >= 20 && register.twenty >= 20){
            console.log("-20");
            difference -= 20;
            cashout.twenty += 20;
            register.twenty -= 20;
        }
        else if (difference >= 10 && register.ten >= 10){
            console.log("-10");
            difference -= 10;
            cashout.ten += 10;
            register.ten -= 10;
        }
        else if (difference >= 5 && register.five >= 5){
            console.log("-5");
            difference -= 5;
            cashout.five += 5;
            register.five -= 5;
        }
        else if (difference >= 2 && register.toonie >= 2){
            console.log("-2");
            difference -= 2;
            cashout.toonie += 2;
            register.toonie -= 2;
        }
        else if ( difference >= 1 && register.loonie >= 1){
            console.log("-1");
            difference -= 1;
            cashout.loonie += 1;
            register.loonie -= 1;
                        }
        else if (difference > 0 && register.quarter > 0){
            console.log("-0.25");
            difference -= 0.25;
            cashout.quarter += 0.25;
            register.quarter -= 0.25;
    }
        else{
            // If no suitable denomination is available, break the loop to avoid infinite loop
            console.error("Unable to make exact cashout with available denominations.");
            difference = 0;
        }
        
    }

    console.log(cashout.fifty);


    //return an object with two object: what should be in till and what should be out of till
    return {register: register, cashout:cashout, difference: difference};
}