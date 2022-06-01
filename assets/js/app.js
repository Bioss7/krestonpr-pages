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

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/masonryInit.js":
/*!**************************************!*\
  !*** ./src/assets/js/masonryInit.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// console.log(\"INIT\");\n// window.addEventListener(\"DOMContentLoaded\", function() {\n//     const grid = document.querySelector('.team__grid-masonry');\n//     const masonry = new Masonry(grid, {\n//         itemSelector: '.team__item',\n//         // layoutMode: 'fitRows',\n//         // percentPosition: true, \n//         // originLeft: false\n//     });\n// });\n\n//# sourceURL=webpack:///./src/assets/js/masonryInit.js?");

/***/ }),

/***/ "./src/assets/js/mobileDropdown.js":
/*!*****************************************!*\
  !*** ./src/assets/js/mobileDropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasSubnav = document.querySelectorAll('.nav-menu__link.has-subnav');\nvar hasBody = document.body;\nhasSubnav.forEach(function (item) {\n  return item.addEventListener('click', function (event) {\n    if (hasBody.classList.contains('show-sidebar')) {\n      var $this = event.currentTarget;\n      var subnavMenu = $this.nextElementSibling; // $this.classList.toggle('open');\n\n      if (!$this.classList.contains('open')) {\n        $this.classList.add('open');\n        setTimeout(function () {}, 1);\n      } else {\n        subnavMenu.removeAttribute('style');\n        setTimeout(function () {\n          $this.classList.remove('open');\n        }, 1);\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/assets/js/mobileDropdown.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var burger = document.getElementById('sidebarToggle');\nvar sidebar = document.getElementById('sidebar');\nvar page = document.getElementById('page');\nvar body = document.body;\nburger.addEventListener('click', function (event) {\n  if (body.classList.contains('show-sidebar')) {\n    closeSidebar();\n  } else {\n    showSidebar();\n  }\n});\n\nfunction showSidebar() {\n  var mask = document.createElement('div');\n  mask.classList.add('page__mask');\n  mask.addEventListener('click', closeSidebar);\n  page.appendChild(mask);\n  sidebar.classList.add('sidebar');\n  setTimeout(function () {\n    body.classList.add('show-sidebar');\n  }, 200);\n}\n\nfunction closeSidebar() {\n  body.classList.remove('show-sidebar');\n  document.querySelector('.page__mask').remove();\n  setTimeout(function () {\n    sidebar.classList.remove('sidebar');\n  }, 200);\n}\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/tabs.js":
/*!*******************************!*\
  !*** ./src/assets/js/tabs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var tabsBtn = document.querySelectorAll(\".tabs-ui-nav__item\");\nvar tabsItems = document.querySelectorAll(\".tabs-ui__content\");\ntabsBtn.forEach(onTabClick);\n\nfunction onTabClick(item) {\n  item.addEventListener(\"click\", function () {\n    var currentBtn = item;\n    var tabId = currentBtn.getAttribute(\"data-tab\");\n    var currentTab = document.querySelector(tabId);\n\n    if (!currentBtn.classList.contains('active')) {\n      tabsBtn.forEach(function (item) {\n        item.classList.remove('active');\n      });\n      tabsItems.forEach(function (item) {\n        item.classList.remove('active');\n        currentTab.style.opacity = 0;\n      });\n      currentBtn.classList.add('active');\n      currentTab.classList.add('active');\n      setTimeout(function () {\n        currentTab.style.opacity = 1;\n      }, 200);\n    }\n  });\n} // document.querySelector('.tabs-ui-nav__item').click();\n\n//# sourceURL=webpack:///./src/assets/js/tabs.js?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/masonryInit.js ./src/assets/js/mobileDropdown.js ./src/assets/js/mobileNav.js ./src/assets/js/tabs.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Programming\\Projects\\UI\\krestonpr-ui\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! D:\\Programming\\Projects\\UI\\krestonpr-ui\\src\\assets\\js\\masonryInit.js */\"./src/assets/js/masonryInit.js\");\n__webpack_require__(/*! D:\\Programming\\Projects\\UI\\krestonpr-ui\\src\\assets\\js\\mobileDropdown.js */\"./src/assets/js/mobileDropdown.js\");\n__webpack_require__(/*! D:\\Programming\\Projects\\UI\\krestonpr-ui\\src\\assets\\js\\mobileNav.js */\"./src/assets/js/mobileNav.js\");\nmodule.exports = __webpack_require__(/*! D:\\Programming\\Projects\\UI\\krestonpr-ui\\src\\assets\\js\\tabs.js */\"./src/assets/js/tabs.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/masonryInit.js_./src/assets/js/mobileDropdown.js_./src/assets/js/mobileNav.js_./src/assets/js/tabs.js?");

/***/ })

/******/ });