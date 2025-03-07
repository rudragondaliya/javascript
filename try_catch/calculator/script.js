let buttons = document.querySelectorAll('button');
let operator = ['+','-','*','/'];
let display = document.querySelector('#display');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if(value === '='){
            display.value = eval(display.value);
        }
        else if(value === 'C'){
            display.value = "";
        }
        else {
            display.value += value;
        }

    })
})