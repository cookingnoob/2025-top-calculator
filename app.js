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

const operationContainer = createElement("div", "operations-container");
const firstNumberContainer = createElement("div", "number-container");
const operandContainer = createElement("div", "operand-container");
const secondNumberContainer = createElement("div", "number-container");

const addButton = createButtons("operation-button", "+");
const subButton = createButtons("operation-button", "-");
const multiplyButton = createButtons("operation-button", "*");
const divideButton = createButtons("operation-button", "/");
//numbers array for numbers buttons
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
  const button = createButtons("number-button", number);
  numberButtonsContainer.append(button);
});

operationButtonsContainer.append(
  addButton,
  subButton,
  multiplyButton,
  divideButton
);

buttonsContainer.append(numberButtonsContainer, operationButtonsContainer);

screenWrapper.append(
  operationContainer,
  firstNumberContainer,
  operandContainer,
  secondNumberContainer
);

calculatorWrapper.append(screenWrapper, buttonsContainer);
appWrapper.append(calculatorWrapper);

body.append(appWrapper);

/**FUNCTION CALLINGS */
const calculator = new Calculator();

calculator.setNumber(5);
calculator.setNumber(20);
calculator.setOperation("-");

calculator.getCalculation();
calculator.getResult();

/**FUNCTIONS */
function createElement(element, className) {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}

function Calculator() {
  return {
    firstNumber: 0,
    secondNumber: null,
    result: null,
    currentOperation: null,
    operand: null,
    add: function () {
      return this.firstNumber + this.secondNumber;
    },
    sub: function () {
      return this.firstNumber - this.secondNumber;
    },
    multiply: function () {
      return this.firstNumber * this.secondNumber;
    },
    divide: function () {
      return this.firstNumber / this.secondNumber;
    },
    reset: function () {
      this.firstNumber = null;
      this.secondNumber = null;
      this.currentOperation = null;
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
      if (this.firstNumber) {
        this.secondNumber = input;
        secondNumberContainer.textContent = input;
        return;
      }
      this.firstNumber = input;
      firstNumberContainer.textContent = input;
    },
    setOperation: function (input) {
      this.operand = input;
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
      return this.result;
    },
  };
}

function createButtons(className, content) {
  const button = createElement("button", className);
  button.textContent = content;
  if (typeof content === "number") {
    button.value = content;
  }
  return button;
}
