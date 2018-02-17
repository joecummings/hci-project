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
}

function goto() {
    var houseid = document.getElementById('myInput').value;
    if (houseid = '') {
        alert('Must enter House ID');
        return false;
    }
}
