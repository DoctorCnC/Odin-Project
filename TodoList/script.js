// todo.js - Todo class/factory function
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// project.js - Project class/factory function
class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  // Other methods for managing todos within the project
}

// app.js - Main application logic
const projects = [new Project("Default Project")];
let currentProjectIndex = 0;

// Function to create a new project
function createProject(name) {
  const newProject = new Project(name);
  projects.push(newProject);
  // Update the project list in the DOM
  renderProjectList();
}

// Function to create a new todo
function createTodo(title, description, dueDate, priority) {
  const newTodo = new Todo(title, description, dueDate, priority);
  projects[currentProjectIndex].addTodo(newTodo);
  // Update the todo list in the DOM
  renderTodoList();
}

// Function to render the project list in the DOM
function renderProjectList() {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = project.name;
    listItem.addEventListener("click", () => {
      currentProjectIndex = index;
      renderTodoList();
      document.getElementById("project-name").textContent = project.name;
    });
    projectList.appendChild(listItem);
  });
}

// Function to render the todo list in the DOM
function renderTodoList() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";
  projects[currentProjectIndex].todos.forEach(todo => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;
    todoList.appendChild(listItem);
  });
}

// Event listener for creating a new project
document.querySelector(".btn-create-project").addEventListener("click", () => {
  // Show a modal with a form to create a new project
  // Get the project name from the form and call createProject()
});

// Event listener for creating a new todo
document.querySelector(".btn-create-todo").addEventListener("click", () => {
  // Show a modal with a form to create a new todo
  // Get the todo details from the form and call createTodo()
});

// Initial render
renderProjectList();
renderTodoList();
      
