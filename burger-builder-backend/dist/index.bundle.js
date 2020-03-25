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

/***/ "./node_modules/passport-local/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-local/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-local/lib/strategy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar passport = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , lookup = __webpack_require__(/*! ./utils */ \"./node_modules/passport-local/lib/utils.js\").lookup;\n\n\n/**\n * `Strategy` constructor.\n *\n * The local authentication strategy authenticates requests based on the\n * credentials submitted through an HTML-based login form.\n *\n * Applications must supply a `verify` callback which accepts `username` and\n * `password` credentials, and then calls the `done` callback supplying a\n * `user`, which should be set to `false` if the credentials are not valid.\n * If an exception occured, `err` should be set.\n *\n * Optionally, `options` can be used to change the fields in which the\n * credentials are found.\n *\n * Options:\n *   - `usernameField`  field name where the username is found, defaults to _username_\n *   - `passwordField`  field name where the password is found, defaults to _password_\n *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)\n *\n * Examples:\n *\n *     passport.use(new LocalStrategy(\n *       function(username, password, done) {\n *         User.findOne({ username: username, password: password }, function (err, user) {\n *           done(err, user);\n *         });\n *       }\n *     ));\n *\n * @param {Object} options\n * @param {Function} verify\n * @api public\n */\nfunction Strategy(options, verify) {\n  if (typeof options == 'function') {\n    verify = options;\n    options = {};\n  }\n  if (!verify) { throw new TypeError('LocalStrategy requires a verify callback'); }\n  \n  this._usernameField = options.usernameField || 'username';\n  this._passwordField = options.passwordField || 'password';\n  \n  passport.Strategy.call(this);\n  this.name = 'local';\n  this._verify = verify;\n  this._passReqToCallback = options.passReqToCallback;\n}\n\n/**\n * Inherit from `passport.Strategy`.\n */\nutil.inherits(Strategy, passport.Strategy);\n\n/**\n * Authenticate request based on the contents of a form submission.\n *\n * @param {Object} req\n * @api protected\n */\nStrategy.prototype.authenticate = function(req, options) {\n  options = options || {};\n  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);\n  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);\n  \n  if (!username || !password) {\n    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);\n  }\n  \n  var self = this;\n  \n  function verified(err, user, info) {\n    if (err) { return self.error(err); }\n    if (!user) { return self.fail(info); }\n    self.success(user, info);\n  }\n  \n  try {\n    if (self._passReqToCallback) {\n      this._verify(req, username, password, verified);\n    } else {\n      this._verify(username, password, verified);\n    }\n  } catch (ex) {\n    return self.error(ex);\n  }\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.lookup = function(obj, field) {\n  if (!obj) { return null; }\n  var chain = field.split(']').join('').split('[');\n  for (var i = 0, len = chain.length; i < len; i++) {\n    var prop = obj[chain[i]];\n    if (typeof(prop) === 'undefined') { return null; }\n    if (typeof(prop) !== 'object') { return prop; }\n    obj = prop;\n  }\n  return null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/utils.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-strategy/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-strategy/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/strategy.js":
/*!********************************************************!*\
  !*** ./node_modules/passport-strategy/lib/strategy.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates an instance of `Strategy`.\n *\n * @constructor\n * @api public\n */\nfunction Strategy() {\n}\n\n/**\n * Authenticate request.\n *\n * This function must be overridden by subclasses.  In abstract form, it always\n * throws an exception.\n *\n * @param {Object} req The request to authenticate.\n * @param {Object} [options] Strategy-specific options.\n * @api public\n */\nStrategy.prototype.authenticate = function(req, options) {\n  throw new Error('Strategy#authenticate must be overridden by subclass');\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport/lib/authenticator.js":
/*!****************************************************!*\
  !*** ./node_modules/passport/lib/authenticator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\")\n  , SessionManager = __webpack_require__(/*! ./sessionmanager */ \"./node_modules/passport/lib/sessionmanager.js\");\n\n\n/**\n * `Authenticator` constructor.\n *\n * @api public\n */\nfunction Authenticator() {\n  this._key = 'passport';\n  this._strategies = {};\n  this._serializers = [];\n  this._deserializers = [];\n  this._infoTransformers = [];\n  this._framework = null;\n  this._userProperty = 'user';\n  \n  this.init();\n}\n\n/**\n * Initialize authenticator.\n *\n * @api protected\n */\nAuthenticator.prototype.init = function() {\n  this.framework(__webpack_require__(/*! ./framework/connect */ \"./node_modules/passport/lib/framework/connect.js\")());\n  this.use(new SessionStrategy(this.deserializeUser.bind(this)));\n  this._sm = new SessionManager({ key: this._key }, this.serializeUser.bind(this));\n};\n\n/**\n * Utilize the given `strategy` with optional `name`, overridding the strategy's\n * default name.\n *\n * Examples:\n *\n *     passport.use(new TwitterStrategy(...));\n *\n *     passport.use('api', new http.BasicStrategy(...));\n *\n * @param {String|Strategy} name\n * @param {Strategy} strategy\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.use = function(name, strategy) {\n  if (!strategy) {\n    strategy = name;\n    name = strategy.name;\n  }\n  if (!name) { throw new Error('Authentication strategies must have a name'); }\n  \n  this._strategies[name] = strategy;\n  return this;\n};\n\n/**\n * Un-utilize the `strategy` with given `name`.\n *\n * In typical applications, the necessary authentication strategies are static,\n * configured once and always available.  As such, there is often no need to\n * invoke this function.\n *\n * However, in certain situations, applications may need dynamically configure\n * and de-configure authentication strategies.  The `use()`/`unuse()`\n * combination satisfies these scenarios.\n *\n * Examples:\n *\n *     passport.unuse('legacy-api');\n *\n * @param {String} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.unuse = function(name) {\n  delete this._strategies[name];\n  return this;\n};\n\n/**\n * Setup Passport to be used under framework.\n *\n * By default, Passport exposes middleware that operate using Connect-style\n * middleware using a `fn(req, res, next)` signature.  Other popular frameworks\n * have different expectations, and this function allows Passport to be adapted\n * to operate within such environments.\n *\n * If you are using a Connect-compatible framework, including Express, there is\n * no need to invoke this function.\n *\n * Examples:\n *\n *     passport.framework(require('hapi-passport')());\n *\n * @param {Object} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.framework = function(fw) {\n  this._framework = fw;\n  return this;\n};\n\n/**\n * Passport's primary initialization middleware.\n *\n * This middleware must be in use by the Connect/Express application for\n * Passport to operate.\n *\n * Options:\n *   - `userProperty`  Property to set on `req` upon login, defaults to _user_\n *\n * Examples:\n *\n *     app.use(passport.initialize());\n *\n *     app.use(passport.initialize({ userProperty: 'currentUser' }));\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.initialize = function(options) {\n  options = options || {};\n  this._userProperty = options.userProperty || 'user';\n  \n  return this._framework.initialize(this, options);\n};\n\n/**\n * Middleware that will authenticate a request using the given `strategy` name,\n * with optional `options` and `callback`.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })(req, res);\n *\n *     passport.authenticate('local', function(err, user) {\n *       if (!user) { return res.redirect('/login'); }\n *       res.end('Authenticated!');\n *     })(req, res);\n *\n *     passport.authenticate('basic', { session: false })(req, res);\n *\n *     app.get('/auth/twitter', passport.authenticate('twitter'), function(req, res) {\n *       // request will be redirected to Twitter\n *     });\n *     app.get('/auth/twitter/callback', passport.authenticate('twitter'), function(req, res) {\n *       res.json(req.user);\n *     });\n *\n * @param {String} strategy\n * @param {Object} options\n * @param {Function} callback\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authenticate = function(strategy, options, callback) {\n  return this._framework.authenticate(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will authorize a third-party account using the given\n * `strategy` name, with optional `options`.\n *\n * If authorization is successful, the result provided by the strategy's verify\n * callback will be assigned to `req.account`.  The existing login session and\n * `req.user` will be unaffected.\n *\n * This function is particularly useful when connecting third-party accounts\n * to the local account of a user that is currently authenticated.\n *\n * Examples:\n *\n *    passport.authorize('twitter-authz', { failureRedirect: '/account' });\n *\n * @param {String} strategy\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authorize = function(strategy, options, callback) {\n  options = options || {};\n  options.assignProperty = 'account';\n  \n  var fn = this._framework.authorize || this._framework.authenticate;\n  return fn(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will restore login state from a session.\n *\n * Web applications typically use sessions to maintain login state between\n * requests.  For example, a user will authenticate by entering credentials into\n * a form which is submitted to the server.  If the credentials are valid, a\n * login session is established by setting a cookie containing a session\n * identifier in the user's web browser.  The web browser will send this cookie\n * in subsequent requests to the server, allowing a session to be maintained.\n *\n * If sessions are being utilized, and a login session has been established,\n * this middleware will populate `req.user` with the current user.\n *\n * Note that sessions are not strictly required for Passport to operate.\n * However, as a general rule, most web applications will make use of sessions.\n * An exception to this rule would be an API server, which expects each HTTP\n * request to provide credentials in an Authorization header.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n * Options:\n *   - `pauseStream`      Pause the request stream before deserializing the user\n *                        object from the session.  Defaults to _false_.  Should\n *                        be set to true in cases where middleware consuming the\n *                        request body is configured after passport and the\n *                        deserializeUser method is asynchronous.\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.session = function(options) {\n  return this.authenticate('session', options);\n};\n\n// TODO: Make session manager pluggable\n/*\nAuthenticator.prototype.sessionManager = function(mgr) {\n  this._sm = mgr;\n  return this;\n}\n*/\n\n/**\n * Registers a function used to serialize user objects into the session.\n *\n * Examples:\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.serializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._serializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of serializers, attempting\n  // to serialize a user\n  var user = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._serializers;\n  (function pass(i, err, obj) {\n    // serializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or serialized object was obtained, done\n    if (err || obj || obj === 0) { return done(err, obj); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to serialize user into session'));\n    }\n    \n    \n    function serialized(e, o) {\n      pass(i + 1, e, o);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, user, serialized);\n      } else {\n        layer(user, serialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to deserialize user objects out of the session.\n *\n * Examples:\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.deserializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._deserializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of deserializers,\n  // attempting to deserialize a user\n  var obj = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._deserializers;\n  (function pass(i, err, user) {\n    // deserializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or deserialized user was obtained, done\n    if (err || user) { return done(err, user); }\n    // a valid user existed when establishing the session, but that user has\n    // since been removed\n    if (user === null || user === false) { return done(null, false); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to deserialize user out of session'));\n    }\n    \n    \n    function deserialized(e, u) {\n      pass(i + 1, e, u);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, obj, deserialized);\n      } else {\n        layer(obj, deserialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to transform auth info.\n *\n * In some circumstances authorization details are contained in authentication\n * credentials or loaded as part of verification.\n *\n * For example, when using bearer tokens for API authentication, the tokens may\n * encode (either directly or indirectly in a database), details such as scope\n * of access or the client to which the token was issued.\n *\n * Such authorization details should be enforced separately from authentication.\n * Because Passport deals only with the latter, this is the responsiblity of\n * middleware or routes further along the chain.  However, it is not optimal to\n * decode the same data or execute the same database query later.  To avoid\n * this, Passport accepts optional `info` along with the authenticated `user`\n * in a strategy's `success()` action.  This info is set at `req.authInfo`,\n * where said later middlware or routes can access it.\n *\n * Optionally, applications can register transforms to proccess this info,\n * which take effect prior to `req.authInfo` being set.  This is useful, for\n * example, when the info contains a client ID.  The transform can load the\n * client from the database and include the instance in the transformed info,\n * allowing the full set of client properties to be convieniently accessed.\n *\n * If no transforms are registered, `info` supplied by the strategy will be left\n * unmodified.\n *\n * Examples:\n *\n *     passport.transformAuthInfo(function(info, done) {\n *       Client.findById(info.clientID, function (err, client) {\n *         info.client = client;\n *         done(err, info);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.transformAuthInfo = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._infoTransformers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of transformers,\n  // attempting to transform auth info\n  var info = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._infoTransformers;\n  (function pass(i, err, tinfo) {\n    // transformers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or transformed info was obtained, done\n    if (err || tinfo) { return done(err, tinfo); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      // if no transformers are registered (or they all pass), the default\n      // behavior is to use the un-transformed info as-is\n      return done(null, info);\n    }\n    \n    \n    function transformed(e, t) {\n      pass(i + 1, e, t);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 1) {\n        // sync\n        var t = layer(info);\n        transformed(null, t);\n      } else if (arity == 3) {\n        layer(req, info, transformed);\n      } else {\n        layer(info, transformed);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Return strategy with given `name`. \n *\n * @param {String} name\n * @return {Strategy}\n * @api private\n */\nAuthenticator.prototype._strategy = function(name) {\n  return this._strategies[name];\n};\n\n\n/**\n * Expose `Authenticator`.\n */\nmodule.exports = Authenticator;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/authenticator.js?");

/***/ }),

/***/ "./node_modules/passport/lib/errors/authenticationerror.js":
/*!*****************************************************************!*\
  !*** ./node_modules/passport/lib/errors/authenticationerror.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * `AuthenticationError` error.\n *\n * @constructor\n * @api private\n */\nfunction AuthenticationError(message, status) {\n  Error.call(this);\n  Error.captureStackTrace(this, arguments.callee);\n  this.name = 'AuthenticationError';\n  this.message = message;\n  this.status = status || 401;\n}\n\n// Inherit from `Error`.\nAuthenticationError.prototype.__proto__ = Error.prototype;\n\n\n// Expose constructor.\nmodule.exports = AuthenticationError;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/errors/authenticationerror.js?");

/***/ }),

/***/ "./node_modules/passport/lib/framework/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/passport/lib/framework/connect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar initialize = __webpack_require__(/*! ../middleware/initialize */ \"./node_modules/passport/lib/middleware/initialize.js\")\n  , authenticate = __webpack_require__(/*! ../middleware/authenticate */ \"./node_modules/passport/lib/middleware/authenticate.js\");\n  \n/**\n * Framework support for Connect/Express.\n *\n * This module provides support for using Passport with Express.  It exposes\n * middleware that conform to the `fn(req, res, next)` signature and extends\n * Node's built-in HTTP request object with useful authentication-related\n * functions.\n *\n * @return {Object}\n * @api protected\n */\nexports = module.exports = function() {\n  \n  // HTTP extensions.\n  exports.__monkeypatchNode();\n  \n  return {\n    initialize: initialize,\n    authenticate: authenticate\n  };\n};\n\nexports.__monkeypatchNode = function() {\n  var http = __webpack_require__(/*! http */ \"http\");\n  var IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\");\n  \n  http.IncomingMessage.prototype.login =\n  http.IncomingMessage.prototype.logIn = IncomingMessageExt.logIn;\n  http.IncomingMessage.prototype.logout =\n  http.IncomingMessage.prototype.logOut = IncomingMessageExt.logOut;\n  http.IncomingMessage.prototype.isAuthenticated = IncomingMessageExt.isAuthenticated;\n  http.IncomingMessage.prototype.isUnauthenticated = IncomingMessageExt.isUnauthenticated;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/framework/connect.js?");

/***/ }),

/***/ "./node_modules/passport/lib/http/request.js":
/*!***************************************************!*\
  !*** ./node_modules/passport/lib/http/request.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Module dependencies.\n */\n//var http = require('http')\n//  , req = http.IncomingMessage.prototype;\n\n\nvar req = exports = module.exports = {};\n\n/**\n * Initiate a login session for `user`.\n *\n * Options:\n *   - `session`  Save login state in session, defaults to _true_\n *\n * Examples:\n *\n *     req.logIn(user, { session: false });\n *\n *     req.logIn(user, function(err) {\n *       if (err) { throw err; }\n *       // session saved\n *     });\n *\n * @param {User} user\n * @param {Object} options\n * @param {Function} done\n * @api public\n */\nreq.login =\nreq.logIn = function(user, options, done) {\n  if (typeof options == 'function') {\n    done = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  var session = (options.session === undefined) ? true : options.session;\n  \n  this[property] = user;\n  if (session) {\n    if (!this._passport) { throw new Error('passport.initialize() middleware not in use'); }\n    if (typeof done != 'function') { throw new Error('req#login requires a callback function'); }\n    \n    var self = this;\n    this._passport.instance._sm.logIn(this, user, function(err) {\n      if (err) { self[property] = null; return done(err); }\n      done();\n    });\n  } else {\n    done && done();\n  }\n};\n\n/**\n * Terminate an existing login session.\n *\n * @api public\n */\nreq.logout =\nreq.logOut = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  this[property] = null;\n  if (this._passport) {\n    this._passport.instance._sm.logOut(this);\n  }\n};\n\n/**\n * Test if request is authenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isAuthenticated = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  return (this[property]) ? true : false;\n};\n\n/**\n * Test if request is unauthenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isUnauthenticated = function() {\n  return !this.isAuthenticated();\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/http/request.js?");

/***/ }),

/***/ "./node_modules/passport/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/passport/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Passport = __webpack_require__(/*! ./authenticator */ \"./node_modules/passport/lib/authenticator.js\")\n  , SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\");\n\n\n/**\n * Export default singleton.\n *\n * @api public\n */\nexports = module.exports = new Passport();\n\n/**\n * Expose constructors.\n */\nexports.Passport =\nexports.Authenticator = Passport;\nexports.Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n/**\n * Expose strategies.\n */\nexports.strategies = {};\nexports.strategies.SessionStrategy = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/authenticate.js":
/*!**************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/authenticate.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar http = __webpack_require__(/*! http */ \"http\")\n  , IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\")\n  , AuthenticationError = __webpack_require__(/*! ../errors/authenticationerror */ \"./node_modules/passport/lib/errors/authenticationerror.js\");\n\n\n/**\n * Authenticates requests.\n *\n * Applies the `name`ed strategy (or strategies) to the incoming request, in\n * order to authenticate the request.  If authentication is successful, the user\n * will be logged in and populated at `req.user` and a session will be\n * established by default.  If authentication fails, an unauthorized response\n * will be sent.\n *\n * Options:\n *   - `session`          Save login state in session, defaults to _true_\n *   - `successRedirect`  After successful login, redirect to given URL\n *   - `successMessage`   True to store success message in\n *                        req.session.messages, or a string to use as override\n *                        message for success.\n *   - `successFlash`     True to flash success messages or a string to use as a flash\n *                        message for success (overrides any from the strategy itself).\n *   - `failureRedirect`  After failed login, redirect to given URL\n *   - `failureMessage`   True to store failure message in\n *                        req.session.messages, or a string to use as override\n *                        message for failure.\n *   - `failureFlash`     True to flash failure messages or a string to use as a flash\n *                        message for failures (overrides any from the strategy itself).\n *   - `assignProperty`   Assign the object provided by the verify callback to given property\n *\n * An optional `callback` can be supplied to allow the application to override\n * the default manner in which authentication attempts are handled.  The\n * callback has the following signature, where `user` will be set to the\n * authenticated user on a successful authentication attempt, or `false`\n * otherwise.  An optional `info` argument will be passed, containing additional\n * details provided by the strategy's verify callback - this could be information about\n * a successful authentication or a challenge message for a failed authentication.\n * An optional `status` argument will be passed when authentication fails - this could\n * be a HTTP response code for a remote authentication failure or similar.\n *\n *     app.get('/protected', function(req, res, next) {\n *       passport.authenticate('local', function(err, user, info, status) {\n *         if (err) { return next(err) }\n *         if (!user) { return res.redirect('/signin') }\n *         res.redirect('/account');\n *       })(req, res, next);\n *     });\n *\n * Note that if a callback is supplied, it becomes the application's\n * responsibility to log-in the user, establish a session, and otherwise perform\n * the desired operations.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });\n *\n *     passport.authenticate('basic', { session: false });\n *\n *     passport.authenticate('twitter');\n *\n * @param {Strategy|String|Array} name\n * @param {Object} options\n * @param {Function} callback\n * @return {Function}\n * @api public\n */\nmodule.exports = function authenticate(passport, name, options, callback) {\n  if (typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var multi = true;\n  \n  // Cast `name` to an array, allowing authentication to pass through a chain of\n  // strategies.  The first strategy to succeed, redirect, or error will halt\n  // the chain.  Authentication failures will proceed through each strategy in\n  // series, ultimately failing if all strategies fail.\n  //\n  // This is typically used on API endpoints to allow clients to authenticate\n  // using their preferred choice of Basic, Digest, token-based schemes, etc.\n  // It is not feasible to construct a chain of multiple strategies that involve\n  // redirection (for example both Facebook and Twitter), since the first one to\n  // redirect will halt the chain.\n  if (!Array.isArray(name)) {\n    name = [ name ];\n    multi = false;\n  }\n  \n  return function authenticate(req, res, next) {\n    if (http.IncomingMessage.prototype.logIn\n        && http.IncomingMessage.prototype.logIn !== IncomingMessageExt.logIn) {\n      __webpack_require__(/*! ../framework/connect */ \"./node_modules/passport/lib/framework/connect.js\").__monkeypatchNode();\n    }\n    \n    \n    // accumulator for failures from each strategy in the chain\n    var failures = [];\n    \n    function allFailed() {\n      if (callback) {\n        if (!multi) {\n          return callback(null, false, failures[0].challenge, failures[0].status);\n        } else {\n          var challenges = failures.map(function(f) { return f.challenge; });\n          var statuses = failures.map(function(f) { return f.status; });\n          return callback(null, false, challenges, statuses);\n        }\n      }\n      \n      // Strategies are ordered by priority.  For the purpose of flashing a\n      // message, the first failure will be displayed.\n      var failure = failures[0] || {}\n        , challenge = failure.challenge || {}\n        , msg;\n    \n      if (options.failureFlash) {\n        var flash = options.failureFlash;\n        if (typeof flash == 'string') {\n          flash = { type: 'error', message: flash };\n        }\n        flash.type = flash.type || 'error';\n      \n        var type = flash.type || challenge.type || 'error';\n        msg = flash.message || challenge.message || challenge;\n        if (typeof msg == 'string') {\n          req.flash(type, msg);\n        }\n      }\n      if (options.failureMessage) {\n        msg = options.failureMessage;\n        if (typeof msg == 'boolean') {\n          msg = challenge.message || challenge;\n        }\n        if (typeof msg == 'string') {\n          req.session.messages = req.session.messages || [];\n          req.session.messages.push(msg);\n        }\n      }\n      if (options.failureRedirect) {\n        return res.redirect(options.failureRedirect);\n      }\n    \n      // When failure handling is not delegated to the application, the default\n      // is to respond with 401 Unauthorized.  Note that the WWW-Authenticate\n      // header will be set according to the strategies in use (see\n      // actions#fail).  If multiple strategies failed, each of their challenges\n      // will be included in the response.\n      var rchallenge = []\n        , rstatus, status;\n      \n      for (var j = 0, len = failures.length; j < len; j++) {\n        failure = failures[j];\n        challenge = failure.challenge;\n        status = failure.status;\n          \n        rstatus = rstatus || status;\n        if (typeof challenge == 'string') {\n          rchallenge.push(challenge);\n        }\n      }\n    \n      res.statusCode = rstatus || 401;\n      if (res.statusCode == 401 && rchallenge.length) {\n        res.setHeader('WWW-Authenticate', rchallenge);\n      }\n      if (options.failWithError) {\n        return next(new AuthenticationError(http.STATUS_CODES[res.statusCode], rstatus));\n      }\n      res.end(http.STATUS_CODES[res.statusCode]);\n    }\n    \n    (function attempt(i) {\n      var layer = name[i];\n      // If no more strategies exist in the chain, authentication has failed.\n      if (!layer) { return allFailed(); }\n    \n      // Get the strategy, which will be used as prototype from which to create\n      // a new instance.  Action functions will then be bound to the strategy\n      // within the context of the HTTP request/response pair.\n      var strategy, prototype;\n      if (typeof layer.authenticate == 'function') {\n        strategy = layer;\n      } else {\n        prototype = passport._strategy(layer);\n        if (!prototype) { return next(new Error('Unknown authentication strategy \"' + layer + '\"')); }\n        \n        strategy = Object.create(prototype);\n      }\n      \n      \n      // ----- BEGIN STRATEGY AUGMENTATION -----\n      // Augment the new strategy instance with action functions.  These action\n      // functions are bound via closure the the request/response pair.  The end\n      // goal of the strategy is to invoke *one* of these action methods, in\n      // order to indicate successful or failed authentication, redirect to a\n      // third-party identity provider, etc.\n      \n      /**\n       * Authenticate `user`, with optional `info`.\n       *\n       * Strategies should call this function to successfully authenticate a\n       * user.  `user` should be an object supplied by the application after it\n       * has been given an opportunity to verify credentials.  `info` is an\n       * optional argument containing additional user information.  This is\n       * useful for third-party authentication strategies to pass profile\n       * details.\n       *\n       * @param {Object} user\n       * @param {Object} info\n       * @api public\n       */\n      strategy.success = function(user, info) {\n        if (callback) {\n          return callback(null, user, info);\n        }\n      \n        info = info || {};\n        var msg;\n      \n        if (options.successFlash) {\n          var flash = options.successFlash;\n          if (typeof flash == 'string') {\n            flash = { type: 'success', message: flash };\n          }\n          flash.type = flash.type || 'success';\n        \n          var type = flash.type || info.type || 'success';\n          msg = flash.message || info.message || info;\n          if (typeof msg == 'string') {\n            req.flash(type, msg);\n          }\n        }\n        if (options.successMessage) {\n          msg = options.successMessage;\n          if (typeof msg == 'boolean') {\n            msg = info.message || info;\n          }\n          if (typeof msg == 'string') {\n            req.session.messages = req.session.messages || [];\n            req.session.messages.push(msg);\n          }\n        }\n        if (options.assignProperty) {\n          req[options.assignProperty] = user;\n          return next();\n        }\n      \n        req.logIn(user, options, function(err) {\n          if (err) { return next(err); }\n          \n          function complete() {\n            if (options.successReturnToOrRedirect) {\n              var url = options.successReturnToOrRedirect;\n              if (req.session && req.session.returnTo) {\n                url = req.session.returnTo;\n                delete req.session.returnTo;\n              }\n              return res.redirect(url);\n            }\n            if (options.successRedirect) {\n              return res.redirect(options.successRedirect);\n            }\n            next();\n          }\n          \n          if (options.authInfo !== false) {\n            passport.transformAuthInfo(info, req, function(err, tinfo) {\n              if (err) { return next(err); }\n              req.authInfo = tinfo;\n              complete();\n            });\n          } else {\n            complete();\n          }\n        });\n      };\n      \n      /**\n       * Fail authentication, with optional `challenge` and `status`, defaulting\n       * to 401.\n       *\n       * Strategies should call this function to fail an authentication attempt.\n       *\n       * @param {String} challenge\n       * @param {Number} status\n       * @api public\n       */\n      strategy.fail = function(challenge, status) {\n        if (typeof challenge == 'number') {\n          status = challenge;\n          challenge = undefined;\n        }\n        \n        // push this failure into the accumulator and attempt authentication\n        // using the next strategy\n        failures.push({ challenge: challenge, status: status });\n        attempt(i + 1);\n      };\n      \n      /**\n       * Redirect to `url` with optional `status`, defaulting to 302.\n       *\n       * Strategies should call this function to redirect the user (via their\n       * user agent) to a third-party website for authentication.\n       *\n       * @param {String} url\n       * @param {Number} status\n       * @api public\n       */\n      strategy.redirect = function(url, status) {\n        // NOTE: Do not use `res.redirect` from Express, because it can't decide\n        //       what it wants.\n        //\n        //       Express 2.x: res.redirect(url, status)\n        //       Express 3.x: res.redirect(status, url) -OR- res.redirect(url, status)\n        //         - as of 3.14.0, deprecated warnings are issued if res.redirect(url, status)\n        //           is used\n        //       Express 4.x: res.redirect(status, url)\n        //         - all versions (as of 4.8.7) continue to accept res.redirect(url, status)\n        //           but issue deprecated versions\n        \n        res.statusCode = status || 302;\n        res.setHeader('Location', url);\n        res.setHeader('Content-Length', '0');\n        res.end();\n      };\n      \n      /**\n       * Pass without making a success or fail decision.\n       *\n       * Under most circumstances, Strategies should not need to call this\n       * function.  It exists primarily to allow previous authentication state\n       * to be restored, for example from an HTTP session.\n       *\n       * @api public\n       */\n      strategy.pass = function() {\n        next();\n      };\n      \n      /**\n       * Internal error while performing authentication.\n       *\n       * Strategies should call this function when an internal error occurs\n       * during the process of performing authentication; for example, if the\n       * user directory is not available.\n       *\n       * @param {Error} err\n       * @api public\n       */\n      strategy.error = function(err) {\n        if (callback) {\n          return callback(err);\n        }\n        \n        next(err);\n      };\n      \n      // ----- END STRATEGY AUGMENTATION -----\n    \n      strategy.authenticate(req, options);\n    })(0); // attempt\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/authenticate.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/initialize.js":
/*!************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/initialize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Passport initialization.\n *\n * Intializes Passport for incoming requests, allowing authentication strategies\n * to be applied.\n *\n * If sessions are being utilized, applications must set up Passport with\n * functions to serialize a user into and out of a session.  For example, a\n * common pattern is to serialize just the user ID into the session (due to the\n * fact that it is desirable to store the minimum amount of data in a session).\n * When a subsequent request arrives for the session, the full User object can\n * be loaded from the database by ID.\n *\n * Note that additional middleware is required to persist login state, so we\n * must use the `connect.session()` middleware _before_ `passport.initialize()`.\n *\n * If sessions are being used, this middleware must be in use by the\n * Connect/Express application for Passport to operate.  If the application is\n * entirely stateless (not using sessions), this middleware is not necessary,\n * but its use will not have any adverse impact.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @return {Function}\n * @api public\n */\nmodule.exports = function initialize(passport) {\n  \n  return function initialize(req, res, next) {\n    req._passport = {};\n    req._passport.instance = passport;\n\n    if (req.session && req.session[passport._key]) {\n      // load data from existing session\n      req._passport.session = req.session[passport._key];\n    }\n\n    next();\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/initialize.js?");

/***/ }),

/***/ "./node_modules/passport/lib/sessionmanager.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport/lib/sessionmanager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function SessionManager(options, serializeUser) {\n  if (typeof options == 'function') {\n    serializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  this._key = options.key || 'passport';\n  this._serializeUser = serializeUser;\n}\n\nSessionManager.prototype.logIn = function(req, user, cb) {\n  var self = this;\n  this._serializeUser(user, req, function(err, obj) {\n    if (err) {\n      return cb(err);\n    }\n    if (!req._passport.session) {\n      req._passport.session = {};\n    }\n    req._passport.session.user = obj;\n    if (!req.session) {\n      req.session = {};\n    }\n    req.session[self._key] = req._passport.session;\n    cb();\n  });\n}\n\nSessionManager.prototype.logOut = function(req, cb) {\n  if (req._passport && req._passport.session) {\n    delete req._passport.session.user;\n  }\n  cb && cb();\n}\n\n\nmodule.exports = SessionManager;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/sessionmanager.js?");

/***/ }),

/***/ "./node_modules/passport/lib/strategies/session.js":
/*!*********************************************************!*\
  !*** ./node_modules/passport/lib/strategies/session.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar pause = __webpack_require__(/*! pause */ \"./node_modules/pause/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n\n/**\n * `SessionStrategy` constructor.\n *\n * @api public\n */\nfunction SessionStrategy(options, deserializeUser) {\n  if (typeof options == 'function') {\n    deserializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  Strategy.call(this);\n  this.name = 'session';\n  this._deserializeUser = deserializeUser;\n}\n\n/**\n * Inherit from `Strategy`.\n */\nutil.inherits(SessionStrategy, Strategy);\n\n/**\n * Authenticate request based on the current session state.\n *\n * The session authentication strategy uses the session to restore any login\n * state across requests.  If a login session has been established, `req.user`\n * will be populated with the current user.\n *\n * This strategy is registered automatically by Passport.\n *\n * @param {Object} req\n * @param {Object} options\n * @api protected\n */\nSessionStrategy.prototype.authenticate = function(req, options) {\n  if (!req._passport) { return this.error(new Error('passport.initialize() middleware not in use')); }\n  options = options || {};\n\n  var self = this, \n      su;\n  if (req._passport.session) {\n    su = req._passport.session.user;\n  }\n\n  if (su || su === 0) {\n    // NOTE: Stream pausing is desirable in the case where later middleware is\n    //       listening for events emitted from request.  For discussion on the\n    //       matter, refer to: https://github.com/jaredhanson/passport/pull/106\n    \n    var paused = options.pauseStream ? pause(req) : null;\n    this._deserializeUser(su, req, function(err, user) {\n      if (err) { return self.error(err); }\n      if (!user) {\n        delete req._passport.session.user;\n      } else {\n        // TODO: Remove instance access\n        var property = req._passport.instance._userProperty || 'user';\n        req[property] = user;\n      }\n      self.pass();\n      if (paused) {\n        paused.resume();\n      }\n    });\n  } else {\n    self.pass();\n  }\n};\n\n\n/**\n * Expose `SessionStrategy`.\n */\nmodule.exports = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/strategies/session.js?");

/***/ }),

/***/ "./node_modules/pause/index.js":
/*!*************************************!*\
  !*** ./node_modules/pause/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = function(obj){\n  var onData\n    , onEnd\n    , events = [];\n\n  // buffer data\n  obj.on('data', onData = function(data, encoding){\n    events.push(['data', data, encoding]);\n  });\n\n  // buffer end\n  obj.on('end', onEnd = function(data, encoding){\n    events.push(['end', data, encoding]);\n  });\n\n  return {\n    end: function(){\n      obj.removeListener('data', onData);\n      obj.removeListener('end', onEnd);\n    },\n    resume: function(){\n      this.end();\n      for (var i = 0, len = events.length; i < len; ++i) {\n        obj.emit.apply(obj, events[i]);\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/pause/index.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nvar dbConnection = null;\n\ntry {\n  dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true // auth: {\n    //   user: constants.MONGO_USER,\n    //   password: constants.MONGO_PASS\n    // }\n\n  });\n} catch (error) {\n  dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MONGO_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true // auth: {\n    //   user: constants.MONGO_USER,\n    //   password: constants.MONGO_PASS\n    // }\n\n  });\n}\n\ndbConnection.then(() => {\n  console.log(\"MongoDB Running\");\n}, err => {\n  throw err;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! method-override */ \"method-override\");\n/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var frameguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! frameguard */ \"frameguard\");\n/* harmony import */ var frameguard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(frameguard__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar isDev = \"development\" === 'development';\nvar isProd = \"development\" === 'production';\n/* harmony default export */ __webpack_exports__[\"default\"] = (app => {\n  app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n  app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(passport__WEBPACK_IMPORTED_MODULE_7___default.a.initialize());\n  app.use(method_override__WEBPACK_IMPORTED_MODULE_5___default()());\n  app.use(frameguard__WEBPACK_IMPORTED_MODULE_6___default()({\n    action: 'sameorigin'\n  }));\n  app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_0___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _orders_order_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/order.routes */ \"./src/modules/orders/order.routes.js\");\n/* harmony import */ var _ingredients_ingredient_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients/ingredient.routes */ \"./src/modules/ingredients/ingredient.routes.js\");\n/* harmony import */ var _users_user_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/log */ \"./src/utils/log.js\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/error */ \"./src/utils/error.js\");\n\n\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.use('/v1/orders', _orders_order_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nroutes.use('/v1/ingredients', _ingredients_ingredient_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nroutes.use('/v1/users', _users_user_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nroutes.all(\"*\", (req, res, next) => next(new _utils_error__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"Not Found!\", http_status__WEBPACK_IMPORTED_MODULE_1___default.a.NOT_FOUND, true)));\nroutes.use(_utils_log__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/routes.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! exports provided: signUp, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/messages */ \"./src/utils/messages.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _asyncToGenerator(function* (req, res) {\n    var response = {\n      status: _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUCCESS,\n      data: null,\n      message: null\n    };\n\n    try {\n      if (req.body.password !== req.body.confirmPassword) throw new Error(_utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PASSWORDS_DONT_MATCH);\n      var user = yield _user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        email: req.body.email\n      });\n\n      if (!user) {\n        response.data = {\n          user: yield _user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            email: req.body.email,\n            password: req.body.password\n          })\n        };\n      } else {\n        response.status = _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].FAILED;\n        response.message = _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].EMAIL_ALREADY_EXISTS;\n      }\n\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(response);\n    } catch (err) {\n      response.status = _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ERROR;\n      response.message = err.message;\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR).json(response);\n    }\n  });\n  return _signUp.apply(this, arguments);\n}\n\nfunction login(_x3, _x4) {\n  return _login.apply(this, arguments);\n}\n\nfunction _login() {\n  _login = _asyncToGenerator(function* (req, res) {\n    var response = {\n      status: _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUCCESS,\n      data: null,\n      message: null\n    };\n\n    try {\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(req.user);\n    } catch (err) {\n      response.status = _utils_messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ERROR;\n      response.message = err.message;\n      return res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR).json(response);\n    }\n  });\n  return _login.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n/* harmony import */ var bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validations */ \"./src/utils/validations.js\");\n/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/messages */ \"./src/utils/messages.js\");\n\n\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    unique: true,\n    trim: true,\n    validate: {\n      validator(email) {\n        return _utils_validations__WEBPACK_IMPORTED_MODULE_2__[\"emailReg\"].test(email);\n      },\n\n      message: '{VALUE} is not valid email'\n    },\n    required: true\n  },\n  password: {\n    type: String,\n    trim: true,\n    required: [true, _utils_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PASSWORD_REQUIRED]\n  }\n}, {\n  timestamps: true\n});\nUserSchema.pre(\"save\", function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nUserSchema.methods = {\n  authenticateUser(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"compareSync\"])(password, this.password);\n  },\n\n  _hashPassword(password) {\n    return Object(bcrypt_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      email: this.email\n    };\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema));\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n/* harmony import */ var _user_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n/* harmony import */ var _user_controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\n\n\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/', express_validation__WEBPACK_IMPORTED_MODULE_1___default()(_user_validations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].signUp), _user_controllers__WEBPACK_IMPORTED_MODULE_4__[\"signUp\"]);\nroutes.post('/login', _services_auth_services__WEBPACK_IMPORTED_MODULE_2__[\"authLocal\"], _user_controllers__WEBPACK_IMPORTED_MODULE_4__[\"login\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validations */ \"./src/utils/validations.js\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ \"./src/utils/functions.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signUp: {\n    body: {\n      email: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"emailReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n      password: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"passwordReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError),\n      confirmPassword: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().regex(_utils_validations__WEBPACK_IMPORTED_MODULE_1__[\"passwordReg\"]).required().error(_utils_functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validationError)\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! exports provided: authLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authLocal\", function() { return authLocal; });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"./node_modules/passport-local/lib/index.js\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_users_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar localOpts = {\n  usernameField: 'email'\n};\nvar localStrategy = new passport_local__WEBPACK_IMPORTED_MODULE_1___default.a(localOpts,\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(function* (email, password, done) {\n    try {\n      var user = yield _modules_users_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        email\n      });\n\n      if (!user) {\n        return done(null, false);\n      } else if (!user.authenticateUser(password)) {\n        return done(null, false);\n      }\n\n      return done(null, user);\n    } catch (err) {\n      return done(e, false);\n    }\n  });\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\npassport__WEBPACK_IMPORTED_MODULE_0___default.a.use('localLogin', localStrategy);\nvar authLocal = passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('localLogin', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

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

/***/ "./src/utils/messages.js":
/*!*******************************!*\
  !*** ./src/utils/messages.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar messages = {\n  SUCCESS: 'success',\n  FAILED: 'failed',\n  ERROR: 'error',\n  // Password\n  PASSWORD_REQUIRED: \"Password is required\",\n  PASSWORDS_DONT_MATCH: \"Passwords don't match each other\",\n  // Email\n  EMAIL_ALREADY_EXISTS: \"This email already exists\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (messages);\n\n//# sourceURL=webpack:///./src/utils/messages.js?");

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

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

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

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

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