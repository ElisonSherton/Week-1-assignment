let time = 0

function display_time(){
    time = time + 1
    console.clear();
    console.log(time, "seconds");
}

setInterval(display_time, 1000)

