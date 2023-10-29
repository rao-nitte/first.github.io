// Retrieve and display employer data
const employerData = JSON.parse(localStorage.getItem('employerData'));
const employerTable = document.getElementById('employer-table');

if (employerData) {
    const tbody = employerTable.querySelector('tbody');

    // Loop through employer data and add rows to the table
    employerData.forEach(function (employer) {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = employer.companyName;
        row.insertCell(1).textContent = employer.skillRequired;
        row.insertCell(2).textContent = employer.location;
        row.insertCell(3).textContent = employer.email;
        row.insertCell(4).textContent = employer.password;
        row.insertCell(5).textContent = employer.contactNumber;
        // Add more cells for additional data if needed
    });
}
