var fs = require('fs');
var file_path = "my_tasks.txt";

function show_contents(err, data){
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log("Read file contents");
}

fs.readFile(file_path, "utf-8", show_contents)

var order_of_magnitude = 7;

var for_loop_start_time = new Date();
var count = 1;
for(let i = 1; i < 10 ** order_of_magnitude; i++){
    count = count * i;
};

var for_loop_end_time = new Date();
console.log(`Time taken by the for loop ${(for_loop_end_time - for_loop_start_time) / 1000} seconds`);