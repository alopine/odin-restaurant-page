function loadPage(){
    // Create and append header to body
    const header = document.createElement("header");
    document.body.appendChild(header);
    // Create and append ul to header
    const ul = document.createElement("ul");
    header.appendChild(ul);
    // Create and append 3 lis with home, menu, and contact to ul
    const tabs = ["Home", "Menu", "Contact"];
    for (let tab in tabs) {
        const li = document.createElement("li");
        li.textContent = tabs[tab];
        ul.appendChild(li);
    }
}

export {loadPage}