import { createHomeSection } from "./home";
import { createMenuSection } from "./menu";
import { createContactSection } from "./contact";

const contentContainer = document.getElementById("content");

function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const navigationLinks = [
        { text: "Menu", action: createMenuSection, page: "menu" },
        { text: "Pixel Bites", action: createHomeSection, page: "home" },
        { text: "Contact", action: createContactSection, page: "contact" },
    ];

    navigationLinks.forEach(({ text, action, page }) => {
        const link = document.createElement("p");
        link.textContent = text;
        link.classList.add("navLinks");

        if (text === "Pixel Bites") {
            link.id = "navLogo";
        }

        link.addEventListener("click", function () {
            contentContainer.innerHTML = "";
            contentContainer.appendChild(createHeader());
            contentContainer.appendChild(action());

            localStorage.setItem("currentPage", page);
        });

        nav.appendChild(link);
    });

    header.appendChild(nav);
    return header;
}

const currentPage = localStorage.getItem("currentPage");

contentContainer.appendChild(createHeader());

if (currentPage === "menu") {
    contentContainer.appendChild(createMenuSection());
} else if (currentPage === "contact") {
    contentContainer.appendChild(createContactSection());
} else {
    contentContainer.appendChild(createHomeSection());
}