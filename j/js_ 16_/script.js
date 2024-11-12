////////////  1   ///////////////////
// let str=“Im anunn e Anna“;
// String-ի մեջ եղած n-երը փոխարինել xy տառերով։

// let x = "Im anunn e Anna";

// let poxel = x.replaceAll("n","xy");
// console.log(poxel);

///////////  2  //////////////////// 
// Օգտագործելով ֆունկցիա գրել սիմետրիկություն String-ի համար։
// String-ը ներմուծել prompt պատուհանի միջոցով։
// Եթե String-ը սիմետրիկ է տպել true,եթե ոչ տպել false։

// function simetric(str){
//     let x = true;
//     let arr = str.split("");
//     for(let i=0; i<arr.length/2; i++){
//         if(arr[i] !== arr[arr.length -1 -i]){
//             x =false;
//             return x;
//         }
//         return x;
//     }
// }

// let result = simetric();
// result ? console.log("ssssss") : console.log("noooo");


//////////////   3   //////////////
// Ստեղծեք ֆունկցիա fullName(),
// որը կհարցնի օգտվողի անունը,
// ազգանունը և հայրանունը,այնուհետև կվերադարձնի արժեքները մեկ տողով՝
// իրարից անջատված մեկ տարածությամբ:

// let anun = prompt("mutqagrek dzer anuny");
// let azganun = prompt("mutqagrek dzer azganuny");
// let hayranun = prompt("mutqagrek dzer hayranuny")

// console.log(anun + " " +azganun + " " + hayranun);

///////////  4  ////////////// ????????????????
// Ձեր առաջադրանքը կայանում է նրանում,
// որպեսզի ստուգեք զանգվածի յուրաքանչյուր տարրը,
// եթե կան սիմվոլներ Հայկական միջակայքից դուրս,
// ապա պատկերեք այդ սիմվոլը և այդ սիմվոլը պարունակող տարրը։
// Հուշում՝ պետք է ստեղծեք ցիկլ ցիկլում։
// var students = ["Տիգրան", "John", "Սամվել"];



/////////  5 ////////////////////
// var str="Ես սիրում եմ ծրագրավորել"`
//  արտածել նախադասության մեջ ներառված սիմվոլների քանակը
//  նախադասությունը արտածել   մեծատառերով
//  արտածել առաջին հանդիպած  “գ“ տառի դիրքը
//  արտածել ամենավերջին “ո“ տառի դիրքը 
//(եթե չի գտնվել արտածել “չի գտնվել“ արտահայտությունը)
// տպել նախադասության բոլոր բառերը, բաժանած ստորակետերով, 
// վերջում ստորակետ չպիտի լինի: 
// (օրինակ ներմուծված է “ես շատ եմ սիրում ծրագրավորել ջավասքրիփթով“, 
// պիտիարտածվի  “ես, շատ, եմ, սիրում, ծրագրավորել, ջավասքրիփթով“)


// let str = "Ես սիրում եմ ծրագրավորել";
// console.log(str.length);
// let mec = srt.toUpperCase();
// console.log(mec);
// console.log(str.indexOf("գ"));


// if(str.lastindexOf("ո") === -1){
//     console.log("chi gtnvel");
// }else{
// console.log(str.lastIndexOf("ո"));
// }


// let str2 = "ես շատ եմ սիրում ծրագրավորել ջավասքրիփթով"
// let str1 = str2.replaceAll(" ", ", ");
// console.log(str1);


// Ստեղծել մարդ օբյեկտ,որը կունենա անուն,ազգանուն,տարիք և սեռ բանալիներն ու համապատասխան արժեքները։
// Ստուգել սեռը, եթե սեռը իգական է, ապա ստուգել տարիքը։Եթե տարիքը՝
// ⦁ 1-ից 17-ի միջակայքում է տպել “փոքր աղջիկ“
// ⦁ 17-ից  63-ի միջակայքում է  տպել “չափահաս մարդ“
// ⦁ 63-ից մեծ է տպել “տատիկ“
// Եթե սեռը արական է,ապա ստուգել տարիքը ։Եթե տարիքը՝
// ⦁ 1-ից 17-ի միջակայքում է տպել “փոքր տղա“
// ⦁ 17-ից  63-ի միջակայքում է  տպել “չափահաս մարդ“
// ⦁ 63-ից մեծ է տպել “պապիկ“

// let obj = {
//     anun: prompt("anun"),
//     azganun: prompt("azganun"),
//     tariq:prompt("tariq"),
//     ser:prompt("ser"),
// }

// if(obj.ser === "igakan"){
//     if(obj.tariq > 1 && obj.tariq <= 17){
//         console.log("poqr axjik");
        
//     }else if(obj.tariq >17 && obj.tariq <= 63){
//         console.log("chapahas mard");
        
//     }else{
//         console.log("tatik");
        
//     }
// }
// if(obj.ser === "arakan"){
//     if(obj.tariq > 1 && obj.tariq <= 17){
//         console.log("poqr txa");
        
//     }else if(obj.tariq >17 && obj.tariq <= 63){
//         console.log("chapahas mard");
        
//     }else{
//         console.log("papik");
        
//     }
// }

///////////////////////////////////////////////////

// 3.1) Person զանգվածում եղած բոլոր հոբբիները ցույց տալ 1 ընդհանուր զանգվածի մեջ։
// 3.2) Տպել բոլոր մարդկանց անուն ազգանունները console բաժնում



// persons = [
//     {
//       id: 325326,
//       firstname: "Dan",
//       lastname: "Tiger",
//       image: "url",
//       birthday: "03.18.1990",
//       gender: "Male",
//       hobbie: ["Football", "Reading"],
//       nationality: "switzerland",
//       friends: [325330, 325334],
//       residence: 10041
//     },
//     {
//       id: 325326,
//       firstname: "Fan",
//       lastname: "Tiger",
//       image: "url",
//       birthday: "03.18.2005",
//       gender: "Male",
//       hobbie: ["Football", "Reading"],
//       nationality: "switzerland",
//       friends: [325330, 325334],
//       residence: 10041
//     },
//     {
//       id: 325330,
//       firstname: "Frank",
//       lastname: "Lion",
//       image: "url",
//       birthday: "10.05.1991",
//       gender: "male",
//       hobbie: ["walking", "basketball"],
//       nationality: "syria",
//       friends: ["", "", ""],
//       residence: 10041
//     },
//     {
//       id: 325334,
//       firstname: "Bilal",
//       lastname: "Zakki",
//       image: "url",
//       birthday: "08.19.1999",
//       gender: "male",
//       hobbie: ["swimming", "walking"],
//       nationality: "canda",
//       friends: [325330, 325326],
//       residence: 10012
//     }
// let x = [];

// for(let i = 0; i<PermissionStatus.length;i++){
//     const hobbie = persons[i].hobbie;
//     for(let j = 0; j<hobbie.length;j++){
//         if(!x.includes(hobbie[j])){
//             x.push(hobbie[j]);
//         }
//     }
// }
// console.log(x);

/////////////////////////////////////////
// Գտնել այն մարդկանց ովքեր 20 տարեկանից մեծ են և ապրում են Երևանում։


// let user = {
//     name:['Ananyan','Tovmasyan','Petrosyan','Sargsyan'],
//     age:[27,21,15,20],
//     country:['Erevan','Gyumri','Erevan','Goris']
//   }

// for(let i =0; i<user.name.length;i++){
//     if(user.age[i] > 20 && user.country[i] === "Erevan"){
//         console.log(user.name[i] );
        
//     }
// }

/////////////////////////////////////////////
// Տպել տվյալ օրվա օր ամիս տարին՝ իրարից անջատելով “/ “  նշանով։
// Ստուգել եթե օրը կամ ամիսը 10-ից փոքր է դիմացից ավելացնել 0։

// let date = new Date();

// y = date.getFullYear();
// m = date.getMonth() + 1;
// d = date.getDate()

// if(d < 10){
//     d = "0" + d;
// }
// if(m < 10){
//     m = "0" + m;
// }
// if(d < 10 && m < 10){
//     d = "0" + d, m = "0" + m;
// }

// console.log(d + "/" + m + "/" + y);

///////////////////////////////////////////
// Ստեղծել ֆունկցիա,որը կվերադարձնի ամսվա 
// լրիվ անունը և որպես արգումենտ կստանա օր,ամիս,տարին։

// function getMonthFullName(day , month , year){
// let months = [
//     "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
//         "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
// ];
// return months[month];
// }

// let date = new Date();
// let m = date.getMonth();
// let d = date.getDate();
// let y = date.getFullYear();

// console.log(getMonthFullName(m));


////////////////////////////////////
// Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի օրը հանգստյան է թե ոչ։

// function f() {
//     let date = new Date(); 
//     let shabatOr = date.getDay();
//     if( shabatOr === 0 || shabatOr === 6){
//         return true;
//     }
//     return flase;
// }

// console.log(f());

///////////////////////////////////
//stexcel funkcia wory worpes argument kstana or ,
//  amis, tari ev ayd tvyalneri himan vra kveradardzni mardu tariqy

// function getAge(or,amis,tari){
//     let date = new Date();
//     return date.getFullYear() - tari;
// }





///////////////////////////////////////////



// const arr = [1 ,2, 3, 8, 7, 6, 5, 9];

// for(let i = 0 ; i<arr.length;i++){
//     if(arr[i] % 2 === 1){
//         arr[i] *= 2;
//     }
// }




