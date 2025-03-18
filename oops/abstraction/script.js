class Employee {
    constructor(name,age,BasicSal)
    {
        this.name = "";
        this.age = "";
        this.BasicSal = "";
        
    }
    setDetails(name,age,BasicSal){
        this.name = name;
        this.age = age;
        this.BasicSal = BasicSal;
    }

   
}

class Salary extends Employee
{
    constructor(){
        super()
        this.hra = "";
        this.ma = "";
        this.pf = "";
    }

    setSalary(hra,ma,pf)
    {
       this.hra = hra;
       this.ma = ma;
       this.pf = pf;
       this.netSalary = hra + ma - pf;
       this.grossSalary = this.netSalary + this.BasicSal;
       this.getSalaryDetails();
    }

    getSalaryDetails()
    {
        console.log(`Employee Name : ${this.name}`);
        console.log(`Employee age : ${this.age}`);
        console.log(`Employee basicSalary : ${this.BasicSal}`);
        console.log(`Employee NetSalary : ${this.netSalary}`);
        console.log(`Employee GrossSalary : ${this.grossSalary}`);
    }
}

let obj = new Salary() 
{
    obj.setDetails("Rudra",20,100000);
    obj.setSalary(5000,1000,1200);
}