var emessage = document.getElementById('error');
var goodends = ['com', 'org', 'net', 'edu', '.gov'];

function makeaccount(){
  var firstpassword = document.getElementById('password1').value;
  var secondpassword = document.getElementById('password2').value;
  var thirdpassword = document.getElementById('password3').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('usernameRegistration').value;
  var name = document.getElementById('name').value;

  var firstpart = email.split(".")[0];
  var endpart = email.split(".").pop();
  var correctend = goodends.indexOf(endpart);
  var atexists = firstpart.indexOf('@');
  if (correctend == -1) {
      emessage.innerHTML = 'Invalid Email';
  }
  else if (atexists < 0) {
    emessage.innerHTML = 'Invalid Email';
  }
  else if (firstpart.substring(0,atexists).length == 0) {
    emessage.innerHTML = 'Invalid Email';
  }
  else if (firstpart.substring(atexists + 1).length == 0) {
    emessage.innerHTML = 'Invalid Email';
  }
  else if(secondpassword != thirdpassword) {
      emessage.innerHTML = 'Passwords must match!';
  }
  else if (username.length == 0) {
    emessage.innerHTML = 'No Username';
  }
  else if (name.length == 0) {
    emessage.innerHTML = 'No Name';
  }
  else if (thirdpassword.length == 0) {
    emessage.innerHTML = 'No Password';
  }
  else {
      if (sessionStorage.usercount) {
          sessionStorage.usercount = Number(sessionStorage.usercount)+1;
      } else {
          sessionStorage.usercount = 1;
      }
      sessionStorage.userid = sessionStorage.usercount;
      var id = sessionStorage.userid;

      sessionStorage.setItem(username, id);
      sessionStorage.setItem('username'+id, username);
      sessionStorage.setItem('name'+id, name);
      sessionStorage.setItem('email'+id, email);
      sessionStorage.setItem('password'+id, thirdpassword);
      sessionStorage.setItem('points'+id, Number(0));
      sessionStorage.profileid = sessionStorage.userid;
      window.location.href = 'components/join.html';
  }
}

var emessage2 = document.getElementById('error2');
function login() {
  var password = document.getElementById('password1').value;
  var username = document.getElementById('username').value;
  var successful = 1;

  if (sessionStorage.getItem(username)) {
    var id = sessionStorage.getItem(username);
    var correctpass = sessionStorage.getItem('password'+id);
    if (correctpass != password) {
      successful = 0;
    }
  }
  else {
    successful = 0;
  }


  if (successful == 0) {
    emessage2.innerHTML = 'Login Information Incorrect';
  }
  else {
    sessionStorage.userid = id;
    window.location.href = 'components/home.html';
  }
}
$( "#trigger" )
  .mouseup(function() {
    $("#password1").attr('type','password');
  })
  .mousedown(function() {
    $("#password1").attr('type','text');
  });

function showSignUp(){
  $("#sign-up").toggleClass('hidden');
  $("#sign-button").addClass('hidden');
  $("#login-stuff").addClass('hidden');
}
