function saveIncomeGoal() {
  const income = document.getElementById("income").value;
  const goal = document.getElementById("goal").value;

  if (!income || !goal) {
    alert("Please enter both income and saving goal.");
    return;
  }

  localStorage.setItem("monthlyIncome", income);
  localStorage.setItem("savingGoal", goal);
  alert("Income & Goal saved!");
}

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const note = document.getElementById("note").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  if (!title || !amount || !date || !category) {
    alert("Please fill all required fields.");
    return;
  }

  const expense = {
    title,
    amount: parseFloat(amount),
    note,
    date,
    category
  };

  const allExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  allExpenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(allExpenses));
  alert("Expense added!");

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("note").value = "";
  document.getElementById("date").value = "";
  document.getElementById("category").value = "";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
