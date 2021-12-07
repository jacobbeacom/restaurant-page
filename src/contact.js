function createContact() {
    const contact = document.createElement('div');

    const contactNumber = document.createElement('p');
    contactNumber.textContent = '123-456-7890'

    const contactAddress = document.createElement('p');
    contactAddress.textContent = "123 Doorknob St. New York, NY";

    // Add image of restaurant here

    contact.appendChild(contactNumber);
    contact.appendChild(contactAddress);

    return contact;
}

function loadContact() {
    const body = document.getElementById('body');
    body.textContent = "";
    body.appendChild(createContact());
}

export default loadContact;