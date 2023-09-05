const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      previousInput = parseFloat(previousInput);
      currentInput = parseFloat(currentInput);

      switch (operator) {
        case "+":
          currentInput = previousInput + currentInput;
          break;
        case "-":
          currentInput = previousInput - currentInput;
          break;
        case "*":
          currentInput = previousInput * currentInput;
          break;
        case "/":
          currentInput = previousInput / currentInput;
          break;
      }

      operator = "";
      previousInput = "";
      display.value = currentInput;
    } else if (button.textContent === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "";

    } 
    else if (button.id === "backspace") {
        currentInput = currentInput.slice(0, -1); 
        display.value = currentInput;
    }else if (button.classList.contains("operator")) {
      operator = button.textContent;
      previousInput = currentInput;
      currentInput = "";
    } else {
      currentInput += button.textContent;
      display.value = currentInput;
    }
  });
});

