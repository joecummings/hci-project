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
    points = sessionStorage.getItem('points'+id);
  document.getElementById('Namebox').innerHTML = name;
  document.getElementById('userbox').innerHTML = username;
  document.getElementById('emailbox').innerHTML = email;
  document.getElementById('houseidbox').innerHTML = houseid;
    document.getElementById('pointsbox').innerHTML = points;

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
  document.getElementById('inputpictxt').style.display = 'none';
  var pic = document.getElementById('propic');
  pic.style.display = "flex";
  pic.src = picaddr;
}

load();
