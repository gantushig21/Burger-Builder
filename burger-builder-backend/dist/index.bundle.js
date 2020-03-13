module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar devConfig = {\n  JWT_SECRET: process.env.JWT_SECRET_DEV,\n  MONGO_URL: process.env.MONGO_URL_DEV,\n  MONGO_USER: process.env.MONGO_USER_DEV,\n  MONGO_PASS: process.env.MONGO_PASS_DEV\n};\nvar testConfig = {\n  JWT_SECRET: process.env.JWT_SECRET_TEST,\n  MONGO_URL: process.env.MONGO_URL_TEST,\n  MONGO_USER: process.env.MONGO_USER_TEST,\n  MONGO_PASS: process.env.MONGO_PASS_TEST\n};\nvar prodConfig = {\n  JWT_SECRET: process.env.JWT_SECRET_PROD,\n  MONGO_URL: process.env.MONGO_URL_PROD,\n  MONGO_USER: process.env.MONGO_USER_PROD,\n  MONGO_PASS: process.env.MONGO_PASS_PROD\n};\nvar defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case \"development\":\n      return devConfig;\n\n    case \"test\":\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_objectSpread({}, defaultConfig, {}, envConfig(\"development\")));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nvar dbConnection = null;\n\ntry {\n  dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true // auth: {\n    //   user: constants.MONGO_USER,\n    //   password: constants.MONGO_PASS\n    // }\n\n  });\n} catch (error) {\n  dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true // auth: {\n    //   user: constants.MONGO_USER,\n    //   password: constants.MONGO_PASS\n    // }\n\n  });\n}\n\ndbConnection.then(() => {\n  console.log(\"MongoDB Running\");\n}, err => {\n  throw err;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! method-override */ \"method-override\");\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var frameguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! frameguard */ \"frameguard\");\n/* harmony import */ var frameguard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(frameguard__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar isDev = \"development\" === 'development';\nvar isProd = \"development\" === 'production';\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n  app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(method_override__WEBPACK_IMPORTED_MODULE_5___default()());\n  app.use(frameguard__WEBPACK_IMPORTED_MODULE_6___default()({\n    action: 'sameorigin'\n  }));\n  app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n/* harmony import */ var _config_middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n/* harmony import */ var _modules_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/routes */ \"./src/modules/routes.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_config_middlewares__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\napp.use('/api', _modules_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.listen(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(\"\\n            Server is running on port: \".concat(_config_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PORT, \"\\n            ---\\n            Running on \").concat(\"development\", \"\\n            ---\\n            Make something great\\n        \"));\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/ingredients/ingredient.controllers.js":
/*!***********************************************************!*\
  !*** ./src/modules/ingredients/ingredient.controllers.js ***!
  \***********************************************************/
/*! exports provided: addIngredient, getIngredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addIngredient\", function() { return addIngredient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIngredients\", function() { return getIngredients; });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient.model */ \"./src/modules/ingredients/ingredient.model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction addIngredient(_x, _x2) {\n  return _addIngredient.apply(this, arguments);\n}\n\nfunction _addIngredient() {\n  _addIngredient = _asyncToGenerator(function* (req, res) {\n    try {\n      var ingredient = yield _ingredient_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        type: req.body.type\n      });\n      if (ingredient) throw new Error(\"The ingredient is already in the list\");\n      ingredient = yield _ingredient_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(ingredient);\n    } catch (err) {\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR).json(err.message);\n    }\n  });\n  return _addIngredient.apply(this, arguments);\n}\n\nfunction getIngredients(_x3, _x4) {\n  return _getIngredients.apply(this, arguments);\n}\n\nfunction _getIngredients() {\n  _getIngredients = _asyncToGenerator(function* (req, res) {\n    try {\n      var ingredients = yield _ingredient_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n      ingredients = ingredients.reduce((obj, ingredient) => {\n        obj[ingredient.type] = ingredient.number;\n        return obj;\n      }, {});\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(ingredients);\n    } catch (err) {\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR).json(err.message);\n    }\n  });\n  return _getIngredients.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/modules/ingredients/ingredient.controllers.js?");

/***/ }),

/***/ "./src/modules/ingredients/ingredient.model.js":
/*!*****************************************************!*\
  !*** ./src/modules/ingredients/ingredient.model.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar IngredientSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  type: {\n    type: String,\n    required: true,\n    trim: true,\n    lowercase: true\n  },\n  number: {\n    type: Number,\n    default: 0\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Ingredient', IngredientSchema));\n\n//# sourceURL=webpack:///./src/modules/ingredients/ingredient.model.js?");

/***/ }),

/***/ "./src/modules/ingredients/ingredient.routes.js":
/*!******************************************************!*\
  !*** ./src/modules/ingredients/ingredient.routes.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ingredient_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredient.validations */ \"./src/modules/ingredients/ingredient.validations.js\");\n/* harmony import */ var _ingredient_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredient.controllers */ \"./src/modules/ingredients/ingredient.controllers.js\");\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.get('/', _ingredient_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getIngredients\"]);\nroutes.post('/', express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_ingredient_validations__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addIngredient), _ingredient_controllers__WEBPACK_IMPORTED_MODULE_3__[\"addIngredient\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/ingredients/ingredient.routes.js?");

/***/ }),

/***/ "./src/modules/ingredients/ingredient.validations.js":
/*!***********************************************************!*\
  !*** ./src/modules/ingredients/ingredient.validations.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validations */ \"./src/utils/validations.js\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ \"./src/utils/functions.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  addIngredient: {\n    body: {\n      type: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"engTextReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError)\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/ingredients/ingredient.validations.js?");

/***/ }),

/***/ "./src/modules/orders/order.controllers.js":
/*!*************************************************!*\
  !*** ./src/modules/orders/order.controllers.js ***!
  \*************************************************/
/*! exports provided: orderBurger, getOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderBurger\", function() { return orderBurger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOrders\", function() { return getOrders; });\n/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.model */ \"./src/modules/orders/order.model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction orderBurger(_x, _x2) {\n  return _orderBurger.apply(this, arguments);\n}\n\nfunction _orderBurger() {\n  _orderBurger = _asyncToGenerator(function* (req, res) {\n    try {\n      var order = yield _order_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        ingredients: req.body.ingredients,\n        price: req.body.price,\n        customer: {\n          name: req.body.orderData.name,\n          address: {\n            street: req.body.orderData.street,\n            zipCode: req.body.orderData.zipCode,\n            country: req.body.orderData.country\n          },\n          email: req.body.orderData.email\n        },\n        deliveryMethod: req.body.deliveryMethod\n      });\n      return res.status(200).json(order);\n    } catch (err) {\n      return res.status(500).json(err);\n    }\n  });\n  return _orderBurger.apply(this, arguments);\n}\n\nfunction getOrders(_x3, _x4) {\n  return _getOrders.apply(this, arguments);\n}\n\nfunction _getOrders() {\n  _getOrders = _asyncToGenerator(function* (req, res) {\n    try {\n      var orders = yield _order_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n      return res.status(200).json(orders);\n    } catch (err) {\n      return res.status(500).json(err);\n    }\n  });\n  return _getOrders.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/modules/orders/order.controllers.js?");

/***/ }),

/***/ "./src/modules/orders/order.model.js":
/*!*******************************************!*\
  !*** ./src/modules/orders/order.model.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar IngredientsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  salad: {\n    type: Number,\n    default: 0\n  },\n  cheese: {\n    type: Number,\n    default: 0\n  },\n  meat: {\n    type: Number,\n    default: 0\n  },\n  bacon: {\n    type: Number,\n    default: 0\n  }\n});\nvar AddressSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  street: {\n    type: String,\n    required: true\n  },\n  zipCode: {\n    type: String,\n    required: true\n  },\n  country: {\n    type: String,\n    required: true\n  }\n});\nvar CusmoterSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  address: {\n    type: AddressSchema,\n    required: true\n  },\n  email: {\n    type: String,\n    trim: true,\n    validate: {\n      validator(email) {\n        return validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(email);\n      },\n\n      message: '{VALUE} is not valid email'\n    },\n    default: null\n  },\n  phone: {\n    type: String,\n    default: null\n  }\n});\nvar OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  ingredients: {\n    type: IngredientsSchema,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  customer: {\n    type: CusmoterSchema,\n    required: true\n  },\n  deliveryMethod: {\n    type: String,\n    default: 'fastest',\n    enum: ['fastest']\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Order', OrderSchema));\n\n//# sourceURL=webpack:///./src/modules/orders/order.model.js?");

/***/ }),

/***/ "./src/modules/orders/order.routes.js":
/*!********************************************!*\
  !*** ./src/modules/orders/order.routes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _order_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.validations */ \"./src/modules/orders/order.validations.js\");\n/* harmony import */ var _order_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.controllers */ \"./src/modules/orders/order.controllers.js\");\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.get('/', _order_controllers__WEBPACK_IMPORTED_MODULE_3__[\"getOrders\"]);\nroutes.post('/', express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_order_validations__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orderBurger), _order_controllers__WEBPACK_IMPORTED_MODULE_3__[\"orderBurger\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/orders/order.routes.js?");

/***/ }),

/***/ "./src/modules/orders/order.validations.js":
/*!*************************************************!*\
  !*** ./src/modules/orders/order.validations.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validations */ \"./src/utils/validations.js\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ \"./src/utils/functions.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  orderBurger: {\n    body: {\n      ingredients: joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({\n        salad: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),\n        cheese: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),\n        meat: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),\n        bacon: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required()\n      }).required(),\n      price: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),\n      orderData: joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({\n        name: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"textReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n        street: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"textReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n        zipCode: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"textReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n        country: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"textReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n        email: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"emailReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n        deliveryMethod: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"engTextReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError)\n      }).required()\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/orders/order.validations.js?");

/***/ }),

/***/ "./src/modules/routes.js":
/*!*******************************!*\
  !*** ./src/modules/routes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _orders_order_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/order.routes */ \"./src/modules/orders/order.routes.js\");\n/* harmony import */ var _ingredients_ingredient_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients/ingredient.routes */ \"./src/modules/ingredients/ingredient.routes.js\");\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/log */ \"./src/utils/log.js\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/error */ \"./src/utils/error.js\");\n\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.use('/v1/orders', _orders_order_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nroutes.use('/v1/ingredients', _ingredients_ingredient_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nroutes.all(\"*\", (req, res, next) => next(new _utils_error__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"Not Found!\", http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true)));\nroutes.use(_utils_log__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/routes.js?");

/***/ }),

/***/ "./src/utils/error.js":
/*!****************************!*\
  !*** ./src/utils/error.js ***!
  \****************************/
/*! exports provided: RequiredError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequiredError\", function() { return RequiredError; });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * @extends Error\n */\n\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic) {\n    super(message);\n    this.name = this.constructor.name;\n    this.message = message;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n\n}\n/**\n * Class representing an API error.\n *\n * @extends ExtendableError\n */\n\n\nclass APIError extends ExtendableError {\n  /**\n   * Creates an API error.\n   *\n   * @param {String} message - Error message.\n   * @param {Number} status - HTTP status code of error.\n   * @param {Boolean} isPublic - Whether the message should be visible to user or not.\n   */\n  constructor(message) {\n    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR;\n    var isPublic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    super(message, status, isPublic);\n  }\n\n}\n/**\n * Class for required error\n *\n * @class RequiredError\n */\n\n\nclass RequiredError {\n  /**\n   * Make error pretty\n   *\n   * @static\n   * @param {Array} errors - Array of error Object\n   * @returns {Object} - errors - Pretty Object transform\n   */\n  static makePretty(errors) {\n    return errors.reduce((obj, error) => {\n      var nObj = obj;\n      nObj[error.field] = error.messages[0].replace(/\"/g, '');\n      return nObj;\n    }, {});\n  }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (APIError);\n\n//# sourceURL=webpack:///./src/utils/error.js?");

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction validationError(errs) {\n  errs.forEach(err => {\n    switch (err.type) {\n      case 'string.regex.base':\n        err.message = 'wrong value';\n        break;\n\n      default:\n        break;\n    }\n  });\n  return errs;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  validationError\n});\n\n//# sourceURL=webpack:///./src/utils/functions.js?");

/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return logErrorService; });\n/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pretty-error */ \"pretty-error\");\n/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pretty_error__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./src/utils/error.js\");\n/**\n * Error handler for api routes\n */\n\n // import constants from '../config/constants';\n\n // const isProd = process.env.NODE_ENV === 'production';\n\nvar isDev = \"development\" === \"development\"; // eslint-disable-next-line no-unused-vars\n\nfunction logErrorService(err, req, res, next) {\n  if (!err) {\n    return new _error__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Error with the server!\", http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR, true);\n  }\n\n  if (isDev) {\n    var pe = new pretty_error__WEBPACK_IMPORTED_MODULE_0___default.a();\n    pe.skipNodeFiles();\n    pe.skipPackage(\"express\"); // eslint-disable-next-line no-console\n\n    console.log(pe.render(err));\n  }\n\n  var error = {\n    message: err.message || \"Internal Server Error.\"\n  };\n\n  if (err.errors) {\n    error.errors = {};\n    var {\n      errors\n    } = err;\n\n    if (Array.isArray(errors)) {\n      error.errors = _error__WEBPACK_IMPORTED_MODULE_2__[\"RequiredError\"].makePretty(errors);\n    } else {\n      Object.keys(errors).forEach(key => {\n        error.errors[key] = errors[key].message;\n      });\n    }\n  }\n\n  res.status(err.status || http_status__WEBPACK_IMPORTED_MODULE_1___default.a.INTERNAL_SERVER_ERROR).json(error);\n  return next();\n}\n\n//# sourceURL=webpack:///./src/utils/log.js?");

/***/ }),

/***/ "./src/utils/validations.js":
/*!**********************************!*\
  !*** ./src/utils/validations.js ***!
  \**********************************/
/*! exports provided: numReg, engTextReg, emailReg, nameReg, passwordReg, textReg, idReg, urlReg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numReg\", function() { return numReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"engTextReg\", function() { return engTextReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emailReg\", function() { return emailReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nameReg\", function() { return nameReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passwordReg\", function() { return passwordReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textReg\", function() { return textReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"idReg\", function() { return idReg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlReg\", function() { return urlReg; });\nvar numReg = /^[0-9]+$/;\nvar engTextReg = /^[A-Z|a-z|0-9| |-]+$/;\nvar emailReg = /^[-a-z0-9%S_+]+(\\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\\.){1,125}[a-z]{2,63}$/i;\nvar nameReg = /^[А-Я|Ү|Ө|а-я|ү|ө|\\-|ё|Ё]+$/;\nvar passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!#%*?&]{8,}$/;\nvar textReg = /^[0-9|A-Z|a-z|А-Я|Ү|Ө|а-я|ү|ө|\\-|ё|Ё|.| |_|,]+$/;\nvar idReg = /^[0-9a-fA-F]{24}$/;\nvar urlReg = /^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$/;\n\n//# sourceURL=webpack:///./src/utils/validations.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "frameguard":
/*!*****************************!*\
  !*** external "frameguard" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"frameguard\");\n\n//# sourceURL=webpack:///external_%22frameguard%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "pretty-error":
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pretty-error\");\n\n//# sourceURL=webpack:///external_%22pretty-error%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });