import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = `Paul's Pizza Palace`;

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('navButton');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        if (EventTarget.classList.contains('active')) return;
        setActive(homeButton);
        loadHome();
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('navButton');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        if (EventTarget.classList.contains('active')) return;
        setActive(menuButton);
        loadMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('navButton');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => {
        if (EventTarget.classList.contains('active')) return;
        setActive(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createBody() {
    const body = document.createElement('main');
    body.classList.add('main');
    body.setAttribute('id', 'body');

    return body;
}

function setActive(button) {
    const navButtons = document.getElementsByClassName('navButton');
    
    navButtons.forEach(button => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('h3');
    copyright.textContent = `©Jacob Beacom 2021`

    footer.appendChild(copyright);

    return footer;
}

function initializeSite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createBody());
    content.appendChild(createFooter());

    loadHome();
}

export default initializeSite;