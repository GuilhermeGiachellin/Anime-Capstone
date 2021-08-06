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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #eee;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  margin-top: 15px;\\r\\n  margin-right: 30px;\\r\\n  padding: 10px 10px;\\r\\n  font-weight: bold;\\r\\n  flex-basis: auto;\\r\\n  background-color: rgba(84, 126, 224, 1);\\r\\n  border: 1px solid rgba(84, 126, 224, 1);\\r\\n  color: #fff;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.like i {\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  box-shadow: 2px 2px 5px rgba(84, 126, 224, 1);\\r\\n}\\r\\n\\r\\nbutton:hover,\\r\\n.like i:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  background: rgb(84, 126, 224);\\r\\n  background: linear-gradient(315deg, rgba(84, 126, 224, 1) 0%, rgba(84, 180, 224, 1) 33%, rgba(28, 197, 220, 1) 100%);\\r\\n  min-height: 5vh;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  list-style: none;\\r\\n  font-size: 1.1rem;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  margin-top: 0;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nnav ul li a:hover {\\r\\n  color: #4b5488;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin-top: 50px;\\r\\n  font-size: 3em;\\r\\n  margin-bottom: 100px;\\r\\n  background-color: rgba(84, 126, 224, 1);\\r\\n  color: #fff;\\r\\n  padding: 20px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background: rgb(84, 126, 224);\\r\\n  background: linear-gradient(315deg, rgba(84, 126, 224, 1) 0%, rgba(84, 180, 224, 1) 33%, rgba(28, 197, 220, 1) 100%);\\r\\n  height: 10vh;\\r\\n  margin-top: 100px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  margin-top: 4vh;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#logo a {\\r\\n  float: left;\\r\\n  font-weight: bolder;\\r\\n  color: tomato;\\r\\n}\\r\\n\\r\\n.diagonal {\\r\\n  background-color: #eee;\\r\\n  height: 10vh;\\r\\n  position: relative;\\r\\n  top: -50px;\\r\\n  z-index: 700;\\r\\n  transform: rotate(2deg);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.mark {\\r\\n  color: rgb(219, 72, 72);\\r\\n}\\r\\n\\r\\n.animLink {\\r\\n  text-decoration: none;\\r\\n  color: #272a31;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.animLink:hover {\\r\\n  color: rgb(219, 72, 72);\\r\\n}\\r\\n\\r\\n.domAnime {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  margin: 20px 30px;\\r\\n  padding: 20px 30px;\\r\\n  border: 1px solid #e4e4e4;\\r\\n  border-radius: 10px;\\r\\n  background-color: #fff;\\r\\n  transition: 0.1s;\\r\\n}\\r\\n\\r\\n.item:hover {\\r\\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\\r\\n}\\r\\n\\r\\n.anime-title {\\r\\n  width: 230px;\\r\\n}\\r\\n\\r\\n.interaction {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  padding-top: 15px;\\r\\n  flex-basis: auto;\\r\\n}\\r\\n\\r\\n.not_liked {\\r\\n  color: #bdbdbd;\\r\\n}\\r\\n\\r\\n.liked {\\r\\n  color: rgb(243, 71, 71);\\r\\n}\\r\\n\\r\\n.num_like {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 999;\\r\\n}\\r\\n\\r\\n.background {\\r\\n  position: absolute;\\r\\n  background-color: #555;\\r\\n  opacity: 0.5;\\r\\n  z-index: 1000;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.popup_container {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  height: 90vh;\\r\\n  width: 50vw;\\r\\n  margin: 5vh auto;\\r\\n  background-color: #272a31;\\r\\n  color: white;\\r\\n  border-radius: 8px;\\r\\n  overflow-y: scroll;\\r\\n  z-index: 1500;\\r\\n  animation: open_popup_animation 0.5s;\\r\\n}\\r\\n\\r\\n.popup_container > img {\\r\\n  width: 25vw;\\r\\n  margin-top: 5vh;\\r\\n}\\r\\n\\r\\nh4 {\\r\\n  font-size: 1.7em;\\r\\n  width: 40vw;\\r\\n  margin: 2.5vh auto;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.info_container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 25vw;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-bottom: 5vh;\\r\\n  width: 35vw;\\r\\n}\\r\\n\\r\\n.submit_btn {\\r\\n  padding: 0;\\r\\n  width: 6vw;\\r\\n  height: 4vh;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.submit_btn:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: #bdbdbd;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding-left: 10px;\\r\\n  width: 20vw;\\r\\n  height: 4vh;\\r\\n  margin: 10px auto;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  padding: 10px;\\r\\n  width: 20vw;\\r\\n  height: 10vh;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n#close_popup {\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 20px;\\r\\n}\\r\\n\\r\\n.comment_title {\\r\\n  font-size: 1.2rem;\\r\\n  margin: 50px auto 10px auto;\\r\\n}\\r\\n\\r\\n.comments_container {\\r\\n  width: 40vw;\\r\\n  margin: 20px auto;\\r\\n}\\r\\n\\r\\n.comment_li {\\r\\n  margin-top: 10px;\\r\\n  padding: 10px;\\r\\n  color: #272a31;\\r\\n  background-color: #e4e4e4;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.comment_li:hover {\\r\\n  background-color: #bdbdbd;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.comment_ul > li > p {\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.username_container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n@keyframes open_popup_animation {\\r\\n  0% { height: 0; }\\r\\n  100% { height: 90vh; }\\r\\n}\\r\\n\\r\\n@keyframes close_popup_animation {\\r\\n  0% { height: 90vh; }\\r\\n  100% { height: 0; }\\r\\n}\\r\\n\\r\\n@media (max-width: 1080px) {\\r\\n  .popup_container {\\r\\n    margin: 5vh 5vw;\\r\\n    width: 90vw;\\r\\n  }\\r\\n\\r\\n  .popup_container > img {\\r\\n    width: 65vw;\\r\\n    margin-top: 7vh;\\r\\n  }\\r\\n\\r\\n  .info_container {\\r\\n    width: 80vw;\\r\\n  }\\r\\n\\r\\n  h4 {\\r\\n    width: 80vw;\\r\\n  }\\r\\n\\r\\n  .info_container > ul {\\r\\n    width: 40vw;\\r\\n  }\\r\\n\\r\\n  .comment_title {\\r\\n    width: 80vw;\\r\\n  }\\r\\n\\r\\n  .comments_container {\\r\\n    width: 80vw;\\r\\n  }\\r\\n\\r\\n  form {\\r\\n    width: 80vw;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    padding-right: 10px;\\r\\n    width: 80vw;\\r\\n    height: 40px;\\r\\n  }\\r\\n\\r\\n  textarea {\\r\\n    padding: 10px;\\r\\n    width: 80vw;\\r\\n    height: 120px;\\r\\n  }\\r\\n\\r\\n  .submit_btn {\\r\\n    padding: 0;\\r\\n    width: 30vw;\\r\\n    height: 60px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anime-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _scripts_calls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/calls.js */ \"./src/scripts/calls.js\");\n// import _ from 'lodash';\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/index.js?");

/***/ }),

/***/ "./src/scripts/calls.js":
/*!******************************!*\
  !*** ./src/scripts/calls.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newSession\": () => (/* binding */ newSession)\n/* harmony export */ });\n/* harmony import */ var _requests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests.js */ \"./src/scripts/requests.js\");\n/* harmony import */ var _displayAnime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAnime.js */ \"./src/scripts/displayAnime.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/scripts/displayLikes.js\");\n/* harmony import */ var _countAnime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countAnime.js */ \"./src/scripts/countAnime.js\");\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listener.js */ \"./src/scripts/listener.js\");\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable import/prefer-default-export */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst newSession = new _requests_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n// Get Top 9 Summer Anime From Jikan API\r\nnewSession.get('https://api.jikan.moe/v3/season/2021/summer')\r\n  .then((data) => {\r\n    (0,_displayAnime_js__WEBPACK_IMPORTED_MODULE_1__.default)(data);\r\n    (0,_countAnime_js__WEBPACK_IMPORTED_MODULE_3__.countAnime)(data);\r\n\r\n    // Call Involvement API to display Likes\r\n    newSession.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes')\r\n      .then((response) => {\r\n        (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_2__.default)(response);\r\n        _listener_js__WEBPACK_IMPORTED_MODULE_4__.default.popUpEvent();\r\n        _listener_js__WEBPACK_IMPORTED_MODULE_4__.default.refresher();\r\n        _listener_js__WEBPACK_IMPORTED_MODULE_4__.default.setLike();\r\n      })\r\n      .catch((err) => err);\r\n  })\r\n  .catch((err) => err);\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/calls.js?");

/***/ }),

/***/ "./src/scripts/countAnime.js":
/*!***********************************!*\
  !*** ./src/scripts/countAnime.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countAnime\": () => (/* binding */ countAnime),\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter)\n/* harmony export */ });\nfunction countAnime(data) {\r\n  const allAnime = data.anime.length;\r\n  return allAnime;\r\n}\r\n\r\n// returns number of comments\r\nfunction commentCounter(data) {\r\n  const allComments = data.length;\r\n  return allComments;\r\n}\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/countAnime.js?");

/***/ }),

/***/ "./src/scripts/displayAnime.js":
/*!*************************************!*\
  !*** ./src/scripts/displayAnime.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayAnime)\n/* harmony export */ });\n/* harmony import */ var _countAnime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countAnime.js */ \"./src/scripts/countAnime.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\nasync function displayAnime(data) {\r\n  const totalAnime = await (0,_countAnime_js__WEBPACK_IMPORTED_MODULE_0__.countAnime)(data);\r\n  const container = document.querySelector('.container');\r\n  const domAnime = document.createElement('div');\r\n  const menu = document.querySelector('.show_num');\r\n  menu.innerText += ` (${totalAnime})`;\r\n  domAnime.classList.add('domAnime');\r\n  const apiAnime = await data.anime;\r\n\r\n  for (let i = 0; i < 9; i += 1) {\r\n    const item = document.createElement('div');\r\n    const button = document.createElement('button');\r\n    const like = document.createElement('div');\r\n    const interaction = document.createElement('div');\r\n    const title = document.createElement('h5');\r\n\r\n    like.classList.add('like');\r\n    interaction.classList.add('interaction');\r\n    interaction.id = i;\r\n    title.classList.add('anime-title');\r\n    item.classList.add('item');\r\n\r\n    like.innerHTML = '<i class=\"fas fa-heart not_liked\"></i>';\r\n    button.innerHTML = 'Comment';\r\n    title.innerHTML = `<a href=\"${apiAnime[i].url}\" class=\"animLink\">${apiAnime[i].title}</a>`;\r\n    item.innerHTML += `<img src='${apiAnime[i].image_url}'/>`;\r\n\r\n    interaction.appendChild(button);\r\n    interaction.appendChild(like);\r\n    item.appendChild(title);\r\n    item.appendChild(interaction);\r\n    domAnime.appendChild(item);\r\n    container.appendChild(domAnime);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/displayAnime.js?");

/***/ }),

/***/ "./src/scripts/displayLikes.js":
/*!*************************************!*\
  !*** ./src/scripts/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayLikes)\n/* harmony export */ });\nfunction displayLikes(response) {\r\n  const items = document.querySelectorAll('.item');\r\n  response.forEach((res) => {\r\n    items.forEach((item) => {\r\n      if (item.firstChild.nextSibling.innerHTML === res.item_id) {\r\n        const i = item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild;\r\n        i.classList.remove('not_liked');\r\n        i.classList.add('liked');\r\n        item.firstChild.nextSibling.nextSibling.firstChild.nextSibling.innerHTML += `<div class=\"num_like\">${res.likes}</div>`;\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/displayLikes.js?");

/***/ }),

/***/ "./src/scripts/listener.js":
/*!*********************************!*\
  !*** ./src/scripts/listener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventsPopUp)\n/* harmony export */ });\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.js */ \"./src/scripts/popUp.js\");\n/* harmony import */ var _calls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calls.js */ \"./src/scripts/calls.js\");\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showComments.js */ \"./src/scripts/showComments.js\");\n/* harmony import */ var _refresher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresher.js */ \"./src/scripts/refresher.js\");\n/* harmony import */ var _saveLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveLike.js */ \"./src/scripts/saveLike.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments';\r\n\r\nclass eventsPopUp {\r\n  // Open PopUp window\r\n  static popUpEvent() {\r\n    const btns = document.querySelectorAll('button');\r\n    btns.forEach((btn) => {\r\n      btn.addEventListener('click', (e) => {\r\n        const container = document.querySelector('.popup');\r\n        container.style = 'height: 100vh; width: 100vw;';\r\n        (0,_popUp_js__WEBPACK_IMPORTED_MODULE_0__.default)(e);\r\n      });\r\n    });\r\n  }\r\n\r\n  // Close PopUp window\r\n  static closePopUp() {\r\n    const btn = document.getElementById('close_popup');\r\n    btn.addEventListener('click', () => {\r\n      const animation = document.querySelector('.popup_container');\r\n      animation.style = 'animation: close_popup_animation 0.5s';\r\n      setTimeout(() => {\r\n        btn.parentNode.parentNode.innerHTML = '';\r\n        const container = document.querySelector('.popup');\r\n        container.style = '';\r\n      }, 450);\r\n    });\r\n  }\r\n\r\n  // Save like\r\n  static setLike() {\r\n    const i = document.querySelectorAll('i');\r\n    i.forEach((heart) => {\r\n      heart.addEventListener('click', _saveLike_js__WEBPACK_IMPORTED_MODULE_4__.default);\r\n    });\r\n  }\r\n\r\n  // Refresh like\r\n  static refresher() {\r\n    const likes = document.querySelectorAll('i');\r\n    likes.forEach((like) => {\r\n      like.addEventListener('click', _refresher_js__WEBPACK_IMPORTED_MODULE_3__.default);\r\n    });\r\n  }\r\n\r\n  // Form listner\r\n  static addComment(index) {\r\n    const form = document.querySelector('form');\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const input = document.querySelector('input').value;\r\n      const comment = document.querySelector('textarea').value;\r\n      const data = {\r\n        item_id: index,\r\n        username: input,\r\n        comment,\r\n      };\r\n      _calls_js__WEBPACK_IMPORTED_MODULE_1__.newSession.postComment(url, data);\r\n      document.querySelector('input').value = '';\r\n      document.querySelector('textarea').value = '';\r\n      setTimeout(() => {\r\n        (0,_showComments_js__WEBPACK_IMPORTED_MODULE_2__.default)(index);\r\n      }, 500);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/listener.js?");

/***/ }),

/***/ "./src/scripts/popUp.js":
/*!******************************!*\
  !*** ./src/scripts/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popUpAnime)\n/* harmony export */ });\n/* harmony import */ var _listener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener.js */ \"./src/scripts/listener.js\");\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showComments.js */ \"./src/scripts/showComments.js\");\n/* harmony import */ var _calls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calls.js */ \"./src/scripts/calls.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\n\r\nfunction popUpAnime(e) {\r\n  const index = e.target.parentNode.id;\r\n  _calls_js__WEBPACK_IMPORTED_MODULE_2__.newSession.get('https://api.jikan.moe/v3/season/2021/summer')\r\n    .then((data) => {\r\n      const apiAnime = data.anime;\r\n      const body = document.querySelector('.popup');\r\n      const background = document.createElement('div');\r\n      const container = document.createElement('div');\r\n      background.classList.add('background');\r\n      container.classList.add('popup_container');\r\n      container.innerHTML = `\r\n    <i class=\"fas fa-times\" id=\"close_popup\"></i>\r\n    <img src=\"${apiAnime[index].image_url}\">\r\n    <h4>${apiAnime[index].title}</h4>\r\n    <div class=\"info_container\">\r\n    <ul>\r\n    <li>Score: ${apiAnime[index].score}</li>\r\n    <li>Source: ${apiAnime[index].source}</li>\r\n    </ul>\r\n    <ul>\r\n    <li>Producers: ${apiAnime[index].producers[0].name}</li>\r\n    <li>Genres: ${apiAnime[index].genres[0].name}, ${apiAnime[index].genres[1].name}</li>\r\n    </ul>    \r\n    </div>\r\n    <h4 class=\"comment_title\">Comments (0): </h4>\r\n    <div class=\"comments_container\"></div>\r\n    <h4 class=\"comment_title\">Add a comment:</h4>\r\n    <form>    \r\n    <input type=\"text\" placeholder=\"Name\" id=\"name\" required>\r\n    <textarea name=\"comment\" placeholder=\"Write your comment here\" required maxlength=\"500\"></textarea>    \r\n        <input type=\"submit\" value=\"Comment\" id=\"submit_btn\" class=\"submit_btn\"></input>    \r\n    </form>`;\r\n\r\n      body.appendChild(background);\r\n      body.appendChild(container);\r\n\r\n      (0,_showComments_js__WEBPACK_IMPORTED_MODULE_1__.default)(index);\r\n      _listener_js__WEBPACK_IMPORTED_MODULE_0__.default.addComment(index);\r\n      _listener_js__WEBPACK_IMPORTED_MODULE_0__.default.closePopUp();\r\n    });\r\n}\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/popUp.js?");

/***/ }),

/***/ "./src/scripts/refresher.js":
/*!**********************************!*\
  !*** ./src/scripts/refresher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ refresher)\n/* harmony export */ });\nfunction refresher(e) {\r\n  const numLikes = document.querySelectorAll('.num_like');\r\n  let temp = e.target.nextSibling.innerHTML;\r\n  const title = e.target.parentElement.parentElement.previousSibling.innerHTML;\r\n  temp = Number(temp);\r\n  temp += 1;\r\n  numLikes.forEach((num) => {\r\n    const numTitle = num.parentElement.parentElement.previousSibling.innerHTML;\r\n    if (num.innerHTML === e.target.nextSibling.innerHTML && numTitle === title) {\r\n      num.innerHTML = temp;\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/refresher.js?");

/***/ }),

/***/ "./src/scripts/requests.js":
/*!*********************************!*\
  !*** ./src/scripts/requests.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Request)\n/* harmony export */ });\nclass Request {\r\n  async get(url) {\r\n    this.url = url;\r\n    const response = await fetch(url);\r\n    const res = await response.json();\r\n    return res;\r\n  }\r\n\r\n  async post(url, data) {\r\n    this.url = url;\r\n    this.data = data;\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n        'Access-Control-Allow-Origin': '*',\r\n      },\r\n      body: JSON.stringify(data),\r\n    });\r\n    const res = await response.json();\r\n    return res;\r\n  }\r\n\r\n  async postComment(url, data) {\r\n    this.url = url;\r\n    this.data = data;\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    });\r\n    const res = response;\r\n    return res;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/requests.js?");

/***/ }),

/***/ "./src/scripts/saveLike.js":
/*!*********************************!*\
  !*** ./src/scripts/saveLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveLike)\n/* harmony export */ });\n/* harmony import */ var _calls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calls.js */ \"./src/scripts/calls.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\nfunction saveLike(e) {\r\n  const animeTitle = e.target.parentElement.parentElement.previousSibling.innerHTML;\r\n  const data = {\r\n    item_id: animeTitle,\r\n  };\r\n\r\n  _calls_js__WEBPACK_IMPORTED_MODULE_0__.newSession.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/likes', data)\r\n    .then((saved) => saved)\r\n    .catch((err) => err);\r\n}\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/saveLike.js?");

/***/ }),

/***/ "./src/scripts/showComments.js":
/*!*************************************!*\
  !*** ./src/scripts/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showComments)\n/* harmony export */ });\n/* harmony import */ var _countAnime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countAnime.js */ \"./src/scripts/countAnime.js\");\n\r\n\r\n// test to see if the printed is equal to content\r\nfunction checkDOM(allComment) {\r\n  const checkLi = document.querySelectorAll('.comment_li');\r\n  if (allComment !== checkLi.length) {\r\n    return 'ok';\r\n  } return 'err';\r\n}\r\n\r\n// Check the DOM with the length of the recieved array\r\nasync function showComments(index) {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments?item_id=${index}`;\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const container = document.querySelector('.comments_container');\r\n      const ul = document.createElement('ul');\r\n      container.innerHTML = '';\r\n      container.appendChild(ul);\r\n      const allComment = (0,_countAnime_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(json);\r\n      if (allComment > 0) {\r\n        const title = document.querySelector('.comment_title');\r\n        title.innerHTML = `Comments (${allComment})`;\r\n      }\r\n      const check = checkDOM(allComment);\r\n      if (check === 'ok') {\r\n        for (let i = 0; i < allComment; i += 1) {\r\n          const li = document.createElement('li');\r\n          const div = document.createElement('div');\r\n          const user = document.createElement('h5');\r\n          const date = document.createElement('h5');\r\n          const commetary = document.createElement('p');\r\n\r\n          user.innerHTML = `${json[i].username}`;\r\n          date.innerHTML = `${json[i].creation_date}`;\r\n          commetary.innerHTML = `${json[i].comment}`;\r\n\r\n          li.classList.add('comment_li');\r\n          div.classList.add('username_container');\r\n          ul.classList.add('comment_ul');\r\n          user.classList.add('username');\r\n\r\n          div.appendChild(user);\r\n          div.appendChild(date);\r\n          li.appendChild(div);\r\n          li.appendChild(commetary);\r\n          ul.appendChild(li);\r\n        }\r\n      }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://anime-capstone/./src/scripts/showComments.js?");

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