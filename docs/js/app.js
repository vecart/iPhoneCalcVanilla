//DOM Elements
const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const display = document.querySelector('.display')

//Set Time
const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    //12-hour time
    if (currentHour > 12) { currentHour -= 12;}
    
    hour.textContent = currentHour.toString();
    min.textContent = currentMinute.toString().padStart(2, '0');
    //padStart: 2= max length; if not length 2, padding start with 0.
};
setInterval(updateTime, 1000);
updateTime();
