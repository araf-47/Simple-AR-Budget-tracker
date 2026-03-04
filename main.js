// 1. DATA STORAGE (Chapter 3: Arrays)
let expenseList = []; 

// 2. THE ACTION (Chapter 6: Functions)
function addItem() {
    // 3. GRAB DATA (Chapter 10: DOM)
    let name = document.getElementById("itemName").value;
    let price = Number(document.getElementById("itemPrice").value); // Convert text to Number

    // 4. VALIDATION (Chapter 5: Logic/If)
    if (name === "" || price <= 0) {
        alert("Please enter a valid item and price!");
        return;
    }

    // 5. UPDATE ARRAY (Chapter 3: Array Methods)
    expenseList.push(price); 

    // 6. PROCESS DATA (Chapter 5: Loops)
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i]; // Adding each price to the total
    }

    // 7. SHOW DATA (Chapter 11: DOM Output)
    document.getElementById("totalDisplay").innerHTML = "Total: $" + total;
    
    // 8. FINAL LOGIC (Chapter 5: If/Else)
    if (total > 1000) {
        document.getElementById("totalDisplay").style.color = "red";
    }
}