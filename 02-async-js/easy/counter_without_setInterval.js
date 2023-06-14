let time = 0

function display_time(){
    time = time + 1
    console.clear();
    console.log(time, "seconds");
    setTimeout(display_time, 1000);
}

display_time();
