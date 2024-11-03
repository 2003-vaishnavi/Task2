// Add item to the order list
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");

    if (itemInput.value === "") {
        alert("Please enter a chocolate type to add.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${itemInput.value} <button class="remove" onclick="removeItem(this)">Remove</button>`;
    itemList.appendChild(li);
    itemInput.value = "";
}

// Remove item from the order list
function removeItem(button) {
    button.parentElement.remove();
}

// Validate contact form
function validateForm() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Thank you for your message!");
    return true;
}
