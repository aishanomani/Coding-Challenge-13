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
    removeButton.addEventListener("click", function () { // Event listener to remove card when button is clicked
        card.remove();
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

// Test Cases
addEmployeeCard("Miguel Diaz", "Business Analyst"); // Adding Employee 1
addEmployeeCard("Robby Keene", "Software Engineer"); // Adding Employee 2
addEmployeeCard("Tory Nichols", "Marketing Specialist"); // Adding Employee 3

setTimeout(highlightAllEmployees, 2000); // Call the function after 2 seconds to apply highlights