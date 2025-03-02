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
    constructor(name, desc){
        this.name = name;
        this.desc = desc;
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
    const item = new Item(name.value, desc.value);
    console.log(item);
    createProject(item);
    name.value = "";
    desc.value = "";
    return;
}

const createProject = (project) => {
    projects.push(project);
    console.log(project.constructor.length);
    displayProject(project);
    return;
}

const projectWrapper = () => {
    const content = document.querySelector("#content");
    const div = document.createElement("div")
    content.appendChild(div);
    div.id = "projectWrapper";
}


const displayProject = (project) => {
    const projectsWrapper = document.querySelector("#projectWrapper");
        const div = document.createElement("div");
        //const p = document.createElement("p");
        projectsWrapper.appendChild(div);
        div.id = "project"
        addItems(project);
    return; 
}

const addItems = (project) => {
    for(let i = 0; i <= project.constructor.length; i++){
        const wrapper = document.querySelector("#project")
        const div = document.createElement("div");
        const p = document.createElement("p");
        switch(i){
            case 0:
                wrapper.appendChild(div);
                div.appendChild(p);
                p.innerHTML = project.name;
                console.log(project.name);
                break;
            case 1:
                wrapper.appendChild(div);
                div.appendChild(p)
                p.innerHTML = project.desc;
                console.log(project.desc);
                break;
        }
    }
    return;
}

