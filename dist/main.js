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
      text-align: center;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ3lDOztBQUVsQztBQUNQOztBQUVBO0FBQ0EsWUFBWSw4Q0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDhDO0FBQ1E7QUFDZDs7QUFFakM7QUFDUDs7QUFFQTtBQUNBLHlCQUF5QixtREFBTzs7QUFFaEM7QUFDQSw2QkFBNkIsdURBQVc7O0FBRXhDO0FBQ0Esc0JBQXNCLGdEQUFJOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ0E7QUFDTTs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiLENBQUM7O0FBRUQsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0TG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgY29udGFjdEhlYWRlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gIGNvbnRhY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlck5vZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlBob25lIE51bWJlcjogMTExLTExMS0xMTExXCIpO1xuICBjb25zdCBick5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGNvbnN0IGVtYWlsVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkVtYWlsOiBzdXBwb3J0QGd1c3RlYXUuY29tXCIpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0Tm9kZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYnJOb2RlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbFRleHROb2RlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNzcy50ZXh0Q29udGVudCA9IGBcbiAgICAjY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIH1cblxuICAgICNjb250ZW50IGRpdiB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBgO1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzKTtcbn0iLCJpbXBvcnQgZ3VzdGVhdSBmcm9tIFwiLi9pbWdzL2d1c3RlYXUucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lTG9hZCgpe1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBndXN0ZWF1O1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlclRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHdXN0ZWF1J3MgUmVzdGF1cmFudFwiKTtcbiAgaGVhZGVyVGV4dC5hcHBlbmRDaGlsZChoZWFkZXJUZXh0Tm9kZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5hbSBkb2xvcmlidXMgcmVydW0gZXN0IGF0cXVlIGN1cGlkaXRhdGUgcXVvIGRpc3RpbmN0aW8gYWNjdXNhbnRpdW0gYXV0IHRlbXBvcmUgdGVtcG9yaWJ1cyBpbiBkb2xvciBxdWlidXNkYW0hIFV0IGRlYml0aXMgbGF1ZGFudGl1bSBldCBtaW5pbWEgcXVhcyBub24gdm9sdXB0YXRlcyBmdWdhLiBFdCBmYWNpbGlzIHBlcnNwaWNpYXRpcyBhZCB2ZXJpdGF0aXMgcmVydW0gc2VkIGRvbG9yaWJ1cyBuYXR1cyBhZCBleHBsaWNhYm8gcXVhZSB1dCBkZWxlbml0aSByYXRpb25lIGF1dCBpbnZlbnRvcmUgdWxsYW0uIEV0IHZlbGl0IHNhZXBlIGFkIHJlcHJlaGVuZGVyaXQgZmFjaWxpcyB1dCBhc3Blcm5hdHVyIHJlY3VzYW5kYWUgZXVtIHN1bnQgdmVsaXQgbmFtIHF1YWUgYXNwZXJuYXR1ci5cIik7XG4gIGhvbWVUZXh0LmFwcGVuZENoaWxkKGhvbWVUZXh0Tm9kZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuXG4gIGNvbnN0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgY3NzLnRleHRDb250ZW50ID0gYFxuICAgICNjb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cblxuICAgICNjb250ZW50IGltZyB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgaGVhZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgI2NvbnRlbnQgZGl2IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICB9XG4gIGA7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xufVxuIiwiaW1wb3J0IGdvdXJtZXQgZnJvbSBcIi4vaW1ncy9nb3VybWV0X21lbnUucG5nXCI7XG5pbXBvcnQgbGl0dGxlX2NoZWYgZnJvbSBcIi4vaW1ncy9saXR0bGVfY2hlZl9tZW51LnBuZ1wiO1xuaW1wb3J0IHJlbXkgZnJvbSBcIi4vaW1ncy9yZW15X21lbnUucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBnb3VybWV0X21lbnVfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZ291cm1ldF9tZW51X2ltZy5zcmMgPSBnb3VybWV0O1xuXG4gIGNvbnN0IGxpdHRsZV9jaGVmX21lbnVfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbGl0dGxlX2NoZWZfbWVudV9pbWcuc3JjID0gbGl0dGxlX2NoZWY7XG5cbiAgY29uc3QgcmVteV9tZW51X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHJlbXlfbWVudV9pbWcuc3JjID0gcmVteTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHJlbXlfbWVudV9pbWcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxpdHRsZV9jaGVmX21lbnVfaW1nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChnb3VybWV0X21lbnVfaW1nKTtcblxuICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNzcy50ZXh0Q29udGVudCA9IGBcbiAgICAjY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAjY29udGVudCBoZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAjY29udGVudCBpbWcge1xuICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICB9XG4gIGA7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhvbWVMb2FkIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKVxue1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgaG9tZUxvYWQoKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIG1lbnVMb2FkKCk7XG59KTtcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250YWN0TG9hZCgpO1xufSlcblxuaG9tZUxvYWQoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9