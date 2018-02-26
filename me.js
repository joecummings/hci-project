var id;
var name;
var email;
var username;
var password;
var houseid;

function load(uid  = sessionStorage.userid) {
  var id = uid;
  var name = sessionStorage.getItem('name'+id);
  var email = sessionStorage.getItem('email'+id);
  var username = sessionStorage.getItem('username'+id);
  var password = sessionStorage.getItem('password'+id);
  var houseid = sessionStorage.getItem('house'+id);
  document.getElementById('stuff').innerHTML = "Name: " + name + " ID: " + id + " email: " + email + " username: " + username + " password: " + password + " Houseid: " + houseid;

}

load();
