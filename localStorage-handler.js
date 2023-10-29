function storeFormData(form) {
    // Capture form data
    const formData = new FormData(form);

    // Convert form data to an object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Store data in localStorage (you can use a unique key)
    localStorage.setItem('employeeData', JSON.stringify(formDataObject));
}
