import pizzaGuy from './pizzaguy.jpg';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeImage = document.createElement('img');
    homeImage.src = pizzaGuy;
    homeImage.alt = `Three men standing in a commercial kitchen with their arms around each others shoulders.
    The man in the middle is holding a large margharita pizza on a white dish.`

    const homeBio = document.createElement('p');
    homeBio.textContent = `Paul opened his doors to the public in 1942 after rave reviews from family and friends
    regarding his homemade pizza. Now, after nearly 80 years, Paul's family runs the
    place serving up high quality pizzas at an unbeatable price.`;

    home.appendChild(homeImage);
    home.appendChild(homeBio);

    return home;
}

function loadHome() {
    const body = document.getElementById('body');
    body.textContent = "";
    body.appendChild(createHome());
}

export default loadHome;