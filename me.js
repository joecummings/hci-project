var id;
var name;
var email;
var username;
var password;
var houseid;

function load(uid  = sessionStorage.profileid) {
  if (uid) {
    id = uid;
  }
  else {
    id = sessionStorage.userid;
  }

  name = sessionStorage.getItem('name'+id);
  email = sessionStorage.getItem('email'+id);
  username = sessionStorage.getItem('username'+id);
  password = sessionStorage.getItem('password'+id);
  houseid = sessionStorage.getItem('house'+id);
  document.getElementById('Namebox').innerHTML = name;
  document.getElementById('userbox').innerHTML = 'Username: '+username;
  document.getElementById('emailbox').innerHTML = 'Email: '+email;
  document.getElementById('houseidbox').innerHTML = 'House ID: '+houseid;

  sessionStorage.profileid = sessionStorage.userid;
  if (sessionStorage.getItem('pic'+id)) {
    putinpic();
  }
  else {
    document.getElementById('propic').style.display = 'none';
  }
}

function changepic() {
  sessionStorage.setItem('pic'+id, document.getElementById('newpic').value);
  putinpic();
}

function putinpic() {
  var picaddr = sessionStorage.getItem('pic'+id);
  document.getElementById('inputpic').style.display = 'none';
  var pic = document.getElementById('propic');
  pic.style.display = "flex";
  pic.src = picaddr;
}

load();
