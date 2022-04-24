function loadMenu() {
    // Select div#content
    const div = document.getElementById("content");
    // Create and append h2 to div
    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    div.appendChild(h2);
    // Create and append table to div
    const table = document.createElement("table");
    div.appendChild(table);
    // Menu items
    const menuItems = [
        ["Egg Burger", "$3"],
        ["Beef Burger", "$5"],
        ["Cheeseburger", "$6"],
        ["Creamy Mushroom Burger", "$7"],
        ["Spicy Chicken Burger", "$6"],
        ["BBQ Burger", "$9"]
    ]
    // Create row
    menuItems.forEach((item) => {
        const row = table.insertRow(-1);
        item.forEach((line) => {
            const cell = row.insertCell(-1);
            cell.innerText = line;
        });
    });
    // array for each, create row
        // for each element in array
            // create cell, add element string to cell text content, append to row
}



export {loadMenu}