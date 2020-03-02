let car = {};
console.log(car);

let person = new Object();



person.name = "Cornelia";
person.age = 26;


person.info = function(){
    return this.name + " är " + this.age + " år gammal!";
}



console.log(person.name);

console.log(person.info());

//Skapa flera objekt med en kontruktor
//Constructor Function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.children = [];
    }
}

let cornelia = new Person("Cornelia", 26);
let anna = new Person("Anna", 57);

anna.children.push(cornelia);

console.log(cornelia);

const persons = [cornelia, anna];
console.log(persons);

console.log(anna.children);

function Course(name, teacher, points, grade){
    this.name = name;
    this.teacher = teacher;
    this.points = points;
    this.grade = grade;
}

const math = new Course("Math", "Mette Marit", 130, 5);
const art = new Course("Art", "Greta", 100, 3);
const programming = new Course("Programming", "Mahmud", 150, 5);

const courses = [math, art, programming];

console.log(courses);

//Ternary-operaton

function getFee(isMember){
    return (isMember ? "20kr" : "100kr");
}

console.log(getFee(true));
console.log(getFee(false));



function getDay(){
    let day = "";
    switch (new Date().getDay()){
        case 0: day = "söndag"; break;
        case 1: day = "måndag"; break;
        case 2: day = "tisdag"; break;
        case 3: day = "onsdag"; break;
        case 4: day = "torsdag"; break;
        case 5: day = "fredag"; break;
        case 6: day = "lördag"; break;
    }
    return ("Det är " + day + " idag.");
}

console.log(getDay());



