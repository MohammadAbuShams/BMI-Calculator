document.getElementById("calculate-btn").addEventListener("click", function () {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

  if (
    !gender ||
    isNaN(age) ||
    isNaN(weight) ||
    isNaN(height) ||
    weight <= 0 ||
    height <= 0 ||
    age <= 0
  ) {
    document.getElementById("result").textContent =
      "Please enter valid values for all fields.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  document.getElementById("result").textContent = `
      Your BMI is ${bmi} (${category}).`;
});
