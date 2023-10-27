/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/04B_30__.ttf */ "./src/fonts/04B_30__.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Crang.ttf */ "./src/fonts/Crang.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/dogica.ttf */ "./src/fonts/dogica.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/CyberpunkWaifus.ttf */ "./src/fonts/CyberpunkWaifus.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/background.gif */ "./src/images/background.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Fonts */
@font-face {
    font-family: "Arcade";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Crang";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Dogcia";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Cyberpunk";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    font-weight: 600;
    font-style: normal;
}

/* General */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: cover;
}

#content {
    display: grid;
    grid-template-rows: 15vh 80vh 5vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.25));
}

.whiteLine {
    background-color: white;
    width: 1200px;
    height: 5px;
    margin: 20px;
}

#pageContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
}

#pageTitle {
    color: lightskyblue;
    font-size: 40px;
    font-family: "Arcade";
}

/* Header */

header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: none;
    align-items: center;
    justify-items: center;

}

.navLinks {
    color: white;
    font-family: "Crang";
    font-size: 30px;
    padding-bottom: 10px;
    transition: transform 0.4s ease;
}

.navLinks:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: lightcoral;
}

#headerLogo {
    font-size: 60px;
}

/* Home Section */
#homePageTitle {
    color: lightskyblue;
    font-size: 100px;
    font-family: "Arcade";
    margin: 0px 50px;
}

#homeDesc {
    color: white;
    font-family: "Dogcia";
    font-size: 20px;
    width: 75%;
    line-height: 30px;
    border: 1px solid white;
    border-radius: 15px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.75);
}

/* Menu Section */
#menuCategories {
    border: 1px solid white;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80vw;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.75);
}

.menuItemCategory {
    display: flex;
    color: white;
    font-family: "Dogcia";
    font-size: 15px;
    align-items: center;
    justify-content: center;
}

.menuItemCategory:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: lightcoral;
}

#menuItemsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 1000px;
    height: 400px;
    color: white;
    align-items: center;
    justify-items: center;
    margin-top: 20px;
    gap: 20px;
}

.menuItem {
    display: grid;
    grid-template-rows: 20% 20% 10% 50%;
    border: 1px solid white;
    border-radius: 10px;
    width: 300px;
    height: 170px;
    align-items: center;
    justify-items: center;
    font-family: "Cyberpunk";
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 10px;
}

.menuItem > .whiteLine {
    width: 200px;
    height: 1px;
    padding: 0px;
    margin: 0px;
    margin-top: 3px;
}

.menuItemName {
    color: aquamarine;
}

.menuItemPrice {
    color: lightgoldenrodyellow;
}

.menuItemDescr {
    color: plum;
    margin: 10px;
    padding: 0px;
}

/* Contact Section */
#contactItemsContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
    border: 1px solid white;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 25px;
}

.contactItemName {
    font-family: "Dogcia";
    font-size: 40px;
    color: aquamarine;
}

.contactItemText {
    font-family: "Cyberpunk";
    font-size: 40px;
    color: plum;
}

/* Footer */
#footerContainer {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

#footerText {
    color: white;
    font-family: "Cyberpunk";
    font-size: 20px;
}

#githubIcon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;AACV;IACI,qBAAqB;IACrB,4CAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,4CAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,4CAAqC;IACrC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,YAAY;AACZ;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yDAA8C;IAC9C,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC;4BACwB;AAC5B;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,qBAAqB;AACzB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,oBAAoB;IACpB,+BAA+B;AACnC;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,UAAU;IACV,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,qCAAqC;AACzC;;AAEA,iBAAiB;AACjB;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,WAAW;IACX,YAAY;IACZ,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,wBAAwB;IACxB,eAAe;IACf,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,WAAW;AACf;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["/* Fonts */\n@font-face {\n    font-family: \"Arcade\";\n    src: url('fonts/04B_30__.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Crang\";\n    src: url('fonts/Crang.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Dogcia\";\n    src: url('fonts/dogica.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Cyberpunk\";\n    src: url('fonts/CyberpunkWaifus.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n/* General */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(\"images/background.gif\");\n    background-size: cover;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 15vh 80vh 5vh;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), \n        rgba(0, 0, 0, 0.25));\n}\n\n.whiteLine {\n    background-color: white;\n    width: 1200px;\n    height: 5px;\n    margin: 20px;\n}\n\n#pageContainer {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n}\n\n#pageTitle {\n    color: lightskyblue;\n    font-size: 40px;\n    font-family: \"Arcade\";\n}\n\n/* Header */\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    list-style-type: none;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.navLinks {\n    color: white;\n    font-family: \"Crang\";\n    font-size: 30px;\n    padding-bottom: 10px;\n    transition: transform 0.4s ease;\n}\n\n.navLinks:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    color: lightcoral;\n}\n\n#headerLogo {\n    font-size: 60px;\n}\n\n/* Home Section */\n#homePageTitle {\n    color: lightskyblue;\n    font-size: 100px;\n    font-family: \"Arcade\";\n    margin: 0px 50px;\n}\n\n#homeDesc {\n    color: white;\n    font-family: \"Dogcia\";\n    font-size: 20px;\n    width: 75%;\n    line-height: 30px;\n    border: 1px solid white;\n    border-radius: 15px;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n/* Menu Section */\n#menuCategories {\n    border: 1px solid white;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    width: 80vw;\n    height: 50px;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n.menuItemCategory {\n    display: flex;\n    color: white;\n    font-family: \"Dogcia\";\n    font-size: 15px;\n    align-items: center;\n    justify-content: center;\n}\n\n.menuItemCategory:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    color: lightcoral;\n}\n\n#menuItemsContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 1000px;\n    height: 400px;\n    color: white;\n    align-items: center;\n    justify-items: center;\n    margin-top: 20px;\n    gap: 20px;\n}\n\n.menuItem {\n    display: grid;\n    grid-template-rows: 20% 20% 10% 50%;\n    border: 1px solid white;\n    border-radius: 10px;\n    width: 300px;\n    height: 170px;\n    align-items: center;\n    justify-items: center;\n    font-family: \"Cyberpunk\";\n    font-size: 20px;\n    background-color: rgba(0, 0, 0, 0.75);\n    padding: 10px;\n}\n\n.menuItem > .whiteLine {\n    width: 200px;\n    height: 1px;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 3px;\n}\n\n.menuItemName {\n    color: aquamarine;\n}\n\n.menuItemPrice {\n    color: lightgoldenrodyellow;\n}\n\n.menuItemDescr {\n    color: plum;\n    margin: 10px;\n    padding: 0px;\n}\n\n/* Contact Section */\n#contactItemsContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    margin-top: 20px;\n    gap: 20px;\n    border: 1px solid white;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 25px;\n}\n\n.contactItemName {\n    font-family: \"Dogcia\";\n    font-size: 40px;\n    color: aquamarine;\n}\n\n.contactItemText {\n    font-family: \"Cyberpunk\";\n    font-size: 40px;\n    color: plum;\n}\n\n/* Footer */\n#footerContainer {\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#footerText {\n    color: white;\n    font-family: \"Cyberpunk\";\n    font-size: 20px;\n}\n\n#githubIcon {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ }),

/***/ "./src/fonts/04B_30__.ttf":
/*!********************************!*\
  !*** ./src/fonts/04B_30__.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb829af0ad882093769c.ttf";

/***/ }),

/***/ "./src/fonts/Crang.ttf":
/*!*****************************!*\
  !*** ./src/fonts/Crang.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81743f91ef7248b929c6.ttf";

/***/ }),

/***/ "./src/fonts/CyberpunkWaifus.ttf":
/*!***************************************!*\
  !*** ./src/fonts/CyberpunkWaifus.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba63a5415922258e6f19.ttf";

/***/ }),

/***/ "./src/fonts/dogica.ttf":
/*!******************************!*\
  !*** ./src/fonts/dogica.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214cd23097c4c02eb9bd.ttf";

/***/ }),

/***/ "./src/images/background.gif":
/*!***********************************!*\
  !*** ./src/images/background.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5ef3a4185c0774d82af.gif";

/***/ }),

/***/ "./src/images/githubLogo.svg":
/*!***********************************!*\
  !*** ./src/images/githubLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4577cfbb9306cfe891b.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/githubLogo.svg */ "./src/images/githubLogo.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const navigationLinks = [
    { text: "Menu", action: _menu__WEBPACK_IMPORTED_MODULE_3__.createMenuSection, page: "menu" },
    { text: "Pixel Bites", action: _home__WEBPACK_IMPORTED_MODULE_2__.createHomeSection, page: "home" },
    { text: "Contact", action: _contact__WEBPACK_IMPORTED_MODULE_4__.createContactSection, page: "contact" },
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

    if (!currentPage) {
        localStorage.setItem("currentPage", "home")
    };

    contentContainer.appendChild(createHeader());

    if (currentPage === "menu") {
        contentContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuSection)());
    } else if (currentPage === "contact") {
        contentContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__.createContactSection)());
    } else {
        contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createHomeSection)());
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
    icon.src = (_images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_1__);

    link.appendChild(icon);

    footerContainer.appendChild(link);
    footerContainer.appendChild(footerText);

    return footerContainer;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFxQztBQUNqRiw0Q0FBNEMsNkdBQWtDO0FBQzlFLDRDQUE0QywrR0FBbUM7QUFDL0UsNENBQTRDLGlJQUE0QztBQUN4Riw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHFGQUFxRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxL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LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy8wNEJfMzBfXy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9DcmFuZy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJmb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZm9udHMvQ3liZXJwdW5rV2FpZnVzLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImltYWdlcy9iYWNrZ3JvdW5kLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEZvbnRzICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJBcmNhZGVcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3JhbmdcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9nY2lhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkN5YmVycHVua1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBHZW5lcmFsICovXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDgwdmggNXZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xufVxuXG4ud2hpdGVMaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuI3BhZ2VDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3BhZ2VUaXRsZSB7XG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJjYWRlXCI7XG59XG5cbi8qIEhlYWRlciAqL1xuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLm5hdkxpbmtzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3JhbmdcIjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cblxuLm5hdkxpbmtzOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4jaGVhZGVyTG9nbyB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4vKiBIb21lIFNlY3Rpb24gKi9cbiNob21lUGFnZVRpdGxlIHtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJjYWRlXCI7XG4gICAgbWFyZ2luOiAwcHggNTBweDtcbn1cblxuI2hvbWVEZXNjIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9nY2lhXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi8qIE1lbnUgU2VjdGlvbiAqL1xuI21lbnVDYXRlZ29yaWVzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLm1lbnVJdGVtQ2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2NpYVwiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudUl0ZW1DYXRlZ29yeTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuI21lbnVJdGVtc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5tZW51SXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMTAlIDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkN5YmVycHVua1wiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51SXRlbSA+IC53aGl0ZUxpbmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubWVudUl0ZW1OYW1lIHtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLm1lbnVJdGVtUHJpY2Uge1xuICAgIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuLm1lbnVJdGVtRGVzY3Ige1xuICAgIGNvbG9yOiBwbHVtO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi8qIENvbnRhY3QgU2VjdGlvbiAqL1xuI2NvbnRhY3RJdGVtc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWN0SXRlbU5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2NpYVwiO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmNvbnRhY3RJdGVtVGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiBwbHVtO1xufVxuXG4vKiBGb290ZXIgKi9cbiNmb290ZXJDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNmb290ZXJUZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZ2l0aHViSWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTtBQUNWO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLFlBQVk7QUFD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QGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXJjYWRlXFxcIjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzLzA0Ql8zMF9fLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNyYW5nXFxcIjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL0NyYW5nLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2NpYVxcXCI7XFxuICAgIHNyYzogdXJsKCdmb250cy9kb2dpY2EudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3liZXJwdW5rXFxcIjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL0N5YmVycHVua1dhaWZ1cy50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBHZW5lcmFsICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1hZ2VzL2JhY2tncm91bmQuZ2lmXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIDgwdmggNXZoO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIFxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcbi53aGl0ZUxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI3BhZ2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGFnZVRpdGxlIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkFyY2FkZVxcXCI7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ubmF2TGlua3Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JhbmdcXFwiO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcbn1cXG5cXG4ubmF2TGlua3M6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbiNoZWFkZXJMb2dvIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4vKiBIb21lIFNlY3Rpb24gKi9cXG4jaG9tZVBhZ2VUaXRsZSB7XFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXJjYWRlXFxcIjtcXG4gICAgbWFyZ2luOiAwcHggNTBweDtcXG59XFxuXFxuI2hvbWVEZXNjIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2NpYVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4vKiBNZW51IFNlY3Rpb24gKi9cXG4jbWVudUNhdGVnb3JpZXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLm1lbnVJdGVtQ2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9nY2lhXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtQ2F0ZWdvcnk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbiNtZW51SXRlbXNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMTAlIDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1lbnVJdGVtID4gLndoaXRlTGluZSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLm1lbnVJdGVtTmFtZSB7XFxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4ubWVudUl0ZW1QcmljZSB7XFxuICAgIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG59XFxuXFxuLm1lbnVJdGVtRGVzY3Ige1xcbiAgICBjb2xvcjogcGx1bTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi8qIENvbnRhY3QgU2VjdGlvbiAqL1xcbiNjb250YWN0SXRlbXNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLmNvbnRhY3RJdGVtTmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9nY2lhXFxcIjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmNvbnRhY3RJdGVtVGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3liZXJwdW5rXFxcIjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogcGx1bTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuI2Zvb3RlckNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXJUZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2dpdGh1Ykljb24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0SXRlbXMgPSBbXG4gICAgeyBuYW1lOiBcIlBob25lXCIsIHRleHQ6IFwiMTIzLTQ1Ni03ODkwXCIgfSxcbiAgICB7IG5hbWU6IFwiRW1haWxcIiwgdGV4dDogXCJwaXhlbGxiaXRlc0BlbWFpbC5jb21cIiB9LFxuICAgIHsgbmFtZTogXCJBZGRyZXNzXCIsIHRleHQ6IFwiMTIzIFBpeGVsIExhbmUsIFBpeGVsIExhbmQsIFAxWDNMXCIgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuaWQgPSBcInBhZ2VDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShcIkNvbnRhY3RcIik7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG5cbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEl0ZW1zKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0VGl0bGUuaWQgPSBcInBhZ2VUaXRsZVwiO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gY29udGFjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SXRlbXMoKSB7XG4gICAgY29uc3QgY29udGFjdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SXRlbXNDb250YWluZXIuaWQgPSBcImNvbnRhY3RJdGVtc0NvbnRhaW5lclwiO1xuXG4gICAgY29udGFjdEl0ZW1zLmZvckVhY2goKHtuYW1lLCB0ZXh0fSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IChuYW1lICsgXCI6XCIpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QgPSAoXCJjb250YWN0SXRlbU5hbWVcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSAodGV4dCk7XG4gICAgICAgIGl0ZW1UZXh0LmNsYXNzTGlzdCA9IChcImNvbnRhY3RJdGVtVGV4dFwiKTtcblxuICAgICAgICBjb250YWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBjb250YWN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RJdGVtc0NvbnRhaW5lcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBob21lUGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiTGV2ZWwgVXAgWW91ciBOb3N0YWxnaWEhXCIpO1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuICAgIGNvbnN0IGhvbWVEZXNjID0gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCk7XG5cbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoaXRlTGluZSk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZURlc2MpO1xuXG4gICAgcmV0dXJuIGhvbWVQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lVGl0bGUuaWQgPSBcImhvbWVQYWdlVGl0bGVcIjtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gICAgcmV0dXJuIGhvbWVUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVMaW5lKCkge1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2hpdGVMaW5lLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZUxpbmVcIik7XG4gICAgcmV0dXJuIHdoaXRlTGluZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IGhvbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lRGVzYy5pZCA9IFwiaG9tZURlc2NcIjtcbiAgICBob21lRGVzYy50ZXh0Q29udGVudCA9IFwiUGl4ZWwgQml0ZXMgaXMgYSBub3N0YWxnaWMgZGluaW5nIGRlc3RpbmF0aW9uIHRoYXQgXCIgK1xuICAgICAgICBcInRyYW5zcG9ydHMgeW91IGJhY2sgdG8gdGhlIGdvbGRlbiBhZ2Ugb2YgdmlkZW8gZ2FtZXMuIFdpdGggXCIgK1xuICAgICAgICBcInBpeGVsYXRlZCBkZWNvciwgY2xhc3NpYyBhcmNhZGUgZ2FtZXMsIGFuZCBhIG1lbnUgaW5zcGlyZWQgXCIgK1xuICAgICAgICBcImJ5IGljb25pYyBnYW1pbmcgY2hhcmFjdGVycywgdGhpcyBkaW5lciBpcyBhIGhhdmVuIGZvciBnYW1lcnMgXCIgK1xuICAgICAgICBcImFuZCByZXRybyBlbnRodXNpYXN0cyBhbGlrZS5cIjtcbiAgICByZXR1cm4gaG9tZURlc2M7XG59IiwiaW1wb3J0IHsgY2F0ZWdvcnlMaXN0cyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwiQmV2ZXJhZ2VzXCIsXG4gICAgXCJCcmVha2Zhc3RcIixcbiAgICBcIkFwcGV0aXplcnNcIixcbiAgICBcIk1haW4gQ291cnNlc1wiLFxuICAgIFwiRGVzc2VydHNcIlxuXTtcblxuY29uc3QgY2F0ZWdvcnlFbGVtZW50cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiTWVudVwiKTtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcbiAgICBjb25zdCBtZW51Q2F0ZWdvcmllcyA9IGNyZWF0ZU1lbnVDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zQ29udGFpbmVyLmlkID0gXCJtZW51SXRlbXNDb250YWluZXJcIjtcblxuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2F0ZWdvcmllcyk7XG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBtZW51UGFnZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVRpdGxlLmlkID0gXCJwYWdlVGl0bGVcIjtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XG4gICAgcmV0dXJuIG1lbnVUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVMaW5lKCkge1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2hpdGVMaW5lLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZUxpbmVcIik7XG4gICAgcmV0dXJuIHdoaXRlTGluZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbU5hbWVcIiwgaXRlbS5uYW1lKTtcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1QcmljZVwiLCBpdGVtLnByaWNlKTtcbiAgICBjb25zdCBpdGVtRGVzY3IgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnQoXCJwXCIsIFwibWVudUl0ZW1EZXNjclwiLCBpdGVtLmRlc2NyKTtcblxuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3IpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDYXRlZ29yaWVzLmlkID0gXCJtZW51Q2F0ZWdvcmllc1wiO1xuXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbUNhdGVnb3J5XCIsIGNhdGVnb3J5TmFtZSk7XG5cbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgY2F0ZWdvcnlFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5RWxlbWVudC5zdHlsZS5jb2xvciA9IFwibGlnaHRjb3JhbFwiO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5TmFtZTtcblxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0cyhjdXJyZW50Q2F0ZWdvcnkpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhdGVnb3J5RWxlbWVudHMucHVzaChjYXRlZ29yeUVsZW1lbnQpO1xuICAgICAgICBtZW51Q2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDYXRlZ29yaWVzO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yeUxpc3RzKGNhdGVnb3J5TmFtZSkge1xuICAgIGNvbnN0IGJldmVyYWdlSXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJNYXJpbyBNb2NoYVwiLCBwcmljZTogXCIkNC45OVwiLCBkZXNjcjogXCJBIG1vY2hhIHdpdGggYSBzdXBlciBtdXNocm9vbSB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUGl4ZWwgUHVuY2hcIiwgcHJpY2U6IFwiJDMuNDlcIiwgZGVzY3I6IFwiQSBmcnVpdHkgcHVuY2ggd2l0aCBhIHBpeGVsYXRlZCBzdXJwcmlzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiWmVsZGEncyBFbGl4aXJcIiwgcHJpY2U6IFwiJDIuOTlcIiwgZGVzY3I6IFwiQSBsZWdlbmRhcnkgZ3JlZW4gdGVhIGJsZW5kLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTb25pYyBTcGVlZHN0ZXJcIiwgcHJpY2U6IFwiJDMuOTlcIiwgZGVzY3I6IFwiQSBibHVlIHJhc3BiZXJyeSBzbHVzaGllIHdpdGggYSBoaW50IG9mIGxpbWUuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIjEtVVAgRWxpeGlyXCIsIHByaWNlOiBcIiQzLjQ5XCIsIGRlc2NyOiBcIkEgcmVmcmVzaGluZyBncmVlbiB0ZWEgd2l0aCBhIGhpbnQgb2YgbWludC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRmluYWwgRmFudGFzeSBGcmFwcGVcIiwgcHJpY2U6IFwiJDQuOTlcIiwgZGVzY3I6IFwiQSBibGVuZGVkIGNvZmZlZSBmcmFwcGUgd2l0aCBhIG1hZ2ljYWwgdG91Y2guXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBicmVha2Zhc3RJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBvd2VyLVVwIFBhbmNha2VzXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIkZsdWZmeSBwYW5jYWtlcyB3aXRoIHBvd2VyLXVwIHN5cnVwIGFuZCBmcnVpdCB0b3BwaW5ncy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTHVpZ2kncyBPbWVsZXR0ZVwiLCBwcmljZTogXCIkNy40OVwiLCBkZXNjcjogXCJBIGhlYXJ0eSBvbWVsZXR0ZSBmaWxsZWQgd2l0aCBtdXNocm9vbXMsIHBlcHBlcnMsIGFuZCBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNvbmljJ3MgU3BpbmFjaCBTY3JhbWJsZVwiLCBwcmljZTogXCIkNy45OVwiLCBkZXNjcjogXCJTY3JhbWJsZWQgZWdncyB3aXRoIGZyZXNoIHNwaW5hY2gsIHRvbWF0b2VzLCBhbmQgZmV0YSBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkRvbmtleSBLb25nIEZyZW5jaCBUb2FzdFwiLCBwcmljZTogXCIkNy40OVwiLCBkZXNjcjogXCJGcmVuY2ggdG9hc3QgdG9wcGVkIHdpdGggYmFuYW5hcywgY2FyYW1lbCBzYXVjZSwgYW5kIHdoaXBwZWQgY3JlYW0uXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNwYWNlIEludmFkZXJzIFdhZmZsZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiQ3Jpc3B5IHdhZmZsZXMgd2l0aCBhIGNob2ljZSBvZiBiZXJyeSBjb21wb3RlIG9yIGNob2NvbGF0ZSBjaGlwcy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUm9zc2kncyBCcmVha2Zhc3QgV3JhcFwiLCBwcmljZTogXCIkOC45OVwiLCBkZXNjcjogXCJCYWNvbiwgc2NyYW1ibGVkIGVnZ3MsIGFuZCBzZWFzb25lZCBwb3RhdG8gaGFzaCwgd3JhcHBlZCBpbiBhIHRvcnRpbGxhLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgYXBwZXRpemVySXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJQYWMtTWFuIFBvcGNvcm5cIiwgcHJpY2U6IFwiJDQuMjlcIiwgZGVzY3I6IFwiQnV0dGVyZWQgcG9wY29ybiB3aXRoIGEgc3BpY3kgY2hlZGRhciB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiR2FsYWdhIEdhcmxpYyBCcmVhZFwiLCBwcmljZTogXCIkNS45OVwiLCBkZXNjcjogXCJHYXJsaWMgYnJlYWQgc2VydmVkIHdpdGggbWFyaW5hcmEgZGlwcGluZyBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUG9uZyBQb3RhdG8gU2tpbnNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiUG90YXRvIHNraW5zIGxvYWRlZCB3aXRoIGNoZWVzZSwgYmFjb24sIGFuZCBzb3VyIGNyZWFtLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUZXRyaXMgVG9mdSBCaXRlc1wiLCBwcmljZTogXCIkNS40OVwiLCBkZXNjcjogXCJDcmlzcHkgdG9mdSBiaXRlcyB3aXRoIGEgc3dlZXQgY2hpbGkgZGlwcGluZyBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTHVkaWNvbG8gR3VhY2Ftb2xlXCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkZyZXNoIGd1YWNhbW9sZSBzZXJ2ZWQgd2l0aCB0b3J0aWxsYSBjaGlwcyBhbmQgc2Fsc2EuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRNTlQgUGl6emEgQml0ZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiTWluaSBwaXp6YSBiaXRlcyBidXJzdGluZyB3aXRoIGNoZWVzeSBnb29kbmVzcyBhbmQgcGVwcGVyb25pLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbWFpbkNvdXJzZUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiTWFzdGVyIFN3b3JkIFN0ZWFrXCIsIHByaWNlOiBcIiQxNC45OVwiLCBkZXNjcjogXCJBIGp1aWN5IHN0ZWFrIHdpdGggZ2FybGljIGJ1dHRlciBhbmQgc2Vhc29uZWQgdmVnZXRhYmxlcy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTWVnYSBCdXJnZXJcIiwgcHJpY2U6IFwiJDEwLjk5XCIsIGRlc2NyOiBcIkEgZ2lhbnQgYnVyZ2VyIHN0YWNrZWQgd2l0aCB0b3BwaW5ncy5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3RyZWV0IEZpZ2h0ZXIgVGFjb3NcIiwgcHJpY2U6IFwiJDguOTlcIiwgZGVzY3I6IFwiVGFjb3Mgd2l0aCBhIHB1bmNoIG9mIGZsYXZvciwgY2hvb3NlIHlvdXIgZmlnaHRlci5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTGVnZW5kIG9mIFplbGRhIExhc2FnbmFcIiwgcHJpY2U6IFwiJDEyLjk5XCIsIGRlc2NyOiBcIkxheWVycyBvZiBwYXN0YSwgY2hlZXNlLCBhbmQgc2F2b3J5IG1lYXQgc2F1Y2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1ldHJvaWQgTWVhdGJhbGwgU3ViXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIGRlc2NyOiBcIkEgc3ViIHNhbmR3aWNoIHdpdGggbWVhdGJhbGxzLCBtYXJpbmFyYSwgYW5kIG1lbHRlZCBjaGVlc2UuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkRvbmtleSBLb25nIEZyaWVkIENoaWNrZW5cIiwgcHJpY2U6IFwiJDExLjk5XCIsIGRlc2NyOiBcIkNyaXNweSBmcmllZCBjaGlja2VuIHNlcnZlZCB3aXRoIGNvbGVzbGF3IGFuZCBiaXNjdWl0cy5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGRlc3NlcnRJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBhYy1NYW4gUGllXCIsIHByaWNlOiBcIiQ1LjQ5XCIsIGRlc2NyOiBcIkEganVpY3kgY2hlcnJ5IHBpZSB3aXRoIGEgbm9zdGFsZ2ljIGRlc2lnbi5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3BhY2UgSW52YWRlcnMgU3VuZGFlXCIsIHByaWNlOiBcIiQ2Ljk5XCIsIGRlc2NyOiBcIkljZSBjcmVhbSBvZiBjaG9pY2UgICAgIHdpdGggYWxpZW4tdGhlbWVkIHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGVlc2VjYWtlIEdhbGF4eVwiLCBwcmljZTogXCIkNS45OVwiLCBkZXNjcjogXCJDcmVhbXkgY2hlZXNlY2FrZSB3aXRoIGEgZ2FsYXh5LWluc3BpcmVkIHN3aXJsLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTdXBlciBNYXJpbyBUaXJhbWlzdVwiLCBwcmljZTogXCIkNi40OVwiLCBkZXNjcjogXCJBIGNsYXNzaWMgSXRhbGlhbiB0aXJhbWlzdSB3aXRoIGEgTWFyaW8gdHdpc3QuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlBpa2FjaHUncyBQYXJmYWl0XCIsIHByaWNlOiBcIiQ0Ljk5XCIsIGRlc2NyOiBcIkxheWVycyBvZiBmbGF2b3JlZCB5b2d1cnQsIGdyYW5vbGEsIGFuZCBmcmVzaCBiZXJyaWVzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJUZXRyaXMgVHJlYXRzXCIsIHByaWNlOiBcIjkuOTlcIiwgZGVzY3I6IFwiUGFzdHJ5IGJsb2NrIGxheWVycyB3aXRoIHN3ZWV0IHN1cnByaXNlcywgdG9wcGVkIHdpdGggcmFzcGJlcnJ5IHNhdWNlLlwifVxuICAgIF07XG5cbiAgICBzd2l0Y2ggKGNhdGVnb3J5TmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJiZXZlcmFnZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBiZXZlcmFnZUl0ZW1zO1xuICAgICAgICBjYXNlIFwiYnJlYWtmYXN0XCI6XG4gICAgICAgICAgICByZXR1cm4gYnJlYWtmYXN0SXRlbXM7XG4gICAgICAgIGNhc2UgXCJhcHBldGl6ZXJzXCI6XG4gICAgICAgICAgICByZXR1cm4gYXBwZXRpemVySXRlbXM7XG4gICAgICAgIGNhc2UgXCJtYWluIGNvdXJzZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBtYWluQ291cnNlSXRlbXM7XG4gICAgICAgIGNhc2UgXCJkZXNzZXJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIGRlc3NlcnRJdGVtcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdGh1YkxvZ28uc3ZnJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVTZWN0aW9uIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVNlY3Rpb24gfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHsgdGV4dDogXCJNZW51XCIsIGFjdGlvbjogY3JlYXRlTWVudVNlY3Rpb24sIHBhZ2U6IFwibWVudVwiIH0sXG4gICAgeyB0ZXh0OiBcIlBpeGVsIEJpdGVzXCIsIGFjdGlvbjogY3JlYXRlSG9tZVNlY3Rpb24sIHBhZ2U6IFwiaG9tZVwiIH0sXG4gICAgeyB0ZXh0OiBcIkNvbnRhY3RcIiwgYWN0aW9uOiBjcmVhdGVDb250YWN0U2VjdGlvbiwgcGFnZTogXCJjb250YWN0XCIgfSxcbl07XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmluaXRpYWxpemUoKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGluayh0ZXh0LCBhY3Rpb24sIHBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtzXCIpO1xuXG4gICAgaWYgKHRleHQgPT09IFwiUGl4ZWwgQml0ZXNcIikge1xuICAgICAgICBsaW5rLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSBwYWdlKSB7XG4gICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcImxpZ2h0Y29yYWxcIjtcbiAgICB9O1xuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlXCIsIHBhZ2UpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uKCkpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIG5hdmlnYXRpb25MaW5rcy5mb3JFYWNoKCh7IHRleHQsIGFjdGlvbiwgcGFnZSB9KSA9PiB7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJMaW5rKHRleHQsIGFjdGlvbiwgcGFnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG5cbiAgICBpZiAoIWN1cnJlbnRQYWdlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFBhZ2VcIiwgXCJob21lXCIpXG4gICAgfTtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSBcIm1lbnVcIikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IFwiY29udGFjdFwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lU2VjdGlvbigpKTtcbiAgICB9XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXJUZXh0XCI7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVzaWduZWQgJiBCdWlsdCBieSBEZWNoc2l0IE5hZXRzYXdhblwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVJlc3RhdXJhbnRcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmlkID0gKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChnaXRodWJMb2dvKTtcblxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=