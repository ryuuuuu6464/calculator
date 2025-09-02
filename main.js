function get_calc(btn) {
  const display = document.dentaku.display;
  const value = btn.value;
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (value === "AC") {
    display.value = "";
  } else if (operators.includes(value)) {
    if (display.value === "") {
      if (value === "-") {
        display.value += value;
      }
    }
    else if (operators.includes(lastChar)) {
      if (value === "-" && lastChar !== "-") {
        display.value += value;
      }
    } else {
      display.value += value;
    }
  } else if (value === ".") {
    if (display.value === "") {
      return;
    }
    if (!isNaN(lastChar)) {
      display.value += value;
    }
  } else {
    display.value += value;
  }
}
