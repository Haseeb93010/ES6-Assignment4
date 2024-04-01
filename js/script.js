
function handleValue(val){
    document.getElementById("inputText").value += val;
}

function handleCalculate(){
    let value = document.getElementById("inputText").value;
    if(!value){
        Toastify({
            text: "Please Insert The Number.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #292d2e, #abb4b9)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
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

