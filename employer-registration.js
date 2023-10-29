function storeEmployerData(form) {
    // Capture form data
    const formData = new FormData(form);

    // Convert form data to an object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Retrieve existing employer data from localStorage (if any)
    let employerData = JSON.parse(localStorage.getItem('employerData')) || [];

    // Add the new employer data to the array
    employerData.push(formDataObject);

    // Store the updated employer data in localStorage
    localStorage.setItem('employerData', JSON.stringify(employerData));
}
