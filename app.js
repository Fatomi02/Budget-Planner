const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const clearBtn = document.querySelector("#clear-btn");
const createBtn = document.querySelector(".create-btn");
const expenseList = document.querySelector("#expense-list");
const totalExpenses = document.querySelector("#total-expense")
const alertCtrl = document.querySelector("ion-alert")

let total = 0;

const clear = () => {
 inputReason.value = "";
 inputAmount.value = "";
}

createBtn.addEventListener("click", () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
        alertCtrl.buttons = ['OK'];
    }

    const newItem  = document.createElement("ion-item");
    newItem.textContent = `${enteredReason}: $${enteredAmount}`
    expenseList.appendChild(newItem);

    total += +enteredAmount

    totalExpenses.textContent = `$${total}`;

    clear();
})

clearBtn.addEventListener("click", clear);