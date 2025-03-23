import "./styles.css";

window.addEventListener("load", () => {
    createBtn();
    createDialog();
    createForm();
    projectWrapper();
})

const projects = [];

//todo item class
class Item {
    constructor(name, desc, todos){
        this.name = name;
        this.desc = desc;
        this.todos = todos;
    }
}

//creating btn for triggering dialog
const createBtn = () =>{
    const headerWrapper = document.querySelector("#header-wrapper");
    const btn = document.createElement("button");
    headerWrapper.appendChild(btn);
    btn.id = "addBtn";
    btn.innerHTML = "Add item"
    addFunction(btn);
}

//creating the dialog
const createDialog = () => {
    const headerWrapper = document.querySelector("#header-wrapper");
    const dialog = document.createElement("dialog");
    headerWrapper.appendChild(dialog);
    dialog.id = "dialog";
    return;
}

//creating the form inside dialog
const createForm = () => {
    const dialog = document.querySelector("#dialog");
    const form = document.createElement("form");
    dialog.appendChild(form);
    form.method = "dialog";
    addFormItems(form);
    return;
}

//adding form children
const addFormItems = (form) => {
    for(let i = 0; i < 3; i++){
        const div = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");
        form.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
        switch(i){
            case 0:
                label.innerHTML = `name:`;
                label.for = "name";
                input.type = "text";
                input.name = "name";
                input.id = "nameBtn";
                break;
            case 1:
                label.innerHTML = `desc:`;
                label.for = "desc";
                input.type = "textarea";
                input.name = "desc";
                input.id = "descBtn";
                break;
            case 2:
                input.type = "submit";
                input.name = "submit";
                input.id = "submit";
                addInput(input);
                break;

        }
    }
    return
}

const addFunction = (btn) => {
    btn.addEventListener("click", () => {
        const dialog = document.querySelector("#dialog");
        dialog.showModal();
    })
}

const addInput = (input) => {
    input.addEventListener("click", () => {
        showItem();
        return;
    })
}

const showItem = () => {
    const name = document.querySelector("#nameBtn");
    const desc = document.querySelector("#descBtn");
    const item = new Item(name.value, desc.value, []);
    console.log(item);
    createProject(item);
    name.value = "";
    desc.value = "";
    return;
}

const createProject = (project) => {
    projects.push(project);
    //console.log(project.constructor.length);
    displayProject(project);
    return;
}

const projectWrapper = () => {
    const content = document.querySelector("#content");
    const div = document.createElement("div")
    content.appendChild(div);
    div.id = "projectWrapper";
    return;
}


const displayProject = (project) => {
    const projectsWrapper = document.querySelector("#projectWrapper");
        const div = document.createElement("div");
        //const p = document.createElement("p");
        projectsWrapper.appendChild(div);
        div.className = "project"
        addItems(project, projectsWrapper);
    return; 
}




const clickDiv = () => {
    const divs = document.querySelectorAll(".project")
    const project = projects[projects.length-1]
    
    divs[divs.length-1].addEventListener("click", () => {
        //console.log(divs[divs.length-1]);
        displayTodo(divs[divs.length-1], project);
        
    })
    return;
}


const addItems = (project, parent) => {
    for(let i = 0; i < project.constructor.length; i++){
        const wrapper = document.querySelectorAll(".project")
        const div = document.createElement("div");
        const p = document.createElement("p");
        switch(i){
            case 0:
                wrapper[parent.childElementCount-1].appendChild(div);
                div.appendChild(p);
                p.innerHTML = project.name;
                //console.log(project.name);
                break;
            case 1:
                wrapper[parent.childElementCount-1].appendChild(div);
                div.appendChild(p)
                p.innerHTML = project.desc;
                //console.log(project.desc);
                break;
        }
        //console.log(wrapper)
    }

    console.log(projects, projects[0].todos);
    clickDiv();
    return;
}

const displayTodo = (todo, project) => {
    console.log(todo.childNodes);
    console.log(project);
    const content = document.querySelector("#content");
    for(let i = 0; i < todo.childElementCount; i++){
        switch(i){
            case 0:
                const createDiv = document.createElement("div");
                content.appendChild(createDiv);
                createDiv.className = "todoItem";
                break;
            case 1:
                addTodo(todo, project, content);
                addButtons(todo, project);
                break;
        }
    }
    return;
}

const addTodo = (todo, project, content) => {
    const todoItem = document.querySelector(".todoItem");
    const createDiv = document.createElement("div");
    todoItem.appendChild(createDiv);
    createDiv.id = "todoMain"
    for(let i = 0; i < todo.childElementCount; i++){    
        const createP = document.createElement("p");
        switch(i){
            case 0:
                createDiv.appendChild(createP);
                createP.innerHTML = project.name;
                console.log(todoItem)
                break;
            case 1:
                createDiv.appendChild(createP);
                createP.innerHTML = project.desc;
                break;
        }

    }
    return;
}

const addButtons = (todo, project) => {
    const todoItem = document.querySelector(".todoItem");
    const createDiv = document.createElement("div");
    todoItem.appendChild(createDiv);
    createDiv.id = "buttons";
    for(let i = 0; i < todo.childElementCount; i++){
        const createBtn = document.createElement("button");
        switch(i){
            case 0:
                createDiv.appendChild(createBtn);
                createBtn.innerHTML = "add task"
                break;
            case 1:
                console.log("im in btn", project.todos);
                break;
        }
    }
    return
}
console.log(projects);

