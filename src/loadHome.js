function loadHome() {
    // Select div#content
    const div = document.getElementById("content");
    // Create and append h1 to div
    const h1 = document.createElement("h1");
    h1.textContent = "Odin Restaurant";
    div.appendChild(h1);
    // Create and append p to div
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque qui consequuntur ullam, architecto consectetur illum totam tenetur corrupti incidunt fugit, ut quia id repellat at vitae error praesentium est accusantium!";
    div.appendChild(p);
}

export {loadHome}