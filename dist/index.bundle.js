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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n/* header,\\nfooter {\\n  background-color: rgb(209, 208, 206);\\n  height: 10vh;\\n} */\\n\\nbutton {\\n  margin-top: 15px;\\n  margin-right: 30px;\\n  padding: 5px 10px;\\n  flex-basis: auto;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 90%;\\n  margin: 0 auto;\\n  background-color: #e4e4e4;\\n  justify-content: space-around;\\n}\\n\\n.domAnime {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n\\n.item {\\n  margin: 20px 60px;\\n}\\n\\n.anime-title {\\n  width: 230px;\\n}\\n\\n.interaction {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n\\n.like {\\n  padding-top: 15px;\\n  flex-basis: auto;\\n}\\n\\n.like i {\\n  font-size: 1.5em;\\n}\\n\\n.not_liked {\\n  color: #bdbdbd;\\n}\\n\\n.liked {\\n  color: rgb(243, 71, 71);\\n}\\n\\n.num_like {\\n  text-align: center;\\n}\\n\\n.popup {\\n  position: fixed;\\n  z-index: 99;\\n  margin: 5vh 32.5vw;\\n  width: 35vw;\\n}\\n\\n.popup_container {\\n  display: flex;\\n  position: relative;\\n  top: 0;\\n  align-items: center;\\n  flex-direction: column;\\n  height: 90vh;\\n  width: 35vw;\\n  background-color: #272a31;\\n  color: white;\\n  border-radius: 8px;\\n}\\n\\n.popup_container > img {\\n  width: 18vw;\\n  margin-top: 5vh;\\n}\\n\\nh4 {\\n  font-size: 1.7em;\\n  width: 30vw;\\n  margin: 2.5vh auto;\\n  text-align: center;\\n}\\n\\n.info_container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 25vw;\\n  margin: 0 auto;\\n}\\n\\nul li {\\n  list-style: none;\\n  font-size: 1.1rem;\\n  margin-top: 10px;\\n}\\n\\nform {\\n  margin-top: 20px;\\n  width: 15vw;\\n}\\n\\ninput,\\ntextarea {\\n  width: 15vw;\\n}\\n\\n#close_popup {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anime-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://anime-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://anime-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anime-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calls.js":
/*!**********************!*\
  !*** ./src/calls.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newSession\": () => (/* binding */ newSession)\n/* harmony export */ });\n/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.js */ \"./src/requests.js\");\n/* harmony import */ var _displayAnime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAnime.js */ \"./src/displayAnime.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/displayLikes.js\");\n/* harmony import */ var _saveLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveLike.js */ \"./src/saveLike.js\");\n/* harmony import */ var _countAnime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countAnime.js */ \"./src/countAnime.js\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popUp.js */ \"./src/popUp.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable import/prefer-default-export */\n\n\n\n\n\n\n\nconst newSession = new _requests_js__WEBPACK_IMPORTED_MODULE_0__.default();\n\n// Get Top 9 Summer Anime From Jikan API\nnewSession.get('https://api.jikan.moe/v3/season/2021/summer')\n  .then((data) => {\n    (0,_displayAnime_js__WEBPACK_IMPORTED_MODULE_1__.default)(data);\n    (0,_countAnime_js__WEBPACK_IMPORTED_MODULE_4__.default)(data);\n\n    const btns = document.querySelectorAll('button');\n    btns.forEach((btn) => {\n      btn.addEventListener('click', _popUp_js__WEBPACK_IMPORTED_MODULE_5__.default);\n    });\n  })\n  .catch((err) => err);\n\n// Call Involvement API to display Likes\nnewSession.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes')\n  .then((response) => {\n    (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.default)(response);\n\n    const i = document.querySelectorAll('i');\n    i.forEach((heart) => {\n      heart.addEventListener('click', _saveLike_js__WEBPACK_IMPORTED_MODULE_3__.default);\n    });\n  })\n  .catch((err) => err);\n\n\n//# sourceURL=webpack://anime-capstone/./src/calls.js?");

/***/ }),

/***/ "./src/countAnime.js":
/*!***************************!*\
  !*** ./src/countAnime.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countAnime)\n/* harmony export */ });\nfunction countAnime(data) {\n  const allAnime = data.anime.length;\n  return allAnime;\n}\n\n//# sourceURL=webpack://anime-capstone/./src/countAnime.js?");

/***/ }),

/***/ "./src/displayAnime.js":
/*!*****************************!*\
  !*** ./src/displayAnime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayAnime)\n/* harmony export */ });\n/* harmony import */ var _countAnime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countAnime.js */ \"./src/countAnime.js\");\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener.js */ \"./src/listener.js\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.js */ \"./src/popUp.js\");\n\n\n\n\nfunction displayAnime(data) {\n  const totalAnime = (0,_countAnime_js__WEBPACK_IMPORTED_MODULE_0__.default)(data);\n  const container = document.querySelector('.container');\n  const domAnime = document.createElement('div');\n  const numberAnime = document.createElement('h3');\n  numberAnime.innerText = totalAnime;\n  domAnime.classList.add('domAnime');\n  const apiAnime = data.anime;\n\n  for (let i = 0; i < 9; i += 1) {\n    const item = document.createElement('div');\n    const button = document.createElement('button');\n    const like = document.createElement('div');\n    const interaction = document.createElement('div');\n    const title = document.createElement('h5');\n\n    like.classList.add('like');\n    interaction.classList.add('interaction');\n    interaction.id = i;\n    title.classList.add('anime-title');\n    item.classList.add('item');\n\n    like.innerHTML = '<i class=\"fas fa-heart not_liked\"></i>';\n    button.innerHTML = 'Comment';\n    title.innerHTML = `${apiAnime[i].title}`;\n    item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;\n\n    interaction.appendChild(button);\n    interaction.appendChild(like);\n    item.appendChild(title);\n    item.appendChild(interaction);\n    domAnime.appendChild(item);\n    container.appendChild(numberAnime);\n    container.appendChild(domAnime);\n  }\n  (0,_popUp_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  _listener_js__WEBPACK_IMPORTED_MODULE_1__.default.popUpEvent();\n}\n\n\n//# sourceURL=webpack://anime-capstone/./src/displayAnime.js?");

/***/ }),

/***/ "./src/displayLikes.js":
/*!*****************************!*\
  !*** ./src/displayLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayLikes)\n/* harmony export */ });\nfunction displayLikes(response) {\n  const items = document.querySelectorAll('.item');\n  response.forEach((res) => {\n    items.forEach((item) => {\n      if (item.firstChild.nextSibling.innerHTML === res.item_id) {\n        const i = item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild;\n        i.classList.remove('not_liked');\n        i.classList.add('liked');\n        item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.innerHTML += `<div class=\"num_like\">${res.likes}</div>`;\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://anime-capstone/./src/displayLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _calls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calls.js */ \"./src/calls.js\");\n// import _ from 'lodash';\n\n\n\n\n//# sourceURL=webpack://anime-capstone/./src/index.js?");

/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventsPopUp)\n/* harmony export */ });\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.js */ \"./src/popUp.js\");\n/* eslint-disable import/no-cycle */\n\n\nclass eventsPopUp {\n  static popUpEvent() {\n    const btn = document.querySelectorAll('button');\n    console.log(btn);\n    btn.forEach((e) => {\n      console.log(e);\n      e.addEventListener('click', () => {\n        (0,_popUp_js__WEBPACK_IMPORTED_MODULE_0__.default)(e.parentNode.id);\n      });\n    });\n  }\n\n  static closePopUp() {\n    const btn = document.getElementById('close_popup');\n\n    btn.addEventListener('click', () => {\n      btn.parentNode.parentNode.innerHTML = '';\n    });\n  }\n}\n\n\n//# sourceURL=webpack://anime-capstone/./src/listener.js?");

/***/ }),

/***/ "./src/popUp.js":
/*!**********************!*\
  !*** ./src/popUp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popUpAnime)\n/* harmony export */ });\n/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.js */ \"./src/requests.js\");\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener.js */ \"./src/listener.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nconst popUp = new _requests_js__WEBPACK_IMPORTED_MODULE_0__.default();\n\nfunction popUpAnime(index) {\n  popUp.get('https://api.jikan.moe/v3/season/2021/summer')\n    .then((data) => {\n      const apiAnime = data.anime;\n      const body = document.querySelector('.popup');\n      const container = document.createElement('div');\n      container.classList.add('popup_container');\n      container.innerHTML = `\n    <i class=\"fas fa-times\" id=\"close_popup\"></i>\n    <img src=\"${apiAnime[index].image_url}\">\n    <h4>${apiAnime[index].title}</h4>\n    <div class=\"info_container\">\n    <ul>\n    <li>Score: ${apiAnime[index].score}</li>\n    <li>Source: ${apiAnime[index].source}</li>\n    </ul>\n    <ul>\n    <li>Producers: ${apiAnime[index].producers[0].name}</li>\n    <li>Genres: ${apiAnime[index].genres[0].name}, ${apiAnime[index].genres[1].name}</li>\n    </ul>    \n    </div>\n    <form>\n    <h5>Add a comment</h5>\n    <input type=\"text\" placeholder=\"Name\" id=\"name\" required>\n    <textarea name=\"comment\" placeholder=\"Write your comment here\" required maxlength=\"500\"></textarea>    \n        <input type=\"submit\" value=\"Comment\" id=\"submit_btn\" class=\"submit_btn\"></input>    \n    </form>`;\n\n      body.appendChild(container);\n      _listener_js__WEBPACK_IMPORTED_MODULE_1__.default.closePopUp();\n    });\n}\n\n//# sourceURL=webpack://anime-capstone/./src/popUp.js?");

/***/ }),

/***/ "./src/requests.js":
/*!*************************!*\
  !*** ./src/requests.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Request)\n/* harmony export */ });\nclass Request {\n  async get(url) {\n    this.url = url;\n    const response = await fetch(url);\n    const res = await response.json();\n    return res;\n  }\n\n  async post(url, data) {\n    this.url = url;\n    this.data = data;\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n        'Accept': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    const res = await response.json();\n    return res;\n  }\n}\n\n//# sourceURL=webpack://anime-capstone/./src/requests.js?");

/***/ }),

/***/ "./src/saveLike.js":
/*!*************************!*\
  !*** ./src/saveLike.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveLike)\n/* harmony export */ });\n/* harmony import */ var _calls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calls.js */ \"./src/calls.js\");\n/* eslint-disable import/no-cycle */\n\n\nfunction saveLike(e) {\n  const animeTitle = e.target.parentElement.parentElement.previousSibling.innerHTML;\n  const data = {\n    item_id: animeTitle,\n  };\n\n  _calls_js__WEBPACK_IMPORTED_MODULE_0__.newSession.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes', data)\n    .then((saved) => saved)\n    .catch((err) => err);\n}\n\n//# sourceURL=webpack://anime-capstone/./src/saveLike.js?");

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