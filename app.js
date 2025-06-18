/**DOM elements */
const body = document.querySelector("body");

//wrappers and containers for big sections of the app
const appWrapper = createElement("div", "app-wrapper");
const calculatorWrapper = createElement("div", "calculator-wrapper");
const screenWrapper = createElement("section", "screen-wrapper");
const buttonsContainer = createElement("section", "buttons-container");
const numberButtonsContainer = createElement(
  "section",
  "number-buttons-container"
);
const operationButtonsContainer = createElement(
  "section",
  "operations-buttons-container"
);

const mainOperationContainer = createElement(
  "div",
  "main-operations-container"
);
const previousOperationContainer = createElement(
  "div",
  "previous-operation-container"
);

const addButton = createButtons("operation-button", "+", "operation");
const subButton = createButtons("operation-button", "-", "operation");
const multiplyButton = createButtons("operation-button", "*", "operation");
const divideButton = createButtons("operation-button", "/", "operation");
const equalButton = createButtons("operation-button", "=", "equal");
const clearButton = createButtons("clear-btn", "AC", "clear");
//numbers array for numbers buttons
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
  const button = createButtons("number-button", number);
  button.addEventListener("click", handleClickNumber);
  numberButtonsContainer.append(button);
});

operationButtonsContainer.append(
  addButton,
  subButton,
  multiplyButton,
  divideButton,
  equalButton,
  clearButton
);
previousOperationContainer.textContent = `55 * 2 = 110`;
mainOperationContainer.textContent = `110`;

buttonsContainer.append(numberButtonsContainer, operationButtonsContainer);

screenWrapper.append(previousOperationContainer, mainOperationContainer);

calculatorWrapper.append(screenWrapper, buttonsContainer);
appWrapper.append(calculatorWrapper);

body.append(appWrapper);

/**FUNCTION CALLINGS */
const calculator = new Calculator();

/**FUNCTIONS */
function createElement(element, className) {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}

function Calculator() {
  return {
    firstNumber: "",
    operand: "",
    secondNumber: "",
    result: "",
    currentOperation: "",
    isSecondNumber: false,
    add: function () {
      return +this.firstNumber + +this.secondNumber;
    },
    sub: function () {
      return +this.firstNumber - +this.secondNumber;
    },
    multiply: function () {
      return +this.firstNumber * +this.secondNumber;
    },
    divide: function () {
      return +this.firstNumber / +this.secondNumber;
    },
    reset: function () {
      this.firstNumber = "";
      this.secondNumber = "";
      this.currentOperation = "";
      this.operand = "";
      this.result = "";
      this.isSecondNumber = false;
    },
    getNumber: function (numberType) {
      if (numberType === "result") {
        return this.result;
      } else if (numberType === "first") {
        return this.firstNumber;
      } else if (numberType === "second") {
        return this.secondNumber;
      } else {
        throw new Error("that number doesnt exist");
      }
    },
    setNumber: function (input) {
      if (this.isSecondNumber) {
        this.secondNumber += `${input}`;
        return;
      }
      this.firstNumber += `${input}`;
    },
    setOperation: function (input) {
      this.operand = input;
      this.isSecondNumber = true;
      operandContainer.textContent = input;
    },
    getCalculation: function () {
      if (this.operand === "+") {
        this.result = this.add();
        return;
      }
      if (this.operand === "-") {
        this.result = this.sub();
        return;
      }
      if (this.operand === "*") {
        this.result = this.multiply();
        return;
      }
      if (this.operand === "/") {
        this.result = this.divide();
        return;
      }
    },
    getResult: function () {
      this.isSecondNumber = false;
      this.getCalculation();
      return this.result;
    },
    getIsSecondNumber: function () {
      return this.isSecondNumber;
    },
    getOperand: function () {
      return this.operand;
    },
  };
}

function createButtons(className, content, type) {
  const button = createElement("button", className);
  button.textContent = content;
  if (typeof content === "number") {
    button.value = content;
  }
  if (type === "operation") {
    button.addEventListener("click", (e) =>
      calculator.setOperation(e.target.textContent)
    );
  }
  if (type === "equal") {
    button.addEventListener("click", handleResult);
  }
  if (type === "clear") {
    button.addEventListener("click", handlerClear);
  }
  return button;
}
function handleClickNumber(e) {
  calculator.setNumber(e.target.value);
  if (calculator.getIsSecondNumber()) {
    secondNumberContainer.textContent = calculator.getNumber("second");
    return;
  }
  firstNumberContainer.textContent = calculator.getNumber("first");
}

function handleResult() {
  answerContainer.textContent = calculator.getResult();
}
function handlerClear() {
  calculator.reset();
  answerContainer.textContent = "";
  firstNumberContainer.textContent = "";
  operandContainer.textContent = "";
  secondNumberContainer.textContent = "";
}
