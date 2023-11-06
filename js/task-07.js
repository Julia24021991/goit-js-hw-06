const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener('input', function () {
    text.style.fontSize = this.value + 'px'
})

text.style.fontSize = slider.value + 'px';