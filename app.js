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
