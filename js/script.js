
function handleValue(val){
    document.getElementById("inputText").value += val;
}

function handleCalculate(){
    let value = document.getElementById("inputText").value;
    if(!value){
        alert('please type a number');
        return;
    }
    let equation = eval(value);
    document.getElementById("inputText").value = equation
}
function handleDel(){
    let value= document.getElementById("inputText").value;
    let remove = value.toString().slice(0,-1);
    document.getElementById("inputText").value = remove;
}

function handleClear(){
    document.getElementById("inputText").value = "";
}

