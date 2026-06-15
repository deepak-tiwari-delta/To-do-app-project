function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Please input a task!");
         return;
    }
    // console.log(task);

    let li = document.createElement("li");
    li.innerHTML =
  task +
  " <button class='complete-btn' onclick='completeTask(this)'>✓</button>" +
  " <button class='deletebtn' onclick='deleteTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

     input.value = "";
}

function deleteTask(button){
   
    button.parentElement.remove();
}

function handleEnter(event){
    if(event.key === "Enter"){
        addTask();
    }
}

 function completeTask(button) {
  button.parentElement.classList.toggle("completed");
}