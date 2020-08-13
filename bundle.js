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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/scss/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_type_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/type.png */ "./src/assets/type.png");
/* harmony import */ var _assets_phone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/phone.png */ "./src/assets/phone.png");
/* harmony import */ var _assets_icon_navigation_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icon-navigation.png */ "./src/assets/icon-navigation.png");
/* harmony import */ var _assets_icon_arrow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icon-arrow.png */ "./src/assets/icon-arrow.png");
/* harmony import */ var _assets_blob_green_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/blob-green (1).png */ "./src/assets/blob-green (1).png");
/* harmony import */ var _assets_blob_light_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/blob-light.png */ "./src/assets/blob-light.png");
/* harmony import */ var _assets_blob_yellow_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/blob-yellow.png */ "./src/assets/blob-yellow.png");
/* harmony import */ var _assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/arrow-down.png */ "./src/assets/arrow-down.png");
/* harmony import */ var _assets_Vector_34_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/Vector 34.png */ "./src/assets/Vector 34.png");
/* harmony import */ var _assets_Polygon_4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/Polygon 4.png */ "./src/assets/Polygon 4.png");
/* harmony import */ var _assets_close_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/close-icon.png */ "./src/assets/close-icon.png");
/* harmony import */ var _assets_icon_b_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icon-b.png */ "./src/assets/icon-b.png");
/* harmony import */ var _assets_arrow_btn_Stroke_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/arrow-btn (Stroke).png */ "./src/assets/arrow-btn (Stroke).png");
/* harmony import */ var _assets_Polygon_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/Polygon 6.png */ "./src/assets/Polygon 6.png");
/* harmony import */ var _assets_a1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/a1.png */ "./src/assets/a1.png");
/* harmony import */ var _assets_a3_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/a3.png */ "./src/assets/a3.png");
/* harmony import */ var _assets_a4_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/a4.png */ "./src/assets/a4.png");
/* harmony import */ var _assets_a5_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/a5.png */ "./src/assets/a5.png");
// Imports






















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_type_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_phone_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icon_navigation_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icon_arrow_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_blob_green_1_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_blob_light_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_blob_yellow_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_arrow_down_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_Vector_34_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_Polygon_4_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_close_icon_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_icon_b_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_arrow_btn_Stroke_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_Polygon_6_png__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_a1_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_a3_png__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_a4_png__WEBPACK_IMPORTED_MODULE_20__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_a5_png__WEBPACK_IMPORTED_MODULE_21__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\n\n*::after, *::before {\n  content: \"\";\n  box-sizing: border-box;\n}\n\ninput:focus, button:focus, textarea:focus {\n  outline: none;\n}\n\nimg, button, video {\n  user-select: none;\n}\n\n.wrapper-top {\n  background-color: #F7F6F4;\n}\n\n.container {\n  max-width: 1170px;\n  margin: 0 auto;\n}\n\n.header {\n  height: 80px;\n  border-bottom: 1px solid #c5c4c4;\n}\n.header__content {\n  position: relative;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header__left {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #c5c4c4;\n}\n.header__left__logo {\n  width: 32px;\n  height: 32px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n.header__left__logo2 {\n  width: 32px;\n  height: 32px;\n  margin-top: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  padding-left: 80px;\n}\n.header__middle {\n  padding: 0 200px;\n}\n.header__right p {\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Circe\";\n}\n.header__right p::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  padding-right: 15px;\n}\n.header__nav {\n  position: absolute;\n  right: 30px;\n  display: none;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 50%/cover;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n}\n.nav-link a {\n  text-decoration: none;\n  color: #000;\n  font-family: \"Circe\", Verdana;\n  margin-left: 50px;\n  position: relative;\n}\n.nav-link a::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  background-color: #c5c4c4;\n  transition: width 0.3s ease-in-out;\n}\n.nav-link a:hover:after, .nav-link a:focus:after {\n  width: 100%;\n}\n\n.main {\n  min-height: 600px;\n  position: relative;\n  padding: 20px;\n}\n.main__phone {\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: -100px;\n  width: 250px;\n  height: 50px;\n  background-color: #fff;\n  transform: rotate(270deg);\n}\n.main__phone p {\n  font-family: \"Circe\";\n  font-size: 16px;\n}\n.main__phone p::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  padding-left: 10px;\n}\n.main__content {\n  display: flex;\n  align-items: center;\n}\n.main__left p {\n  font-size: 14px;\n  font-family: \"Circe\", Verdana;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.main__left p::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  padding-right: 10px;\n}\n.main__left h1 {\n  max-width: 630px;\n  font-size: 48px;\n  font-family: \"Circe\", Verdana;\n  font-weight: normal;\n  line-height: 60px;\n  text-transform: uppercase;\n}\n.main__left h1 span {\n  color: #c5c4c4;\n}\n.main__left__bottom {\n  display: flex;\n  position: relative;\n}\n.main__left__round {\n  border-radius: 50%;\n  padding: 8px 15px;\n  border: 1px solid #000;\n}\n.main__left__active {\n  background-color: #000;\n  color: #fff;\n  margin-right: 100px;\n}\n.main__left__pos {\n  background-color: #fff;\n  z-index: 1;\n  overflow: hidden;\n  position: absolute;\n  left: 110px;\n}\n.main__right__logo {\n  width: 100%;\n}\n.main__img1 {\n  width: 200px;\n  height: 200px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 50%/cover;\n  position: absolute;\n  right: 350px;\n  top: 100px;\n  z-index: 1;\n}\n.main__img2 {\n  width: 200px;\n  height: 200px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 50%/cover;\n  position: absolute;\n  left: 400px;\n  bottom: -100px;\n  z-index: 1;\n}\n.main__img3 {\n  width: 100px;\n  height: 80px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") 50%/cover;\n  position: absolute;\n  left: 650px;\n  bottom: 200px;\n}\n.main__img3 {\n  width: 50px;\n  height: 100px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") 50%/cover;\n  position: absolute;\n  left: 950px;\n  bottom: 50px;\n}\n\n.scroll {\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n.scroll__image {\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid #000;\n  width: 32px;\n  height: 32px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") 50% no-repeat;\n}\n\n.section {\n  max-height: 800px;\n}\n.section__content {\n  position: relative;\n  display: flex;\n}\n.section__content__left {\n  position: absolute;\n  left: 0;\n  top: -80px;\n  max-width: 500px;\n  min-height: 250px;\n  background-color: #FEF5E7;\n  padding: 50px 70px;\n}\n.section__left {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.section__pretitle {\n  width: 32px;\n  height: 24px;\n  margin-bottom: 30px;\n}\n.section__text {\n  font-family: \"Circe\";\n  font-size: 28px;\n  line-height: 32px;\n  margin-bottom: 30px;\n}\n.section__author {\n  width: 100px;\n  height: 50px;\n}\n.section__right {\n  margin-top: 150px;\n  max-width: 520px;\n  height: 350px;\n  margin-left: 700px;\n}\n.section__text-info {\n  font-family: \"Circe\";\n  margin-top: 20px;\n  font-size: 18px;\n}\n.section__text-top {\n  font-weight: bold;\n}\n\n.info {\n  height: 200px;\n}\n.info__list {\n  margin-left: 150px;\n}\n.info__list__card {\n  max-width: 100px;\n  height: 24px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Circe\";\n  background-color: #BED2B7;\n  margin-bottom: 20px;\n}\n.info__list__title {\n  font-size: 28px;\n  max-width: 350px;\n  font-family: \"Circe\";\n  line-height: 38px;\n  margin-bottom: 20px;\n}\n.info__list__title span {\n  padding-top: 20px;\n  border-bottom: 2px solid #BED2B7;\n}\n.info__list__open {\n  display: flex;\n  align-items: center;\n  font-family: \"Circe\";\n  font-size: 18px;\n  user-select: none;\n  cursor: pointer;\n}\n.info__list__open::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n}\n\n.slider {\n  overflow: hidden;\n  position: relative;\n  top: -100px;\n  min-height: 700px;\n  padding: 80px;\n}\n.slider__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.slider__middle {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border: 7px solid #F9F9F7;\n  border-radius: 50%;\n  margin: 0 auto;\n  min-width: 650px;\n  min-height: 650px;\n  max-width: 700px;\n  max-height: 700px;\n}\n.slider__middle__info {\n  width: 84px;\n  height: 84px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") 50%/cover;\n  position: absolute;\n  left: 250px;\n  top: 170px;\n  z-index: 1;\n}\n.slider__card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  font-family: \"Circe\";\n  user-select: none;\n  width: 450px;\n  height: 180px;\n  max-width: 450px;\n  max-height: 180px;\n  background-color: #F7F6F4;\n  border-radius: 10px;\n}\n.slider__card div {\n  max-width: 300px;\n}\n.slider__card h3 {\n  font-size: 24px;\n}\n.slider__card img {\n  width: 72px;\n  height: 72px;\n}\n.slider__numbers {\n  display: flex;\n  align-items: center;\n  font-family: \"Circe\";\n}\n.slider__numbers-one {\n  display: flex;\n  flex-direction: column;\n  transform: translateY(15px);\n}\n.slider__numbers-two {\n  transform: translate(120px, 160px);\n}\n.slider__numbers-three {\n  transform: translate(540px, -240px);\n}\n.slider__numbers-four {\n  transform: translateY(-40px);\n  display: flex;\n  flex-direction: column;\n}\n.slider__numbers-five {\n  transform: translate(-530px, -240px);\n}\n.slider__numbers-six {\n  transform: translate(-115px, 140px);\n}\n.slider__numbers__num {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #BED2B7;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  color: #fff;\n}\n.slider__numbers__title {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.slider__numbers__round {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #EDEDED;\n  border-radius: 50%;\n}\n.slider__numbers__round-inner {\n  width: 8px;\n  height: 8px;\n  background-color: #BDBDBD;\n  border-radius: 50%;\n}\n.slider__active {\n  color: #BED2B7;\n  border: 1px solid #BED2B7;\n  border-radius: 20px;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.pos1 {\n  position: absolute;\n  right: 35%;\n  transition: right 0.8s;\n  background-color: #BED2B7;\n  color: #fff;\n}\n\n.pos2 {\n  right: -300px;\n  position: absolute;\n  transition: right 0.8s;\n}\n\n.pos3 {\n  position: absolute;\n  right: -700px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos4 {\n  position: absolute;\n  right: -1000px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos5 {\n  position: absolute;\n  right: 1400px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos6 {\n  right: 1400px;\n  position: absolute;\n  transition: right 0.8s;\n}\n\n.hide {\n  display: none;\n}\n\n.numbers {\n  width: 100%;\n}\n.numbers__block {\n  display: flex;\n  justify-content: space-between;\n}\n.numbers__block-one {\n  transform: translate(0, -320px);\n}\n.numbers__block-two {\n  transform: translate(0, 340px);\n}\n\n.image {\n  max-width: 1170px;\n  margin-right: 40px;\n  margin-left: 40px;\n  margin: 50px auto;\n}\n.image img {\n  width: 100%;\n}\n\n.popup {\n  margin: 20vh auto;\n  padding: 20px 40px;\n  max-width: 800px;\n  height: 450px;\n  border-radius: 10px;\n  background-color: #F7F6F4;\n  font-family: \"Circe\";\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n}\n.popup__wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n}\n.popup__top {\n  display: flex;\n  justify-content: flex-end;\n}\n.popup__top p {\n  color: #626377;\n  cursor: pointer;\n}\n.popup__top p::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  padding-left: 10px;\n}\n.popup__text {\n  margin-top: 30px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.popup__text p {\n  color: #626377;\n}\n.popup__form div {\n  display: flex;\n  justify-content: space-around;\n}\n.popup__input {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n  border: 1px solid #F7F6F4;\n  border-radius: 5px;\n  width: 275px;\n  height: 50px;\n  margin-right: 20px;\n  padding-left: 10px;\n}\n.popup__send {\n  background: #D6C38B;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  margin-top: 50px;\n  width: 260px;\n  height: 60px;\n  margin-left: calc(50% - 130px);\n  font-size: 18px;\n  cursor: pointer;\n}\n.popup__send::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  margin-right: 10px;\n  padding: 10px;\n  background-color: #DECFA2;\n}\n.popup__send::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  margin-left: 50px;\n}\n\n.list {\n  min-height: 500px;\n  margin-bottom: 50px;\n  overflow: hidden;\n}\n.list__content h2 {\n  font-size: 72px;\n  font-family: \"Circe\";\n  font-weight: normal;\n  text-align: center;\n}\n.list__others {\n  text-align: right;\n  font-family: \"Circe\";\n  margin-top: 20px;\n  margin-right: 150px;\n  color: #626377;\n  cursor: pointer;\n}\n.list__others::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  padding-left: 10px;\n}\n.list__slider {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.card {\n  height: 260px;\n  min-width: 230px;\n  max-width: 230px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 10px;\n  padding-top: 50px;\n  font-family: \"Circe\";\n  text-align: center;\n  transition: 0.3s linear;\n}\n.card:hover h3 {\n  font-size: 18px;\n  line-height: 25px;\n}\n.card:hover p {\n  font-size: 14px;\n}\n.card h3 {\n  line-height: 25px;\n  font-size: 0;\n}\n.card p {\n  margin-top: 10px;\n  font-size: 0;\n}\n.card__others {\n  cursor: pointer;\n  padding-top: 120px;\n}\n.card__others::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  padding-left: 10px;\n}\n.card-one {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") 50%/cover;\n}\n.card-one:hover {\n  background: #F7F6F4;\n}\n.card-two {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") 50%/cover;\n}\n.card-two:hover {\n  background: #F7F6F4;\n}\n.card-three {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") 50%/cover;\n}\n.card-three:hover {\n  background: #F7F6F4;\n}\n.card-four {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") 50%/cover;\n}\n.card-four:hover {\n  background: #F7F6F4;\n}\n.card-five {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") 50%/cover;\n}\n.card-five:hover {\n  background: #F7F6F4;\n}", "",{"version":3,"sources":["C:/Users/User/Documents/верстка макета 8/src/scss/main.scss","main.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;EACA,UAAA;ACJF;;ADOA;EACE,WAAA;EACA,sBAAA;ACJF;;ADQE;EACE,aAAA;ACLJ;;ADSA;EACE,iBAAA;ACNF;;ADSA;EACE,yBAAA;ACNF;;ADSA;EACE,iBAAA;EACA,cAAA;ACNF;;ADUA;EACE,YAAA;EACA,gCAAA;ACPF;ADQE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACNJ;ADQE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,+BAAA;ACNJ;ADOI;EACE,WAAA;EACA,YAAA;EACA,6DAAA;ACLN;ADWI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,6DAAA;EACA,kBAAA;ACTN;ADYE;EACE,gBAAA;ACVJ;ADaI;EACE,mBAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,oBAAA;ACXN;ADYM;EACE,gDAAA;EACA,mBAAA;ACVR;ADcE;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,6DAAA;ACZJ;;ADgBA;EACE,aAAA;EACA,gBAAA;ACbF;ADeI;EACE,qBAAA;EACA,WAAA;EACA,6BAAA;EACA,iBAAA;EACA,kBAAA;ACbN;ADcM;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,yBA7GK;EA8GL,kCAAA;ACZR;ADcM;EACE,WAAA;ACZR;;ADiBA;EACE,iBAAA;EACA,kBAAA;EACA,aAAA;ACdF;ADeE;EACE,iBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;ACbJ;ADcI;EACE,oBAAA;EACA,eAAA;ACZN;ADaM;EACE,gDAAA;EACA,kBAAA;ACXR;ADeE;EACE,aAAA;EACA,mBAAA;ACbJ;ADiBI;EACE,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,mBAAA;ACfN;ADgBM;EACE,gDAAA;EACA,mBAAA;ACdR;ADiBI;EACE,gBAAA;EACA,eAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBAAA;ACfN;ADgBM;EACE,cAvKK;ACyJb;ADiBI;EACE,aAAA;EACA,kBAAA;ACfN;ADiBI;EACE,kBAAA;EACA,iBAAA;EACA,sBAAA;ACfN;ADiBI;EACE,sBAAA;EACA,WAAA;EACA,mBAAA;ACfN;ADiBI;EACE,sBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;ACfN;ADmBI;EACE,WAAA;ACjBN;ADoBE;EACE,YAAA;EACA,aAAA;EACA,6DAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;AClBJ;ADoBE;EACE,YAAA;EACA,aAAA;EACA,6DAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;AClBJ;ADoBE;EACE,YAAA;EACA,YAAA;EACA,6DAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;AClBJ;ADoBE;EACE,WAAA;EACA,aAAA;EACA,6DAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AClBJ;;ADqBA;EACE,iBAAA;EACA,oBAAA;AClBF;ADmBE;EACE,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,iEAAA;ACjBJ;;ADqBA;EACE,iBAAA;AClBF;ADmBE;EACE,kBAAA;EACA,aAAA;ACjBJ;ADkBI;EACE,kBAAA;EACA,OAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;AChBN;ADmBE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;ACjBJ;ADmBE;EACE,WAAA;EACA,YAAA;EACA,mBAAA;ACjBJ;ADmBE;EACE,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;ACjBJ;ADmBE;EACE,YAAA;EACA,YAAA;ACjBJ;ADmBE;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;ACjBJ;ADoBI;EACE,oBAAA;EACA,gBAAA;EACA,eAAA;AClBN;ADoBI;EACE,iBAAA;AClBN;;ADuBA;EACE,aAAA;ACpBF;ADqBE;EACE,kBAAA;ACnBJ;ADoBI;EACE,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;EACA,yBArTU;EAsTV,mBAAA;AClBN;ADoBI;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;AClBN;ADmBM;EACE,iBAAA;EACA,gCAAA;ACjBR;ADoBI;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;AClBN;ADmBM;EACE,gDAAA;EACA,0DAAA;EACA,4BAAA;EACA,qBAAA;EACA,2BAAA;ACjBR;;ADuBA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;ACpBF;ADqBE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ACnBJ;ADqBE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;ACnBJ;ADoBI;EACE,WAAA;EACA,YAAA;EACA,6DAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,UAAA;AClBN;ADqBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;ACnBJ;ADoBI;EACE,gBAAA;AClBN;ADoBI;EACE,eAAA;AClBN;ADoBI;EACE,WAAA;EACA,YAAA;AClBN;ADqBE;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;ACnBJ;ADoBI;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;AClBN;ADoBI;EACE,kCAAA;AClBN;ADoBI;EACE,mCAAA;AClBN;ADoBI;EACE,4BAAA;EACA,aAAA;EACA,sBAAA;AClBN;ADoBI;EACE,oCAAA;AClBN;ADoBI;EACE,mCAAA;AClBN;ADoBI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBA3aU;EA4aV,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AClBN;ADoBI;EACE,kBAAA;EACA,iBAAA;AClBN;ADoBI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;AClBN;ADmBM;EACE,UAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ACjBR;ADqBE;EACE,cAtcY;EAucZ,yBAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;ACnBJ;;ADuBA;EACE,kBAAA;EACA,UAAA;EACA,sBAAA;EACA,yBApdc;EAqdd,WAAA;ACpBF;;ADuBA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;ACpBF;;ADuBA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;ACpBF;;ADuBA;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,aAAA;ACpBF;;ADuBA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;ACpBF;;ADuBA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;ACpBF;;ADuBA;EACE,aAAA;ACpBF;;ADuBA;EACE,WAAA;ACpBF;ADqBE;EACE,aAAA;EACA,8BAAA;ACnBJ;ADoBI;EACE,+BAAA;AClBN;ADoBI;EACE,8BAAA;AClBN;;ADuBA;EACE,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;ACpBF;ADqBE;EACE,WAAA;ACnBJ;;ADuBA;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,oBAAA;EACA,yMAAA;ACpBF;AD0BE;EACE,eAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;ACxBJ;AD0BE;EACE,aAAA;EACA,yBAAA;ACxBJ;ADyBI;EACE,cAAA;EACA,eAAA;ACvBN;ADwBM;EACE,iDAAA;EACA,kBAAA;ACtBR;AD0BE;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;ACxBJ;ADyBI;EACE,cAAA;ACvBN;AD2BI;EACE,aAAA;EACA,6BAAA;ACzBN;AD4BE;EACE,2CAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AC1BJ;AD4BE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,eAAA;AC1BJ;AD2BI;EACE,iDAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;ACzBN;AD2BI;EACE,iDAAA;EACA,iBAAA;ACzBN;;AD8BA;EACE,iBAAA;EACA,mBAAA;EACA,gBAAA;AC3BF;AD6BI;EACE,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;AC3BN;AD8BE;EACE,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AC5BJ;AD6BI;EACE,iDAAA;EACA,kBAAA;AC3BN;AD8BE;EACE,gBAAA;EACA,aAAA;EACA,uBAAA;AC5BJ;;ADgCA;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,uBAAA;AC7BF;AD+BI;EACE,eAAA;EACA,iBAAA;AC7BN;AD+BI;EACE,eAAA;AC7BN;ADgCE;EACE,iBAAA;EACA,YAAA;AC9BJ;ADgCE;EACE,gBAAA;EACA,YAAA;AC9BJ;ADgCE;EACE,eAAA;EACA,kBAAA;AC9BJ;AD+BI;EACE,iDAAA;EACA,kBAAA;AC7BN;ADgCE;EACE,8DAAA;AC9BJ;AD+BI;EACE,mBAAA;AC7BN;ADgCE;EACE,8DAAA;AC9BJ;AD+BI;EACE,mBAAA;AC7BN;ADgCE;EACE,8DAAA;AC9BJ;AD+BI;EACE,mBAAA;AC7BN;ADgCE;EACE,8DAAA;AC9BJ;AD+BI;EACE,mBAAA;AC7BN;ADgCE;EACE,8DAAA;AC9BJ;AD+BI;EACE,mBAAA;AC7BN","file":"main.scss","sourcesContent":["@import \"./fonts.css\";\r\n// @import \"./media.css\";\r\n\r\n$color-gray: #c5c4c4;\r\n$color-success: #BED2B7;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*::after, *::before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput, button, textarea {\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n}\r\n\r\nimg, button, video {\r\n  user-select: none;\r\n}\r\n\r\n.wrapper-top {\r\n  background-color: #F7F6F4;\r\n}\r\n\r\n.container {\r\n  max-width: 1170px;\r\n  margin: 0 auto;\r\n  // padding: 0 15px;\r\n}\r\n\r\n.header {\r\n  height: 80px;\r\n  border-bottom: 1px solid $color-gray;\r\n  &__content {\r\n    position: relative;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-right: 1px solid $color-gray;\r\n    &__logo {\r\n      width: 32px;\r\n      height: 32px;\r\n      background: url(\"../assets/logo.png\") no-repeat;\r\n      // &::after {\r\n      //   content: url(\"../assets/type.png\");\r\n      //   padding-left: 50px;\r\n      // }\r\n    }\r\n    &__logo2 {\r\n      width: 32px;\r\n      height: 32px;\r\n      margin-top: 10px;\r\n      background: url(\"../assets/type.png\") no-repeat;\r\n      padding-left: 80px;\r\n    }\r\n  }\r\n  &__middle {\r\n    padding: 0 200px;\r\n  }\r\n  &__right {\r\n    p {\r\n      white-space: nowrap;\r\n      cursor: pointer;\r\n      font-size: 16px;\r\n      font-weight: bold;\r\n      font-family: \"Circe\";\r\n      &::before {\r\n        content: url(\"../assets/phone.png\");\r\n        padding-right: 15px;\r\n      }\r\n    }\r\n  }\r\n  &__nav {\r\n    position: absolute;\r\n    right: 30px;\r\n    display: none;\r\n    cursor: pointer;\r\n    width: 16px;\r\n    height: 16px;\r\n    background: url(\"../assets/icon-navigation.png\") 50%/cover;\r\n  }\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  &-link {\r\n    a {\r\n      text-decoration: none;\r\n      color: #000;\r\n      font-family: \"Circe\", Verdana;\r\n      margin-left: 50px;\r\n      position: relative;\r\n      &::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        width: 0;\r\n        height: 2px;\r\n        background-color: $color-gray;\r\n        transition: width 0.3s ease-in-out;\r\n      }\r\n      &:hover:after, &:focus:after {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n}\r\n.main {\r\n  min-height: 600px;\r\n  position: relative;\r\n  padding: 20px;\r\n  &__phone {\r\n    user-select: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    right: -100px;\r\n    width: 250px;\r\n    height: 50px;\r\n    background-color: #fff;\r\n    transform: rotate(270deg);\r\n    p {\r\n      font-family: \"Circe\";\r\n      font-size: 16px;\r\n      &::after {\r\n        content: url(\"../assets/phone.png\");\r\n        padding-left: 10px;\r\n      }\r\n    }\r\n  }\r\n  &__content {\r\n    display: flex;\r\n    align-items: center;\r\n    // flex-wrap: wrap;\r\n  }\r\n  &__left {\r\n    p {\r\n      font-size: 14px;\r\n      font-family: \"Circe\", Verdana;\r\n      font-weight: 600;\r\n      margin-bottom: 30px;\r\n      &::before {\r\n        content: url(\"../assets/icon-arrow.png\");\r\n        padding-right: 10px;\r\n      }\r\n    }\r\n    h1 {\r\n      max-width: 630px;\r\n      font-size: 48px;\r\n      font-family: \"Circe\", Verdana;\r\n      font-weight: normal;\r\n      line-height: 60px;\r\n      text-transform: uppercase;\r\n      span {\r\n        color: $color-gray;\r\n      }\r\n    }\r\n    &__bottom {\r\n      display: flex;\r\n      position: relative;\r\n    }\r\n    &__round {\r\n      border-radius: 50%;\r\n      padding: 8px 15px;\r\n      border: 1px solid #000;\r\n    }\r\n    &__active {\r\n      background-color: #000;\r\n      color: #fff;\r\n      margin-right: 100px;\r\n    }\r\n    &__pos {\r\n      background-color: #fff;\r\n      z-index: 1;\r\n      overflow: hidden;\r\n      position: absolute;\r\n      left: 110px;\r\n    }\r\n  }\r\n  &__right {\r\n    &__logo {\r\n      width: 100%;\r\n    }\r\n  }\r\n  &__img1 {\r\n    width: 200px;\r\n    height: 200px;\r\n    background: url(\"../assets/blob-green (1).png\") 50%/cover;\r\n    position: absolute;\r\n    right: 350px;\r\n    top: 100px;\r\n    z-index: 1;\r\n  }\r\n  &__img2 {\r\n    width: 200px;\r\n    height: 200px;\r\n    background: url(\"../assets/blob-green (1).png\") 50%/cover;\r\n    position: absolute;\r\n    left: 400px;\r\n    bottom: -100px;\r\n    z-index: 1;\r\n  }\r\n  &__img3 {\r\n    width: 100px;\r\n    height: 80px;\r\n    background: url(\"../assets/blob-light.png\") 50%/cover;\r\n    position: absolute;\r\n    left: 650px;\r\n    bottom: 200px;\r\n  }\r\n  &__img3 {\r\n    width: 50px;\r\n    height: 100px;\r\n    background: url(\"../assets/blob-yellow.png\") 50%/cover;\r\n    position: absolute;\r\n    left: 950px;\r\n    bottom: 50px;\r\n  }\r\n}\r\n.scroll {\r\n  margin-left: 50px;\r\n  padding-bottom: 20px;\r\n  &__image {\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    border: 1px solid #000;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: url(\"../assets/arrow-down.png\") 50% no-repeat;\r\n  }\r\n}\r\n\r\n.section {\r\n  max-height: 800px;\r\n  &__content {\r\n    position: relative;\r\n    display: flex;\r\n    &__left {\r\n      position: absolute;\r\n      left: 0;\r\n      top: -80px;\r\n      max-width: 500px;\r\n      min-height: 250px;\r\n      background-color: #FEF5E7;\r\n      padding: 50px 70px;\r\n    }\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n  &__pretitle {\r\n    width: 32px;\r\n    height: 24px;\r\n    margin-bottom: 30px;\r\n  }\r\n  &__text {\r\n    font-family: \"Circe\";\r\n    font-size: 28px;\r\n    line-height: 32px;\r\n    margin-bottom: 30px;\r\n  }\r\n  &__author {\r\n    width: 100px;\r\n    height: 50px;\r\n  }\r\n  &__right {\r\n    margin-top: 150px;\r\n    max-width: 520px;\r\n    height: 350px;\r\n    margin-left: 700px;\r\n  }\r\n  &__text {\r\n    &-info {\r\n      font-family: \"Circe\";\r\n      margin-top: 20px;\r\n      font-size: 18px;\r\n    }\r\n    &-top {\r\n      font-weight: bold;\r\n    }\r\n  }\r\n}\r\n\r\n.info {\r\n  height: 200px;\r\n  &__list {\r\n    margin-left: 150px;\r\n    &__card {\r\n      max-width: 100px;\r\n      height: 24px;\r\n      text-align: center;\r\n      border-radius: 3px;\r\n      cursor: pointer;\r\n      color: #fff;\r\n      font-family: \"Circe\";\r\n      background-color: $color-success;\r\n      margin-bottom: 20px;\r\n    }\r\n    &__title {\r\n      font-size: 28px;\r\n      max-width: 350px;\r\n      font-family: \"Circe\";\r\n      line-height: 38px;\r\n      margin-bottom: 20px;\r\n      span {\r\n        padding-top: 20px;\r\n        border-bottom: 2px solid #BED2B7;\r\n      }\r\n    }\r\n    &__open {\r\n      display: flex;\r\n      align-items: center;\r\n      font-family: \"Circe\";\r\n      font-size: 18px;\r\n      user-select: none;\r\n      cursor: pointer;\r\n      &::before {\r\n        content: url(\"../assets/Vector\\ 34.png\");\r\n        background-image: url(\"../assets/Polygon\\ 4.png\");\r\n        background-repeat: no-repeat;\r\n        background-size: 10px;\r\n        background-position: center;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.slider {\r\n  overflow: hidden;\r\n  position: relative;\r\n  top: -100px;\r\n  min-height: 700px;\r\n  padding: 80px;\r\n  &__content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  &__middle {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    border: 7px solid #F9F9F7;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    min-width: 650px;\r\n    min-height: 650px;\r\n    max-width: 700px;\r\n    max-height: 700px;\r\n    &__info {\r\n      width: 84px;\r\n      height: 84px;\r\n      background: url(\"../assets/blob-yellow.png\") 50%/cover;\r\n      position: absolute;\r\n      left: 250px;\r\n      top: 170px;\r\n      z-index: 1;\r\n    }\r\n  }\r\n  &__card {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n    font-family: \"Circe\";\r\n    user-select: none;\r\n    width: 450px;\r\n    height: 180px;\r\n    max-width: 450px;\r\n    max-height: 180px;\r\n    background-color: #F7F6F4;\r\n    border-radius: 10px;\r\n    div {\r\n      max-width: 300px;\r\n    }\r\n    h3 {\r\n      font-size: 24px;\r\n    }\r\n    img {\r\n      width: 72px;\r\n      height: 72px;\r\n    }\r\n  }\r\n  &__numbers {\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: \"Circe\";\r\n    &-one {\r\n      display: flex;\r\n      flex-direction: column;\r\n      transform: translateY(15px);\r\n    }\r\n    &-two {\r\n      transform: translate(120px, 160px);\r\n    }\r\n    &-three {\r\n      transform: translate(540px, -240px);\r\n    }\r\n    &-four {\r\n      transform: translateY(-40px);\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n    &-five {\r\n      transform: translate(-530px, -240px);\r\n    }\r\n    &-six {\r\n      transform: translate(-115px, 140px);\r\n    }\r\n    &__num {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      background-color: $color-success;\r\n      width: 48px;\r\n      height: 48px;\r\n      border-radius: 50%;\r\n      color: #fff;\r\n    }\r\n    &__title {\r\n      margin-right: 10px;\r\n      margin-left: 10px;\r\n    }\r\n    &__round {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 18px;\r\n      height: 18px;\r\n      border: 1px solid #EDEDED;\r\n      border-radius: 50%;\r\n      &-inner {\r\n        width: 8px;\r\n        height: 8px;\r\n        background-color: #BDBDBD;\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n  }\r\n  &__active {\r\n    color: $color-success;\r\n    border: 1px solid $color-success;\r\n    border-radius: 20px;\r\n    padding: 5px 10px;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.pos1 {\r\n  position: absolute;\r\n  right: 35%;\r\n  transition: right 0.8s;\r\n  background-color: $color-success;\r\n  color: #fff;\r\n}\r\n\r\n.pos2 {\r\n  right: -300px;\r\n  position: absolute;\r\n  transition: right 0.8s;\r\n}\r\n\r\n.pos3 {\r\n  position: absolute;\r\n  right: -700px;\r\n  transition: right 0.8s;\r\n  display: none;\r\n}\r\n\r\n.pos4 {\r\n  position: absolute;\r\n  right: -1000px;\r\n  transition: right 0.8s;\r\n  display: none;\r\n}\r\n\r\n.pos5 {\r\n  position: absolute;\r\n  right: 1400px;\r\n  transition: right 0.8s;\r\n  display: none;\r\n}\r\n\r\n.pos6 {\r\n  right: 1400px;\r\n  position: absolute;\r\n  transition: right 0.8s;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.numbers {\r\n  width: 100%;\r\n  &__block {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    &-one {\r\n      transform: translate(0, -320px);\r\n    }\r\n    &-two {\r\n      transform: translate(0, 340px);\r\n    }\r\n  }\r\n}\r\n\r\n.image {\r\n  max-width: 1170px;\r\n  margin-right: 40px;\r\n  margin-left: 40px;\r\n  margin: 50px auto;\r\n  img {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.popup {\r\n  margin: 20vh auto;\r\n  padding: 20px 40px;\r\n  max-width: 800px;\r\n  height: 450px;\r\n  border-radius: 10px;\r\n  background-color: #F7F6F4;\r\n  font-family: \"Circe\";\r\n  box-shadow: 0 1px 2px rgba(0,0,0,0.07), \r\n  0 2px 4px rgba(0,0,0,0.07), \r\n  0 4px 8px rgba(0,0,0,0.07), \r\n  0 8px 16px rgba(0,0,0,0.07),\r\n  0 16px 32px rgba(0,0,0,0.07), \r\n  0 32px 64px rgba(0,0,0,0.07);\r\n  &__wrapper {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n  &__top {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    p {\r\n      color: #626377;\r\n      cursor: pointer;\r\n      &::after {\r\n        content: url(\"../assets/close-icon.png\");\r\n        padding-left: 10px;\r\n      }\r\n    }\r\n  }\r\n  &__text {\r\n    margin-top: 30px;\r\n    margin-bottom: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    p {\r\n      color: #626377;\r\n    }\r\n  }\r\n  &__form {\r\n    div {\r\n      display: flex;\r\n      justify-content: space-around;\r\n    }\r\n  }\r\n  &__input {\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\r\n    border: 1px solid #F7F6F4;\r\n    border-radius: 5px;\r\n    width: 275px;\r\n    height: 50px;\r\n    margin-right: 20px;\r\n    padding-left: 10px;\r\n  }\r\n  &__send {\r\n    background: #D6C38B;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin-top: 50px;\r\n    width: 260px;\r\n    height: 60px;\r\n    margin-left: calc(50% - 130px);\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    &::before {\r\n      content: url(\"../assets/icon-b.png\");\r\n      margin-right: 10px;\r\n      padding: 10px;  \r\n      background-color: #DECFA2;\r\n    }\r\n    &::after {\r\n      content: url(\"../assets/arrow-btn\\ \\(Stroke\\).png\");\r\n      margin-left: 50px;\r\n    }\r\n  }\r\n}\r\n\r\n.list {\r\n  min-height: 500px;\r\n  margin-bottom: 50px;\r\n  overflow: hidden;\r\n  &__content {\r\n    h2 {\r\n      font-size: 72px;\r\n      font-family: \"Circe\";\r\n      font-weight: normal;\r\n      text-align: center;\r\n    }\r\n  }\r\n  &__others {\r\n    text-align: right;\r\n    font-family: \"Circe\";\r\n    margin-top: 20px;\r\n    margin-right: 150px;\r\n    color: #626377;\r\n    cursor: pointer;\r\n    &::after {\r\n      content: url(\"../assets/Polygon\\ 6.png\");\r\n      padding-left: 10px;\r\n    }\r\n  }\r\n  &__slider {\r\n    margin-top: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.card {\r\n  height: 260px;\r\n  min-width: 230px;\r\n  max-width: 230px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  border-radius: 10px;\r\n  padding-top: 50px;\r\n  font-family: \"Circe\";\r\n  text-align: center;\r\n  transition: 0.3s linear;\r\n  &:hover {\r\n    h3 {\r\n      font-size: 18px;\r\n      line-height: 25px;\r\n    }\r\n    p {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  h3 {\r\n    line-height: 25px;\r\n    font-size: 0;\r\n  }\r\n  p {\r\n    margin-top: 10px;\r\n    font-size: 0;\r\n  }\r\n  &__others {\r\n    cursor: pointer;\r\n    padding-top: 120px;\r\n    &::after {\r\n      content: url(\"../assets/Polygon\\ 6.png\");\r\n      padding-left: 10px;\r\n    }\r\n  }\r\n  &-one {\r\n    background: url(\"../assets/a1.png\") 50%/cover;\r\n    &:hover {\r\n      background: #F7F6F4;\r\n    }\r\n  }\r\n  &-two {\r\n    background: url(\"../assets/a1.png\") 50%/cover;\r\n    &:hover {\r\n      background: #F7F6F4;\r\n    }\r\n  }\r\n  &-three {\r\n    background: url(\"../assets/a3.png\") 50%/cover;\r\n    &:hover {\r\n      background: #F7F6F4;\r\n    }\r\n  }\r\n  &-four {\r\n    background: url(\"../assets/a4.png\") 50%/cover;\r\n    &:hover {\r\n      background: #F7F6F4;\r\n    }\r\n  }\r\n  &-five {\r\n    background: url(\"../assets/a5.png\") 50%/cover;\r\n    &:hover {\r\n      background: #F7F6F4;\r\n    }\r\n  }\r\n}","@import \"./fonts.css\";\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*::after, *::before {\n  content: \"\";\n  box-sizing: border-box;\n}\n\ninput:focus, button:focus, textarea:focus {\n  outline: none;\n}\n\nimg, button, video {\n  user-select: none;\n}\n\n.wrapper-top {\n  background-color: #F7F6F4;\n}\n\n.container {\n  max-width: 1170px;\n  margin: 0 auto;\n}\n\n.header {\n  height: 80px;\n  border-bottom: 1px solid #c5c4c4;\n}\n.header__content {\n  position: relative;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header__left {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #c5c4c4;\n}\n.header__left__logo {\n  width: 32px;\n  height: 32px;\n  background: url(\"../assets/logo.png\") no-repeat;\n}\n.header__left__logo2 {\n  width: 32px;\n  height: 32px;\n  margin-top: 10px;\n  background: url(\"../assets/type.png\") no-repeat;\n  padding-left: 80px;\n}\n.header__middle {\n  padding: 0 200px;\n}\n.header__right p {\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Circe\";\n}\n.header__right p::before {\n  content: url(\"../assets/phone.png\");\n  padding-right: 15px;\n}\n.header__nav {\n  position: absolute;\n  right: 30px;\n  display: none;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  background: url(\"../assets/icon-navigation.png\") 50%/cover;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n}\n.nav-link a {\n  text-decoration: none;\n  color: #000;\n  font-family: \"Circe\", Verdana;\n  margin-left: 50px;\n  position: relative;\n}\n.nav-link a::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  background-color: #c5c4c4;\n  transition: width 0.3s ease-in-out;\n}\n.nav-link a:hover:after, .nav-link a:focus:after {\n  width: 100%;\n}\n\n.main {\n  min-height: 600px;\n  position: relative;\n  padding: 20px;\n}\n.main__phone {\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: -100px;\n  width: 250px;\n  height: 50px;\n  background-color: #fff;\n  transform: rotate(270deg);\n}\n.main__phone p {\n  font-family: \"Circe\";\n  font-size: 16px;\n}\n.main__phone p::after {\n  content: url(\"../assets/phone.png\");\n  padding-left: 10px;\n}\n.main__content {\n  display: flex;\n  align-items: center;\n}\n.main__left p {\n  font-size: 14px;\n  font-family: \"Circe\", Verdana;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n.main__left p::before {\n  content: url(\"../assets/icon-arrow.png\");\n  padding-right: 10px;\n}\n.main__left h1 {\n  max-width: 630px;\n  font-size: 48px;\n  font-family: \"Circe\", Verdana;\n  font-weight: normal;\n  line-height: 60px;\n  text-transform: uppercase;\n}\n.main__left h1 span {\n  color: #c5c4c4;\n}\n.main__left__bottom {\n  display: flex;\n  position: relative;\n}\n.main__left__round {\n  border-radius: 50%;\n  padding: 8px 15px;\n  border: 1px solid #000;\n}\n.main__left__active {\n  background-color: #000;\n  color: #fff;\n  margin-right: 100px;\n}\n.main__left__pos {\n  background-color: #fff;\n  z-index: 1;\n  overflow: hidden;\n  position: absolute;\n  left: 110px;\n}\n.main__right__logo {\n  width: 100%;\n}\n.main__img1 {\n  width: 200px;\n  height: 200px;\n  background: url(\"../assets/blob-green (1).png\") 50%/cover;\n  position: absolute;\n  right: 350px;\n  top: 100px;\n  z-index: 1;\n}\n.main__img2 {\n  width: 200px;\n  height: 200px;\n  background: url(\"../assets/blob-green (1).png\") 50%/cover;\n  position: absolute;\n  left: 400px;\n  bottom: -100px;\n  z-index: 1;\n}\n.main__img3 {\n  width: 100px;\n  height: 80px;\n  background: url(\"../assets/blob-light.png\") 50%/cover;\n  position: absolute;\n  left: 650px;\n  bottom: 200px;\n}\n.main__img3 {\n  width: 50px;\n  height: 100px;\n  background: url(\"../assets/blob-yellow.png\") 50%/cover;\n  position: absolute;\n  left: 950px;\n  bottom: 50px;\n}\n\n.scroll {\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n.scroll__image {\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid #000;\n  width: 32px;\n  height: 32px;\n  background: url(\"../assets/arrow-down.png\") 50% no-repeat;\n}\n\n.section {\n  max-height: 800px;\n}\n.section__content {\n  position: relative;\n  display: flex;\n}\n.section__content__left {\n  position: absolute;\n  left: 0;\n  top: -80px;\n  max-width: 500px;\n  min-height: 250px;\n  background-color: #FEF5E7;\n  padding: 50px 70px;\n}\n.section__left {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.section__pretitle {\n  width: 32px;\n  height: 24px;\n  margin-bottom: 30px;\n}\n.section__text {\n  font-family: \"Circe\";\n  font-size: 28px;\n  line-height: 32px;\n  margin-bottom: 30px;\n}\n.section__author {\n  width: 100px;\n  height: 50px;\n}\n.section__right {\n  margin-top: 150px;\n  max-width: 520px;\n  height: 350px;\n  margin-left: 700px;\n}\n.section__text-info {\n  font-family: \"Circe\";\n  margin-top: 20px;\n  font-size: 18px;\n}\n.section__text-top {\n  font-weight: bold;\n}\n\n.info {\n  height: 200px;\n}\n.info__list {\n  margin-left: 150px;\n}\n.info__list__card {\n  max-width: 100px;\n  height: 24px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  color: #fff;\n  font-family: \"Circe\";\n  background-color: #BED2B7;\n  margin-bottom: 20px;\n}\n.info__list__title {\n  font-size: 28px;\n  max-width: 350px;\n  font-family: \"Circe\";\n  line-height: 38px;\n  margin-bottom: 20px;\n}\n.info__list__title span {\n  padding-top: 20px;\n  border-bottom: 2px solid #BED2B7;\n}\n.info__list__open {\n  display: flex;\n  align-items: center;\n  font-family: \"Circe\";\n  font-size: 18px;\n  user-select: none;\n  cursor: pointer;\n}\n.info__list__open::before {\n  content: url(\"../assets/Vector 34.png\");\n  background-image: url(\"../assets/Polygon 4.png\");\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n}\n\n.slider {\n  overflow: hidden;\n  position: relative;\n  top: -100px;\n  min-height: 700px;\n  padding: 80px;\n}\n.slider__content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.slider__middle {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border: 7px solid #F9F9F7;\n  border-radius: 50%;\n  margin: 0 auto;\n  min-width: 650px;\n  min-height: 650px;\n  max-width: 700px;\n  max-height: 700px;\n}\n.slider__middle__info {\n  width: 84px;\n  height: 84px;\n  background: url(\"../assets/blob-yellow.png\") 50%/cover;\n  position: absolute;\n  left: 250px;\n  top: 170px;\n  z-index: 1;\n}\n.slider__card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  font-family: \"Circe\";\n  user-select: none;\n  width: 450px;\n  height: 180px;\n  max-width: 450px;\n  max-height: 180px;\n  background-color: #F7F6F4;\n  border-radius: 10px;\n}\n.slider__card div {\n  max-width: 300px;\n}\n.slider__card h3 {\n  font-size: 24px;\n}\n.slider__card img {\n  width: 72px;\n  height: 72px;\n}\n.slider__numbers {\n  display: flex;\n  align-items: center;\n  font-family: \"Circe\";\n}\n.slider__numbers-one {\n  display: flex;\n  flex-direction: column;\n  transform: translateY(15px);\n}\n.slider__numbers-two {\n  transform: translate(120px, 160px);\n}\n.slider__numbers-three {\n  transform: translate(540px, -240px);\n}\n.slider__numbers-four {\n  transform: translateY(-40px);\n  display: flex;\n  flex-direction: column;\n}\n.slider__numbers-five {\n  transform: translate(-530px, -240px);\n}\n.slider__numbers-six {\n  transform: translate(-115px, 140px);\n}\n.slider__numbers__num {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #BED2B7;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  color: #fff;\n}\n.slider__numbers__title {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.slider__numbers__round {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #EDEDED;\n  border-radius: 50%;\n}\n.slider__numbers__round-inner {\n  width: 8px;\n  height: 8px;\n  background-color: #BDBDBD;\n  border-radius: 50%;\n}\n.slider__active {\n  color: #BED2B7;\n  border: 1px solid #BED2B7;\n  border-radius: 20px;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.pos1 {\n  position: absolute;\n  right: 35%;\n  transition: right 0.8s;\n  background-color: #BED2B7;\n  color: #fff;\n}\n\n.pos2 {\n  right: -300px;\n  position: absolute;\n  transition: right 0.8s;\n}\n\n.pos3 {\n  position: absolute;\n  right: -700px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos4 {\n  position: absolute;\n  right: -1000px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos5 {\n  position: absolute;\n  right: 1400px;\n  transition: right 0.8s;\n  display: none;\n}\n\n.pos6 {\n  right: 1400px;\n  position: absolute;\n  transition: right 0.8s;\n}\n\n.hide {\n  display: none;\n}\n\n.numbers {\n  width: 100%;\n}\n.numbers__block {\n  display: flex;\n  justify-content: space-between;\n}\n.numbers__block-one {\n  transform: translate(0, -320px);\n}\n.numbers__block-two {\n  transform: translate(0, 340px);\n}\n\n.image {\n  max-width: 1170px;\n  margin-right: 40px;\n  margin-left: 40px;\n  margin: 50px auto;\n}\n.image img {\n  width: 100%;\n}\n\n.popup {\n  margin: 20vh auto;\n  padding: 20px 40px;\n  max-width: 800px;\n  height: 450px;\n  border-radius: 10px;\n  background-color: #F7F6F4;\n  font-family: \"Circe\";\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n}\n.popup__wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n}\n.popup__top {\n  display: flex;\n  justify-content: flex-end;\n}\n.popup__top p {\n  color: #626377;\n  cursor: pointer;\n}\n.popup__top p::after {\n  content: url(\"../assets/close-icon.png\");\n  padding-left: 10px;\n}\n.popup__text {\n  margin-top: 30px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.popup__text p {\n  color: #626377;\n}\n.popup__form div {\n  display: flex;\n  justify-content: space-around;\n}\n.popup__input {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n  border: 1px solid #F7F6F4;\n  border-radius: 5px;\n  width: 275px;\n  height: 50px;\n  margin-right: 20px;\n  padding-left: 10px;\n}\n.popup__send {\n  background: #D6C38B;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  margin-top: 50px;\n  width: 260px;\n  height: 60px;\n  margin-left: calc(50% - 130px);\n  font-size: 18px;\n  cursor: pointer;\n}\n.popup__send::before {\n  content: url(\"../assets/icon-b.png\");\n  margin-right: 10px;\n  padding: 10px;\n  background-color: #DECFA2;\n}\n.popup__send::after {\n  content: url(\"../assets/arrow-btn (Stroke).png\");\n  margin-left: 50px;\n}\n\n.list {\n  min-height: 500px;\n  margin-bottom: 50px;\n  overflow: hidden;\n}\n.list__content h2 {\n  font-size: 72px;\n  font-family: \"Circe\";\n  font-weight: normal;\n  text-align: center;\n}\n.list__others {\n  text-align: right;\n  font-family: \"Circe\";\n  margin-top: 20px;\n  margin-right: 150px;\n  color: #626377;\n  cursor: pointer;\n}\n.list__others::after {\n  content: url(\"../assets/Polygon 6.png\");\n  padding-left: 10px;\n}\n.list__slider {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.card {\n  height: 260px;\n  min-width: 230px;\n  max-width: 230px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 10px;\n  padding-top: 50px;\n  font-family: \"Circe\";\n  text-align: center;\n  transition: 0.3s linear;\n}\n.card:hover h3 {\n  font-size: 18px;\n  line-height: 25px;\n}\n.card:hover p {\n  font-size: 14px;\n}\n.card h3 {\n  line-height: 25px;\n  font-size: 0;\n}\n.card p {\n  margin-top: 10px;\n  font-size: 0;\n}\n.card__others {\n  cursor: pointer;\n  padding-top: 120px;\n}\n.card__others::after {\n  content: url(\"../assets/Polygon 6.png\");\n  padding-left: 10px;\n}\n.card-one {\n  background: url(\"../assets/a1.png\") 50%/cover;\n}\n.card-one:hover {\n  background: #F7F6F4;\n}\n.card-two {\n  background: url(\"../assets/a1.png\") 50%/cover;\n}\n.card-two:hover {\n  background: #F7F6F4;\n}\n.card-three {\n  background: url(\"../assets/a3.png\") 50%/cover;\n}\n.card-three:hover {\n  background: #F7F6F4;\n}\n.card-four {\n  background: url(\"../assets/a4.png\") 50%/cover;\n}\n.card-four:hover {\n  background: #F7F6F4;\n}\n.card-five {\n  background: url(\"../assets/a5.png\") 50%/cover;\n}\n.card-five:hover {\n  background: #F7F6F4;\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/media.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/media.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (max-width: 1371px) {\n  .header__middle {\n    padding: 0 100px;\n  }\n}\n@media (max-width: 1201px) {\n  .main__img1 {\n    position: absolute;\n    right: 150px;\n    top: 100px;\n  }\n\n  .main__img2 {\n    position: absolute;\n    left: 200px;\n    bottom: 0;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 650px;\n    top: 400px;\n  }\n\n  .pos1 {\n    right: 30%;\n  }\n}\n@media (max-width: 1134px) {\n  .header__middle {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 1024px) {\n  .header__middle {\n    padding: 0 30px;\n  }\n\n  .nav-link a {\n    margin-left: 20px;\n  }\n\n  .section__right {\n    padding: 20px;\n    margin: 300px auto;\n  }\n\n  .slider {\n    position: relative;\n    top: -50px;\n  }\n\n  .pos1 {\n    right: 28%;\n  }\n\n  .pos2 {\n    right: -400px;\n  }\n\n  .pos6 {\n    right: 950px;\n  }\n}\n@media (max-width: 891px) {\n  .slider__middle {\n    display: none;\n  }\n\n  .slider {\n    position: relative;\n    top: 30px;\n    min-height: 100px;\n  }\n\n  .slider__card {\n    width: 80%;\n  }\n\n  .info {\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 860px) {\n  .header__middle {\n    padding: 0;\n  }\n\n  .nav-link a {\n    margin-left: 20px;\n  }\n\n  .header__right p {\n    font-size: 14px;\n  }\n\n  .main__left h1 {\n    font-size: 32px;\n    line-height: 44px;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 791px) {\n  .nav-link a {\n    font-size: 14px;\n  }\n\n  .header__right p::before {\n    display: none;\n  }\n\n  .header__left__logo2 {\n    padding-left: 50px;\n  }\n\n  .header__right p {\n    font-size: 12px;\n  }\n\n  .main__img1 {\n    position: absolute;\n    right: 150px;\n    top: 0;\n  }\n\n  .main__img2 {\n    display: none;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 400px;\n    top: 300px;\n  }\n\n  .main {\n    min-height: 300px;\n  }\n}\n@media (max-width: 731px) {\n  .pos1 {\n    right: 20%;\n  }\n\n  .pos2 {\n    right: -400px;\n  }\n\n  .pos6 {\n    right: 650px;\n  }\n}\n@media (max-width: 681px) {\n  .header {\n    height: 50px;\n  }\n\n  .header__middle, .header__right, .main__phone {\n    display: none;\n  }\n\n  .header__nav {\n    display: block;\n  }\n\n  .header__left {\n    position: absolute;\n    left: 30px;\n  }\n\n  .main__content {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .main__right__logo {\n    margin-bottom: 30px;\n  }\n\n  .main__left {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .main__left h1 {\n    text-align: center;\n  }\n\n  .main__img1 {\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    right: 150px;\n    top: 300px;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 150px;\n    top: 600px;\n  }\n}\n@media (max-width: 562px) {\n  .info__list {\n    margin-left: 50px;\n  }\n\n  .pos1 {\n    right: 5%;\n  }\n\n  .pos2 {\n    right: -500px;\n  }\n\n  .pos6 {\n    right: 520px;\n  }\n\n  .slider__card {\n    padding: 10px 20px;\n  }\n\n  .slider__card img {\n    width: 52px;\n    height: 52px;\n    margin-right: 20px;\n  }\n\n  .image {\n    /* margin-right: 0;\n    margin-left: 0; */\n  }\n}\n@media (max-width: 421px) {\n  .main__left h1 {\n    margin-bottom: 0;\n    text-align: left;\n  }\n\n  .main__left {\n    align-items: flex-start;\n  }\n\n  .main__left__bottom {\n    position: relative;\n    top: 50px;\n    right: 0;\n  }\n\n  .main__img1, .main__img3 {\n    display: none;\n  }\n\n  .section__text {\n    font-size: 18px;\n    line-height: 24px;\n  }\n\n  .info {\n    border-top: 1px solid #E3E3E3;\n    padding-top: 60px;\n    margin-top: 40px;\n  }\n\n  .info__list {\n    margin-left: 20px;\n  }\n\n  .info__list__card {\n    margin-bottom: 0;\n  }\n\n  .info__list__title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 371px) {\n  .info {\n    margin-top: 120px;\n    padding-top: 40px;\n  }\n\n  .slider__card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .slider__card div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .slider__card p {\n    font-size: 13px;\n    line-height: 16px;\n    text-align: center;\n  }\n}", "",{"version":3,"sources":["C:/Users/User/Documents/верстка макета 8/src/scss/media.css","media.css"],"names":[],"mappings":"AAAA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,kBAAA;IACA,YAAA;IACA,UAAA;ECAF;;EDEA;IACE,kBAAA;IACA,WAAA;IACA,SAAA;ECCF;;EDCA;IACE,kBAAA;IACA,WAAA;IACA,UAAA;ECEF;;EDAA;IACE,UAAA;ECGF;AACF;ADAA;EACE;IACE,eAAA;ECEF;AACF;ADCA;EACE;IACE,eAAA;ECCF;;EDCA;IACE,iBAAA;ECEF;;EDAA;IACE,aAAA;IACA,kBAAA;ECGF;;EDDA;IACE,kBAAA;IACA,UAAA;ECIF;;EDFA;IACE,UAAA;ECKF;;EDHA;IACE,aAAA;ECMF;;EDJA;IACE,YAAA;ECOF;AACF;ADJA;EACE;IACE,aAAA;ECMF;;EDJA;IACE,kBAAA;IACA,SAAA;IACA,iBAAA;ECOF;;EDLA;IACE,UAAA;ECQF;;EDNA;IACE,mBAAA;ECSF;AACF;ADNA;EACE;IACE,UAAA;ECQF;;EDNA;IACE,iBAAA;ECSF;;EDPA;IACE,eAAA;ECUF;;EDRA;IACE,eAAA;IACA,iBAAA;IACA,mBAAA;ECWF;AACF;ADRA;EACE;IACE,eAAA;ECUF;;EDRA;IACE,aAAA;ECWF;;EDTA;IACE,kBAAA;ECYF;;EDVA;IACE,eAAA;ECaF;;EDXA;IACE,kBAAA;IACA,YAAA;IACA,MAAA;ECcF;;EDZA;IACE,aAAA;ECeF;;EDbA;IACE,kBAAA;IACA,WAAA;IACA,UAAA;ECgBF;;EDdA;IACE,iBAAA;ECiBF;AACF;ADdA;EACE;IACE,UAAA;ECgBF;;EDdA;IACE,aAAA;ECiBF;;EDfA;IACE,YAAA;ECkBF;AACF;ADfA;EACE;IACE,YAAA;ECiBF;;EDfA;IACE,aAAA;ECkBF;;EDhBA;IACE,cAAA;ECmBF;;EDjBA;IACE,kBAAA;IACA,UAAA;ECoBF;;EDlBA;IACE,eAAA;IACA,uBAAA;ECqBF;;EDnBA;IACE,mBAAA;ECsBF;;EDpBA;IACE,aAAA;IACA,sBAAA;IACA,mBAAA;ECuBF;;EDrBA;IACE,kBAAA;ECwBF;;EDtBA;IACE,YAAA;IACA,aAAA;IACA,kBAAA;IACA,YAAA;IACA,UAAA;ECyBF;;EDvBA;IACE,kBAAA;IACA,WAAA;IACA,UAAA;EC0BF;AACF;ADvBA;EACE;IACE,iBAAA;ECyBF;;EDvBA;IACE,SAAA;EC0BF;;EDxBA;IACE,aAAA;EC2BF;;EDzBA;IACE,YAAA;EC4BF;;ED1BA;IACE,kBAAA;EC6BF;;ED3BA;IACE,WAAA;IACA,YAAA;IACA,kBAAA;EC8BF;;ED5BA;IACE;qBAAA;ECgCF;AACF;AD5BA;EACE;IACE,gBAAA;IACA,gBAAA;EC8BF;;ED5BA;IACE,uBAAA;EC+BF;;ED7BA;IACE,kBAAA;IACA,SAAA;IACA,QAAA;ECgCF;;ED9BA;IACE,aAAA;ECiCF;;ED/BA;IACE,eAAA;IACA,iBAAA;ECkCF;;EDhCA;IACE,6BAAA;IACA,iBAAA;IACA,gBAAA;ECmCF;;EDjCA;IACE,iBAAA;ECoCF;;EDlCA;IACE,gBAAA;ECqCF;;EDnCA;IACC,eAAA;ECsCD;AACF;ADnCA;EACE;IACE,iBAAA;IACA,iBAAA;ECqCF;;EDnCA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;ECsCF;;EDpCA;IACE,aAAA;IACA,sBAAA;IACA,mBAAA;ECuCF;;EDrCA;IACE,eAAA;IACA,iBAAA;IACA,kBAAA;ECwCF;AACF","file":"media.css","sourcesContent":["@media (max-width: 1371px) {\r\n  .header__middle {\r\n    padding: 0 100px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1201px) {\r\n  .main__img1 {\r\n    position: absolute;\r\n    right: 150px;\r\n    top: 100px;\r\n  }\r\n  .main__img2 {\r\n    position: absolute;\r\n    left: 200px;\r\n    bottom: 0;\r\n  }\r\n  .main__img3 {\r\n    position: absolute;\r\n    left: 650px;\r\n    top: 400px;\r\n  }\r\n  .pos1 {\r\n    right: 30%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1134px) {\r\n  .header__middle {\r\n    padding: 0 30px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .header__middle {\r\n    padding: 0 30px;\r\n  }\r\n  .nav-link a {\r\n    margin-left: 20px;\r\n  }\r\n  .section__right {\r\n    padding: 20px;\r\n    margin: 300px auto;\r\n  }\r\n  .slider {\r\n    position: relative;\r\n    top: -50px;\r\n  }\r\n  .pos1 {\r\n    right: 28%;\r\n  }\r\n  .pos2 {\r\n    right: -400px;\r\n  }\r\n  .pos6 {\r\n    right: 950px;\r\n  }\r\n}\r\n\r\n@media (max-width: 891px) {\r\n  .slider__middle {\r\n    display: none;\r\n  }\r\n  .slider {\r\n    position: relative;\r\n    top: 30px;\r\n    min-height: 100px;\r\n  }\r\n  .slider__card {\r\n    width: 80%;\r\n  }\r\n  .info {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 860px) {\r\n  .header__middle {\r\n    padding: 0;\r\n  }\r\n  .nav-link a {\r\n    margin-left: 20px;\r\n  }\r\n  .header__right p {\r\n    font-size: 14px;\r\n  }\r\n  .main__left h1 {\r\n    font-size: 32px;\r\n    line-height: 44px;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 791px) {\r\n  .nav-link a {\r\n    font-size: 14px;\r\n  }\r\n  .header__right p::before {\r\n    display: none;\r\n  }\r\n  .header__left__logo2 {\r\n    padding-left: 50px;\r\n  }\r\n  .header__right p {\r\n    font-size: 12px;\r\n  }\r\n  .main__img1 {\r\n    position: absolute;\r\n    right: 150px;\r\n    top: 0;\r\n  }\r\n  .main__img2 {\r\n    display: none;\r\n  }\r\n  .main__img3 {\r\n    position: absolute;\r\n    left: 400px;\r\n    top: 300px;\r\n  }\r\n  .main {\r\n    min-height: 300px;\r\n  }\r\n}\r\n\r\n@media (max-width: 731px) {\r\n  .pos1 {\r\n    right: 20%;\r\n  }\r\n  .pos2 {\r\n    right: -400px;\r\n  }\r\n  .pos6 {\r\n    right: 650px;\r\n  }\r\n}\r\n\r\n@media (max-width: 681px) {\r\n  .header {\r\n    height: 50px;\r\n  }\r\n  .header__middle, .header__right, .main__phone {\r\n    display: none;\r\n  }\r\n  .header__nav {\r\n    display: block;\r\n  }\r\n  .header__left {\r\n    position: absolute;\r\n    left: 30px;\r\n  }\r\n  .main__content {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n  .main__right__logo {\r\n    margin-bottom: 30px;\r\n  }\r\n  .main__left {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .main__left h1 {\r\n    text-align: center;\r\n  }\r\n  .main__img1 {\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    right: 150px;\r\n    top: 300px;\r\n  }\r\n  .main__img3 {\r\n    position: absolute;\r\n    left: 150px;\r\n    top: 600px;\r\n  }\r\n}\r\n\r\n@media (max-width: 562px) {\r\n  .info__list {\r\n    margin-left: 50px;\r\n  }\r\n  .pos1 {\r\n    right: 5%;\r\n  }\r\n  .pos2 {\r\n    right: -500px;\r\n  }\r\n  .pos6 {\r\n    right: 520px;\r\n  }\r\n  .slider__card {\r\n    padding: 10px 20px;\r\n  }\r\n  .slider__card img {\r\n    width: 52px;\r\n    height: 52px;\r\n    margin-right: 20px;\r\n  }\r\n  .image {\r\n    /* margin-right: 0;\r\n    margin-left: 0; */\r\n  }\r\n}\r\n\r\n@media (max-width: 421px) {\r\n  .main__left h1 {\r\n    margin-bottom: 0;\r\n    text-align: left;\r\n  }\r\n  .main__left {\r\n    align-items: flex-start;\r\n  }\r\n  .main__left__bottom {\r\n    position: relative;\r\n    top: 50px;\r\n    right: 0;\r\n  }\r\n  .main__img1, .main__img3 {\r\n    display: none;\r\n  }\r\n  .section__text {\r\n    font-size: 18px;\r\n    line-height: 24px;\r\n  }\r\n  .info {\r\n    border-top: 1px solid #E3E3E3;\r\n    padding-top: 60px;\r\n    margin-top: 40px;\r\n  }\r\n  .info__list {\r\n    margin-left: 20px;\r\n  }\r\n  .info__list__card {\r\n    margin-bottom: 0;\r\n  }\r\n  .info__list__title {\r\n   font-size: 22px;\r\n  }\r\n}\r\n\r\n@media (max-width: 371px) {\r\n  .info {\r\n    margin-top: 120px;\r\n    padding-top: 40px;\r\n  }\r\n  .slider__card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n  .slider__card div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .slider__card p {\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    text-align: center;\r\n  }\r\n}","@media (max-width: 1371px) {\n  .header__middle {\n    padding: 0 100px;\n  }\n}\n@media (max-width: 1201px) {\n  .main__img1 {\n    position: absolute;\n    right: 150px;\n    top: 100px;\n  }\n\n  .main__img2 {\n    position: absolute;\n    left: 200px;\n    bottom: 0;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 650px;\n    top: 400px;\n  }\n\n  .pos1 {\n    right: 30%;\n  }\n}\n@media (max-width: 1134px) {\n  .header__middle {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 1024px) {\n  .header__middle {\n    padding: 0 30px;\n  }\n\n  .nav-link a {\n    margin-left: 20px;\n  }\n\n  .section__right {\n    padding: 20px;\n    margin: 300px auto;\n  }\n\n  .slider {\n    position: relative;\n    top: -50px;\n  }\n\n  .pos1 {\n    right: 28%;\n  }\n\n  .pos2 {\n    right: -400px;\n  }\n\n  .pos6 {\n    right: 950px;\n  }\n}\n@media (max-width: 891px) {\n  .slider__middle {\n    display: none;\n  }\n\n  .slider {\n    position: relative;\n    top: 30px;\n    min-height: 100px;\n  }\n\n  .slider__card {\n    width: 80%;\n  }\n\n  .info {\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 860px) {\n  .header__middle {\n    padding: 0;\n  }\n\n  .nav-link a {\n    margin-left: 20px;\n  }\n\n  .header__right p {\n    font-size: 14px;\n  }\n\n  .main__left h1 {\n    font-size: 32px;\n    line-height: 44px;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 791px) {\n  .nav-link a {\n    font-size: 14px;\n  }\n\n  .header__right p::before {\n    display: none;\n  }\n\n  .header__left__logo2 {\n    padding-left: 50px;\n  }\n\n  .header__right p {\n    font-size: 12px;\n  }\n\n  .main__img1 {\n    position: absolute;\n    right: 150px;\n    top: 0;\n  }\n\n  .main__img2 {\n    display: none;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 400px;\n    top: 300px;\n  }\n\n  .main {\n    min-height: 300px;\n  }\n}\n@media (max-width: 731px) {\n  .pos1 {\n    right: 20%;\n  }\n\n  .pos2 {\n    right: -400px;\n  }\n\n  .pos6 {\n    right: 650px;\n  }\n}\n@media (max-width: 681px) {\n  .header {\n    height: 50px;\n  }\n\n  .header__middle, .header__right, .main__phone {\n    display: none;\n  }\n\n  .header__nav {\n    display: block;\n  }\n\n  .header__left {\n    position: absolute;\n    left: 30px;\n  }\n\n  .main__content {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .main__right__logo {\n    margin-bottom: 30px;\n  }\n\n  .main__left {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .main__left h1 {\n    text-align: center;\n  }\n\n  .main__img1 {\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    right: 150px;\n    top: 300px;\n  }\n\n  .main__img3 {\n    position: absolute;\n    left: 150px;\n    top: 600px;\n  }\n}\n@media (max-width: 562px) {\n  .info__list {\n    margin-left: 50px;\n  }\n\n  .pos1 {\n    right: 5%;\n  }\n\n  .pos2 {\n    right: -500px;\n  }\n\n  .pos6 {\n    right: 520px;\n  }\n\n  .slider__card {\n    padding: 10px 20px;\n  }\n\n  .slider__card img {\n    width: 52px;\n    height: 52px;\n    margin-right: 20px;\n  }\n\n  .image {\n    /* margin-right: 0;\n    margin-left: 0; */\n  }\n}\n@media (max-width: 421px) {\n  .main__left h1 {\n    margin-bottom: 0;\n    text-align: left;\n  }\n\n  .main__left {\n    align-items: flex-start;\n  }\n\n  .main__left__bottom {\n    position: relative;\n    top: 50px;\n    right: 0;\n  }\n\n  .main__img1, .main__img3 {\n    display: none;\n  }\n\n  .section__text {\n    font-size: 18px;\n    line-height: 24px;\n  }\n\n  .info {\n    border-top: 1px solid #E3E3E3;\n    padding-top: 60px;\n    margin-top: 40px;\n  }\n\n  .info__list {\n    margin-left: 20px;\n  }\n\n  .info__list__card {\n    margin-bottom: 0;\n  }\n\n  .info__list__title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 371px) {\n  .info {\n    margin-top: 120px;\n    padding-top: 40px;\n  }\n\n  .slider__card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .slider__card div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .slider__card p {\n    font-size: 13px;\n    line-height: 16px;\n    text-align: center;\n  }\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scss/fonts.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scss/fonts.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_circe_bold_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/circe_bold.eot */ "./src/fonts/circe_bold.eot");
/* harmony import */ var _fonts_circe_bold_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/circe_bold.woff2 */ "./src/fonts/circe_bold.woff2");
/* harmony import */ var _fonts_circe_bold_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/circe_bold.woff */ "./src/fonts/circe_bold.woff");
/* harmony import */ var _fonts_circe_bold_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/circe_bold.ttf */ "./src/fonts/circe_bold.ttf");
/* harmony import */ var _fonts_circe_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/circe_bold.svg */ "./src/fonts/circe_bold.svg");
/* harmony import */ var _fonts_circe_extrabold_eot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/circe_extrabold.eot */ "./src/fonts/circe_extrabold.eot");
/* harmony import */ var _fonts_circe_extrabold_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/circe_extrabold.woff2 */ "./src/fonts/circe_extrabold.woff2");
/* harmony import */ var _fonts_circe_extrabold_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/circe_extrabold.woff */ "./src/fonts/circe_extrabold.woff");
/* harmony import */ var _fonts_circe_extrabold_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fonts/circe_extrabold.ttf */ "./src/fonts/circe_extrabold.ttf");
/* harmony import */ var _fonts_circe_extrabold_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../fonts/circe_extrabold.svg */ "./src/fonts/circe_extrabold.svg");
/* harmony import */ var _fonts_circe_extralight_eot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fonts/circe_extralight.eot */ "./src/fonts/circe_extralight.eot");
/* harmony import */ var _fonts_circe_extralight_woff2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fonts/circe_extralight.woff2 */ "./src/fonts/circe_extralight.woff2");
/* harmony import */ var _fonts_circe_extralight_woff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../fonts/circe_extralight.woff */ "./src/fonts/circe_extralight.woff");
/* harmony import */ var _fonts_circe_extralight_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fonts/circe_extralight.ttf */ "./src/fonts/circe_extralight.ttf");
/* harmony import */ var _fonts_circe_extralight_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fonts/circe_extralight.svg */ "./src/fonts/circe_extralight.svg");
/* harmony import */ var _fonts_circe_light_eot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fonts/circe_light.eot */ "./src/fonts/circe_light.eot");
/* harmony import */ var _fonts_circe_light_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../fonts/circe_light.woff2 */ "./src/fonts/circe_light.woff2");
/* harmony import */ var _fonts_circe_light_woff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../fonts/circe_light.woff */ "./src/fonts/circe_light.woff");
/* harmony import */ var _fonts_circe_light_ttf__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../fonts/circe_light.ttf */ "./src/fonts/circe_light.ttf");
/* harmony import */ var _fonts_circe_light_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../fonts/circe_light.svg */ "./src/fonts/circe_light.svg");
/* harmony import */ var _fonts_circe_eot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../fonts/circe.eot */ "./src/fonts/circe.eot");
/* harmony import */ var _fonts_circe_woff2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../fonts/circe.woff2 */ "./src/fonts/circe.woff2");
/* harmony import */ var _fonts_circe_woff__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../fonts/circe.woff */ "./src/fonts/circe.woff");
/* harmony import */ var _fonts_circe_ttf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../fonts/circe.ttf */ "./src/fonts/circe.ttf");
/* harmony import */ var _fonts_circe_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../fonts/circe.svg */ "./src/fonts/circe.svg");
/* harmony import */ var _fonts_circe_thin_eot__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../fonts/circe_thin.eot */ "./src/fonts/circe_thin.eot");
/* harmony import */ var _fonts_circe_thin_woff2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../fonts/circe_thin.woff2 */ "./src/fonts/circe_thin.woff2");
/* harmony import */ var _fonts_circe_thin_woff__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../fonts/circe_thin.woff */ "./src/fonts/circe_thin.woff");
/* harmony import */ var _fonts_circe_thin_ttf__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../fonts/circe_thin.ttf */ "./src/fonts/circe_thin.ttf");
/* harmony import */ var _fonts_circe_thin_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../fonts/circe_thin.svg */ "./src/fonts/circe_thin.svg");
// Imports
































var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_eot__WEBPACK_IMPORTED_MODULE_2__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_woff2__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_bold_svg__WEBPACK_IMPORTED_MODULE_6__["default"], { hash: "#circe_bold" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_eot__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_eot__WEBPACK_IMPORTED_MODULE_7__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_ttf__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extrabold_svg__WEBPACK_IMPORTED_MODULE_11__["default"], { hash: "#circe_extrabold" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_eot__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_eot__WEBPACK_IMPORTED_MODULE_12__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_woff2__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_woff__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_ttf__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_extralight_svg__WEBPACK_IMPORTED_MODULE_16__["default"], { hash: "#circe_extralight" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_eot__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_eot__WEBPACK_IMPORTED_MODULE_17__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_woff2__WEBPACK_IMPORTED_MODULE_18__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_woff__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_ttf__WEBPACK_IMPORTED_MODULE_20__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_light_svg__WEBPACK_IMPORTED_MODULE_21__["default"], { hash: "#circe_light" });
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_eot__WEBPACK_IMPORTED_MODULE_22__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_eot__WEBPACK_IMPORTED_MODULE_22__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_woff2__WEBPACK_IMPORTED_MODULE_23__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_woff__WEBPACK_IMPORTED_MODULE_24__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_ttf__WEBPACK_IMPORTED_MODULE_25__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_svg__WEBPACK_IMPORTED_MODULE_26__["default"], { hash: "#circe" });
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_eot__WEBPACK_IMPORTED_MODULE_27__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_eot__WEBPACK_IMPORTED_MODULE_27__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_woff2__WEBPACK_IMPORTED_MODULE_28__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_woff__WEBPACK_IMPORTED_MODULE_29__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_ttf__WEBPACK_IMPORTED_MODULE_30__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_circe_thin_svg__WEBPACK_IMPORTED_MODULE_31__["default"], { hash: "#circe_thin" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n\tfont-family: 'Circe Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe ExtraBold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe ExtraLight';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe Light';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe Thin';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + "); /* IE 9 Compatibility Mode */\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format('embedded-opentype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format('woff2'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ") format('woff'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ") format('truetype'), \n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ") format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n", "",{"version":3,"sources":["fonts.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;CACzB,4CAAmC,EAAE,4BAA4B;CACjE;;;;uDAIwD,EAAE,2BAA2B;AACtF;;AAEA;CACC,8BAA8B;CAC9B,4CAAwC,EAAE,4BAA4B;CACtE;;;;wDAIkE,EAAE,2BAA2B;AAChG;;AAEA;CACC,+BAA+B;CAC/B,6CAAyC,EAAE,4BAA4B;CACvE;;;;wDAIoE,EAAE,2BAA2B;AAClG;;AAEA;CACC,0BAA0B;CAC1B,6CAAoC,EAAE,4BAA4B;CAClE;;;;wDAI0D,EAAE,2BAA2B;AACxF;;AAEA;CACC,oBAAoB;CACpB,6CAA8B,EAAE,4BAA4B;CAC5D;;;;wDAI8C,EAAE,2BAA2B;AAC5E;;AAEA;CACC,yBAAyB;CACzB,6CAAmC,EAAE,4BAA4B;CACjE;;;;wDAIwD,EAAE,2BAA2B;AACtF","file":"fonts.css","sourcesContent":["@font-face {\n\tfont-family: 'Circe Bold';\n\tsrc: url('../fonts/circe_bold.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe_bold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe_bold.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe_bold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe_bold.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe_bold.svg#circe_bold') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe ExtraBold';\n\tsrc: url('../fonts/circe_extrabold.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe_extrabold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe_extrabold.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe_extrabold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe_extrabold.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe_extrabold.svg#circe_extrabold') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe ExtraLight';\n\tsrc: url('../fonts/circe_extralight.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe_extralight.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe_extralight.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe_extralight.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe_extralight.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe_extralight.svg#circe_extralight') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe Light';\n\tsrc: url('../fonts/circe_light.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe_light.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe_light.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe_light.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe_light.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe_light.svg#circe_light') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe';\n\tsrc: url('../fonts/circe.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe.svg#circe') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n@font-face {\n\tfont-family: 'Circe Thin';\n\tsrc: url('../fonts/circe_thin.eot'); /* IE 9 Compatibility Mode */\n\tsrc: url('../fonts/circe_thin.eot?#iefix') format('embedded-opentype'), /* IE < 9 */\n\t\turl('../fonts/circe_thin.woff2') format('woff2'), /* Super Modern Browsers */\n\t\turl('../fonts/circe_thin.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */\n\t\turl('../fonts/circe_thin.ttf') format('truetype'), /* Safari, Android, iOS */\n\t\turl('../fonts/circe_thin.svg#circe_thin') format('svg'); /* Chrome < 4, Legacy iOS */\n}\n\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_media_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/media.css */ "./src/scss/media.css");
/* harmony import */ var _scss_media_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_media_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _assets_main_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/main-img.png */ "./src/assets/main-img.png");
/* harmony import */ var _assets_icon_quote_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icon-quote.png */ "./src/assets/icon-quote.png");
/* harmony import */ var _assets_mria_team_sign_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/mria-team-sign.png */ "./src/assets/mria-team-sign.png");
/* harmony import */ var _assets_logo_top_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/logo-top.png */ "./src/assets/logo-top.png");
/* harmony import */ var _assets_imgs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/imgs.png */ "./src/assets/imgs.png");
/* harmony import */ var _assets_ill_checkup_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/ill-checkup.png */ "./src/assets/ill-checkup.png");
/* harmony import */ var _assets_heart_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/heart-logo.png */ "./src/assets/heart-logo.png");
/* harmony import */ var _assets_ill_nutrition_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/ill-nutrition.png */ "./src/assets/ill-nutrition.png");
/* harmony import */ var _assets_ill_workouts_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/ill-workouts.png */ "./src/assets/ill-workouts.png");
/* harmony import */ var _assets_ill_nutraceutical_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/ill-nutraceutical.png */ "./src/assets/ill-nutraceutical.png");
/* harmony import */ var _assets_ill_recreation_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/ill-recreation.png */ "./src/assets/ill-recreation.png");


















let getImg = document.querySelector("#getImg")
let quoteEl = document.querySelector("#quote")
let rospEl = document.querySelector("#rosp")
let logoEl = document.querySelector("#imgLogo")
let foneEl = document.querySelector("#fone")

let logoSliderEl = document.querySelector("#sliderLogoOne")
let logoSliderEl2 = document.querySelector("#sliderLogoTwo")
let logoSliderEl3 = document.querySelector("#sliderLogoThree")
let logoSliderEl4 = document.querySelector("#sliderLogoFour")
let logoSliderEl5 = document.querySelector("#sliderLogoFive")
let logoSliderEl6 = document.querySelector("#sliderLogoSix")

document.addEventListener("DOMContentLoaded", event => {
  getImg.src = _assets_main_img_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  quoteEl.src = _assets_icon_quote_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  rospEl.src = _assets_mria_team_sign_png__WEBPACK_IMPORTED_MODULE_6__["default"]
  logoEl.src = _assets_logo_top_png__WEBPACK_IMPORTED_MODULE_7__["default"]
  foneEl.src = _assets_imgs_png__WEBPACK_IMPORTED_MODULE_8__["default"]

  logoSliderEl.src = _assets_ill_checkup_png__WEBPACK_IMPORTED_MODULE_9__["default"]
  logoSliderEl2.src = _assets_heart_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"]
  logoSliderEl3.src = _assets_ill_nutrition_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  logoSliderEl4.src = _assets_ill_workouts_png__WEBPACK_IMPORTED_MODULE_12__["default"]
  logoSliderEl5.src = _assets_ill_nutraceutical_png__WEBPACK_IMPORTED_MODULE_13__["default"]
  logoSliderEl6.src = _assets_ill_recreation_png__WEBPACK_IMPORTED_MODULE_14__["default"]
  
  Object(_slider_js__WEBPACK_IMPORTED_MODULE_2__["slider"])()
  Object(_modal_js__WEBPACK_IMPORTED_MODULE_3__["modal"])()
})

/***/ }),

/***/ "./src/assets/Polygon 4.png":
/*!**********************************!*\
  !*** ./src/assets/Polygon 4.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/Polygon 4.png");

/***/ }),

/***/ "./src/assets/Polygon 6.png":
/*!**********************************!*\
  !*** ./src/assets/Polygon 6.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/Polygon 6.png");

/***/ }),

/***/ "./src/assets/Vector 34.png":
/*!**********************************!*\
  !*** ./src/assets/Vector 34.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/Vector 34.png");

/***/ }),

/***/ "./src/assets/a1.png":
/*!***************************!*\
  !*** ./src/assets/a1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/a1.png");

/***/ }),

/***/ "./src/assets/a3.png":
/*!***************************!*\
  !*** ./src/assets/a3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/a3.png");

/***/ }),

/***/ "./src/assets/a4.png":
/*!***************************!*\
  !*** ./src/assets/a4.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/a4.png");

/***/ }),

/***/ "./src/assets/a5.png":
/*!***************************!*\
  !*** ./src/assets/a5.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/a5.png");

/***/ }),

/***/ "./src/assets/arrow-btn (Stroke).png":
/*!*******************************************!*\
  !*** ./src/assets/arrow-btn (Stroke).png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/arrow-btn (Stroke).png");

/***/ }),

/***/ "./src/assets/arrow-down.png":
/*!***********************************!*\
  !*** ./src/assets/arrow-down.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/arrow-down.png");

/***/ }),

/***/ "./src/assets/blob-green (1).png":
/*!***************************************!*\
  !*** ./src/assets/blob-green (1).png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/blob-green (1).png");

/***/ }),

/***/ "./src/assets/blob-light.png":
/*!***********************************!*\
  !*** ./src/assets/blob-light.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/blob-light.png");

/***/ }),

/***/ "./src/assets/blob-yellow.png":
/*!************************************!*\
  !*** ./src/assets/blob-yellow.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/blob-yellow.png");

/***/ }),

/***/ "./src/assets/close-icon.png":
/*!***********************************!*\
  !*** ./src/assets/close-icon.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/close-icon.png");

/***/ }),

/***/ "./src/assets/heart-logo.png":
/*!***********************************!*\
  !*** ./src/assets/heart-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/heart-logo.png");

/***/ }),

/***/ "./src/assets/icon-arrow.png":
/*!***********************************!*\
  !*** ./src/assets/icon-arrow.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icon-arrow.png");

/***/ }),

/***/ "./src/assets/icon-b.png":
/*!*******************************!*\
  !*** ./src/assets/icon-b.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icon-b.png");

/***/ }),

/***/ "./src/assets/icon-navigation.png":
/*!****************************************!*\
  !*** ./src/assets/icon-navigation.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icon-navigation.png");

/***/ }),

/***/ "./src/assets/icon-quote.png":
/*!***********************************!*\
  !*** ./src/assets/icon-quote.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/icon-quote.png");

/***/ }),

/***/ "./src/assets/ill-checkup.png":
/*!************************************!*\
  !*** ./src/assets/ill-checkup.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/ill-checkup.png");

/***/ }),

/***/ "./src/assets/ill-nutraceutical.png":
/*!******************************************!*\
  !*** ./src/assets/ill-nutraceutical.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/ill-nutraceutical.png");

/***/ }),

/***/ "./src/assets/ill-nutrition.png":
/*!**************************************!*\
  !*** ./src/assets/ill-nutrition.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/ill-nutrition.png");

/***/ }),

/***/ "./src/assets/ill-recreation.png":
/*!***************************************!*\
  !*** ./src/assets/ill-recreation.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/ill-recreation.png");

/***/ }),

/***/ "./src/assets/ill-workouts.png":
/*!*************************************!*\
  !*** ./src/assets/ill-workouts.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/ill-workouts.png");

/***/ }),

/***/ "./src/assets/imgs.png":
/*!*****************************!*\
  !*** ./src/assets/imgs.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/imgs.png");

/***/ }),

/***/ "./src/assets/logo-top.png":
/*!*********************************!*\
  !*** ./src/assets/logo-top.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/logo-top.png");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/logo.png");

/***/ }),

/***/ "./src/assets/main-img.png":
/*!*********************************!*\
  !*** ./src/assets/main-img.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/main-img.png");

/***/ }),

/***/ "./src/assets/mria-team-sign.png":
/*!***************************************!*\
  !*** ./src/assets/mria-team-sign.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/mria-team-sign.png");

/***/ }),

/***/ "./src/assets/phone.png":
/*!******************************!*\
  !*** ./src/assets/phone.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/phone.png");

/***/ }),

/***/ "./src/assets/type.png":
/*!*****************************!*\
  !*** ./src/assets/type.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/type.png");

/***/ }),

/***/ "./src/fonts/circe.eot":
/*!*****************************!*\
  !*** ./src/fonts/circe.eot ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13bbfad0e7f851273f3cf30569c7eb3a.eot");

/***/ }),

/***/ "./src/fonts/circe.svg":
/*!*****************************!*\
  !*** ./src/fonts/circe.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a5f2111ae45fbb6915921c09dd6d4d0.svg");

/***/ }),

/***/ "./src/fonts/circe.ttf":
/*!*****************************!*\
  !*** ./src/fonts/circe.ttf ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "814e4dd4329ffdb6c9ed90c49299d4aa.ttf");

/***/ }),

/***/ "./src/fonts/circe.woff":
/*!******************************!*\
  !*** ./src/fonts/circe.woff ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe.woff2":
/*!*******************************!*\
  !*** ./src/fonts/circe.woff2 ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2eeb9a94d9498ac19fe2d3a47137bdc.woff2");

/***/ }),

/***/ "./src/fonts/circe_bold.eot":
/*!**********************************!*\
  !*** ./src/fonts/circe_bold.eot ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "23b8280ab15052d5ba11eeb37bfebdd8.eot");

/***/ }),

/***/ "./src/fonts/circe_bold.svg":
/*!**********************************!*\
  !*** ./src/fonts/circe_bold.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4c87afa42ed40c9491797bb2c48409b2.svg");

/***/ }),

/***/ "./src/fonts/circe_bold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/circe_bold.ttf ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63396ee791f60623acbfa96b07ab9724.ttf");

/***/ }),

/***/ "./src/fonts/circe_bold.woff":
/*!***********************************!*\
  !*** ./src/fonts/circe_bold.woff ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe_bold.woff2":
/*!************************************!*\
  !*** ./src/fonts/circe_bold.woff2 ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a85d2f6ea13d1b2df6f599ae37f63ae.woff2");

/***/ }),

/***/ "./src/fonts/circe_extrabold.eot":
/*!***************************************!*\
  !*** ./src/fonts/circe_extrabold.eot ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4c74fd73e7d5ee9eee7d072f6a8c084a.eot");

/***/ }),

/***/ "./src/fonts/circe_extrabold.svg":
/*!***************************************!*\
  !*** ./src/fonts/circe_extrabold.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f3849f2e37b8395722dfcf58452bbb1b.svg");

/***/ }),

/***/ "./src/fonts/circe_extrabold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/circe_extrabold.ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "87e2d898df4f6a61b4b855a53aeafaa2.ttf");

/***/ }),

/***/ "./src/fonts/circe_extrabold.woff":
/*!****************************************!*\
  !*** ./src/fonts/circe_extrabold.woff ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe_extrabold.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/circe_extrabold.woff2 ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "99416b5d7fdcab9e3c3a3cf28f7e2826.woff2");

/***/ }),

/***/ "./src/fonts/circe_extralight.eot":
/*!****************************************!*\
  !*** ./src/fonts/circe_extralight.eot ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f3ca43ce4ca34c99c00feaf7d1cff64.eot");

/***/ }),

/***/ "./src/fonts/circe_extralight.svg":
/*!****************************************!*\
  !*** ./src/fonts/circe_extralight.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9da4d31a4f523e989e58dde8a887dc08.svg");

/***/ }),

/***/ "./src/fonts/circe_extralight.ttf":
/*!****************************************!*\
  !*** ./src/fonts/circe_extralight.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d95151f8b96ed97a96811cc21e636de4.ttf");

/***/ }),

/***/ "./src/fonts/circe_extralight.woff":
/*!*****************************************!*\
  !*** ./src/fonts/circe_extralight.woff ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe_extralight.woff2":
/*!******************************************!*\
  !*** ./src/fonts/circe_extralight.woff2 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "537ca611fdf789932c76311ae7fb272c.woff2");

/***/ }),

/***/ "./src/fonts/circe_light.eot":
/*!***********************************!*\
  !*** ./src/fonts/circe_light.eot ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e4ca0f7a178447eed594331d33a3ac5d.eot");

/***/ }),

/***/ "./src/fonts/circe_light.svg":
/*!***********************************!*\
  !*** ./src/fonts/circe_light.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b9312269099e758f879d93e7c35ab4ff.svg");

/***/ }),

/***/ "./src/fonts/circe_light.ttf":
/*!***********************************!*\
  !*** ./src/fonts/circe_light.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "61755338a0e56c46dab8b0132e4d2f3b.ttf");

/***/ }),

/***/ "./src/fonts/circe_light.woff":
/*!************************************!*\
  !*** ./src/fonts/circe_light.woff ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe_light.woff2":
/*!*************************************!*\
  !*** ./src/fonts/circe_light.woff2 ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a138ed3d89a54ab91348ae838d1c59dd.woff2");

/***/ }),

/***/ "./src/fonts/circe_thin.eot":
/*!**********************************!*\
  !*** ./src/fonts/circe_thin.eot ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "00bb023a19a35602c7face64d5e4c6b3.eot");

/***/ }),

/***/ "./src/fonts/circe_thin.svg":
/*!**********************************!*\
  !*** ./src/fonts/circe_thin.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "89dfed3d85426becbade87295f1275c5.svg");

/***/ }),

/***/ "./src/fonts/circe_thin.ttf":
/*!**********************************!*\
  !*** ./src/fonts/circe_thin.ttf ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4272af7797a43baa082078abd1353503.ttf");

/***/ }),

/***/ "./src/fonts/circe_thin.woff":
/*!***********************************!*\
  !*** ./src/fonts/circe_thin.woff ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31d6cfe0d16ae931b73c59d7e0c089c0.woff");

/***/ }),

/***/ "./src/fonts/circe_thin.woff2":
/*!************************************!*\
  !*** ./src/fonts/circe_thin.woff2 ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e44d72da66137f5822c7f801ed4f59f4.woff2");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
function modal() {
  let popupWrapper = document.getElementById("popup")
  let popup = document.querySelector(".popup")
  let phone = document.querySelector(".header__right")
  let phone2 = document.querySelector(".main__phone")
  let close = document.querySelector(".close")

  phone.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  phone2.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  close.addEventListener("click", event => popupWrapper.classList.add("hide"))
  phone.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  popupWrapper.addEventListener("click", event => popupWrapper.classList.add("hide"))
  popup.addEventListener("click", event => event.stopPropagation())
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/media.css":
/*!****************************!*\
  !*** ./src/scss/media.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./media.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/media.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
function slider() {
  let preLeft = document.querySelector(".slider__card-4")
  let left = document.querySelector(".slider__card-2")
  let middle = document.querySelector(".slider__card-1")
  let right = document.querySelector(".slider__card-3")
  let preRight = document.querySelector(".slider__card-5")
  let end = document.querySelector(".slider__card-6")

  let elMiddle = document.querySelector(".slider__middle")

  let elements = [preLeft, left, middle, right, preRight, end]

  elMiddle.addEventListener("click", () => elements.forEach(item => elScroll(item)))
  elMiddle.addEventListener("click", () => roundLoad())
  elements.forEach(item => {
    item.addEventListener("click", () => elements.forEach(item => elScroll(item)))
    item.addEventListener("click", () => roundLoad())
  })
} 

let num = 1

function elScroll(el) {
  let lPos = parseInt(el.getAttribute("ispos"))
  if (lPos < 6) {
    el.classList.remove("pos" + String(lPos))
    el.classList.add("pos" + parseInt(lPos + 1))
    el.removeAttribute("ispos")
    el.setAttribute("ispos", parseInt(lPos + 1))
  } else {
    el.classList.remove("pos" + String(lPos))
    el.classList.add("pos" + String(1))
    el.removeAttribute("ispos")
    el.setAttribute("ispos", 1)
  }
}

function roundLoad() {
  if (document.documentElement.clientWidth < 891) return;
  let numbersEl = document.querySelectorAll(".slider__numbers")

  let lastNum = numbersEl[0]
  let numbers = []
  numbersEl.forEach(item => numbers.push(item))
  numbers.push(lastNum)
  numbers.shift()

  if (num < 6) {
    num += 1
    numbers.forEach((item, index) => {
      let numItem = item.getAttribute("num")
      let number = item.querySelector(".slider__numbers__num")
      let round = item.querySelector(".slider__numbers__round")
      let title = item.querySelector(".slider__numbers__title")
      if (numItem == num) {
        let prevEl = numbers[index - 1]
        let prevNumber = prevEl.querySelector(".slider__numbers__num")
        let prevRound = prevEl.querySelector(".slider__numbers__round")
        let prevTitle = prevEl.querySelector(".slider__numbers__title")

        prevNumber.classList.add("hide")
        prevRound.classList.remove("hide")
        prevTitle.classList.remove("slider__active")

        round.classList.add("hide")
        number.classList.remove("hide")
        title.classList.add("slider__active")
      }
    })
  } else {
    num = 1
    numbers.forEach((item, index) => {
      let numItem = item.getAttribute("num")
      let number = item.querySelector(".slider__numbers__num")
      let round = item.querySelector(".slider__numbers__round")
      let title = item.querySelector(".slider__numbers__title")
      if (numItem == "6") {
        let nextEl = numbers[0]
        let nextNumber = nextEl.querySelector(".slider__numbers__num")
        let nextRound = nextEl.querySelector(".slider__numbers__round")
        let nextTitle = nextEl.querySelector(".slider__numbers__title")

        nextNumber.classList.remove("hide")
        nextRound.classList.add("hide")
        nextTitle.classList.add("slider__active")

        round.classList.remove("hide")
        number.classList.add("hide")
        title.classList.remove("slider__active")
      }
    })
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map