var id = sessionStorage.userid;
var choreslist = sessionStorage.getItem('todo' + id);
var choresdone = 0;
var totalchores = 0;
var pointsearned = 0;
var donebutton = document.getElementById('done');
var checkedchores = sessionStorage.getItem('tododone' + id);

function addchores() {
	// Your code goes here
  b = choreslist.indexOf(',');
  var i = 1;
  while (b != -1) {
    chore = choreslist.substring(0, b);
    chore = i + '. ' + chore;
    i++;
    newElement(chore);
    choreslist = choreslist.substring(b+1);
    b =  choreslist.indexOf(',');
  }
  if (choreslist != []) {
    choreslist = i + '. ' + choreslist;
    newElement(choreslist);
  }
};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var a = ev.target.classList.toggle('checked');
    var ppc = Math.round(Math.random()*4+8);
    if (a) {
      choresdone++;
      pointsearned = pointsearned + ppc;
      if (checkedchores) {
        checkedchores = checkedchores + ev.target.innerHTML.split('.')[0];
      }
      else {
        checkedchores = ev.target.innerHTML.split('.')[0];
      }
    }
    else {
      choresdone--;
      pointsearned = pointsearned - ppc;
      var c = ev.target.innerHTML.split('.')[0];
      checkedchores = checkedchores.replace(c, '');

    }
    sessionStorage.setItem('tododone' + id, checkedchores);
    if (choresdone == totalchores) {
      donebutton.style.visibility = 'visible';
    }
    else {
      donebutton.style.visibility = 'hidden';
    }
  }
}, false);

function clearlist() {
  var id = sessionStorage.userid;
  var points = sessionStorage.getItem('points'+id)
  console.log(points)
  var pointsNum = Number(points)+pointsearned;
  console.log(pointsNum)

  sessionStorage.setItem('points'+id, pointsNum)
  list.style.display = 'none';
  sessionStorage.removeItem('todo'+id);
  sessionStorage.removeItem('tododone'+id);
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
  var i = chore.split('.')[0];
  if (checkedchores.search(i) > -1) {
    li.classList.toggle('checked');
    choresdone++;
  }
}

addchores();
