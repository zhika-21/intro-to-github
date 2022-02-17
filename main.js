
const btn = document.createElement('button')
const parag = document.querySelector('.container-btn')
parag.appendChild(btn)
btn.innerText = "button"
btn.style.color = "red"
=======
const registerBtn = document.querySelector('button')
registerBtn.classList.add('registerBtn')

registerBtn.addEventListener('click', ()=>{
    alert('You have successfully registered!')
})



