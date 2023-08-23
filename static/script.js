let cashBalance = 1000;
const itemPrices = {
    "Pen": 5,
    "Pencil": 2,
    "Eraser": 1,
    "Sharpener": 2,
    "Geometry Box": 10
};

function updateCashBalanceDisplay() {
    document.getElementById("cashBalance").textContent = cashBalance;
}

function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseInt(document.getElementById("itemPrice").value);
    if (itemName && itemPrice) {
        itemPrices[itemName] = itemPrice;
        console.log(`Added item: ${itemName} - Rs. ${itemPrice}`);
    }
}

function updatePurchaseAmountDisplay(amount) {
    document.getElementById("purchaseAmountDisplay").textContent = amount;
}

function purchaseItem() {
    const selectedPurchaseItem = document.getElementById("purchaseItem").value;
    const purchaseQuantity = parseInt(document.getElementById("purchaseQuantity").value);
    if (itemPrices[selectedPurchaseItem] && purchaseQuantity > 0) {
        const purchaseAmount = itemPrices[selectedPurchaseItem] * purchaseQuantity;
        if (purchaseAmount <= cashBalance) {
            cashBalance -= purchaseAmount;
            updateCashBalanceDisplay();
            updatePurchaseAmountDisplay(purchaseAmount);
            console.log(`Purchased ${purchaseQuantity} ${selectedPurchaseItem}(s) for Rs. ${purchaseAmount}`);
        } else {
            console.log("Insufficient funds to make the purchase.");
        }
    } else {
        console.log("Item not found.");
    }
}

function sellItem() {
    const selectedSellItem = document.getElementById("sellItem").value;
    const sellQuantity = parseInt(document.getElementById("sellQuantity").value);
    const sellingPrice = parseInt(document.getElementById("sellPrice").value);
    if (itemPrices[selectedSellItem] && sellQuantity > 0) {
        const revenue = sellingPrice * sellQuantity;
        cashBalance += revenue;
        updateCashBalanceDisplay();
        console.log(`Sold ${sellQuantity} ${selectedSellItem}(s) for Rs. ${revenue}`);
    } else {
        console.log("Item not found.");
    }
}

updateCashBalanceDisplay();
