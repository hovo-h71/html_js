//  function x(y){
//         return y * 60
//     }
    
//     console.log(x(3));
    

// function abs(y){
//     if(y<0){
//         return y * -1
//     }else if(y>0){
//         return y
//     }
// }

// console.log(abs(-5));



// function pow(x,y){
//     let n =1;
//     for(let i =1; i<=y; i++){
//         n *= x
//     }
//     return n
// }

// console.log(pow(3,2));


// function fak(x){
//     let n = 1;
//     for(let i=1; i<=x; i++){
//         n *= i ;
//     }
//     return n;
// }
// console.log(fak(5));



// function f(x){
//     if(x<=125){
//         if(x % 2 ===0){
//             console.log(x);
//         }
//         f(x+1);
//     }
// }
// f(105);


// function f(x){
//     if(x>=0){
//         console.log(x);
//         f(x-1);
//     }
// }
// f(20);

// function f(x){
//     if(x === -1) return;
//     console.log(x);
//     f(x-1);
// }
// f(20);

///////  recurcia
///////////     faktorial ///////////

// function f(x){
//     if(x === 1) return 1;
//     return f(x-1) * x;
// }
// console.log(f(5));


// function f(x){
//     if(x === 0) return;
//     f(x - 1);
//     console.log(x *2);
    
// }
// f(5);

// function f(x){
//     if(x === 0) return;
//     f(x - 1);
//     return f(x-1) *2;
// }
// console.log(f(5));


///////   pow ////
// function f(x,n){
//     if(n === 1) return x;
//     return f(x, n-1) * x;
    
// }
// console.log(f(2,3));