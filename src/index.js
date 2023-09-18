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

    if (currentPage === "menu") {
        contentContainer.appendChild(createMenuSection());
    } else if (currentPage === "contact") {
        contentContainer.appendChild(createContactSection());
    } else {
        contentContainer.appendChild(createHomeSection());
    }
}

function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";

    const footerText = document.createElement("p");
    footerText.id = "footerText";
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    // Create an anchor element for the link
    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-Restaurant"; // Replace with the actual URL
    link.target = "_blank"; // Open link in a new tab/window

    // Create an icon element (e.g., a font-awesome icon)
    const icon = document.createElement("img");
    icon.id = ("githubIcon");
    icon.src = ("/src/images/github.svg")

    // Append the icon to the anchor element
    link.appendChild(icon);

    // Append the footer text and the link to the footer
    footerContainer.appendChild(link);
    footerContainer.appendChild(footerText);

    return footerContainer;
}

contentContainer.appendChild(createHeader());
initialize();
contentContainer.appendChild(createFooter());
