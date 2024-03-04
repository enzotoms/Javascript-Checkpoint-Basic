    function subtractNumbers(a, b){
    return a - b;
}






function multiplyNumbers(a, b){
    return a * b;
}


function divideNumbers(a, b){
    return a / b;
}


function addNumbers(a, b){
    return a + b;
}




console.log(multiplyNumbers(50, 20));
console.log(subtractNumbers(100, 50));
console.log(divideNumbers(60, 20));
console.log(addNumbers(10, 10));

let x = 100;
let y = 100;

if (x = y) {
    console.log("yes");
} else {
    console.log("no");
    }

    // if statements
    let area = 100;
    let width = 50;

if (area >= width) {
    console.log("yes area is greather ");
} else {
    console.log("no width is greater");
    }

    let pole = 12;
    let polar = 12;

    if(pole >= polar){
        console.log("absolutely they are the same");
    } else {
        console.log("not defined");
    }

    let paul = 20;
    let vincent = 30;

    if(paul < vincent){
        console.log("yes paul is less than");
    } else {
        console.log("no vincent is greater than");
    }

    // time allocation function
    function timeOfDay(){
        if (new Date().getHours() < 12){
            return "Good morning";
        } else{
            if (new Date().getHours() < 18){
                return "Good afternoon";
            }
        } {
            if (new Date().getHours() < 24){
                return "Good evening";
            }
        }
    }
    

    console.log(timeOfDay());

    function greetUser(timeOfDay){
        if (timeOfDay == "morning"){
            console.log("good morning");
        } else if (timeOfDay == "afternoon"){
            console.log("good afternoon");
        } else if (timeOfDay == "evening"){
            console.log("good evening");
        } else{
            console.log("good night");
        }
    }

    greetUser("evening");
    greetUser("night");


    function name(firstName, lastName){
        return fullName = firstName + " " + lastName;
    }

    console.log(name("thomas", "ernest"));
    console.log(name("momoh", "paul"));

    function greetings(greetings, firstName, lastName){
        return greetings + " " + fullName;
    }


    console.log(greetings("Good Morning", "Thomas", "Ernest"));


// global scope and local scope
    const user = "cletus";

    console.log(user.toUpperCase); //this are string methods used to manipulate strings
    console.log(user.charAt(2).toUpperCase()); //this are strings methods used to manipulate strings
   
    function serveFood(){
        const food = "eba";
        return name + " " + "Take this plate of " + food;
    }

    function welcomeUser(){
        return "Good morning" + name;
    }

    console.log(serveFood());

    console.log(welcomeUser());

 //capitalize first letter of name 
     function capitalizeFirstLetterOfName(name){
        const nameFirstLetter = name.charAt(0).toUpperCase();
        const remainingLetters = name.slice(1);
        return nameFirstLetter + remainingLetters;
    }

    console.log(capitalizeFirstLetterOfName("thomas"));
    console.log(capitalizeFirstLetterOfName("momoh"));

// function assignment
    function message(){
       const message = "Hello" + " "+ "Harry";
return message;
    }

    console.log(message());


    function noOfStudents(classA, classB, classC){
        const totalNumbers = classA + classB + classC;
    return totalNumbers;
    }

    console.log(noOfStudents(10, 20, 30));
    console.log(noOfStudents(20, 30, 40));
    console.log(noOfStudents(30, 40, 50));


    function hotelAvailability(){
        const rooms =30
        if (rooms > 5){
            return "Rooms are available";
        } else {
            return "Rooms are all booked";
        }
    }

    console.log(hotelAvailability());


    function checkOriginality(hp, maxiTv){
        if(hp > maxiTv){
            return "Hp is a loptop, Maxi is a Tv"
        } else{
            return "Maxi is a Tv"
        }
    }

    console.log(checkOriginality(40, 20));
   

    function calculateLog(a){
        return Math.log(a);
    }

    console.log(calculateLog(10));
    console.log(calculateLog(20));
    console.log(calculateLog(30));
    
// objects in Javascript
    const goMyCode = {
        name: "gomycode",
        location: "abuja",
        admission: true,
        courses: 5,
    };

    console.log(goMyCode);

    const individual = {
        name: "cletus",
        age: 18,
        position: "first",
        school: true,
    };
    
    console.log(individual);

    const report = {
        attendance: true,
        grade: 10,
        subject: "english",
        course: "english",
    };

    console.log(report);

   /* const laptop = {
        name: "hp",
        lastName: "pack",
        price: 1000,
        ramSpace: 16,
        storage: 512,
    };

    // creating and accessing an object using dot notation
    const fullName = laptop.name + " " + laptop.lastName;
    console.log(fullName);*/

    const people = {
        name: "blessing",
        lastName: "john",
        email: "john@gmail.com",
        password: "<PASSWORD>",
    };
    
    const sentence = "my name is" + 
    " " + people.name + " " 
    + people.lastName + " " 
    + "and my emails is" +" "
     + people.email + " " 
     + "and my password is" 
     +" " + people.password;

    console.log(sentence);

    //accessing a number in nested objects
    const user = {
        firstName: "yusuf",
        email: "yusuf@gmail.com",
        lastName: "momoh",
        location: {
            country: "Nigeria",
            city: "Lagos",
            exactLocation: {
                latitude: 788.9,
                longitude: 676.9,
            },
        },
    };

    const position = user.location.exactLocation.latitude + " " + user.location.exactLocation.longitude;
    console.log(position);

    var a= 3

switch (a) {
	case 4:
		alert( 'Exactly!' );
		break;
	default:
		alert( "I don't know such values" );
		break;
	case 3:
		alert( 'Too small' );
		break;  
	case 5:
		alert( 'Too large' );
		break; 
}

//arrays
const color =[
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "brown",
    "black",
    "white",
    "orange",
];

console.log(color);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

const info = [{
    name: "cletus",
    age: 18,
    position: "first",
    school: true,
},

{
    name: "momoh",
    age: 18,
    position: "second",
    school: true,
},

{
    name: "yusuf",
    age: 18,
    position: "third",
    school: true,},
]



info.push({name: "blessing", age: 18, position: "fourth", school: true,})
console.log(info);

info.pop({name: "blessing", age: 18, position: "fourth", school: true,})
console.log(info);

//Array to access a value can be called in either of these ways.
const products = [
    {productName: "iphone", color: "red"},
    {productName: "samsung", color: "black"},
    {productName: "iphone", color: "red"},
    {productName: "samsung", color: "black"},
];

console.log(products[1].productName);
console.log(products[1]["productName"]);


//for loops
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}


const field = [
    "manchester United",
    {fieldName: "trafford", size: "large"},
    300,
    {location: "abuja", axis: "kubwa"}
]

for (let i = 0; i <field.length; i++) {
   console.log(field[i]);
   console.log(field[i].axis);
};





for (let i = 0; i < 5; i++) {
    console.log(i);
}


const ministry = [
    {ministryName: "fcta", location: "area 11"},
    {ministryName: "fed Agric", location: "area 11"},
    {ministryName: "central bank", location: "cbd"},
    100,
    {ministryName: "power", location: "garki"},
]

for (let i = 0; i < ministry.length; i++) {
    if (ministry[i].location === "cbd") {
    console.log(ministry[i]);
    };
}

function customSum(arr) {
    let total = 0;
    for (let value of arr) {
        total += value;
    }
    return total;
}

const customSumValue = customSum(myArray);
console.log(`Custom sum value: ${customSumValue}`);
