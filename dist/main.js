/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactSection: () => (/* binding */ createContactSection)
/* harmony export */ });
const contactItems = [
    { name: "Phone", text: "123-456-7890" },
    { name: "Email", text: "pixellbites@email.com" },
    { name: "Address", text: "123 Pixel Lane, Pixel Land, P1X3L" }
];

function createContactSection() {
    const contactPageContainer = document.createElement("span");
    contactPageContainer.id = "pageContainer";

    const contactTitle = createPageTitle("Contact");
    const whiteLine = createWhiteLine();

    contactPageContainer.appendChild(contactTitle);
    contactPageContainer.appendChild(whiteLine);
    contactPageContainer.appendChild(createContactItems());

    return contactPageContainer;
}

function createPageTitle(titleText) {
    const contactTitle = document.createElement("div");
    contactTitle.id = "pageTitle";
    contactTitle.textContent = titleText;
    return contactTitle;
}

function createWhiteLine() {
    const whiteLine = document.createElement("div");
    whiteLine.classList.add("whiteLine");
    return whiteLine;
}

function createContactItems() {
    const contactItemsContainer = document.createElement("div");
    contactItemsContainer.id = "contactItemsContainer";

    contactItems.forEach(({name, text}) => {
        const itemName = document.createElement("p");
        itemName.textContent = (name + ":");
        itemName.classList = ("contactItemName");

        const itemText = document.createElement("p");
        itemText.textContent = (text);
        itemText.classList = ("contactItemText");

        contactItemsContainer.appendChild(itemName);
        contactItemsContainer.appendChild(itemText);
    });

    return contactItemsContainer;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeSection: () => (/* binding */ createHomeSection)
/* harmony export */ });
function createHomeSection() {
    const homePageContainer = document.createElement("span");
    homePageContainer.id = "pageContainer";

    const homeTitle = createPageTitle("Level Up Your Nostalgia!");
    const whiteLine = createWhiteLine();
    const homeDesc = createHomeDescription();

    homePageContainer.appendChild(homeTitle);
    homePageContainer.appendChild(whiteLine);
    homePageContainer.appendChild(homeDesc);

    return homePageContainer;
}

function createPageTitle(titleText) {
    const homeTitle = document.createElement("div");
    homeTitle.id = "homePageTitle";
    homeTitle.textContent = titleText;
    return homeTitle;
}

function createWhiteLine() {
    const whiteLine = document.createElement("div");
    whiteLine.classList.add("whiteLine");
    return whiteLine;
}

function createHomeDescription() {
    const homeDesc = document.createElement("div");
    homeDesc.id = "homeDesc";
    homeDesc.textContent = "Pixel Bites is a nostalgic dining destination that " +
        "transports you back to the golden age of video games. With " +
        "pixelated decor, classic arcade games, and a menu inspired " +
        "by iconic gaming characters, this diner is a haven for gamers " +
        "and retro enthusiasts alike.";
    return homeDesc;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuSection: () => (/* binding */ createMenuSection)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


const categories = [
    "Beverages",
    "Breakfast",
    "Appetizers",
    "Main Courses",
    "Desserts"
];

const categoryElements = [];

function createMenuSection() {
    const menuPageContainer = document.createElement("span");
    menuPageContainer.id = "pageContainer";

    const menuTitle = createPageTitle("Menu");
    const whiteLine = createWhiteLine();
    const menuCategories = createMenuCategories(categories);
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.id = "menuItemsContainer";

    menuPageContainer.appendChild(menuTitle);
    menuPageContainer.appendChild(whiteLine);
    menuPageContainer.appendChild(menuCategories);
    menuPageContainer.appendChild(menuItemsContainer);

    return menuPageContainer;
}

function createPageTitle(titleText) {
    const menuTitle = document.createElement("div");
    menuTitle.id = "pageTitle";
    menuTitle.textContent = titleText;
    return menuTitle;
}

function createWhiteLine() {
    const whiteLine = document.createElement("div");
    whiteLine.classList.add("whiteLine");
    return whiteLine;
}

function createMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemName = createMenuItemElement("p", "menuItemName", item.name);
    const itemPrice = createMenuItemElement("p", "menuItemPrice", item.price);
    const itemDescr = createMenuItemElement("p", "menuItemDescr", item.descr);

    const whiteLine = createWhiteLine();

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(whiteLine);
    menuItem.appendChild(itemDescr);

    return menuItem;
}

function createMenuItemElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = text;
    return element;
}

function createMenuCategories(categories) {
    const menuCategories = document.createElement("div");
    menuCategories.id = "menuCategories";

    categories.forEach(categoryName => {
        const categoryElement = createMenuItemElement("p", "menuItemCategory", categoryName);

        categoryElement.addEventListener("click", function () {
            menuItemsContainer.innerHTML = "";

            categoryElements.forEach(element => {
                element.style.color = "";
            });

            categoryElement.style.color = "lightcoral";
            let currentCategory = categoryName;

            (0,_menuItems__WEBPACK_IMPORTED_MODULE_0__.categoryLists)(currentCategory).forEach(item => {
                const menuItem = createMenuItem(item);
                menuItemsContainer.appendChild(menuItem);
            });
        });

        categoryElements.push(categoryElement);
        menuCategories.appendChild(categoryElement);
    });

    return menuCategories;
}

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryLists: () => (/* binding */ categoryLists)
/* harmony export */ });
function categoryLists(categoryName) {
    const beverageItems = [
        { name: "Mario Mocha", price: "$4.99", descr: "A mocha with a super mushroom twist." },
        { name: "Pixel Punch", price: "$3.49", descr: "A fruity punch with a pixelated surprise." },
        { name: "Zelda's Elixir", price: "$2.99", descr: "A legendary green tea blend." },
        { name: "Sonic Speedster", price: "$3.99", descr: "A blue raspberry slushie with a hint of lime." },
        { name: "1-UP Elixir", price: "$3.49", descr: "A refreshing green tea with a hint of mint." },
        { name: "Final Fantasy Frappe", price: "$4.99", descr: "A blended coffee frappe with a magical touch." }
    ];

    const breakfastItems = [
        { name: "Power-Up Pancakes", price: "$6.99", descr: "Fluffy pancakes with power-up syrup and fruit toppings." },
        { name: "Luigi's Omelette", price: "$7.49", descr: "A hearty omelette filled with mushrooms, peppers, and cheese." },
        { name: "Sonic's Spinach Scramble", price: "$7.99", descr: "Scrambled eggs with fresh spinach, tomatoes, and feta cheese." },
        { name: "Donkey Kong French Toast", price: "$7.49", descr: "French toast topped with bananas, caramel sauce, and whipped cream." },
        { name: "Space Invaders Waffles", price: "$6.99", descr: "Crispy waffles with a choice of berry compote or chocolate chips." },
        { name: "Rossi's Breakfast Wrap", price: "$8.99", descr: "Bacon, scrambled eggs, and seasoned potato hash, wrapped in a tortilla." }
    ];

    const appetizerItems = [
        { name: "Pac-Man Popcorn", price: "$4.29", descr: "Buttered popcorn with a spicy cheddar twist." },
        { name: "Galaga Garlic Bread", price: "$5.99", descr: "Garlic bread served with marinara dipping sauce." },
        { name: "Pong Potato Skins", price: "$6.99", descr: "Potato skins loaded with cheese, bacon, and sour cream." },
        { name: "Tetris Tofu Bites", price: "$5.49", descr: "Crispy tofu bites with a sweet chili dipping sauce." },
        { name: "Ludicolo Guacamole", price: "$7.49", descr: "Fresh guacamole served with tortilla chips and salsa." },
        { name: "TMNT Pizza Bites", price: "$6.99", descr: "Mini pizza bites bursting with cheesy goodness and pepperoni." }
    ];

    const mainCourseItems = [
        { name: "Master Sword Steak", price: "$14.99", descr: "A juicy steak with garlic butter and seasoned vegetables." },
        { name: "Mega Burger", price: "$10.99", descr: "A giant burger stacked with toppings." },
        { name: "Street Fighter Tacos", price: "$8.99", descr: "Tacos with a punch of flavor, choose your fighter." },
        { name: "Legend of Zelda Lasagna", price: "$12.99", descr: "Layers of pasta, cheese, and savory meat sauce." },
        { name: "Metroid Meatball Sub", price: "$9.99", descr: "A sub sandwich with meatballs, marinara, and melted cheese." },
        { name: "Donkey Kong Fried Chicken", price: "$11.99", descr: "Crispy fried chicken served with coleslaw and biscuits." }
    ];

    const dessertItems = [
        { name: "Pac-Man Pie", price: "$5.49", descr: "A juicy cherry pie with a nostalgic design." },
        { name: "Space Invaders Sundae", price: "$6.99", descr: "Ice cream of choice     with alien-themed toppings." },
        { name: "Cheesecake Galaxy", price: "$5.99", descr: "Creamy cheesecake with a galaxy-inspired swirl." },
        { name: "Super Mario Tiramisu", price: "$6.49", descr: "A classic Italian tiramisu with a Mario twist." },
        { name: "Pikachu's Parfait", price: "$4.99", descr: "Layers of flavored yogurt, granola, and fresh berries." },
        { name: "Tetris Treats", price: "9.99", descr: "Pastry block layers with sweet surprises, topped with raspberry sauce."}
    ];

    switch (categoryName.toLowerCase()) {
        case "beverages":
            return beverageItems;
        case "breakfast":
            return breakfastItems;
        case "appetizers":
            return appetizerItems;
        case "main courses":
            return mainCourseItems;
        case "desserts":
            return dessertItems;
        default:
            return [];
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const navigationLinks = [
    { text: "Menu", action: _menu__WEBPACK_IMPORTED_MODULE_1__.createMenuSection, page: "menu" },
    { text: "Pixel Bites", action: _home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection, page: "home" },
    { text: "Contact", action: _contact__WEBPACK_IMPORTED_MODULE_2__.createContactSection, page: "contact" },
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
        contentContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuSection)());
    } else if (currentPage === "contact") {
        contentContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactSection)());
    } else {
        contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection)());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDQTtBQUNNOztBQUVqRDtBQUNBLE1BQU0sc0JBQXNCLG9EQUFpQixnQkFBZ0I7QUFDN0QsTUFBTSw2QkFBNkIsb0RBQWlCLGdCQUFnQjtBQUNwRSxNQUFNLHlCQUF5QiwwREFBb0IsbUJBQW1CO0FBQ3RFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsd0RBQWlCO0FBQ3RELE1BQU07QUFDTixxQ0FBcUMsOERBQW9CO0FBQ3pELE1BQU07QUFDTixxQ0FBcUMsd0RBQWlCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0SXRlbXMgPSBbXG4gICAgeyBuYW1lOiBcIlBob25lXCIsIHRleHQ6IFwiMTIzLTQ1Ni03ODkwXCIgfSxcbiAgICB7IG5hbWU6IFwiRW1haWxcIiwgdGV4dDogXCJwaXhlbGxiaXRlc0BlbWFpbC5jb21cIiB9LFxuICAgIHsgbmFtZTogXCJBZGRyZXNzXCIsIHRleHQ6IFwiMTIzIFBpeGVsIExhbmUsIFBpeGVsIExhbmQsIFAxWDNMXCIgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuaWQgPSBcInBhZ2VDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShcIkNvbnRhY3RcIik7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG5cbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEl0ZW1zKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0VGl0bGUuaWQgPSBcInBhZ2VUaXRsZVwiO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gY29udGFjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SXRlbXMoKSB7XG4gICAgY29uc3QgY29udGFjdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SXRlbXNDb250YWluZXIuaWQgPSBcImNvbnRhY3RJdGVtc0NvbnRhaW5lclwiO1xuXG4gICAgY29udGFjdEl0ZW1zLmZvckVhY2goKHtuYW1lLCB0ZXh0fSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IChuYW1lICsgXCI6XCIpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QgPSAoXCJjb250YWN0SXRlbU5hbWVcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSAodGV4dCk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTGlzdCA9IChcImNvbnRhY3RJdGVtVGV4dFwiKTtcblxuICAgICAgICBjb250YWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBjb250YWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RJdGVtc0NvbnRhaW5lcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBob21lUGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiTGV2ZWwgVXAgWW91ciBOb3N0YWxnaWEhXCIpO1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuICAgIGNvbnN0IGhvbWVEZXNjID0gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCk7XG5cbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZURlc2MpO1xuXG4gICAgcmV0dXJuIGhvbWVQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lVGl0bGUuaWQgPSBcImhvbWVQYWdlVGl0bGVcIjtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gICAgcmV0dXJuIGhvbWVUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVMaW5lKCkge1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2hpdGVMaW5lLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZUxpbmVcIik7XG4gICAgcmV0dXJuIHdoaXRlTGluZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IGhvbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lRGVzYy5pZCA9IFwiaG9tZURlc2NcIjtcbiAgICBob21lRGVzYy50ZXh0Q29udGVudCA9IFwiUGl4ZWwgQml0ZXMgaXMgYSBub3N0YWxnaWMgZGluaW5nIGRlc3RpbmF0aW9uIHRoYXQgXCIgK1xuICAgICAgICBcInRyYW5zcG9ydHMgeW91IGJhY2sgdG8gdGhlIGdvbGRlbiBhZ2Ugb2YgdmlkZW8gZ2FtZXMuIFdpdGggXCIgK1xuICAgICAgICBcInBpeGVsYXRlZCBkZWNvciwgY2xhc3NpYyBhcmNhZGUgZ2FtZXMsIGFuZCBhIG1lbnUgaW5zcGlyZWQgXCIgK1xuICAgICAgICBcImJ5IGljb25pYyBnYW1pbmcgY2hhcmFjdGVycywgdGhpcyBkaW5lciBpcyBhIGhhdmVuIGZvciBnYW1lcnMgXCIgK1xuICAgICAgICBcImFuZCByZXRybyBlbnRodXNpYXN0cyBhbGlrZS5cIjtcbiAgICByZXR1cm4gaG9tZURlc2M7XG59IiwiaW1wb3J0IHsgY2F0ZWdvcnlMaXN0cyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwiQmV2ZXJhZ2VzXCIsXG4gICAgXCJCcmVha2Zhc3RcIixcbiAgICBcIkFwcGV0aXplcnNcIixcbiAgICBcIk1haW4gQ291cnNlc1wiLFxuICAgIFwiRGVzc2VydHNcIlxuXTtcblxuY29uc3QgY2F0ZWdvcnlFbGVtZW50cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiTWVudVwiKTtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcbiAgICBjb25zdCBtZW51Q2F0ZWdvcmllcyA9IGNyZWF0ZU1lbnVDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zQ29udGFpbmVyLmlkID0gXCJtZW51SXRlbXNDb250YWluZXJcIjtcblxuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcmllcyk7XG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBtZW51UGFnZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVRpdGxlLmlkID0gXCJwYWdlVGl0bGVcIjtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gICAgcmV0dXJuIG1lbnVUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVMaW5lKCkge1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2hpdGVMaW5lLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZUxpbmVcIik7XG4gICAgcmV0dXJuIHdoaXRlTGluZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbU5hbWVcIiwgaXRlbS5uYW1lKTtcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1QcmljZVwiLCBpdGVtLnByaWNlKTtcbiAgICBjb25zdCBpdGVtRGVzY3IgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1EZXNjclwiLCBpdGVtLmRlc2NyKTtcblxuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3IpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yaWVzLmlkID0gXCJtZW51Q2F0ZWdvcmllc1wiO1xuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbUNhdGVnb3J5XCIsIGNhdGVnb3J5TmFtZSk7XG5cbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgY2F0ZWdvcnlFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5RWxlbWVudC5zdHlsZS5jb2xvciA9IFwibGlnaHRjb3JhbFwiO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5TmFtZTtcblxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0cyhjdXJyZW50Q2F0ZWdvcnkpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhdGVnb3J5RWxlbWVudHMucHVzaChjYXRlZ29yeUVsZW1lbnQpO1xuICAgICAgICBtZW51Q2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDYXRlZ29yaWVzO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yeUxpc3RzKGNhdGVnb3J5TmFtZSkge1xuICAgIGNvbnN0IGJldmVyYWdlSXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJNYXJpbyBNb2NoYVwiLCBwcmljZTogXCIkNC45OVwiLCBkZXNjcjogXCJBIG1vY2hhIHdpdGggYSBzdXBlciBtdXNocm9vbSB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUGl4ZWwgUHVuY2hcIiwgcHJpY2U6IFwiJDMuNDlcIiwgZGVzY3I6IFwiQSBmcnVpdHkgcHVuY2ggd2l0aCBhIHBpeGVsYXRlZCBzdXJwcmlzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiWmVsZGEncyBFbGl4aXJcIiwgcHJpY2U6IFwiJDIuOTlcIiwgZGVzY3I6IFwiQSBsZWdlbmRhcnkgZ3JlZW4gdGVhIGJsZW5kLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTb25pYyBTcGVlZHN0ZXJcIiwgcHJpY2U6IFwiJDMuOTlcIiwgZGVzY3I6IFwiQSBibHVlIHJhc3BiZXJyeSBzbHVzaGllIHdpdGggYSBoaW50IG9mIGxpbWUuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIjEtVVAgRWxpeGlyXCIsIHByaWNlOiBcIiQzLjQ5XCIsIGRlc2NyOiBcIkEgcmVmcmVzaGluZyBncmVlbiB0ZWEgd2l0aCBhIGhpbnQgb2YgbWludC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRmluYWwgRmFudGFzeSBGcmFwcGVcIiwgcHJpY2U6IFwiJDQuOTlcIiwgZGVzY3I6IFwiQSBibGVuZGVkIGNvZmZlZSBmcmFwcGUgd2l0aCBhIG1hZ2ljYWwgdG91Y2guXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBicmVha2Zhc3RJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBvd2VyLVVwIFBhbmNha2VzXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIkZsdWZmeSBwYW5jYWtlcyB3aXRoIHBvd2VyLXVwIHN5cnVwIGFuZCBmcnVpdCB0b3BwaW5ncy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTHVpZ2kncyBPbWVsZXR0ZVwiLCBwcmljZTogXCIkNy40OVwiLCBkZXNjcjogXCJBIGhlYXJ0eSBvbWVsZXR0ZSBmaWxsZWQgd2l0aCBtdXNocm9vbXMsIHBlcHBlcnMsIGFuZCBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNvbmljJ3MgU3BpbmFjaCBTY3JhbWJsZVwiLCBwcmljZTogXCIkNy45OVwiLCBkZXNjcjogXCJTY3JhbWJsZWQgZWdncyB3aXRoIGZyZXNoIHNwaW5hY2gsIHRvbWF0b2VzLCBhbmQgZmV0YSBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkRvbmtleSBLb25nIEZyZW5jaCBUb2FzdFwiLCBwcmljZTogXCIkNy40OVwiLCBkZXNjcjogXCJGcmVuY2ggdG9hc3QgdG9wcGVkIHdpdGggYmFuYW5hcywgY2FyYW1lbCBzYXVjZSwgYW5kIHdoaXBwZWQgY3JlYW0uXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNwYWNlIEludmFkZXJzIFdhZmZsZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiQ3Jpc3B5IHdhZmZsZXMgd2l0aCBhIGNob2ljZSBvZiBiZXJyeSBjb21wb3RlIG9yIGNob2NvbGF0ZSBjaGlwcy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUm9zc2kncyBCcmVha2Zhc3QgV3JhcFwiLCBwcmljZTogXCIkOC45OVwiLCBkZXNjcjogXCJCYWNvbiwgc2NyYW1ibGVkIGVnZ3MsIGFuZCBzZWFzb25lZCBwb3RhdG8gaGFzaCwgd3JhcHBlZCBpbiBhIHRvcnRpbGxhLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgYXBwZXRpemVySXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJQYWMtTWFuIFBvcGNvcm5cIiwgcHJpY2U6IFwiJDQuMjlcIiwgZGVzY3I6IFwiQnV0dGVyZWQgcG9wY29ybiB3aXRoIGEgc3BpY3kgY2hlZGRhciB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiR2FsYWdhIEdhcmxpYyBCcmVhZFwiLCBwcmljZTogXCIkNS45OVwiLCBkZXNjcjogXCJHYXJsaWMgYnJlYWQgc2VydmVkIHdpdGggbWFyaW5hcmEgZGlwcGluZyBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUG9uZyBQb3RhdG8gU2tpbnNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiUG90YXRvIHNraW5zIGxvYWRlZCB3aXRoIGNoZWVzZSwgYmFjb24sIGFuZCBzb3VyIGNyZWFtLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUZXRyaXMgVG9mdSBCaXRlc1wiLCBwcmljZTogXCIkNS40OVwiLCBkZXNjcjogXCJDcmlzcHkgdG9mdSBiaXRlcyB3aXRoIGEgc3dlZXQgY2hpbGkgZGlwcGluZyBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTHVkaWNvbG8gR3VhY2Ftb2xlXCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkZyZXNoIGd1YWNhbW9sZSBzZXJ2ZWQgd2l0aCB0b3J0aWxsYSBjaGlwcyBhbmQgc2Fsc2EuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRNTlQgUGl6emEgQml0ZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiTWluaSBwaXp6YSBiaXRlcyBidXJzdGluZyB3aXRoIGNoZWVzeSBnb29kbmVzcyBhbmQgcGVwcGVyb25pLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbWFpbkNvdXJzZUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiTWFzdGVyIFN3b3JkIFN0ZWFrXCIsIHByaWNlOiBcIiQxNC45OVwiLCBkZXNjcjogXCJBIGp1aWN5IHN0ZWFrIHdpdGggZ2FybGljIGJ1dHRlciBhbmQgc2Vhc29uZWQgdmVnZXRhYmxlcy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTWVnYSBCdXJnZXJcIiwgcHJpY2U6IFwiJDEwLjk5XCIsIGRlc2NyOiBcIkEgZ2lhbnQgYnVyZ2VyIHN0YWNrZWQgd2l0aCB0b3BwaW5ncy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3RyZWV0IEZpZ2h0ZXIgVGFjb3NcIiwgcHJpY2U6IFwiJDguOTlcIiwgZGVzY3I6IFwiVGFjb3Mgd2l0aCBhIHB1bmNoIG9mIGZsYXZvciwgY2hvb3NlIHlvdXIgZmlnaHRlci5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTGVnZW5kIG9mIFplbGRhIExhc2FnbmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIsIGRlc2NyOiBcIkxheWVycyBvZiBwYXN0YSwgY2hlZXNlLCBhbmQgc2F2b3J5IG1lYXQgc2F1Y2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1ldHJvaWQgTWVhdGJhbGwgU3ViXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIGRlc2NyOiBcIkEgc3ViIHNhbmR3aWNoIHdpdGggbWVhdGJhbGxzLCBtYXJpbmFyYSwgYW5kIG1lbHRlZCBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkRvbmtleSBLb25nIEZyaWVkIENoaWNrZW5cIiwgcHJpY2U6IFwiJDExLjk5XCIsIGRlc2NyOiBcIkNyaXNweSBmcmllZCBjaGlja2VuIHNlcnZlZCB3aXRoIGNvbGVzbGF3IGFuZCBiaXNjdWl0cy5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGRlc3NlcnRJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBhYy1NYW4gUGllXCIsIHByaWNlOiBcIiQ1LjQ5XCIsIGRlc2NyOiBcIkEganVpY3kgY2hlcnJ5IHBpZSB3aXRoIGEgbm9zdGFsZ2ljIGRlc2lnbi5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3BhY2UgSW52YWRlcnMgU3VuZGFlXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIkljZSBjcmVhbSBvZiBjaG9pY2UgICAgIHdpdGggYWxpZW4tdGhlbWVkIHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGVlc2VjYWtlIEdhbGF4eVwiLCBwcmljZTogXCIkNS45OVwiLCBkZXNjcjogXCJDcmVhbXkgY2hlZXNlY2FrZSB3aXRoIGEgZ2FsYXh5LWluc3BpcmVkIHN3aXJsLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTdXBlciBNYXJpbyBUaXJhbWlzdVwiLCBwcmljZTogXCIkNi40OVwiLCBkZXNjcjogXCJBIGNsYXNzaWMgSXRhbGlhbiB0aXJhbWlzdSB3aXRoIGEgTWFyaW8gdHdpc3QuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlBpa2FjaHUncyBQYXJmYWl0XCIsIHByaWNlOiBcIiQ0Ljk5XCIsIGRlc2NyOiBcIkxheWVycyBvZiBmbGF2b3JlZCB5b2d1cnQsIGdyYW5vbGEsIGFuZCBmcmVzaCBiZXJyaWVzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUZXRyaXMgVHJlYXRzXCIsIHByaWNlOiBcIjkuOTlcIiwgZGVzY3I6IFwiUGFzdHJ5IGJsb2NrIGxheWVycyB3aXRoIHN3ZWV0IHN1cnByaXNlcywgdG9wcGVkIHdpdGggcmFzcGJlcnJ5IHNhdWNlLlwifVxuICAgIF07XG5cbiAgICBzd2l0Y2ggKGNhdGVnb3J5TmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJiZXZlcmFnZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBiZXZlcmFnZUl0ZW1zO1xuICAgICAgICBjYXNlIFwiYnJlYWtmYXN0XCI6XG4gICAgICAgICAgICByZXR1cm4gYnJlYWtmYXN0SXRlbXM7XG4gICAgICAgIGNhc2UgXCJhcHBldGl6ZXJzXCI6XG4gICAgICAgICAgICByZXR1cm4gYXBwZXRpemVySXRlbXM7XG4gICAgICAgIGNhc2UgXCJtYWluIGNvdXJzZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBtYWluQ291cnNlSXRlbXM7XG4gICAgICAgIGNhc2UgXCJkZXNzZXJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnRJdGVtcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVTZWN0aW9uIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFNlY3Rpb24gfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IG5hdmlnYXRpb25MaW5rcyA9IFtcbiAgICB7IHRleHQ6IFwiTWVudVwiLCBhY3Rpb246IGNyZWF0ZU1lbnVTZWN0aW9uLCBwYWdlOiBcIm1lbnVcIiB9LFxuICAgIHsgdGV4dDogXCJQaXhlbCBCaXRlc1wiLCBhY3Rpb246IGNyZWF0ZUhvbWVTZWN0aW9uLCBwYWdlOiBcImhvbWVcIiB9LFxuICAgIHsgdGV4dDogXCJDb250YWN0XCIsIGFjdGlvbjogY3JlYXRlQ29udGFjdFNlY3Rpb24sIHBhZ2U6IFwiY29udGFjdFwiIH0sXG5dO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJMaW5rKHRleHQsIGFjdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXZMaW5rc1wiKTtcblxuICAgIGlmICh0ZXh0ID09PSBcIlBpeGVsIEJpdGVzXCIpIHtcbiAgICAgICAgbGluay5pZCA9IFwiaGVhZGVyTG9nb1wiO1xuICAgIH1cblxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50UGFnZVwiLCBwYWdlKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb24oKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgbmF2aWdhdGlvbkxpbmtzLmZvckVhY2goKHsgdGV4dCwgYWN0aW9uLCBwYWdlIH0pID0+IHtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlckxpbmsodGV4dCwgYWN0aW9uLCBwYWdlKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGFnZVwiKTtcblxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcImNvbnRhY3RcIikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVNlY3Rpb24oKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJDb250YWluZXIuaWQgPSBcImZvb3RlckNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuaWQgPSBcImZvb3RlclRleHRcIjtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCJEZXNpZ25lZCAmIEJ1aWx0IGJ5IERlY2hzaXQgTmFldHNhd2FuXCI7XG5cbiAgICAvLyBDcmVhdGUgYW4gYW5jaG9yIGVsZW1lbnQgZm9yIHRoZSBsaW5rXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVJlc3RhdXJhbnRcIjsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgVVJMXG4gICAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiOyAvLyBPcGVuIGxpbmsgaW4gYSBuZXcgdGFiL3dpbmRvd1xuXG4gICAgLy8gQ3JlYXRlIGFuIGljb24gZWxlbWVudCAoZS5nLiwgYSBmb250LWF3ZXNvbWUgaWNvbilcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmlkID0gKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChcIi9zcmMvaW1hZ2VzL2dpdGh1Yi5zdmdcIilcblxuICAgIC8vIEFwcGVuZCB0aGUgaWNvbiB0byB0aGUgYW5jaG9yIGVsZW1lbnRcbiAgICBsaW5rLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBmb290ZXIgdGV4dCBhbmQgdGhlIGxpbmsgdG8gdGhlIGZvb3RlclxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufVxuXG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmluaXRpYWxpemUoKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9