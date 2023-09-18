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
    link.href = "https://github.com/naetsawd/OdinProject-Restaurant";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.id = ("githubIcon");
    icon.src = ("images/githubLogo.svg")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDQTtBQUNNOztBQUVqRDtBQUNBLE1BQU0sc0JBQXNCLG9EQUFpQixnQkFBZ0I7QUFDN0QsTUFBTSw2QkFBNkIsb0RBQWlCLGdCQUFnQjtBQUNwRSxNQUFNLHlCQUF5QiwwREFBb0IsbUJBQW1CO0FBQ3RFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFpQjtBQUN0RCxNQUFNO0FBQ04scUNBQXFDLDhEQUFvQjtBQUN6RCxNQUFNO0FBQ04scUNBQXFDLHdEQUFpQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEl0ZW1zID0gW1xuICAgIHsgbmFtZTogXCJQaG9uZVwiLCB0ZXh0OiBcIjEyMy00NTYtNzg5MFwiIH0sXG4gICAgeyBuYW1lOiBcIkVtYWlsXCIsIHRleHQ6IFwicGl4ZWxsYml0ZXNAZW1haWwuY29tXCIgfSxcbiAgICB7IG5hbWU6IFwiQWRkcmVzc1wiLCB0ZXh0OiBcIjEyMyBQaXhlbCBMYW5lLCBQaXhlbCBMYW5kLCBQMVgzTFwiIH1cbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoXCJDb250YWN0XCIpO1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuXG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RJdGVtcygpKTtcblxuICAgIHJldHVybiBjb250YWN0UGFnZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFRpdGxlLmlkID0gXCJwYWdlVGl0bGVcIjtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gICAgcmV0dXJuIGNvbnRhY3RUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVMaW5lKCkge1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2hpdGVMaW5lLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZUxpbmVcIik7XG4gICAgcmV0dXJuIHdoaXRlTGluZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEl0ZW1zKCkge1xuICAgIGNvbnN0IGNvbnRhY3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdEl0ZW1zQ29udGFpbmVyLmlkID0gXCJjb250YWN0SXRlbXNDb250YWluZXJcIjtcblxuICAgIGNvbnRhY3RJdGVtcy5mb3JFYWNoKCh7bmFtZSwgdGV4dH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSAobmFtZSArIFwiOlwiKTtcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gKFwiY29udGFjdEl0ZW1OYW1lXCIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gKHRleHQpO1xuICAgICAgICBpdGVtVGV4dC5jbGFzc0xpc3QgPSAoXCJjb250YWN0SXRlbVRleHRcIik7XG5cbiAgICAgICAgY29udGFjdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgY29udGFjdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250YWN0SXRlbXNDb250YWluZXI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGhvbWVQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuaWQgPSBcInBhZ2VDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShcIkxldmVsIFVwIFlvdXIgTm9zdGFsZ2lhIVwiKTtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcbiAgICBjb25zdCBob21lRGVzYyA9IGNyZWF0ZUhvbWVEZXNjcmlwdGlvbigpO1xuXG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEZXNjKTtcblxuICAgIHJldHVybiBob21lUGFnZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZVRpdGxlLmlkID0gXCJob21lUGFnZVRpdGxlXCI7XG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgIHJldHVybiBob21lVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXRlTGluZSgpIHtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdoaXRlTGluZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVMaW5lXCIpO1xuICAgIHJldHVybiB3aGl0ZUxpbmU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBob21lRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZURlc2MuaWQgPSBcImhvbWVEZXNjXCI7XG4gICAgaG9tZURlc2MudGV4dENvbnRlbnQgPSBcIlBpeGVsIEJpdGVzIGlzIGEgbm9zdGFsZ2ljIGRpbmluZyBkZXN0aW5hdGlvbiB0aGF0IFwiICtcbiAgICAgICAgXCJ0cmFuc3BvcnRzIHlvdSBiYWNrIHRvIHRoZSBnb2xkZW4gYWdlIG9mIHZpZGVvIGdhbWVzLiBXaXRoIFwiICtcbiAgICAgICAgXCJwaXhlbGF0ZWQgZGVjb3IsIGNsYXNzaWMgYXJjYWRlIGdhbWVzLCBhbmQgYSBtZW51IGluc3BpcmVkIFwiICtcbiAgICAgICAgXCJieSBpY29uaWMgZ2FtaW5nIGNoYXJhY3RlcnMsIHRoaXMgZGluZXIgaXMgYSBoYXZlbiBmb3IgZ2FtZXJzIFwiICtcbiAgICAgICAgXCJhbmQgcmV0cm8gZW50aHVzaWFzdHMgYWxpa2UuXCI7XG4gICAgcmV0dXJuIGhvbWVEZXNjO1xufSIsImltcG9ydCB7IGNhdGVnb3J5TGlzdHMgfSBmcm9tIFwiLi9tZW51SXRlbXNcIjtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgICBcIkJldmVyYWdlc1wiLFxuICAgIFwiQnJlYWtmYXN0XCIsXG4gICAgXCJBcHBldGl6ZXJzXCIsXG4gICAgXCJNYWluIENvdXJzZXNcIixcbiAgICBcIkRlc3NlcnRzXCJcbl07XG5cbmNvbnN0IGNhdGVnb3J5RWxlbWVudHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1lbnVQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWVudVBhZ2VDb250YWluZXIuaWQgPSBcInBhZ2VDb250YWluZXJcIjtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShcIk1lbnVcIik7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBjcmVhdGVNZW51Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcbiAgICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pZCA9IFwibWVudUl0ZW1zQ29udGFpbmVyXCI7XG5cbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3JpZXMpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtc0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbWVudVBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSh0aXRsZVRleHQpIHtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVUaXRsZS5pZCA9IFwicGFnZVRpdGxlXCI7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgIHJldHVybiBtZW51VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXRlTGluZSgpIHtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdoaXRlTGluZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVMaW5lXCIpO1xuICAgIHJldHVybiB3aGl0ZUxpbmU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1OYW1lXCIsIGl0ZW0ubmFtZSk7XG4gICAgY29uc3QgaXRlbVByaWNlID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtUHJpY2VcIiwgaXRlbS5wcmljZSk7XG4gICAgY29uc3QgaXRlbURlc2NyID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtRGVzY3JcIiwgaXRlbS5kZXNjcik7XG5cbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW1FbGVtZW50KHRhZywgY2xhc3NOYW1lLCB0ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUNhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IG1lbnVDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q2F0ZWdvcmllcy5pZCA9IFwibWVudUNhdGVnb3JpZXNcIjtcblxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1DYXRlZ29yeVwiLCBjYXRlZ29yeU5hbWUpO1xuXG4gICAgICAgIGNhdGVnb3J5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXRlZ29yeUVsZW1lbnQuc3R5bGUuY29sb3IgPSBcImxpZ2h0Y29yYWxcIjtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeU5hbWU7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdHMoY3VycmVudENhdGVnb3J5KS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXRlZ29yeUVsZW1lbnRzLnB1c2goY2F0ZWdvcnlFbGVtZW50KTtcbiAgICAgICAgbWVudUNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51Q2F0ZWdvcmllcztcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2F0ZWdvcnlMaXN0cyhjYXRlZ29yeU5hbWUpIHtcbiAgICBjb25zdCBiZXZlcmFnZUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiTWFyaW8gTW9jaGFcIiwgcHJpY2U6IFwiJDQuOTlcIiwgZGVzY3I6IFwiQSBtb2NoYSB3aXRoIGEgc3VwZXIgbXVzaHJvb20gdHdpc3QuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlBpeGVsIFB1bmNoXCIsIHByaWNlOiBcIiQzLjQ5XCIsIGRlc2NyOiBcIkEgZnJ1aXR5IHB1bmNoIHdpdGggYSBwaXhlbGF0ZWQgc3VycHJpc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlplbGRhJ3MgRWxpeGlyXCIsIHByaWNlOiBcIiQyLjk5XCIsIGRlc2NyOiBcIkEgbGVnZW5kYXJ5IGdyZWVuIHRlYSBibGVuZC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU29uaWMgU3BlZWRzdGVyXCIsIHByaWNlOiBcIiQzLjk5XCIsIGRlc2NyOiBcIkEgYmx1ZSByYXNwYmVycnkgc2x1c2hpZSB3aXRoIGEgaGludCBvZiBsaW1lLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCIxLVVQIEVsaXhpclwiLCBwcmljZTogXCIkMy40OVwiLCBkZXNjcjogXCJBIHJlZnJlc2hpbmcgZ3JlZW4gdGVhIHdpdGggYSBoaW50IG9mIG1pbnQuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkZpbmFsIEZhbnRhc3kgRnJhcHBlXCIsIHByaWNlOiBcIiQ0Ljk5XCIsIGRlc2NyOiBcIkEgYmxlbmRlZCBjb2ZmZWUgZnJhcHBlIHdpdGggYSBtYWdpY2FsIHRvdWNoLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgYnJlYWtmYXN0SXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJQb3dlci1VcCBQYW5jYWtlc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJGbHVmZnkgcGFuY2FrZXMgd2l0aCBwb3dlci11cCBzeXJ1cCBhbmQgZnJ1aXQgdG9wcGluZ3MuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkx1aWdpJ3MgT21lbGV0dGVcIiwgcHJpY2U6IFwiJDcuNDlcIiwgZGVzY3I6IFwiQSBoZWFydHkgb21lbGV0dGUgZmlsbGVkIHdpdGggbXVzaHJvb21zLCBwZXBwZXJzLCBhbmQgY2hlZXNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTb25pYydzIFNwaW5hY2ggU2NyYW1ibGVcIiwgcHJpY2U6IFwiJDcuOTlcIiwgZGVzY3I6IFwiU2NyYW1ibGVkIGVnZ3Mgd2l0aCBmcmVzaCBzcGluYWNoLCB0b21hdG9lcywgYW5kIGZldGEgY2hlZXNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJEb25rZXkgS29uZyBGcmVuY2ggVG9hc3RcIiwgcHJpY2U6IFwiJDcuNDlcIiwgZGVzY3I6IFwiRnJlbmNoIHRvYXN0IHRvcHBlZCB3aXRoIGJhbmFuYXMsIGNhcmFtZWwgc2F1Y2UsIGFuZCB3aGlwcGVkIGNyZWFtLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTcGFjZSBJbnZhZGVycyBXYWZmbGVzXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIkNyaXNweSB3YWZmbGVzIHdpdGggYSBjaG9pY2Ugb2YgYmVycnkgY29tcG90ZSBvciBjaG9jb2xhdGUgY2hpcHMuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlJvc3NpJ3MgQnJlYWtmYXN0IFdyYXBcIiwgcHJpY2U6IFwiJDguOTlcIiwgZGVzY3I6IFwiQmFjb24sIHNjcmFtYmxlZCBlZ2dzLCBhbmQgc2Vhc29uZWQgcG90YXRvIGhhc2gsIHdyYXBwZWQgaW4gYSB0b3J0aWxsYS5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGFwcGV0aXplckl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiUGFjLU1hbiBQb3Bjb3JuXCIsIHByaWNlOiBcIiQ0LjI5XCIsIGRlc2NyOiBcIkJ1dHRlcmVkIHBvcGNvcm4gd2l0aCBhIHNwaWN5IGNoZWRkYXIgdHdpc3QuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkdhbGFnYSBHYXJsaWMgQnJlYWRcIiwgcHJpY2U6IFwiJDUuOTlcIiwgZGVzY3I6IFwiR2FybGljIGJyZWFkIHNlcnZlZCB3aXRoIG1hcmluYXJhIGRpcHBpbmcgc2F1Y2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlBvbmcgUG90YXRvIFNraW5zXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIlBvdGF0byBza2lucyBsb2FkZWQgd2l0aCBjaGVlc2UsIGJhY29uLCBhbmQgc291ciBjcmVhbS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVGV0cmlzIFRvZnUgQml0ZXNcIiwgcHJpY2U6IFwiJDUuNDlcIiwgZGVzY3I6IFwiQ3Jpc3B5IHRvZnUgYml0ZXMgd2l0aCBhIHN3ZWV0IGNoaWxpIGRpcHBpbmcgc2F1Y2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkx1ZGljb2xvIEd1YWNhbW9sZVwiLCBwcmljZTogXCIkNy40OVwiLCBkZXNjcjogXCJGcmVzaCBndWFjYW1vbGUgc2VydmVkIHdpdGggdG9ydGlsbGEgY2hpcHMgYW5kIHNhbHNhLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUTU5UIFBpenphIEJpdGVzXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIk1pbmkgcGl6emEgYml0ZXMgYnVyc3Rpbmcgd2l0aCBjaGVlc3kgZ29vZG5lc3MgYW5kIHBlcHBlcm9uaS5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IG1haW5Db3Vyc2VJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIk1hc3RlciBTd29yZCBTdGVha1wiLCBwcmljZTogXCIkMTQuOTlcIiwgZGVzY3I6IFwiQSBqdWljeSBzdGVhayB3aXRoIGdhcmxpYyBidXR0ZXIgYW5kIHNlYXNvbmVkIHZlZ2V0YWJsZXMuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1lZ2EgQnVyZ2VyXCIsIHByaWNlOiBcIiQxMC45OVwiLCBkZXNjcjogXCJBIGdpYW50IGJ1cmdlciBzdGFja2VkIHdpdGggdG9wcGluZ3MuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlN0cmVldCBGaWdodGVyIFRhY29zXCIsIHByaWNlOiBcIiQ4Ljk5XCIsIGRlc2NyOiBcIlRhY29zIHdpdGggYSBwdW5jaCBvZiBmbGF2b3IsIGNob29zZSB5b3VyIGZpZ2h0ZXIuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkxlZ2VuZCBvZiBaZWxkYSBMYXNhZ25hXCIsIHByaWNlOiBcIiQxMi45OVwiLCBkZXNjcjogXCJMYXllcnMgb2YgcGFzdGEsIGNoZWVzZSwgYW5kIHNhdm9yeSBtZWF0IHNhdWNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJNZXRyb2lkIE1lYXRiYWxsIFN1YlwiLCBwcmljZTogXCIkOS45OVwiLCBkZXNjcjogXCJBIHN1YiBzYW5kd2ljaCB3aXRoIG1lYXRiYWxscywgbWFyaW5hcmEsIGFuZCBtZWx0ZWQgY2hlZXNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJEb25rZXkgS29uZyBGcmllZCBDaGlja2VuXCIsIHByaWNlOiBcIiQxMS45OVwiLCBkZXNjcjogXCJDcmlzcHkgZnJpZWQgY2hpY2tlbiBzZXJ2ZWQgd2l0aCBjb2xlc2xhdyBhbmQgYmlzY3VpdHMuXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBkZXNzZXJ0SXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJQYWMtTWFuIFBpZVwiLCBwcmljZTogXCIkNS40OVwiLCBkZXNjcjogXCJBIGp1aWN5IGNoZXJyeSBwaWUgd2l0aCBhIG5vc3RhbGdpYyBkZXNpZ24uXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNwYWNlIEludmFkZXJzIFN1bmRhZVwiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJJY2UgY3JlYW0gb2YgY2hvaWNlICAgICB3aXRoIGFsaWVuLXRoZW1lZCB0b3BwaW5ncy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiQ2hlZXNlY2FrZSBHYWxheHlcIiwgcHJpY2U6IFwiJDUuOTlcIiwgZGVzY3I6IFwiQ3JlYW15IGNoZWVzZWNha2Ugd2l0aCBhIGdhbGF4eS1pbnNwaXJlZCBzd2lybC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3VwZXIgTWFyaW8gVGlyYW1pc3VcIiwgcHJpY2U6IFwiJDYuNDlcIiwgZGVzY3I6IFwiQSBjbGFzc2ljIEl0YWxpYW4gdGlyYW1pc3Ugd2l0aCBhIE1hcmlvIHR3aXN0LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJQaWthY2h1J3MgUGFyZmFpdFwiLCBwcmljZTogXCIkNC45OVwiLCBkZXNjcjogXCJMYXllcnMgb2YgZmxhdm9yZWQgeW9ndXJ0LCBncmFub2xhLCBhbmQgZnJlc2ggYmVycmllcy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVGV0cmlzIFRyZWF0c1wiLCBwcmljZTogXCI5Ljk5XCIsIGRlc2NyOiBcIlBhc3RyeSBibG9jayBsYXllcnMgd2l0aCBzd2VldCBzdXJwcmlzZXMsIHRvcHBlZCB3aXRoIHJhc3BiZXJyeSBzYXVjZS5cIn1cbiAgICBdO1xuXG4gICAgc3dpdGNoIChjYXRlZ29yeU5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiYmV2ZXJhZ2VzXCI6XG4gICAgICAgICAgICByZXR1cm4gYmV2ZXJhZ2VJdGVtcztcbiAgICAgICAgY2FzZSBcImJyZWFrZmFzdFwiOlxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrZmFzdEl0ZW1zO1xuICAgICAgICBjYXNlIFwiYXBwZXRpemVyc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGFwcGV0aXplckl0ZW1zO1xuICAgICAgICBjYXNlIFwibWFpbiBjb3Vyc2VzXCI6XG4gICAgICAgICAgICByZXR1cm4gbWFpbkNvdXJzZUl0ZW1zO1xuICAgICAgICBjYXNlIFwiZGVzc2VydHNcIjpcbiAgICAgICAgICAgIHJldHVybiBkZXNzZXJ0SXRlbXM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVNlY3Rpb24gfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBuYXZpZ2F0aW9uTGlua3MgPSBbXG4gICAgeyB0ZXh0OiBcIk1lbnVcIiwgYWN0aW9uOiBjcmVhdGVNZW51U2VjdGlvbiwgcGFnZTogXCJtZW51XCIgfSxcbiAgICB7IHRleHQ6IFwiUGl4ZWwgQml0ZXNcIiwgYWN0aW9uOiBjcmVhdGVIb21lU2VjdGlvbiwgcGFnZTogXCJob21lXCIgfSxcbiAgICB7IHRleHQ6IFwiQ29udGFjdFwiLCBhY3Rpb246IGNyZWF0ZUNvbnRhY3RTZWN0aW9uLCBwYWdlOiBcImNvbnRhY3RcIiB9LFxuXTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGluayh0ZXh0LCBhY3Rpb24sIHBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtzXCIpO1xuXG4gICAgaWYgKHRleHQgPT09IFwiUGl4ZWwgQml0ZXNcIikge1xuICAgICAgICBsaW5rLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSBwYWdlKSB7XG4gICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcImxpZ2h0Y29yYWxcIjtcbiAgICB9O1xuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlXCIsIHBhZ2UpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uKCkpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIG5hdmlnYXRpb25MaW5rcy5mb3JFYWNoKCh7IHRleHQsIGFjdGlvbiwgcGFnZSB9KSA9PiB7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJMaW5rKHRleHQsIGFjdGlvbiwgcGFnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG5cbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVNlY3Rpb24oKSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVTZWN0aW9uKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXJUZXh0XCI7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVzaWduZWQgJiBCdWlsdCBieSBEZWNoc2l0IE5hZXRzYXdhblwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVJlc3RhdXJhbnRcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmlkID0gKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChcImltYWdlcy9naXRodWJMb2dvLnN2Z1wiKVxuXG4gICAgbGluay5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xufVxuXG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmluaXRpYWxpemUoKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9