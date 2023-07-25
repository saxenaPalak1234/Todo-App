let inputs = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
function Add(){
    if(inputs.value == ""){
        alert("please Enter Task");
    }else{
        let newElement = document.createElement("li");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        taskList.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click",  remove);
        function remove(){
            newElement.remove();
        }
        
        
    
    }
}

  

