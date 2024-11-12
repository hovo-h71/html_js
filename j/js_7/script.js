///////////      1      /////////////

// let x = 4;
// let y = 7;
// let z = 4;

// if(x >= y && x >= z){
//     console.log(x);
    
// }else if(y >= x && y >= z){
//     console.log(y);
    
// }else if(z >= x && z >= y){
//     console.log(z);
    
// }

///////////////     2   //////////////
// let x =1;
// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 1){
//         x *= i
//     }
// }
// console.log(x);


/////////////   3    /////////////
//  let arr = [1, 3, 5, 6, 8, 9, 14, 16, 20];
//  let maxNumber = arr[0];

//  for(let i = 0; i< arr.length; i++){
//     if(arr[i] % 2 === 0){
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i]
//         }
//     }
//  }

//  console.log(maxNumber);


/////////////   //   4  //    //////////

//  let people = ["Greg", "Mary", "Devon", "James"];

 //////////   1  /////////
//  let arr1 = people.shift(0 , 1); 
 
 ///////////   2   ////////////
//  let arr3 = people.unshift("Adolf");
 
 ////////  3   ////////////
//  console.log(people.indexOf("Adolf"));

 ///////// 4   ///////////////
//  console.log(people.indexOf("Mary"));

///////////  5  ////////////
// let arr6 = people.splice(1 , 1 , "Jim");     
// console.log(people);
 
/////////////   6    ///////////
// let arr4 = ["Arnold"];
// console.log(people.concat(arr4));

/////////////           5           ///////////

// let arr = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// ];

// let x = 0;
// let y = 0;

// for (let i = 0; i< arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(i+j === 2){
//             x += arr[i][i]
//             y += arr[i][j]
//         }
//     }
// }

// console.log((x + y) / 6);



// let arr = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// ];

// let x = 0;
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] % 2 === 0){
//             x += arr[i][j];
//         }
//     }
// }
// console.log(x);


////////    1      /////////
// let x = +prompt("grel 10 - 30 mijakayqi tiv");
// let y = +prompt("grel 10 - 30 mijakayqi tiv");
// let str = "";

// for(let i = y; i>=x; i--){
//     str += i + " ";
// }

// if(x , y >=10 && x, y <= 30){
//     console.log(str);
        
// }else{
//     alert("ներմուծված թվերը չեն համապատասխանում պայմաններին, նորից ներմուծել թվերը:")
// }


///////////        2     ///////////////  kisat

let x = 3;
let y = +prompt("Գուշակել 1-ից 5 միջակայքում ընկած թիվ։");


if(y<1 || y > 5){
    alert("Ներմուծված թիվը միջակայքից դուրս է");
}else if(y === 1 || y === 2 || y === 4 || y === 5){
    alert("Սխալ է Փորձեք նորից")
}else if(y === x){
    alert("////   You Win  ////")
}


/////////////////   3     /////////////////

// let arr1 = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let x = arr1[0];
// let y = arr2[0];

// for(let i = 0; i < 10; i++){
//     console.log(arr2[i]-arr1[i]);
// }
    