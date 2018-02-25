var choreslist = sessionStorage.getItem('todo');
var choresdone = 0;
var totalchores = 0;
var donebutton = document.getElementById('done');

function addchores() {
	// Your code goes here
  b = choreslist.indexOf(',');
  while (b != -1) {
    chore = choreslist.substring(0, b);
    newElement(chore);
    choreslist = choreslist.substring(b+1);
    b =  choreslist.indexOf(',');
  }
  newElement(choreslist);
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
    if (choresdone == totalchores) {
      donebutton.style.visibility = 'visible';
    }
    else {
      donebutton.style.visibility = 'hidden';
    }
  }
}, false);

function clearlist() {
  list.style.display = 'none';
  sessionStorage.todo = [];
  donebutton.style.visibility = 'hidden';
  totalchores = 0;
  choresdone = 0;
}

// Create a new list item when clicking on the "Add" button
function newElement(chore) {
  var li = document.createElement("li");
  var inputValue = chore;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  totalchores++;
}

addchores();
