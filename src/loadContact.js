function loadContact() {
    // Select div#content
    const div = document.getElementById("content");
    // Create and append h2 to div
    const h2 = document.createElement("h2");
    h2.textContent = "Contact";
    div.appendChild(h2);
    // Create and append p to div
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque qui consequuntur ullam, architecto consectetur illum totam tenetur corrupti incidunt fugit, ut quia id repellat at vitae error praesentium est accusantium!";
    div.appendChild(p);
}

export {loadContact}