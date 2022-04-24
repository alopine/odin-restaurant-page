import './style.css';
import {loadPage} from './initialPageLoad.js';
import {loadHome} from './loadHome.js';
import {loadMenu} from './loadMenu.js';
import {loadContact} from './loadContact.js';

window.onload = () => {
    loadPage();
    createDiv();
    setupListeners();
    loadHome();
}

function createDiv() {
    const div = document.createElement("div");
    div.id = "content";
    document.body.appendChild(div);
}


function setupListeners() {
    document.querySelectorAll("li").forEach((tab) => {
        tab.addEventListener("click", () => {
            const call = tab.textContent;
            changeTab(call);
        });
    })
}


function changeTab(tabName) {
    document.body.removeChild(document.body.lastChild);
    createDiv();
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