// Task 1: Creating the Base Structure
console.log("********** Base Structure Created **********");

// Task 2: Adding Employee Cards Dynamically
console.log("********** Employee Cards Dynamic Addition **********");
function addEmployeeCard(name, position) { // Function to add employee card dynamically

    const card = document.createElement("div"); // Create the main employee card container
    card.setAttribute("class", "employee-card"); 
    const nameHeading = document.createElement("h4"); // Heading for the employee name
    nameHeading.textContent = name;
    const positionParagraph = document.createElement("p"); // Paragraph for the employee position
    positionParagraph.textContent = position;
    const removeButton = document.createElement("button"); // Remove button
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-btn"); 

    removeButton.addEventListener("click", function (event) { // Task 4 
        event.stopPropagation(); // Prevent event bubbling to the container
        card.remove(); // Remove only the specific card
    });

    card.addEventListener("dblclick", function () { // Task 5
        enableEditing(card, nameHeading, positionParagraph); // Enable editing by double-clicking
    });

    card.appendChild(nameHeading);  // Append heading to card
    card.appendChild(positionParagraph); // Append paragraph to card
    card.appendChild(removeButton); // Append button to card
    document.getElementById("employeeContainer").appendChild(card); // Append card to employee container
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
console.log("********** Bulk Update on Employee Cards **********");
function highlightAllEmployees() {
    const nodeList = document.querySelectorAll(".employee-card"); // Select all employee cards
    const employeeCards = Array.from(nodeList); // Convert NodeList to array
    employeeCards.forEach(card => { // Style update using forEach
        card.classList.add("highlight"); // Adding highlight class
    });
}

// Task 4: Implementing Removal of Employee Cards with Event Bubbling (Part of Task 4 is in Task 2)
console.log("********** Employee Card Removal with Event Bubbling **********");
document.getElementById("employeeContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee Card Has Been Clicked:", event.target); // Logs message if card is clicked
    } else {
        console.log("Click occurred within the employee container but outside a card."); // Logs message if click is within container but outside card
    }
});

// Task 5: Inline Editing of Employee Details (Part of Task 5 is in Task 2)
console.log("********** Inline Editing for Employee Cards **********");
function enableEditing(card, nameElement, positionElement) {
    const nameInput = document.createElement("input"); // Edit name
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;
    
    const positionInput = document.createElement("input"); // Edit position
    positionInput.type = "text";
    positionInput.value = positionElement.textContent;
    
    const saveButton = document.createElement("button"); // Save button
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");
    
    card.innerHTML = ""; // Clear existing elements
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveButton);
    
    saveButton.addEventListener("click", function () {
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;
        
        card.innerHTML = "";
        card.appendChild(nameElement);
        card.appendChild(positionElement);
        card.appendChild(removeButton);
    });
}

// Test Cases
addEmployeeCard("Miguel Diaz", "Business Analyst"); // Adding Employee 1
addEmployeeCard("Robby Keene", "Software Engineer"); // Adding Employee 2
addEmployeeCard("Tory Nichols", "Marketing Specialist"); // Adding Employee 3

setTimeout(highlightAllEmployees, 2000); // Call the function after 2 seconds to apply highlights