const restaurant ={
    Name:'Ichiran ramen',
    address:'johmson ave',
    city:'brooklyn',
    state: 'ny',
    zipcode: 10615,
}
let fullAdrees = `${restaurant.address},${restaurant.city},${restaurant.state}`
console.log(fullAdrees);
///ex 0///
//1.
const student = {
    name:"Dror",
    Age:34,
    grade:11,
    clases:["math","english"]
}
console.log(student.name);

//2
const book = {
    title :"bees",
    author :"david",
    year :1999,
    genre :"action",
    publisher : "yediot",
    pages : 11,
    isbn : "what?",
}
book.rating=13;
console.log(book);
//3
const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
   };
   console.log(car.features[1]);
   //4
   const store = {
    name: "Techni",
    location:"Bet herut",
    categories:["tools","matirials","home products"],
    products: [
        {Name:'paint', price: 60, quantity:3,},
        {Name:'cutter',price: 60, quantity:3,},
        {Name:'player',price: 55, quantity:2}
    ]
   
   }
   function totalSum(productName){
    for (let i=0;i<store.products.length;i++){
        if(productName===store.products[i].Name){
            let sum=store.products[i].quantity*store.products[i].price
            return sum
        }
    }


   }
   console.log(totalSum('cutter'));


   //ex1///
   //1
   const person1 = {
    age:30,
    height:1.78,
    weight:66,
   }

function toList(person){
    console.log(person.age);
    console.log(person.height);
    console.log(person.weight);
   }
   toList(person1)
//2
function objectLength(object){
  
    let objectLenght = Object.keys(object).length;
    console.log(objectLenght);
}
objectLength(person1);
//3
let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//1
function displayGroceries(){
    for (let i=0;i<groceries.fruits.length;i++){
        console.log(groceries.fruits[i])
    }
}
displayGroceries()
//2
function cloneGroceries(){
    let user =  client
    console.log(client);
    let shopping = groceries;
    console.log(shopping)
}
cloneGroceries()

//4

//////////ex2//////////
let array = [
    {title:'snoopy',author:'guy', alreadyRead:true},
    {title:'barny',author:'shlomi', alreadyRead:true},
    {title:'pinokio',author:'nati', alreadyRead:false}
]
for(let i=0;i<array.length;i++){
    if (array[i].alreadyRead===true){
        console.log(`'You already read ${array[i].title} by ${array[i].author} `);
}
    else{
        console.log(`'You still need to read  ${array[i].title} by ${array[i].author} `);

    }
    }
        

/////////ex3///////////////////////////////
let myPenguin ={
    characterSname:'Evil emperor penguin',Origin:'Evil emperor penguin',author:'Laura Ellen Anderson'
}
console.log(`Hello, I'm a penguin and my name is ${myPenguin.characterSname}!`);
myPenguin.canFly=false;
myPenguin.chirp= function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?" );

}
myPenguin.sayHello= function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?" );
}
    console.log("CHIRP CHIRP! Is this what penguins sound like?" );
    

// console.log(sayHello)
//7///////////////////////////////////////////////////////////
myPenguin.characterSname= "Penguin McPenguinFace";




///////ex4//////
myPenguin.favoriteFoods=['fish','ice','gum'];
console.log(myPenguin.favoriteFoods[1]);
let firstFavFood = myPenguin.favoriteFoods[0];
myPenguin.favoriteFoods[3]='stake';
console.log(myPenguin);
myPenguin.favoriteFoods[3]= "pineapples";
let lastFavFood =myPenguin.favoriteFoods[Object.keys(myPenguin.favoriteFoods)[Object.keys(myPenguin.favoriteFoods).length - 1]];
console.log(lastFavFood);
// for(i=0;i<)
let objectLength1 = (Object. keys(myPenguin.favoriteFoods)).length;
for (i=0;i<objectLength1;i++){

}

/////////ex5///////
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };
  
  let penguins = [ "Gunter", "Happy Feet","Fred"];
  console.log(penguins[0]);
  let secondPenguin  = penguins[1];
  console.log(penguins[2]);

  ////////////ex7///////////////////////
  let school = {
    Name:'mashabim',
    location:'mashabi sade',
    students:[
      {Name:'Eyal',age:13,grade:4,classes:['english','arabic','math'],},
      {Name:'Eran',age:12,grade:4,classes:['hebrew','math','creation'],},
      {Name:'jessi',age:14,grade:6,classes:['english','biology','math'],}
    ],
    teachers:[
        {Name:'kathi',subject:'english',gradesLevel:[4,5,7],},
        {Name:'ruti',subject:'math',gradesLevel:[5,6,7],},
        {Name:'pnina',subject:'hebrew',gradesLevel:[1,2,3],}
    ]
  }
  console.log(school.teachers.length);
  //Then, write a function that takes a teacher's name and a student's name as arguments and returns true
  // if the student is in any of the classes taught by the teacher, and false otherwise.

  function teachersStudentsFit(teacher,student){
    let chosenStudentClasses = [];
    let chosenTeacherSubject = "";
    let chosenTeacherGrades = [];
    let chosenStudentGrade = "";
    let sameClasses;
    let sameGrades;

console.log(teacher);
console.log(school.teachers[0].Name);
    for (let i=0;i<school.teachers.length;i++){
        if (teacher===school.teachers[i].Name){
            chosenTeacherSubject = school.teachers[i].subject;
            chosenTeacherGrades = school.teachers[i].gradesLevel
        }
    }
    for (let i=0;i<school.students.length;i++){
        if (student===school.students[i].Name){
            chosenStudentGrade = school.students[i].grade;
            chosenStudentClasses = school.students[i].classes;
            }
           
        }

for(let i=0;i<chosenStudentClasses.length;i++){
    if(chosenTeacherSubject===chosenStudentClasses[i]){
        sameClasses=true;
    }
}
for(let i=0;i<chosenTeacherGrades.length;i++){
    if(chosenStudentGrade===chosenTeacherGrades[i]){
        sameGrades=true;
    }
}
if(sameGrades===true && sameClasses===true){
    console.log('same same')
}
else{
    console.log('nope') 
}

  };
  
  teachersStudentsFit('ruti','Eyal')


  //8
  const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };
  console.log(library.books.length); 
  function genreFinder(chosenGenre){
    for(let i=0;i<library.books.length;i++){
     if(library.books[i].genre===chosenGenre){
        console.log(library.books[i].title);
        }
    }
}
console.log(genreFinder("Novel")); 