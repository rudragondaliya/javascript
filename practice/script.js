
// VARIABLE DECLARATION

const greeting = document.getElementById("greeting-section");
const mainCalculator = document.getElementById("calculator-item");
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalBtn = document.querySelector(".equal-btn");


let num1 = "";
let num2 = "";
let operator = "";

// GREETING SECTION 
// WHEN USER CLICK THE START BUTTON THE CALCULATOR IS SHOWN

mainCalculator.style.display = "none";

startBtn.addEventListener("click", () => {

    mainCalculator.style.display = "block";
    greeting.style.display = "none";

})

// IN FIRST STEP USING FOR EACH LOOP TO ENSURE THAT EACH BUTTON CLICK
// FUTHERMORE, CHECK THE CONDITION IF OPERATOR IS EMPTY THEN EXCUTE NUM1 OR ELSE NUM2 AND DISPLAY THE VALUE

numberBtn.forEach(button => {
    button.addEventListener("click", () => {

        if(operator === ""){
            num1 += button.value;
            display.value = num1;
        }else{
            num2 += button.value;
            display.value = num1 +" " + operator+ " " + num2;
        }

    })
})

// IN THE SECOND STEP AGAIN USING FOR EACH LOOP TO ENSURE THAT THE BUTTON IS CLICK
// MOREOVER, CHECK THE CONDITION IF NUM1 IS NOT EMPTY THEN THE OPERATOR VARIABLE WILL RUN AND DISPLAY THE VALUE

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {

        if(num1 !== ""){
            operator = button.value;
            display.value = num1 + " " + operator;
        }

    })
})

// IN THE THIRD STEP CREATE A CLEAR BUTTON TO CLEAR ALL THE OUTPUT OR VALUE IN DISPLAY 
// WHEN CLICK ON THE BUTTON ALL THE VARIABLE WILL BECOME EMPTY

clearBtn.addEventListener("click", () => {

    num1 = "";
    num2 = "";
    operator = "";
    display.value = "";

})

// IN THE FINAL STEP CREATE A EQUAL BUTTON FOR THE CALCULATION OUTPUT 
// ON CLICK CHECK THE CONDITION IF NUM1 AND NUM2 IS NOT EMPTY THEN THE CONDITION IS TRUE OR ELSE CONDITION IS FALSE

equalBtn.addEventListener("click", () => {
    if(num1 !== "" && num2 !== ""){
        let result = 0;
        switch (operator){

            case '+':
                result = parseInt(num1) + parseInt(num2);
              break;  

            case '-':
                result = parseInt(num1) - parseInt(num2);
              break; 

            case '*':
                result = parseInt(num1) * parseInt(num2);
              break;  

            case '/':
                result = parseInt(num1) / parseInt(num2);
              break;
              
            default:
                break;    
        }

        display.value = num1 + " " + operator+ " " +  num2 + " = " + result;
    } else {
        display.value = "invalid calculation";
    }
})
