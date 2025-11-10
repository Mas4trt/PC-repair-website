const secondsBlock = document.querySelector(".timer__seconds");
const minutesBlock = document.querySelector(".timer__minutes");
const hoursBlock = document.querySelector(".timer__hours");
const daysBlock = document.querySelector(".timer__days");

let interval;

const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;
    if(value > 10 && value < 20) return words[1];
    if(lastNum > 1 && lastNum < 5) return words[2];
    if(lastNum === 1) return words[0];
    return words[1];
}

const defoultName = () => {
    daysBlock.nextElementSibling.textContent = "секунд";
    hoursBlock.nextElementSibling.textContent = "минут";
    minutesBlock.nextElementSibling.textContent = "часов";
    secondsBlock.nextElementSibling.textContent = "дней";
}

const updateTimer = () => {
    const dataDeclension = {
        seconds : ["секунда", "секунд", "секунды"],
        minutes : ["минута", "минут", "минуты"],
        hours : ["час", "часов", "часа"],
        days : ["день", "дней", "дня"],
    } 

    const date = new Date();
    const dateDeadline = new Date("12 november 2025").getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days > 9 ? days : "0" + days;
    const fHours = hours > 9 ? hours : "0" + hours;
    const fMinutes = minutes > 9 ? minutes : "0" + minutes;
    const fSeconds = seconds > 9 ? seconds : "0" + seconds;

    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    daysBlock.nextElementSibling.textContent = numWord(days, dataDeclension.days);
    hoursBlock.nextElementSibling.textContent = numWord(hours, dataDeclension.hours);
    minutesBlock.nextElementSibling.textContent = numWord(minutes, dataDeclension.minutes);
    secondsBlock.nextElementSibling.textContent = numWord(seconds, dataDeclension.seconds);

    if(timeRemaining <= 0) {
        clearInterval(interval);
        secondsBlock.textContent = "00";
        minutesBlock.textContent = "00";
        hoursBlock.textContent = "00";
        daysBlock.textContent = "00";
        defoultName();
        daysBlock.style.color = "red";
        daysBlock.nextElementSibling.style.textDecoration = "line-through";
        hoursBlock.style.color = "red";
        hoursBlock.nextElementSibling.style.textDecoration = "line-through"
        minutesBlock.style.color = "red";
        minutesBlock.nextElementSibling.style.textDecoration = "line-through";
        secondsBlock.style.color = "red";
        secondsBlock.nextElementSibling.style.textDecoration = "line-through"
    }
}

interval = setInterval(updateTimer, 500);