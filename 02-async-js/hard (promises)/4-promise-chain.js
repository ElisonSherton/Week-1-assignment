/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    const pm1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000);
    });
    return pm1;
};

function waitTwoSecond() {
    const pm2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    return pm2;
};

function waitThreeSecond() {
    const pm3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    });
    return pm3;
};

function calculateTime() {

    const start = new Date();

    waitOneSecond()
    .then(function(){return waitTwoSecond();})
    .then(function(){return waitThreeSecond();})
    .then(function(){
        const end = new Date();
        console.log(`Time taken: ${(end - start) / 1000}`)
    });
};

calculateTime();

// It took a total of 6.00 seconds in order to run this program