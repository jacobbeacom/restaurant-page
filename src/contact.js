import mapImg from './mapimage.jpg';

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactNumber = document.createElement('p');
    contactNumber.textContent = '123-456-7890'

    const contactAddress = document.createElement('p');
    contactAddress.textContent = "123 Doorknob St. New York, NY";

    const map = document.createElement('img');
    map.src = mapImg;
    map.alt = 'A map depicting the location of this made-up restaurant, actual location is grimaldis pizzeria in New York'

    contact.appendChild(contactNumber);
    contact.appendChild(contactAddress);
    contact.appendChild(map);

    return contact;
}

function loadContact() {
    const body = document.getElementById('body');
    body.textContent = "";
    body.appendChild(createContact());
}

export default loadContact;