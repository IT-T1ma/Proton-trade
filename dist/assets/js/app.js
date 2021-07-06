/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/anchors.js":
/*!**********************************!*\
  !*** ./src/assets/js/anchors.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst anchors = document.querySelectorAll('.lift[href*=\"#\"]');\r\n\r\nfor (let anchor of anchors) {\r\n    anchor.addEventListener('click',  (e) => {\r\n    e.preventDefault();\r\n\r\n    const blockID = anchor.getAttribute('href');\r\n    document.querySelector('' +blockID).scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\"\r\n    });\r\n});\r\n\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/anchors.js?");

/***/ }),

/***/ "./src/assets/js/burger-menu.js":
/*!**************************************!*\
  !*** ./src/assets/js/burger-menu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst burgerTrigger = document.querySelector('.burger'),\r\n      burgerMenu = document.querySelector('.burger-menu'),\r\n      mainScreen = document.querySelector('.main-screen'),\r\n      header = document.querySelector('.header'),\r\n      burgerMenuLink = document.querySelectorAll('.burger-menu__link');\r\n\r\n    burgerTrigger.addEventListener('click', ()=> {\r\n        burgerTrigger.classList.toggle('active');\r\n\r\n        if (burgerTrigger.classList.contains('active')) {\r\n            document.body.style.overflow = \"hidden\";\r\n        } else {\r\n            document.body.style.overflow = \"\";\r\n        }\r\n\r\n        mainScreen.classList.toggle('hide');\r\n        header.classList.toggle('hide');\r\n\r\n        mainScreen.classList.toggle('show');\r\n        header.classList.toggle('show');\r\n    });\r\n       \r\n    for (let item of burgerMenuLink) {\r\n       item.addEventListener('click', (e) => {\r\n            if(item) {\r\n                burgerTrigger.classList.toggle('active');\r\n                document.body.style.overflow = \"\";\r\n                mainScreen.classList.toggle('hide');\r\n                header.classList.toggle('hide');\r\n                mainScreen.classList.toggle('show');\r\n                header.classList.toggle('show');\r\n            } else {\r\n                console.log('none');\r\n            }\r\n        });     \r\n    }        \n\n//# sourceURL=webpack:///./src/assets/js/burger-menu.js?");

/***/ }),

/***/ "./src/assets/js/successful.js":
/*!*************************************!*\
  !*** ./src/assets/js/successful.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nconst hideForm = document.querySelector('.contact-us'),\r\n      formSubmit = document.querySelector('.contact-us__form'),\r\n      successfulSend = document.querySelector('.successful-send'),\r\n      closeSuccessfulSend = document.querySelector('.successful-send__button'),\r\n      inputValue = document.querySelectorAll('input');\r\n\r\nformSubmit.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    hideForm.style.display = \"none\";\r\n    successfulSend.style.display = \"block\";\r\n});\r\n\r\ncloseSuccessfulSend.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    hideForm.style.display = \"block\";\r\n    successfulSend.style.display = \"none\";\r\n    \r\n    inputValue.forEach(e => {\r\n        e.value = \"\";\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/successful.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************!*\
  !*** multi ./src/assets/js/anchors.js ./src/assets/js/burger-menu.js ./src/assets/js/successful.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Тіма\\Desktop\\Proton-trade\\src\\assets\\js\\anchors.js */\"./src/assets/js/anchors.js\");\n__webpack_require__(/*! C:\\Users\\Тіма\\Desktop\\Proton-trade\\src\\assets\\js\\burger-menu.js */\"./src/assets/js/burger-menu.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Тіма\\Desktop\\Proton-trade\\src\\assets\\js\\successful.js */\"./src/assets/js/successful.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/anchors.js_./src/assets/js/burger-menu.js_./src/assets/js/successful.js?");

/***/ })

/******/ });