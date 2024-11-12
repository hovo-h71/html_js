let products = [
    {
        id: 1,
        x:"bul.jpg",
        Name: "Բուլկի քունջութով",
        Description:"Բուլկի քունջութով:",
        Count: 28,
        Price:"350 դր",
    },
    {
        id: 2,
        x:"karkandak.jpg",
        Name: "Կարկանդակ թխված",
        Description:"Մսով կարկանդակ թխված:",
        Count: 15,
        Price:"500 դր",
    },
    {
        id: 3,
        x:"kart.jpg",
        Name: "Կարկանդակ պանրով",
        Description:"Շերտավոր խմոր, ֆետա պանիր, աղ, պղպեղ:",
        Count: 24,
        Price:"460 դր",
    },
    {
        id: 4,
        x:"donat.jpg",
        Name: "Թխվածք դոնաթ",
        Description:"Թխվածք դոնաթ:",
        Count: 12,
        Price:"600 դր",
    },
    {
        id: 5,
        x:"pp.png",
        Name: "Պիցցա պանրով և ձիթապտուղով",
        Description:"Ալյուր բարձր տեսակի, աղ, դրոժ, պանիր, ձիթապտուղ։:",
        Count: 9,
        Price:"1200 դր",
    },
    {
        id: 6,
        x: "kp.jpg",
        Name: "Կարկանդակ պանրով և սպանախով «Սպանակոպիտա»",
        Description:"Շերտավոր խմոր, ֆետա պանիր, սպանախ,աղ, պղպեղ::",
        Count: 14,
        Price:"900 դր",
    }
];

let zambyux = [];

let div = "";
products.forEach((product) => {
    div += `
        <div class = "item">
            <h4>${product.Name}</h4>
            <em>${product.Price}</em>
            <p>${product.Description}</p>
            <p>Քանակը։ ${product.Count} հատ</p> 
            <img src="${product.x}" alt="nkar" class = "nkarner">  
            <button onclick="addCart(${product.id})">Ավելացնել</button> 
        </div>
    `
});

let div1 = document.getElementsByClassName("div1")[0];
div1.innerHTML = div;


function addCart(id){
    let newProduct = products.find(product => product.id === id)
    zambyux.push(newProduct);
    console.log(zambyux);
}
