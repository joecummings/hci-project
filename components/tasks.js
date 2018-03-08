var chores = [];
var deletedChores = [];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    // document.getElementById("myModalUL").appendChild(li);
    chores.push(inputValue);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    // deletedChores.push(close[i].parentElement.firstChild.data);
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      deletedChores.push(this.parentElement.firstChild.data);
    }
  }
}

function assign() {
  if (chores.length == 0){
    alert('You have to enter some chores first');
  }
  else
  {
    for (i = 0; i < close.length; i++) {
      var div = close[i].parentElement;
      div.style.display = "none";
    }
    var id = sessionStorage.userid;
    var houseid = sessionStorage.getItem('house'+id);
    var rms = sessionStorage.getItem(houseid);
    var c;
    rms = rms.split(',');
    var rmcount = rms.length;
    var i = Math.round(Math.random()*4);
    var tempid;
    var tempchores;
    while (chores.length != 0){
      c = chores.pop();
      tempid = rms[i % rmcount];
      if (sessionStorage.getItem('todo'+tempid)) {
        tempchores = sessionStorage.getItem('todo'+tempid);
        tempchores = tempchores + ',' + c;
        sessionStorage.setItem('todo' + tempid, tempchores);
      }
      else {
        sessionStorage.setItem('todo' + tempid, c);
      }
      i++;
    }
    alert('Chores Assigned!')
  }
}

function go() {
  var currentChores = compare(chores, deletedChores);
   console.log(document.getElementById("myModalUL").length);
   document.getElementById("myModalUL").innerHTML = '';
  for (var j = 0; j < currentChores.length; j++){
    var li = document.createElement("li");
    var t = document.createTextNode(chores[j]);
    li.appendChild(t);
    var select = document.createElement("select");
    // hardcoded in values
    var id = sessionStorage.userid;
    var houseid = sessionStorage.getItem('house' + id);
    rms  = sessionStorage.getItem(houseid);
    rms = rms.split(',');
    for (var k = 0; k < rms.length; k++){
      var o = document.createElement("option");
      id = rms[k];
      var name = sessionStorage.getItem('name'+id)
      var txt = document.createTextNode(name);
      o.setAttribute("value",name);
      select.appendChild(o).appendChild(txt);
    }
    select.style.float = "right";
    li.appendChild(select);
    document.getElementById("myModalUL").appendChild(li);
  }
}
function assignChores() {
  for (i = 0; i < close.length; i++) {
    var div = close[i].parentElement;
    div.style.display = "none";
  }
  var selects = document.getElementsByTagName("select")
  var options = document.getElementsByTagName("li")
  var id = sessionStorage.userid;
  var houseid = sessionStorage.getItem('house'+id);
  var rms = sessionStorage.getItem(houseid);
  rms = rms.split(',');
  var picked = '';
  var str = '';
  for(var i = 0; i < selects.length; i++)
  {
    for (var j = 0;  j < rms.length; j++) {
      picked = options[i].childNodes;
      str = picked[0].data;
      var tempid = rms[j];
      if(selects[i].options[selects[i].selectedIndex].text == sessionStorage.getItem('name'+tempid))
      {
        if (sessionStorage.getItem('todo'+tempid)) {
          tempchores = sessionStorage.getItem('todo'+tempid);
          tempchores = tempchores + ',' + str;
          sessionStorage.setItem('todo' + tempid, tempchores);
        }
        else {
          sessionStorage.setItem('todo' + tempid, str);
        }
      }
    }
  }
  alert('Chores Assigned!')
}

document.getElementById("myInput")
.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submite").click();
  }
});


function compare(list1, list2){
  if (list1 == 0){
    return [];
  }
  var returnlist = [];
  for (var i = 0; i < list1.length; i++){
    var temp = 0
    for (var j = 0; j < list2.length; j++){
      if (list1[i] == list2[j]){
        temp = 1;
      }
    }
    if (temp == 0){
      returnlist.push(list1[i])
    }
  }
  console.log(list1);
  console.log(list2);
  console.log(returnlist);
  return returnlist;
}
