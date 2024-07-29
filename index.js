//Add row in form fields
//Retrieving the values from the input fields using document.getElementById.
function addRow() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const branch = document.getElementById('branch').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const guardianContact = document.getElementById('guardianContact').value;

// Backticks to construct HTML
//${..} placeholder allows to retrieve values
    const newRow = `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${branch}</td>
        <td>${address}</td>
        <td>${contact}</td>
        <td>${guardianContact}</td>
    </tr>`;
    // Used beforeend to put new row at end of the table
    document.getElementById('studentContactTableBody').insertAdjacentHTML('beforeend', newRow);
    // Clear form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('branch').value = '';
    document.getElementById('address').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('guardianContact').value = '';
}