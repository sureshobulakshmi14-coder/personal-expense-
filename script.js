
let total = 0;

function addExpense() {
  const description = document
    .getElementById("description")
    .value.trim();

  const amount = Number(
    document.getElementById("amount").value
  );

  if (!description || !Number.isFinite(amount) || amount <= 0) {
    alert("Enter a valid expense name and amount.");
    return;
  }

  total += amount;

  document.getElementById("total").textContent =
    total.toFixed(2);

  const item = document.createElement("li");
  item.textContent = `${description} - ₹${amount.toFixed(2)}`;

  document.getElementById("expenses").appendChild(item);

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}
