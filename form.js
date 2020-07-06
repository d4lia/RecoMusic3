/*function validateForm(event) {
  event.preventDefault();
  console.log("Form submitted");
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Artist name must be filled out");
    return false;
  }
}*/

/*function myFunction(event) {
  event.preventDefault();
  // Get the form input field using the id
  var x = document.getElementById("fname").value;

  // This will replace "<" with "&lt;" and "<" with "&gt;"
  x = x.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if (x === "") {
    alert("Artist name must be filled out");
    return false;
  }

  document.getElementById("demo").innerText = x;

  //var y = document.getElementById("fname").value;

  //document.getElementById("demo2").innerText = y;

  //x.push("y");

  var artists = [];

  artists.push(x);
} */

var list = [];

var btn = document.getElementById("btn");

btn.onclick = function() {
  var userInput = document.getElementById("tb").value;
  userInput = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (userInput === "") {
    alert("Artist name must be filled out.");
    return;
  }

  // add to the list
  list.push(userInput);

  // TODO: save to local storage if needed
  // reset the list
  document.getElementById("list").innerHTML = "";
  // display the list
  for (var i in list) {
    document.getElementById("list").innerHTML += "<p>" + list[i] + "</p>";
  }
};
