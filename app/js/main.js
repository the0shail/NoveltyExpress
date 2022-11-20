
const navCollapse = document.querySelector(".nav__collapse");
const navBurger = document.querySelector(".nav_burger");


navBurger.addEventListener("click", () => {
    navCollapse.classList.toggle("active");
});


let inputs = document.querySelectorAll("input.inputReq");
inputTran(inputs)

function inputTran(inputs) {

    inputs.forEach(inp => {
        let legend = inp.previousElementSibling;

        inp.addEventListener('input', () => {
            let value = inp.value;
            console.log(value);
            value == '' ? legend.classList.remove('active') : legend.classList.add('active')
        })
    })
}



let button_show_form = document.querySelectorAll('.show_form');
let formApplication = document.querySelector('.formApplication');
let xmark = document.querySelector('.fa-xmark');
let hideApplication = document.querySelector('.hideApplication');

console.log(button_show_form);

button_show_form.forEach(btn => {
    btn.addEventListener("click", () => {
        formApplication.classList.remove("hide");
    });
})


xmark.addEventListener("click", () => {
    formApplication.classList.add("hide");
});

hideApplication.addEventListener('click', () => {
    formApplication.classList.add("hide");
});