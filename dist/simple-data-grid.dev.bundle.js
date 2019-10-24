var SimpleDataGrid =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/simple-data-grid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\r\n    --sdg-border-color: #DADADA;\r\n    --sdg-background-color: #F8F8F8;\r\n    --sdg-text-color: #808080;\r\n    --sdg-font-family: Arial, Helvetica, sans-serif;\r\n    --sdg-border-style: solid;\r\n    --sdg-border-size: 1px;\r\n}\r\n\r\n.sdg-table {\r\n    border-collapse: collapse;\r\n    font-family: var(--sdg-font-family);\r\n    table-layout: fixed;\r\n    width: 100%;\r\n}\r\n\r\n.sdg-head {\r\n    color: var(--sdg-text-color);\r\n    background-color: var(--sdg-background-color);\r\n    font-size: 15px;\r\n}\r\n\r\nthead.sdg-head th {\r\n    border: var(--sdg-border-size);\r\n    border-color: var(--sdg-border-color);\r\n    border-style: var(--sdg-border-style);\r\n    padding: 5px 20px 5px 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.sdg-body {\r\n    font-size: 14px;\r\n}\r\n\r\ntbody.sdg-body td {\r\n    padding: 15px;\r\n    border: var(--sdg-border-size);\r\n    border-color: var(--sdg-border-color);\r\n    border-style: var(--sdg-border-style);\r\n}\r\n\r\ntbody.sdg-body tr:hover {\r\n    background-color: var(--sdg-border-color);\r\n}\r\n\r\n.sdg-foot {\r\n    background-color: var(--sdg-background-color);\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n}\r\n\r\ntfoot.sdg-foot td {\r\n    border: var(--sdg-border-size);\r\n    border-color: var(--sdg-border-color);\r\n    border-style: var(--sdg-border-style);\r\n}\r\n\r\n.sdg-pagination {\r\n    display: inline;\r\n}\r\n\r\n.sdg-pagination select {\r\n    float: left;\r\n    height: 31px;\r\n    width: 31px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    text-align-last: center;\r\n}\r\n\r\n.sdg-pagination select::-ms-expand {\r\n    display: none;\r\n}\r\n\r\n.sdg-pagination a {\r\n    border: var(--sdg-border-size);\r\n    border-color: var(--sdg-border-color);\r\n    border-style: var(--sdg-border-style);\r\n    color: var(--sdg-text-color);\r\n    float: left;\r\n    padding: 5px 10px 5px 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n.sdg-pagination a:hover:not(.active) {\r\n    background-color: var(--sdg-border-color);\r\n}\r\n\r\n.sdg-pagination-disabled {\r\n    color: currentColor;\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n    text-decoration: none;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\r\n    --sdg-border-color: #DADADA;\r\n    --sdg-border-style: solid;\r\n    --sdg-border-size: 1px;\r\n}\r\n\r\n.sdg-loader-div {\r\n    position: relative;\r\n    height: 136px;\r\n    width: 100%;\r\n}\r\n\r\n.sdg-loader {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 36px;\r\n    height: 64px;\r\n    width: 64px;\r\n}\r\n\r\n.sdg-loader div {\r\n    animation: sdg-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 32px 32px;\r\n}\r\n\r\n.sdg-loader div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: black;\r\n    margin: -3px 0 0 -3px;\r\n}\r\n\r\n.sdg-loader div:nth-child(1) {\r\n    animation-delay: -0.036s;\r\n}\r\n\r\n.sdg-loader div:nth-child(1):after {\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n\r\n.sdg-loader div:nth-child(2) {\r\n    animation-delay: -0.072s;\r\n}\r\n\r\n.sdg-loader div:nth-child(2):after {\r\n    top: 54px;\r\n    left: 45px;\r\n}\r\n\r\n.sdg-loader div:nth-child(3) {\r\n    animation-delay: -0.108s;\r\n}\r\n\r\n.sdg-loader div:nth-child(3):after {\r\n    top: 57px;\r\n    left: 39px;\r\n}\r\n\r\n.sdg-loader div:nth-child(4) {\r\n    animation-delay: -0.144s;\r\n}\r\n\r\n.sdg-loader div:nth-child(4):after {\r\n    top: 58px;\r\n    left: 32px;\r\n}\r\n\r\n.sdg-loader div:nth-child(5) {\r\n    animation-delay: -0.18s;\r\n}\r\n\r\n.sdg-loader div:nth-child(5):after {\r\n    top: 57px;\r\n    left: 25px;\r\n}\r\n  \r\n.sdg-loader div:nth-child(6) {\r\n    animation-delay: -0.216s;\r\n}\r\n\r\n.sdg-loader div:nth-child(6):after {\r\n    top: 54px;\r\n    left: 19px;\r\n}\r\n\r\n.sdg-loader div:nth-child(7) {\r\n    animation-delay: -0.252s;\r\n}\r\n\r\n.sdg-loader div:nth-child(7):after {\r\n    top: 50px;\r\n    left: 14px;\r\n}\r\n\r\n.sdg-loader div:nth-child(8) {\r\n    animation-delay: -0.288s;\r\n}\r\n  \r\n.sdg-loader div:nth-child(8):after {\r\n    top: 45px;\r\n    left: 10px;\r\n}\r\n  \r\n@keyframes sdg-loader {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n  ", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/builders/base-grid-builder.js":
/*!*******************************************!*\
  !*** ./src/builders/base-grid-builder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseGridBuilder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseGridBuilder =
/*#__PURE__*/
function () {
  function BaseGridBuilder(divId, pageSize, columns) {
    _classCallCheck(this, BaseGridBuilder);

    if (this.constructor == BaseGridBuilder) {
      throw new TypeError("Can not construct abstract class.");
    }

    this._mainDiv = document.getElementById(divId);
    this._mainDiv.innerHTML = '';
    this._columns = columns;
    this._pageSize = pageSize;
    this._dataCount = 0;
  }

  _createClass(BaseGridBuilder, [{
    key: "buildHeader",
    value: function buildHeader() {
      throw new Error('You have to implement the method \'buildHeader\'.');
    }
  }, {
    key: "buildBody",
    value: function buildBody(rebuild, responsePromise) {
      throw new Error('You have to implement the method \'buildBody\'.');
    }
  }, {
    key: "buildFooter",
    value: function buildFooter(paginationCallback) {
      throw new Error('You have to implement the method \'buildFooter\'.');
    }
  }]);

  return BaseGridBuilder;
}();



/***/ }),

/***/ "./src/builders/default-grid-builder.js":
/*!**********************************************!*\
  !*** ./src/builders/default-grid-builder.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultGridBuilder; });
/* harmony import */ var _base_grid_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-grid-builder */ "./src/builders/base-grid-builder.js");
/* harmony import */ var _data_loaders_default_data_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-loaders/default-data-loader */ "./src/data-loaders/default-data-loader.js");
/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/grid.css */ "./src/styles/grid.css");
/* harmony import */ var _styles_grid_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var DefaultGridBuilder =
/*#__PURE__*/
function (_BaseGridBuilder) {
  _inherits(DefaultGridBuilder, _BaseGridBuilder);

  function DefaultGridBuilder(divId, pageSize, columns) {
    var _this;

    _classCallCheck(this, DefaultGridBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultGridBuilder).call(this, divId, pageSize, columns));
    _this._table = document.createElement('table');

    _this._table.setAttribute('class', 'sdg-table');

    _this._mainDiv.appendChild(_this._table);

    return _this;
  }

  _createClass(DefaultGridBuilder, [{
    key: "buildHeader",
    value: function buildHeader() {
      var _this2 = this;

      var headers = this._table.querySelectorAll('.sdg-head');

      headers.forEach(function (header) {
        return _this2._table.removeChild(header);
      });
      var header = document.createElement('thead');
      header.setAttribute('class', 'sdg-head');

      this._table.append(header);

      var row = document.createElement('tr');
      header.appendChild(row);

      this._columns.forEach(function (column) {
        var th = document.createElement('th');
        row.appendChild(th);
        th.innerText = column.title;

        if (column.width) {
          th.style.width = column.width;
        }
      });
    }
  }, {
    key: "buildBody",
    value: function () {
      var _buildBody = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(rebuild, responsePromise) {
        var _this3 = this;

        var body, dataLoader, gridData, dataObjects;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = null;

                if (rebuild) {
                  body = this._table.querySelector('.sdg-body');
                  body.innerHTML = '';
                } else {
                  body = document.createElement('tbody');
                  body.setAttribute('class', 'sdg-body');

                  this._table.appendChild(body);
                }

                dataLoader = new _data_loaders_default_data_loader__WEBPACK_IMPORTED_MODULE_1__["default"](body);
                _context.next = 5;
                return dataLoader.loadData(responsePromise);

              case 5:
                gridData = _context.sent;
                dataObjects = gridData.data;
                this.dataCount = gridData.count;
                dataObjects.forEach(function (dataObject) {
                  var row = document.createElement('tr');
                  body.appendChild(row);

                  _this3._columns.forEach(function (column) {
                    var cell = document.createElement('td');
                    row.appendChild(cell);
                    var element = column.getElement(dataObject);
                    cell.appendChild(element);
                    cell.style.width = column.width;
                  });
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buildBody(_x, _x2) {
        return _buildBody.apply(this, arguments);
      }

      return buildBody;
    }()
  }, {
    key: "buildFooter",
    value: function buildFooter(paginationCallback) {
      var _this4 = this;

      var footers = this._table.querySelectorAll('.sdg-foot');

      footers.forEach(function (footer) {
        return _this4._table.removeChild(footer);
      });
      var footer = document.createElement('tfoot');
      footer.setAttribute('class', 'sdg-foot');

      this._table.appendChild(footer);

      var row = document.createElement('tr');
      footer.appendChild(row);
      var td = document.createElement('td');
      td.setAttribute('colspan', '100%');
      row.appendChild(td);

      this._buildPagination(td, paginationCallback);
    }
  }, {
    key: "_buildPagination",
    value: function _buildPagination(tdElement, paginationCallback) {
      var _this5 = this;

      var initPage = 1;
      var pagination = document.createElement('div');
      pagination.setAttribute('class', 'sdg-pagination');
      tdElement.appendChild(pagination);
      var firstPage = document.createElement('a');
      firstPage.setAttribute('data-element', 'first');
      firstPage.innerText = '❮❮';
      pagination.appendChild(firstPage);
      var previousPage = document.createElement('a');
      previousPage.setAttribute('data-element', 'previous');
      previousPage.innerText = '❮';
      pagination.appendChild(previousPage);
      var combobox = document.createElement('select');
      combobox.setAttribute('data-element', 'combobox');
      pagination.appendChild(combobox);

      for (var i = 1; i <= this.availablePageCount; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerText = i;
        combobox.appendChild(option);
      }

      var nextPage = document.createElement('a');
      nextPage.setAttribute('data-element', 'next');
      nextPage.innerText = '❯';
      pagination.appendChild(nextPage);
      var lastPage = document.createElement('a');
      lastPage.setAttribute('data-element', 'last');
      lastPage.innerText = '❯❯';
      pagination.appendChild(lastPage);

      this._refreshPagination(initPage, false);

      var finalPaginationCallback = function finalPaginationCallback(event) {
        var sender = event.target;
        if (sender.getAttribute('class') != null) return;
        var page = +sender.getAttribute('data-page');

        if (page === 0) {
          page = +sender.value;
        }

        _this5._refreshPagination(page, false);

        paginationCallback(page);
      };

      firstPage.addEventListener('click', function (event) {
        return finalPaginationCallback(event);
      });
      previousPage.addEventListener('click', function (event) {
        return finalPaginationCallback(event);
      });
      nextPage.addEventListener('click', function (event) {
        return finalPaginationCallback(event);
      });
      lastPage.addEventListener('click', function (event) {
        return finalPaginationCallback(event);
      });
      combobox.addEventListener('change', function (event) {
        return finalPaginationCallback(event);
      });
    }
  }, {
    key: "_refreshPagination",
    value: function _refreshPagination(currentPage, changedDataCount) {
      var firstPageNav = document.querySelector("div#".concat(this._mainDiv.id, " a[data-element=\"first\"]"));
      var previousPageNav = document.querySelector("div#".concat(this._mainDiv.id, " a[data-element=\"previous\"]"));
      var nextPageNav = document.querySelector("div#".concat(this._mainDiv.id, " a[data-element=\"next\"]"));
      var lastPageNav = document.querySelector("div#".concat(this._mainDiv.id, " a[data-element=\"last\"]"));
      var comboboxNav = document.querySelector("div#".concat(this._mainDiv.id, " select[data-element=\"combobox\"]"));
      firstPageNav.removeAttribute('class');
      previousPageNav.removeAttribute('class');
      nextPageNav.removeAttribute('class');
      lastPageNav.removeAttribute('class');

      if (changedDataCount) {
        comboboxNav.innerHTML = '';

        for (var i = 1; i <= this.availablePageCount; i++) {
          var option = document.createElement('option');
          option.setAttribute('value', i);
          option.innerText = i;
          comboboxNav.appendChild(option);
        }
      }

      comboboxNav.value = currentPage;

      if (!isNaN(firstPageNav.getAttribute('data-page')) || !isNaN(lastPageNav.getAttribute('data-page'))) {
        firstPageNav.setAttribute('data-page', 1);
        lastPageNav.setAttribute('data-page', this.availablePageCount);
      }

      if (currentPage == 1) {
        firstPageNav.setAttribute('class', 'sdg-pagination-disabled');
        previousPageNav.setAttribute('class', 'sdg-pagination-disabled');

        if (currentPage < this.availablePageCount) {
          nextPageNav.setAttribute('data-page', currentPage + 1);
        } else {
          nextPageNav.setAttribute('class', 'sdg-pagination-disabled');
          lastPageNav.setAttribute('class', 'sdg-pagination-disabled');
        }
      } else if (currentPage < this.availablePageCount) {
        previousPageNav.setAttribute('data-page', currentPage - 1);
        nextPageNav.setAttribute('data-page', currentPage + 1);
      } else {
        previousPageNav.setAttribute('data-page', currentPage - 1);
        nextPageNav.setAttribute('class', 'sdg-pagination-disabled');
        lastPageNav.setAttribute('class', 'sdg-pagination-disabled');
      }
    }
  }, {
    key: "dataCount",
    set: function set(value) {
      if (this._dataCount !== value) {
        this._dataCount = value;
        var comboboxNav = document.querySelector("div#".concat(this._mainDiv.id, " select[data-element=\"combobox\"]")); //document.getElementById('sdg-combobox');

        var currentPage = +comboboxNav.value;

        this._refreshPagination(currentPage, true);
      }
    }
  }, {
    key: "availablePageCount",
    get: function get() {
      var count = Math.ceil(this._dataCount / this._pageSize);
      return count === 0 ? 1 : count;
    }
  }]);

  return DefaultGridBuilder;
}(_base_grid_builder__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/columns/base-column.js":
/*!************************************!*\
  !*** ./src/columns/base-column.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseColumn; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseColumn =
/*#__PURE__*/
function () {
  function BaseColumn(title, width) {
    _classCallCheck(this, BaseColumn);

    if (this.constructor === BaseColumn) {
      throw new TypeError("Can not construct abstract class.");
    }

    this.title = title;
    this.width = width;
  }

  _createClass(BaseColumn, [{
    key: "getElement",
    value: function getElement(dataObject) {
      throw new Error('You have to implement the method \'getElement\'.');
    }
  }]);

  return BaseColumn;
}();



/***/ }),

/***/ "./src/columns/command-column.js":
/*!***************************************!*\
  !*** ./src/columns/command-column.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommandColumn; });
/* harmony import */ var _base_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-column */ "./src/columns/base-column.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command */ "./src/columns/command.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CommandColumn =
/*#__PURE__*/
function (_BaseColumn) {
  _inherits(CommandColumn, _BaseColumn);

  function CommandColumn(title, width, commands) {
    var _this;

    _classCallCheck(this, CommandColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommandColumn).call(this, title, width));
    if (!Array.isArray(commands) || !commands.every(function (x) {
      return x instanceof _command__WEBPACK_IMPORTED_MODULE_1__["default"];
    })) throw new Error('The \'commands\' argument must be an array and contain only Command types.');
    _this.commands = commands;
    return _this;
  }

  _createClass(CommandColumn, [{
    key: "getElement",
    value: function getElement(dataObject) {
      var span = document.createElement('span');
      this.commands.forEach(function (command) {
        var button = document.createElement('button');
        button.innerText = command.buttonText;

        if (command.isHyperlink) {
          button.addEventListener('click', function () {
            document.location.href = dataObject[command.objectField];
          });
        } else {
          button.addEventListener('click',
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(dataObject[command.objectField]);

                  case 2:
                    response = _context.sent;
                    if (response != null) command.afterExecuteCallback(response);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
        }

        span.appendChild(button);
      });
      return span;
    }
  }]);

  return CommandColumn;
}(_base_column__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/columns/command.js":
/*!********************************!*\
  !*** ./src/columns/command.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function Command(buttonText, objectField, isHyperlink, afterExecuteCallback) {
  _classCallCheck(this, Command);

  this.buttonText = buttonText;
  this.objectField = objectField;
  this.isHyperlink = isHyperlink;
  this.afterExecuteCallback = afterExecuteCallback;
};



/***/ }),

/***/ "./src/columns/value-column.js":
/*!*************************************!*\
  !*** ./src/columns/value-column.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValueColumn; });
/* harmony import */ var _base_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-column */ "./src/columns/base-column.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ValueColumn =
/*#__PURE__*/
function (_BaseColumn) {
  _inherits(ValueColumn, _BaseColumn);

  function ValueColumn(title, objectField, width) {
    var _this;

    _classCallCheck(this, ValueColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValueColumn).call(this, title, width));
    _this.objectField = objectField;
    return _this;
  }

  _createClass(ValueColumn, [{
    key: "getElement",
    value: function getElement(dataObject) {
      var span = document.createElement('span');
      span.innerText = dataObject[this.objectField];
      return span;
    }
  }]);

  return ValueColumn;
}(_base_column__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/data-loaders/base-data-loader.js":
/*!**********************************************!*\
  !*** ./src/data-loaders/base-data-loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseDataLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseDataLoader =
/*#__PURE__*/
function () {
  function BaseDataLoader(elementToLoad) {
    _classCallCheck(this, BaseDataLoader);

    if (this.constructor == BaseDataLoader) {
      throw new TypeError("Can not construct abstract class.");
    }

    this._elementToLoad = elementToLoad;
  }

  _createClass(BaseDataLoader, [{
    key: "loadData",
    value: function loadData(responsePromise) {
      throw new Error('You have to implement the method \'loadData\'.');
    }
  }]);

  return BaseDataLoader;
}();



/***/ }),

/***/ "./src/data-loaders/default-data-loader.js":
/*!*************************************************!*\
  !*** ./src/data-loaders/default-data-loader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultDataLoader; });
/* harmony import */ var _base_data_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-data-loader */ "./src/data-loaders/base-data-loader.js");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/loader.css */ "./src/styles/loader.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loader_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DefaultDataLoader =
/*#__PURE__*/
function (_BaseDataLoader) {
  _inherits(DefaultDataLoader, _BaseDataLoader);

  function DefaultDataLoader(elementToLoad) {
    _classCallCheck(this, DefaultDataLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultDataLoader).call(this, elementToLoad));
  }

  _createClass(DefaultDataLoader, [{
    key: "_addLoader",
    value: function _addLoader() {
      var dotCount = 8;
      var loaderRow = document.createElement('tr');
      loaderRow.setAttribute('data-element', 'loader');
      var loaderCell = document.createElement('td');
      loaderCell.setAttribute('colspan', '100%');
      loaderRow.appendChild(loaderCell);
      var loaderDiv = document.createElement('div');
      loaderDiv.setAttribute('class', 'sdg-loader-div');
      loaderCell.appendChild(loaderDiv);
      var loader = document.createElement('div');
      loader.setAttribute('class', 'sdg-loader');
      loaderDiv.append(loader);

      for (var i = 0; i < dotCount; i++) {
        var dot = document.createElement('div');
        loader.appendChild(dot);
      }

      this._elementToLoad.appendChild(loaderRow);
    }
  }, {
    key: "_removeLoader",
    value: function _removeLoader() {
      var loaderRow = this._elementToLoad.querySelector('tr[data-element="loader"]');

      this._elementToLoad.removeChild(loaderRow);
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(responsePromise) {
        var awaitedResponse, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._addLoader();

                _context.next = 3;
                return responsePromise;

              case 3:
                awaitedResponse = _context.sent;
                _context.next = 6;
                return awaitedResponse.json();

              case 6:
                json = _context.sent;

                this._removeLoader();

                return _context.abrupt("return", {
                  data: json.data,
                  count: json.count
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData(_x) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return DefaultDataLoader;
}(_base_data_loader__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/helpers/address-helper.js":
/*!***************************************!*\
  !*** ./src/helpers/address-helper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AddressHelper =
/*#__PURE__*/
function () {
  function AddressHelper() {
    _classCallCheck(this, AddressHelper);
  }

  _createClass(AddressHelper, null, [{
    key: "AddDataToAddress",
    value: function AddDataToAddress(pureAddress, data) {
      pureAddress += "?";
      var first = true;

      for (var prop in data) {
        if (!first) pureAddress += '&';
        pureAddress += "".concat(prop, "=").concat(data[prop]);
        first = false;
      }

      return pureAddress;
    }
  }]);

  return AddressHelper;
}();



/***/ }),

/***/ "./src/simple-data-grid.js":
/*!*********************************!*\
  !*** ./src/simple-data-grid.js ***!
  \*********************************/
/*! exports provided: Grid, Command, ValueColumn, CommandColumn, DefaultGridBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _columns_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns/command */ "./src/columns/command.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return _columns_command__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _columns_value_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns/value-column */ "./src/columns/value-column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueColumn", function() { return _columns_value_column__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _columns_command_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columns/command-column */ "./src/columns/command-column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandColumn", function() { return _columns_command_column__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _helpers_address_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/address-helper */ "./src/helpers/address-helper.js");
/* harmony import */ var _builders_base_grid_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builders/base-grid-builder */ "./src/builders/base-grid-builder.js");
/* harmony import */ var _builders_default_grid_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./builders/default-grid-builder */ "./src/builders/default-grid-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultGridBuilder", function() { return _builders_default_grid_builder__WEBPACK_IMPORTED_MODULE_5__["default"]; });

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Grid =
/*#__PURE__*/
function () {
  function Grid(divId, pageSize, columns, gridBuilder) {
    _classCallCheck(this, Grid);

    this._divId = divId;
    this._pageSize = pageSize;
    this._columns = columns;
    this._page = 1;
    this._pureDataSourceAddress = '';
    this._urlData = {
      startRange: this.startRange,
      endRange: this.endRange
    };

    if (gridBuilder && !(gridBuilder instanceof _builders_base_grid_builder__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      throw new TypeError('The gridBuilder parameter must be an instance of the BaseGridBuilder.');
    } else if (gridBuilder) {
      this._gridBuilder = gridBuilder;
    } else {
      this._gridBuilder = new _builders_default_grid_builder__WEBPACK_IMPORTED_MODULE_5__["default"](divId, pageSize, columns);
    }
  }

  _createClass(Grid, [{
    key: "_createGrid",
    value: function _createGrid(responsePromise) {
      var _this = this;

      this._gridBuilder.buildHeader();

      this._gridBuilder.buildBody(false, responsePromise);

      this._gridBuilder.buildFooter(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(page) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this._loadForPage(page);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "_rebuildBodyGrid",
    value: function _rebuildBodyGrid(responsePromise) {
      this._gridBuilder.buildBody(true, responsePromise);
    }
  }, {
    key: "_loadForPage",
    value: function () {
      var _loadForPage2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(page) {
        var address, responsePromise;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._page = page;
                this._urlData.startRange = this.startRange;
                this._urlData.endRange = this.endRange;
                address = _helpers_address_helper__WEBPACK_IMPORTED_MODULE_3__["default"].AddDataToAddress(this._pureDataSourceAddress, this._urlData);

                try {
                  responsePromise = fetch(address);

                  this._rebuildBodyGrid(responsePromise);
                } catch (exception) {
                  console.error("SimpleDataGrid exception: ".concat(exception));
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _loadForPage(_x2) {
        return _loadForPage2.apply(this, arguments);
      }

      return _loadForPage;
    }()
  }, {
    key: "init",
    value: function init(pureDataSourceAddress, additionalData) {
      var _this2 = this;

      this._pureDataSourceAddress = pureDataSourceAddress;

      if (additionalData != null && additionalData != undefined) {
        for (var prop in additionalData) {
          this._urlData[prop] = additionalData[prop];
        }
      }

      document.addEventListener('DOMContentLoaded',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var address, responsePromise;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  address = _helpers_address_helper__WEBPACK_IMPORTED_MODULE_3__["default"].AddDataToAddress(_this2._pureDataSourceAddress, _this2._urlData);
                  responsePromise = fetch(address);

                  _this2._createGrid(responsePromise);
                } catch (exception) {
                  console.error("SimpleDataGrid exception: ".concat(exception));
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  }, {
    key: "startRange",
    get: function get() {
      return this.endRange - this._pageSize;
    }
  }, {
    key: "endRange",
    get: function get() {
      return this._page * this._pageSize;
    }
  }]);

  return Grid;
}();


/***/ }),

/***/ "./src/styles/grid.css":
/*!*****************************!*\
  !*** ./src/styles/grid.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/grid.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/styles/loader.css":
/*!*******************************!*\
  !*** ./src/styles/loader.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/loader.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=simple-data-grid.dev.bundle.js.map