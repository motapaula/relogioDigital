// Creating new object with Date() object
function localTime(){
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    document.getElementById("hours").textContent = currentHour;
    document.getElementById("minutes").textContent = currentMinute;
    document.getElementById("seconds").textContent = currentSecond;
}

localTime();
setInterval(localTime, 1000);


