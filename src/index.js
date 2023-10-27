import './style.css';
import githubLogo from './images/githubLogo.svg';
import { createHomeSection } from "./home";
import { createMenuSection } from "./menu";
import { createContactSection } from "./contact";

const navigationLinks = [
    { text: "Menu", action: createMenuSection, page: "menu" },
    { text: "Pixel Bites", action: createHomeSection, page: "home" },
    { text: "Contact", action: createContactSection, page: "contact" },
];

const contentContainer = document.getElementById("content");

initialize();

function createHeaderLink(text, action, page) {
    const currentPage = localStorage.getItem("currentPage");
    const link = document.createElement("p");
    link.textContent = text;
    link.classList.add("navLinks");

    if (text === "Pixel Bites") {
        link.id = "headerLogo";
    }

    if (currentPage === page) {
        link.style.color = "lightcoral";
    };

    link.addEventListener("click", function () {
        localStorage.setItem("currentPage", page);

        contentContainer.innerHTML = "";
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(action());
        contentContainer.appendChild(createFooter());
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

    if (!currentPage) localStorage.setItem("currentPage", "home");

    contentContainer.appendChild(createHeader());

    if (currentPage === "menu") {
        contentContainer.appendChild(createMenuSection());
    } else if (currentPage === "contact") {
        contentContainer.appendChild(createContactSection());
    } else {
        contentContainer.appendChild(createHomeSection());
    }

    contentContainer.appendChild(createFooter());
}

function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";

    const footerText = document.createElement("p");
    footerText.id = "footerText";
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-Restaurant";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.id = ("githubIcon");
    icon.src = (githubLogo);

    link.appendChild(icon);

    footerContainer.appendChild(link);
    footerContainer.appendChild(footerText);

    return footerContainer;
}