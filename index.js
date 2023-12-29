const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}
function offDisplay(){
    display.value = "";
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
    console.log(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
