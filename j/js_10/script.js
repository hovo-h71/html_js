// function fibonacci(n){
//     if(n <= 1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// for(let i = 0; i<15; i++){
//     console.log(fibonacci(i));
// }


// let arr = [1, 4, [5, 7, [8, 15, [12, 14], 55, 45], 81, 71], 0];
// for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     } else {
//         console.log(arr[i]);

//     }
// }

// let arr = [1, 4, [5, 7, [8, 15, [12, 14], 55, 45], 81, 71], 0];
// function f(arr1){
//     for(let i = 0; i< arr1.length; i++){
//         if(Array.isArray(arr1[i])){
//             f(arr1[i])
//         }else{
//             console.log(arr1[i]);
            
//         }
//     }
// }

// f(arr);

                                                                                
                                                                                
// let arr = [2,8,7,5,6,6,97,14];                                                                              
// let arr1 = [];                                                                              
                                                                                
// for(let i = 0; i<arr.length; i++){                                                                              
//     if(arr[i] % 2 === 1)                                                                                
//         arr1.push(arr[i])                                                                               
// }                                                                               
// console.log(arr1);

// let arr = [2,8,7,5,6,6,97,14]; 

// arr.filter(function f(){
//     console.log("fffffffff");
    
// });

//////  a1 = value (arjeqnery meji) = arr[i]   ////////
//////  b1 = index (i)     ///////////
//////  c1 darnum e zangvac(array)  /////////////

// arr.filter(f

// let x = arr.filter(function(v){
//     if(v % 2 === 0){
//         return v;
//     }
// });


///////////////////  forEach //////////////

// arr. forEach(function(v, i){
//     console.log(i + ":" + v);
 
// });

let arr = [5,8,58,-76,9,-9,0];

///////// t  1//////////
// let x = arr.filter(function(v){
//     if(v<0){
//         return v;
//     }
// });
// console.log(x);

///////////// t 2///////////
// let x = arr.filter(() => {
//     if(v < 0){
//         return v;
//     }
// })

////////   t 3 ////////////
// let x = arr.filter((v) => v < 0);
// console.log(x);

////////////////////    map //////////////

// let names = ["Ani" , "Sona", "Anna", "Sona", "Ani"]

// let arr1 = names.map(() =>{
//     if(names === "Sona"){
//         return name
//     }
// });



// let arr1 = names.map((name) =>name === "Sona");

// let arr1 = names.map((name)=>{
//     return name + "jan"
// });
// console.log(arr1);
