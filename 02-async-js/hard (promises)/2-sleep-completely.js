/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const start = new Date();
    var end = "";

    while (true) {
        end = new Date();
        if ((end - start) / 1000  >= seconds){
            break;
        }
    };
    console.log(`Function started execution at ${start} \nCompleted execution at ${end}`);
}

sleep(5);

for (let i = 0; i < 10; i++){
    console.log(i);
}

// // Earlier Attempt : Was unnecessarily thinking asynchronously here
// sleep(2).then(
//     function(){
//         console.log(new Date());
//         return sleep(2);
//     }
// ).then(
//     function(){
//         console.log(new Date());
//         return sleep(2);
//     }
// ).then(
//     function(){
//         console.log(new Date());
//         return sleep(2);
//     }
// ).then(
//     function(){
//         console.log(new Date());
//         return sleep(2);
//     }
// )