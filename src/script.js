const app = document.getElementById('app');

const ageBox = app.querySelector('input[name="age"]');
const kmBox = app.querySelector('input[name="km"]');


const buttonCalc = document.getElementById('btnCalc');
console.log(buttonCalc);

const buttonCanc = document.getElementById('btnCanc');
console.log(buttonCanc)

const ticket = document.querySelector('.ticket');

buttonCalc.addEventListener('click', function(){
    let age = ageBox.value;
    let km = ageBox.value;
    let pricexkm = 0.21;
    let price = km * pricexkm;
    ticket.innerHTML += `<h3>${price}€</h3>`
    ticket.classList.remove('d-none');
})

buttonCanc.addEventListener('click', function(){
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = ''
    ticket.classList.add('d-none');
})

console.log(age);
console.log(km);


