let EmpName = 'Rocky';
let BaseSal = 40000;
let hra = 2000;
let ma = 2500;
let da = 2000;
let ta = 400;

let pf = 600;
let pt = 500;
let tds = 1000;

let grossSal = BaseSal + hra + ma + da + ta;
let totalSal = grossSal - pf - pt - tds;

console.log("Employee Name:",EmpName);
console.log("Base Salary:",BaseSal);
console.log("House Rent Allowance:",hra);
console.log("Medical Allowance:",ma);
console.log("Dearness Allowance:",da);
console.log("Travelling Allowance:",ta);
console.log("Provident Fund:",pf);
console.log("Professional Tax:",pf);
console.log("Tax Reducted Source:",tds);
console.log("Gross Salary:",grossSal);
console.log("Total Salary:",totalSal);

