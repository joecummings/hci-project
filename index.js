var emessage = document.getElementById('error');
var goodends = ['com', 'org', 'net', 'edu'];

function makeaccount(){
  var firstpassword = document.getElementById('password1').value;
  var secondpassword = document.getElementById('password2').value;
  var email = document.getElementById('email').value;

  var firstpart = email.split(".")[0];
  var endpart = email.split(".")[1];
  var correctend = goodends.indexOf(endpart);
  var atexists = firstpart.indexOf('@');
  if (correctend == -1) {
      emessage.innerHTML = 'Not a Valid Email Address';
  }
  else if (atexists < 0) {
    emessage.innerHTML = 'Not a Valid Email Address';
  }
  else if (firstpart.substring(0,atexists).length == 0) {
    emessage.innerHTML = 'Not a Valid Email Address';
  }
  else if (firstpart.substring(atexists + 1).length == 0) {
    emessage.innerHTML = 'Not a Valid Email Address';
  }
  else if(firstpassword != secondpassword) {
      emessage.innerHTML = 'Passwords must match!';
  }
  else {
      window.location.href = 'join.html';
  }
}
