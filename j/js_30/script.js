////xndir 1

// let text = prompt("Type hello");

// try{
//     if(text.toLowerCase() !== "hello"){
//         throw new Error("Oops,you didnt type hello");
//     }
// }catch(err){
//     alert(err.message);
// }finally{
//     alert("thanks for playing");
// }
///////////////////////////////////////////////////////////////
////xndir 2

// let arr = [1, 4, true, 8, "hello"];
// let arr1 = [];
// try {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "boolean") {
//             // throw new Error("Oops,this item is boolean");
//             arr1.push("Oops,this item is boolean");

//         } else if (typeof arr[i] === "string") {
//             // throw new Error("Oops,this item is string")
//             arr1.push("Oops,this item is string");
//         }
//     }
//     throw new Error(errors);
// } catch (error) {
//     error.forEach(element => {
//         console.error(element)
//     });
// }
/////////////////////////////////////////////////////////////


// setTimeout(() =>{
//     console.log(3);
// },2000)

// new Promise(() => {
//     setTimeout(() =>{
//         console.log(1);
//     },2000)

// });
// console.log(2);


/////////////////////////////////////////////////////

// let pro = new Promise((resolve,reject) => {
//     let number = -8;
//     if(number >0){
//        return resolve("drakan");
//     }else if (number <0){
//        return reject("bacasakan");
//     }
// });


// pro.then(() => {
//     console.log("ok");
// }).catch(() => {
//     console.log("Error");
// })

// pro.then((x) => {
//     console.log(x);

// }).catch((err) => {
//     console.error(err);

// }).finally(() => {
//     console.log("End");

// })




// let promise = new Promise((res, rej) => {
//     let x = +prompt("Mutqagreq voreve tiv");

//     if (typeof x === "number") {
//         if (Number.isNaN(x)) {
//             return rej(new TypeError("NaN"))
//         }
//         return res(x);
//     } else {
//         return rej(new ReferenceError("Tiv che"));
//     }
// })

// promise
// .then((result) => {
//     console.log(result * 2);
//     return result * 2
// })
// .then((value) => {
// console.log(value);

// })
// .catch((err) => {
//     console.error(err.name);
// })
// .finally(() =>{
//     console.log("Thank YOU!!");
    
// })




// let promise = new Promise((res,rej) => {
//     let x = prompt("Mutqagreq gaxtnabary")

//     if(x.length <=8){
//         return rej(new TypeError())
//     }else{
//         console.log(x);
        
//     }
// })

// let x = Promise.resolve("okay");
// x.then((res) => {
//     console.log(res);
    
// })



// Promise.reject(new TypeError("errrrror")).catch((res) => {
//     console.error(err);
// })

// Promise.all([
//     new Promise((resolve) => setTimeout(() => {
//         return resolve("Arajin Promise");
//         },2500)),
//     new Promise((resolve,reject) => {
//         reject("2-rd Promise");
//     }),
//     new Promise((resolve) => {
//         resolve("3-rd Promise")
//     }),
// ]).then((res) => {
//     console.log(res);
    
// }).catch((e) => {
//     console.log(e);
    
// })
