// DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total');

// Initialize expense array
let expenses = [];

// Event listeners
expenseForm.addEventListener('submit', addExpense);

// Function to add an expense
function addExpense(e) {
    e.preventDefault();

    const expenseDescription = document.getElementById('expense').value;
    const expenseAmount = parseFloat(document.getElementById('amount').value);

    if (!expenseDescription || !expenseAmount || expenseAmount <= 0) {
        alert('Please enter valid expense information.');
        return;
    }

    const expense = {
        description: expenseDescription,
        amount: expenseAmount
    };

    expenses.push(expense);

    updateExpenseList();
    updateTotal();
    clearForm();
}

// Function to update the expense list
function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const item = document.createElement('div');
        item.classList.add('expense-item');
        item.innerHTML = `
            <div>${expense.description}</div>
            <div>$${expense.amount.toFixed(2)} <span class="remove-item" onclick="removeExpense(${index})">Remove</span></div>
        `;
        expenseList.appendChild(item);
    });
}

// Function to remove an expense
function removeExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotal();
}

// Function to update the total expense
function updateTotal() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpense.textContent = total.toFixed(2);
}

// Function to clear the form
function clearForm() {
    document.getElementById('expense').value = '';
    document.getElementById('amount').value = '';
}
