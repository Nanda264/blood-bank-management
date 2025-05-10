// Donor Registration
const donorForm = document.getElementById('donorForm');
donorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const donorName = document.getElementById('donorName').value;
    const donorAge = document.getElementById('donorAge').value;
    const donorBloodType = document.getElementById('donorBloodType').value;
    // Add donor to list
    const donorList = document.getElementById('donorList');
    const donorListItem = document.createElement('li');
    donorListItem.textContent = `Name: ${donorName}, Age: ${donorAge}, Blood Type: ${donorBloodType}`;
    donorList.appendChild(donorListItem);
});

// Recipient Request
const recipientForm = document.getElementById('recipientForm');
recipientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const recipientName = document.getElementById('recipientName').value;
    const recipientBloodType = document.getElementById('recipientBloodType').value;
    // Add recipient to list
    const recipientList = document.getElementById('recipientList');
    const recipientListItem = document.createElement('li');
    recipientListItem.textContent = `Name: ${recipientName}, Blood Type Needed: ${recipientBloodType}`;
    recipientList.appendChild(recipientListItem);
});

// Admin Panel
const adminDonorList = document.getElementById('adminDonorList');
const adminRecipientList = document.getElementById('adminRecipientList');
const bloodStockForm = document.getElementById('bloodStockForm');
bloodStockForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bloodType = document.getElementById('bloodType').value;
    const bloodAmount = document.getElementById('bloodAmount').value;
    // Add blood stock to list
    const bloodStockList = document.getElementById('bloodStockList');
    const bloodStockListItem = document.createElement('li');
    bloodStockListItem.textContent = `Blood Type: ${bloodType}, Amount: ${bloodAmount} units`;
    bloodStockList.appendChild(bloodStockListItem);
});