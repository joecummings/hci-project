function generateID(){
    var p = document.createElement("p");
    var inputValue = '';
    for (var i = 0; i < 5; i++){
        inputValue += (Math.floor(Math.random()*10))
    }
    console.log(inputValue);
    var t = document.createTextNode(inputValue);
    p.appendChild(t);
    document.getElementById("ID").appendChild(p);
    document.getElementById("generateid").disabled = true;
    document.getElementById('myInput').value = inputValue;
}

function goto() {
    var houseid = document.getElementById('myInput').value;
    if (houseid.length == 0) {
        alert('Must enter House ID');
    }
    else {
      var id = sessionStorage.userid;
      sessionStorage.setItem('house'+id, houseid);
      if (sessionStorage.getItem(houseid)) {
          var rms = sessionStorage.getItem(houseid);
      } else {
          var rms = [];
      }
      var name = sessionStorage.getItem('name'+id);
      rms = [rms, name];
      sessionStorage.setItem(houseid, rms);
      window.location.href = 'home.html';
    }
}
