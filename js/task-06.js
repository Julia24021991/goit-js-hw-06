
const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
    const expectedLength = inputElement.getAttribute("data-length");
    const inputValue = inputElement.value;

    if (inputValue.length === parseInt(expectedLength)) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
    } else {
        inputElement.classList.add("invalid");
        inputElement.classList.remove("valid");
    }
});
