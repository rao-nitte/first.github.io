// Sample job data categorized by job category
const jobData = {
    it: [
        { company: 'Infosys', position: 'Research Team', location: 'Bangalore' },
        { company: 'Deloitte', position: 'Front End Web Developer', location: 'Hyderabad' },
        { company: 'IFB', position: 'Software Developer', location: 'Delhi' },
        { company: 'Subex', position: 'AI Debugger', location: 'Chennai' },
        { company: 'Amazon', position: 'Cyber Security Personnel', location: 'Mumbai' },
        // Add more IT jobs as needed
    ],
    management: [
        { company: 'Company A', position: 'Manager', location: 'Location A' },
        { company: 'Company B', position: 'Team Lead', location: 'Location B' },
        { company: 'Company C', position: 'Director', location: 'Location C' },
        { company: 'Company D', position: 'Supervisor', location: 'Location D' },
        { company: 'Company E', position: 'Coordinator', location: 'Location E' },
        // Add more Management jobs as needed
    ],
    finance: [
        { company: 'Company F', position: 'Financial Analyst', location: 'Location F' },
        { company: 'Company G', position: 'Accountant', location: 'Location G' },
        { company: 'Company H', position: 'Auditor', location: 'Location H' },
        { company: 'Company I', position: 'Investment Analyst', location: 'Location I' },
        { company: 'Company J', position: 'Financial Planner', location: 'Location J' },
        // Add more Finance jobs as needed
    ],
    freelance: [
        { company: 'Freelance Company 1', position: 'Freelance Developer', location: 'Location 1' },
        { company: 'Freelance Company 2', position: 'Freelance Designer', location: 'Location 2' },
        { company: 'Freelance Company 3', position: 'Freelance Writer', location: 'Location 3' },
        { company: 'Freelance Company 4', position: 'Freelance Marketer', location: 'Location 4' },
        { company: 'Freelance Company 5', position: 'Freelance Translator', location: 'Location 5' },
        // Add more Freelance jobs as needed
    ]
};

// Function to display job listings based on the selected category
function displayJobListings(category) {
    const jobListingsContainer = document.querySelector('.job-listings');
    jobListingsContainer.innerHTML = ''; // Clear existing job listings

    const categoryJobs = jobData[category];

    if (categoryJobs) {
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Location</th>
            </tr>
        `;

        categoryJobs.forEach(job => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${job.company}</td>
                <td>${job.position}</td>
                <td>${job.location}</td>
            `;
            table.appendChild(row);
        });

        jobListingsContainer.appendChild(table);
    }
}

// Event listener for the "Load More" button (assuming you want to load more jobs)
const loadMoreButton = document.getElementById('load-more-button');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function() {
        // Implement loading more jobs if needed
    });
}

// Example: Add an event listener for the form submission
const jobCategoryForm = document.getElementById('job-category-form');
if (jobCategoryForm) {
    jobCategoryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const selectedCategory = document.querySelector('select[name="category"]').value;
        displayJobListings(selectedCategory);
    });
}
