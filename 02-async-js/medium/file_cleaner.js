// Read a file, remove all the extra spaces and write it back to the same file.

// Import the dependencies
var fs = require('fs');
var file_path = "my_itinerary.txt";

// Read the file contents
function read_file(path){
    const pm = new Promise(function(resolve, reject){

    fs.readFile(path, "utf-8", function(err, data){
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    })

    });

    return pm;
}

// Removing extra whitespaces from a given file's contents
function remove_extra_spaces(data){
    // Split the elements on space
    var elements = data.split(" ");
    var filtered_elements = [];
    let elem = "";

    // Remove the blank strings from the array
    for (let i = 0; i < elements.length; i++){
        elem = elements[i];
        if (elem !== "") {
            filtered_elements.push(elem)
        };
    };

    // Join the elements with space as the separator
    return filtered_elements.join(" ");
}

read_file(file_path).then(
    function(data){
        console.log(remove_extra_spaces(data));
    }
).catch(
    function(err) {
        console.error(err);
    }
);