const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;

  const key = e.target;
  const keyvalue = key.textContent;
  const displayvalue = display.textContent;
  const { type } = key.dataset;
  const { previouskeytype } = calculator.dataset;

  
  //display
  //check for number
  if (type === "number") {
    if (displayvalue === "0") {
      display.textContent = keyvalue;
    } else if (previouskeytype === "operator") {
      display.textContent = keyvalue;
    } else {
      display.textContent = displayvalue + keyvalue;
    }
    
  }

  //check for operator
  if (type === "operator") {
    console.log(key);
    const operatorkeys = document.querySelectorAll('[data-type="operator"]');
    operatorkeys.forEach((el) => {
      el.dataset.state = "";
    });
    //key.dataset.state = "selected";
    console.log(operatorkeys);
    calculator.dataset.firstnumber = displayvalue;
    calculator.dataset.operator = key.dataset.keyoperator;
  }

  //perform calculation
  if (type === "equal" ) {
    
    const firstnumber = Number(calculator.dataset.firstnumber);
    const operator = calculator.dataset.operator;
    const secondnumber = Number(displayvalue);

    console.log(firstnumber, operator, secondnumber);

    //calculation
    let result;
    if (operator === "plus") result = firstnumber + secondnumber;
    if (operator === "minus") result = firstnumber - secondnumber;
    if (operator === "times") result = firstnumber * secondnumber;
    if (operator === "divide") result = firstnumber / secondnumber;
        display.textContent = result;
  }

  if (type === "clear") {
    display.textContent = "0";
  }
  calculator.dataset.previouskeytype = type;
});
