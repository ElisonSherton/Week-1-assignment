/*
Write a clock to display the machine time that ticks at every one second interval
*/

function display_system_time(){

    const options = {hour: "2-digit", minute: "2-digit", second: "2-digit"}
    const military_time_options = {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false}
    
    const curr_time = new Date();

    console.clear();
    // For 24 hour time period
    console.log(curr_time.toLocaleTimeString("en-us", military_time_options));

    // For 12 hour time period
    console.log(curr_time.toLocaleTimeString("en-us", options))
}

function clock(){
    setInterval(display_system_time, 1000)
};

clock();