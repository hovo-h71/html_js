// console.log(document);

// let h1 = document.getElementsByTagName("h1");    //verdznum enq tag ov
// console.log(h1);
// console.log(h1[0]);

// let h = document.getElementsByClassName("text")[0];  // verdznum enq class ov
// console.log(h);

// let btn = document.getElementById("btn");  // verdznum enq id ov
// console.log(btn);


// let div = document.getElementsByClassName("div1")[0];
// console.log(div);
///////////////////////////////////////////////

// let btn = document.getElementById("btn");   
// // innerHTML
// console.log(btn.innerHTML);  //ktpi buttoni meji grvacy 
// btn.innerHTML = "Enter";

/////////////////////////////////////////////////

// let p = document.getElementsByClassName("text")[0];
// p.innerHTML = p.innerHTML + " Object Model";    // p meji documentin avelacnum e objeqt model
// p.innerHTML += " Object Model";   //aveli karch


////////////////////////////////////////////////////////
// let div = document.getElementsByClassName("div1")[0];
// console.log(div.innerHTML);
// console.log(div.innerText);  //tpum e miayn texty

// //////////////////////////////  css  /////////////////////////////////
// div.style.backgroundColor = "red";
// div.style.width = "80%";
// div.style.height = "350px";

//////////////////////////////////////////////////////////////

// let s = document.getElementById("strong1");
// s.innerHTML += "<em> Javascript </em>";

//////////////////////////////////////////////////////////
// let s = document.getElementById("strong1");
// let anun = "Anahit";
// s.innerHTML += " <em>" + anun + "</em>";
////////////////////////////  ul / li  ///////////////////////////////

// let list = document.getElementsByTagName("ul")[0];
// let students = ["Meri" , "Artur", "Aram", "Hovo"];
// let li = "";
// for(let i = 0; i<students.length; i++){
//     li += "<li>" + students[i] + "</li>";
// }
// list.innerHTML = li;
/////////////////////////////   table   ///////////////////////////////////

// let id = document.getElementById("tab");
// id.width = "600";
// /////id.height = "450";  //// js um height chi ashxatum
// id.border = "2";
// let html = "";


// // for(let i = 1; i<=7; i++){
// //     html += "<tr><td></td><td></td><td></td></tr>";
// // }
// /////////// i - toxer , j-syuner
// /////////////////// bazmapakman axyusak  //////////////
// for(let i = 1; i < 10; i++){
//     html += "<tr>";
//     for(let j = 1 ; j < 10; j++){
//         html += "<td>" + j * i + "</td>";
//     }
//     html += "</tr>" ;
// }

// id.innerHTML = html;



/////////patahak guyn///////////////////
// rgb  random
// style color: rgb(23, 45, 76);