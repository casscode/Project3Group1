// Getting a reference to the button on the page with the id property set to `click-me`
let button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
let inputField = d3.select("#input-field");

// Define a variable to keep track of whether the button was clicked
let buttonClicked = false;

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  // Set buttonClicked to true
  buttonClicked = true;

  // Update the image immediately after the button is clicked
  let inputValue = +inputField.node().value; // Get the current input value
  if (inputValue < 100) {
    // Image for values less than 100
    d3.select(".wiki-me").html("<img src='https://i.imgur.com/MXmzpyB.png' alt='too low!'>");
  } else {
    // Image for values greater than or equal to 100
    d3.select(".wiki-me").html("<img src='https://i.imgur.com/zIRi4iW.png' alt='too high!'>");
  }
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function(event) {
  let inputValue = +event.target.value; // Convert input value to a number

  if (buttonClicked) {
    if (inputValue < 100) {
      // Image for values less than 100
      d3.select(".wiki-me").html("<img src='https://i.imgur.com/MXmzpyB.png' alt='too low!'>");
    } else {
      // Image for values greater than or equal to 100
      d3.select(".wiki-me").html("<img src='https://i.imgur.com/zIRi4iW.png' alt='too high!'>");
    }
  }
});
