import './style.css';
import {loadPage} from './initialPageLoad.js';
import {loadHome} from './loadHome.js';
import {loadMenu} from './loadMenu.js';
import {loadContact} from './loadContact.js';

window.onload = () => {
    loadPage();
    setupListeners();
    loadHome();
}

function setupListeners() {
    document.querySelectorAll("li").forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from other tab
            document.querySelector(".active").removeAttribute("class");
            // Add active to current tab
            tab.setAttribute("class", "active");
            const call = tab.textContent;
            changeTab(call);
        });
    })
}

function changeTab(tabName) {
    document.getElementById("content").innerText = "";
    switch(tabName) {
        case "Home":
            loadHome();
            break;
        case "Menu":
            loadMenu();
            break;
        case "Contact":
            loadContact();
            break;
    }
}   