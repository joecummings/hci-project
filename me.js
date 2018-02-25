var id = sessionStorage.userid;
var name = sessionStorage.getItem('name'+id);
var email = sessionStorage.getItem('email'+id);
var username = sessionStorage.getItem('username'+id);
var password = sessionStorage.getItem('password'+id);
var houseid = sessionStorage.getItem('house'+id);

function load() {
  document.getElementById('stuff').innerHTML = "Name: " + name + " ID: " + id + " email: " + email + " username: " + username + " password: " + password + " Houseid: " + houseid;
}

load();
