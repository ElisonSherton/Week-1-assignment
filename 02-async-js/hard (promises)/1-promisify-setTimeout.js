/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    const wait_promise = new Promise(function (resolve, reject)  {
        // Write the main logic
        setTimeout(function(){
            console.log(`Timed out after ${n} seconds`);
        }, n * 1000)
        // Resolve the promise
        resolve();
    });
};

let n = 2;
const p = wait(n);