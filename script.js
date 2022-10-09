const submit = document.getElementById("submit");
let weight = document.getElementById("weight");
let height = document.getElementById("height");

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = document.getElementById("result");
  let w = weight.value;
  let h = height.value;
  let bmi = w / Math.pow(h / 100, 2);
  function categories() {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obesity";
    }
  }
  if (w === "" && h === "") {
    result.innerHTML = "Please input your weight and height";
  } else {
    result.innerHTML =
      "Your BMI is " + bmi.toFixed(1) + " which means You are " + categories();
  }
});
