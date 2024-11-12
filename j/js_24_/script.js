// let table = document.getElementById("table");
// let html = "";

// for (let i = 0; i < 10; i++) {
//     html += "<tr>"
//     for (let j = 0; j < 10; j++) {
//         if(i !==0 && i !==9 && j !==0 && j !==9){
//             //  html += "<td style='background-color: rgb(" + rgb() +"," + rgb() +"," + rgb() +")'></td>"
//             html += `<td style='background-color: rgb(${rgb()}, ${rgb()}, ${rgb()})'></td>`;
//         }else {
//             html += "<td></td>"
//         }
//     }
//     html += "</tr>";
// }
// table.innerHTML = html;


// function rgb(){
//     return Math.floor(Math.random() * 256);
// }


////////////////////////////////////////////////////////////////////////////




// let products = [
//     {
//         id: 1,
//         name: "Iphone X",
//         price: 100,
//         color: "Black",
//     },
//     {
//         id: 2,
//         name: "Iphone 11",
//         price: 150,
//         color: "Black",
//     },
//     {
//         id: 3,
//         name: "Iphone 12",
//         price: 250,
//         color: "Black",
//     },
//     {
//         id: 4,
//         name: "Iphone 13",
//         price: 450,
//         color: "Black",
//     },
//     {
//         id: 5,
//         name: "Iphone 14",
//         price: 550,
//         color: "Gray",
//     },
//     {
//         id: 6,
//         name: "Iphone 15",
//         price: 650,
//         color: "Red",
//     }
// ];

// let div = "";
// products.forEach((product) => {
//     div += `
//         <div>
//             <h3>${product.name}</h3>
//             <em>${product.price}</em>
//             <span>${product.color}</span>        
//         </div>
//     `

// })

// let parent = document.getElementById("parent");
// parent.innerHTML = div;







// let x = document.createElement("strong");
// x.innerText = "Hello js";
// console.log(x);

// document.body.appendChild(x);//avelacnum everjic
// document.body.prepend(x);//avelacnum eskzbic

// let span = document.createElement("span");
// span.innerText = "123";

// let h1 = document.getElementsByClassName("text")[0];
// h1.append(span);

// h1.classList.add("h5");//avelacnum eclassy
// h1.classList.remove("h5");//jnum e classy
// h1.classList.add("h1", "barev");
// h1.classList.toggle("x");//ete chka ayd classy avelacnum e ete ka jnjum e
// h1.classList.toggle("barev");



// let btn = document.getElementById("btn");


// btn.addEventListener("click", function(){
//     alert("hello")
// });





let div = document.getElementById("div1");
div.classList.add("div");

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    // div.classList.add("pakel")
    div.classList.toggle("pakel")
});

let nkar = document.getElementById("img");
// nkar.src = "small_Sun-Moon.jpg.jpg"
// nkar.width = "700";

nkar.setAttribute("src", "small_Sun-Moon.jpg.jpg");
nkar.setAttribute("width", "700");