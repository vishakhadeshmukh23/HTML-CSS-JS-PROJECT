function calculateTip() {
  const Bill = parseFloat(document.getElementsByClassName("for")[0].value);
  const Percentage = parseFloat(document.getElementsByClassName("per")[0].value);

  if (isNaN(Bill) || isNaN(Percentage)) {
    alert("Please enter valid numbers");
    return;
  }

  let tipAmount = (Bill * Percentage) / 100;
  let totalAmount = Bill + tipAmount;

  let message = "Tip: ₹" + tipAmount.toFixed(2) + " | Total to Pay: ₹" + totalAmount.toFixed(2);
  document.getElementById("result").innerText = message;
}
