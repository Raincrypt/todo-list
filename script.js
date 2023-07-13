const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

let addTask = () => {
    if(inputBox.value !== ''){
        //adding Task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        li.classList.add("task")

        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00d7";
        li.appendChild(deleteIcon)
    }
    else{
        alert("You must write something")
    }
}