document.addEventListener("DOMContentLoaded", function () {
  let result = document.getElementById("result");

  window.appendNumber = function (number) {
    result.value += number;
  };

  window.appendOperator = function (operator) {
    result.value += operator;
  };

  window.clearResult = function () {
    result.value = "";
  };

  window.calculateResult = function () {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "error";
    }
  };
});
