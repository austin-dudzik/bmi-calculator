$(document).ready(function() {

  // Run function on form submit
  $("form").submit(checkBMI);

  // Set default bg color of BMI result card
  $("#bmiCard").css("background-color", "#6c757d");

  // Define checkBMI function
  function checkBMI(event) {

    event.preventDefault();

    // Set userHeight variable
    let userHeight = $("input#height").val();

    // Set userWeight variable
    let userWeight = $("input#weight").val();

    // Calculate BMI
    let bmiResult = userWeight / (userHeight * userHeight) * 703;

    // Remove decimal places
    bmiResult = bmiResult.toFixed(1);

    // Determine BMI category

    // If BMI is greater than 40...
    if (bmiResult > 40) {
      category = "Obese Class III (Very severely obese)";
      $("#bmiCard").css("background-color", "#dc3545");
    }

    // If BMI is greater than 35...
    else if (bmiResult > 35) {
      category = "Obese Class II (Severely obese)";
      $("#bmiCard").css("background-color", "#dc3545");
    }

    // If BMI is greater than 30...
    else if (bmiResult > 30) {
      category = "Obese Class I (Moderately obese)";
      $("#bmiCard").css("background-color", "#ffc107");
    }

    // If BMI is greater than 25...
    else if (bmiResult > 25) {
      category = "Overweight";
      $("#bmiCard").css("background-color", "#ffc107");
    }

    //If BMI is greater than 18.5...
    else if (bmiResult > 18.5) {
      category = "Normal (healthy weight)";
      $("#bmiCard").css("background-color", "#28a745");
    }

    // If BMI is greater than 16...
    else if (bmiResult > 16) {
      category = "Underweight";
      $("#bmiCard").css("background-color", "#ffc107");
    }

    // If BMI is greater than 15...
    else if (bmiResult > 15) {
      category = "Severely underweight";
      $("#bmiCard").css("background-color", "#dc3545");
    }

    // Anything else...
    else {
      category = "Very severely underweight";
      $("#bmiCard").css("background-color", "#dc3545");

    }

    // Display BMI result on page
    $("h1#bmiResult").text(bmiResult);

    // Display BMI category on page
    $("h1#category").text(category);

  }

});