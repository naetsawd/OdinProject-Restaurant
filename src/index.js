import { createHomeSection } from "./home";

const grid = document.getElementById("grid");

function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const menuLink = document.createElement("p");
    menuLink.textContent = "Menu";

    const logo = document.createElement("p");
    logo.textContent = "Pixel Bites";
    logo.id = "navLogo";

    const contactLink = document.createElement("p");
    contactLink.textContent = "Contact";

    nav.appendChild(menuLink);
    nav.appendChild(logo);
    nav.appendChild(contactLink);

    header.appendChild(nav);

    return header;
}

grid.appendChild(createHeader());

grid.appendChild(createHomeSection());