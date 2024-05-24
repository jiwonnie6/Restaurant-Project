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
    }

    #content header {
      padding-top: 20px;
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
  // img.src = 'imgs/gusteau.png';
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
    }

    #content img {
      height: 300px;
      padding-top: 30px;
      padding-bottom: 18px;
    }

    #content header {
      font-size: 30px;
      padding-bottom: 15px;
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
  // gourmet_menu_img.src = 'imgs/gourmet_menu.png';
  gourmet_menu_img.src = _imgs_gourmet_menu_png__WEBPACK_IMPORTED_MODULE_0__;

  const little_chef_menu_img = document.createElement("img");
  // little_chef_menu_img.src = 'imgs/little_chef_menu.png';
  little_chef_menu_img.src = _imgs_little_chef_menu_png__WEBPACK_IMPORTED_MODULE_1__;

  const remy_menu_img = document.createElement("img");
  // remy_menu_img.src = 'imgs/remy_menu.png';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ3lDOztBQUVsQztBQUNQOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDhDQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDhDO0FBQ1E7QUFDZDs7QUFFakM7QUFDUDs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFPOztBQUVoQztBQUNBO0FBQ0EsNkJBQTZCLHVEQUFXOztBQUV4QztBQUNBO0FBQ0Esc0JBQXNCLGdEQUFJOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ0E7QUFDTTs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiLENBQUM7O0FBRUQsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0TG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgY29udGFjdEhlYWRlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gIGNvbnRhY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlck5vZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlBob25lIE51bWJlcjogMTExLTExMS0xMTExXCIpO1xuICBjb25zdCBick5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IGVtYWlsVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkVtYWlsOiBzdXBwb3J0QGd1c3RlYXUuY29tXCIpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0Tm9kZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYnJOb2RlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbFRleHROb2RlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNzcy50ZXh0Q29udGVudCA9IGBcbiAgICAjY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY29udGVudCBoZWFkZXIge1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgZGl2IHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIGA7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xufSIsImltcG9ydCBndXN0ZWF1IGZyb20gXCIuL2ltZ3MvZ3VzdGVhdS5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVMb2FkKCl7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgLy8gaW1nLnNyYyA9ICdpbWdzL2d1c3RlYXUucG5nJztcbiAgaW1nLnNyYyA9IGd1c3RlYXU7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkd1c3RlYXUncyBSZXN0YXVyYW50XCIpO1xuICBoZWFkZXJUZXh0LmFwcGVuZENoaWxkKGhlYWRlclRleHROb2RlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWVUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmFtIGRvbG9yaWJ1cyByZXJ1bSBlc3QgYXRxdWUgY3VwaWRpdGF0ZSBxdW8gZGlzdGluY3RpbyBhY2N1c2FudGl1bSBhdXQgdGVtcG9yZSB0ZW1wb3JpYnVzIGluIGRvbG9yIHF1aWJ1c2RhbSEgVXQgZGViaXRpcyBsYXVkYW50aXVtIGV0IG1pbmltYSBxdWFzIG5vbiB2b2x1cHRhdGVzIGZ1Z2EuIEV0IGZhY2lsaXMgcGVyc3BpY2lhdGlzIGFkIHZlcml0YXRpcyByZXJ1bSBzZWQgZG9sb3JpYnVzIG5hdHVzIGFkIGV4cGxpY2FibyBxdWFlIHV0IGRlbGVuaXRpIHJhdGlvbmUgYXV0IGludmVudG9yZSB1bGxhbS4gRXQgdmVsaXQgc2FlcGUgYWQgcmVwcmVoZW5kZXJpdCBmYWNpbGlzIHV0IGFzcGVybmF0dXIgcmVjdXNhbmRhZSBldW0gc3VudCB2ZWxpdCBuYW0gcXVhZSBhc3Blcm5hdHVyLlwiKTtcbiAgaG9tZVRleHQuYXBwZW5kQ2hpbGQoaG9tZVRleHROb2RlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lVGV4dCk7XG5cbiAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjc3MudGV4dENvbnRlbnQgPSBgXG4gICAgI2NvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgaW1nIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIH1cblxuICAgICNjb250ZW50IGhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAjY29udGVudCBkaXYge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbiAgYDtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG59XG4iLCJpbXBvcnQgZ291cm1ldCBmcm9tIFwiLi9pbWdzL2dvdXJtZXRfbWVudS5wbmdcIjtcbmltcG9ydCBsaXR0bGVfY2hlZiBmcm9tIFwiLi9pbWdzL2xpdHRsZV9jaGVmX21lbnUucG5nXCI7XG5pbXBvcnQgcmVteSBmcm9tIFwiLi9pbWdzL3JlbXlfbWVudS5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGdvdXJtZXRfbWVudV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyBnb3VybWV0X21lbnVfaW1nLnNyYyA9ICdpbWdzL2dvdXJtZXRfbWVudS5wbmcnO1xuICBnb3VybWV0X21lbnVfaW1nLnNyYyA9IGdvdXJtZXQ7XG5cbiAgY29uc3QgbGl0dGxlX2NoZWZfbWVudV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyBsaXR0bGVfY2hlZl9tZW51X2ltZy5zcmMgPSAnaW1ncy9saXR0bGVfY2hlZl9tZW51LnBuZyc7XG4gIGxpdHRsZV9jaGVmX21lbnVfaW1nLnNyYyA9IGxpdHRsZV9jaGVmO1xuXG4gIGNvbnN0IHJlbXlfbWVudV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyByZW15X21lbnVfaW1nLnNyYyA9ICdpbWdzL3JlbXlfbWVudS5wbmcnO1xuICByZW15X21lbnVfaW1nLnNyYyA9IHJlbXk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChyZW15X21lbnVfaW1nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsaXR0bGVfY2hlZl9tZW51X2ltZyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ291cm1ldF9tZW51X2ltZyk7XG5cbiAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjc3MudGV4dENvbnRlbnQgPSBgXG4gICAgI2NvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgICNjb250ZW50IGltZyB7XG4gICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIH1cbiAgYDtcblxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgaG9tZUxvYWQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51TG9hZCB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGNvbnRhY3RMb2FkIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpXG57XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBob21lTG9hZCgpO1xufSk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgbWVudUxvYWQoKTtcbn0pO1xuXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRhY3RMb2FkKCk7XG59KVxuXG5ob21lTG9hZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=