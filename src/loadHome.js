import Home from './home.png';

function loadHome() {
    // Select div#content
    const div = document.getElementById("content");
    // Create and append h2 to div
    const h2 = document.createElement("h2");
    h2.textContent = "About";
    div.appendChild(h2);
    // Create and append img to div
    const mainImg = new Image();
    mainImg.src = Home;
    div.appendChild(mainImg);
    // Create and append p to div
    const p = document.createElement("p");
    p.textContent = "The tastiest burgers around, since 793 AD.";
    div.appendChild(p);
}

export {loadHome}