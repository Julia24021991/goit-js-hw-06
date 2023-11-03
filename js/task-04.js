const btnIsPositive = document.querySelector('[data-action="increment"]');
const btnIsNegative = document.querySelector('[data-action="decrement"]');
let counterValueStart = document.querySelector("#value");

let counterValue = 0;

function increaseCounter() {
    counterValue += 1;
    counterValueStart.innerHTML = counterValue;
}

function decreaseCounter() {
    counterValue -= 1;
    counterValueStart.innerHTML = counterValue;
}



