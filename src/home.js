

function createHome() {
    const home = document.createElement('div');

    const homeImage = document.createElement('img');
    homeImage.setAttribute('src', '/src/pizzaguy.jpg');
    homeImage.setAttribute('alt', `An obese asian gentleman sips a dark beverage from a glass
    mug. A deepdish pizza, a bowl of popcorn, and a plate of donuts rest on his lap. The man is 
    seated on a red leather chair.`);

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