///////////////////////////////////////////////////////////////
// let inp1 = document.getElementById("inp1")
// let inp2 = document.getElementById("inp2")
// let btn = document.getElementById("btn")

// btn.addEventListener("click" , function(){
//     let val1 = inp1.value;
//     let val2 = inp2.value;

//     inp1.value = val2;
//     inp2.value = val1;

// })
/////////////////////////////////////////////////////////////
// function f(){
//     alert("hello")
// }
////////////////////////////////////////////////////////////////////////////

let todos = [];
let modal = document.getElementsByClassName("my_modal")[0];

function getTodo(todo) {
    let todosBlock = document.getElementById("todos_block")
    let item = document.createElement("div");
    item.classList.add("todo_item");
    let check = document.createElement("input");
    check.type = "checkbox";
    let label = document.createElement("label");
    label.classList.add("text");
    label.innerText = todo.text;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = () => removeTodo(todo.id,item);

    label.append(btn);
    label.prepend(check);
    item.append(label);
    todosBlock.append(item);
}

let btn = document.getElementById("btn")
btn.addEventListener("click", function (e) {
    e.preventDefault();
    let text = document.getElementById("inp");
    if (text.value !== "") {
        const newTodo = {
            id: Date.now(),
            text: text.value,
            status: false
        };
        todos = [...todos, newTodo];
        getTodo(newTodo);
        text.value = "";
        modal.classList.remove("active");
    } else {
        alert("Input is empty")
    }
});


function removeTodo(id, tag){
    todos = todos.filter(todo => todo.id !== id);
    tag.remove();
    
}


function showModal() {
    
    modal.classList.add("active")
}

function f(x){
    modal.classList.remove("active")
}


document.getElementById("form").addEventListener("click", function(e){
    e.stopPropagation();
})