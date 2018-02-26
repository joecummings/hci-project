var rms;

function loadrms() {
	// Your code goes here
  var id = sessionStorage.userid;
  var houseid = sessionStorage.getItem('house' + id);
  var toppart = document.getElementById('top');
  toppart.innerHTML = 'House ID: ' + houseid;
  rms  = sessionStorage.getItem(houseid);
  newrms = rms;
  b = newrms.indexOf(',');
  while (b != -1) {
    roomie = newrms.substring(0, b);
    newElement(roomie);
    newrms = newrms.substring(b+1);
    b =  newrms.indexOf(',');
  }
  newElement(newrms);
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
