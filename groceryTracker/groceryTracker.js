let amount1, amount2, amount3;

function calculateTotal() {
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount1 = parseFloat(document.getElementById('amount2').value);
    amount1 = parseFloat(document.getElementById('amount3').value);
   
    // Calculation
    let total = amount1+amount2+amount3;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}