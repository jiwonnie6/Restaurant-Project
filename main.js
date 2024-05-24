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
/* harmony export */   contactLoad: () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad() {
  const content = document.getElementById("content");

  const contactHeader = document.createElement("header");
  const contactHeaderNode = document.createTextNode("Contact");
  contactHeader.appendChild(contactHeaderNode);
  content.appendChild(contactHeader);

  const contact = document.createElement("div");
  const contactTextNode = document.createTextNode("Phone Number: 111-111-1111");
  const brNode = document.createElement("br");
  const emailTextNode = document.createTextNode("Email: support@gusteau.com");
  contact.appendChild(contactTextNode);
  contact.appendChild(brNode);
  contact.appendChild(emailTextNode);
  content.appendChild(contact);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5em;
    }

    #content div {
      width: 200px;
    }
  `;

  document.head.appendChild(css);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeLoad: () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _imgs_gusteau_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/gusteau.png */ "./src/imgs/gusteau.png");


function homeLoad(){
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = _imgs_gusteau_png__WEBPACK_IMPORTED_MODULE_0__;
  content.appendChild(img);

  const headerText = document.createElement("header");
  const headerTextNode = document.createTextNode("Gusteau's Restaurant");
  headerText.appendChild(headerTextNode);
  content.appendChild(headerText);

  const homeText = document.createElement("div");
  const homeTextNode = document.createTextNode("Nam doloribus rerum est atque cupiditate quo distinctio accusantium aut tempore temporibus in dolor quibusdam! Ut debitis laudantium et minima quas non voluptates fuga. Et facilis perspiciatis ad veritatis rerum sed doloribus natus ad explicabo quae ut deleniti ratione aut inventore ullam. Et velit saepe ad reprehenderit facilis ut aspernatur recusandae eum sunt velit nam quae aspernatur.");
  homeText.appendChild(homeTextNode);
  content.appendChild(homeText);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1em;
    }

    #content img {
      height: 300px;
      margin-top: 25px;
      margin-bottom: 18px;
    }

    #content header {
      font-size: 30px;
      margin-bottom: 15px;
    }

    #content div {
      text-align: left;
      border: 1px solid black;
      width: 500px;
      padding: 1em;
    }
  `;

  document.head.appendChild(css);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuLoad: () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _imgs_gourmet_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/gourmet_menu.png */ "./src/imgs/gourmet_menu.png");
/* harmony import */ var _imgs_little_chef_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/little_chef_menu.png */ "./src/imgs/little_chef_menu.png");
/* harmony import */ var _imgs_remy_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/remy_menu.png */ "./src/imgs/remy_menu.png");




function menuLoad() {
  const content = document.getElementById("content");

  const gourmet_menu_img = document.createElement("img");
  gourmet_menu_img.src = _imgs_gourmet_menu_png__WEBPACK_IMPORTED_MODULE_0__;

  const little_chef_menu_img = document.createElement("img");
  little_chef_menu_img.src = _imgs_little_chef_menu_png__WEBPACK_IMPORTED_MODULE_1__;

  const remy_menu_img = document.createElement("img");
  remy_menu_img.src = _imgs_remy_menu_png__WEBPACK_IMPORTED_MODULE_2__;

  content.appendChild(remy_menu_img);
  content.appendChild(little_chef_menu_img);
  content.appendChild(gourmet_menu_img);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: row;
    }

    #content header {
      font-size: 30px;
    }
    
    #content img {
      height: 550px;
    }
  `;

  document.head.appendChild(css);
}

/***/ }),

/***/ "./src/imgs/gourmet_menu.png":
/*!***********************************!*\
  !*** ./src/imgs/gourmet_menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c644945d97091a0e7b98.png";

/***/ }),

/***/ "./src/imgs/gusteau.png":
/*!******************************!*\
  !*** ./src/imgs/gusteau.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53eb6df14cff03c79cd9.png";

/***/ }),

/***/ "./src/imgs/little_chef_menu.png":
/*!***************************************!*\
  !*** ./src/imgs/little_chef_menu.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc50ba42c18ea9f522f6.png";

/***/ }),

/***/ "./src/imgs/remy_menu.png":
/*!********************************!*\
  !*** ./src/imgs/remy_menu.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efcf57da8947ab69824b.png";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

function clearContent()
{
  const content = document.getElementById("content");
  content.innerHTML = "";
}

home.addEventListener("click", function() {
  clearContent();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();
});

menu.addEventListener("click", function() {
  clearContent();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();
});

contact.addEventListener("click", function() {
  clearContent();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactLoad)();
})

;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakN5Qzs7QUFFbEM7QUFDUDs7QUFFQTtBQUNBLFlBQVksOENBQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakQ4QztBQUNRO0FBQ2Q7O0FBRWpDO0FBQ1A7O0FBRUE7QUFDQSx5QkFBeUIsbURBQU87O0FBRWhDO0FBQ0EsNkJBQTZCLHVEQUFXOztBQUV4QztBQUNBLHNCQUFzQixnREFBSTs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNBO0FBQ007O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVELG1EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb250YWN0XCIpO1xuICBjb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJOb2RlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdFRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQaG9uZSBOdW1iZXI6IDExMS0xMTEtMTExMVwiKTtcbiAgY29uc3QgYnJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBjb25zdCBlbWFpbFRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJFbWFpbDogc3VwcG9ydEBndXN0ZWF1LmNvbVwiKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGV4dE5vZGUpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGJyTm9kZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxUZXh0Tm9kZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjc3MudGV4dENvbnRlbnQgPSBgXG4gICAgI2NvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICB9XG5cbiAgICAjY29udGVudCBkaXYge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgYDtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG59IiwiaW1wb3J0IGd1c3RlYXUgZnJvbSBcIi4vaW1ncy9ndXN0ZWF1LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUxvYWQoKXtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gZ3VzdGVhdTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR3VzdGVhdSdzIFJlc3RhdXJhbnRcIik7XG4gIGhlYWRlclRleHQuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dE5vZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOYW0gZG9sb3JpYnVzIHJlcnVtIGVzdCBhdHF1ZSBjdXBpZGl0YXRlIHF1byBkaXN0aW5jdGlvIGFjY3VzYW50aXVtIGF1dCB0ZW1wb3JlIHRlbXBvcmlidXMgaW4gZG9sb3IgcXVpYnVzZGFtISBVdCBkZWJpdGlzIGxhdWRhbnRpdW0gZXQgbWluaW1hIHF1YXMgbm9uIHZvbHVwdGF0ZXMgZnVnYS4gRXQgZmFjaWxpcyBwZXJzcGljaWF0aXMgYWQgdmVyaXRhdGlzIHJlcnVtIHNlZCBkb2xvcmlidXMgbmF0dXMgYWQgZXhwbGljYWJvIHF1YWUgdXQgZGVsZW5pdGkgcmF0aW9uZSBhdXQgaW52ZW50b3JlIHVsbGFtLiBFdCB2ZWxpdCBzYWVwZSBhZCByZXByZWhlbmRlcml0IGZhY2lsaXMgdXQgYXNwZXJuYXR1ciByZWN1c2FuZGFlIGV1bSBzdW50IHZlbGl0IG5hbSBxdWFlIGFzcGVybmF0dXIuXCIpO1xuICBob21lVGV4dC5hcHBlbmRDaGlsZChob21lVGV4dE5vZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcblxuICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNzcy50ZXh0Q29udGVudCA9IGBcbiAgICAjY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG5cbiAgICAjY29udGVudCBpbWcge1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cblxuICAgICNjb250ZW50IGhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgICNjb250ZW50IGRpdiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxuICBgO1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzKTtcbn1cbiIsImltcG9ydCBnb3VybWV0IGZyb20gXCIuL2ltZ3MvZ291cm1ldF9tZW51LnBuZ1wiO1xuaW1wb3J0IGxpdHRsZV9jaGVmIGZyb20gXCIuL2ltZ3MvbGl0dGxlX2NoZWZfbWVudS5wbmdcIjtcbmltcG9ydCByZW15IGZyb20gXCIuL2ltZ3MvcmVteV9tZW51LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgZ291cm1ldF9tZW51X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGdvdXJtZXRfbWVudV9pbWcuc3JjID0gZ291cm1ldDtcblxuICBjb25zdCBsaXR0bGVfY2hlZl9tZW51X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxpdHRsZV9jaGVmX21lbnVfaW1nLnNyYyA9IGxpdHRsZV9jaGVmO1xuXG4gIGNvbnN0IHJlbXlfbWVudV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByZW15X21lbnVfaW1nLnNyYyA9IHJlbXk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChyZW15X21lbnVfaW1nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsaXR0bGVfY2hlZl9tZW51X2ltZyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ291cm1ldF9tZW51X2ltZyk7XG5cbiAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjc3MudGV4dENvbnRlbnQgPSBgXG4gICAgI2NvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgaGVhZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgXG4gICAgI2NvbnRlbnQgaW1nIHtcbiAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgfVxuICBgO1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBob21lTG9hZCB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnVMb2FkIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgY29udGFjdExvYWQgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KClcbntcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGhvbWVMb2FkKCk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBtZW51TG9hZCgpO1xufSk7XG5cbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGFjdExvYWQoKTtcbn0pXG5cbmhvbWVMb2FkKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==