import ("./index.css");

const logo = document.createElement("img");
logo.src = "https://www.creativefabrica.com/wp-content/uploads/2020/04/26/Notes-Logo-Graphics-3958844-1-580x435.jpg"

const h1 = document.createElement("h1");
h1.innerText = "Assignment"
h1.classList.add("redcolor")

const top_logo = document.createElement("div")
top_logo.append(logo,h1)
top_logo.classList.add("top_logo")
const p = document.createElement("p");
p.innerText = "Add Your ToDo List  Here";
p.classList.add("note");

const input = document.createElement("input");
input.classList.add("user_input");
input.innerHTML = "Write Your Own Note"

const button = document.createElement("button");
button.classList.add("user_button");
button.innerText = "Click here to Show"
const div = document.createElement("div");
div.classList.add("main_div")

div.append(top_logo,p,input,button)

document.getElementById("root").appendChild(div)

button.onclick = ()=>{
    note_output(input.value)}

function note_output(para){
const rmv_btn = document.createElement("button");
const list_div = document.createElement("ul")
rmv_btn.classList.add("del_button");
rmv_btn.innerText = "Remove"
list_div.classList.add("list_div");
const result = document.createElement("li");
result.innerText =   input.value;
result.classList.add("list");

list_div.append(result,rmv_btn);
document.getElementById("root").appendChild(list_div)

const remove = document.getElementsByClassName("del_button");
    for(let i = 0;i<remove.length;i++){
    remove[i].onclick = function(){
        let out = this.parentElement
        out.style.display = "none";
        }
    }

}
