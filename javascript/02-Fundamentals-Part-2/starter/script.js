// Strict MOde

// 'use strict';

// let hasdiverLicencese = false;
// const passTest = true;

// if(passTest) hasdiverLicencese =true;
// if(hasdiverLicencese) console.log("I can Drive");

// // const interface = 'Audio';
// // const private = 345;

// function logger(){
//     console.log("My name Tej");
// }
// // invoking , calling ,runnning 
// logger(); 
// logger();
// logger();

// function fruitProcessor(apples , oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges .`;
//     return juice; 
// }

// const appleJuice = fruitProcessor(5,20);
// console.log(appleJuice);
// console.log(fruitProcessor(2,6));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);



//function declaration

// function calcAge1(birthyear){
//     return 2037 - birthyear;
// }

// console.log(calcAge1(1991));


// //function expretion
// const calcAge2 = function(birthAge){
//     return 2037 - birthAge;
// }
// console.log(calcAge2(1991));

// Arrow function

// const calAge3 = birthyear => 2037 - birthyear;
// console.log(calAge3(1991));

// const yearsultilRetierment = (birthyear, firstname) => {
//     const age = 2037 - birthyear;
//     const retierment = 65 - age;
//     return `${firstname} retiers in ${retierment} years`;
// }

// console.log(yearsultilRetierment(1991, 'Tej'));

//functions


// function cutfruitpieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples , oranges){
//     const applepieces = cutfruitpieces(apples);
//     const orangepices = cutfruitpieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applepieces} apples peices and ${orangepices} oranges piceses .`;
//     return juice; 
// }

// console.log(fruitProcessor(2,3));


//


// const calcAge = function(birthyear){
//     return 2037 -birthyear;
// }

// const calcRetierment = function(age){
//     return 65 -age;
// } 

// const yearsultilRetierment = function (birthyear, firstname){
//     const age = calcAge(birthyear);
//     const retierment = calcRetierment(age);
// if(retierment>0){
//     console.log(`${firstname} retiers in ${retierment} years`);
//     return retierment;
// }else{
//     console.log(`${firstname} has already retiered `);
//     return -1;
// }
// }

// console.log(yearsultilRetierment(1991, 'Tej'));
// console.log(yearsultilRetierment(1950, 'Tej'));


 //Arrays 

//  const friend1 =  'Shashank';
//  const friend2 = ' Stevan';
//  const friend3 = 'peter'; 

// const friends = ['Shashank', 'Steven' , 'Peter'];
// console.log(friends);

// const years = new Array(1991 ,1984 ,2004 , 2000);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length -1 ]);
 
// friends[2] = 'Jay';
// console.log(friends);  //changed 

// const firstname = 'tej';
// const tej = [firstname, 'shivappa' , 2037 -1991 , 'student' , friends ]; // can also insert an another array
// console.log(tej);
// console.log(tej.length);

// //Exercise 

// const calcAge = function(birthyear){
//     return 2037 - birthyear;
// }

// const yearss  = [1991,1967 ,2002 ,2010,2018];

// const age1 = calcAge(yearss[0]);
// const age2 = calcAge(yearss[1]);
// const age3 = calcAge(yearss[yearss.length -1]);

// console.log( age1 , age2 , age3);

//  const ages = [calcAge(yearss[0]),calcAge(yearss[1]),calcAge(yearss[yearss.length -1])];
//  console.log(ages);

//Array operations

// const friends = ['Shashank', 'Steven' , 'Peter'];

//add elements 
// friends.push('jay'); // push => meathod
// console.log(friends);

// friends.unshift('yashu'); //from the first
// console.log(friends);

// //remove elements

// const popped1 = friends.pop();
// console.log(popped1);
// console.log(friends);
// const popped2 = friends.pop();
// console.log(popped2);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('bob'));
// console.log(friends.includes('23')); //fales => does't do type coertion 
// console.log(friends.includes(23)); //trure

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }



//Objects


// const tej = [
//     'Jhonas',
//     'Yashu',
//     2037-1991,
//     'Student',
//     ["micle", "peter", "Steven"]

// ];

// const tejArray = { //{}  => is define new objects
//     firstname: 'Tej',
//     lastname: 'Shivappa',
//     job:'STudent', 
//     age:2037-1991,
//     friends :['Michel','Peter','Steven']    
// };


// Dot vs Bracket Notation

// const tejArray = { //{}  => is define new objects
//     firstname: 'Tej',
//     lastname: 'Shivappa',
//     job:'STudent', 
//     age:2037-1991,
//     friends :['Michel','Peter','Steven']    
// };


// console.log(tejArray.lastname);
// console.log(tejArray['lastname']);

// const namekey = 'name';
// console.log(tejArray['first'+namekey]);  //concatenate
// console.log(tejArray['last'+namekey]);  //[ inside is an expresion]


// const intrestedin = prompt('What do you want to know about tej ? Choose between firstname , lastname , age , job , and friends');
// console.log(tejArray[intrestedin]);

// if(tejArray[intrestedin]){
//     console.log(tejArray[intrestedin]);
// }else{
//     console.log('Wrong choice ');
// }

// tejArray.location = 'India';
// tejArray['instagram'] = '@t_e_j_7777777_';
// console.log(tejArray);

//challenge 
// console.log(`${tejArray.firstname} has ${tejArray.friends.length} friends , and his best friend is called ${tejArray.friends[0]}`);


// Object Meathod 

// const tej = { //{}  => is define new objects
//     firstname: 'Tej',
//     lastname: 'Shivappa',
//     job:'STudent', 
//     birthyear:2002,
//     friends :['Michel','Peter','Steven']  ,
    // hasDriverlicense : true  ,

//    calcAge: function(birthyear){ //this is an expression 
//     return 2037 - birthyear;
//    }


// calcAge: function(){ //this is an expression 
//     return 2037 - this.birthyear; // so, this is reffered to tej
//    }


//  calcAge:function(){
//     this.age = 2037 - this.birthyear;  
//    return this.age;

//   },
//    hasDriverlicense: function(){
//          if(this.age>=18){
//             return `a` ;
//          }else{
//             return `no`; //it will be returned in ``;
//          }
//    }


// };
// console.log(tej.calcAge()); //tej is calling the function
// console.log(tej['calcAge'](1991));

// console.log(tej.age);
// console.log(tej.age);
// console.log(tej.age);

// console.log(` ${tej.firstname} is a ${tej.calcAge()} old Student , and he has ${tej.hasDriverlicense()} : drive's license`);


//Loops  

//   console.log('Lifting WEIGHTS repetition 1 ');

//   for(let rep =1 ; rep<= 10 ; rep++){
//     console.log(`Lifting WEIGHTS repetition ${rep}`);

//   }

  const tej = [
    'Jhonas',
    'Yashu',
    2037-1991,
    'Student',
    ["micle", "peter", "Steven"]

];

// const types=[];

// for(let i=0 ; i<=tej.length-1;i++){
//     console.log(tej[i] , typeof tej[i] );
 
//     //filling an array 
//     // types[i]=typeof tej[i];

//     types.push(typeof tej[i]);

// }
// console.log(types);

const years = [1991,2007,1969,2020];
const ages = [];

// for(let i =0 ; i<years.length;i++){
//     ages.push(2037-years[i]);
// }

// console.log(ages);

//Continue and Break Statements

for(let i=0 ; i<=tej.length-1;i++){

     if( typeof tej[i] !== 'string' ) continue;
    console.log(tej[i] , typeof tej[i] );


}
for(let i=0 ; i<=tej.length-1;i++){

    if( typeof tej[i] === 'number' ) break;
   console.log(tej[i] , typeof tej[i] );


}