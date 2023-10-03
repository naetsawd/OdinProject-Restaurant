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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Fonts */\n@font-face {\n    font-family: \"Arcade\";\n    src: url('fonts/04B_30__.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Crang\";\n    src: url('fonts/Crang.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Dogcia\";\n    src: url('fonts/dogica.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Cyberpunk\";\n    src: url('fonts/CyberpunkWaifus.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n/* General */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(\"images/background.gif\");\n    background-size: cover;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 15vh 80vh 5vh;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), \n        rgba(0, 0, 0, 0.25));\n}\n\n.whiteLine {\n    background-color: white;\n    width: 1200px;\n    height: 5px;\n    margin: 20px;\n}\n\n#pageContainer {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n}\n\n#pageTitle {\n    color: lightskyblue;\n    font-size: 40px;\n    font-family: \"Arcade\";\n}\n\n/* Header */\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    list-style-type: none;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.navLinks {\n    color: white;\n    font-family: \"Crang\";\n    font-size: 30px;\n    padding-bottom: 10px;\n    transition: transform 0.4s ease;\n}\n\n.navLinks:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    color: lightcoral;\n}\n\n#headerLogo {\n    font-size: 60px;\n}\n\n/* Home Section */\n#homePageTitle {\n    color: lightskyblue;\n    font-size: 100px;\n    font-family: \"Arcade\";\n}\n\n#homeDesc {\n    color: white;\n    font-family: \"Dogcia\";\n    font-size: 20px;\n    width: 75%;\n    line-height: 30px;\n    border: 1px solid white;\n    border-radius: 15px;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n/* Menu Section */\n#menuCategories {\n    border: 1px solid white;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    width: 80vw;\n    height: 50px;\n    background-color: rgba(0, 0, 0, 0.75);\n}\n\n.menuItemCategory {\n    display: flex;\n    color: white;\n    font-family: \"Dogcia\";\n    font-size: 15px;\n    align-items: center;\n    justify-content: center;\n}\n\n.menuItemCategory:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    color: lightcoral;\n}\n\n#menuItemsContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 1000px;\n    height: 400px;\n    color: white;\n    align-items: center;\n    justify-items: center;\n    margin-top: 20px;\n    gap: 20px;\n}\n\n.menuItem {\n    display: grid;\n    grid-template-rows: 20% 20% 10% 50%;\n    border: 1px solid white;\n    border-radius: 10px;\n    width: 300px;\n    height: 170px;\n    align-items: center;\n    justify-items: center;\n    font-family: \"Cyberpunk\";\n    font-size: 20px;\n    background-color: rgba(0, 0, 0, 0.75);\n    padding: 10px;\n}\n\n.menuItem > .whiteLine {\n    width: 200px;\n    height: 1px;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 3px;\n}\n\n.menuItemName {\n    color: aquamarine;\n}\n\n.menuItemPrice {\n    color: lightgoldenrodyellow;\n}\n\n.menuItemDescr {\n    color: plum;\n    margin: 10px;\n    padding: 0px;\n}\n\n/* Contact Section */\n#contactItemsContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    margin-top: 20px;\n    gap: 20px;\n    border: 1px solid white;\n    border-radius: 15px;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 25px;\n}\n\n.contactItemName {\n    font-family: \"Dogcia\";\n    font-size: 40px;\n    color: aquamarine;\n}\n\n.contactItemText {\n    font-family: \"Cyberpunk\";\n    font-size: 40px;\n    color: plum;\n}\n\n/* Footer */\n#footerContainer {\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#footerText {\n    color: white;\n    font-family: \"Cyberpunk\";\n    font-size: 20px;\n}\n\n#githubIcon {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n}\n\n"],"sourceRoot":""}]);
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
        contentContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuSection)());
    } else if (currentPage === "contact") {
        contentContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__.createContactSection)());
    } else {
        contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createHomeSection)());
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
    icon.src = (_images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_1__);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFxQztBQUNqRiw0Q0FBNEMsNkdBQWtDO0FBQzlFLDRDQUE0QywrR0FBbUM7QUFDL0UsNENBQTRDLGlJQUE0QztBQUN4Riw0Q0FBNEMseUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxxRkFBcUYsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLG1EQUFtRCw4QkFBOEIscUNBQXFDLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsNkJBQTZCLGtDQUFrQyx1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLDhCQUE4QixtQ0FBbUMsdUJBQXVCLHlCQUF5QixHQUFHLGdCQUFnQixpQ0FBaUMsNENBQTRDLHVCQUF1Qix5QkFBeUIsR0FBRyxzQkFBc0IsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxVQUFVLHVEQUF1RCw2QkFBNkIsR0FBRyxjQUFjLG9CQUFvQix3Q0FBd0MsZ0dBQWdHLEdBQUcsZ0JBQWdCLDhCQUE4QixvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLHlCQUF5QiwwQkFBMEIsOEJBQThCLEdBQUcsZ0JBQWdCLDBCQUEwQixzQkFBc0IsOEJBQThCLEdBQUcsNEJBQTRCLG9CQUFvQix5Q0FBeUMsNEJBQTRCLDBCQUEwQiw0QkFBNEIsS0FBSyxlQUFlLG1CQUFtQiw2QkFBNkIsc0JBQXNCLDJCQUEyQixzQ0FBc0MsR0FBRyxxQkFBcUIsNEJBQTRCLHNCQUFzQix3QkFBd0IsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsd0NBQXdDLDBCQUEwQix1QkFBdUIsOEJBQThCLEdBQUcsZUFBZSxtQkFBbUIsOEJBQThCLHNCQUFzQixpQkFBaUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDRDQUE0QyxHQUFHLHlDQUF5Qyw4QkFBOEIsMEJBQTBCLG9CQUFvQiw0Q0FBNEMsa0JBQWtCLG1CQUFtQiw0Q0FBNEMsR0FBRyx1QkFBdUIsb0JBQW9CLG1CQUFtQiw4QkFBOEIsc0JBQXNCLDBCQUEwQiw4QkFBOEIsR0FBRyw2QkFBNkIsNEJBQTRCLHNCQUFzQix3QkFBd0IsR0FBRyx5QkFBeUIsb0JBQW9CLHlDQUF5QyxvQkFBb0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIsNEJBQTRCLHVCQUF1QixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQiwwQ0FBMEMsOEJBQThCLDBCQUEwQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw0QkFBNEIsaUNBQWlDLHNCQUFzQiw0Q0FBNEMsb0JBQW9CLEdBQUcsNEJBQTRCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0JBQW9CLGtDQUFrQyxHQUFHLG9CQUFvQixrQkFBa0IsbUJBQW1CLG1CQUFtQixHQUFHLG1EQUFtRCxvQkFBb0IsNkJBQTZCLDhCQUE4Qiw4QkFBOEIsdUJBQXVCLGdCQUFnQiw4QkFBOEIsMEJBQTBCLDJDQUEyQyxvQkFBb0IsR0FBRyxzQkFBc0IsOEJBQThCLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0IsaUNBQWlDLHNCQUFzQixrQkFBa0IsR0FBRyxvQ0FBb0MsMkNBQTJDLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsaUJBQWlCLG1CQUFtQixpQ0FBaUMsc0JBQXNCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCO0FBQy8zTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hRMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBLE1BQU0scUNBQXFDO0FBQzNDLE1BQU0sOENBQThDO0FBQ3BELE1BQU07QUFDTjs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25ETztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQzRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBLFlBQVkseURBQWE7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEdPO0FBQ1A7QUFDQSxVQUFVLG9GQUFvRjtBQUM5RixVQUFVLHlGQUF5RjtBQUNuRyxVQUFVLCtFQUErRTtBQUN6RixVQUFVLGlHQUFpRztBQUMzRyxVQUFVLDJGQUEyRjtBQUNyRyxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVLDZHQUE2RztBQUN2SCxVQUFVLGtIQUFrSDtBQUM1SCxVQUFVLDBIQUEwSDtBQUNwSSxVQUFVLGdJQUFnSTtBQUMxSSxVQUFVLDRIQUE0SDtBQUN0SSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVLGdHQUFnRztBQUMxRyxVQUFVLHdHQUF3RztBQUNsSCxVQUFVLDZHQUE2RztBQUN2SCxVQUFVLHlHQUF5RztBQUNuSCxVQUFVLDRHQUE0RztBQUN0SCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVLGlIQUFpSDtBQUMzSCxVQUFVLHNGQUFzRjtBQUNoRyxVQUFVLDJHQUEyRztBQUNySCxVQUFVLDRHQUE0RztBQUN0SCxVQUFVLG9IQUFvSDtBQUM5SCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxVQUFVLDJGQUEyRjtBQUNyRyxVQUFVLDZHQUE2RztBQUN2SCxVQUFVLHFHQUFxRztBQUMvRyxVQUFVLHVHQUF1RztBQUNqSCxVQUFVLDRHQUE0RztBQUN0SCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QjtBQUNOO0FBQ0E7QUFDTTs7QUFFakQ7QUFDQSxNQUFNLHNCQUFzQixvREFBaUIsZ0JBQWdCO0FBQzdELE1BQU0sNkJBQTZCLG9EQUFpQixnQkFBZ0I7QUFDcEUsTUFBTSx5QkFBeUIsMERBQW9CLG1CQUFtQjtBQUN0RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyx3REFBaUI7QUFDdEQsTUFBTTtBQUNOLHFDQUFxQyw4REFBb0I7QUFDekQsTUFBTTtBQUNOLHFDQUFxQyx3REFBaUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFVOztBQUUxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzLzA0Ql8zMF9fLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0NyYW5nLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImZvbnRzL2RvZ2ljYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJmb250cy9DeWJlcnB1bmtXYWlmdXMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2JhY2tncm91bmQuZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRm9udHMgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyY2FkZVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDcmFuZ1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2djaWFcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi8qIEdlbmVyYWwgKi9cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggODB2aCA1dmg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCBcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cbi53aGl0ZUxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4jcGFnZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jcGFnZVRpdGxlIHtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LWZhbWlseTogXCJBcmNhZGVcIjtcbn1cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxufVxuXG4ubmF2TGlua3Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJDcmFuZ1wiO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuXG4ubmF2TGlua3M6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbiNoZWFkZXJMb2dvIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi8qIEhvbWUgU2VjdGlvbiAqL1xuI2hvbWVQYWdlVGl0bGUge1xuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LWZhbWlseTogXCJBcmNhZGVcIjtcbn1cblxuI2hvbWVEZXNjIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9nY2lhXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi8qIE1lbnUgU2VjdGlvbiAqL1xuI21lbnVDYXRlZ29yaWVzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLm1lbnVJdGVtQ2F0ZWdvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2NpYVwiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudUl0ZW1DYXRlZ29yeTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuI21lbnVJdGVtc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5tZW51SXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMTAlIDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkN5YmVycHVua1wiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51SXRlbSA+IC53aGl0ZUxpbmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubWVudUl0ZW1OYW1lIHtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLm1lbnVJdGVtUHJpY2Uge1xuICAgIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuLm1lbnVJdGVtRGVzY3Ige1xuICAgIGNvbG9yOiBwbHVtO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi8qIENvbnRhY3QgU2VjdGlvbiAqL1xuI2NvbnRhY3RJdGVtc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWN0SXRlbU5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2NpYVwiO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmNvbnRhY3RJdGVtVGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiBwbHVtO1xufVxuXG4vKiBGb290ZXIgKi9cbiNmb290ZXJDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNmb290ZXJUZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZ2l0aHViSWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTtBQUNWO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLFlBQVk7QUFDWjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseURBQThDO0lBQzlDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakM7NEJBQ3dCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsV0FBVztBQUNYO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBcmNhZGVcXFwiO1xcbiAgICBzcmM6IHVybCgnZm9udHMvMDRCXzMwX18udHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3JhbmdcXFwiO1xcbiAgICBzcmM6IHVybCgnZm9udHMvQ3JhbmcudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9nY2lhXFxcIjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL2RvZ2ljYS50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDeWJlcnB1bmtcXFwiO1xcbiAgICBzcmM6IHVybCgnZm9udHMvQ3liZXJwdW5rV2FpZnVzLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEdlbmVyYWwgKi9cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWFnZXMvYmFja2dyb3VuZC5naWZcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggODB2aCA1dmg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuXFxuLndoaXRlTGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTIwMHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jcGFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYWdlVGl0bGUge1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXJjYWRlXFxcIjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5uYXZMaW5rcyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmFuZ1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxufVxcblxcbi5uYXZMaW5rczpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuI2hlYWRlckxvZ28ge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi8qIEhvbWUgU2VjdGlvbiAqL1xcbiNob21lUGFnZVRpdGxlIHtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJBcmNhZGVcXFwiO1xcbn1cXG5cXG4jaG9tZURlc2Mge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9nY2lhXFxcIjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi8qIE1lbnUgU2VjdGlvbiAqL1xcbiNtZW51Q2F0ZWdvcmllcyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2djaWFcXFwiO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXRlZ29yeTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuI21lbnVJdGVtc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDIwJSAxMCUgNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3liZXJwdW5rXFxcIjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0gPiAud2hpdGVMaW5lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubWVudUl0ZW1OYW1lIHtcXG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5tZW51SXRlbVByaWNlIHtcXG4gICAgY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbn1cXG5cXG4ubWVudUl0ZW1EZXNjciB7XFxuICAgIGNvbG9yOiBwbHVtO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLyogQ29udGFjdCBTZWN0aW9uICovXFxuI2NvbnRhY3RJdGVtc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4uY29udGFjdEl0ZW1OYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2djaWFcXFwiO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uY29udGFjdEl0ZW1UZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDeWJlcnB1bmtcXFwiO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiBwbHVtO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4jZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlclRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3liZXJwdW5rXFxcIjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jZ2l0aHViSWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3RJdGVtcyA9IFtcbiAgICB7IG5hbWU6IFwiUGhvbmVcIiwgdGV4dDogXCIxMjMtNDU2LTc4OTBcIiB9LFxuICAgIHsgbmFtZTogXCJFbWFpbFwiLCB0ZXh0OiBcInBpeGVsbGJpdGVzQGVtYWlsLmNvbVwiIH0sXG4gICAgeyBuYW1lOiBcIkFkZHJlc3NcIiwgdGV4dDogXCIxMjMgUGl4ZWwgTGFuZSwgUGl4ZWwgTGFuZCwgUDFYM0xcIiB9XG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gY3JlYXRlUGFnZVRpdGxlKFwiQ29udGFjdFwiKTtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBjcmVhdGVXaGl0ZUxpbmUoKTtcblxuICAgIGNvbnRhY3RQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SXRlbXMoKSk7XG5cbiAgICByZXR1cm4gY29udGFjdFBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSh0aXRsZVRleHQpIHtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RUaXRsZS5pZCA9IFwicGFnZVRpdGxlXCI7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgIHJldHVybiBjb250YWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXRlTGluZSgpIHtcbiAgICBjb25zdCB3aGl0ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdoaXRlTGluZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVMaW5lXCIpO1xuICAgIHJldHVybiB3aGl0ZUxpbmU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJdGVtcygpIHtcbiAgICBjb25zdCBjb250YWN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5pZCA9IFwiY29udGFjdEl0ZW1zQ29udGFpbmVyXCI7XG5cbiAgICBjb250YWN0SXRlbXMuZm9yRWFjaCgoe25hbWUsIHRleHR9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gKG5hbWUgKyBcIjpcIik7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdCA9IChcImNvbnRhY3RJdGVtTmFtZVwiKTtcblxuICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtVGV4dC50ZXh0Q29udGVudCA9ICh0ZXh0KTtcbiAgICAgICAgaXRlbVRleHQuY2xhc3NMaXN0ID0gKFwiY29udGFjdEl0ZW1UZXh0XCIpO1xuXG4gICAgICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGNvbnRhY3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGFjdEl0ZW1zQ29udGFpbmVyO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lU2VjdGlvbigpIHtcbiAgICBjb25zdCBob21lUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhvbWVQYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBob21lVGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoXCJMZXZlbCBVcCBZb3VyIE5vc3RhbGdpYSFcIik7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG4gICAgY29uc3QgaG9tZURlc2MgPSBjcmVhdGVIb21lRGVzY3JpcHRpb24oKTtcblxuICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQod2hpdGVMaW5lKTtcbiAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRGVzYyk7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSh0aXRsZVRleHQpIHtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVUaXRsZS5pZCA9IFwiaG9tZVBhZ2VUaXRsZVwiO1xuICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gaG9tZVRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgaG9tZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVEZXNjLmlkID0gXCJob21lRGVzY1wiO1xuICAgIGhvbWVEZXNjLnRleHRDb250ZW50ID0gXCJQaXhlbCBCaXRlcyBpcyBhIG5vc3RhbGdpYyBkaW5pbmcgZGVzdGluYXRpb24gdGhhdCBcIiArXG4gICAgICAgIFwidHJhbnNwb3J0cyB5b3UgYmFjayB0byB0aGUgZ29sZGVuIGFnZSBvZiB2aWRlbyBnYW1lcy4gV2l0aCBcIiArXG4gICAgICAgIFwicGl4ZWxhdGVkIGRlY29yLCBjbGFzc2ljIGFyY2FkZSBnYW1lcywgYW5kIGEgbWVudSBpbnNwaXJlZCBcIiArXG4gICAgICAgIFwiYnkgaWNvbmljIGdhbWluZyBjaGFyYWN0ZXJzLCB0aGlzIGRpbmVyIGlzIGEgaGF2ZW4gZm9yIGdhbWVycyBcIiArXG4gICAgICAgIFwiYW5kIHJldHJvIGVudGh1c2lhc3RzIGFsaWtlLlwiO1xuICAgIHJldHVybiBob21lRGVzYztcbn0iLCJpbXBvcnQgeyBjYXRlZ29yeUxpc3RzIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgXCJCZXZlcmFnZXNcIixcbiAgICBcIkJyZWFrZmFzdFwiLFxuICAgIFwiQXBwZXRpemVyc1wiLFxuICAgIFwiTWFpbiBDb3Vyc2VzXCIsXG4gICAgXCJEZXNzZXJ0c1wiXG5dO1xuXG5jb25zdCBjYXRlZ29yeUVsZW1lbnRzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgICBjb25zdCBtZW51UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoXCJNZW51XCIpO1xuICAgIGNvbnN0IHdoaXRlTGluZSA9IGNyZWF0ZVdoaXRlTGluZSgpO1xuICAgIGNvbnN0IG1lbnVDYXRlZ29yaWVzID0gY3JlYXRlTWVudUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXNDb250YWluZXIuaWQgPSBcIm1lbnVJdGVtc0NvbnRhaW5lclwiO1xuXG4gICAgbWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yaWVzKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbXNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1lbnVQYWdlQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUodGl0bGVUZXh0KSB7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VGl0bGUuaWQgPSBcInBhZ2VUaXRsZVwiO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICByZXR1cm4gbWVudVRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaGl0ZUxpbmUoKSB7XG4gICAgY29uc3Qgd2hpdGVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aGl0ZUxpbmUuY2xhc3NMaXN0LmFkZChcIndoaXRlTGluZVwiKTtcbiAgICByZXR1cm4gd2hpdGVMaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtTmFtZVwiLCBpdGVtLm5hbWUpO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbVByaWNlXCIsIGl0ZW0ucHJpY2UpO1xuICAgIGNvbnN0IGl0ZW1EZXNjciA9IGNyZWF0ZU1lbnVJdGVtRWxlbWVudChcInBcIiwgXCJtZW51SXRlbURlc2NyXCIsIGl0ZW0uZGVzY3IpO1xuXG4gICAgY29uc3Qgd2hpdGVMaW5lID0gY3JlYXRlV2hpdGVMaW5lKCk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZCh3aGl0ZUxpbmUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXRlZ29yaWVzKGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBtZW51Q2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNhdGVnb3JpZXMuaWQgPSBcIm1lbnVDYXRlZ29yaWVzXCI7XG5cbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtZW50ID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KFwicFwiLCBcIm1lbnVJdGVtQ2F0ZWdvcnlcIiwgY2F0ZWdvcnlOYW1lKTtcblxuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICBjYXRlZ29yeUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2F0ZWdvcnlFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJsaWdodGNvcmFsXCI7XG4gICAgICAgICAgICBsZXQgY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnlOYW1lO1xuXG4gICAgICAgICAgICBjYXRlZ29yeUxpc3RzKGN1cnJlbnRDYXRlZ29yeSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2F0ZWdvcnlFbGVtZW50cy5wdXNoKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgICAgIG1lbnVDYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudUNhdGVnb3JpZXM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3J5TGlzdHMoY2F0ZWdvcnlOYW1lKSB7XG4gICAgY29uc3QgYmV2ZXJhZ2VJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIk1hcmlvIE1vY2hhXCIsIHByaWNlOiBcIiQ0Ljk5XCIsIGRlc2NyOiBcIkEgbW9jaGEgd2l0aCBhIHN1cGVyIG11c2hyb29tIHR3aXN0LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJQaXhlbCBQdW5jaFwiLCBwcmljZTogXCIkMy40OVwiLCBkZXNjcjogXCJBIGZydWl0eSBwdW5jaCB3aXRoIGEgcGl4ZWxhdGVkIHN1cnByaXNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJaZWxkYSdzIEVsaXhpclwiLCBwcmljZTogXCIkMi45OVwiLCBkZXNjcjogXCJBIGxlZ2VuZGFyeSBncmVlbiB0ZWEgYmxlbmQuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNvbmljIFNwZWVkc3RlclwiLCBwcmljZTogXCIkMy45OVwiLCBkZXNjcjogXCJBIGJsdWUgcmFzcGJlcnJ5IHNsdXNoaWUgd2l0aCBhIGhpbnQgb2YgbGltZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiMS1VUCBFbGl4aXJcIiwgcHJpY2U6IFwiJDMuNDlcIiwgZGVzY3I6IFwiQSByZWZyZXNoaW5nIGdyZWVuIHRlYSB3aXRoIGEgaGludCBvZiBtaW50LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJGaW5hbCBGYW50YXN5IEZyYXBwZVwiLCBwcmljZTogXCIkNC45OVwiLCBkZXNjcjogXCJBIGJsZW5kZWQgY29mZmVlIGZyYXBwZSB3aXRoIGEgbWFnaWNhbCB0b3VjaC5cIiB9XG4gICAgXTtcblxuICAgIGNvbnN0IGJyZWFrZmFzdEl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiUG93ZXItVXAgUGFuY2FrZXNcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiRmx1ZmZ5IHBhbmNha2VzIHdpdGggcG93ZXItdXAgc3lydXAgYW5kIGZydWl0IHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMdWlnaSdzIE9tZWxldHRlXCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkEgaGVhcnR5IG9tZWxldHRlIGZpbGxlZCB3aXRoIG11c2hyb29tcywgcGVwcGVycywgYW5kIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU29uaWMncyBTcGluYWNoIFNjcmFtYmxlXCIsIHByaWNlOiBcIiQ3Ljk5XCIsIGRlc2NyOiBcIlNjcmFtYmxlZCBlZ2dzIHdpdGggZnJlc2ggc3BpbmFjaCwgdG9tYXRvZXMsIGFuZCBmZXRhIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRG9ua2V5IEtvbmcgRnJlbmNoIFRvYXN0XCIsIHByaWNlOiBcIiQ3LjQ5XCIsIGRlc2NyOiBcIkZyZW5jaCB0b2FzdCB0b3BwZWQgd2l0aCBiYW5hbmFzLCBjYXJhbWVsIHNhdWNlLCBhbmQgd2hpcHBlZCBjcmVhbS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiU3BhY2UgSW52YWRlcnMgV2FmZmxlc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJDcmlzcHkgd2FmZmxlcyB3aXRoIGEgY2hvaWNlIG9mIGJlcnJ5IGNvbXBvdGUgb3IgY2hvY29sYXRlIGNoaXBzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJSb3NzaSdzIEJyZWFrZmFzdCBXcmFwXCIsIHByaWNlOiBcIiQ4Ljk5XCIsIGRlc2NyOiBcIkJhY29uLCBzY3JhbWJsZWQgZWdncywgYW5kIHNlYXNvbmVkIHBvdGF0byBoYXNoLCB3cmFwcGVkIGluIGEgdG9ydGlsbGEuXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lOiBcIlBhYy1NYW4gUG9wY29yblwiLCBwcmljZTogXCIkNC4yOVwiLCBkZXNjcjogXCJCdXR0ZXJlZCBwb3Bjb3JuIHdpdGggYSBzcGljeSBjaGVkZGFyIHR3aXN0LlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJHYWxhZ2EgR2FybGljIEJyZWFkXCIsIHByaWNlOiBcIiQ1Ljk5XCIsIGRlc2NyOiBcIkdhcmxpYyBicmVhZCBzZXJ2ZWQgd2l0aCBtYXJpbmFyYSBkaXBwaW5nIHNhdWNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJQb25nIFBvdGF0byBTa2luc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJQb3RhdG8gc2tpbnMgbG9hZGVkIHdpdGggY2hlZXNlLCBiYWNvbiwgYW5kIHNvdXIgY3JlYW0uXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRldHJpcyBUb2Z1IEJpdGVzXCIsIHByaWNlOiBcIiQ1LjQ5XCIsIGRlc2NyOiBcIkNyaXNweSB0b2Z1IGJpdGVzIHdpdGggYSBzd2VldCBjaGlsaSBkaXBwaW5nIHNhdWNlLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMdWRpY29sbyBHdWFjYW1vbGVcIiwgcHJpY2U6IFwiJDcuNDlcIiwgZGVzY3I6IFwiRnJlc2ggZ3VhY2Ftb2xlIHNlcnZlZCB3aXRoIHRvcnRpbGxhIGNoaXBzIGFuZCBzYWxzYS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiVE1OVCBQaXp6YSBCaXRlc1wiLCBwcmljZTogXCIkNi45OVwiLCBkZXNjcjogXCJNaW5pIHBpenphIGJpdGVzIGJ1cnN0aW5nIHdpdGggY2hlZXN5IGdvb2RuZXNzIGFuZCBwZXBwZXJvbmkuXCIgfVxuICAgIF07XG5cbiAgICBjb25zdCBtYWluQ291cnNlSXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJNYXN0ZXIgU3dvcmQgU3RlYWtcIiwgcHJpY2U6IFwiJDE0Ljk5XCIsIGRlc2NyOiBcIkEganVpY3kgc3RlYWsgd2l0aCBnYXJsaWMgYnV0dGVyIGFuZCBzZWFzb25lZCB2ZWdldGFibGVzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJNZWdhIEJ1cmdlclwiLCBwcmljZTogXCIkMTAuOTlcIiwgZGVzY3I6IFwiQSBnaWFudCBidXJnZXIgc3RhY2tlZCB3aXRoIHRvcHBpbmdzLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTdHJlZXQgRmlnaHRlciBUYWNvc1wiLCBwcmljZTogXCIkOC45OVwiLCBkZXNjcjogXCJUYWNvcyB3aXRoIGEgcHVuY2ggb2YgZmxhdm9yLCBjaG9vc2UgeW91ciBmaWdodGVyLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJMZWdlbmQgb2YgWmVsZGEgTGFzYWduYVwiLCBwcmljZTogXCIkMTIuOTlcIiwgZGVzY3I6IFwiTGF5ZXJzIG9mIHBhc3RhLCBjaGVlc2UsIGFuZCBzYXZvcnkgbWVhdCBzYXVjZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiTWV0cm9pZCBNZWF0YmFsbCBTdWJcIiwgcHJpY2U6IFwiJDkuOTlcIiwgZGVzY3I6IFwiQSBzdWIgc2FuZHdpY2ggd2l0aCBtZWF0YmFsbHMsIG1hcmluYXJhLCBhbmQgbWVsdGVkIGNoZWVzZS5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRG9ua2V5IEtvbmcgRnJpZWQgQ2hpY2tlblwiLCBwcmljZTogXCIkMTEuOTlcIiwgZGVzY3I6IFwiQ3Jpc3B5IGZyaWVkIGNoaWNrZW4gc2VydmVkIHdpdGggY29sZXNsYXcgYW5kIGJpc2N1aXRzLlwiIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZGVzc2VydEl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6IFwiUGFjLU1hbiBQaWVcIiwgcHJpY2U6IFwiJDUuNDlcIiwgZGVzY3I6IFwiQSBqdWljeSBjaGVycnkgcGllIHdpdGggYSBub3N0YWxnaWMgZGVzaWduLlwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJTcGFjZSBJbnZhZGVycyBTdW5kYWVcIiwgcHJpY2U6IFwiJDYuOTlcIiwgZGVzY3I6IFwiSWNlIGNyZWFtIG9mIGNob2ljZSAgICAgd2l0aCBhbGllbi10aGVtZWQgdG9wcGluZ3MuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkNoZWVzZWNha2UgR2FsYXh5XCIsIHByaWNlOiBcIiQ1Ljk5XCIsIGRlc2NyOiBcIkNyZWFteSBjaGVlc2VjYWtlIHdpdGggYSBnYWxheHktaW5zcGlyZWQgc3dpcmwuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlN1cGVyIE1hcmlvIFRpcmFtaXN1XCIsIHByaWNlOiBcIiQ2LjQ5XCIsIGRlc2NyOiBcIkEgY2xhc3NpYyBJdGFsaWFuIHRpcmFtaXN1IHdpdGggYSBNYXJpbyB0d2lzdC5cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiUGlrYWNodSdzIFBhcmZhaXRcIiwgcHJpY2U6IFwiJDQuOTlcIiwgZGVzY3I6IFwiTGF5ZXJzIG9mIGZsYXZvcmVkIHlvZ3VydCwgZ3Jhbm9sYSwgYW5kIGZyZXNoIGJlcnJpZXMuXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRldHJpcyBUcmVhdHNcIiwgcHJpY2U6IFwiOS45OVwiLCBkZXNjcjogXCJQYXN0cnkgYmxvY2sgbGF5ZXJzIHdpdGggc3dlZXQgc3VycHJpc2VzLCB0b3BwZWQgd2l0aCByYXNwYmVycnkgc2F1Y2UuXCJ9XG4gICAgXTtcblxuICAgIHN3aXRjaCAoY2F0ZWdvcnlOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcImJldmVyYWdlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGJldmVyYWdlSXRlbXM7XG4gICAgICAgIGNhc2UgXCJicmVha2Zhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBicmVha2Zhc3RJdGVtcztcbiAgICAgICAgY2FzZSBcImFwcGV0aXplcnNcIjpcbiAgICAgICAgICAgIHJldHVybiBhcHBldGl6ZXJJdGVtcztcbiAgICAgICAgY2FzZSBcIm1haW4gY291cnNlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIG1haW5Db3Vyc2VJdGVtcztcbiAgICAgICAgY2FzZSBcImRlc3NlcnRzXCI6XG4gICAgICAgICAgICByZXR1cm4gZGVzc2VydEl0ZW1zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSAnLi9pbWFnZXMvZ2l0aHViTG9nby5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVNlY3Rpb24gfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBuYXZpZ2F0aW9uTGlua3MgPSBbXG4gICAgeyB0ZXh0OiBcIk1lbnVcIiwgYWN0aW9uOiBjcmVhdGVNZW51U2VjdGlvbiwgcGFnZTogXCJtZW51XCIgfSxcbiAgICB7IHRleHQ6IFwiUGl4ZWwgQml0ZXNcIiwgYWN0aW9uOiBjcmVhdGVIb21lU2VjdGlvbiwgcGFnZTogXCJob21lXCIgfSxcbiAgICB7IHRleHQ6IFwiQ29udGFjdFwiLCBhY3Rpb246IGNyZWF0ZUNvbnRhY3RTZWN0aW9uLCBwYWdlOiBcImNvbnRhY3RcIiB9LFxuXTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGluayh0ZXh0LCBhY3Rpb24sIHBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtzXCIpO1xuXG4gICAgaWYgKHRleHQgPT09IFwiUGl4ZWwgQml0ZXNcIikge1xuICAgICAgICBsaW5rLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSBwYWdlKSB7XG4gICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcImxpZ2h0Y29yYWxcIjtcbiAgICB9O1xuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYWdlXCIsIHBhZ2UpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uKCkpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIG5hdmlnYXRpb25MaW5rcy5mb3JFYWNoKCh7IHRleHQsIGFjdGlvbiwgcGFnZSB9KSA9PiB7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXJMaW5rKHRleHQsIGFjdGlvbiwgcGFnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhZ2VcIik7XG5cbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVNlY3Rpb24oKSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVTZWN0aW9uKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXJUZXh0XCI7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVzaWduZWQgJiBCdWlsdCBieSBEZWNoc2l0IE5hZXRzYXdhblwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVJlc3RhdXJhbnRcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmlkID0gKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChnaXRodWJMb2dvKTtcblxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5pbml0aWFsaXplKCk7XG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==