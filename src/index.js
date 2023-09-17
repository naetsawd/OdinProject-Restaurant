import { createHomeSection } from "./home";
import { createMenuSection } from "./menu";
import { createContactSection } from "./contact";

const navigationLinks = [
    { text: "Menu", action: createMenuSection, page: "menu" },
    { text: "Pixel Bites", action: createHomeSection, page: "home" },
    { text: "Contact", action: createContactSection, page: "contact" },
];

const contentContainer = document.getElementById("content");

function createHeaderLink(text, action, page) {
    const link = document.createElement("p");
    link.textContent = text;
    link.classList.add("navLinks");

    if (text === "Pixel Bites") {
        link.id = "headerLogo";
    }

    link.addEventListener("click", function () {
        localStorage.setItem("currentPage", page);
        contentContainer.innerHTML = "";
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(action());
    });

    return link;
}

function createHeader() {
    const header = document.createElement("header");

    navigationLinks.forEach(({ text, action, page }) => {
        header.appendChild(createHeaderLink(text, action, page));
    });

    return header;
}

function initialize() {
    const currentPage = localStorage.getItem("currentPage");

    if (currentPage === "menu") {
        contentContainer.appendChild(createMenuSection());
    } else if (currentPage === "contact") {
        contentContainer.appendChild(createContactSection());
    } else {
        contentContainer.appendChild(createHomeSection());
    }
}

contentContainer.appendChild(createHeader());
initialize();