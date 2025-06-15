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
    firstNumber: null,
    secondNumber: null,
    result: null,
    currentOperation: null,
    add: function () {
      this.result = this.firstNumber + this.secondNumber;
    },
    sub: function () {
      this.result = this.firstNumber - this.secondNumber;
    },
    multiply: function () {
      this.result = this.firstNumber * this.secondNumber;
    },
    divide: function () {
      this.result = this.firstNumber / this.secondNumber;
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
        return;
      }
      this.firstNumber = input;
    },
  };
}

const calculator = new Calculator();

calculator.setNumber(5);
calculator.setNumber(20);

calculator.sub();
console.log(calculator.getNumber("result"));
