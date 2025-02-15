const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-Container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must have to write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    SaveData()
}
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        SaveData()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        SaveData()
    }
}, false);

function SaveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showData(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showData();