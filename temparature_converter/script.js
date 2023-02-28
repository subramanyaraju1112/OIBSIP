const calculateTemp = () => {
  const inputTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  //   Celsius To Fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = Math.round(cel * 9) / 5 + 32;
    return fahrenheit;
  };

  //   Fahrenheit To Celsius
  const fahToCel = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  if (valueTemp == "cel") {
    document.getElementById("result").innerHTML =
      celToFah(inputTemp) + "° Fahrenheit";
  } else {
    document.getElementById("result").innerHTML =
      fahToCel(inputTemp) + "° Celsius";
  }
};
