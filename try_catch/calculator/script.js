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
        else if(operator.includes(value)) {
            if(operator.includes(display.value.slice(-1))) {
                display.value = display.value.slice(0,-1) + value;
            }else {
                display.value += value;
            }
        }
        else {
            display.value += value;
        }

    })
})