let grade;
let avg = parseInt(prompt("Enter the Avg:"));

grade = avg>=80 ? 'A' : 
        avg>=60 ? 'B' : 
        avg>=50 ? 'C' :
        'Needs-Improvements';
    console.log("your Grade is:",grade);
        