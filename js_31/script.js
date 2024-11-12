// //xndir1



// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     let inp = document.getElementById("inp_name").value.trim();
//     let text = document.getElementById("user_email");
//     let err = document.getElementById("err_message")

//     try {
//         if (inp !== "") {
//             fetch("https://jsonplaceholder.typicode.com/users")
//                 .then((res) => res.json())
//                 .then((users) => {
//                     let foundUser = users.find((user) => {
//                         return user.name.toLowerCase() === inp.toLowerCase();
//                     })
//                     if (foundUser) {
//                         text.innerText = "Օգտատիրոչ հասցեն " + foundUser.email;
//                         document.getElementById("inp_name").value = "";
//                     } else {
//                         text.innerText = " Տվյալ անունով user չի գտնվել";
//                         document.getElementById("inp_name").value = "";
//                     }
//                 }).catch((error) => {
//                     console.error(error.name);
//                     text.innerText = "Տեղի է ունեցել սխալ " + error.message; 
//                 })
//             err.innerText = "";
//         } else {
//             err.innerText = "Մուտքագրման դաշտը դատարկ է";
//             err.style.color = "red";
//         }
// })


// let btn1 = document.getElementsByClassName("btn")[0];
// btn1.addEventListener("click", function () {
//     alert("okay")
// })








// function f(){
//     return new Promise((res , rej) => {
//         let name = "Anun";
//         if(name !== ""){
//             return res ("Okay");
//         }
//         return rej(new Error("Error!!"))
//     })
// }
// f().then((val) => console.log(val)).catch((err) => console.log(err.message));

// function f1(){
//     return Promise.resolve(25);
// }
// f1().then((x) => x * 2).then((y) => console.log(y));

// async function f2() {
//     return 25;
// }
// f2().then((num) => num * 2).then((num1) => console.log(num1));


// function myFunction(){
//     let myPromise = new Promise(resolve, reject) =>{
//         setTimeout(() => {
//             return resolve("Hello..")
//         }, 2000)
//     })

// }


async function f(){
    let result = [];
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => result = data);
    return result
}

f().then((response) => {
    let div1 = document.getElementsByClassName("div1")[0];
    let div = "";
    response.forEach((user) => {
        div += `
                <h1>${user.name}</h4>
                <em>${user.username}</em>
                <p>${user.email}</P>
                <p>${user.street}</P>
        `
    });
    div1.innerHTML = div;
        
})


