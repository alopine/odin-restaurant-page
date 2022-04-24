function loadContact() {
    // Select div#content
    const div = document.getElementById("content");
    // Create and append h2 to div
    const h2 = document.createElement("h2");
    h2.textContent = "Contact";
    div.appendChild(h2);
    // Contact info entries
    const contactInfo = [
        ["Location", "123 Placeholder St", "San Francisco, CA"],
        ["Hours", "Mon - Thu: 8am - 8pm", "Fri - Sun: 8am - 11pm"],
        ["Contact Us", "(123) 456-7890", "odinburgers@notarealemail.com"]
    ];
    // Create sections for each contact info entry
    contactInfo.forEach((entry) => {
        const h3 = document.createElement("h3");
        h3.textContent = entry[0];
        div.appendChild(h3);
        for (let i = 1; i < 3; i++) {
            const p = document.createElement("p");
            p.textContent = entry[i];
            div.appendChild(p);
        }
    });
}



export {loadContact}