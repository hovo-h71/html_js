///////////////  dasavorel 1 toxi vra hakarak hertakanutyamb///////////
// let arr = [1, 2, 3, 4, 5, 6];
// let str = "";

// for(i = arr.length - 1; i>=0; i--){
//     str = str + arr[i] + " ";
// }

// console.log(str);




///////////////// achman kargov /////////////

// let arr = [1, 7, 9, 6, -5, 85];
// for(let i=0; i<arr.length; i++){
//     for(let j = i + 1; j<arr.length; j++){
//         if(arr[i] > arr[j]){
//             let x1 = arr[i];
//             arr[i] = arr[j];
//             arr[j] = x1;
//         }
//     }
// }
// console.log(arr);




/////////////  nvazman kargov ////////////////

// let arr = [1, 7, 9, 6, -5, 85];
// for(let i=0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] < arr[j]){
//             let x1 = arr[i];
//             arr[i] = arr[j];
//             arr[j] = x1;
//         }
//     }
// }
// console.log(arr);




////////////////   stugel simetric utyuny    //////////////

// let arr = [1, 2, 3, 3 , 2, 7, 1];
// let x = simetric = false;

// for(let i = 0; i< arr.length / 2 ; i++){
//     if(arr[i] !== arr[arr.length -1 -i]){
//         simetric = false;
//         break;
// }
// }

// if(simetric === true){
//     console.log("simetric");
    
// }else{
//     console.log("not simetric");
    
// }




// let arr = [2, 4, 7, 9, 13, 56, 89];
// arr.sort;
// console.log(arr);



// arr.reverse();
// console.log(arr);


////////////////////       bazmachap zangvac //////////// 

// let arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9, 10]];
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j< arr[i].length; j++){
//         if(arr[i][j] % 2 === 0){
//             console.log(arr[i][j]);
//         }
//     }
// }

/////     matrix  - zangvaci 3 zangvacnery unen yndhanuri erkarutyuny  (3 y 3i vra ays depqum)

//////glxavor ankyunagic 1 5 9    ////    erkrordakan   3 5 7///////////

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }


/////////////glxavor ankyunagic////////////
// for(let i = 0; i < arr.length; i++){
//          for(let j = 0; j < arr[i].length; j++){
//             if(i === j){
//                 console.log(arr[i][j]);
//             }
//         }
//      }


////////////////     ekrordakan ankyunagic / /////////////


// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//        if(i + j === 2){
//            console.log(arr[i][j]);
//        }
//    }
// }
////glxavor ankyunagci nerqevi tvery  698

12
21
22


for(let i = 1; i < arr.length; i++){
        for(let j = arr.length - 1; j >= 1; j--){
               console.log(arr[i][j]);
           }
       }

