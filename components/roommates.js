var rms;

// load roommate list
function loadrms() {
  var id = sessionStorage.userid;
  sessionStorage.profileid = id;
  var houseid = sessionStorage.getItem('house' + id);
  var toppart = document.getElementById('top');
  toppart.innerHTML = 'House ID: ' + houseid;
  rms  = sessionStorage.getItem(houseid);
  rms = rms.split(',')
  for (var i = 0; i < rms.length; i++) {
    id = rms[i];
    roomie = sessionStorage.getItem('name'+id);
    newElement(roomie, id);
  }
};

// links each roommate to correct profile page
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var a = ev.target.classList.toggle('checked');
    var id = ev.target.innerHTML.split(': ')[1];
    id = id.split(')')[0];
    sessionStorage.profileid = id;
    window.location.href = 'me.html';
  }
}, false);


// Create a new list item for a roommate
function newElement(rm, id) {
  var li = document.createElement("li");
  var inputValue = rm + "   (UserID: " + id +")";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
}

// enables hover on tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

loadrms();
