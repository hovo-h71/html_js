////////////////////////////////////////////
// Տպել տվյալ օրվա օր ամիս տարին՝ իրարից անջատելով “/ “  նշանով։
// Ստուգել եթե օրը կամ ամիսը 10-ից փոքր է դիմացից ավելացնել 0։

// let date = new Date();

// let y = date.getFullYear();
// let m = date.getMonth() + 1;
// let d = date.getDate()

// if(d < 10){
//     d = "0" + d;
// }
// if(m < 10){
//     m = "0" + m;
// }

// console.log(d + "/" + m + "/" + y);

///////////////////////////////////////////
// Ստեղծել ֆունկցիա,որը կվերադարձնի ամսվա 
// լրիվ անունը և որպես արգումենտ կստանա օր,ամիս,տարին։

// function getMonthFullName(month){
// let months = [
//     "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
//         "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
// ];
// return months[month ];
// }

// let date = new Date();

// y = date.getFullYear();
// m = date.getMonth();
// d = date.getDate();



// console.log(d + "/" + getMonthFullName(m) + "/" + y);

///////////////////////////////////////// 

// Ստեղծել ֆունկցիա,որը  որպես արգումենտ կստանա օր,
// ամիս,տարի և այդ տվյալների հիման վրա կվերադարձնի մարդու տարիքը։

// function age(day,month,year){
//     let date = new Date();
//     let a = month < date.getMonth() + 1;
//     if(month <= date.getMonth() + 1){
//         return a;
//     }
//     if(day < date.getDate()){
//         return a;
//     }
//    return a- 1;
// }
// console.log(age(15,3,2005));


////////////////////////////////////
// Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի օրը հանգստյան է թե ոչ։


// function f(day, month, year) {
//     let date = new Date(year, month - 1, day); 
//     let amsvaOr = date.getDay();

//     return amsvaOr === 0 || amsvaOr === 6; 
// }




//Regexp
// let str = "Hello woarld!, 123456 h_elklo?";
// let reg = /l/;
// let reg = /f/
// let reg = /l/g;
// let reg = /h/gi;//ham mecatary ham poqratary
// let reg = /[a-z]/gi;
// let reg = /[0-9]/g;
// let reg = /[A-Z0-9]/g;
// let reg = /[akm2]/g;

// w s d    W S D
// d- bolor tvery  | D-t\tveric baci amen inch
// s-bacatnery  | S-bacatic baci amen inch
// w- bolor tvery bolor tarery u taki gcery  | W-tveric tareric u taki gric baci amen inch

// let reg = /\d/g;
// let reg = /\s/g;
// let reg = /\w/g;


// + * ^ .
// let reg = /^\d/;   //sksvuma tvov?
// let reg = /:\$/g;
// let reg = /./g;   //veradardznum a amen inch
// let reg = /[a-zA-Z]+/g; //0 kam avel
// let reg = /[a-zA-Z]*/g;

// let str = "Barev dzez es Annan em:";
// let reg = /^[A-Z][a-zA-Z :]+:&/g;

// let str = "Barev dzez Sona Hakobyan:";
// let reg = /[A-Z][a-z]+\s+[A-Z][a-z]+/g


// let result = str.match(reg);
// console.log(result);



let tel = "+374 (77) 18811 119881";
// let reg = /\d{3}/g;
// let reg = /[(]\d{2}[)]/g;
let reg = /\d{2,4}/g;// erknishic qaranish


console.log(tel.match(reg));
