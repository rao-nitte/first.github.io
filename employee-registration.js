// Sample data from a registration form (replace with actual form data)
const newEmployee = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'hashedPassword', // You should hash the password for security
    skills: ['JavaScript', 'HTML', 'CSS'],
    // Add other employee details as needed
};

// Add the new employee to the database
database.employees.push(newEmployee);

// Save the updated database back to the JSON file
fs.writeFileSync('database.json', JSON.stringify(database, null, 2), 'utf8');

