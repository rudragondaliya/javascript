// bil Program

let p_name = "RedLabel;"
let p_qty = 2;
let p_price = 10000;
let p_discount = 20;
let total_amt = p_qty * p_price;
let disvalue = (total_amt * p_discount)/100;
let net_price = total_amt - disvalue;


  console.log("product name :",p_name);
  console.log("qyt :", p_qty);    
  console.log("product price :",p_price);
  console.log("Total amount", total_amt);
  console.log("discount :",p_discount);
  console.log("discount amount :",disvalue);
  console.log("net price :",net_price);

