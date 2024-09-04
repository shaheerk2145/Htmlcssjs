function addValue(value) {
    var display = document.getElementById('display');
    // console.log(display);
    display.value += value;
    display.value = '';


}
function clearScreen() {
    var display = document.getElementById('display');
    // console.log(display);
    display.value = '';
}

function deleteValue() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculate() {
   
    var display= document.getElementById('display');
    var result = eval(display.value);
    display.value= result;
    console.log(result);
    if (isNaN(result) || !isFinite(result)) {
        display.value = 'Error';
    } else {
        display.value = result;
    }
    console.log(result);
    
}