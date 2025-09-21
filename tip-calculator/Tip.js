function calculateTip(){
const Bill = parseFloat(document.getElementsByClassName("for").value);
const Percentage = parseFloat(document.getElementsByClassName("per").value);

if(isNaN(Bill) || isNaN(Percentage)){
   alert("Plase enter your valid number");
   return;
}


let tipAmount = (Bill * Percentage) / 100;
let result = tipAmount - Bill;

let message = "Tip: ₹" + tipAmount.toFixed(2) + " | Total to Pay: ₹" + totalAmount.toFixed(2);
document.getElementById("result").innerText = message;


}
