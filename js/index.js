let button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    window.location.href = "/assets/project/iEdu/book.html";
});
let navbar = document.querySelector('header');
let link = document.querySelector('ul');
let burger = document.querySelector('.burger');
let btns = document.querySelector('.btns');

let linkItems = Array.from(document.getElementsByTagName('li'))

burger.addEventListener('click', ()=>{
    navbar.classList.toggle("col");
    link.classList.toggle("col");
    navbar.classList.toggle("h");
    link.classList.toggle("viz");
    btns.classList.toggle("col");
});

linkItems.forEach(element =>{
    element.addEventListener('click', (e)=>{
        setTimeout(() => {
            navbar.classList.toggle("col");
            link.classList.toggle("col");
            navbar.classList.toggle("h");
            link.classList.toggle("viz");
            btns.classList.toggle("col");
        }, 200);
    })
});
