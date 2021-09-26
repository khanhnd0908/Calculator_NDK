let preButton;

// This function clear screen
function clearScreen(){
    document.getElementById("result").value = "";
}

// This function display values
function display(value){
    if (preButton === "=" && "0123456789".includes(value)) clearScreen();
    document.getElementById("result").value += value;
    preButton = "";
}

//This function delete the last character
function deleteChar(){
    let x = document.getElementById("result").value;
    if (!x) return;
    x = x.substr(0, x.length - 1);
    document.getElementById("result").value = x;
}

//This function evaluates the expression and return result
function calculate(){
    const p = document.getElementById("result").value;
    document.getElementById("result").value = eval(p);
    preButton = "=";
}