var saveData = () => {
    // Get input values
    var name = document.getElementById('nameInput').value;
    var age = document.getElementById('ageInput').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById('courseSelect').value;
    var email = document.getElementById('emailInput').value;

    // Create new row
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-button" onclick="deleteData(event)">Delete</button></td>
    `;

    // Append new row to table
    var reportTable = document.querySelector("#report");
    reportTable.appendChild(newRow);
};

var deleteData = (event) => {
    event.target.parentNode.parentNode.remove();
};
