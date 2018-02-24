var choreslist = ["Do Dishes", "Take Out the Trash", "Brush Pet Tiger", "Buy Shu a Beer", "Win at Fortnite"];
var choresdone = 0;
var donebutton = document.getElementById('done');

function addchores() {
	// Your code goes here
  for (var i = 0; i < choreslist.length; i++) {
    newElement(choreslist[i]);
  }
};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var a = ev.target.classList.toggle('checked');
    if (a) {
      choresdone++;
    }
    else {
      choresdone--;
    }
    if (choresdone == choreslist.length) {
      donebutton.style.visibility = 'visible';
    }
    else {
      donebutton.style.visibility = 'hidden';
    }
  }
}, false);

function clearlist() {
  list.style.display = 'none';
  choreslist = [];
  donebutton.style.visibility = 'hidden';
}

// Create a new list item when clicking on the "Add" button
function newElement(chore) {
  var li = document.createElement("li");
  var inputValue = chore;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
}

addchores();
