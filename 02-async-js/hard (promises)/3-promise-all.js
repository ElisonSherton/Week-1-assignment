/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    const pm = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000);
    });
    return pm;
};

function waitTwoSecond() {
    const pm = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    return pm;
};

function waitThreeSecond() {
    const pm = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    });
    return pm;
};

function calculateTime() {
    
    start = new Date();

    const pm1 = waitOneSecond();
    const pm2 = waitTwoSecond();
    const pm3 = waitThreeSecond();

    Promise.all([pm1, pm2, pm3]).then(function(){
        end = new Date();
        console.log(`Time taken for resolving all the promises: ${(end - start) / 1000} seconds.`)
    })
};

calculateTime();

// It took a total of 3.00 seconds in order to run this program