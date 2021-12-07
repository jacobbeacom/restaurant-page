function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    menu.appendChild(createMenuItem(0));
    menu.appendChild(createMenuItem(1));
    menu.appendChild(createMenuItem(2));
    menu.appendChild(createMenuItem(3));

    return menu;
}

function createMenuItem(num) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item');

    const icon = document.createElement('img');
    icon.src = 'src/pizzaicon.png';
    icon.alt = "a picture of a pizza in cartoon style";

    const descriptions = ["Pepperoni and Sausage", "Supreme", "Buffalo Chicken", "Margarita"];

    const description = document.createElement('h3');
    description.textContent = descriptions[num];

    menuItem.appendChild(icon);
    menuItem.appendChild(description);

    return menuItem;
}


function loadMenu() {
    const body = document.getElementById('body');
    body.textContent = "";
    body.appendChild(createMenu());
}

export default loadMenu;