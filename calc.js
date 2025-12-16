document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const history = document.getElementById("history");
  const numberButtons = document.querySelectorAll(".number-btn");
  const symbolButtons = document.querySelectorAll(".symbol");
  const clearButton = document.querySelector(".clear");

  let currentInput = "";
  let operator = "";
  let previousInput = "";

  numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentInput += btn.textContent;
      updateDisplay();
    });
  });

  symbolButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const symbol = btn.textContent;
      if (symbol === "=") {
        if (currentInput !== "" && previousInput !== "") {
          calculate();
        }
      } else if (symbol === ".") {
        if (!currentInput.includes(".")) {
          currentInput += ".";
          updateDisplay();
        }
      } else {
        if (currentInput !== "") {
          if (previousInput === "") {
            previousInput = currentInput;
            operator = symbol;
            currentInput = "";
            updateHistory();
          } else {
            calculate();
            operator = symbol;
            updateHistory();
          }
        } else if (previousInput !== "") {
          operator = symbol;
          updateHistory();
        }
      }
    });
  });

  clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
    updateHistory();
  });

  function updateDisplay() {
    display.value = currentInput || previousInput || "0";
  }

  function updateHistory() {
    if (previousInput && operator) {
      history.textContent = `${previousInput} ${operator}`;
    } else {
      history.textContent = "";
    }
  }

  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    // Show the full expression in history
    history.textContent = `${previousInput} ${operator} ${currentInput} =`;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
  }
});
