const body = document.querySelector("body");

const appWrapper = createElement("div", "app-wrapper");
const calculatorWrapper = createElement("div", "calculator-wrapper");
const screenWrapper = createElement("div", "screen-wrapper");

calculatorWrapper.append(screenWrapper);
appWrapper.append(calculatorWrapper);

body.append(appWrapper);

function createElement(element, className) {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}

function Calculator() {
  return {
    firstNumber: 4,
    secondNumber: 9,
    result: 0,
    currentOperation: null,
    add: function () {
      this.result = this.firstNumber + this.secondNumber;
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
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.currentOperation = null;
    },
    getResult: function () {
      return this.result;
    },
  };
}

const calculator = new Calculator();

calculator.add();
console.log(calculator.getResult());
