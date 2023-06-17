
'use strict';

// console.log(`hello`)

// const calc = function(score1 , score2 , score3){
//     return (score1+score2+score3)/3;
// }

// let DolphisAverageScore = calc(44,23,71);
// let kolasaverageScare = calc(65,54,49);

// console.log(`Average Score : ${DolphisAverageScore}, ${kolasaverageScare}`);

// const winnerCheck = function(DolphisAverageScore,kolasaverageScare){
//     if(DolphisAverageScore>(2*kolasaverageScare)){
//         console.log(`Dolphin WINS (${DolphisAverageScore} vs ${kolasaverageScare})` );
//     }else if(kolasaverageScare>(2*DolphisAverageScore)){
//         console.log(`Kolos WINS (${DolphisAverageScore} vs ${kolasaverageScare})` );
//     }else{
//         console.log(`No one WINS!`);
//     }
// }

// winnerCheck(DolphisAverageScore,kolasaverageScare);

// //test 2 

// DolphisAverageScore = calc(85,54,41);
// kolasaverageScare = calc(23,27,34);
// console.log(`Average Score : ${DolphisAverageScore}, ${kolasaverageScare}`);
// winnerCheck(DolphisAverageScore,kolasaverageScare);

// coding challeng 2 in arrays 

// const tipcalculator =  function(bill){
//     if(bill>50 && bill<300){
//         return 0.15*bill;
//     }else{
//         return 0.20*bill;
//     }
// }

// const bill = [125 , 555 , 44];
// console.log(`Bill Array : ${bill}`);
// const tips = [tipcalculator(bill[0]) , tipcalculator(bill[1]) , tipcalculator(bill[2])];
//  console.log(`Tips Array : ${tips}`); 

// const total  = [bill[0]+tips[0] + bill[1]+tips[1] + bill[2]+tips[2]];
// console.log(`Total : ${total}`);

/// challenge 3

// const Mark = {
//     fullname:'Mark Miller',
//     mass:78,
//     height:1.69,

//     calcBMI:function(){
//         this.bmi =  this.mass/(this.height**2);
//         return this.bmi;
//     }
// }
 
// const Jhon = {
//     fullname:'Jhon Smith',
//     mass:92,
//     height:1.95,

//     calcBMI:function(){
//         this.bmi = this.mass/(this.height**2);
//         return this.bmi;
//     }
// }
  

// const summary=function(){
//     if(Mark.calcBMI() > Jhon.calcBMI()){
//         return  `${Mark.fullname}'s BMI ${Mark.calcBMI()} is higher than ${Jhon.fullname}'s ${Jhon.calcBMI()}!`;
//     }else{
//         return  `${Jhon.fullname}'s BMI ${Jhon.calcBMI()} is higher than ${Mark.fullname}'s ${Mark.calcBMI()}!`;

//     }
// }

// console.log(summary());
// console.log(Mark.bmi , Jhon.bmi);