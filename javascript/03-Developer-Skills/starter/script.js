// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Using Google, StackOverflow and MDN

// PROBLEM 1:
//  We work for a company building a smart home
//  thermometer. Our most recent task is this:
//  "Given an array of temperatures of one day,
//   calculate the temperature amplitude. Keep
//    in mind that sometimes there might be a sensor
//     error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Undertand the problem
// -> WHat is temp amplitue is ?
// Ans: Diffrence bw the higest an the lowest temp
// how to compute max and min temparature ?
// What's a sensor errors ? What do do?

// 2) Breakimg up into sub- problems

// How to ingnore errors
// Find the max value in temp array
// mFind min value in temp array
// Substract tne min frome max (amplitute) and reture ti it

// const calcTempamplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currtemp = temps[i];
//     if (typeof currtemp !== "number") continue; // ignores the string other tahn the number
//     if (currtemp > max) {
//       max = currtemp;
//     }
//     if (currtemp < min) {
//       min = currtemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const almplitude = calcTempamplitude(temperatures);
// console.log(almplitude);

//Problem 2 )

//Function should recive 2 arrays of temps

// 1) Understand the problem
// -- With 2 arrays , shpuld we implement the functions twice
// => the ans is no ==< just merge the two arrays

// How to merge two arrys

// const calcTempamplitudenew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currtemp = temps[i];
//     if (typeof currtemp !== "number") continue; // ignores the string other tahn the number
//     if (currtemp > max) {
//       max = currtemp;
//     }
//     if (currtemp < min) {
//       min = currtemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const almplitudenew = calcTempamplitudenew([3, 4, 5, 1], [3, 0, 4, 4]);
// console.log(almplitudenew);

// debugging

const measurekelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // c) FIX
    // value: Number(prompt("Degree celisus :")),
    value: 10,
  };
  console.log(typeof measurement.value);
  //   console.log(measurement);
  //   console.table(measurement);
  //   console.log(measurekelvin.value);
  //   console.warn(measurekelvin.value);
  //   console.error(measurekelvin.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measurekelvin());

//Using a Debugger

const calcTempamplitudebug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currtemp = temps[i];
    if (typeof currtemp !== "number") continue; // ignores the string other tahn the number
    if (currtemp > max) {
      max = currtemp;
    }
    if (currtemp < min) {
      min = currtemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const almplitude = calcTempamplitudebug([3, 5, 1], [9, 4, 5]);
console.log(almplitude);
