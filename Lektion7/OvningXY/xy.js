let calc = document.getElementById('submitbutton');
calc.onclick = calculate;

function calculate(){
    let x1 = document.getElementById('x1').value;
    let x1val = parseInt(x1);
    let x2 = document.getElementById('x2').value;
    let x2val = parseInt(x2);
    let y1 = document.getElementById('y1').value;
    let y1val = parseInt(y1);
    let y2 = document.getElementById('y2').value;
    let y2val = parseInt(y2);

    let number1 = Math.pow((x2val-x1val), 2);
    let number2 = Math.pow((y2val-y1val), 2);
    let number3 = number1+number2;
    let number4 = Math.sqrt(number3);

    document.getElementById('answer').innerHTML = ('Avståndet är ' + number4);

}

