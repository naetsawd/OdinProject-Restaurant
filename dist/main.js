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

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-Restaurant"; // Replace with the actual URL
    link.target = "_blank"; // Open link in a new tab/window

    const icon = document.createElement("img");
    icon.id = ("githubIcon");
    icon.src = ("/dist/images/githubLogo.svg")

    link.appendChild(icon);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDQTtBQUNNOztBQUVqRDtBQUNBLE1BQU0sc0JBQXNCLG9EQUFpQixnQkFBZ0I7QUFDN0QsTUFBTSw2QkFBNkIsb0RBQWlCLGdCQUFnQjtBQUNwRSxNQUFNLHlCQUF5QiwwREFBb0IsbUJBQW1CO0FBQ3RFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFpQjtBQUN0RCxNQUFNO0FBQ04scUNBQXFDLDhEQUFvQjtBQUN6RCxNQUFNO0FBQ04scUNBQXFDLHdEQUFpQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7QUFDdEUsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RJdGVtcyA9IFtcbiAgICB7IG5hbWU6IFwiUGhvbmVcIiwgdGV4dDogXCIxMjMtNDU2LTc4OTBcIiB9LFxuICAgIHsgbmFtZTogXCJFbWFpbFwiLCB0ZXh0OiBcInBpeGVsbGJpdGVzQGVtYWlsLmNvbVwiIH0sXG4gICAgeyBuYW1lOiBcIkFkZHJlc3NcIiwgdGV4dDogXCIxMjMgUGl4ZWwgTGFuZSwgUGl4ZWwgTGFuZCwgUDFYM0xcIiB9XG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiQ29udGFjdFwiKTtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcblxuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SXRlbXMoKSk7XG5cbiAgICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSh0aXRsZVRleHQpIHtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUaXRsZS5pZCA9IFwicGFnZVRpdGxlXCI7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgIHJldHVybiBjb250YWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXRlTGluZSgpIHtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdoaXRlTGluZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVMaW5lXCIpO1xuICAgIHJldHVybiB3aGl0ZUxpbmU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJdGVtcygpIHtcbiAgICBjb25zdCBjb250YWN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5pZCA9IFwiY29udGFjdEl0ZW1zQ29udGFpbmVyXCI7XG5cbiAgICBjb250YWN0SXRlbXMuZm9yRWFjaCgoe25hbWUsIHRleHR9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gKG5hbWUgKyBcIjpcIik7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdCA9IChcImNvbnRhY3RJdGVtTmFtZVwiKTtcblxuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtVGV4dC50ZXh0Q29udGVudCA9ICh0ZXh0KTtcbiAgICAgICAgaXRlbVRleHQuY2xhc3NMaXN0ID0gKFwiY29udGFjdEl0ZW1UZXh0XCIpO1xuXG4gICAgICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGFjdEl0ZW1zQ29udGFpbmVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lU2VjdGlvbigpIHtcbiAgICBjb25zdCBob21lUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhvbWVQYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBob21lVGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoXCJMZXZlbCBVcCBZb3VyIE5vc3RhbGdpYSFcIik7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG4gICAgY29uc3QgaG9tZURlc2MgPSBjcmVhdGVIb21lRGVzY3JpcHRpb24oKTtcblxuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRGVzYyk7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSh0aXRsZVRleHQpIHtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVUaXRsZS5pZCA9IFwiaG9tZVBhZ2VUaXRsZVwiO1xuICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gaG9tZVRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgaG9tZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVEZXNjLmlkID0gXCJob21lRGVzY1wiO1xuICAgIGhvbWVEZXNjLnRleHRDb250ZW50ID0gXCJQaXhlbCBCaXRlcyBpcyBhIG5vc3RhbGdpYyBkaW5pbmcgZGVzdGluYXRpb24gdGhhdCBcIiArXG4gICAgICAgIFwidHJhbnNwb3J0cyB5b3UgYmFjayB0byB0aGUgZ29sZGVuIGFnZSBvZiB2aWRlbyBnYW1lcy4gV2l0aCBcIiArXG4gICAgICAgIFwicGl4ZWxhdGVkIGRlY29yLCBjbGFzc2ljIGFyY2FkZSBnYW1lcywgYW5kIGEgbWVudSBpbnNwaXJlZCBcIiArXG4gICAgICAgIFwiYnkgaWNvbmljIGdhbWluZyBjaGFyYWN0ZXJzLCB0aGlzIGRpbmVyIGlzIGEgaGF2ZW4gZm9yIGdhbWVycyBcIiArXG4gICAgICAgIFwiYW5kIHJldHJvIGVudGh1c2lhc3RzIGFsaWtlLlwiO1xuICAgIHJldHVybiBob21lRGVzYztcbn0iLCJpbXBvcnQgeyBjYXRlZ29yeUxpc3RzIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgXCJCZXZlcmFnZXNcIixcbiAgICBcIkJyZWFrZmFzdFwiLFxuICAgIFwiQXBwZXRpemVyc1wiLFxuICAgIFwiTWFpbiBDb3Vyc2VzXCIsXG4gICAgXCJEZXNzZXJ0c1wiXG5dO1xuXG5jb25zdCBjYXRlZ29yeUVsZW1lbnRzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgICBjb25zdCBtZW51UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoXCJNZW51XCIpO1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuICAgIGNvbnN0IG1lbnVDYXRlZ29yaWVzID0gY3JlYXRlTWVudUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXNDb250YWluZXIuaWQgPSBcIm1lbnVJdGVtc0NvbnRhaW5lclwiO1xuXG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yaWVzKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbXNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VGl0bGUuaWQgPSBcInBhZ2VUaXRsZVwiO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gbWVudVRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtTmFtZVwiLCBpdGVtLm5hbWUpO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbVByaWNlXCIsIGl0ZW0ucHJpY2UpO1xuICAgIGNvbnN0IGl0ZW1EZXNjciA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbURlc2NyXCIsIGl0ZW0uZGVzY3IpO1xuXG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXRlZ29yaWVzKGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBtZW51Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNhdGVnb3JpZXMuaWQgPSBcIm1lbnVDYXRlZ29yaWVzXCI7XG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtQ2F0ZWdvcnlcIiwgY2F0ZWdvcnlOYW1lKTtcblxuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICBjYXRlZ29yeUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2F0ZWdvcnlFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJsaWdodGNvcmFsXCI7XG4gICAgICAgICAgICBsZXQgY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnlOYW1lO1xuXG4gICAgICAgICAgICBjYXRlZ29yeUxpc3RzKGN1cnJlbnRDYXRlZ29yeSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50cy5wdXNoKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIG1lbnVDYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUNhdGVnb3JpZXM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3J5TGlzdHMoY2F0ZWdvcnlOYW1lKSB7XG4gICAgY29uc3QgYmV2ZXJhZ2VJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIk1hcmlvIE1vY2hhXCIsIHByaWNlOiBcIiQ0Ljk5XCIsIGRlc2NyOiBcIkEgbW9jaGEgd2l0aCBhIHN1cGVyIG11c2hyb29tIHR3aXN0LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJQaXhlbCBQdW5jaFwiLCBwcmljZTogXCIkMy40OVwiLCBkZXNjcjogXCJBIGZydWl0eSBwdW5jaCB3aXRoIGEgcGl4ZWxhdGVkIHN1cnByaXNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJaZWxkYSdzIEVsaXhpclwiLCBwcmljZTogXCIkMi45OVwiLCBkZXNjcjogXCJBIGxlZ2VuZGFyeSBncmVlbiB0ZWEgYmxlbmQuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNvbmljIFNwZWVkc3RlclwiLCBwcmljZTogXCIkMy45OVwiLCBkZXNjcjogXCJBIGJsdWUgcmFzcGJlcnJ5IHNsdXNoaWUgd2l0aCBhIGhpbnQgb2YgbGltZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiMS1VUCBFbGl4aXJcIiwgcHJpY2U6IFwiJDMuNDlcIiwgZGVzY3I6IFwiQSByZWZyZXNoaW5nIGdyZWVuIHRlYSB3aXRoIGEgaGludCBvZiBtaW50LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJGaW5hbCBGYW50YXN5IEZyYXBwZVwiLCBwcmljZTogXCIkNC45OVwiLCBkZXNjcjogXCJBIGJsZW5kZWQgY29mZmVlIGZyYXBwZSB3aXRoIGEgbWFnaWNhbCB0b3VjaC5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGJyZWFrZmFzdEl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiUG93ZXItVXAgUGFuY2FrZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiRmx1ZmZ5IHBhbmNha2VzIHdpdGggcG93ZXItdXAgc3lydXAgYW5kIGZydWl0IHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMdWlnaSdzIE9tZWxldHRlXCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkEgaGVhcnR5IG9tZWxldHRlIGZpbGxlZCB3aXRoIG11c2hyb29tcywgcGVwcGVycywgYW5kIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU29uaWMncyBTcGluYWNoIFNjcmFtYmxlXCIsIHByaWNlOiBcIiQ3Ljk5XCIsIGRlc2NyOiBcIlNjcmFtYmxlZCBlZ2dzIHdpdGggZnJlc2ggc3BpbmFjaCwgdG9tYXRvZXMsIGFuZCBmZXRhIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRG9ua2V5IEtvbmcgRnJlbmNoIFRvYXN0XCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkZyZW5jaCB0b2FzdCB0b3BwZWQgd2l0aCBiYW5hbmFzLCBjYXJhbWVsIHNhdWNlLCBhbmQgd2hpcHBlZCBjcmVhbS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3BhY2UgSW52YWRlcnMgV2FmZmxlc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJDcmlzcHkgd2FmZmxlcyB3aXRoIGEgY2hvaWNlIG9mIGJlcnJ5IGNvbXBvdGUgb3IgY2hvY29sYXRlIGNoaXBzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJSb3NzaSdzIEJyZWFrZmFzdCBXcmFwXCIsIHByaWNlOiBcIiQ4Ljk5XCIsIGRlc2NyOiBcIkJhY29uLCBzY3JhbWJsZWQgZWdncywgYW5kIHNlYXNvbmVkIHBvdGF0byBoYXNoLCB3cmFwcGVkIGluIGEgdG9ydGlsbGEuXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBhYy1NYW4gUG9wY29yblwiLCBwcmljZTogXCIkNC4yOVwiLCBkZXNjcjogXCJCdXR0ZXJlZCBwb3Bjb3JuIHdpdGggYSBzcGljeSBjaGVkZGFyIHR3aXN0LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJHYWxhZ2EgR2FybGljIEJyZWFkXCIsIHByaWNlOiBcIiQ1Ljk5XCIsIGRlc2NyOiBcIkdhcmxpYyBicmVhZCBzZXJ2ZWQgd2l0aCBtYXJpbmFyYSBkaXBwaW5nIHNhdWNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJQb25nIFBvdGF0byBTa2luc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJQb3RhdG8gc2tpbnMgbG9hZGVkIHdpdGggY2hlZXNlLCBiYWNvbiwgYW5kIHNvdXIgY3JlYW0uXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRldHJpcyBUb2Z1IEJpdGVzXCIsIHByaWNlOiBcIiQ1LjQ5XCIsIGRlc2NyOiBcIkNyaXNweSB0b2Z1IGJpdGVzIHdpdGggYSBzd2VldCBjaGlsaSBkaXBwaW5nIHNhdWNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMdWRpY29sbyBHdWFjYW1vbGVcIiwgcHJpY2U6IFwiJDcuNDlcIiwgZGVzY3I6IFwiRnJlc2ggZ3VhY2Ftb2xlIHNlcnZlZCB3aXRoIHRvcnRpbGxhIGNoaXBzIGFuZCBzYWxzYS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVE1OVCBQaXp6YSBCaXRlc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJNaW5pIHBpenphIGJpdGVzIGJ1cnN0aW5nIHdpdGggY2hlZXN5IGdvb2RuZXNzIGFuZCBwZXBwZXJvbmkuXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBtYWluQ291cnNlSXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJNYXN0ZXIgU3dvcmQgU3RlYWtcIiwgcHJpY2U6IFwiJDE0Ljk5XCIsIGRlc2NyOiBcIkEganVpY3kgc3RlYWsgd2l0aCBnYXJsaWMgYnV0dGVyIGFuZCBzZWFzb25lZCB2ZWdldGFibGVzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJNZWdhIEJ1cmdlclwiLCBwcmljZTogXCIkMTAuOTlcIiwgZGVzY3I6IFwiQSBnaWFudCBidXJnZXIgc3RhY2tlZCB3aXRoIHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTdHJlZXQgRmlnaHRlciBUYWNvc1wiLCBwcmljZTogXCIkOC45OVwiLCBkZXNjcjogXCJUYWNvcyB3aXRoIGEgcHVuY2ggb2YgZmxhdm9yLCBjaG9vc2UgeW91ciBmaWdodGVyLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMZWdlbmQgb2YgWmVsZGEgTGFzYWduYVwiLCBwcmljZTogXCIkMTIuOTlcIiwgZGVzY3I6IFwiTGF5ZXJzIG9mIHBhc3RhLCBjaGVlc2UsIGFuZCBzYXZvcnkgbWVhdCBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTWV0cm9pZCBNZWF0YmFsbCBTdWJcIiwgcHJpY2U6IFwiJDkuOTlcIiwgZGVzY3I6IFwiQSBzdWIgc2FuZHdpY2ggd2l0aCBtZWF0YmFsbHMsIG1hcmluYXJhLCBhbmQgbWVsdGVkIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRG9ua2V5IEtvbmcgRnJpZWQgQ2hpY2tlblwiLCBwcmljZTogXCIkMTEuOTlcIiwgZGVzY3I6IFwiQ3Jpc3B5IGZyaWVkIGNoaWNrZW4gc2VydmVkIHdpdGggY29sZXNsYXcgYW5kIGJpc2N1aXRzLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZGVzc2VydEl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiUGFjLU1hbiBQaWVcIiwgcHJpY2U6IFwiJDUuNDlcIiwgZGVzY3I6IFwiQSBqdWljeSBjaGVycnkgcGllIHdpdGggYSBub3N0YWxnaWMgZGVzaWduLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTcGFjZSBJbnZhZGVycyBTdW5kYWVcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiSWNlIGNyZWFtIG9mIGNob2ljZSAgICAgd2l0aCBhbGllbi10aGVtZWQgdG9wcGluZ3MuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkNoZWVzZWNha2UgR2FsYXh5XCIsIHByaWNlOiBcIiQ1Ljk5XCIsIGRlc2NyOiBcIkNyZWFteSBjaGVlc2VjYWtlIHdpdGggYSBnYWxheHktaW5zcGlyZWQgc3dpcmwuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlN1cGVyIE1hcmlvIFRpcmFtaXN1XCIsIHByaWNlOiBcIiQ2LjQ5XCIsIGRlc2NyOiBcIkEgY2xhc3NpYyBJdGFsaWFuIHRpcmFtaXN1IHdpdGggYSBNYXJpbyB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUGlrYWNodSdzIFBhcmZhaXRcIiwgcHJpY2U6IFwiJDQuOTlcIiwgZGVzY3I6IFwiTGF5ZXJzIG9mIGZsYXZvcmVkIHlvZ3VydCwgZ3Jhbm9sYSwgYW5kIGZyZXNoIGJlcnJpZXMuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRldHJpcyBUcmVhdHNcIiwgcHJpY2U6IFwiOS45OVwiLCBkZXNjcjogXCJQYXN0cnkgYmxvY2sgbGF5ZXJzIHdpdGggc3dlZXQgc3VycHJpc2VzLCB0b3BwZWQgd2l0aCByYXNwYmVycnkgc2F1Y2UuXCJ9XG4gICAgXTtcblxuICAgIHN3aXRjaCAoY2F0ZWdvcnlOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcImJldmVyYWdlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGJldmVyYWdlSXRlbXM7XG4gICAgICAgIGNhc2UgXCJicmVha2Zhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBicmVha2Zhc3RJdGVtcztcbiAgICAgICAgY2FzZSBcImFwcGV0aXplcnNcIjpcbiAgICAgICAgICAgIHJldHVybiBhcHBldGl6ZXJJdGVtcztcbiAgICAgICAgY2FzZSBcIm1haW4gY291cnNlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIG1haW5Db3Vyc2VJdGVtcztcbiAgICAgICAgY2FzZSBcImRlc3NlcnRzXCI6XG4gICAgICAgICAgICByZXR1cm4gZGVzc2VydEl0ZW1zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVTZWN0aW9uIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVNlY3Rpb24gfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHsgdGV4dDogXCJNZW51XCIsIGFjdGlvbjogY3JlYXRlTWVudVNlY3Rpb24sIHBhZ2U6IFwibWVudVwiIH0sXG4gICAgeyB0ZXh0OiBcIlBpeGVsIEJpdGVzXCIsIGFjdGlvbjogY3JlYXRlSG9tZVNlY3Rpb24sIHBhZ2U6IFwiaG9tZVwiIH0sXG4gICAgeyB0ZXh0OiBcIkNvbnRhY3RcIiwgYWN0aW9uOiBjcmVhdGVDb250YWN0U2VjdGlvbiwgcGFnZTogXCJjb250YWN0XCIgfSxcbl07XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckxpbmsodGV4dCwgYWN0aW9uLCBwYWdlKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtzXCIpO1xuXG4gICAgaWYgKHRleHQgPT09IFwiUGl4ZWwgQml0ZXNcIikge1xuICAgICAgICBsaW5rLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgfVxuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlXCIsIHBhZ2UpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uKCkpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIG5hdmlnYXRpb25MaW5rcy5mb3JFYWNoKCh7IHRleHQsIGFjdGlvbiwgcGFnZSB9KSA9PiB7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJMaW5rKHRleHQsIGFjdGlvbiwgcGFnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG5cbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVNlY3Rpb24oKSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVTZWN0aW9uKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXJUZXh0XCI7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVzaWduZWQgJiBCdWlsdCBieSBEZWNoc2l0IE5hZXRzYXdhblwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVJlc3RhdXJhbnRcIjsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgVVJMXG4gICAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiOyAvLyBPcGVuIGxpbmsgaW4gYSBuZXcgdGFiL3dpbmRvd1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5pZCA9IChcImdpdGh1Ykljb25cIik7XG4gICAgaWNvbi5zcmMgPSAoXCIvZGlzdC9pbWFnZXMvZ2l0aHViTG9nby5zdmdcIilcblxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5pbml0aWFsaXplKCk7XG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==