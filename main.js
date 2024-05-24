/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactLoad: () => (/* binding */ contactLoad)\n/* harmony export */ });\nfunction contactLoad() {\n  const content = document.getElementById(\"content\");\n\n  const contactHeader = document.createElement(\"header\");\n  const contactHeaderNode = document.createTextNode(\"Contact\");\n  contactHeader.appendChild(contactHeaderNode);\n  content.appendChild(contactHeader);\n\n  const contact = document.createElement(\"div\");\n  const contactTextNode = document.createTextNode(\"Phone Number: 111-111-1111\");\n  const brNode = document.createElement(\"br\");\n  const emailTextNode = document.createTextNode(\"Email: support@gusteau.com\");\n  contact.appendChild(contactTextNode);\n  contact.appendChild(brNode);\n  contact.appendChild(emailTextNode);\n  content.appendChild(contact);\n\n  const css = document.createElement(\"style\");\n  css.textContent = `\n    #content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    #content header {\n      padding-top: 20px;\n    }\n\n    #content div {\n      width: 200px;\n    }\n  `;\n\n  document.head.appendChild(css);\n}\n\n//# sourceURL=webpack://restaurant-project/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoad: () => (/* binding */ homeLoad)\n/* harmony export */ });\nfunction homeLoad(){\n  const content = document.getElementById(\"content\");\n\n  const img = document.createElement(\"img\");\n  img.src = '/imgs/gusteau.png';\n  content.appendChild(img);\n\n  const headerText = document.createElement(\"header\");\n  const headerTextNode = document.createTextNode(\"Gusteau's Restaurant\");\n  headerText.appendChild(headerTextNode);\n  content.appendChild(headerText);\n\n  const homeText = document.createElement(\"div\");\n  const homeTextNode = document.createTextNode(\"Nam doloribus rerum est atque cupiditate quo distinctio accusantium aut tempore temporibus in dolor quibusdam! Ut debitis laudantium et minima quas non voluptates fuga. Et facilis perspiciatis ad veritatis rerum sed doloribus natus ad explicabo quae ut deleniti ratione aut inventore ullam. Et velit saepe ad reprehenderit facilis ut aspernatur recusandae eum sunt velit nam quae aspernatur.\");\n  homeText.appendChild(homeTextNode);\n  content.appendChild(homeText);\n\n  const css = document.createElement(\"style\");\n  css.textContent = `\n    #content {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    #content img {\n      height: 300px;\n      padding-top: 30px;\n      padding-bottom: 18px;\n    }\n\n    #content header {\n      font-size: 30px;\n      padding-bottom: 15px;\n    }\n\n    #content div {\n      text-align: left;\n      border: 1px solid black;\n      width: 500px;\n      padding: 1em;\n    }\n  `;\n\n  document.head.appendChild(css);\n}\n\n\n//# sourceURL=webpack://restaurant-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nfunction clearContent()\n{\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n}\n\nhome.addEventListener(\"click\", function() {\n  clearContent();\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();\n});\n\nmenu.addEventListener(\"click\", function() {\n  clearContent();\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();\n});\n\ncontact.addEventListener(\"click\", function() {\n  clearContent();\n  (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactLoad)();\n})\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad() {\n  const content = document.getElementById(\"content\");\n\n  const gourmet_menu_img = document.createElement(\"img\");\n  gourmet_menu_img.src = '/imgs/gourmet_menu.png';\n\n  const little_chef_menu_img = document.createElement(\"img\");\n  little_chef_menu_img.src = '/imgs/little_chef_menu.png';\n\n  const remy_menu_img = document.createElement(\"img\");\n  remy_menu_img.src = '/imgs/remy_menu.png';\n\n  content.appendChild(remy_menu_img);\n  content.appendChild(little_chef_menu_img);\n  content.appendChild(gourmet_menu_img);\n\n  const css = document.createElement(\"style\");\n  css.textContent = `\n    #content {\n      display: flex;\n      flex-direction: row;\n    }\n    #content img {\n      height: 550px;\n    }\n  `;\n\n  document.head.appendChild(css);\n}\n\n//# sourceURL=webpack://restaurant-project/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;