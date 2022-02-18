
const btn = document.createElement('button')
const parag = document.querySelector('.container-btn')
parag.appendChild(btn)


btn.innerText = "Sign In"
//btn.style.color = "rgb(28, 60, 102)"

btn.innerText = "button"
btn.style.color = "red"



btn.innerText = "Sign In"
//btn.style.color = "rgb(28, 60, 102)"

btn.innerText = "button"
btn.style.color = "red"


const registerBtn = document.querySelector('button')
registerBtn.classList.add('registerBtn')

registerBtn.addEventListener('click', ()=>{
    alert('You have successfully registered!')
})




/* todo list */
window.addEventListener("load", () => {
    const addTask = document.querySelector("#add-task");
    const myInput = document.querySelector("#my-input");

    const divWrapper = document.querySelector(".wrapper");

    addTask.addEventListener("click", () => {
        //console.log("submited")


        if (!myInput.value) {
            alert("Please enter your task")
            return;

        }

        const li = document.createElement("li");

        const ul = document.createElement("ul")
        ul.classList.add("new-task");
        divWrapper.appendChild(ul);
        ul.appendChild(li);

        const taskInput = document.createElement("input");
        taskInput.classList.add("task-input")
        taskInput.type = "text";
        taskInput.setAttribute = "readonly readonly";
        taskInput.value = myInput.value;
        li.appendChild(taskInput);
        myInput.value = ""

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("delete-task");
        btnDelete.innerHTML = "Delete";
        li.appendChild(btnDelete);

        btnDelete.addEventListener("click", () => {
            divWrapper.removeChild(ul)
        })



    })

})

