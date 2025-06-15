const body = document.querySelector("body");

const calculatorWrapper = createElement("div", "calculator-wrapper");
const screenWrapper = createElement("div", "screen-wrapper");

calculatorWrapper.append(screenWrapper);

body.append(calculatorWrapper);

function createElement(element, className) {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}
