var fs = require('fs');
var file_path = "counter_log.txt";

fs.writeFile(file_path, "E Kutrya, Lamb Fek", function (err) {
    if (err) {
        console.error(err)
    }
})

// Until the following synchronous code runs till the end, 
// THe asynchronous file write above will not get completed.
var order_of_magnitude = 10;

var for_loop_start_time = new Date();
var count = 1;
for(let i = 1; i < 10 ** order_of_magnitude; i++){
    count = count * i;
};

var for_loop_end_time = new Date();
console.log(`Time taken by the for loop ${(for_loop_end_time - for_loop_start_time) / 1000} seconds`);