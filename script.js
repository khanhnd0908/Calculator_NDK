// This function clear screen
function clearScreen(){
    document.getElementById("result").value = "";
}

// This function display values
function display(value){
    document.getElementById("result").value += value;
}

//This function delete the last character
function deleteChar(){
    var x = document.getElementById("result").value;
    if (!x) return;
    x = x.substr(0, x.length - 1);
    document.getElementById("result").value = x;
}

//This function evaluates the expression and return result
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}