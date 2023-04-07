// AOS.init();
let doc = document
let body = doc.body
let scr = doc.querySelector('script')
let cont = doc.createElement('div')
body.insertBefore(cont, scr)
cont.classList.add('container')
let wrap = doc.createElement('div')
wrap.classList.add('wrap')
cont.appendChild(wrap)

// Выбираем кнопку
let btn = doc.querySelector(".mode__button");
cont.appendChild(btn)
cont.insertBefore(btn, wrap)
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let css = doc.querySelector('.css')
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme')
    }
    else {
        localStorage.setItem('theme', 'dark')
    }
    replacement__css()
});

function replacement__css() {
    let css = doc.querySelector('.css')
    try {
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme')
        }
        else {
            body.classList.remove('dark-theme')
        }
    } catch (error) { }
}
replacement__css()

for (let i = 0; i < 20; i++) {
    let buttons = doc.createElement('div')
    buttons.classList.add('buttons')
    wrap.appendChild(buttons)
}

let input__action = doc.createElement('input')
input__action.classList.add('input__action')
cont.appendChild(input__action)
cont.insertBefore(input__action, wrap)
input__action.type = 'text'
input__action.placeholder = '0'
input__action.setAttribute('readonly', '')

let button__c = doc.querySelectorAll('.buttons')[0]
button__c.textContent = 'C'
button__c.setAttribute('onclick', 'clean()')
button__c.classList.add('C')

let button__x = doc.querySelectorAll('.buttons')[1]
button__x.textContent = '<'
button__x.setAttribute('onclick', 'back()')

let button__percent = doc.querySelectorAll('.buttons')[2]
button__percent.textContent = '%'
button__percent.setAttribute('onclick', 'insert("/100*")');

let button__split = doc.querySelectorAll('.buttons')[3]
button__split.textContent = '/'
button__split.setAttribute('onclick', 'insert("/")');

let button__7 = doc.querySelectorAll('.buttons')[4]
button__7.textContent = '7'
button__7.setAttribute('onclick', 'insert("7")');

let button__8 = doc.querySelectorAll('.buttons')[5]
button__8.textContent = '8'
button__8.setAttribute('onclick', 'insert("8")');

let button__9 = doc.querySelectorAll('.buttons')[6]
button__9.textContent = '9'
button__9.setAttribute('onclick', 'insert("9")');

let button__multiply = doc.querySelectorAll('.buttons')[7]
button__multiply.textContent = 'x'
button__multiply.setAttribute('onclick', 'insert("*")');

let button__4 = doc.querySelectorAll('.buttons')[8]
button__4.textContent = '4'
button__4.setAttribute('onclick', 'insert("4")');

let button__5 = doc.querySelectorAll('.buttons')[9]
button__5.textContent = '5'
button__5.setAttribute('onclick', 'insert("5")');

let button__6 = doc.querySelectorAll('.buttons')[10]
button__6.textContent = '6'
button__6.setAttribute('onclick', 'insert("6")');

let button__subtraction = doc.querySelectorAll('.buttons')[11]
button__subtraction.textContent = '-'
button__subtraction.setAttribute('onclick', 'insert("-")');

let button__1 = doc.querySelectorAll('.buttons')[12]
button__1.textContent = '1'
button__1.setAttribute('onclick', 'insert("1")');

let button__2 = doc.querySelectorAll('.buttons')[13]
button__2.textContent = '2'
button__2.setAttribute('onclick', 'insert("2")');

let button__3 = doc.querySelectorAll('.buttons')[14]
button__3.textContent = '3'
button__3.setAttribute('onclick', 'insert("3")');

let button__add = doc.querySelectorAll('.buttons')[15]
button__add.textContent = '+'
button__add.setAttribute('onclick', 'insert("+")');

let button__more = doc.querySelectorAll('.buttons')[16]
button__more.textContent = '00'
button__more.setAttribute('onclick', 'insert("00")');

let button__0 = doc.querySelectorAll('.buttons')[17]
button__0.textContent = '0'
button__0.setAttribute('onclick', 'insert("0")');

let button__dot = doc.querySelectorAll('.buttons')[18]
button__dot.textContent = '.'
button__dot.setAttribute('onclick', 'insert(".")');

let button__equals = doc.querySelectorAll('.buttons')[19]
button__equals.textContent = '='
button__equals.setAttribute('onclick', 'equal()');

function insert(num) {
    input__action.value = input__action.value + num;
}
function clean() {
    input__action.value = "";
}
function back() {
    let exp = input__action.value;
    input__action.value = exp.substring(0, exp.length - 1);
}
function equal() {
    let exp = input__action.value;
    if (exp) {
        input__action.value = eval(exp);
    }
}

// let p = doc.createElement('p')
// p.classList.add('calc__screen')
// input__action.appendChild(p)
// p.textContent = '0'

// let a = ''; // переменная для хранения первого введенного значения
// let b = ''; // переменная для хранения второго введенного значения
// let sign = ''; // переменная для хранения знака операции
// let finish = false; // переменная для хранения финального значения

// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // массив для хранения цифр
// const action = ['/', 'x', '-', '+']; // массив для хранения операций

// const out = document.querySelector('.calc__screen'); // переменная для хранения вывода

// function clearAll() {
//     a = '';
//     b = '';
//     sign = '';
//     finish = false;
//     out.textContent = '0';
// }

// let ss = doc.getElementsByClassName('calc__screen')
// console.log(ss);

// button__c.addEventListener('onclick', clearAll)

// wrap.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('buttons')) return; // нажата не кнопка

//     if (e.target.classList.contains('C')) { // нажата кнопка C
//         clearAll();
//         return;
//     }

//     out.textContent = ''; // очищаем вывод

//     const key = e.target.textContent; // получаем нажатую кнопку

//     // если нажата клавиша 0-9 или .
//     if (digit.includes(key)) {
//         if (b === '' && sign === '') {
//             a += key;
//             console.log(a, b, sign);
//             out.textContent = a;
//             console.log(ss);
//         }
//         else if (a !== '' && b !== '' && finish) {
//             b = key;
//             finish = false;
//             out.textContent = b;
//         }
//         else {
//             b += key;
//             out.textContent = b;
//         }
//         console.log(a, b, sign);
//         return;
//     }

//     // если нажата клавиша + - / *
//     if (action.includes(key)) {
//         sign = key;
//         out.textContent = sign;
//         console.log(a, b, sign);
//         return;
//     }

//     // нажата =
//     if (key === '=') {
//         if (b === '') {
//             b = a;
//         }
//         switch (sign) {
//             case '+':
//                 a = (+a) + (+b);
//                 break;
//             case '-':
//                 a = a - b;
//                 break;
//             case 'x':
//                 a = a * b;
//                 break;
//             case '/':
//                 if (b === '0') {
//                     out.textContent = 'Ошибка';
//                     a = '';
//                     b = '';
//                     sign = '';
//                     return;
//                 }
//                 a = a / b;
//                 break;
//         }
//         finish = true;
//         out.textContent = a;
//         console.log(a, b, sign);
//     }
// })