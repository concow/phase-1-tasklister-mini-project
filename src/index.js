document.addEventListener("DOMContentLoaded", () => {
  
  //console.log("The DOM has loaded")
  
  //Getting inputs setting to variables
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  
  //where our tasts will be listed in the DOM
  const newTaskList = document.getElementById("tasks");

  
  newTaskForm.addEventListener("submit", createNewTask);
});

//submitting/creating our list
const createTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;   //return value of input field

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};