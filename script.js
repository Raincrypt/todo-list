const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

let addTask = () => {
    if(inputBox.value !== ''){
        //adding Task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        li.classList.add("task");
        inputBox.clear;

        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00d7";
        li.appendChild(deleteIcon)
    }
    else{
        alert("You must write something")
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

let saveData = () =>{
    localStorage.setItem("data", listContainer.innerHTML)
}

let getData = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}
getData();