let h1 = document.getElementById('one');
console.log(h1);

h1.innerHTML = "DOM i Javascript.";

h1.style.color = 'aqua';
h1.style.fontSize = '50px';

let p = document.querySelector('#one');

//måste vara CSS-selektor
p = document.querySelectorAll('p');
p = document.querySelectorAll('.demo');
//returnerar en Nodelist
//Det finns en forEach-metod i en NodeList 
p.forEach(function(element){
    element.style.color = 'purple';
})
//samma som nedan, modernt sätt att skriva
p.forEach(element=>element.style.color = 'purple')


p.forEach(element=> element.className = 'cool')

p = document.getElementsByTagName('p');


p = document.getElementsByClassName('demo');
for(const element of p){
    element.style.color = 'blue';
}



//endast om man bara ska ha en funktion, använd helst inte
let testVar = document.getElementById('test');

testVar.onclick = myFunction;

function myFunction(){
    testVar.style.backgroundColor = 'aqua';
}




let testVar2 = document.getElementById('test2');



