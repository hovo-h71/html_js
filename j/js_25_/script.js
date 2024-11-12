// let btn = document.getElementById("btn");
// let logo = document.getElementsByTagName("img")[0]
// let link = document.getElementsByTagName("a")[0]
// btn.addEventListener("click", function(){
//     logo.src = "instagram,jpg"
//     link.setAttribute("href",)
// })








// let div1 = document.getElementsByClassName("div1")[0];
// let div2 = document.getElementsByClassName("div2")[0];
// let btn1 = document.getElementsByClassName("btn1")[0];
// let btn2 = document.getElementsByClassName("btn2")[0];
// let btn3 = document.getElementsByClassName("btn3")[0];
// let btn4 = document.getElementsByClassName("btn4")[0];
// let div3 = document.getElementsByClassName("div3")[0];




// btn1.addEventListener("click", function(){
//     if(div1.innerHTML !== ""){
//         div2.innerHTML = div1.innerHTML;
//         div1.innerHTML = "";
//     }
// });

// btn2.addEventListener("click", function(){
//     if(div2.innerHTML !== ""){
//         div1.innerHTML = div2.innerHTML;
//         div2.innerHTML = "";
//     }
// });

// btn3.addEventListener("click", function(){
//     if(div2.innerHTML !== ""){
//         div3.innerHTML = div2.innerHTML;
//         div2.innerHTML = "";
//     }
// });

// btn4.addEventListener("click", function(){
//     if(div3.innerHTML !== ""){
//         div2.innerHTML = div3.innerHTML;
//         div3.innerHTML = "";
//     }
// });



let child = document.getElementsByClassName("text1")[0];
console.log(child);
let parent = child.parentNode;
console.log(parent);

let hajord = child.nextElementSibling;
console.log(hajord);

let naxord = child.previousElementSibling;
console.log(naxord);

let erexaner = parent.children;
console.log(erexaner);

let erexaner1 = parent.childNodes;
console.log(erexaner1);
 

for(let i = 0 ; i<erexaner.length; i++){
    erexaner[i].classList.add("a1")
}

let x = child.classList.contains("a1")//stugime te ka ardjoq a1 classy
console.log(x);

let y = child.getAttribute("class");
console.log(y);

//interval

let s = setInterval(() =>{
    console.log("barev dzez");
    clearInterval(s);    
}, 1000);


setTimeout(() =>{
    console.log(25552);
}, 500);




let div =document.getElementsByTagName("div")[0];
let arajin = div.firstElementChild;
console.log(arajin);

let verjin = div.lastElementChild;
console.log(verjin);

let h2 = document.createElement("h2");
h2.innerText = "1111111111111";
div.appendChild(h2);

let x = document.quarySelector(".foorer")






