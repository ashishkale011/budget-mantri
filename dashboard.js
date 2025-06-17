function loadDashboard() {
  const income = parseFloat(localStorage.getItem("monthlyIncome") || 0);
  const goal = parseFloat(localStorage.getItem("savingGoal") || 0);
  const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const balance = income - totalExpenses;

  document.getElementById("incomeDisplay").textContent = income;
  document.getElementById("goalDisplay").textContent = goal;
  document.getElementById("totalExpenses").textContent = totalExpenses;
  document.getElementById("balance").textContent = balance;

  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    expenseList.innerHTML = "<p>No expenses recorded.</p>";
    return;
  }

  expenses.forEach((exp, index) => {
    const div = document.createElement("div");
    div.style.margin = "10px 0";
    div.innerHTML = `
      <strong>${exp.title}</strong> - ₹${exp.amount} (${exp.category})<br/>
      <small>${exp.date}${exp.note ? " | Note: " + exp.note : ""}</small>
      <hr/>
    `;
    expenseList.appendChild(div);
  });
}

function goBack() {
  window.location.href = "index.html";
}

function clearData() {
  if (confirm("Are you sure you want to delete all data?")) {
    localStorage.clear();
    location.reload();
  }
}

window.onload = loadDashboard;
