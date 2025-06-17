if(localStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}
function saveBudget() {
  localStorage.setItem("income", document.getElementById("income").value);
  localStorage.setItem("goal", document.getElementById("goal").value);
}
function addExpense() {
  const title = document.getElementById("title").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const note = document.getElementById("note").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const newExpense = { title, amount, note, date, category };
  const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  alert("Expense Added");
}