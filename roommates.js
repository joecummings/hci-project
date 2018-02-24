var rms = ["Shu", "Joe", "Christoph", "Joe2"];

function loadrms() {
	// Your code goes here
  for (var i = 0; i < rms.length; i++) {
    newElement(rms[i]);
  }
};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function() {
  window.location.href = 'me.html';
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(rm) {
  var li = document.createElement("li");
  var inputValue = rm;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
}

loadrms();
