pageflow = typeof pageflow === "object" ? pageflow : {}; pageflow["react"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(295);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _actions = __webpack_require__(299);

	var actions = _interopRequireWildcard(_actions);

	var _components = __webpack_require__(302);

	var components = _interopRequireWildcard(_components);

	var _selectors = __webpack_require__(425);

	var selectors = _interopRequireWildcard(_selectors);

	var _pages = __webpack_require__(310);

	var _registerPageType = __webpack_require__(431);

	var _registerPageType2 = _interopRequireDefault(_registerPageType);

	var _registerWidgetType = __webpack_require__(432);

	var _registerWidgetType2 = _interopRequireDefault(_registerWidgetType);

	var _mapping = __webpack_require__(404);

	var _mapping2 = _interopRequireDefault(_mapping);

	var _Container = __webpack_require__(407);

	var _Container2 = _interopRequireDefault(_Container);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _redux = __webpack_require__(313);

	var _reactRedux = __webpack_require__(359);

	var _utils = __webpack_require__(372);

	var _ServerSidePage = __webpack_require__(433);

	var _ServerSidePage2 = _interopRequireDefault(_ServerSidePage);

	var _builtInPageTypes = __webpack_require__(459);

	var _pageflow = __webpack_require__(500);

	var _pageflow2 = _interopRequireDefault(_pageflow);

	var _boot = __webpack_require__(434);

	var _boot2 = _interopRequireDefault(_boot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/*global module*/

	(0, _builtInPageTypes.register)();

	if (_pageflow2.default.events) {
	  _pageflow2.default.events.on('seed:loaded', function () {
	    return (0, _boot2.default)(_pageflow2.default);
	  });
	}

	// `export default` does not play well with Webpack's `libraryTarget:
	// 'assign'` at the moment. See
	// https://github.com/webpack/webpack/issues/706
	module.exports = {
	  actions: actions,
	  components: components,
	  selectors: selectors,

	  registerPageType: _registerPageType2.default,
	  registerWidgetType: _registerWidgetType2.default,

	  iconMapping: _mapping2.default,
	  SvgIcon: _Container2.default,

	  classNames: _classnames2.default,
	  connect: _reactRedux.connect,
	  connectInPage: _pages.connectInPage,
	  combineReducers: _redux.combineReducers,
	  combine: _utils.combine,

	  ServerSidePage: _ServerSidePage2.default
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSetting = exports.updatePageLink = exports.updatePageAttribute = undefined;

	var _actions = __webpack_require__(300);

	var _actions2 = __webpack_require__(301);

	exports.updatePageAttribute = _actions.updatePageAttribute;
	exports.updatePageLink = _actions.updatePageLink;
	exports.updateSetting = _actions2.update;

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pageWillActivate = pageWillActivate;
	exports.pageDidActivate = pageDidActivate;
	exports.pageWillDeactivate = pageWillDeactivate;
	exports.pageDidDeactivate = pageDidDeactivate;
	exports.pageDidPreload = pageDidPreload;
	exports.pageDidPrepare = pageDidPrepare;
	exports.pageScheduleUnprepare = pageScheduleUnprepare;
	exports.pageDidUnprepare = pageDidUnprepare;
	exports.pageDidResize = pageDidResize;
	exports.enhance = enhance;
	exports.cleanup = cleanup;
	exports.updatePageAttribute = updatePageAttribute;
	exports.updatePageLink = updatePageLink;
	exports.pageAction = pageAction;
	var PAGE_DID_ACTIVATE = exports.PAGE_DID_ACTIVATE = 'PAGE_DID_ACTIVATE';
	var PAGE_WILL_ACTIVATE = exports.PAGE_WILL_ACTIVATE = 'PAGE_WILL_ACTIVATE';
	var PAGE_DID_DEACTIVATE = exports.PAGE_DID_DEACTIVATE = 'PAGE_DID_DEACTIVATE';
	var PAGE_WILL_DEACTIVATE = exports.PAGE_WILL_DEACTIVATE = 'PAGE_WILL_DEACTIVATE';

	var PAGE_DID_PRELOAD = exports.PAGE_DID_PRELOAD = 'PAGE_DID_PRELOAD';
	var PAGE_DID_PREPARE = exports.PAGE_DID_PREPARE = 'PAGE_DID_PREPARE';
	var PAGE_SCHEDULE_UNPREPARE = exports.PAGE_SCHEDULE_UNPREPARE = 'PAGE_SCHEDULE_UNPREPARE';
	var PAGE_DID_UNPREPARE = exports.PAGE_DID_UNPREPARE = 'PAGE_DID_UNPREPARE';

	var PAGE_DID_RESIZE = exports.PAGE_DID_RESIZE = 'PAGE_DID_RESIZE';

	var ENHANCE = exports.ENHANCE = 'PAGE_ENHANCE';
	var CLEANUP = exports.CLEANUP = 'PAGE_CLEANUP';

	var UPDATE_PAGE_ATTRIBUTE = exports.UPDATE_PAGE_ATTRIBUTE = 'UPDATE_PAGE_ATTRIBUTE';
	var UPDATE_PAGE_LINK = exports.UPDATE_PAGE_LINK = 'UPDATE_PAGE_LINK';

	function pageWillActivate(_ref) {
	  var id = _ref.id,
	      position = _ref.position;

	  return pageAction(PAGE_WILL_ACTIVATE, id, { position: position });
	}

	function pageDidActivate() {
	  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref2.id;

	  return pageAction(PAGE_DID_ACTIVATE, id);
	}

	function pageWillDeactivate() {
	  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref3.id;

	  return pageAction(PAGE_WILL_DEACTIVATE, id);
	}

	function pageDidDeactivate() {
	  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref4.id;

	  return pageAction(PAGE_DID_DEACTIVATE, id);
	}

	function pageDidPreload() {
	  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref5.id;

	  return pageAction(PAGE_DID_PRELOAD, id);
	}

	function pageDidPrepare() {
	  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref6.id;

	  return pageAction(PAGE_DID_PREPARE, id);
	}

	function pageScheduleUnprepare() {
	  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref7.id;

	  return pageAction(PAGE_SCHEDULE_UNPREPARE, id);
	}

	function pageDidUnprepare() {
	  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref8.id;

	  return pageAction(PAGE_DID_UNPREPARE, id);
	}

	function pageDidResize() {
	  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref9.id;

	  return pageAction(PAGE_DID_RESIZE, id);
	}

	function enhance() {
	  var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref10.id;

	  return pageAction(ENHANCE, id);
	}

	function cleanup() {
	  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref11.id;

	  return pageAction(CLEANUP, id);
	}

	function updatePageAttribute() {
	  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      id = _ref12.id,
	      name = _ref12.name,
	      value = _ref12.value;

	  return pageAction(UPDATE_PAGE_ATTRIBUTE, id, { name: name, value: value });
	}

	function updatePageLink() {
	  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      pageId = _ref13.pageId,
	      linkId = _ref13.linkId,
	      name = _ref13.name,
	      value = _ref13.value;

	  return pageAction(UPDATE_PAGE_LINK, pageId, { linkId: linkId, name: name, value: value });
	}

	function pageAction(type, pageId) {
	  var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  return {
	    type: type,
	    meta: {
	      collectionName: 'pages',
	      itemId: pageId
	    },
	    payload: payload
	  };
	}

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load = load;
	exports.update = update;
	var LOAD = exports.LOAD = 'SETTINGS_LOAD';

	var UPDATE = exports.UPDATE = 'SETTINGS_UPDATE';

	function load(_ref) {
	  var settings = _ref.settings;

	  return {
	    type: LOAD,
	    payload: {
	      settings: settings
	    }
	  };
	}

	function update(_ref2) {
	  var property = _ref2.property,
	      value = _ref2.value;

	  return {
	    type: UPDATE,
	    payload: {
	      property: property,
	      value: value
	    }
	  };
	}

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Draggable = exports.editorOnly = exports.Icon = exports.PageWithInteractiveBackground = exports.LazyLoadedPageThumbnail = exports.PageThumbnail = exports.PageLink = exports.PageText = exports.PageHeader = exports.PageScroller = exports.PageContent = exports.PageForeground = exports.PageShadow = exports.PageBackgroundImage = exports.PageBackground = exports.PageWrapper = undefined;

	var _PageWrapper = __webpack_require__(303);

	var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

	var _PageBackground = __webpack_require__(306);

	var _PageBackground2 = _interopRequireDefault(_PageBackground);

	var _PageBackgroundImage = __webpack_require__(307);

	var _PageBackgroundImage2 = _interopRequireDefault(_PageBackgroundImage);

	var _PageShadow = __webpack_require__(382);

	var _PageShadow2 = _interopRequireDefault(_PageShadow);

	var _PageContent = __webpack_require__(383);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _PageForeground = __webpack_require__(384);

	var _PageForeground2 = _interopRequireDefault(_PageForeground);

	var _PageScroller = __webpack_require__(385);

	var _PageScroller2 = _interopRequireDefault(_PageScroller);

	var _PageHeader = __webpack_require__(387);

	var _PageHeader2 = _interopRequireDefault(_PageHeader);

	var _PageText = __webpack_require__(388);

	var _PageText2 = _interopRequireDefault(_PageText);

	var _PageLink = __webpack_require__(389);

	var _PageLink2 = _interopRequireDefault(_PageLink);

	var _PageThumbnail = __webpack_require__(391);

	var _PageThumbnail2 = _interopRequireDefault(_PageThumbnail);

	var _LazyLoadedPageThumbnail = __webpack_require__(396);

	var _LazyLoadedPageThumbnail2 = _interopRequireDefault(_LazyLoadedPageThumbnail);

	var _PageWithInteractiveBackground = __webpack_require__(397);

	var _PageWithInteractiveBackground2 = _interopRequireDefault(_PageWithInteractiveBackground);

	var _Icon = __webpack_require__(403);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _editorOnly = __webpack_require__(424);

	var _editorOnly2 = _interopRequireDefault(_editorOnly);

	var _reactDraggable = __webpack_require__(417);

	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.PageWrapper = _PageWrapper2.default;
	exports.PageBackground = _PageBackground2.default;
	exports.PageBackgroundImage = _PageBackgroundImage2.default;
	exports.PageShadow = _PageShadow2.default;
	exports.PageForeground = _PageForeground2.default;
	exports.PageContent = _PageContent2.default;
	exports.PageScroller = _PageScroller2.default;
	exports.PageHeader = _PageHeader2.default;
	exports.PageText = _PageText2.default;
	exports.PageLink = _PageLink2.default;
	exports.PageThumbnail = _PageThumbnail2.default;
	exports.LazyLoadedPageThumbnail = _LazyLoadedPageThumbnail2.default;
	exports.PageWithInteractiveBackground = _PageWithInteractiveBackground2.default;
	exports.Icon = _Icon2.default;
	exports.editorOnly = _editorOnly2.default;
	exports.Draggable = _reactDraggable2.default;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Used to build the default page structure. Requires
	 * {@link pageflow.react.components.PageBackground|PageBackground} and either
	 * {@link pageflow.react.components.PageForeground|PageForeground} or
	 * {@link pageflow.react.components.PageContent|PageContent} as children.
	 *
	 * @alias pageflow.react.components.PageWrapper
	 * @class
	 * @since 0.1
	 *
	 * @prop className
	 *   Additional class names.
	 *
	 * @example
	 *
	 * <PageWrapper>
	 *   <PageBackground>
	 *      <PageBackgroundImage page={page} />
	 *      <PageShadow page={page} />
	 *   </PageBackground>
	 *
	 *    <PageForeground>
	 *      <PageScroller>
	 *        <PageHeader page={page} />
	 *        <PageText page={page} />
	 *      </PageScroller>
	 *    </PageForeground>
	 *  </PageWrapper>
	 *
	 * @example
	 *
	 * <PageWrapper>
	 *   <PageBackground>
	 *      <PageBackgroundImage page={page} />
	 *      <PageShadow page={page} />
	 *   </PageBackground>
	 *
	 *    <PageContent>
	 *      <PageHeader page={page} />
	 *      <PageText page={page} />
	 *    </PageContent>
	 *  </PageWrapper>
	 */
	var _class = function (_Component) {
	  _inherits(_class, _Component);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: (0, _classnames2.default)('content_and_background', this.props.className) },
	        this.props.children
	      );
	    }
	  }]);

	  return _class;
	}(_react.Component);

	exports.default = _class;

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Use inside {@link
	 * pageflow.react.components.PageWrapper|PageWrapper} to build the
	 * default page structure.
	 *
	 * @alias pageflow.react.components.PageBackground
	 * @class
	 * @since 0.1
	 */
	var _class = function (_Component) {
	  _inherits(_class, _Component);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "backgroundArea" },
	        this.props.children
	      );
	    }
	  }]);

	  return _class;
	}(_react.Component);

	exports.default = _class;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _LazyBackgroundImage = __webpack_require__(308);

	var _LazyBackgroundImage2 = _interopRequireDefault(_LazyBackgroundImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Can be used inside {@link
	 * pageflow.react.components.PageBackground|PageBackground} to display
	 * the background image specified in the page configuration.
	 *
	 * @alias pageflow.react.components.PageBackgroundImage
	 * @class
	 * @since 0.1
	 *
	 * @prop page
	 *   Required. The page object to read configuration properties from.
	 *
	 * @prop imagePropertyBaseName
	 *   By default the configuration property `backgroundImage` is
	 *   used. Use this prop to specify a different property name.
	 */
	var PageBackgroundImage = function (_React$Component) {
	  _inherits(PageBackgroundImage, _React$Component);

	  function PageBackgroundImage() {
	    _classCallCheck(this, PageBackgroundImage);

	    return _possibleConstructorReturn(this, (PageBackgroundImage.__proto__ || Object.getPrototypeOf(PageBackgroundImage)).apply(this, arguments));
	  }

	  _createClass(PageBackgroundImage, [{
	    key: 'render',
	    value: function render() {
	      var page = this.props.page;
	      var property = this.props.imagePropertyBaseName;

	      return _react2.default.createElement(_LazyBackgroundImage2.default, { imageFileId: page[property + 'Id'],
	        position: [page[property + 'X'], page[property + 'Y']],
	        className: 'background background_image' });
	    }
	  }]);

	  return PageBackgroundImage;
	}(_react2.default.Component);

	exports.default = PageBackgroundImage;


	PageBackgroundImage.propTypes = {
	  page: _react2.default.PropTypes.object.isRequired,
	  imagePropertyBaseName: _react2.default.PropTypes.string
	};

	PageBackgroundImage.defaultProps = {
	  imagePropertyBaseName: 'backgroundImage'
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _BackgroundImage = __webpack_require__(309);

	var _BackgroundImage2 = _interopRequireDefault(_BackgroundImage);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _pages.connectInPage)((0, _utils.combine)({
	  loaded: (0, _selectors.pageIsPreloaded)()
	}))(_BackgroundImage2.default);

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Display an element with a background image referenced by
	 * `ImageFile` id.
	 *
	 * @alias pageflow.react.components.BackgroundImage
	 * @since 0.1
	 *
	 * @prop imageFileId
	 *   The id of the image file to display.
	 *
	 * @prop position
	 *   Two element array of percent values specifying background position.
	 *
	 * @prop className
	 *   Additional CSS classes.
	 *
	 * @prop loaded
	 *   Used to lazy load images.
	 */
	var BackgroundImage = function (_React$Component) {
	  _inherits(BackgroundImage, _React$Component);

	  function BackgroundImage() {
	    _classCallCheck(this, BackgroundImage);

	    return _possibleConstructorReturn(this, (BackgroundImage.__proto__ || Object.getPrototypeOf(BackgroundImage)).apply(this, arguments));
	  }

	  _createClass(BackgroundImage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: this.cssClass(), style: this.style() });
	    }
	  }, {
	    key: 'cssClass',
	    value: function cssClass() {
	      return (0, _classnames2.default)(this.props.className, this.props.loaded ? 'load_image' : null, this.imageCssClass());
	    }
	  }, {
	    key: 'imageCssClass',
	    value: function imageCssClass() {
	      return ['image', this.props.imageFileId || 'none'].join('_');
	    }
	  }, {
	    key: 'style',
	    value: function style() {
	      return {
	        backgroundPosition: this.positionCoordinate(0) + '% ' + this.positionCoordinate(1) + '%'
	      };
	    }
	  }, {
	    key: 'positionCoordinate',
	    value: function positionCoordinate(index) {
	      var coordinate = this.props.position[index];

	      if (typeof coordinate === 'undefined') {
	        return 50;
	      }

	      return coordinate;
	    }
	  }]);

	  return BackgroundImage;
	}(_react2.default.Component);

	exports.default = BackgroundImage;


	BackgroundImage.propTypes = {
	  imageFileId: _react2.default.PropTypes.number,
	  position: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
	  className: _react2.default.PropTypes.string,
	  loaded: _react2.default.PropTypes.bool
	};

	BackgroundImage.defaultProps = {
	  position: [50, 50]
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPageType = exports.connectInPage = undefined;
	exports.createReducers = createReducers;
	exports.createSaga = createSaga;
	exports.watchCollection = watchCollection;

	var _createPageStateReducer = __webpack_require__(311);

	var _createPageStateReducer2 = _interopRequireDefault(_createPageStateReducer);

	var _createPageSaga = __webpack_require__(336);

	var _createPageSaga2 = _interopRequireDefault(_createPageSaga);

	var _createPageType = __webpack_require__(379);

	var _createPageType2 = _interopRequireDefault(_createPageType);

	var _collections = __webpack_require__(338);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createReducers() {
	  var pageStateReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return {
	    pages: (0, _collections.createReducer)('pages', {
	      idAttribute: 'permaId',
	      itemReducer: (0, _createPageStateReducer2.default)(pageStateReducers)
	    })
	  };
	}

	function createSaga(pages, pageTypeSagas, middleware) {
	  return (0, _collections.createSaga)('pages', {
	    itemSaga: (0, _createPageSaga2.default)({ pages: pages, pageTypeSagas: pageTypeSagas }),
	    middleware: middleware
	  });
	}

	function watchCollection(pages, dispatch) {
	  (0, _collections.watch)({
	    collection: pages,
	    collectionName: 'pages',
	    dispatch: dispatch,

	    idAttribute: 'perma_id',
	    attributes: ['perma_id', { type: 'template' }, 'chapter_id'],
	    includeConfiguration: true
	  });
	}

	var connectInPage = exports.connectInPage = (0, _collections.createItemScopeConnector)('pages');

	exports.createPageType = _createPageType2.default;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (pageStateReducers) {
	  var pageReducers = {};

	  function getPageReducer(type) {
	    pageReducers[type] = pageReducers[type] || (0, _redux.combineReducers)({
	      attributes: _attributesItemReducer2.default,
	      state: (0, _redux.combineReducers)({
	        custom: pageStateReducers[type] || function () {
	          var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	          return item;
	        },
	        common: _commonPageStateReducer2.default
	      })
	    });

	    return pageReducers[type];
	  }

	  return function () {
	    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    var attributes = (0, _attributesItemReducer2.default)(page.attributes, action);
	    return getPageReducer(attributes.type)(page, action);
	  };
	};

	var _commonPageStateReducer = __webpack_require__(312);

	var _commonPageStateReducer2 = _interopRequireDefault(_commonPageStateReducer);

	var _attributesItemReducer = __webpack_require__(334);

	var _attributesItemReducer2 = _interopRequireDefault(_attributesItemReducer);

	var _redux = __webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(300);

	var _redux = __webpack_require__(313);

	exports.default = (0, _redux.combineReducers)({
	  isPreloaded: isPreloaded,
	  isPrepared: isPrepared,
	  isActive: isActive,
	  isActivated: isActivated
	});


	function isPreloaded() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.PAGE_DID_PRELOAD:
	      return true;

	    default:
	      return state;
	  }
	}

	function isPrepared() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.PAGE_DID_PREPARE:
	    case _actions.PAGE_WILL_ACTIVATE:
	      return true;

	    case _actions.PAGE_DID_UNPREPARE:
	      return false;

	    default:
	      return state;
	  }
	}

	function isActive() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.PAGE_WILL_ACTIVATE:
	      return true;

	    case _actions.PAGE_WILL_DEACTIVATE:
	      return false;

	    default:
	      return state;
	  }
	}

	function isActivated() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.PAGE_DID_ACTIVATE:
	      return true;

	    case _actions.PAGE_WILL_DEACTIVATE:
	      return false;

	    default:
	      return state;
	  }
	}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(314);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(329);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(331);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(332);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(333);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(330);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(315);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(325);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(316),
	    getPrototype = __webpack_require__(322),
	    isObjectLike = __webpack_require__(324);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(317),
	    getRawTag = __webpack_require__(320),
	    objectToString = __webpack_require__(321);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(318);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(319);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 319 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(317);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 321 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(323);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 324 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(326);


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(328);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(327)(module)))

/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 328 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(314);

	var _isPlainObject = __webpack_require__(315);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(330);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (false) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 330 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 331 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(333);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 333 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = attributesItemReducer;

	var _actions = __webpack_require__(335);

	function attributesItemReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.ADD:
	    case _actions.CHANGE:
	      return action.payload.attributes;

	    default:
	      return state;
	  }
	}

/***/ },
/* 335 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reset = reset;
	exports.add = add;
	exports.change = change;
	exports.remove = remove;
	var RESET = exports.RESET = 'COLLECTION_RESET';
	var ADD = exports.ADD = 'COLLECTION_ADD';
	var CHANGE = exports.CHANGE = 'COLLECTION_CHANGE';
	var REMOVE = exports.REMOVE = 'COLLECTION_REMOVE';

	function reset(_ref) {
	  var collectionName = _ref.collectionName,
	      items = _ref.items;

	  return {
	    type: RESET,
	    meta: {
	      collectionName: collectionName
	    },
	    payload: {
	      collectionName: collectionName,
	      items: items
	    }
	  };
	}

	function add(_ref2) {
	  var collectionName = _ref2.collectionName,
	      attributes = _ref2.attributes;

	  return {
	    type: ADD,
	    meta: {
	      collectionName: collectionName
	    },
	    payload: {
	      attributes: attributes
	    }
	  };
	}

	function change(_ref3) {
	  var collectionName = _ref3.collectionName,
	      attributes = _ref3.attributes;

	  return {
	    type: CHANGE,
	    meta: {
	      collectionName: collectionName
	    },
	    payload: {
	      attributes: attributes
	    }
	  };
	}

	function remove(_ref4) {
	  var collectionName = _ref4.collectionName,
	      attributes = _ref4.attributes;

	  return {
	    type: REMOVE,
	    meta: {
	      collectionName: collectionName
	    },
	    payload: {
	      attributes: attributes
	    }
	  };
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var pages = _ref.pages,
	      pageTypeSagas = _ref.pageTypeSagas;

	  return regeneratorRuntime.mark(function _callee3() {
	    var task;
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            return _context3.delegateYield((0, _scheduleUnprepare2.default)(), 't0', 1);

	          case 1:
	            return _context3.delegateYield((0, _updating2.default)(pages), 't1', 2);

	          case 2:
	            task = void 0;
	            _context3.next = 5;
	            return (0, _reduxSaga.takeEvery)(_actions.ENHANCE, regeneratorRuntime.mark(function _callee() {
	              var thisPageType, pageTypeSaga;
	              return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                  switch (_context.prev = _context.next) {
	                    case 0:
	                      _context.next = 2;
	                      return (0, _effects.select)((0, _selectors.pageAttribute)('type'));

	                    case 2:
	                      thisPageType = _context.sent;
	                      pageTypeSaga = pageTypeSagas[thisPageType];

	                      if (!pageTypeSaga) {
	                        _context.next = 8;
	                        break;
	                      }

	                      _context.next = 7;
	                      return (0, _effects.fork)(pageTypeSaga);

	                    case 7:
	                      task = _context.sent;

	                    case 8:
	                    case 'end':
	                      return _context.stop();
	                  }
	                }
	              }, _callee, this);
	            }));

	          case 5:
	            _context3.next = 7;
	            return (0, _reduxSaga.takeEvery)(_actions.CLEANUP, regeneratorRuntime.mark(function _callee2() {
	              return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                while (1) {
	                  switch (_context2.prev = _context2.next) {
	                    case 0:
	                      if (!task) {
	                        _context2.next = 3;
	                        break;
	                      }

	                      _context2.next = 3;
	                      return (0, _effects.cancel)(task);

	                    case 3:
	                    case 'end':
	                      return _context2.stop();
	                  }
	                }
	              }, _callee2, this);
	            }));

	          case 7:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, this);
	  });
	};

	var _selectors = __webpack_require__(337);

	var _scheduleUnprepare = __webpack_require__(377);

	var _scheduleUnprepare2 = _interopRequireDefault(_scheduleUnprepare);

	var _updating = __webpack_require__(378);

	var _updating2 = _interopRequireDefault(_updating);

	var _actions = __webpack_require__(300);

	var _effects = __webpack_require__(345);

	var _reduxSaga = __webpack_require__(349);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selector = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.pageAttribute = pageAttribute;
	exports.pageAttributes = pageAttributes;
	exports.pageState = pageState;
	exports.pageIsActive = pageIsActive;
	exports.pageIsActivated = pageIsActivated;
	exports.pageIsPreloaded = pageIsPreloaded;
	exports.pageIsPrepared = pageIsPrepared;

	var _collections = __webpack_require__(338);

	var selector = exports.selector = (0, _collections.createItemSelector)('pages');

	function pageAttribute(property, options) {
	  return selector(_extends({ map: function map(page) {
	      return page.attributes[property];
	    } }, options));
	}

	function pageAttributes(options) {
	  return selector(_extends({ map: function map(page) {
	      return page.attributes;
	    } }, options));
	}

	function pageState(property, options) {
	  return selector(_extends({ map: function map(page) {
	      return page.state.custom[property];
	    } }, options));
	}

	function pageIsActive(options) {
	  return commonPageState('isActive', options);
	}

	function pageIsActivated(options) {
	  return commonPageState('isActivated', options);
	}

	function pageIsPreloaded(options) {
	  return commonPageState('isPreloaded', options);
	}

	function pageIsPrepared(options) {
	  return commonPageState('isPrepared', options);
	}

	function commonPageState(property, options) {
	  return selector(_extends({ map: function map(page) {
	      return page.state.common[property];
	    } }, options));
	}

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.watch = exports.createItemScopeProvider = exports.createItemScopeConnector = exports.createSaga = exports.createReducer = exports.createItemSelector = exports.createItemsSelector = undefined;

	var _createItemsSelector = __webpack_require__(339);

	var _createItemsSelector2 = _interopRequireDefault(_createItemsSelector);

	var _createItemSelector = __webpack_require__(340);

	var _createItemSelector2 = _interopRequireDefault(_createItemSelector);

	var _createReducer = __webpack_require__(342);

	var _createReducer2 = _interopRequireDefault(_createReducer);

	var _createSaga = __webpack_require__(343);

	var _createSaga2 = _interopRequireDefault(_createSaga);

	var _createItemScopeConnector = __webpack_require__(358);

	var _createItemScopeConnector2 = _interopRequireDefault(_createItemScopeConnector);

	var _createItemScopeProvider = __webpack_require__(368);

	var _createItemScopeProvider2 = _interopRequireDefault(_createItemScopeProvider);

	var _watch = __webpack_require__(369);

	var _watch2 = _interopRequireDefault(_watch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createItemsSelector = _createItemsSelector2.default;
	exports.createItemSelector = _createItemSelector2.default;
	exports.createReducer = _createReducer2.default;
	exports.createSaga = _createSaga2.default;
	exports.createItemScopeConnector = _createItemScopeConnector2.default;
	exports.createItemScopeProvider = _createItemScopeProvider2.default;
	exports.watch = _watch2.default;

/***/ },
/* 339 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (collectionName) {
	  return function itemsSelector(state) {
	    return state[collectionName] || {};
	  };
	};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (collectionName) {
	  return function () {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        id = _ref.id,
	        _ref$map = _ref.map,
	        map = _ref$map === undefined ? function (r) {
	      return r;
	    } : _ref$map;

	    return function (state, props) {
	      var modelId = id;

	      if (!state[collectionName]) {
	        throw new Error('Cannot select from unknown collection ' + collectionName + '.');
	      }

	      if (typeof id == 'function') {
	        modelId = id(state, props);
	      }

	      modelId = modelId || state[(0, _itemScopeHelpers.getItemScopeProperty)(collectionName)];

	      if (!modelId) {
	        return null;
	      }

	      var model = state[collectionName][modelId];

	      return model && map(model);
	    };
	  };
	};

	var _itemScopeHelpers = __webpack_require__(341);

/***/ },
/* 341 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.addItemScope = addItemScope;
	exports.getItemScopeProperty = getItemScopeProperty;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function addItemScope(state, collectionName, itemId) {
	  return _extends({}, state, _defineProperty({}, getItemScopeProperty(collectionName), itemId));
	}

	function getItemScopeProperty(collectionName) {
	  return "__" + collectionName + "_connectedId";
	}

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (collectionName) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$idAttribute = _ref.idAttribute,
	      idAttribute = _ref$idAttribute === undefined ? 'id' : _ref$idAttribute,
	      _ref$itemReducer = _ref.itemReducer,
	      itemReducer = _ref$itemReducer === undefined ? _attributesItemReducer2.default : _ref$itemReducer;

	  return function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    var clone = void 0,
	        id = void 0;

	    if (!action.meta || action.meta.collectionName != collectionName) {
	      return state;
	    }

	    switch (action.type) {
	      case _actions.RESET:
	        return action.payload.items.reduce(function (result, item) {
	          result[item[idAttribute]] = itemReducer(undefined, (0, _actions.add)({
	            collectioName: action.payload.collectioName,
	            attributes: item
	          }));

	          return result;
	        }, {});

	      case _actions.ADD:
	        return _extends({}, state, _defineProperty({}, action.payload.attributes[idAttribute], itemReducer(undefined, action)));

	      case _actions.CHANGE:
	        id = action.payload.attributes[idAttribute];

	        return _extends({}, state, _defineProperty({}, id, itemReducer(state[id], action)));

	      case _actions.REMOVE:
	        id = action.payload.attributes[idAttribute];

	        clone = _extends({}, state);
	        delete clone[id];
	        return clone;

	      default:
	        if (action.meta.itemId) {
	          var item = state[action.meta.itemId];
	          var reducedItem = itemReducer(item, action);

	          if (reducedItem !== item) {
	            return _extends({}, state, _defineProperty({}, action.meta.itemId, reducedItem));
	          }
	        }

	        return state;
	    }
	  };
	};

	var _actions = __webpack_require__(335);

	var _attributesItemReducer = __webpack_require__(334);

	var _attributesItemReducer2 = _interopRequireDefault(_attributesItemReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (collectionName, _ref) {
	  var _marked = [saga, syncItemSagas, cancelStaleItemSagas, forkNewItemSagas, runItemSaga].map(regeneratorRuntime.mark);

	  var itemSaga = _ref.itemSaga,
	      middleware = _ref.middleware;

	  var itemsSelector = (0, _createItemsSelector2.default)(collectionName);

	  return saga;

	  function saga() {
	    var runningItemSagas;
	    return regeneratorRuntime.wrap(function saga$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            runningItemSagas = {};
	            _context.next = 3;
	            return (0, _reduxSaga.takeEvery)([_actions.RESET, _actions.ADD, _actions.REMOVE], syncItemSagas, runningItemSagas);

	          case 3:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _marked[0], this);
	  }

	  function syncItemSagas(runningItemSagas) {
	    var items;
	    return regeneratorRuntime.wrap(function syncItemSagas$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return (0, _effects.select)(itemsSelector);

	          case 2:
	            items = _context2.sent;
	            return _context2.delegateYield(cancelStaleItemSagas(items, runningItemSagas), 't0', 4);

	          case 4:
	            return _context2.delegateYield(forkNewItemSagas(items, runningItemSagas), 't1', 5);

	          case 5:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _marked[1], this);
	  }

	  function cancelStaleItemSagas(items, runningItemSagas) {
	    return regeneratorRuntime.wrap(function cancelStaleItemSagas$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            _context3.next = 2;
	            return Object.keys(runningItemSagas).map(function (runningItemId) {
	              if (!(runningItemId in items)) {
	                return (0, _effects.cancel)(runningItemSagas[runningItemId]);
	              }
	            });

	          case 2:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _marked[2], this);
	  }

	  function forkNewItemSagas(items, runningItemSagas) {
	    var tasks;
	    return regeneratorRuntime.wrap(function forkNewItemSagas$(_context4) {
	      while (1) {
	        switch (_context4.prev = _context4.next) {
	          case 0:
	            _context4.next = 2;
	            return Object.keys(items).map(function (itemId) {
	              if (!runningItemSagas[itemId]) {
	                return (0, _effects.fork)(runItemSaga, parseInt(itemId, 10));
	              }
	            });

	          case 2:
	            tasks = _context4.sent;


	            Object.keys(items).forEach(function (key, index) {
	              if (!runningItemSagas[key]) {
	                runningItemSagas[key] = tasks[index];
	              }
	            });

	          case 4:
	          case 'end':
	            return _context4.stop();
	        }
	      }
	    }, _marked[3], this);
	  }

	  function runItemSaga(itemId) {
	    var task;
	    return regeneratorRuntime.wrap(function runItemSaga$(_context5) {
	      while (1) {
	        switch (_context5.prev = _context5.next) {
	          case 0:
	            task = (0, _reduxSaga.runSaga)(itemSaga(), {
	              subscribe: function subscribe(callback) {
	                return middleware.subscribe(function (action) {
	                  if (!(0, _itemActionHelpers.isItemAction)(action, collectionName) || (0, _itemActionHelpers.getItemIdFromItemAction)(action) == itemId) {

	                    callback(action);
	                  }
	                });
	              },
	              dispatch: function dispatch(action) {
	                (0, _itemActionHelpers.ensureItemActionId)(action, collectionName, itemId);
	                middleware.dispatch(action);
	              },
	              getState: function getState() {
	                return (0, _itemScopeHelpers.addItemScope)(middleware.getState(), collectionName, itemId);
	              }
	            });
	            _context5.prev = 1;
	            _context5.next = 4;
	            return (0, _effects.call)(function () {
	              return task.done;
	            });

	          case 4:
	            _context5.prev = 4;

	            task.cancel();
	            return _context5.finish(4);

	          case 7:
	          case 'end':
	            return _context5.stop();
	        }
	      }
	    }, _marked[4], this, [[1,, 4, 7]]);
	  }
	};

	exports.createMiddleware = createMiddleware;

	var _itemActionHelpers = __webpack_require__(344);

	var _itemScopeHelpers = __webpack_require__(341);

	var _effects = __webpack_require__(345);

	var _reduxSaga = __webpack_require__(349);

	var _createItemsSelector = __webpack_require__(339);

	var _createItemsSelector2 = _interopRequireDefault(_createItemsSelector);

	var _actions = __webpack_require__(335);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMiddleware() {
	  return function middleware(_ref2) {
	    var getState = _ref2.getState,
	        dispatch = _ref2.dispatch;

	    var sagaEmitter = emitter();

	    middleware.getState = getState;
	    middleware.dispatch = dispatch;
	    middleware.subscribe = sagaEmitter.subscribe;

	    return function (next) {
	      return function (action) {
	        var result = next(action);

	        sagaEmitter.emit(action);

	        return result;
	      };
	    };
	  };
	}

	function emitter() {
	  var subscribers = [];

	  function subscribe(sub) {
	    subscribers.push(sub);
	    return function () {
	      return remove(subscribers, sub);
	    };
	  }

	  function emit(item) {
	    var arr = subscribers.slice();
	    for (var i = 0, len = arr.length; i < len; i++) {
	      arr[i](item);
	    }
	  }

	  return {
	    subscribe: subscribe,
	    emit: emit
	  };
	}

	function remove(array, item) {
	  var index = array.indexOf(item);

	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}

/***/ },
/* 344 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.ensureItemActionId = ensureItemActionId;
	exports.isItemAction = isItemAction;
	exports.getItemIdFromItemAction = getItemIdFromItemAction;
	function ensureItemActionId(action, collectionName, itemId) {
	  if (action.meta && action.meta.collectionName == collectionName && !action.meta.itemId) {

	    action.meta = _extends({}, action.meta, {
	      itemId: itemId
	    });
	  }
	}

	function isItemAction(action, collectionName) {
	  return action.meta && action.meta.collectionName == collectionName;
	}

	function getItemIdFromItemAction(action) {
	  return action.meta && action.meta.itemId;
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(346)

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _io = __webpack_require__(347);

	Object.defineProperty(exports, 'take', {
	  enumerable: true,
	  get: function get() {
	    return _io.take;
	  }
	});
	Object.defineProperty(exports, 'takem', {
	  enumerable: true,
	  get: function get() {
	    return _io.takem;
	  }
	});
	Object.defineProperty(exports, 'put', {
	  enumerable: true,
	  get: function get() {
	    return _io.put;
	  }
	});
	Object.defineProperty(exports, 'race', {
	  enumerable: true,
	  get: function get() {
	    return _io.race;
	  }
	});
	Object.defineProperty(exports, 'call', {
	  enumerable: true,
	  get: function get() {
	    return _io.call;
	  }
	});
	Object.defineProperty(exports, 'apply', {
	  enumerable: true,
	  get: function get() {
	    return _io.apply;
	  }
	});
	Object.defineProperty(exports, 'cps', {
	  enumerable: true,
	  get: function get() {
	    return _io.cps;
	  }
	});
	Object.defineProperty(exports, 'fork', {
	  enumerable: true,
	  get: function get() {
	    return _io.fork;
	  }
	});
	Object.defineProperty(exports, 'spawn', {
	  enumerable: true,
	  get: function get() {
	    return _io.spawn;
	  }
	});
	Object.defineProperty(exports, 'join', {
	  enumerable: true,
	  get: function get() {
	    return _io.join;
	  }
	});
	Object.defineProperty(exports, 'cancel', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancel;
	  }
	});
	Object.defineProperty(exports, 'select', {
	  enumerable: true,
	  get: function get() {
	    return _io.select;
	  }
	});
	Object.defineProperty(exports, 'actionChannel', {
	  enumerable: true,
	  get: function get() {
	    return _io.actionChannel;
	  }
	});
	Object.defineProperty(exports, 'cancelled', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancelled;
	  }
	});
	Object.defineProperty(exports, 'flush', {
	  enumerable: true,
	  get: function get() {
	    return _io.flush;
	  }
	});

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asEffect = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.take = take;
	exports.takem = takem;
	exports.put = put;
	exports.race = race;
	exports.call = call;
	exports.apply = apply;
	exports.cps = cps;
	exports.fork = fork;
	exports.spawn = spawn;
	exports.join = join;
	exports.cancel = cancel;
	exports.select = select;
	exports.actionChannel = actionChannel;
	exports.cancelled = cancelled;
	exports.flush = flush;

	var _utils = __webpack_require__(348);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var IO = (0, _utils.sym)('IO');
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED = 'CANCELLED';
	var FLUSH = 'FLUSH';

	var effect = function effect(type, payload) {
	  var _ref;

	  return _ref = {}, _defineProperty(_ref, IO, true), _defineProperty(_ref, type, payload), _ref;
	};

	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

	  if (arguments.length) {
	    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (_utils.is.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (_utils.is.channel(patternOrChannel)) {
	    return effect(TAKE, { channel: patternOrChannel });
	  }
	  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
	}

	function takem() {
	  var eff = take.apply(undefined, arguments);
	  eff[TAKE].maybe = true;
	  return eff;
	}

	function put(channel, action) {
	  if (arguments.length > 1) {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
	    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
	    action = channel;
	    channel = null;
	  }
	  return effect(PUT, { channel: channel, action: action });
	}

	put.sync = function () {
	  var eff = put.apply(undefined, arguments);
	  eff[PUT].sync = true;
	  return eff;
	};

	function race(effects) {
	  return effect(RACE, effects);
	}

	function getFnCallDesc(meth, fn, args) {
	  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');

	  var context = null;
	  if (_utils.is.array(fn)) {
	    var _fn = fn;

	    var _fn2 = _slicedToArray(_fn, 2);

	    context = _fn2[0];
	    fn = _fn2[1];
	  } else if (fn.fn) {
	    var _fn3 = fn;
	    context = _fn3.context;
	    fn = _fn3.fn;
	  }
	  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');

	  return { context: context, fn: fn, args: args };
	}

	function call(fn) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return effect(CALL, getFnCallDesc('call', fn, args));
	}

	function apply(context, fn) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
	}

	function cps(fn) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }

	  return effect(CPS, getFnCallDesc('cps', fn, args));
	}

	function fork(fn) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }

	  return effect(FORK, getFnCallDesc('fork', fn, args));
	}

	function spawn(fn) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }

	  var eff = fork.apply(undefined, [fn].concat(args));
	  eff[FORK].detached = true;
	  return eff;
	}

	var isForkedTask = function isForkedTask(task) {
	  return task[_utils.TASK];
	};

	function join(task) {
	  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
	  if (!isForkedTask(task)) {
	    throw new Error('join(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
	  }

	  return effect(JOIN, task);
	}

	function cancel(task) {
	  (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
	  if (!isForkedTask(task)) {
	    throw new Error('cancel(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
	  }

	  return effect(CANCEL, task);
	}

	function select(selector) {
	  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    args[_key5 - 1] = arguments[_key5];
	  }

	  if (arguments.length === 0) {
	    selector = _utils.ident;
	  } else {
	    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
	    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}

	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}

	function cancelled() {
	  return effect(CANCELLED, {});
	}

	function flush(channel) {
	  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}

	var asEffect = exports.asEffect = {
	  take: function take(effect) {
	    return effect && effect[IO] && effect[TAKE];
	  },
	  put: function put(effect) {
	    return effect && effect[IO] && effect[PUT];
	  },
	  race: function race(effect) {
	    return effect && effect[IO] && effect[RACE];
	  },
	  call: function call(effect) {
	    return effect && effect[IO] && effect[CALL];
	  },
	  cps: function cps(effect) {
	    return effect && effect[IO] && effect[CPS];
	  },
	  fork: function fork(effect) {
	    return effect && effect[IO] && effect[FORK];
	  },
	  join: function join(effect) {
	    return effect && effect[IO] && effect[JOIN];
	  },
	  cancel: function cancel(effect) {
	    return effect && effect[IO] && effect[CANCEL];
	  },
	  select: function select(effect) {
	    return effect && effect[IO] && effect[SELECT];
	  },
	  actionChannel: function actionChannel(effect) {
	    return effect && effect[IO] && effect[ACTION_CHANNEL];
	  },
	  cancelled: function cancelled(effect) {
	    return effect && effect[IO] && effect[CANCELLED];
	  },
	  flush: function flush(effect) {
	    return effect && effect[IO] && effect[FLUSH];
	  }
	};

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.check = check;
	exports.remove = remove;
	exports.deferred = deferred;
	exports.arrayOfDeffered = arrayOfDeffered;
	exports.delay = delay;
	exports.createMockTask = createMockTask;
	exports.autoInc = autoInc;
	exports.makeIterator = makeIterator;
	exports.log = log;
	exports.wrapSagaDispatch = wrapSagaDispatch;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var sym = exports.sym = function sym(id) {
	  return '@@redux-saga/' + id;
	};
	var TASK = exports.TASK = sym('TASK');
	var HELPER = exports.HELPER = sym('HELPER');
	var MATCH = exports.MATCH = sym('MATCH');
	var CANCEL = exports.CANCEL = sym('cancelPromise');
	var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
	var konst = exports.konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = exports.kTrue = konst(true);
	var kFalse = exports.kFalse = konst(false);
	var noop = exports.noop = function noop() {};
	var ident = exports.ident = function ident(v) {
	  return v;
	};

	function check(value, predicate, error) {
	  if (!predicate(value)) {
	    log('error', 'uncaught at check', error);
	    throw new Error(error);
	  }
	}

	var is = exports.is = {
	  undef: function undef(v) {
	    return v === null || v === undefined;
	  },
	  notUndef: function notUndef(v) {
	    return v !== null && v !== undefined;
	  },
	  func: function func(f) {
	    return typeof f === 'function';
	  },
	  number: function number(n) {
	    return typeof n === 'number';
	  },
	  array: Array.isArray,
	  promise: function promise(p) {
	    return p && is.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is.func(it.next) && is.func(it.throw);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (typeof pat === 'string' || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is.func(ch.take) && is.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  }
	};

	function remove(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}

	function deferred() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var def = _extends({}, props);
	  var promise = new Promise(function (resolve, reject) {
	    def.resolve = resolve;
	    def.reject = reject;
	  });
	  def.promise = promise;
	  return def;
	}

	function arrayOfDeffered(length) {
	  var arr = [];
	  for (var i = 0; i < length; i++) {
	    arr.push(deferred());
	  }
	  return arr;
	}

	function delay(ms) {
	  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  var timeoutId = void 0;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(function () {
	      return resolve(val);
	    }, ms);
	  });

	  promise[CANCEL] = function () {
	    return clearTimeout(timeoutId);
	  };

	  return promise;
	}

	function createMockTask() {
	  var _ref;

	  var running = true;
	  var _result = void 0,
	      _error = void 0;

	  return _ref = {}, _defineProperty(_ref, TASK, true), _defineProperty(_ref, 'isRunning', function isRunning() {
	    return running;
	  }), _defineProperty(_ref, 'result', function result() {
	    return _result;
	  }), _defineProperty(_ref, 'error', function error() {
	    return _error;
	  }), _defineProperty(_ref, 'setRunning', function setRunning(b) {
	    return running = b;
	  }), _defineProperty(_ref, 'setResult', function setResult(r) {
	    return _result = r;
	  }), _defineProperty(_ref, 'setError', function setError(e) {
	    return _error = e;
	  }), _ref;
	}

	function autoInc() {
	  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	  return function () {
	    return ++seed;
	  };
	}

	var uid = exports.uid = autoInc();

	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return { value: value, done: true };
	};
	function makeIterator(next) {
	  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var isHelper = arguments[3];

	  var iterator = { name: name, next: next, throw: thro, return: kReturn };

	  if (isHelper) {
	    iterator[HELPER] = true;
	  }
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}

	/**
	  Print error in a useful way whether in a browser environment
	  (with expandable error stack traces), or in a node.js environment
	  (text-only log output)
	 **/
	function log(level, message, error) {
	  /*eslint-disable no-console*/
	  if (typeof window === 'undefined') {
	    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
	  } else {
	    console[level](message, error);
	  }
	}

	var internalErr = exports.internalErr = function internalErr(err) {
	  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
	};

	function wrapSagaDispatch(dispatch) {
	  return function sagaDispatch(action) {
	    var wrappedAction = Object.defineProperty(action, SAGA_ACTION, { value: true });
	    return dispatch(wrappedAction);
	  };
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.effects = exports.CANCEL = exports.delay = exports.throttle = exports.takeLatest = exports.takeEvery = exports.buffers = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;

	var _runSaga = __webpack_require__(350);

	Object.defineProperty(exports, 'runSaga', {
	  enumerable: true,
	  get: function get() {
	    return _runSaga.runSaga;
	  }
	});

	var _channel = __webpack_require__(353);

	Object.defineProperty(exports, 'END', {
	  enumerable: true,
	  get: function get() {
	    return _channel.END;
	  }
	});
	Object.defineProperty(exports, 'eventChannel', {
	  enumerable: true,
	  get: function get() {
	    return _channel.eventChannel;
	  }
	});
	Object.defineProperty(exports, 'channel', {
	  enumerable: true,
	  get: function get() {
	    return _channel.channel;
	  }
	});

	var _buffers = __webpack_require__(354);

	Object.defineProperty(exports, 'buffers', {
	  enumerable: true,
	  get: function get() {
	    return _buffers.buffers;
	  }
	});

	var _sagaHelpers = __webpack_require__(355);

	Object.defineProperty(exports, 'takeEvery', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.takeEvery;
	  }
	});
	Object.defineProperty(exports, 'takeLatest', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.takeLatest;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _sagaHelpers.throttle;
	  }
	});

	var _utils = __webpack_require__(348);

	Object.defineProperty(exports, 'delay', {
	  enumerable: true,
	  get: function get() {
	    return _utils.delay;
	  }
	});
	Object.defineProperty(exports, 'CANCEL', {
	  enumerable: true,
	  get: function get() {
	    return _utils.CANCEL;
	  }
	});

	var _middleware = __webpack_require__(356);

	var _middleware2 = _interopRequireDefault(_middleware);

	var _effects = __webpack_require__(346);

	var effects = _interopRequireWildcard(_effects);

	var _utils2 = __webpack_require__(357);

	var utils = _interopRequireWildcard(_utils2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _middleware2.default;
	exports.effects = effects;
	exports.utils = utils;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runSaga = runSaga;

	var _utils = __webpack_require__(348);

	var _proc = __webpack_require__(351);

	var _proc2 = _interopRequireDefault(_proc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function runSaga(iterator, _ref) {
	  var subscribe = _ref.subscribe,
	      dispatch = _ref.dispatch,
	      getState = _ref.getState,
	      sagaMonitor = _ref.sagaMonitor,
	      logger = _ref.logger;


	  (0, _utils.check)(iterator, _utils.is.iterator, "runSaga must be called on an iterator");

	  var effectId = (0, _utils.uid)();
	  if (sagaMonitor) {
	    dispatch = (0, _utils.wrapSagaDispatch)(dispatch);
	    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: iterator, args: [] } });
	  }
	  var task = (0, _proc2.default)(iterator, subscribe, dispatch, getState, { sagaMonitor: sagaMonitor, logger: logger }, effectId, iterator.name);

	  if (sagaMonitor) {
	    sagaMonitor.effectResolved(effectId, task);
	  }

	  return task;
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
	exports.default = proc;

	var _utils = __webpack_require__(348);

	var _scheduler = __webpack_require__(352);

	var _io = __webpack_require__(347);

	var _channel = __webpack_require__(353);

	var _buffers = __webpack_require__(354);

	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var isDev = ("production") === 'development';

	var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

	var CHANNEL_END = exports.CHANNEL_END = {
	  toString: function toString() {
	    return '@@redux-saga/CHANNEL_END';
	  }
	};
	var TASK_CANCEL = exports.TASK_CANCEL = {
	  toString: function toString() {
	    return '@@redux-saga/TASK_CANCEL';
	  }
	};

	var matchers = {
	  wildcard: function wildcard() {
	    return _utils.kTrue;
	  },
	  default: function _default(pattern) {
	    return function (input) {
	      return input.type === pattern;
	    };
	  },
	  array: function array(patterns) {
	    return function (input) {
	      return patterns.some(function (p) {
	        return p === input.type;
	      });
	    };
	  },
	  predicate: function predicate(_predicate) {
	    return function (input) {
	      return _predicate(input);
	    };
	  }
	};

	function matcher(pattern) {
	  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
	}

	/**
	  Used to track a parent task and its forks
	  In the new fork model, forked tasks are attached by default to their parent
	  We model this using the concept of Parent task && main Task
	  main task is the main flow of the current Generator, the parent tasks is the
	  aggregation of the main tasks + all its forked tasks.
	  Thus the whole model represents an execution tree with multiple branches (vs the
	  linear execution tree in sequential (non parallel) programming)

	  A parent tasks has the following semantics
	  - It completes iff all its forks either complete or all cancelled
	  - If it's cancelled, all forks are cancelled as well
	  - It aborts if any uncaught error bubbles up from forks
	  - If it completes, the return value is the one returned by the main task
	**/
	function forkQueue(name, mainTask, cb) {
	  var tasks = [],
	      result = void 0,
	      completed = false;
	  addTask(mainTask);

	  function abort(err) {
	    cancelAll();
	    cb(err, true);
	  }

	  function addTask(task) {
	    tasks.push(task);
	    task.cont = function (res, isErr) {
	      if (completed) {
	        return;
	      }

	      (0, _utils.remove)(tasks, task);
	      task.cont = _utils.noop;
	      if (isErr) {
	        abort(res);
	      } else {
	        if (task === mainTask) {
	          result = res;
	        }
	        if (!tasks.length) {
	          completed = true;
	          cb(result);
	        }
	      }
	    };
	    // task.cont.cancel = task.cancel
	  }

	  function cancelAll() {
	    if (completed) {
	      return;
	    }
	    completed = true;
	    tasks.forEach(function (t) {
	      t.cont = _utils.noop;
	      t.cancel();
	    });
	    tasks = [];
	  }

	  return {
	    addTask: addTask,
	    cancelAll: cancelAll,
	    abort: abort,
	    getTasks: function getTasks() {
	      return tasks;
	    },
	    taskNames: function taskNames() {
	      return tasks.map(function (t) {
	        return t.name;
	      });
	    }
	  };
	}

	function createTaskIterator(_ref) {
	  var context = _ref.context,
	      fn = _ref.fn,
	      args = _ref.args;

	  if (_utils.is.iterator(fn)) {
	    return fn;
	  }

	  // catch synchronous failures; see #152 and #441
	  var result = void 0,
	      error = void 0;
	  try {
	    result = fn.apply(context, args);
	  } catch (err) {
	    error = err;
	  }

	  // i.e. a generator function returns an iterator
	  if (_utils.is.iterator(result)) {
	    return result;
	  }

	  // do not bubble up synchronous failures for detached forks
	  // instead create a failed task. See #152 and #441
	  return error ? (0, _utils.makeIterator)(function () {
	    throw error;
	  }) : (0, _utils.makeIterator)(function () {
	    var pc = void 0;
	    var eff = { done: false, value: result };
	    var ret = function ret(value) {
	      return { done: true, value: value };
	    };
	    return function (arg) {
	      if (!pc) {
	        pc = true;
	        return eff;
	      } else {
	        return ret(arg);
	      }
	    };
	  }());
	}

	function wrapHelper(helper) {
	  return {
	    fn: helper
	  };
	}

	function proc(iterator) {
	  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	    return _utils.noop;
	  };
	  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
	  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
	  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	  var parentEffectId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	  var name = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'anonymous';
	  var cont = arguments[7];

	  (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);

	  var sagaMonitor = options.sagaMonitor,
	      logger = options.logger,
	      onError = options.onError;

	  var log = logger || _utils.log;
	  var stdChannel = (0, _channel.stdChannel)(subscribe);
	  /**
	    Tracks the current effect cancellation
	    Each time the generator progresses. calling runEffect will set a new value
	    on it. It allows propagating cancellation to child effects
	  **/
	  next.cancel = _utils.noop;

	  /**
	    Creates a new task descriptor for this generator, We'll also create a main task
	    to track the main flow (besides other forked tasks)
	  **/
	  var task = newTask(parentEffectId, name, iterator, cont);
	  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
	  var taskQueue = forkQueue(name, mainTask, end);

	  /**
	    cancellation of the main task. We'll simply resume the Generator with a Cancel
	  **/
	  function cancelMain() {
	    if (mainTask.isRunning && !mainTask.isCancelled) {
	      mainTask.isCancelled = true;
	      next(TASK_CANCEL);
	    }
	  }

	  /**
	    This may be called by a parent generator to trigger/propagate cancellation
	    cancel all pending tasks (including the main task), then end the current task.
	      Cancellation propagates down to the whole execution tree holded by this Parent task
	    It's also propagated to all joiners of this task and their execution tree/joiners
	      Cancellation is noop for terminated/Cancelled tasks tasks
	  **/
	  function cancel() {
	    /**
	      We need to check both Running and Cancelled status
	      Tasks can be Cancelled but still Running
	    **/
	    if (iterator._isRunning && !iterator._isCancelled) {
	      iterator._isCancelled = true;
	      taskQueue.cancelAll();
	      /**
	        Ending with a Never result will propagate the Cancellation to all joiners
	      **/
	      end(TASK_CANCEL);
	    }
	  }
	  /**
	    attaches cancellation logic to this task's continuation
	    this will permit cancellation to propagate down the call chain
	  **/
	  cont && (cont.cancel = cancel);

	  // tracks the running status
	  iterator._isRunning = true;

	  // kicks up the generator
	  next();

	  // then return the task descriptor to the caller
	  return task;

	  /**
	    This is the generator driver
	    It's a recursive async/continuation function which calls itself
	    until the generator terminates or throws
	  **/
	  function next(arg, isErr) {
	    // Preventive measure. If we end up here, then there is really something wrong
	    if (!mainTask.isRunning) {
	      throw new Error('Trying to resume an already finished generator');
	    }

	    try {
	      var result = void 0;
	      if (isErr) {
	        result = iterator.throw(arg);
	      } else if (arg === TASK_CANCEL) {
	        /**
	          getting TASK_CANCEL autoamtically cancels the main task
	          We can get this value here
	            - By cancelling the parent task manually
	          - By joining a Cancelled task
	        **/
	        mainTask.isCancelled = true;
	        /**
	          Cancels the current effect; this will propagate the cancellation down to any called tasks
	        **/
	        next.cancel();
	        /**
	          If this Generator has a `return` method then invokes it
	          Thill will jump to the finally block
	        **/
	        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
	      } else if (arg === CHANNEL_END) {
	        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
	        result = _utils.is.func(iterator.return) ? iterator.return() : { done: true };
	      } else {
	        result = iterator.next(arg);
	      }

	      if (!result.done) {
	        runEffect(result.value, parentEffectId, '', next);
	      } else {
	        /**
	          This Generator has ended, terminate the main task and notify the fork queue
	        **/
	        mainTask.isMainRunning = false;
	        mainTask.cont && mainTask.cont(result.value);
	      }
	    } catch (error) {
	      if (mainTask.isCancelled) {
	        log('error', 'uncaught at ' + name, error.message);
	      }
	      mainTask.isMainRunning = false;
	      mainTask.cont(error, true);
	    }
	  }

	  function end(result, isErr) {
	    iterator._isRunning = false;
	    stdChannel.close();
	    if (!isErr) {
	      if (result === TASK_CANCEL && isDev) {
	        log('info', name + ' has been cancelled', '');
	      }
	      iterator._result = result;
	      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
	    } else {
	      if (result instanceof Error) {
	        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
	      }
	      if (!task.cont) {
	        log('error', 'uncaught', result.sagaStack || result.stack);
	        if (result instanceof Error && onError) {
	          onError(result);
	        }
	      }
	      iterator._error = result;
	      iterator._isAborted = true;
	      iterator._deferredEnd && iterator._deferredEnd.reject(result);
	    }
	    task.cont && task.cont(result, isErr);
	    task.joiners.forEach(function (j) {
	      return j.cb(result, isErr);
	    });
	    task.joiners = null;
	  }

	  function runEffect(effect, parentEffectId) {
	    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	    var cb = arguments[3];

	    var effectId = (0, _utils.uid)();
	    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

	    /**
	      completion callback and cancel callback are mutually exclusive
	      We can't cancel an already completed effect
	      And We can't complete an already cancelled effectId
	    **/
	    var effectSettled = void 0;

	    // Completion callback passed to the appropriate effect runner
	    function currCb(res, isErr) {
	      if (effectSettled) {
	        return;
	      }

	      effectSettled = true;
	      cb.cancel = _utils.noop; // defensive measure
	      if (sagaMonitor) {
	        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
	      }

	      cb(res, isErr);
	    }
	    // tracks down the current cancel
	    currCb.cancel = _utils.noop;

	    // setup cancellation logic on the parent cb
	    cb.cancel = function () {
	      // prevents cancelling an already completed effect
	      if (effectSettled) {
	        return;
	      }

	      effectSettled = true;
	      /**
	        propagates cancel downward
	        catch uncaught cancellations errors; since we can no longer call the completion
	        callback, log errors raised during cancellations into the console
	      **/
	      try {
	        currCb.cancel();
	      } catch (err) {
	        log('error', 'uncaught at ' + name, err.message);
	      }
	      currCb.cancel = _utils.noop; // defensive measure

	      sagaMonitor && sagaMonitor.effectCancelled(effectId);
	    };

	    /**
	      each effect runner must attach its own logic of cancellation to the provided callback
	      it allows this generator to propagate cancellation downward.
	        ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
	      And the setup must occur before calling the callback
	        This is a sort of inversion of control: called async functions are responsible
	      of completing the flow by calling the provided continuation; while caller functions
	      are responsible for aborting the current flow by calling the attached cancel function
	        Library users can attach their own cancellation logic to promises by defining a
	      promise[CANCEL] method in their returned promises
	      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
	    **/
	    var data = void 0;
	    return (
	      // Non declarative effect
	      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

	      // declarative effects
	      : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : /* anything else returned as is        */currCb(effect)
	    );
	  }

	  function resolvePromise(promise, cb) {
	    var cancelPromise = promise[_utils.CANCEL];
	    if (typeof cancelPromise === 'function') {
	      cb.cancel = cancelPromise;
	    }
	    promise.then(cb, function (error) {
	      return cb(error, true);
	    });
	  }

	  function resolveIterator(iterator, effectId, name, cb) {
	    proc(iterator, subscribe, dispatch, getState, options, effectId, name, cb);
	  }

	  function runTakeEffect(_ref2, cb) {
	    var channel = _ref2.channel,
	        pattern = _ref2.pattern,
	        maybe = _ref2.maybe;

	    channel = channel || stdChannel;
	    var takeCb = function takeCb(inp) {
	      return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
	    };
	    try {
	      channel.take(takeCb, matcher(pattern));
	    } catch (err) {
	      return cb(err, true);
	    }
	    cb.cancel = takeCb.cancel;
	  }

	  function runPutEffect(_ref3, cb) {
	    var channel = _ref3.channel,
	        action = _ref3.action,
	        sync = _ref3.sync;

	    /**
	      Schedule the put in case another saga is holding a lock.
	      The put will be executed atomically. ie nested puts will execute after
	      this put has terminated.
	    **/
	    (0, _scheduler.asap)(function () {
	      var result = void 0;
	      try {
	        result = (channel ? channel.put : dispatch)(action);
	      } catch (error) {
	        // If we have a channel or `put.sync` was used then bubble up the error.
	        if (channel || sync) return cb(error, true);
	        log('error', 'uncaught at ' + name, error.stack || error.message || error);
	      }

	      if (sync && _utils.is.promise(result)) {
	        resolvePromise(result, cb);
	      } else {
	        return cb(result);
	      }
	    });
	    // Put effects are non cancellables
	  }

	  function runCallEffect(_ref4, effectId, cb) {
	    var context = _ref4.context,
	        fn = _ref4.fn,
	        args = _ref4.args;

	    var result = void 0;
	    // catch synchronous failures; see #152
	    try {
	      result = fn.apply(context, args);
	    } catch (error) {
	      return cb(error, true);
	    }
	    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
	  }

	  function runCPSEffect(_ref5, cb) {
	    var context = _ref5.context,
	        fn = _ref5.fn,
	        args = _ref5.args;

	    // CPS (ie node style functions) can define their own cancellation logic
	    // by setting cancel field on the cb

	    // catch synchronous failures; see #152
	    try {
	      (function () {
	        var cpsCb = function cpsCb(err, res) {
	          return _utils.is.undef(err) ? cb(res) : cb(err, true);
	        };
	        fn.apply(context, args.concat(cpsCb));
	        if (cpsCb.cancel) {
	          cb.cancel = function () {
	            return cpsCb.cancel();
	          };
	        }
	      })();
	    } catch (error) {
	      return cb(error, true);
	    }
	  }

	  function runForkEffect(_ref6, effectId, cb) {
	    var context = _ref6.context,
	        fn = _ref6.fn,
	        args = _ref6.args,
	        detached = _ref6.detached;

	    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

	    try {
	      (0, _scheduler.suspend)();
	      var _task = proc(taskIterator, subscribe, dispatch, getState, options, effectId, fn.name, detached ? null : _utils.noop);

	      if (detached) {
	        cb(_task);
	      } else {
	        if (taskIterator._isRunning) {
	          taskQueue.addTask(_task);
	          cb(_task);
	        } else if (taskIterator._error) {
	          taskQueue.abort(taskIterator._error);
	        } else {
	          cb(_task);
	        }
	      }
	    } finally {
	      (0, _scheduler.flush)();
	    }
	    // Fork effects are non cancellables
	  }

	  function runJoinEffect(t, cb) {
	    if (t.isRunning()) {
	      (function () {
	        var joiner = { task: task, cb: cb };
	        cb.cancel = function () {
	          return (0, _utils.remove)(t.joiners, joiner);
	        };
	        t.joiners.push(joiner);
	      })();
	    } else {
	      t.isAborted() ? cb(t.error(), true) : cb(t.result());
	    }
	  }

	  function runCancelEffect(task, cb) {
	    if (task.isRunning()) {
	      task.cancel();
	    }
	    cb();
	    // cancel effects are non cancellables
	  }

	  function runParallelEffect(effects, effectId, cb) {
	    if (!effects.length) {
	      return cb([]);
	    }

	    var completedCount = 0;
	    var completed = void 0;
	    var results = Array(effects.length);

	    function checkEffectEnd() {
	      if (completedCount === results.length) {
	        completed = true;
	        cb(results);
	      }
	    }

	    var childCbs = effects.map(function (eff, idx) {
	      var chCbAtIdx = function chCbAtIdx(res, isErr) {
	        if (completed) {
	          return;
	        }
	        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
	          cb.cancel();
	          cb(res, isErr);
	        } else {
	          results[idx] = res;
	          completedCount++;
	          checkEffectEnd();
	        }
	      };
	      chCbAtIdx.cancel = _utils.noop;
	      return chCbAtIdx;
	    });

	    cb.cancel = function () {
	      if (!completed) {
	        completed = true;
	        childCbs.forEach(function (chCb) {
	          return chCb.cancel();
	        });
	      }
	    };

	    effects.forEach(function (eff, idx) {
	      return runEffect(eff, effectId, idx, childCbs[idx]);
	    });
	  }

	  function runRaceEffect(effects, effectId, cb) {
	    var completed = void 0;
	    var keys = Object.keys(effects);
	    var childCbs = {};

	    keys.forEach(function (key) {
	      var chCbAtKey = function chCbAtKey(res, isErr) {
	        if (completed) {
	          return;
	        }

	        if (isErr) {
	          // Race Auto cancellation
	          cb.cancel();
	          cb(res, true);
	        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
	          cb.cancel();
	          completed = true;
	          cb(_defineProperty({}, key, res));
	        }
	      };
	      chCbAtKey.cancel = _utils.noop;
	      childCbs[key] = chCbAtKey;
	    });

	    cb.cancel = function () {
	      // prevents unnecessary cancellation
	      if (!completed) {
	        completed = true;
	        keys.forEach(function (key) {
	          return childCbs[key].cancel();
	        });
	      }
	    };
	    keys.forEach(function (key) {
	      if (completed) {
	        return;
	      }
	      runEffect(effects[key], effectId, key, childCbs[key]);
	    });
	  }

	  function runSelectEffect(_ref7, cb) {
	    var selector = _ref7.selector,
	        args = _ref7.args;

	    try {
	      var state = selector.apply(undefined, [getState()].concat(_toConsumableArray(args)));
	      cb(state);
	    } catch (error) {
	      cb(error, true);
	    }
	  }

	  function runChannelEffect(_ref8, cb) {
	    var pattern = _ref8.pattern,
	        buffer = _ref8.buffer;

	    var match = matcher(pattern);
	    match.pattern = pattern;
	    cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
	  }

	  function runCancelledEffect(data, cb) {
	    cb(!!mainTask.isCancelled);
	  }

	  function runFlushEffect(channel, cb) {
	    channel.flush(cb);
	  }

	  function newTask(id, name, iterator, cont) {
	    var _done, _ref9, _mutatorMap;

	    iterator._deferredEnd = null;
	    return _ref9 = {}, _defineProperty(_ref9, _utils.TASK, true), _defineProperty(_ref9, 'id', id), _defineProperty(_ref9, 'name', name), _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
	      if (iterator._deferredEnd) {
	        return iterator._deferredEnd.promise;
	      } else {
	        var def = (0, _utils.deferred)();
	        iterator._deferredEnd = def;
	        if (!iterator._isRunning) {
	          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
	        }
	        return def.promise;
	      }
	    }, _defineProperty(_ref9, 'cont', cont), _defineProperty(_ref9, 'joiners', []), _defineProperty(_ref9, 'cancel', cancel), _defineProperty(_ref9, 'isRunning', function isRunning() {
	      return iterator._isRunning;
	    }), _defineProperty(_ref9, 'isCancelled', function isCancelled() {
	      return iterator._isCancelled;
	    }), _defineProperty(_ref9, 'isAborted', function isAborted() {
	      return iterator._isAborted;
	    }), _defineProperty(_ref9, 'result', function result() {
	      return iterator._result;
	    }), _defineProperty(_ref9, 'error', function error() {
	      return iterator._error;
	    }), _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
	  }
	}

/***/ },
/* 352 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asap = asap;
	exports.suspend = suspend;
	exports.flush = flush;

	var queue = [];
	/**
	  Variable to hold a counting semaphore
	  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
	    already suspended)
	  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
	    triggers flushing the queued tasks.
	**/
	var semaphore = 0;

	/**
	  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
	  and flushed after this task has finished (assuming the scheduler endup in a released
	  state).
	**/
	function exec(task) {
	  try {
	    suspend();
	    task();
	  } finally {
	    flush();
	  }
	}

	/**
	  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
	**/
	function asap(task) {
	  if (!semaphore) {
	    exec(task);
	  } else {
	    queue.push(task);
	  }
	}

	/**
	  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
	  scheduler is released.
	**/
	function suspend() {
	  semaphore++;
	}

	/**
	  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
	**/
	function flush() {
	  semaphore--;
	  if (!semaphore && queue.length) {
	    exec(queue.shift());
	  }
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.emitter = emitter;
	exports.channel = channel;
	exports.eventChannel = eventChannel;
	exports.stdChannel = stdChannel;

	var _utils = __webpack_require__(348);

	var _buffers = __webpack_require__(354);

	var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
	var END = exports.END = { type: CHANNEL_END_TYPE };
	var isEnd = exports.isEnd = function isEnd(a) {
	  return a && a.type === CHANNEL_END_TYPE;
	};

	function emitter() {
	  var subscribers = [];

	  function subscribe(sub) {
	    subscribers.push(sub);
	    return function () {
	      return (0, _utils.remove)(subscribers, sub);
	    };
	  }

	  function emit(item) {
	    var arr = subscribers.slice();
	    for (var i = 0, len = arr.length; i < len; i++) {
	      arr[i](item);
	    }
	  }

	  return {
	    subscribe: subscribe,
	    emit: emit
	  };
	}

	var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
	var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

	if (false) {
	  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
	}

	function channel() {
	  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();

	  var closed = false;
	  var takers = [];

	  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);

	  function checkForbiddenStates() {
	    if (closed && takers.length) {
	      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
	    }
	    if (takers.length && !buffer.isEmpty()) {
	      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
	    }
	  }

	  function put(input) {
	    checkForbiddenStates();
	    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
	    if (closed) {
	      return;
	    }
	    if (!takers.length) {
	      return buffer.put(input);
	    }
	    for (var i = 0; i < takers.length; i++) {
	      var cb = takers[i];
	      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
	        takers.splice(i, 1);
	        return cb(input);
	      }
	    }
	  }

	  function take(cb) {
	    checkForbiddenStates();
	    (0, _utils.check)(cb, _utils.is.func, 'channel.take\'s callback must be a function');

	    if (closed && buffer.isEmpty()) {
	      cb(END);
	    } else if (!buffer.isEmpty()) {
	      cb(buffer.take());
	    } else {
	      takers.push(cb);
	      cb.cancel = function () {
	        return (0, _utils.remove)(takers, cb);
	      };
	    }
	  }

	  function flush(cb) {
	    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
	    (0, _utils.check)(cb, _utils.is.func, 'channel.flush\' callback must be a function');
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	      return;
	    }
	    cb(buffer.flush());
	  }

	  function close() {
	    checkForbiddenStates();
	    if (!closed) {
	      closed = true;
	      if (takers.length) {
	        var arr = takers;
	        takers = [];
	        for (var i = 0, len = arr.length; i < len; i++) {
	          arr[i](END);
	        }
	      }
	    }
	  }

	  return { take: take, put: put, flush: flush, close: close,
	    get __takers__() {
	      return takers;
	    },
	    get __closed__() {
	      return closed;
	    }
	  };
	}

	function eventChannel(subscribe) {
	  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
	  var matcher = arguments[2];

	  /**
	    should be if(typeof matcher !== undefined) instead?
	    see PR #273 for a background discussion
	  **/
	  if (arguments.length > 2) {
	    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
	  }

	  var chan = channel(buffer);
	  var unsubscribe = subscribe(function (input) {
	    if (isEnd(input)) {
	      chan.close();
	    } else if (!matcher || matcher(input)) {
	      chan.put(input);
	    }
	  });

	  if (!_utils.is.func(unsubscribe)) {
	    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
	  }

	  return {
	    take: chan.take,
	    flush: chan.flush,
	    close: function close() {
	      if (!chan.__closed__) {
	        chan.close();
	        unsubscribe();
	      }
	    }
	  };
	}

	function stdChannel(subscribe) {
	  var chan = eventChannel(subscribe);

	  return _extends({}, chan, {
	    take: function take(cb, matcher) {
	      if (arguments.length > 1) {
	        (0, _utils.check)(matcher, _utils.is.func, 'channel.take\'s matcher argument must be a function');
	        cb[_utils.MATCH] = matcher;
	      }
	      chan.take(cb);
	    }
	  });
	}

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buffers = exports.BUFFER_OVERFLOW = undefined;

	var _utils = __webpack_require__(348);

	var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = 'Channel\'s Buffer overflow!';

	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_DROP = 2;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;

	var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };

	function ringBuffer() {
	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var overflowAction = arguments[1];

	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;

	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };

	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };

	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };

	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit = void 0;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;

	            arr = flush();

	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;

	            arr.length = doubledLimit;
	            limit = doubledLimit;

	            push(it);
	            break;
	          default:
	          // DROP
	        }
	      }
	    },
	    take: take, flush: flush
	  };
	}

	var buffers = exports.buffers = {
	  none: function none() {
	    return zeroBuffer;
	  },
	  fixed: function fixed(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_THROW);
	  },
	  dropping: function dropping(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_DROP);
	  },
	  sliding: function sliding(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
	  },
	  expanding: function expanding(initialSize) {
	    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	  }
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;

	var _channel = __webpack_require__(353);

	var _utils = __webpack_require__(348);

	var _io = __webpack_require__(347);

	var _buffers = __webpack_require__(354);

	var done = { done: true, value: undefined };
	var qEnd = {};

	function fsmIterator(fsm, q0) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

	  var updateState = void 0,
	      qNext = q0;

	  function next(arg, error) {
	    if (qNext === qEnd) {
	      return done;
	    }

	    if (error) {
	      qNext = qEnd;
	      throw error;
	    } else {
	      updateState && updateState(arg);

	      var _fsm$qNext = fsm[qNext](),
	          _fsm$qNext2 = _slicedToArray(_fsm$qNext, 3),
	          q = _fsm$qNext2[0],
	          output = _fsm$qNext2[1],
	          _updateState = _fsm$qNext2[2];

	      qNext = q;
	      updateState = _updateState;
	      return qNext === qEnd ? done : output;
	    }
	  }

	  return (0, _utils.makeIterator)(next, function (error) {
	    return next(null, error);
	  }, name, true);
	}

	function safeName(pattern) {
	  if (Array.isArray(pattern)) {
	    return String(pattern.map(function (entry) {
	      return String(entry);
	    }));
	  } else {
	    return String(pattern);
	  }
	}

	function takeEvery(pattern, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  var yTake = { done: false, value: (0, _io.take)(pattern) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };

	  var action = void 0,
	      setAction = function setAction(ac) {
	    return action = ac;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [qEnd] : ['q1', yFork(action)];
	    }
	  }, 'q1', 'takeEvery(' + safeName(pattern) + ', ' + worker.name + ')');
	}

	function takeLatest(pattern, worker) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    args[_key2 - 2] = arguments[_key2];
	  }

	  var yTake = { done: false, value: (0, _io.take)(pattern) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yCancel = function yCancel(task) {
	    return { done: false, value: (0, _io.cancel)(task) };
	  };

	  var task = void 0,
	      action = void 0;
	  var setTask = function setTask(t) {
	    return task = t;
	  };
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
	    },
	    q3: function q3() {
	      return ['q1', yFork(action), setTask];
	    }
	  }, 'q1', 'takeLatest(' + safeName(pattern) + ', ' + worker.name + ')');
	}

	function throttle(delayLength, pattern, worker) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    args[_key3 - 3] = arguments[_key3];
	  }

	  var action = void 0,
	      channel = void 0;

	  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
	  var yTake = function yTake() {
	    return { done: false, value: (0, _io.take)(channel, pattern) };
	  };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };

	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	  var setChannel = function setChannel(ch) {
	    return channel = ch;
	  };

	  return fsmIterator({
	    q1: function q1() {
	      return ['q2', yActionChannel, setChannel];
	    },
	    q2: function q2() {
	      return ['q3', yTake(), setAction];
	    },
	    q3: function q3() {
	      return action === _channel.END ? [qEnd] : ['q4', yFork(action)];
	    },
	    q4: function q4() {
	      return ['q2', yDelay];
	    }
	  }, 'q1', 'throttle(' + safeName(pattern) + ', ' + worker.name + ')');
	}

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sagaMiddlewareFactory;

	var _utils = __webpack_require__(348);

	var _proc = __webpack_require__(351);

	var _proc2 = _interopRequireDefault(_proc);

	var _scheduler = __webpack_require__(352);

	var _channel = __webpack_require__(353);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function sagaMiddlewareFactory() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var runSagaDynamically = void 0;
	  var sagaMonitor = options.sagaMonitor;


	  if (_utils.is.func(options)) {
	    if (true) {
	      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
	    } else {
	      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
	    }
	  }

	  if (options.logger && !_utils.is.func(options.logger)) {
	    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
	  }

	  if (options.onerror && !_utils.is.func(options.onerror)) {
	    throw new Error('`options.onerror` passed to the Saga middleware is not a function!');
	  }

	  function sagaMiddleware(_ref) {
	    var getState = _ref.getState,
	        dispatch = _ref.dispatch;

	    runSagaDynamically = runSaga;
	    var sagaEmitter = (0, _channel.emitter)();
	    var sagaDispatch = (0, _utils.wrapSagaDispatch)(dispatch);

	    function runSaga(saga, args, sagaId) {
	      return (0, _proc2.default)(saga.apply(undefined, _toConsumableArray(args)), sagaEmitter.subscribe, sagaDispatch, getState, options, sagaId, saga.name);
	    }

	    return function (next) {
	      return function (action) {
	        if (sagaMonitor) {
	          sagaMonitor.actionDispatched(action);
	        }
	        var result = next(action); // hit reducers
	        if (action[_utils.SAGA_ACTION]) {
	          // Saga actions are already scheduled with asap in proc/runPutEffect
	          sagaEmitter.emit(action);
	        } else {
	          (0, _scheduler.asap)(function () {
	            return sagaEmitter.emit(action);
	          });
	        }

	        return result;
	      };
	    };
	  }

	  sagaMiddleware.run = function (saga) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    (0, _utils.check)(runSagaDynamically, _utils.is.notUndef, 'Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
	    (0, _utils.check)(saga, _utils.is.func, 'sagaMiddleware.run(saga, ...args): saga argument must be a Generator function!');

	    var effectId = (0, _utils.uid)();
	    if (sagaMonitor) {
	      sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
	    }
	    var task = runSagaDynamically(saga, args, effectId);
	    if (sagaMonitor) {
	      sagaMonitor.effectResolved(effectId, task);
	    }
	    return task;
	  };

	  return sagaMiddleware;
	}

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(348);

	Object.defineProperty(exports, 'TASK', {
	  enumerable: true,
	  get: function get() {
	    return _utils.TASK;
	  }
	});
	Object.defineProperty(exports, 'SAGA_ACTION', {
	  enumerable: true,
	  get: function get() {
	    return _utils.SAGA_ACTION;
	  }
	});
	Object.defineProperty(exports, 'noop', {
	  enumerable: true,
	  get: function get() {
	    return _utils.noop;
	  }
	});
	Object.defineProperty(exports, 'is', {
	  enumerable: true,
	  get: function get() {
	    return _utils.is;
	  }
	});
	Object.defineProperty(exports, 'deferred', {
	  enumerable: true,
	  get: function get() {
	    return _utils.deferred;
	  }
	});
	Object.defineProperty(exports, 'arrayOfDeffered', {
	  enumerable: true,
	  get: function get() {
	    return _utils.arrayOfDeffered;
	  }
	});
	Object.defineProperty(exports, 'createMockTask', {
	  enumerable: true,
	  get: function get() {
	    return _utils.createMockTask;
	  }
	});

	var _io = __webpack_require__(347);

	Object.defineProperty(exports, 'CHANNEL_END', {
	  enumerable: true,
	  get: function get() {
	    return _io.CHANNEL_END;
	  }
	});
	Object.defineProperty(exports, 'asEffect', {
	  enumerable: true,
	  get: function get() {
	    return _io.asEffect;
	  }
	});

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (collectionName) {
	  var itemScopeProperty = (0, _itemScopeHelpers.getItemScopeProperty)(collectionName);

	  return function connectInItemScope(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var connecter = (0, _reactRedux.connect)(mapStateToProps ? function (state, props) {
	      return mapStateToProps((0, _itemScopeHelpers.addItemScope)(state, collectionName, props[itemScopeProperty]), props);
	    } : null, mapDispatchToProps ? function (dispatch, props) {
	      var wrappedDispatch = function wrappedDispatch(action) {
	        (0, _itemActionHelpers.ensureItemActionId)(action, collectionName, props[itemScopeProperty]);
	        return dispatch(action);
	      };

	      if (typeof mapDispatchToProps == 'function') {
	        return mapDispatchToProps(wrappedDispatch, props);
	      } else {
	        return (0, _redux.bindActionCreators)(mapDispatchToProps, wrappedDispatch);
	      }
	    } : null, mergeProps);

	    return function (Component) {
	      var Connected = connecter(Component);

	      var ConnectedInItemScope = function (_React$Component) {
	        _inherits(ConnectedInItemScope, _React$Component);

	        function ConnectedInItemScope() {
	          _classCallCheck(this, ConnectedInItemScope);

	          return _possibleConstructorReturn(this, (ConnectedInItemScope.__proto__ || Object.getPrototypeOf(ConnectedInItemScope)).apply(this, arguments));
	        }

	        _createClass(ConnectedInItemScope, [{
	          key: 'render',
	          value: function render() {
	            var props = _extends({}, this.props, _defineProperty({}, itemScopeProperty, this.context[itemScopeProperty]));

	            return _react2.default.createElement(Connected, props);
	          }
	        }]);

	        return ConnectedInItemScope;
	      }(_react2.default.Component);

	      ConnectedInItemScope.contextTypes = _defineProperty({}, itemScopeProperty, _react2.default.PropTypes.number);

	      return ConnectedInItemScope;
	    };
	  };
	};

	var _itemActionHelpers = __webpack_require__(344);

	var _itemScopeHelpers = __webpack_require__(341);

	var _reactRedux = __webpack_require__(359);

	var _redux = __webpack_require__(313);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(360);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(363);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(304);

	var _storeShape = __webpack_require__(361);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(362);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(304);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(304);

	var _storeShape = __webpack_require__(361);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(364);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(365);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(362);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(315);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(366);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(367);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 364 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(313);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 366 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (collectionName) {
	  var ItemScopeProvider = function (_React$Component) {
	    _inherits(ItemScopeProvider, _React$Component);

	    function ItemScopeProvider() {
	      _classCallCheck(this, ItemScopeProvider);

	      return _possibleConstructorReturn(this, (ItemScopeProvider.__proto__ || Object.getPrototypeOf(ItemScopeProvider)).apply(this, arguments));
	    }

	    _createClass(ItemScopeProvider, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return _defineProperty({}, (0, _itemScopeHelpers.getItemScopeProperty)(collectionName), this.props.itemId);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return this.props.children;
	      }
	    }]);

	    return ItemScopeProvider;
	  }(_react2.default.Component);

	  ItemScopeProvider.childContextTypes = _defineProperty({}, (0, _itemScopeHelpers.getItemScopeProperty)(collectionName), _react2.default.PropTypes.number);

	  return ItemScopeProvider;
	};

	var _itemScopeHelpers = __webpack_require__(341);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var collection = _ref.collection,
	      collectionName = _ref.collectionName,
	      dispatch = _ref.dispatch,
	      attributes = _ref.attributes,
	      includeConfiguration = _ref.includeConfiguration;

	  var delegate = _backbone2.default.Collection && collection instanceof _backbone2.default.Collection ? _watchBackboneCollection2.default : _loadFromSeed2.default;
	  delegate({
	    collection: collection,
	    collectionName: collectionName,
	    dispatch: dispatch,
	    attributes: attributes,
	    includeConfiguration: includeConfiguration
	  });
	};

	var _watchBackboneCollection = __webpack_require__(370);

	var _watchBackboneCollection2 = _interopRequireDefault(_watchBackboneCollection);

	var _loadFromSeed = __webpack_require__(375);

	var _loadFromSeed2 = _interopRequireDefault(_loadFromSeed);

	var _backbone = __webpack_require__(376);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (_ref) {
	  var collection = _ref.collection,
	      dispatch = _ref.dispatch,
	      collectionName = _ref.collectionName,
	      _ref$attributes = _ref.attributes,
	      attributes = _ref$attributes === undefined ? ['id'] : _ref$attributes,
	      _ref$includeConfigura = _ref.includeConfiguration,
	      includeConfiguration = _ref$includeConfigura === undefined ? false : _ref$includeConfigura;

	  dispatch((0, _actions.reset)({
	    collectionName: collectionName,
	    items: collection.map(modelToAttributes)
	  }));

	  collection.on('add', function (model) {
	    if (!model.isNew()) {
	      dispatch((0, _actions.add)({
	        collectionName: collectionName,
	        attributes: modelToAttributes(model)
	      }));
	    }
	  });

	  collection.on('change:id', function (model) {
	    dispatch((0, _actions.add)({
	      collectionName: collectionName,
	      attributes: modelToAttributes(model)
	    }));
	  });

	  collection.on(changeEvents(), function (model) {
	    dispatch((0, _actions.change)({
	      collectionName: collectionName,
	      attributes: modelToAttributes(model)
	    }));
	  });

	  collection.on('remove', function (model) {
	    setTimeout(function () {
	      dispatch((0, _actions.remove)({
	        collectionName: collectionName,
	        attributes: modelToAttributes(model)
	      }));
	    }, 0);
	  });

	  function modelToAttributes(model) {
	    return (0, _pickAttributes2.default)(attributes, model.attributes, includeConfiguration && model.configuration.attributes);
	  }

	  function changeEvents() {
	    var watchedAttributes = attributes.map(function (attribute) {
	      return (typeof attribute === 'undefined' ? 'undefined' : _typeof(attribute)) == 'object' ? mappedAttributeSource(attribute) : attribute;
	    });

	    var attributeChangeEvents = watchedAttributes.map(function (attribute) {
	      return 'change:' + attribute;
	    });

	    if (includeConfiguration) {
	      attributeChangeEvents.push('change:configuration');
	    }

	    return attributeChangeEvents.join(' ');
	  }

	  function mappedAttributeSource(attribute) {
	    return attribute[Object.keys(attribute)[0]];
	  }
	};

	var _actions = __webpack_require__(335);

	var _pickAttributes = __webpack_require__(371);

	var _pickAttributes2 = _interopRequireDefault(_pickAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (attributeNames, record, additionalAttributes) {
	  var result = _utils.camelize.deep(attributeNames.reduce(function (result, attributeName) {
	    if ((typeof attributeName === 'undefined' ? 'undefined' : _typeof(attributeName)) == 'object') {
	      var key = Object.keys(attributeName)[0];
	      var value = attributeName[key];

	      result[key] = record[value];
	    } else {
	      result[attributeName] = record[attributeName];
	    }
	    return result;
	  }, {}));

	  if (additionalAttributes) {
	    return _extends({}, result, _utils.camelize.deep(additionalAttributes));
	  }

	  return result;
	};

	var _utils = __webpack_require__(372);

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combine = exports.camelize = undefined;

	var _camelize = __webpack_require__(373);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _combine = __webpack_require__(374);

	var _combine2 = _interopRequireDefault(_combine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.camelize = _camelize2.default;
	exports.combine = _combine2.default;

/***/ },
/* 373 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function camelize(snakeCase) {
	  return snakeCase.replace(/_[a-z]/g, function (match) {
	    return match[1].toUpperCase();
	  });
	}

	camelize.keys = function (object) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[camelize(key)] = object[key];
	    return result;
	  }, {});
	};

	camelize.deep = function (object) {
	  if (Array.isArray(object)) {
	    return object.map(camelize.deep);
	  } else if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object) {
	    return Object.keys(object).reduce(function (result, key) {
	      result[camelize(key)] = camelize.deep(object[key]);
	      return result;
	    }, {});
	  } else {
	    return object;
	  }
	};

	exports.default = camelize;

/***/ },
/* 374 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (selectors) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return Object.keys(selectors).reduce(function (result, key) {
	      if (typeof selectors[key] == 'function') {
	        result[key] = selectors[key].apply(selectors, args);
	      } else {
	        result[key] = selectors[key];
	      }

	      return result;
	    }, {});
	  };
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var collection = _ref.collection,
	      collectionName = _ref.collectionName,
	      dispatch = _ref.dispatch,
	      _ref$attributes = _ref.attributes,
	      attributes = _ref$attributes === undefined ? ['id'] : _ref$attributes,
	      _ref$includeConfigura = _ref.includeConfiguration,
	      includeConfiguration = _ref$includeConfigura === undefined ? false : _ref$includeConfigura;


	  dispatch((0, _actions.reset)({
	    collectionName: collectionName,
	    items: collection.map(function (record) {
	      return (0, _pickAttributes2.default)(attributes, record, includeConfiguration && record.configuration);
	    })
	  }));
	};

	var _actions = __webpack_require__(335);

	var _pickAttributes = __webpack_require__(371);

	var _pickAttributes2 = _interopRequireDefault(_pickAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 376 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(300);

	var _marked = [_callee, scheduleUnprepare].map(regeneratorRuntime.mark);

	function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _reduxSaga.takeLatest)([_actions.PAGE_SCHEDULE_UNPREPARE, _actions.PAGE_DID_PREPARE, _actions.PAGE_WILL_ACTIVATE], scheduleUnprepare);

	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function scheduleUnprepare(action) {
	  return regeneratorRuntime.wrap(function scheduleUnprepare$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          if (!(action.type == _actions.PAGE_SCHEDULE_UNPREPARE)) {
	            _context2.next = 5;
	            break;
	          }

	          _context2.next = 3;
	          return (0, _effects.call)(_reduxSaga.delay, 5000);

	        case 3:
	          _context2.next = 5;
	          return (0, _effects.put)((0, _actions.pageDidUnprepare)());

	        case 5:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee3;

	var _actions = __webpack_require__(300);

	var _itemActionHelpers = __webpack_require__(344);

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _backbone = __webpack_require__(376);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [_callee3].map(regeneratorRuntime.mark);

	function _callee3(pagesCollection) {
	  return regeneratorRuntime.wrap(function _callee3$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          if (pagesCollection instanceof _backbone2.default.Collection) {
	            _context3.next = 2;
	            break;
	          }

	          return _context3.abrupt('return');

	        case 2:
	          _context3.next = 4;
	          return (0, _reduxSaga.takeEvery)(_actions.UPDATE_PAGE_ATTRIBUTE, regeneratorRuntime.mark(function _callee(action) {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.call)(updatePageAttribute, {
	                      pagesCollection: pagesCollection,
	                      id: (0, _itemActionHelpers.getItemIdFromItemAction)(action),
	                      name: action.payload.name,
	                      value: action.payload.value
	                    });

	                  case 2:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, this);
	          }));

	        case 4:
	          _context3.next = 6;
	          return (0, _reduxSaga.takeEvery)(_actions.UPDATE_PAGE_LINK, regeneratorRuntime.mark(function _callee2(action) {
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	              while (1) {
	                switch (_context2.prev = _context2.next) {
	                  case 0:
	                    _context2.next = 2;
	                    return (0, _effects.call)(updatePageLink, {
	                      pagesCollection: pagesCollection,
	                      pageId: (0, _itemActionHelpers.getItemIdFromItemAction)(action),
	                      linkId: action.payload.linkId,
	                      name: action.payload.name,
	                      value: action.payload.value
	                    });

	                  case 2:
	                  case 'end':
	                    return _context2.stop();
	                }
	              }
	            }, _callee2, this);
	          }));

	        case 6:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function updatePageLink(_ref) {
	  var pagesCollection = _ref.pagesCollection,
	      pageId = _ref.pageId,
	      linkId = _ref.linkId,
	      name = _ref.name,
	      value = _ref.value;

	  var pageLink = getPage(pagesCollection, pageId).pageLinks().get(linkId);

	  if (!pageLink) {
	    throw new Error('Could not find page link with id ' + linkId + ' in page with perma id ' + pageId + '.');
	  }

	  pageLink.set(name, value);
	}

	function updatePageAttribute(_ref2) {
	  var pagesCollection = _ref2.pagesCollection,
	      id = _ref2.id,
	      name = _ref2.name,
	      value = _ref2.value;

	  getPage(pagesCollection, id).configuration.set(name, value);
	}

	function getPage(collection, id) {
	  var page = collection.where({ 'perma_id': id })[0];

	  if (!page) {
	    throw new Error('Could not find page with perma id ' + id + '.');
	  }

	  return page;
	}

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (Component, store) {
	  return {
	    scroller: false,

	    enhance: function enhance(pageElement, configuration) {
	      _reactDom2.default.render(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          PageProvider,
	          { itemId: pageId(pageElement) },
	          _react2.default.createElement(
	            _MediaContextProvider2.default,
	            { mediaContext: { page: pageElement.page('instance') } },
	            _react2.default.createElement(Component, null)
	          )
	        )
	      ), pageElement[0]);
	      store.dispatch((0, _actions.enhance)({ id: pageId(pageElement) }));
	    },
	    preload: function preload(pageElement) {
	      store.dispatch((0, _actions.pageDidPreload)({ id: pageId(pageElement) }));
	    },
	    prepare: function prepare(pageElement) {
	      store.dispatch((0, _actions.pageDidPrepare)({ id: pageId(pageElement) }));
	    },
	    unprepare: function unprepare(pageElement) {
	      store.dispatch((0, _actions.pageScheduleUnprepare)({ id: pageId(pageElement) }));
	    },
	    activating: function activating(pageElement, configuration, options) {
	      store.dispatch((0, _actions.pageWillActivate)({
	        id: pageId(pageElement),
	        position: options.position
	      }));
	    },
	    activated: function activated(pageElement) {
	      store.dispatch((0, _actions.pageDidActivate)({ id: pageId(pageElement) }));
	    },
	    deactivating: function deactivating(pageElement) {
	      store.dispatch((0, _actions.pageWillDeactivate)({ id: pageId(pageElement) }));
	    },
	    deactivated: function deactivated(pageElement) {
	      store.dispatch((0, _actions.pageDidDeactivate)({ id: pageId(pageElement) }));
	    },
	    resize: function resize(pageElement) {
	      store.dispatch((0, _actions.pageDidResize)({ id: pageId(pageElement) }));
	    },
	    update: function update(pageElement, configuration) {
	      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
	    },
	    cleanup: function cleanup(pageElement) {
	      store.dispatch((0, _actions.cleanup)({ id: pageId(pageElement) }));
	      _reactDom2.default.unmountComponentAtNode(pageElement[0]);
	    }
	  };
	};

	var _collections = __webpack_require__(338);

	var _actions = __webpack_require__(300);

	var _MediaContextProvider = __webpack_require__(380);

	var _MediaContextProvider2 = _interopRequireDefault(_MediaContextProvider);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(381);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PageProvider = (0, _collections.createItemScopeProvider)('pages');

	function pageId(pageElement) {
	  return parseInt(pageElement.attr('id'), 10);
	}

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MediaContextProvider = function (_React$Component) {
	  _inherits(MediaContextProvider, _React$Component);

	  function MediaContextProvider() {
	    _classCallCheck(this, MediaContextProvider);

	    return _possibleConstructorReturn(this, (MediaContextProvider.__proto__ || Object.getPrototypeOf(MediaContextProvider)).apply(this, arguments));
	  }

	  _createClass(MediaContextProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        mediaContext: this.props.mediaContext
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return MediaContextProvider;
	}(_react2.default.Component);

	exports.default = MediaContextProvider;


	MediaContextProvider.childContextTypes = {
	  mediaContext: _react2.default.PropTypes.object
	};

/***/ },
/* 381 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Can be used inside
	 * {@link pageflow.react.components.PageBackground|PageBackground} to
	 * display a gradient which improves the contrast of text displayed
	 * inside the {@link
	 * pageflow.react.components.PageForeground|PageForeground}
	 *
	 * @alias pageflow.react.components.PageShadow
	 * @class
	 * @since 0.1
	 *
	 * @prop page
	 *   Required. The page object to read configuration properties from.
	 */
	var PageShadow = function (_React$Component) {
	  _inherits(PageShadow, _React$Component);

	  function PageShadow() {
	    _classCallCheck(this, PageShadow);

	    return _possibleConstructorReturn(this, (PageShadow.__proto__ || Object.getPrototypeOf(PageShadow)).apply(this, arguments));
	  }

	  _createClass(PageShadow, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'shadow_wrapper' },
	        _react2.default.createElement('div', { className: (0, _classnames2.default)('shadow', this.props.className), style: this.style() })
	      );
	    }
	  }, {
	    key: 'style',
	    value: function style() {
	      if ('gradientOpacity' in this.props.page) {
	        return {
	          opacity: this.props.page.gradientOpacity / 100
	        };
	      }
	    }
	  }]);

	  return PageShadow;
	}(_react2.default.Component);

	exports.default = PageShadow;
	;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(
	    _PageForeground2.default,
	    null,
	    React.createElement(
	      _PageScroller2.default,
	      null,
	      props.children
	    )
	  );
	};

	var _PageForeground = __webpack_require__(384);

	var _PageForeground2 = _interopRequireDefault(_PageForeground);

	var _PageScroller = __webpack_require__(385);

	var _PageScroller2 = _interopRequireDefault(_PageScroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "content", onTouchStart: props.onInteraction, onMouseMove: props.onInteraction },
	    props.children
	  );
	};

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _Scroller = __webpack_require__(386);

	var _Scroller2 = _interopRequireDefault(_Scroller);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Can be used inside
	 * {@link pageflow.react.components.PageForeground|PageForeground} to
	 * build the default page structure.
	 *
	 * @alias pageflow.react.components.PageScroller
	 * @since edge
	 */
	var PageScroller = function (_React$Component) {
	  _inherits(PageScroller, _React$Component);

	  function PageScroller() {
	    _classCallCheck(this, PageScroller);

	    return _possibleConstructorReturn(this, (PageScroller.__proto__ || Object.getPrototypeOf(PageScroller)).apply(this, arguments));
	  }

	  _createClass(PageScroller, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!this.props.enabled && nextProps.enabled) {
	        this.refs.scroller.enable();
	      } else if (this.props.enabled && !nextProps.enabled) {
	        this.refs.scroller.disable();
	      }
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _this2 = this;

	      this._pageScroller = this._pageScroller || {
	        disable: function disable() {
	          _this2.refs.scroller.disable();
	        },
	        enable: function enable() {
	          _this2.refs.scroller.enable();
	        }
	      };

	      return {
	        pageScroller: this._pageScroller
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _Scroller2.default,
	        { ref: 'scroller', className: this.props.className },
	        _react2.default.createElement(
	          'div',
	          { className: 'contentWrapper' },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'pageWillActivate',
	    value: function pageWillActivate(options) {
	      this.refs.scroller.resetPosition({ position: options.position });
	    }
	  }]);

	  return PageScroller;
	}(_react2.default.Component);

	PageScroller.propTypes = {
	  className: _react2.default.PropTypes.string
	};

	PageScroller.childContextTypes = {
	  pageScroller: _react2.default.PropTypes.object
	};

	exports.default = (0, _pages.connectInPage)((0, _utils.combine)({
	  enabled: (0, _selectors.pageIsActivated)()
	}))(PageScroller);

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _reactDom = __webpack_require__(381);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scroller = function (_Component) {
	  _inherits(Scroller, _Component);

	  function Scroller() {
	    _classCallCheck(this, Scroller);

	    return _possibleConstructorReturn(this, (Scroller.__proto__ || Object.getPrototypeOf(Scroller)).apply(this, arguments));
	  }

	  _createClass(Scroller, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { ref: 'wrapper', className: (0, _classnames2.default)('scroller', this.props.className) },
	        React.createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof jQuery !== 'undefined') {
	        var element = jQuery(_reactDom2.default.findDOMNode(this.refs.wrapper));

	        element.scroller();
	        window.sss = this.scroller = element.scroller('instance');
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scroller.refresh();
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      this.scroller.enable();
	      this.scroller.afterAnimationHook();
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.scroller.disable();
	    }
	  }, {
	    key: 'resetPosition',
	    value: function resetPosition(options) {
	      this.scroller.resetPosition(options);
	    }
	  }, {
	    key: 'resetPosition',
	    value: function resetPosition(options) {
	      this.scroller.resetPosition(options);
	    }
	  }]);

	  return Scroller;
	}(_react.Component);

	;

	exports.default = Scroller;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Place inside
	 * {@link pageflow.react.components.PageScroller|PageScroller} to
	 * display the page's headings.
	 *
	 * @alias pageflow.react.components.PageHeader
	 * @class
	 * @since 0.1
	 *
	 * @prop page
	 *   Required. The page object to read configuration properties from.
	 */
	var _class = function (_React$Component) {
	  _inherits(_class, _React$Component);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "page_header" },
	        _react2.default.createElement(
	          "h2",
	          null,
	          _react2.default.createElement(
	            "span",
	            { className: "tagline" },
	            this.props.page.tagline
	          ),
	          _react2.default.createElement(
	            "span",
	            { className: "title" },
	            this.props.page.title
	          ),
	          _react2.default.createElement(
	            "span",
	            { className: "subtitle" },
	            this.props.page.subtitle
	          )
	        )
	      );
	    }
	  }]);

	  return _class;
	}(_react2.default.Component);

	exports.default = _class;
	;

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc Place inside
	 * {@link pageflow.react.components.PageScroller|PageScroller} to
	 * display the page's content text.
	 *
	 * @alias pageflow.react.components.PageText
	 * @class
	 * @since 0.1
	 *
	 * @prop page
	 *   Required. The page object to read configuration properties from.
	 */
	var PageText = function (_Component) {
	  _inherits(PageText, _Component);

	  function PageText() {
	    _classCallCheck(this, PageText);

	    return _possibleConstructorReturn(this, (PageText.__proto__ || Object.getPrototypeOf(PageText)).apply(this, arguments));
	  }

	  _createClass(PageText, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "contentText" },
	        React.createElement("p", { dangerouslySetInnerHTML: this.text() }),
	        this.props.children
	      );
	    }
	  }, {
	    key: "text",
	    value: function text() {
	      return { __html: this.props.page.text };
	    }
	  }]);

	  return PageText;
	}(_react.Component);

	exports.default = PageText;

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(359);

	var _utils = __webpack_require__(372);

	var _selectors = __webpack_require__(390);

	var _selectors2 = __webpack_require__(337);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PageLink = function (_React$Component) {
	  _inherits(PageLink, _React$Component);

	  function PageLink() {
	    _classCallCheck(this, PageLink);

	    return _possibleConstructorReturn(this, (PageLink.__proto__ || Object.getPrototypeOf(PageLink)).apply(this, arguments));
	  }

	  _createClass(PageLink, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'a',
	        { href: this._href(),
	          className: this.props.className,
	          onClick: this._handleClick.bind(this) },
	        this.props.children
	      );
	    }
	  }, {
	    key: '_href',
	    value: function _href() {
	      if (this._targetPage()) {
	        return '#' + this._targetPage().permaId;
	      } else {
	        return '#missing';
	      }
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick(event) {
	      if (this._targetPage()) {
	        pageflow.slides.goToByPermaId(this._targetPage().permaId, {
	          transition: this.props.pageLink.pageTransition
	        });
	      }
	      event.preventDefault();
	    }
	  }, {
	    key: '_targetPage',
	    value: function _targetPage() {
	      return this.props.targetPage;
	    }
	  }]);

	  return PageLink;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)((0, _utils.combine)({
	  targetPage: (0, _selectors2.pageAttributes)({ id: (0, _selectors.prop)('pageLink.targetPageId') })
	}))(PageLink);

/***/ },
/* 390 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.prop = prop;
	exports.map = map;
	function prop(path) {
	  return function (state, props) {
	    var names = path.split('.');

	    if (!(names[0] in props)) {
	      throw new Error('Missing required prop ' + names[0] + '.');
	    }

	    return names.reduce(function (p, name) {
	      return p && p[name];
	    }, props);
	  };
	}

	function map(selector, fn) {
	  return function (state, props) {
	    var result = selector(state, props);
	    return fn(result);
	  };
	}

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageThumbnail = PageThumbnail;

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(392);

	var _selectors2 = __webpack_require__(393);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function PageThumbnail(props) {
	  return React.createElement('div', { className: className(props) });
	}

	PageThumbnail.defaultProps = {
	  imageStyle: 'navigation_thumbnail_large'
	};

	function className(props) {
	  return (0, _classnames2.default)({ load_image: props.lazy && props.loaded }, props.className, typeClassName(props.pageType), thumbnailClassName(props));
	}

	function typeClassName(pageType) {
	  return pageType ? 'is_' + pageType.name : 'is_dangling';
	}

	function thumbnailClassName(props) {
	  var candidate = firstPresentCandidate(props);

	  if (candidate) {
	    return thumbnailCandidateClassName(props, candidate);
	  }
	}

	function firstPresentCandidate(props) {
	  return thumbnailCandidates(props).find(function (candidate) {
	    var id = thumbnailCandidateId(props, candidate);
	    return props.fileExists((0, _utils.camelize)(candidate.collectionName), id);
	  });
	}

	function thumbnailCandidates(props) {
	  return [customThumbnailCandidate(props)].concat(_toConsumableArray(pageTypeCandidates(props.pageType)));
	}

	function customThumbnailCandidate(props) {
	  return {
	    id: props.customThumbnailId,
	    cssClassPrefix: 'pageflow_image_file',
	    collectionName: 'image_files'
	  };
	}

	function pageTypeCandidates(pageType) {
	  return pageType ? pageType.thumbnailCandidates : [];
	}

	function thumbnailCandidateClassName(props, candidate) {
	  return [props.lazy ? 'lazy' : null, candidate.cssClassPrefix, props.imageStyle, thumbnailCandidateId(props, candidate)].filter(Boolean).join('_');
	}

	function thumbnailCandidateId(props, candidate) {
	  return 'id' in candidate ? candidate.id : props.page[(0, _utils.camelize)(candidate.attribute)];
	}

	exports.default = (0, _pages.connectInPage)((0, _utils.combine)({
	  pageType: (0, _selectors.pageType)({ page: function page(props) {
	      return props.page;
	    } }),
	  fileExists: (0, _selectors2.fileExists)()
	}))(PageThumbnail);

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pageType = pageType;

	var _utils = __webpack_require__(372);

	function pageType(_ref) {
	  var page = _ref.page;

	  return function (state, props) {
	    var _page = typeof page == 'function' ? page(props) : page;

	    return _page ? state.pageTypes[(0, _utils.camelize)(_page.type)] : null;
	  };
	}

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.file = file;
	exports.nestedFiles = nestedFiles;
	exports.fileExists = fileExists;

	var _collections = __webpack_require__(338);

	var _expandUrls = __webpack_require__(394);

	var _expandUrls2 = _interopRequireDefault(_expandUrls);

	var _addTypeInfo = __webpack_require__(395);

	var _addTypeInfo2 = _interopRequireDefault(_addTypeInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function file(collectionName, options) {
	  var selector = (0, _collections.createItemSelector)(collectionName)(options);

	  return function (state, props) {
	    return extendFile(collectionName, selector(state, props), state);
	  };
	}

	function nestedFiles(collectionName, _ref) {
	  var parent = _ref.parent;

	  var itemsSelector = (0, _collections.createItemsSelector)(collectionName);

	  return function (state, props) {
	    var files = itemsSelector(state, props);
	    var parentFile = parent(state, props);

	    if (!parentFile) {
	      return [];
	    }

	    return Object.keys(files).reduce(function (result, fileId) {
	      var file = files[fileId];

	      if (file.id && file.parentFileId == parentFile.id && file.parentFileModelType == parentFile.modelType) {
	        result.push(extendFile(collectionName, file, state));
	      }

	      return result;
	    }, []);
	  };
	}

	function fileExists() {
	  return function (state, props) {
	    return function (collectionName, id) {
	      return id && !!(0, _collections.createItemSelector)(collectionName)({ id: id })(state, props);
	    };
	  };
	}

	function extendFile(collectionName, file, state) {
	  return (0, _addTypeInfo2.default)(collectionName, (0, _expandUrls2.default)(collectionName, file, state.fileUrlTemplates), state.modelTypes);
	}

/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (collectionName, file, urlTemplates) {
	  if (!file) {
	    return null;
	  }

	  if (!urlTemplates[collectionName]) {
	    throw new Error('No file url templates found for ' + collectionName);
	  }

	  var variants = file.variants || Object.keys(urlTemplates[collectionName]);

	  var urls = variants.reduce(function (result, variant) {
	    var url = getFileUrl(collectionName, file, variant, urlTemplates);

	    if (url) {
	      result[variant] = url;
	    }

	    return result;
	  }, {});

	  return _extends({
	    urls: urls
	  }, file);
	};

	function getFileUrl(collectionName, file, quality, urlTemplates) {
	  var templates = urlTemplates[collectionName];

	  var template = templates[quality];

	  if (template) {
	    return template.replace(':id_partition', idPartition(file.id)).replace(':basename', file.basename);
	  }
	}

	function idPartition(id) {
	  return partition(pad(id, 9), '/');
	}

	function partition(string, separator) {
	  return string.replace(/./g, function (c, i, a) {
	    return i && (a.length - i) % 3 === 0 ? '/' + c : c;
	  });
	}

	function pad(string, size) {
	  return (Array(size).fill(0).join('') + string).slice(-size);
	}

/***/ },
/* 395 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (collectionName, file, modelTypes) {
	  if (!file) {
	    return null;
	  }

	  if (!modelTypes[collectionName]) {
	    throw new Error("Could not find model type for collection name " + collectionName);
	  }

	  return _extends({}, file, {
	    collectionName: collectionName,
	    modelType: modelTypes[collectionName]
	  });
	};

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PageThumbnail = __webpack_require__(391);

	var _PageThumbnail2 = _interopRequireDefault(_PageThumbnail);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _pages.connectInPage)((0, _utils.combine)({
	  loaded: (0, _selectors.pageIsPreloaded)(),
	  lazy: true
	}))(_PageThumbnail2.default);

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PageWrapper = __webpack_require__(303);

	var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

	var _PageBackground = __webpack_require__(306);

	var _PageBackground2 = _interopRequireDefault(_PageBackground);

	var _PageShadow = __webpack_require__(382);

	var _PageShadow2 = _interopRequireDefault(_PageShadow);

	var _PageForeground = __webpack_require__(384);

	var _PageForeground2 = _interopRequireDefault(_PageForeground);

	var _PageScroller = __webpack_require__(385);

	var _PageScroller2 = _interopRequireDefault(_PageScroller);

	var _PageHeader = __webpack_require__(387);

	var _PageHeader2 = _interopRequireDefault(_PageHeader);

	var _PageText = __webpack_require__(388);

	var _PageText2 = _interopRequireDefault(_PageText);

	var _PlayerControls = __webpack_require__(398);

	var _PlayerControls2 = _interopRequireDefault(_PlayerControls);

	var _CloseButton = __webpack_require__(423);

	var _CloseButton2 = _interopRequireDefault(_CloseButton);

	var _MenuBar = __webpack_require__(419);

	var _MenuBar2 = _interopRequireDefault(_MenuBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @desc
	 * Use to build pages that have a play button to hide the page's text
	 * and allow interacting with elements placed in the {@link
	 * pageflow.react.components.PageBackground|PageBackground}.
	 *
	 * @alias pageflow.react.components.PageWithInteractiveBackground
	 * @class
	 * @since edge
	 */
	var PageWithInteractiveBackground = function (_React$Component) {
	  _inherits(PageWithInteractiveBackground, _React$Component);

	  function PageWithInteractiveBackground(props, context) {
	    _classCallCheck(this, PageWithInteractiveBackground);

	    var _this = _possibleConstructorReturn(this, (PageWithInteractiveBackground.__proto__ || Object.getPrototypeOf(PageWithInteractiveBackground)).call(this, props, context));

	    _this.state = {
	      didPlay: false,
	      menuBarHiddenOnPhone: false
	    };

	    _this.onHideTextActivate = function () {
	      _this.setState({
	        didPlay: true,
	        menuBarHiddenOnPhone: false
	      });
	    };

	    _this.onHideTextDeactivate = function () {
	      _this.context.scrollIndicator.enable();
	      _this.setState({ menuBarHiddenOnPhone: true });
	    };

	    _this.onPlayButtonClick = function () {
	      pageflow.hideText.activate();

	      if (_this.props.onEnterBackground) {
	        _this.props.onEnterBackground();
	      }
	    };

	    _this.onCloseButtonClick = function () {
	      pageflow.hideText.deactivate();

	      if (_this.props.onLeaveBackground) {
	        _this.props.onLeaveBackground();
	      }
	    };
	    return _this;
	  }

	  _createClass(PageWithInteractiveBackground, [{
	    key: 'render',
	    value: function render() {
	      var page = this.props.page;

	      return _react2.default.createElement(
	        _PageWrapper2.default,
	        { className: (0, _classnames2.default)({ unplayed: !this.state.didPlay }, 'hide_content_with_text') },
	        _react2.default.createElement(_CloseButton2.default, { onClick: this.onCloseButtonClick }),
	        _react2.default.createElement(_MenuBar2.default, { additionalButtons: this.props.additionalMenuBarButtons,
	          onAdditionalButtonClick: this.props.onAdditionalButtonClick,
	          qualityMenuButtonTitle: this.props.qualityMenuButtonTitle,
	          qualityMenuItems: this.props.qualityMenuItems,
	          onQualityMenuItemClick: this.props.onQualityMenuItemClick,
	          hiddenOnPhone: this.state.menuBarHiddenOnPhone }),
	        _react2.default.createElement(
	          _PageBackground2.default,
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'videoWrapper' },
	            this.props.children
	          ),
	          _react2.default.createElement(_PageShadow2.default, { page: page })
	        ),
	        _react2.default.createElement(
	          _PageForeground2.default,
	          null,
	          _react2.default.createElement(_PlayerControls2.default, { playButtonTitle: 'Starten',
	            playButtonIconName: this.props.playButtonIconName,
	            controlBarText: page.controlBarText || this.props.defaultControlBarText,
	            onPlayButtonClick: this.onPlayButtonClick,
	            infoBox: { title: page.additionalTitle, description: page.additionalDescription } }),
	          _react2.default.createElement(
	            _PageScroller2.default,
	            null,
	            _react2.default.createElement(_PageHeader2.default, { page: page }),
	            _react2.default.createElement(_PageText2.default, { page: page })
	          )
	        )
	      );
	    }

	    // TODO

	  }, {
	    key: 'pageWillActivate',
	    value: function pageWillActivate() {
	      this.setState({ didPlay: false, menuBarHiddenOnPhone: false });
	    }
	  }, {
	    key: 'pageDidActivate',
	    value: function pageDidActivate() {
	      pageflow.hideText.on('activate', this.onHideTextActivate);
	      pageflow.hideText.on('deactivate', this.onHideTextDeactivate);
	    }
	  }, {
	    key: 'pageWillDeactivate',
	    value: function pageWillDeactivate() {
	      pageflow.hideText.off('activate', this.onHideTextActivate);
	      pageflow.hideText.off('deactivate', this.onHideTextDeactivate);
	    }
	  }]);

	  return PageWithInteractiveBackground;
	}(_react2.default.Component);

	PageWithInteractiveBackground.propTypes = {
	  page: _react2.default.PropTypes.object,

	  defaultControlBarText: _react2.default.PropTypes.string,
	  playButtonIconName: _react2.default.PropTypes.string,

	  onEnterBackground: _react2.default.PropTypes.func,
	  onLeaveBackground: _react2.default.PropTypes.func,

	  additionalMenuBarButtons: _react2.default.PropTypes.array,
	  onAdditionalButtonClick: _react2.default.PropTypes.func,

	  qualityMenuItems: _react2.default.PropTypes.array,
	  onQualityMenuItemClick: _react2.default.PropTypes.func
	};

	PageWithInteractiveBackground.contextTypes = {
	  scrollIndicator: _react2.default.PropTypes.object
	};

	exports.default = PageWithInteractiveBackground;

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _InfoBox = __webpack_require__(399);

	var _InfoBox2 = _interopRequireDefault(_InfoBox);

	var _Container = __webpack_require__(400);

	var _Container2 = _interopRequireDefault(_Container);

	var _LoadingSpinner = __webpack_require__(401);

	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

	var _PlayButton = __webpack_require__(402);

	var _PlayButton2 = _interopRequireDefault(_PlayButton);

	var _CurrentTime = __webpack_require__(412);

	var _CurrentTime2 = _interopRequireDefault(_CurrentTime);

	var _TimeDivider = __webpack_require__(414);

	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);

	var _Duration = __webpack_require__(415);

	var _Duration2 = _interopRequireDefault(_Duration);

	var _ProgressSlider = __webpack_require__(416);

	var _ProgressSlider2 = _interopRequireDefault(_ProgressSlider);

	var _MenuBar = __webpack_require__(419);

	var _MenuBar2 = _interopRequireDefault(_MenuBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PlayerControls(props) {
	  return _react2.default.createElement(
	    _Container2.default,
	    props,
	    _react2.default.createElement(
	      'span',
	      { className: 'hint' },
	      props.hint
	    ),
	    _react2.default.createElement(_InfoBox2.default, props.infoBox),
	    _react2.default.createElement(
	      'div',
	      { className: 'vjs-control-bar' },
	      renderLoadingSpinner(props),
	      _react2.default.createElement(
	        'div',
	        { className: 'play_button' },
	        _react2.default.createElement(_PlayButton2.default, { title: props.playButtonTitle,
	          iconName: props.playButtonIconName,
	          isPlaying: props.isPlaying,
	          onClick: props.onPlayButtonClick })
	      ),
	      renderProgress(props),
	      _react2.default.createElement(
	        'div',
	        { className: 'control_bar_text' },
	        props.controlBarText
	      )
	    ),
	    _react2.default.createElement(_MenuBar2.default, { standAlone: false,
	      hiddenOnPhone: true,
	      qualityMenuButtonTitle: props.qualityMenuButtonTitle,
	      qualityMenuItems: props.qualityMenuItems,
	      onQualityMenuItemClick: props.onQualityMenuItemClick,
	      textTracksMenuButtonTitle: props.textTracksMenuButtonTitle,
	      textTracksMenuItems: props.textTracksMenuItems,
	      onTextTracksMenuItemClick: props.onTextTracksMenuItemClick })
	  );
	}

	function renderLoadingSpinner(props) {
	  if (props.isLoading) {
	    return _react2.default.createElement(_LoadingSpinner2.default, props);
	  }
	}

	function renderProgress(props) {
	  if (props.hasProgress) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_CurrentTime2.default, props),
	      _react2.default.createElement(_TimeDivider2.default, null),
	      _react2.default.createElement(_Duration2.default, props),
	      _react2.default.createElement(_ProgressSlider2.default, props)
	    );
	  }
	}

	PlayerControls.propTypes = {
	  isLoading: _react2.default.PropTypes.bool,

	  hasProgress: _react2.default.PropTypes.bool,

	  hint: _react2.default.PropTypes.string,

	  controlBarText: _react2.default.PropTypes.string,

	  playButtonTitle: _react2.default.PropTypes.string,

	  infoBox: _react2.default.PropTypes.object,

	  onPlayButtonClick: _react2.default.PropTypes.func
	};

	exports.default = PlayerControls;

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(
	    'div',
	    { className: wrapperClassNames(props) },
	    header(props),
	    React.createElement(
	      'p',
	      null,
	      props.description
	    )
	  );

	  function wrapperClassNames(props) {
	    return (0, _classnames2.default)('add_info_box', {
	      'empty': !props.title && !props.description,
	      'title_empty': !props.title,
	      'description_empty': !props.description
	    });
	  }

	  function header(props) {
	    if (props.title) {
	      return React.createElement(
	        'h3',
	        null,
	        props.title
	      );
	    }
	  }
	};

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Container;

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Container(props) {
	  return React.createElement(
	    'div',
	    { className: (0, _classnames2.default)('controls', props.className),
	      'data-role': 'player_controls',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      onFocus: props.onFocus,
	      onBlur: props.onBlur },
	    props.children
	  );
	}

/***/ },
/* 401 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement("div", { className: "vjs-loading-spinner" });
	};

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Icon = __webpack_require__(403);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _pageSkipLinkTarget = __webpack_require__(411);

	var _pageSkipLinkTarget2 = _interopRequireDefault(_pageSkipLinkTarget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PlayButton(props) {
	  return React.createElement(
	    'a',
	    { className: className(props),
	      href: '#',
	      tabIndex: '4',
	      id: props.id,
	      title: props.title,
	      onClick: clickHandler(props) },
	    icon(props)
	  );
	}

	exports.default = (0, _pageSkipLinkTarget2.default)(PlayButton);


	function className(props) {
	  return (0, _classnames2.default)('vjs-play-control', { 'vjs-playing': props.isPlaying }, { 'player_controls-play_button-custom_icon': !!props.iconName });
	}

	function clickHandler(props) {
	  return function (event) {
	    if (props.onClick) {
	      props.onClick(event);
	    }

	    event.preventDefault();
	  };
	}

	function icon(props) {
	  if (props.iconName) {
	    return React.createElement(_Icon2.default, { name: props.iconName });
	  } else {
	    return React.createElement('span', null);
	  }
	}

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Icon;

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _mapping = __webpack_require__(404);

	var _mapping2 = _interopRequireDefault(_mapping);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Render an SVG icon from {@link pageflow.react.iconMapping}.
	 *
	 * @alias pageflow.react.components.Icon
	 * @class
	 * @since edge
	 *
	 * @prop name
	 *   Required. The key to look up in the mapping.
	 */
	function Icon(props) {
	  var SvgIcon = _mapping2.default[props.name];

	  if (!SvgIcon) {
	    throw new Error('No icon registered for "' + props.name + '".');
	  }

	  return _react2.default.createElement(SvgIcon, props);
	}

	Icon.propTypes = {
	  name: _react2.default.PropTypes.string.isRequired
	};

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icons = __webpack_require__(405);

	var _icons2 = _interopRequireDefault(_icons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Register {@link pageflow.react.components.SvgIcon} components to be used by other
	 * components.
	 *
	 * @example
	 *
	 * const {SvgIcon} = pageflow.react;
	 *
	 * pageflow.react.iconMapping['pageflow-rainbow.checkmark'] = function(props) {
	 *   return (
	 *     <SvgIcon {...props} viewBoxWidth={512} viewBoxHeight={512}>
	 *       <polygon points="434.442,58.997 195.559,297.881 77.554,179.88 0,257.438 195.559,453.003 512,136.551 " />
	 *     </SvgIcon>
	 *   );
	 * };
	 *
	 * @alias pageflow.react.iconMapping
	 */
	exports.default = {
	  mediaQuality: _icons2.default.Gear,
	  textTracks: _icons2.default.Subtitles,
	  activeMenuItem: _icons2.default.Checkmark
	};

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkmark = __webpack_require__(406);

	var _Checkmark2 = _interopRequireDefault(_Checkmark);

	var _Disk = __webpack_require__(408);

	var _Disk2 = _interopRequireDefault(_Disk);

	var _Gear = __webpack_require__(409);

	var _Gear2 = _interopRequireDefault(_Gear);

	var _Subtitles = __webpack_require__(410);

	var _Subtitles2 = _interopRequireDefault(_Subtitles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Checkmark: _Checkmark2.default,
	  Disk: _Disk2.default,
	  Gear: _Gear2.default,
	  Subtitles: _Subtitles2.default
	};

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return React.createElement(
	    _Container2.default,
	    _extends({}, props, { viewBoxWidth: 512, viewBoxHeight: 512 }),
	    React.createElement("polygon", { points: "434.442,58.997 195.559,297.881 77.554,179.88 0,257.438 195.559,453.003 512,136.551 " })
	  );
	};

	var _Container = __webpack_require__(407);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Helper create components that render SVG icons.
	 *
	 * See {@link pageflow.react.iconMapping} for usage examples.
	 *
	 * @alias pageflow.react.components.SvgIcon
	 * @class
	 *
	 * @prop viewBoxWidth
	 *   Required. Width of view box used to interpret coordinates of child elements.
	 *
	 * @prop viewBoxHeight
	 *   Required. Height of view box used to interpret coordinates of child elements.
	 *
	 * @prop viewBoxLeft
	 *   Defaults to 0.
	 *
	 * @prop viewBoxTop
	 *   Defaults to 0.
	 *
	 * @prop className
	 *   CSS class name
	 *
	 * @prop width
	 *   Width attribute for the `svg` element.
	 *
	 * @prop height
	 *   Height attribute for the `svg` element.
	 */
	function Container(props) {
	  return _react2.default.createElement(
	    "svg",
	    { className: props.className,
	      version: "1.1", xmlns: "http://www.w3.org/2000/svg",
	      width: props.width, height: props.height,
	      viewBox: props.viewBoxLeft + " " + props.viewBoxTop + " " + props.viewBoxWidth + " " + props.viewBoxHeight },
	    props.children
	  );
	}

	Container.propTypes = {
	  viewBoxWidth: _react2.default.PropTypes.number.isRequired,
	  viewBoxHeight: _react2.default.PropTypes.number.isRequired,
	  viewBoxLeft: _react2.default.PropTypes.number,
	  viewBoxTop: _react2.default.PropTypes.number,

	  className: _react2.default.PropTypes.string,

	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number
	};

	Container.defaultProps = {
	  width: 20,
	  height: 20,
	  viewBoxLeft: 0,
	  viewBoxTop: 0
	};

	exports.default = Container;

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return React.createElement(
	    _Container2.default,
	    _extends({}, props, { viewBoxWidth: 24, viewBoxHeight: 24 }),
	    React.createElement("circle", { cx: "12", cy: "12", r: "12" })
	  );
	};

	var _Container = __webpack_require__(407);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return React.createElement(
	    _Container2.default,
	    _extends({}, props, { viewBoxWidth: 24, viewBoxHeight: 24 }),
	    React.createElement("path", { d: "M21.312,14.056l-1.691-0.98c0,0-0.472-0.216-0.446-1.073c0,0-0.128-0.961,0.478-1.293l1.661-1.014 c0,0,0.546-0.245,0.313-0.818l-0.707-1.598c0,0-0.229-0.625-0.902-0.423l-1.93,0.615c0,0-0.666-0.009-1.078-0.458 c0,0-0.687-0.662-0.476-1.229l0.445-1.924c0,0,0.114-0.563-0.312-0.768l-1.995-0.757c0,0-0.43-0.026-0.562,0.305l-1.122,2.006 c0,0-0.524,0.437-1.248,0.292c0,0-0.752-0.072-0.928-0.253c0,0-1.135-1.916-1.19-2.015c0,0-0.21-0.437-0.65-0.262L7.144,3.176 c0,0-0.367,0.229-0.275,0.559l0.649,2.441c0,0-0.139,0.597-0.561,0.924c0,0-0.745,0.55-1.104,0.483L3.858,7.1 c0,0-0.578-0.207-0.805,0.294L2.306,9.232c0,0-0.143,0.38,0.251,0.616l1.96,1.123c0,0,0.624,0.286,0.441,1.38 c0,0,0.037,0.804-0.756,1.24c-0.793,0.437-1.476,0.875-1.476,0.875s-0.437,0.21-0.249,0.681c0.189,0.471,0.895,1.811,0.895,1.811 s0.131,0.336,0.762,0.091l1.723-0.466c0,0,0.5-0.151,1.031,0.319c0,0,0.741,0.504,0.687,0.919l-0.48,2.433 c0,0-0.157,0.411,0.312,0.676l1.929,0.733c0,0,0.538,0.052,0.68-0.389l0.84-1.532c0,0,0.278-0.669,1.177-0.625 c0,0,0.909-0.081,1.227,0.407l1.101,1.833c0,0,0.199,0.466,0.791,0.188l1.709-0.728c0,0,0.479-0.315,0.333-0.743l-0.533-1.853 c0,0-0.238-0.5,0.259-1.055c0,0,0.533-0.876,1.27-0.701l2.043,0.487c0,0,0.424,0.187,0.793-0.413l0.659-1.639 C21.685,14.901,21.886,14.313,21.312,14.056z M8.542,13.474c-0.824-1.931,0.073-4.166,2.004-4.989 c1.931-0.826,4.165,0.073,4.988,2.004c0.825,1.931-0.073,4.164-2.005,4.989C11.599,16.303,9.365,15.404,8.542,13.474z" })
	  )
	  /*
	      <path d="M20,14.5v-2.9l-1.8-0.3c-0.1-0.4-0.3-0.8-0.6-1.4l1.1-1.5l-2.1-2.1l-1.5,1.1c-0.5-0.3-1-0.5-1.4-0.6L13.5,5h-2.9l-0.3,1.8
	               C9.8,6.9,9.4,7.1,8.9,7.4L7.4,6.3L5.3,8.4l1,1.5c-0.3,0.5-0.4,0.9-0.6,1.4L4,11.5v2.9l1.8,0.3c0.1,0.5,0.3,0.9,0.6,1.4l-1,1.5
	               l2.1,2.1l1.5-1c0.4,0.2,0.9,0.4,1.4,0.6l0.3,1.8h3l0.3-1.8c0.5-0.1,0.9-0.3,1.4-0.6l1.5,1.1l2.1-2.1l-1.1-1.5c0.3-0.5,0.5-1,0.6-1.4
	               L20,14.5z M12,16c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,16,12,16z" />*/
	  ;
	};

	var _Container = __webpack_require__(407);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return React.createElement(
	    _Container2.default,
	    _extends({}, props, { viewBoxWidth: 1200, viewBoxHeight: 1200 }),
	    React.createElement("path", { transform: "translate(100,100)",
	      d: "M893.4,599V500H401.1V599H893.4z M893.4,794.5v-98.9H695.5v98.9H893.4z M598.9,794.5v-98.9H106.6v98.9H598.9z M106.6,500V599h197.8V500H106.6z M893.4,106.7c26.1,0,48.7,10,67.9,29.9s28.8,42.9,28.8,69v588.9c0,26.1-9.6,49.1-28.8,69c-19.2,19.9-41.8,29.9-67.9,29.9H106.6c-26.1,0-48.7-10-67.9-29.9c-19.2-19.9-28.8-42.9-28.8-69V205.5c0-26.1,9.6-49.1,28.8-69s41.8-29.9,67.9-29.9H893.4z" })
	  );
	};

	var _Container = __webpack_require__(407);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (Component) {
	  return (0, _pages.connectInPage)((0, _utils.combine)({
	    id: (0, _selectors2.map)((0, _selectors.pageIsActive)(), function (isActive) {
	      return isActive ? 'firstContent' : undefined;
	    })
	  }))(Component);
	};

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	var _selectors2 = __webpack_require__(390);

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(_TimeDisplay2.default, { className: "vjs-current-time", value: props.currentTime });
	};

	var _TimeDisplay = __webpack_require__(413);

	var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TimeDisplay;

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TimeDisplay(props) {
	  return React.createElement(
	    'div',
	    { className: (0, _classnames2.default)(props.className, 'vjs-current-time') },
	    format(props.value)
	  );
	}

	TimeDisplay.defaultProps = {
	  value: 0
	};

	function format(value) {
	  var seconds = Math.floor(value) % 60;
	  var minutes = Math.floor(value / 60) % 60;
	  var hours = Math.floor(value / 60 / 60);

	  if (hours > 0) {
	    return hours + ':' + pad(minutes) + ':' + pad(seconds);
	  } else {
	    return minutes + ':' + pad(seconds);
	  }
	}

	function pad(value) {
	  return value < 10 ? '0' + value : value;
	}

/***/ },
/* 414 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(
	    "div",
	    { className: "vjs-time-divider" },
	    "/"
	  );
	};

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(_TimeDisplay2.default, { className: "vjs-duration", value: props.duration });
	};

	var _TimeDisplay = __webpack_require__(413);

	var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _reactDraggable = __webpack_require__(417);

	var _keyCodes = __webpack_require__(418);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProgressSlider = function (_React$Component) {
	  _inherits(ProgressSlider, _React$Component);

	  function ProgressSlider(props, context) {
	    _classCallCheck(this, ProgressSlider);

	    var _this = _possibleConstructorReturn(this, (ProgressSlider.__proto__ || Object.getPrototypeOf(ProgressSlider)).call(this, props, context));

	    _this.state = {
	      isScrubbing: false,
	      scrubbingAt: false
	    };

	    _this.bindProgressHolder = function (progressHolder) {
	      _this.progressHolder = progressHolder;
	    };

	    _this.bindHandle = function (handle) {
	      _this.handle = handle;
	    };

	    _this.handleStop = function (mouseEvent, dragEvent) {
	      _this.handleDrag(mouseEvent, dragEvent);
	      _this.setState({ isScrubbing: false });
	    };

	    _this.handleDrag = function (mouseEvent, dragEvent) {
	      if (_this.props.onSeek && _this.props.duration && _this.progressHolder) {
	        var fraction = Math.max(0, Math.min(1, dragEvent.x / _this.progressHolder.clientWidth));
	        var scrubbingAt = fraction * _this.props.duration;

	        _this.setState({ scrubbingAt: scrubbingAt, isScrubbing: true });
	        _this.props.onSeek(scrubbingAt);
	      }
	    };

	    _this.handleKeyDown = function (event) {
	      var destination = void 0;

	      if (event.keyCode == _keyCodes.ARROW_LEFT) {
	        destination = Math.max(0, _this.props.currentTime - 1);
	      } else if (event.keyCode == _keyCodes.ARROW_RIGHT) {
	        destination = Math.min(_this.props.currentTime + 1, _this.props.duration || Infinity);
	      }

	      _this.props.onSeek(destination);
	      _this.setState({ scrubbingAt: destination });
	    };
	    return _this;
	  }

	  _createClass(ProgressSlider, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;

	      return _react2.default.createElement(
	        'div',
	        { className: 'vjs-progress-control',
	          tabIndex: '4',
	          onKeyDown: this.handleKeyDown },
	        _react2.default.createElement(
	          _reactDraggable.DraggableCore,
	          { onStart: this.handleDrag,
	            onDrag: this.handleDrag,
	            onStop: this.handleStop },
	          _react2.default.createElement(
	            'div',
	            { className: 'vjs-progress-holder', ref: this.bindProgressHolder },
	            _react2.default.createElement('div', { className: 'vjs-load-progress', style: { width: toPercent(props.loadProgress) } }),
	            _react2.default.createElement('div', { className: 'vjs-play-progress', style: { width: toPercent(this.playProgress()) } }),
	            _react2.default.createElement('div', { className: 'vjs-seek-handle', ref: this.bindHandle, style: { left: this.handlePosition() } })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'handlePosition',
	    value: function handlePosition() {
	      if (this.handle && this.progressHolder) {
	        return (this.progressHolder.clientWidth - this.handle.clientWidth) * this.playProgress();
	      } else {
	        return toPercent(this.playProgress());
	      }
	    }
	  }, {
	    key: 'playProgress',
	    value: function playProgress() {
	      var currentTime = this.props.isSeeking || this.state.isScrubbing ? this.state.scrubbingAt : this.props.currentTime;
	      return this.props.duration > 0 ? currentTime / this.props.duration : 0;
	    }
	  }]);

	  return ProgressSlider;
	}(_react2.default.Component);

	exports.default = ProgressSlider;


	ProgressSlider.defaultProps = {
	  currentTime: 0
	};

	function toPercent(value) {
	  return value > 0 ? value * 100 + '%' : 0;
	}

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(304), __webpack_require__(381));
		else if(typeof define === 'function' && define.amd)
			define(["react", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
		else
			root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		module.exports = __webpack_require__(1).default;
		module.exports.DraggableCore = __webpack_require__(9).default;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _classnames = __webpack_require__(4);
		
		var _classnames2 = _interopRequireDefault(_classnames);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _DraggableCore = __webpack_require__(9);
		
		var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
		
		var _log = __webpack_require__(11);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		// $FlowIgnore
		
		
		/*:: import type {DraggableEventHandler} from './utils/types';*/
		/*:: type DraggableState = {
		  dragging: boolean,
		  dragged: boolean,
		  x: number, y: number,
		  slackX: number, slackY: number,
		  isElementSVG: boolean
		};*/
		
		
		//
		// Define <Draggable>
		//
		
		/*:: type ConstructorProps = {
		  position: { x: number, y: number },
		  defaultPosition: { x: number, y: number }
		};*/
		
		var Draggable = function (_React$Component) {
		  _inherits(Draggable, _React$Component);
		
		  function Draggable(props /*: ConstructorProps*/) {
		    _classCallCheck(this, Draggable);
		
		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Draggable).call(this, props));
		
		    _this.onDragStart = function (e, coreData) {
		      (0, _log2.default)('Draggable: onDragStart: %j', coreData);
		
		      // Short-circuit if user's callback killed it.
		      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
		      // Kills start event on core as well, so move handlers are never bound.
		      if (shouldStart === false) return false;
		
		      _this.setState({ dragging: true, dragged: true });
		    };
		
		    _this.onDrag = function (e, coreData) {
		      if (!_this.state.dragging) return false;
		      (0, _log2.default)('Draggable: onDrag: %j', coreData);
		
		      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);
		
		      var newState /*: $Shape<DraggableState>*/ = {
		        x: uiData.x,
		        y: uiData.y
		      };
		
		      // Keep within bounds.
		      if (_this.props.bounds) {
		        // Save original x and y.
		        var _x = newState.x;
		        var _y = newState.y;
		
		        // Add slack to the values used to calculate bound position. This will ensure that if
		        // we start removing slack, the element won't react to it right away until it's been
		        // completely removed.
		
		        newState.x += _this.state.slackX;
		        newState.y += _this.state.slackY;
		
		        // Get bound position. This will ceil/floor the x and y within the boundaries.
		        // $FlowBug
		
		
		        // Recalculate slack by noting how much was shaved by the boundPosition handler.
		
		        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y);
		
		        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
		
		        newState.x = _getBoundPosition2[0];
		        newState.y = _getBoundPosition2[1];
		        newState.slackX = _this.state.slackX + (_x - newState.x);
		        newState.slackY = _this.state.slackY + (_y - newState.y);
		
		        // Update the event we fire to reflect what really happened after bounds took effect.
		        uiData.x = _x;
		        uiData.y = _y;
		        uiData.deltaX = newState.x - _this.state.x;
		        uiData.deltaY = newState.y - _this.state.y;
		      }
		
		      // Short-circuit if user's callback killed it.
		      var shouldUpdate = _this.props.onDrag(e, uiData);
		      if (shouldUpdate === false) return false;
		
		      _this.setState(newState);
		    };
		
		    _this.onDragStop = function (e, coreData) {
		      if (!_this.state.dragging) return false;
		
		      // Short-circuit if user's callback killed it.
		      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
		      if (shouldStop === false) return false;
		
		      (0, _log2.default)('Draggable: onDragStop: %j', coreData);
		
		      var newState /*: $Shape<DraggableState>*/ = {
		        dragging: false,
		        slackX: 0,
		        slackY: 0
		      };
		
		      // If this is a controlled component, the result of this operation will be to
		      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
		      var controlled = Boolean(_this.props.position);
		      if (controlled) {
		        var _this$props$position = _this.props.position;
		        var _x2 = _this$props$position.x;
		        var _y2 = _this$props$position.y;
		
		        newState.x = _x2;
		        newState.y = _y2;
		      }
		
		      _this.setState(newState);
		    };
		
		    _this.state = {
		      // Whether or not we are currently dragging.
		      dragging: false,
		
		      // Whether or not we have been dragged before.
		      dragged: false,
		
		      // Current transform x and y.
		      x: props.position ? props.position.x : props.defaultPosition.x,
		      y: props.position ? props.position.y : props.defaultPosition.y,
		
		      // Used for compensating for out-of-bounds drags
		      slackX: 0, slackY: 0,
		
		      // Can only determine if SVG after mounting
		      isElementSVG: false
		    };
		    return _this;
		  }
		
		  _createClass(Draggable, [{
		    key: 'componentWillMount',
		    value: function componentWillMount() {
		      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
		        // eslint-disable-next-line
		        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
		      }
		    }
		  }, {
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      // Check to see if the element passed is an instanceof SVGElement
		      if (typeof SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof SVGElement) {
		        this.setState({ isElementSVG: true });
		      }
		    }
		  }, {
		    key: 'componentWillReceiveProps',
		    value: function componentWillReceiveProps(nextProps /*: Object*/) {
		      // Set x/y if position has changed
		      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
		        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
		      }
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _classNames;
		
		      var style = {},
		          svgTransform = null;
		
		      // If this is controlled, we don't want to move it - unless it's dragging.
		      var controlled = Boolean(this.props.position);
		      var draggable = !controlled || this.state.dragging;
		
		      var position = this.props.position || this.props.defaultPosition;
		      var transformOpts = {
		        // Set left if horizontal drag is enabled
		        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,
		
		        // Set top if vertical drag is enabled
		        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
		      };
		
		      // If this element was SVG, we use the `transform` attribute.
		      if (this.state.isElementSVG) {
		        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
		      } else {
		        // Add a CSS transform to move the element around. This allows us to move the element around
		        // without worrying about whether or not it is relatively or absolutely positioned.
		        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
		        // has a clean slate.
		        style = (0, _domFns.createCSSTransform)(transformOpts);
		      }
		
		      var _props = this.props;
		      var defaultClassName = _props.defaultClassName;
		      var defaultClassNameDragging = _props.defaultClassNameDragging;
		      var defaultClassNameDragged = _props.defaultClassNameDragged;
		
		      // Mark with class while dragging
		
		      var className = (0, _classnames2.default)(this.props.children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));
		
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.createElement(
		        _DraggableCore2.default,
		        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
		        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		          className: className,
		          style: _extends({}, this.props.children.props.style, style),
		          transform: svgTransform
		        })
		      );
		    }
		  }]);
		
		  return Draggable;
		}(_react2.default.Component);
		
		Draggable.displayName = 'Draggable';
		Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
		
		  /**
		   * `axis` determines which axis the draggable can move.
		   *
		   *  Note that all callbacks will still return data as normal. This only
		   *  controls flushing to the DOM.
		   *
		   * 'both' allows movement horizontally and vertically.
		   * 'x' limits movement to horizontal axis.
		   * 'y' limits movement to vertical axis.
		   * 'none' limits all movement.
		   *
		   * Defaults to 'both'.
		   */
		  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
		
		  /**
		   * `bounds` determines the range of movement available to the element.
		   * Available values are:
		   *
		   * 'parent' restricts movement within the Draggable's parent node.
		   *
		   * Alternatively, pass an object with the following properties, all of which are optional:
		   *
		   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
		   *
		   * All values are in px.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable bounds={{right: 300, bottom: 300}}>
		   *              <div>Content</div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
		    left: _react.PropTypes.number,
		    right: _react.PropTypes.number,
		    top: _react.PropTypes.number,
		    bottom: _react.PropTypes.number
		  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
		
		  defaultClassName: _react.PropTypes.string,
		  defaultClassNameDragging: _react.PropTypes.string,
		  defaultClassNameDragged: _react.PropTypes.string,
		
		  /**
		   * `defaultPosition` specifies the x and y that the dragged item should start at
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  defaultPosition: _react.PropTypes.shape({
		    x: _react.PropTypes.number,
		    y: _react.PropTypes.number
		  }),
		
		  /**
		   * `position`, if present, defines the current position of the element.
		   *
		   *  This is similar to how form elements in React work - if no `position` is supplied, the component
		   *  is uncontrolled.
		   *
		   * Example:
		   *
		   * ```jsx
		   *      let App = React.createClass({
		   *          render: function () {
		   *              return (
		   *                  <Draggable position={{x: 25, y: 25}}>
		   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		   *                  </Draggable>
		   *              );
		   *          }
		   *      });
		   * ```
		   */
		  position: _react.PropTypes.shape({
		    x: _react.PropTypes.number,
		    y: _react.PropTypes.number
		  }),
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		});
		Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
		  axis: 'both',
		  bounds: false,
		  defaultClassName: 'react-draggable',
		  defaultClassNameDragging: 'react-draggable-dragging',
		  defaultClassNameDragged: 'react-draggable-dragged',
		  defaultPosition: { x: 0, y: 0 },
		  position: null
		});
		exports.default = Draggable;

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */
		
		(function () {
			'use strict';
		
			var hasOwn = {}.hasOwnProperty;
		
			function classNames () {
				var classes = [];
		
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
		
					var argType = typeof arg;
		
					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}
		
				return classes.join(' ');
			}
		
			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (true) {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return classNames;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
				window.classNames = classNames;
			}
		}());


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		exports.matchesSelector = matchesSelector;
		exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
		exports.addEvent = addEvent;
		exports.removeEvent = removeEvent;
		exports.outerHeight = outerHeight;
		exports.outerWidth = outerWidth;
		exports.innerHeight = innerHeight;
		exports.innerWidth = innerWidth;
		exports.offsetXYFromParent = offsetXYFromParent;
		exports.createCSSTransform = createCSSTransform;
		exports.createSVGTransform = createSVGTransform;
		exports.getTouch = getTouch;
		exports.getTouchIdentifier = getTouchIdentifier;
		exports.addUserSelectStyles = addUserSelectStyles;
		exports.removeUserSelectStyles = removeUserSelectStyles;
		exports.styleHacks = styleHacks;
		
		var _shims = __webpack_require__(6);
		
		var _getPrefix = __webpack_require__(7);
		
		var _getPrefix2 = _interopRequireDefault(_getPrefix);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		/*:: import type {ControlPosition} from './types';*/
		
		
		var matchesSelectorFunc = '';
		function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
		  if (!matchesSelectorFunc) {
		    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
		      // $FlowIgnore: Doesn't think elements are indexable
		      return (0, _shims.isFunction)(el[method]);
		    });
		  }
		
		  // $FlowIgnore: Doesn't think elements are indexable
		  return el[matchesSelectorFunc].call(el, selector);
		}
		
		// Works up the tree to the draggable itself attempting to match selector.
		function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
		  var node = el;
		  do {
		    if (matchesSelector(node, selector)) return true;
		    if (node === baseNode) return false;
		    node = node.parentNode;
		  } while (node);
		
		  return false;
		}
		
		function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.attachEvent) {
		    el.attachEvent('on' + event, handler);
		  } else if (el.addEventListener) {
		    el.addEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = handler;
		  }
		}
		
		function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
		  if (!el) {
		    return;
		  }
		  if (el.detachEvent) {
		    el.detachEvent('on' + event, handler);
		  } else if (el.removeEventListener) {
		    el.removeEventListener(event, handler, true);
		  } else {
		    // $FlowIgnore: Doesn't think elements are indexable
		    el['on' + event] = null;
		  }
		}
		
		function outerHeight(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetTop which is including margin. See getBoundPosition
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height += (0, _shims.int)(computedStyle.borderTopWidth);
		  height += (0, _shims.int)(computedStyle.borderBottomWidth);
		  return height;
		}
		
		function outerWidth(node /*: HTMLElement*/) /*: number*/ {
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetLeft which is including margin. See getBoundPosition
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width += (0, _shims.int)(computedStyle.borderLeftWidth);
		  width += (0, _shims.int)(computedStyle.borderRightWidth);
		  return width;
		}
		function innerHeight(node /*: HTMLElement*/) /*: number*/ {
		  var height = node.clientHeight;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  height -= (0, _shims.int)(computedStyle.paddingTop);
		  height -= (0, _shims.int)(computedStyle.paddingBottom);
		  return height;
		}
		
		function innerWidth(node /*: HTMLElement*/) /*: number*/ {
		  var width = node.clientWidth;
		  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		  width -= (0, _shims.int)(computedStyle.paddingLeft);
		  width -= (0, _shims.int)(computedStyle.paddingRight);
		  return width;
		}
		
		// Get from offsetParent
		function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
		  var isBody = offsetParent === offsetParent.ownerDocument.body;
		  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
		
		  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
		  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
		
		  return { x: x, y: y };
		}
		
		function createCSSTransform(_ref) /*: Object*/ {
		  var x = _ref.x;
		  var y = _ref.y;
		
		  // Replace unitless items with px
		  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
		}
		
		function createSVGTransform(_ref3) /*: string*/ {
		  var x = _ref3.x;
		  var y = _ref3.y;
		
		  return 'translate(' + x + ',' + y + ')';
		}
		
		function getTouch(e /*: MouseEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
		  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
		    return identifier === t.identifier;
		  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
		    return identifier === t.identifier;
		  });
		}
		
		function getTouchIdentifier(e /*: MouseEvent*/) /*: ?number*/ {
		  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
		}
		
		// User-select Hacks:
		//
		// Useful for preventing blue highlights all over everything when dragging.
		var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
		var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
		var userSelectStyle = ';' + userSelect + ': none;';
		
		// Note we're passing `document` b/c we could be iframed
		function addUserSelectStyles(body /*: HTMLElement*/) {
		  var style = body.getAttribute('style') || '';
		  body.setAttribute('style', style + userSelectStyle);
		}
		
		function removeUserSelectStyles(body /*: HTMLElement*/) {
		  var style = body.getAttribute('style') || '';
		  body.setAttribute('style', style.replace(userSelectStyle, ''));
		}
		
		function styleHacks() /*: Object*/ {
		  var childStyle /*: Object*/ = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  // Workaround IE pointer events; see #51
		  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
		  return _extends({
		    touchAction: 'none'
		  }, childStyle);
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.findInArray = findInArray;
		exports.isFunction = isFunction;
		exports.isNum = isNum;
		exports.int = int;
		exports.dontSetMe = dontSetMe;
		
		// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
		function findInArray(array /*: Array<any>*/, callback /*: Function*/) /*: any*/ {
		  for (var i = 0, length = array.length; i < length; i++) {
		    if (callback.apply(callback, [array[i], i, array])) return array[i];
		  }
		}
		
		function isFunction(func /*: any*/) /*: boolean*/ {
		  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
		}
		
		function isNum(num /*: any*/) /*: boolean*/ {
		  return typeof num === 'number' && !isNaN(num);
		}
		
		function int(a /*: string*/) /*: number*/ {
		  return parseInt(a, 10);
		}
		
		function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
		  if (props[propName]) {
		    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
		  }
		}

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getPrefix = getPrefix;
		exports.browserPrefixToKey = browserPrefixToKey;
		exports.browserPrefixToStyle = browserPrefixToStyle;
		
		var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
		function getPrefix() /*: string*/ {
		  var prop /*: string*/ = arguments.length <= 0 || arguments[0] === undefined ? 'transform' : arguments[0];
		
		  // Checking specifically for 'window.document' is for pseudo-browser server-side
		  // environments that define 'window' as the global context.
		  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
		  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
		
		  var style = window.document.documentElement.style;
		
		  if (prop in style) return '';
		
		  for (var i = 0; i < prefixes.length; i++) {
		    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
		  }
		
		  return '';
		}
		
		function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
		  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
		}
		
		function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
		  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
		}
		
		function kebabToTitleCase(str /*: string*/) /*: string*/ {
		  var out = '';
		  var shouldCapitalize = true;
		  for (var i = 0; i < str.length; i++) {
		    if (shouldCapitalize) {
		      out += str[i].toUpperCase();
		      shouldCapitalize = false;
		    } else if (str[i] === '-') {
		      shouldCapitalize = true;
		    } else {
		      out += str[i];
		    }
		  }
		  return out;
		}
		
		// Default export is the prefix itself, like 'Moz', 'Webkit', etc
		// Note that you may have to re-test for certain things; for instance, Chrome 50
		// can handle unprefixed `transform`, but not unprefixed `user-select`
		exports.default = getPrefix();

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.getBoundPosition = getBoundPosition;
		exports.snapToGrid = snapToGrid;
		exports.canDragX = canDragX;
		exports.canDragY = canDragY;
		exports.getControlPosition = getControlPosition;
		exports.createCoreData = createCoreData;
		exports.createDraggableData = createDraggableData;
		
		var _shims = __webpack_require__(6);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(5);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		/*:: import type Draggable from '../Draggable';*/
		/*:: import type {Bounds, ControlPosition, DraggableData} from './types';*/
		/*:: import type DraggableCore from '../DraggableCore';*/
		function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
		  // If no bounds, short-circuit and move on
		  if (!draggable.props.bounds) return [x, y];
		
		  // Clone new bounds
		  var bounds = draggable.props.bounds;
		
		  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
		  var node = _reactDom2.default.findDOMNode(draggable);
		
		  if (typeof bounds === 'string') {
		    var ownerDocument = node.ownerDocument;
		
		    var ownerWindow = ownerDocument.defaultView;
		    var boundNode = void 0;
		    if (bounds === 'parent') {
		      boundNode = node.parentNode;
		    } else {
		      boundNode = ownerDocument.querySelector(bounds);
		      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
		    }
		    var nodeStyle = ownerWindow.getComputedStyle(node);
		    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
		    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
		    bounds = {
		      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
		      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
		      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
		      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
		    };
		  }
		
		  // Keep x and y below right and bottom limits...
		  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
		  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
		
		  // But above left and top limits.
		  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
		  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
		
		  return [x, y];
		}
		
		function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
		  var x = Math.round(pendingX / grid[0]) * grid[0];
		  var y = Math.round(pendingY / grid[1]) * grid[1];
		  return [x, y];
		}
		
		function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
		}
		
		function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
		}
		
		// Get {x, y} positions from event.
		function getControlPosition(e /*: MouseEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
		  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
		  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
		  var node = _reactDom2.default.findDOMNode(draggableCore);
		  // User can provide an offsetParent if desired.
		  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
		  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
		}
		
		// Create an data object exposed by <DraggableCore>'s events
		function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
		  // State changes are often (but not always!) async. We want the latest value.
		  var state = draggable._pendingState || draggable.state;
		  var isStart = !(0, _shims.isNum)(state.lastX);
		
		  if (isStart) {
		    // If this is our first move, use the x and y as last coords.
		    return {
		      node: _reactDom2.default.findDOMNode(draggable),
		      deltaX: 0, deltaY: 0,
		      lastX: x, lastY: y,
		      x: x, y: y
		    };
		  } else {
		    // Otherwise calculate proper values.
		    return {
		      node: _reactDom2.default.findDOMNode(draggable),
		      deltaX: x - state.lastX, deltaY: y - state.lastY,
		      lastX: state.lastX, lastY: state.lastY,
		      x: x, y: y
		    };
		  }
		}
		
		// Create an data exposed by <Draggable>'s events
		function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
		  return {
		    node: coreData.node,
		    x: draggable.state.x + coreData.deltaX,
		    y: draggable.state.y + coreData.deltaY,
		    deltaX: coreData.deltaX,
		    deltaY: coreData.deltaY,
		    lastX: draggable.state.x,
		    lastY: draggable.state.y
		  };
		}
		
		// A lot faster than stringify/parse
		function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
		  return {
		    left: bounds.left,
		    top: bounds.top,
		    right: bounds.right,
		    bottom: bounds.bottom
		  };
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(5);
		
		var _positionFns = __webpack_require__(8);
		
		var _shims = __webpack_require__(6);
		
		var _log = __webpack_require__(11);
		
		var _log2 = _interopRequireDefault(_log);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		// Simple abstraction for dragging events names.
		/*:: import type {EventHandler} from './utils/types';*/
		var eventsFor = {
		  touch: {
		    start: 'touchstart',
		    move: 'touchmove',
		    stop: 'touchend'
		  },
		  mouse: {
		    start: 'mousedown',
		    move: 'mousemove',
		    stop: 'mouseup'
		  }
		};
		
		// Default to mouse events.
		var dragEventFor = eventsFor.mouse;
		
		//
		// Define <DraggableCore>.
		//
		// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
		// work well with libraries that require more control over the element.
		//
		
		/*:: type CoreState = {
		  dragging: boolean,
		  lastX: number,
		  lastY: number,
		  touchIdentifier: ?number
		};*/
		
		var DraggableCore = function (_React$Component) {
		  _inherits(DraggableCore, _React$Component);
		
		  function DraggableCore() {
		    var _Object$getPrototypeO;
		
		    var _temp, _this, _ret;
		
		    _classCallCheck(this, DraggableCore);
		
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DraggableCore)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      dragging: false,
		      // Used while dragging to determine deltas.
		      lastX: NaN, lastY: NaN,
		      touchIdentifier: null
		    }, _this.handleDragStart = function (e) {
		      // Make it possible to attach event handlers on top of this one.
		      _this.props.onMouseDown(e);
		
		      // Only accept left-clicks.
		      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
		
		      // Get nodes. Be sure to grab relative document (could be iframed)
		      var domNode = _reactDom2.default.findDOMNode(_this);
		      var ownerDocument = domNode.ownerDocument;
		
		      // Short circuit if handle or cancel prop was provided and selector doesn't match.
		
		      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, domNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, domNode)) {
		        return;
		      }
		
		      // Set touch identifier in component state if this is a touch event. This allows us to
		      // distinguish between individual touches on multitouch screens by identifying which
		      // touchpoint was set to this element.
		      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
		      _this.setState({ touchIdentifier: touchIdentifier });
		
		      // Get the current drag point from the event. This is used as the offset.
		      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
		      if (position == null) return; // not possible but satisfies flow
		      var x = position.x;
		      var y = position.y;
		
		      // Create an event object with all the data parents need to make a decision here.
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);
		
		      // Call event handler. If it returns explicit false, cancel.
		      (0, _log2.default)('calling', _this.props.onStart);
		      var shouldUpdate = _this.props.onStart(e, coreEvent);
		      if (shouldUpdate === false) return;
		
		      // Add a style to the body to disable user-select. This prevents text from
		      // being selected all over the page.
		      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument.body);
		
		      // Initiate dragging. Set the current x and y as offsets
		      // so we know how much we've moved during the drag. This allows us
		      // to drag elements around even if they have been moved, without issue.
		      _this.setState({
		        dragging: true,
		
		        lastX: x,
		        lastY: y
		      });
		
		      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
		      // this element. We use different events depending on whether or not we have detected that this
		      // is a touch-capable device.
		      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
		    }, _this.handleDrag = function (e) {
		
		      // Get the current drag point from the event. This is used as the offset.
		      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x;
		      var y = position.y;
		
		      // Snap to grid if prop has been provided
		
		      if (x !== x) debugger;
		
		      if (Array.isArray(_this.props.grid)) {
		        var deltaX = x - _this.state.lastX,
		            deltaY = y - _this.state.lastY;
		
		        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
		
		        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
		
		        deltaX = _snapToGrid2[0];
		        deltaY = _snapToGrid2[1];
		
		        if (!deltaX && !deltaY) return; // skip useless drag
		        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
		      }
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);
		
		      // Call event handler. If it returns explicit false, trigger end.
		      var shouldUpdate = _this.props.onDrag(e, coreEvent);
		      if (shouldUpdate === false) {
		        try {
		          _this.handleDragStop(new MouseEvent('mouseup'));
		        } catch (err) {
		          // Old browsers
		          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseEvent*/);
		          // I see why this insanity was deprecated
		          // $FlowIgnore
		          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		          _this.handleDragStop(event);
		        }
		        return;
		      }
		
		      _this.setState({
		        lastX: x,
		        lastY: y
		      });
		    }, _this.handleDragStop = function (e) {
		      if (!_this.state.dragging) return;
		
		      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
		      if (position == null) return;
		      var x = position.x;
		      var y = position.y;
		
		      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
		
		      var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this);
		
		      var ownerDocument = _ReactDOM$findDOMNode.ownerDocument;
		
		      // Remove user-select hack
		
		      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
		
		      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);
		
		      // Reset the el.
		      _this.setState({
		        dragging: false,
		        lastX: NaN,
		        lastY: NaN
		      });
		
		      // Call event handler
		      _this.props.onStop(e, coreEvent);
		
		      // Remove event handlers
		      (0, _log2.default)('DraggableCore: Removing handlers');
		      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
		    }, _this.onMouseDown = function (e) {
		      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
		
		      return _this.handleDragStart(e);
		    }, _this.onMouseUp = function (e) {
		      dragEventFor = eventsFor.mouse;
		
		      return _this.handleDragStop(e);
		    }, _this.onTouchStart = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStart(e);
		    }, _this.onTouchEnd = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStop(e);
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }
		
		  _createClass(DraggableCore, [{
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
		      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
		
		      var _ReactDOM$findDOMNode2 = _reactDom2.default.findDOMNode(this);
		
		      var ownerDocument = _ReactDOM$findDOMNode2.ownerDocument;
		
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
		      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
		      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
		    }
		
		    // Same as onMouseDown (start drag), but now consider this a touch device.
		
		  }, {
		    key: 'render',
		    value: function render() {
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
		        style: (0, _domFns.styleHacks)(this.props.children.props.style),
		
		        // Note: mouseMove handler is attached to document so it will still function
		        // when the user drags quickly and leaves the bounds of the element.
		        onMouseDown: this.onMouseDown,
		        onTouchStart: this.onTouchStart,
		        onMouseUp: this.onMouseUp,
		        onTouchEnd: this.onTouchEnd
		      });
		    }
		  }]);
		
		  return DraggableCore;
		}(_react2.default.Component);
		
		DraggableCore.displayName = 'DraggableCore';
		DraggableCore.propTypes = {
		  /**
		   * `allowAnyClick` allows dragging using any mouse button.
		   * By default, we only accept the left button.
		   *
		   * Defaults to `false`.
		   */
		  allowAnyClick: _react.PropTypes.bool,
		
		  /**
		   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
		   * with the exception of `onMouseDown`, will not fire.
		   */
		  disabled: _react.PropTypes.bool,
		
		  /**
		   * By default, we add 'user-select:none' attributes to the document body
		   * to prevent ugly text selection during drag. If this is causing problems
		   * for your app, set this to `false`.
		   */
		  enableUserSelectHack: _react.PropTypes.bool,
		
		  /**
		   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
		   * instead of using the parent node.
		   */
		  offsetParent: function offsetParent(props, propName) {
		    if (process.browser && props[propName] && props[propName].nodeType !== 1) {
		      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
		    }
		  },
		
		  /**
		   * `grid` specifies the x and y that dragging should snap to.
		   */
		  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
		
		  /**
		   * `handle` specifies a selector to be used as the handle that initiates drag.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *         return (
		   *            <Draggable handle=".handle">
		   *              <div>
		   *                  <div className="handle">Click me to drag</div>
		   *                  <div>This is some other content</div>
		   *              </div>
		   *           </Draggable>
		   *         );
		   *       }
		   *   });
		   * ```
		   */
		  handle: _react.PropTypes.string,
		
		  /**
		   * `cancel` specifies a selector to be used to prevent drag initialization.
		   *
		   * Example:
		   *
		   * ```jsx
		   *   let App = React.createClass({
		   *       render: function () {
		   *           return(
		   *               <Draggable cancel=".cancel">
		   *                   <div>
		   *                     <div className="cancel">You can't drag from here</div>
		   *                     <div>Dragging here works fine</div>
		   *                   </div>
		   *               </Draggable>
		   *           );
		   *       }
		   *   });
		   * ```
		   */
		  cancel: _react.PropTypes.string,
		
		  /**
		   * Called when dragging starts.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onStart: _react.PropTypes.func,
		
		  /**
		   * Called while dragging.
		   * If this function returns the boolean false, dragging will be canceled.
		   */
		  onDrag: _react.PropTypes.func,
		
		  /**
		   * Called when dragging stops.
		   * If this function returns the boolean false, the drag will remain active.
		   */
		  onStop: _react.PropTypes.func,
		
		  /**
		   * A workaround option which can be passed if onMouseDown needs to be accessed,
		   * since it'll always be blocked (as there is internal use of onMouseDown)
		   */
		  onMouseDown: _react.PropTypes.func,
		
		  /**
		   * These properties should be defined on the child, not here.
		   */
		  className: _shims.dontSetMe,
		  style: _shims.dontSetMe,
		  transform: _shims.dontSetMe
		};
		DraggableCore.defaultProps = {
		  allowAnyClick: false, // by default only accept left click
		  cancel: null,
		  disabled: false,
		  enableUserSelectHack: true,
		  offsetParent: null,
		  handle: null,
		  grid: null,
		  transform: null,
		  onStart: function onStart() {},
		  onDrag: function onDrag() {},
		  onStop: function onStop() {},
		  onMouseDown: function onMouseDown() {}
		};
		exports.default = DraggableCore;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		// shim for using process in browser
		
		var process = module.exports = {};
		
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
		
		var cachedSetTimeout;
		var cachedClearTimeout;
		
		(function () {
		  try {
		    cachedSetTimeout = setTimeout;
		  } catch (e) {
		    cachedSetTimeout = function () {
		      throw new Error('setTimeout is not defined');
		    }
		  }
		  try {
		    cachedClearTimeout = clearTimeout;
		  } catch (e) {
		    cachedClearTimeout = function () {
		      throw new Error('clearTimeout is not defined');
		    }
		  }
		} ())
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
		
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
		
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = cachedSetTimeout(cleanUpNextTick);
		    draining = true;
		
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    cachedClearTimeout(timeout);
		}
		
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        cachedSetTimeout(drainQueue, 0);
		    }
		};
		
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
		
		function noop() {}
		
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
		
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = log;
		
		/*eslint no-console:0*/
		function log() {
		  var _console;
		
		  if ((undefined)) (_console = console).log.apply(_console, arguments);
		}

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=react-draggable.js.map

/***/ },
/* 418 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ARROW_LEFT = exports.ARROW_LEFT = 37;
	var ARROW_RIGHT = exports.ARROW_RIGHT = 39;

	var SPACE = exports.SPACE = 32;
	var TAB = exports.TAB = 9;

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MenuBar;

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _QualityMenu = __webpack_require__(420);

	var _QualityMenu2 = _interopRequireDefault(_QualityMenu);

	var _TextTracksMenu = __webpack_require__(422);

	var _TextTracksMenu2 = _interopRequireDefault(_TextTracksMenu);

	var _MenuBarButton = __webpack_require__(421);

	var _MenuBarButton2 = _interopRequireDefault(_MenuBarButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MenuBar(props) {
	  return React.createElement(
	    'div',
	    { className: className(props) },
	    renderAdditionalButtons(props),
	    React.createElement(_TextTracksMenu2.default, { buttonTitle: props.textTracksMenuButtonTitle,
	      items: props.textTracksMenuItems,
	      onItemClick: props.onTextTracksMenuItemClick }),
	    React.createElement(_QualityMenu2.default, { buttonTitle: props.qualityMenuButtonTitle,
	      items: props.qualityMenuItems,
	      onItemClick: props.onQualityMenuItemClick })
	  );
	}

	MenuBar.propTypes = {
	  additionalButtons: React.PropTypes.arrayOf(React.PropTypes.shape({
	    name: React.PropTypes.string.isRequired,
	    label: React.PropTypes.string.isRequired
	  })),
	  hiddenOnPhone: React.PropTypes.bool,
	  onAdditionalButtonClick: React.PropTypes.func,
	  qualityMenuButtonTitle: React.PropTypes.string,
	  qualityMenuItems: _QualityMenu2.default.propTypes.items,
	  onQualityMenuItemClick: React.PropTypes.func,

	  textTracksMenuButtonTitle: React.PropTypes.string,
	  textTracksMenuItems: _TextTracksMenu2.default.propTypes.items,
	  onTextTracksMenuItemClick: React.PropTypes.func,

	  standAlone: React.PropTypes.bool
	};

	MenuBar.defaultProps = {
	  additionalButtons: [],
	  standAlone: true
	};

	function className(props) {
	  return (0, _classnames2.default)(props.className, 'player_controls-menu_bar', {
	    'player_controls-menu_bar-hidden_on_phone': props.hiddenOnPhone,
	    'player_controls-menu_bar-stand_alone': props.standAlone
	  });
	}

	function renderAdditionalButtons(props) {
	  return props.additionalButtons.map(function (additionalButton) {
	    return React.createElement(_MenuBarButton2.default, { title: additionalButton.label,
	      iconName: additionalButton.iconName,
	      key: additionalButton.name,
	      onClick: additionalButtonClickHandler(props, additionalButton.name) });
	  });
	}

	function additionalButtonClickHandler(props, name) {
	  if (props.onAdditionalButtonClick) {
	    return function () {
	      return props.onAdditionalButtonClick(name);
	    };
	  }
	}

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = QualityMenu;

	var _MenuBarButton = __webpack_require__(421);

	var _MenuBarButton2 = _interopRequireDefault(_MenuBarButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function QualityMenu(props) {
	  if (props.items.length < 2) {
	    return React.createElement("noscript", null);
	  }

	  return React.createElement(_MenuBarButton2.default, { className: "player_controls-quality_menu_button",
	    title: props.buttonTitle,
	    iconName: "mediaQuality",
	    subMenuItems: props.items,
	    onSubMenuItemClick: props.onItemClick });
	}

	QualityMenu.propTypes = {
	  buttonTitle: React.PropTypes.string,
	  items: _MenuBarButton2.default.propTypes.subMenuItems,
	  onMenuItemClick: React.PropTypes.func
	};

	QualityMenu.defaultProps = {
	  items: []
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Icon = __webpack_require__(403);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuBarButton = function (_React$Component) {
	  _inherits(MenuBarButton, _React$Component);

	  function MenuBarButton(props, context) {
	    _classCallCheck(this, MenuBarButton);

	    var _this = _possibleConstructorReturn(this, (MenuBarButton.__proto__ || Object.getPrototypeOf(MenuBarButton)).call(this, props, context));

	    _this.state = {
	      subMenuVisible: false
	    };

	    _this.onLinkClick = function (event) {
	      event.preventDefault();

	      if (_this.props.subMenuItems.length > 0) {
	        _this.setState({ subMenuVisible: !_this.state.subMenuVisible });
	      }

	      if (_this.props.onClick) {
	        _this.props.onClick();
	      }
	    };

	    _this.onMouseEnter = function () {
	      if (_this.props.subMenuItems.length > 0) {
	        _this.setState({ subMenuVisible: true });
	      }
	    };

	    _this.onMouseLeave = function () {
	      _this.closeMenu();
	    };

	    _this.onFocus = function () {
	      clearTimeout(_this.closeMenuTimeout);
	    };

	    _this.onBlur = function () {
	      clearTimeout(_this.closeMenuTimeout);

	      _this.closeMenuTimeout = setTimeout(function () {
	        _this.closeMenu();
	      }, 100);
	    };

	    _this.closeMenu = function () {
	      _this.setState({ subMenuVisible: false });
	    };
	    return _this;
	  }

	  _createClass(MenuBarButton, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var props = this.props;

	      return React.createElement(
	        'div',
	        { className: wrapperClassName(props, this.state.subMenuVisible),
	          ref: function ref(wrapper) {
	            return _this2.wrapper = wrapper;
	          },
	          onMouseEnter: this.onMouseEnter,
	          onMouseLeave: this.onMouseLeave,
	          onFocus: this.onFocus,
	          onBlur: this.onBlur },
	        React.createElement(
	          'a',
	          { className: className(props, 'link'),
	            href: '#',
	            tabIndex: '4',
	            title: props.title,
	            onClick: this.onLinkClick },
	          React.createElement(_Icon2.default, { className: className(props, 'icon'),
	            name: props.iconName })
	        ),
	        renderSubMenu(props, this.closeMenu)
	      );
	    }
	  }]);

	  return MenuBarButton;
	}(React.Component);

	exports.default = MenuBarButton;


	MenuBarButton.propTypes = {
	  title: React.PropTypes.string,
	  iconName: React.PropTypes.string,
	  subMenuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
	    label: React.PropTypes.node.isRequired,
	    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
	    annotation: React.PropTypes.string,
	    active: React.PropTypes.bool
	  })),
	  onClick: React.PropTypes.func,
	  onSubMenuItemClick: React.PropTypes.func
	};

	MenuBarButton.defaultProps = {
	  subMenuItems: []
	};

	function renderSubMenu(props, closeMenu) {
	  if (props.subMenuItems.length > 0) {
	    return React.createElement(
	      'ul',
	      { className: 'player_controls-menu_bar_button_sub_menu' },
	      renderSubMenuItems(props, closeMenu)
	    );
	  }
	}

	function renderSubMenuItems(props, closeMenu) {
	  return props.subMenuItems.map(function (item) {
	    return React.createElement(
	      'li',
	      { className: itemClassName(item), key: item.value },
	      React.createElement(
	        'a',
	        { className: 'player_controls-menu_bar_button_sub_menu_item_link',
	          href: '#',
	          tabIndex: '4',
	          onClick: subMenuItemClickHandler(props, item.value, closeMenu) },
	        renderSubMenuItemIcon(item),
	        item.label,
	        renderSubMenuItemAnnotation(props, item)
	      )
	    );
	  });
	}

	function wrapperClassName(props, subMenuVisible) {
	  return (0, _classnames2.default)({ 'player_controls-menu_bar_button-sub_menu_visible': subMenuVisible }, className(props));
	}

	function itemClassName(item) {
	  return (0, _classnames2.default)('player_controls-menu_bar_button_sub_menu_item', { 'player_controls-menu_bar_button_sub_menu_item-active': item.active });
	}

	function renderSubMenuItemIcon(item) {
	  if (item.active) {
	    return React.createElement(_Icon2.default, { className: 'player_controls-menu_bar_button_sub_menu_item_icon',
	      name: 'activeMenuItem' });
	  }
	}

	function renderSubMenuItemAnnotation(props, item) {
	  if (item.annotation) {
	    return React.createElement(
	      'span',
	      { className: className(props, 'sub_menu_item_annotation') },
	      item.annotation
	    );
	  }
	}

	function subMenuItemClickHandler(props, value, closeMenu) {
	  return function (event) {
	    event.preventDefault();
	    closeMenu();

	    if (props.onSubMenuItemClick) {
	      props.onSubMenuItemClick(value);
	    }
	  };
	}

	function className(props) {
	  for (var _len = arguments.length, suffix = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    suffix[_key - 1] = arguments[_key];
	  }

	  return (0, _classnames2.default)(['player_controls-menu_bar_button'].concat(suffix).join('_'), [props.className].concat(suffix).join('_'));
	}

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TextTracksMenu;

	var _MenuBarButton = __webpack_require__(421);

	var _MenuBarButton2 = _interopRequireDefault(_MenuBarButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TextTracksMenu(props) {
	  if (props.items.length < 2) {
	    return React.createElement("noscript", null);
	  }

	  return React.createElement(_MenuBarButton2.default, { className: "player_controls-text_tracks_menu_button",
	    title: props.buttonTitle,
	    iconName: "textTracks",
	    subMenuItems: props.items,
	    onSubMenuItemClick: props.onItemClick });
	}

	TextTracksMenu.propTypes = {
	  buttonTitle: React.PropTypes.string,
	  items: _MenuBarButton2.default.propTypes.subMenuItems,
	  onMenuItemClick: React.PropTypes.func
	};

	TextTracksMenu.defaultProps = {
	  items: []
	};

/***/ },
/* 423 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(
	    "div",
	    { className: "close_button text_hidden_only",
	      tabIndex: "4",
	      title: I18n.t('pageflow.public.close'),
	      onClick: props.onClick },
	    React.createElement(
	      "div",
	      { className: "label" },
	      I18n.t('pageflow.public.close')
	    )
	  );
	};

/***/ },
/* 424 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (Component) {
	  if (!PAGEFLOW_EDITOR) {
	    return function () {
	      return false;
	    };
	  } else {
	    return Component;
	  }
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.prop = exports.file = exports.setting = exports.t = exports.currentParentChapterAttributes = exports.currentParentPageAttributes = exports.pageIsPrepared = exports.pageIsActive = exports.pageAttributes = undefined;

	var _selectors = __webpack_require__(337);

	var _selectors2 = __webpack_require__(426);

	var _selectors3 = __webpack_require__(429);

	var _selectors4 = __webpack_require__(430);

	var _selectors5 = __webpack_require__(393);

	var _selectors6 = __webpack_require__(390);

	exports.pageAttributes = _selectors.pageAttributes;
	exports.pageIsActive = _selectors.pageIsActive;
	exports.pageIsPrepared = _selectors.pageIsPrepared;
	exports.currentParentPageAttributes = _selectors2.currentParentPageAttributes;
	exports.currentParentChapterAttributes = _selectors2.currentParentChapterAttributes;
	exports.t = _selectors3.t;
	exports.setting = _selectors4.setting;
	exports.file = _selectors5.file;
	exports.prop = _selectors6.prop;

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.currentParentChapterAttributes = currentParentChapterAttributes;
	exports.currentParentPageAttributes = currentParentPageAttributes;

	var _selectors = __webpack_require__(337);

	var _selectors2 = __webpack_require__(427);

	var _selectors3 = __webpack_require__(428);

	function currentParentChapterAttributes() {
	  return function (state, props) {
	    var parentPage = currentParentPageAttributes()(state, props);

	    if (!parentPage) {
	      return null;
	    }

	    return (0, _selectors2.chapterAttributes)({ id: parentPage.chapterId })(state, props);
	  };
	}

	function currentParentPageAttributes() {
	  return function (state, props) {
	    var currentChapterId = (0, _selectors.pageAttribute)('chapterId', {
	      id: state.currentPageId
	    })(state, props);

	    var currentStorylineId = (0, _selectors2.chapterAttribute)('storylineId', {
	      id: currentChapterId
	    })(state, props);

	    var currentParentPageId = (0, _selectors3.storylineAttribute)('parentPagePermaId', {
	      id: currentStorylineId
	    })(state, props);

	    return (0, _selectors.pageAttributes)({
	      id: currentParentPageId
	    })(state, props);
	  };
	}

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.chapterAttributes = exports.selector = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.chapterAttribute = chapterAttribute;

	var _collections = __webpack_require__(338);

	var selector = exports.selector = (0, _collections.createItemSelector)('chapters');

	function chapterAttribute(name, options) {
	  return selector(_extends({ map: function map(chapter) {
	      return chapter[name];
	    } }, options));
	}

	var chapterAttributes = exports.chapterAttributes = selector;

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selector = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.storylineAttribute = storylineAttribute;

	var _collections = __webpack_require__(338);

	var selector = exports.selector = (0, _collections.createItemSelector)('storylines');

	function storylineAttribute(name, options) {
	  return selector(_extends({ map: function map(storyline) {
	      return storyline[name];
	    } }, options));
	}

/***/ },
/* 429 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.t = t;
	function t(state) {
	  return function (key, options) {
	    return I18n.t(key, _extends({ locale: state.i18n.locale }, options));
	  };
	}

/***/ },
/* 430 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setting = setting;
	function setting(_ref) {
	  var property = _ref.property;

	  return function (state) {
	    return state.settings[property];
	  };
	}

/***/ },
/* 431 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (name, _ref) {
	  var component = _ref.component,
	      reducer = _ref.reducer,
	      saga = _ref.saga;

	  registry.push({
	    name: name,
	    component: component,
	    reducer: reducer,
	    saga: saga
	  });
	};

	var registry = exports.registry = [];

/***/ },
/* 432 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (name, _ref) {
	  var component = _ref.component;

	  registry.push({
	    name: name,
	    component: component
	  });
	};

	var registry = exports.registry = [];

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _collections = __webpack_require__(338);

	var _registerPageType = __webpack_require__(431);

	var _boot = __webpack_require__(434);

	var _boot2 = _interopRequireDefault(_boot);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PageProvider = (0, _collections.createItemScopeProvider)('pages');

	var _class = function (_React$Component) {
	  _inherits(_class, _React$Component);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.store = (0, _boot2.default)({ seed: this.props.resolverSeed });
	      this.pageComponent = findPageComponent(this.props.pageType);
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      var PageComponent = this.pageComponent;

	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: this.store },
	        _react2.default.createElement(
	          PageProvider,
	          { itemId: this.props.pageId },
	          _react2.default.createElement(PageComponent, null)
	        )
	      );
	    }
	  }]);

	  return _class;
	}(_react2.default.Component);

	exports.default = _class;


	function findPageComponent(pageTypeName) {
	  return _registerPageType.registry.find(function (_ref) {
	    var name = _ref.name,
	        component = _ref.component;
	    return name == pageTypeName;
	  }).component;
	}

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (pageflow) {
	  var isEditor = !!pageflow.storylines;
	  var isServerSide = !pageflow.settings;

	  var seed = pageflow.seed;
	  var collections = isEditor ? pageflow : seed;

	  var pageStateReducers = _registerPageType.registry.reduce(function (result, _ref) {
	    var name = _ref.name,
	        reducer = _ref.reducer;

	    result[name] = reducer;
	    return result;
	  }, {});

	  var reducer = (0, _redux.combineReducers)(_extends({}, _i18n.reducers, _entry.reducers, _current.reducers, _storylines.reducers, _chapters.reducers, (0, _pages.createReducers)(pageStateReducers), _pageTypes.reducers, (0, _files.createReducers)(collections.files || {}, {
	    fileUrlTemplates: seed['file_url_templates'],
	    modelTypes: seed['file_model_types']
	  }), _settings.reducers, _widgets.reducers));

	  var saga = void 0,
	      m = void 0;

	  if (!isServerSide) {
	    (function () {
	      var pageTypeSagas = _registerPageType.registry.reduce(function (result, _ref2) {
	        var name = _ref2.name,
	            saga = _ref2.saga;

	        result[name] = saga;
	        return result;
	      }, {});

	      m = (0, _createSaga.createMiddleware)();

	      saga = regeneratorRuntime.mark(function saga() {
	        return regeneratorRuntime.wrap(function saga$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return [(0, _pages.createSaga)(collections.pages, pageTypeSagas, m)(), (0, _settings.createSaga)(pageflow.settings)()];

	              case 2:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, saga, this);
	      });
	    })();
	  }

	  var store = (0, _createStore2.default)(reducer, saga, m);

	  (0, _entry.initFromSeed)(seed, store.dispatch);
	  (0, _i18n.initFromSeed)(seed, store.dispatch);
	  (0, _pageTypes.initFromSeed)(seed, store.dispatch);

	  (0, _storylines.watchCollection)(collections.storylines, store.dispatch);
	  (0, _chapters.watchCollection)(collections.chapters, store.dispatch);
	  (0, _pages.watchCollection)(collections.pages, store.dispatch);
	  (0, _files.watchCollections)(collections.files || {}, store.dispatch);

	  if (!isServerSide) {
	    (0, _current.watch)(pageflow.events, store.dispatch);
	    (0, _settings.watch)(pageflow.settings, store.dispatch);
	    (0, _widgets.watch)(pageflow.events, pageflow.widgets, store.dispatch);
	    (0, _hotkeys.watchEvents)(window, store);

	    _registerPageType.registry.forEach(function (_ref3) {
	      var name = _ref3.name,
	          component = _ref3.component;
	      return pageflow.pageType.register(name, (0, _pages.createPageType)(component, store));
	    });

	    _registerWidgetType.registry.forEach(function (_ref4) {
	      var name = _ref4.name,
	          component = _ref4.component;
	      return pageflow.widgetTypes.register(name, (0, _widgets.createWidgetType)(component, store));
	    });
	  }

	  return store;
	};

	var _registerPageType = __webpack_require__(431);

	var _registerWidgetType = __webpack_require__(432);

	var _createStore = __webpack_require__(435);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _createSaga = __webpack_require__(343);

	var _storylines = __webpack_require__(436);

	var _chapters = __webpack_require__(437);

	var _pages = __webpack_require__(310);

	var _pageTypes = __webpack_require__(438);

	var _current = __webpack_require__(441);

	var _files = __webpack_require__(445);

	var _settings = __webpack_require__(446);

	var _i18n = __webpack_require__(448);

	var _entry = __webpack_require__(451);

	var _hotkeys = __webpack_require__(454);

	var _widgets = __webpack_require__(456);

	var _redux = __webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (reducer) {
	  var saga = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : regeneratorRuntime.mark(function _callee() {
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  });
	  var middleware = arguments[2];

	  var sagaMiddleware = (0, _reduxSaga2.default)();
	  var middlewares = [sagaMiddleware];

	  if (middleware) {
	    middlewares.push(middleware);
	  }

	  var composeEnhancers = _redux.compose;

	  if ((typeof process === 'undefined' || ("production") !== 'production') && typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {

	    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	  }

	  var store = (0, _redux.createStore)(reducer, {}, composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)));

	  sagaMiddleware.run(saga);

	  return store;
	};

	var _redux = __webpack_require__(313);

	var _reduxSaga = __webpack_require__(349);

	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.watchCollection = watchCollection;

	var _collections = __webpack_require__(338);

	var reducers = exports.reducers = { storylines: (0, _collections.createReducer)('storylines') };

	function watchCollection(storylines, dispatch) {
	  (0, _collections.watch)({
	    collection: storylines,
	    collectionName: 'storylines',
	    dispatch: dispatch,

	    attributes: ['id'],
	    includeConfiguration: true
	  });
	}

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.watchCollection = watchCollection;

	var _collections = __webpack_require__(338);

	var reducers = exports.reducers = { chapters: (0, _collections.createReducer)('chapters') };

	function watchCollection(chapters, dispatch) {
	  (0, _collections.watch)({
	    collection: chapters,
	    collectionName: 'chapters',
	    dispatch: dispatch,

	    attributes: ['id', 'title', 'position', 'storyline_id']
	  });
	}

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.initFromSeed = initFromSeed;

	var _actions = __webpack_require__(439);

	var _reducer = __webpack_require__(440);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { pageTypes: _reducer2.default };

	function initFromSeed(seed, dispatch) {
	  dispatch((0, _actions.init)({ pageTypes: _utils.camelize.deep(seed.page_types) }));
	}

/***/ },
/* 439 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	var INIT = exports.INIT = 'PAGE_TYPES_INIT';

	function init(_ref) {
	  var pageTypes = _ref.pageTypes;

	  return {
	    type: INIT,
	    payload: {
	      pageTypes: pageTypes
	    }
	  };
	}

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.INIT:
	      return action.payload.pageTypes;
	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(439);

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.watch = exports.reducers = undefined;

	var _reducer = __webpack_require__(442);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _watch = __webpack_require__(444);

	var _watch2 = _interopRequireDefault(_watch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { currentPageId: _reducer2.default };

	exports.watch = _watch2.default;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.PAGE_CHANGE:
	      return action.payload.id;
	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(443);

/***/ },
/* 443 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pageChange = pageChange;
	var PAGE_CHANGE = exports.PAGE_CHANGE = 'CURRENT_PAGE_CHANGE';

	function pageChange(_ref) {
	  var id = _ref.id;

	  return {
	    type: PAGE_CHANGE,
	    payload: {
	      id: id
	    }
	  };
	}

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (events, dispatch) {
	  events.on('page:change', function (page) {
	    return dispatch((0, _actions.pageChange)({ id: page.getPermaId() }));
	  });
	};

	var _actions = __webpack_require__(443);

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createReducers = createReducers;
	exports.watchCollections = watchCollections;

	var _collections = __webpack_require__(338);

	var _utils = __webpack_require__(372);

	function createReducers(fileCollections, _ref) {
	  var _ref$fileUrlTemplates = _ref.fileUrlTemplates,
	      fileUrlTemplates = _ref$fileUrlTemplates === undefined ? {} : _ref$fileUrlTemplates,
	      _ref$modelTypes = _ref.modelTypes,
	      modelTypes = _ref$modelTypes === undefined ? {} : _ref$modelTypes;

	  var reducers = Object.keys(fileCollections).reduce(function (result, collectionName) {
	    collectionName = (0, _utils.camelize)(collectionName);
	    result[collectionName] = (0, _collections.createReducer)(collectionName);
	    return result;
	  }, {});

	  fileUrlTemplates = _utils.camelize.keys(fileUrlTemplates);
	  reducers.fileUrlTemplates = function (state) {
	    return fileUrlTemplates;
	  };

	  modelTypes = _utils.camelize.keys(modelTypes);
	  reducers.modelTypes = function (state) {
	    return modelTypes;
	  };

	  return reducers;
	}

	function watchCollections(fileCollections, dispatch) {
	  Object.keys(fileCollections).forEach(function (collectionName) {
	    (0, _collections.watch)({
	      collection: fileCollections[collectionName],
	      collectionName: (0, _utils.camelize)(collectionName),
	      dispatch: dispatch,

	      attributes: ['id', 'basename', 'variants', 'is_ready', 'parent_file_id', 'parent_file_model_type', 'width', 'height'],
	      includeConfiguration: true
	    });
	  });
	}

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.createSaga = createSaga;
	exports.watch = watch;

	var _reducer = __webpack_require__(447);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _actions = __webpack_require__(301);

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { settings: _reducer2.default };

	function createSaga(model) {
	  return regeneratorRuntime.mark(function saga() {
	    return regeneratorRuntime.wrap(function saga$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return (0, _reduxSaga.takeEvery)(_actions.UPDATE, regeneratorRuntime.mark(function _callee(action) {
	              return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                  switch (_context.prev = _context.next) {
	                    case 0:
	                      _context.next = 2;
	                      return (0, _effects.call)([model, model.set], action.payload.property, action.payload.value);

	                    case 2:
	                    case 'end':
	                      return _context.stop();
	                  }
	                }
	              }, _callee, this);
	            }));

	          case 2:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, saga, this);
	  });
	}

	function watch(model, dispatch) {
	  dispatch((0, _actions.load)({ settings: model.toJSON() }));
	  model.on('change', function () {
	    return dispatch((0, _actions.load)({ settings: model.toJSON() }));
	  });
	}

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.LOAD:
	      return action.payload.settings;

	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(301);

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.initFromSeed = initFromSeed;

	var _actions = __webpack_require__(449);

	var _reducer = __webpack_require__(450);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { i18n: _reducer2.default };

	function initFromSeed(_ref, dispatch) {
	  var locale = _ref.locale;

	  dispatch((0, _actions.init)({ locale: locale }));
	}

/***/ },
/* 449 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	var INIT = exports.INIT = 'I18N_INIT';

	function init(_ref) {
	  var locale = _ref.locale;

	  return {
	    type: INIT,
	    payload: {
	      locale: locale
	    }
	  };
	}

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.INIT:
	      return { locale: action.payload.locale };
	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(449);

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.initFromSeed = initFromSeed;

	var _actions = __webpack_require__(452);

	var _reducer = __webpack_require__(453);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { entry: _reducer2.default };

	function initFromSeed(_ref, dispatch) {
	  var slug = _ref.slug;

	  dispatch((0, _actions.init)({ slug: slug }));
	}

/***/ },
/* 452 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	var INIT = exports.INIT = 'ENTRY_INIT';

	function init(_ref) {
	  var slug = _ref.slug;

	  return {
	    type: INIT,
	    payload: {
	      slug: slug
	    }
	  };
	}

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.INIT:
	      return { slug: action.payload.slug };
	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(452);

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.watchEvents = watchEvents;

	var _keyCodes = __webpack_require__(418);

	var _actions = __webpack_require__(455);

	function watchEvents(window, store) {
	  window.addEventListener('keydown', function (event) {
	    var currentPageId = store.getState().currentPageId;

	    if (event.keyCode == _keyCodes.SPACE) {
	      store.dispatch((0, _actions.space)({ currentPageId: currentPageId }));
	    } else if (event.keyCode == _keyCodes.TAB) {
	      store.dispatch((0, _actions.tab)({ currentPageId: currentPageId }));
	    }
	  });
	}

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HOTKEY_TAB = exports.HOTKEY_SPACE = undefined;
	exports.space = space;
	exports.tab = tab;

	var _actions = __webpack_require__(300);

	var HOTKEY_SPACE = exports.HOTKEY_SPACE = 'HOTKEY_SPACE';
	var HOTKEY_TAB = exports.HOTKEY_TAB = 'HOTKEY_TAB';

	function space(_ref) {
	  var currentPageId = _ref.currentPageId;

	  return (0, _actions.pageAction)(HOTKEY_SPACE, currentPageId);
	}

	function tab(_ref2) {
	  var currentPageId = _ref2.currentPageId;

	  return (0, _actions.pageAction)(HOTKEY_TAB, currentPageId);
	}

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducers = undefined;
	exports.createWidgetType = createWidgetType;
	exports.watch = watch;

	var _reducer = __webpack_require__(457);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reactDom = __webpack_require__(381);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(359);

	var _actions = __webpack_require__(458);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = { widgets: _reducer2.default };

	function createWidgetType(Component, store) {
	  return {
	    enhance: function enhance(element) {
	      _reactDom2.default.render(React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(Component, null)
	      ), element[0]);
	    }
	  };
	}

	function watch(events, widgets, dispatch) {
	  function update() {
	    dispatch((0, _actions.load)({
	      widgets: {
	        classicPlayerControls: widgets.isPresent('classic_player_controls'),
	        slimPlayerControls: widgets.isPresent('slim_player_controls')
	      }
	    }));
	  }

	  events.on('widgets:update', update);
	  update();
	}

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.LOAD:
	      return action.payload.widgets;

	    default:
	      return state;
	  }
	};

	var _actions = __webpack_require__(458);

/***/ },
/* 458 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load = load;
	var LOAD = exports.LOAD = 'WIDGETS_LOAD';

	function load(_ref) {
	  var widgets = _ref.widgets;

	  return {
	    type: LOAD,
	    payload: {
	      widgets: widgets
	    }
	  };
	}

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.register = register;

	var _audio = __webpack_require__(460);

	var _plain = __webpack_require__(498);

	var _video = __webpack_require__(499);

	function register() {
	  (0, _plain.register)();
	  (0, _video.register)();
	  (0, _audio.register)();
	}

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.register = register;

	var _media = __webpack_require__(461);

	var _PageAudioFilePlayer = __webpack_require__(496);

	var _PageAudioFilePlayer2 = _interopRequireDefault(_PageAudioFilePlayer);

	var _registerPageType = __webpack_require__(431);

	var _registerPageType2 = _interopRequireDefault(_registerPageType);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(465);

	var _selectors2 = __webpack_require__(337);

	var _selectors3 = __webpack_require__(429);

	var _selectors4 = __webpack_require__(393);

	var _redux = __webpack_require__(313);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AudioPage(props) {
	  return React.createElement(
	    _media.Page,
	    { className: 'audioPage',
	      page: props.page,
	      file: props.audioFile,
	      playerState: props.playerState,
	      playerActions: props.playerActions,
	      controlBarText: props.t('pageflow.public.start_audio') },
	    React.createElement(_media.PageBackgroundAsset, null),
	    React.createElement(_PageAudioFilePlayer2.default, { file: props.audioFile,
	      playerState: props.playerState,
	      playerActions: props.playerActions })
	  );
	}

	function register() {
	  (0, _registerPageType2.default)('audio', {

	    component: (0, _pages.connectInPage)((0, _utils.combine)({
	      page: (0, _selectors2.pageAttributes)(),
	      audioFile: (0, _selectors4.file)('audioFiles', { id: (0, _selectors2.pageAttribute)('audioFileId') }),
	      playerState: _selectors.playerState,
	      t: _selectors3.t
	    }), (0, _utils.combine)({
	      playerActions: _selectors.playerActions
	    }))(AudioPage),

	    reducer: (0, _redux.combineReducers)(_extends({}, _media.pageReducers)),

	    saga: regeneratorRuntime.mark(function saga() {
	      return regeneratorRuntime.wrap(function saga$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return [(0, _media.pageSaga)()];

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, saga, this);
	    })

	  });
	}

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pageSaga = exports.PageBackground = exports.PageBackgroundAsset = exports.PageBackgroundVideo = exports.PageVideoPlayer = exports.Page = exports.pageReducers = undefined;

	var _Page = __webpack_require__(462);

	var _Page2 = _interopRequireDefault(_Page);

	var _PageVideoPlayer = __webpack_require__(469);

	var _PageVideoPlayer2 = _interopRequireDefault(_PageVideoPlayer);

	var _PageBackgroundVideo = __webpack_require__(483);

	var _PageBackgroundVideo2 = _interopRequireDefault(_PageBackgroundVideo);

	var _PageBackgroundAsset = __webpack_require__(484);

	var _PageBackgroundAsset2 = _interopRequireDefault(_PageBackgroundAsset);

	var _PageBackground = __webpack_require__(485);

	var _PageBackground2 = _interopRequireDefault(_PageBackground);

	var _reducer = __webpack_require__(486);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _sagas = __webpack_require__(487);

	var _sagas2 = _interopRequireDefault(_sagas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pageReducers = exports.pageReducers = { media: _reducer2.default };

	exports.Page = _Page2.default;
	exports.PageVideoPlayer = _PageVideoPlayer2.default;
	exports.PageBackgroundVideo = _PageBackgroundVideo2.default;
	exports.PageBackgroundAsset = _PageBackgroundAsset2.default;
	exports.PageBackground = _PageBackground2.default;
	exports.pageSaga = _sagas2.default;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaPage = MediaPage;

	var _components = __webpack_require__(302);

	var _PlayerControls = __webpack_require__(463);

	var _PlayerControls2 = _interopRequireDefault(_PlayerControls);

	var _NonJsLinks = __webpack_require__(467);

	var _NonJsLinks2 = _interopRequireDefault(_NonJsLinks);

	var _playerStateClassNames = __webpack_require__(464);

	var _playerStateClassNames2 = _interopRequireDefault(_playerStateClassNames);

	var _utils = __webpack_require__(372);

	var _selectors = __webpack_require__(390);

	var _selectors2 = __webpack_require__(465);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MediaPage(props) {
	  var page = props.page;
	  var playerState = props.playerState;

	  var infoBox = {
	    title: page.additionalTitle,
	    description: page.additionalDescription
	  };

	  return React.createElement(
	    _components.PageWrapper,
	    { className: pageWraperClassName(props.className, page, props.textTracks, playerState) },
	    React.createElement(
	      _components.PageBackground,
	      null,
	      props.children,
	      React.createElement(_components.PageShadow, { page: page, className: (0, _playerStateClassNames2.default)(playerState) })
	    ),
	    React.createElement(
	      _components.PageForeground,
	      { onInteraction: function onInteraction() {
	          return playerState.userIsIdle && props.playerActions.userInteraction();
	        },
	        classNames: (0, _playerStateClassNames2.default)(playerState) },
	      React.createElement(_PlayerControls2.default, { file: props.file,
	        textTracks: props.textTracks,
	        playerState: playerState,
	        playerActions: props.playerActions,
	        qualities: props.qualities,
	        controlBarText: props.controlBarText,
	        infoBox: infoBox }),
	      React.createElement(
	        _components.PageScroller,
	        { className: (0, _playerStateClassNames2.default)(playerState) },
	        React.createElement(_components.PageHeader, { page: page }),
	        React.createElement(
	          _components.PageText,
	          { page: page },
	          React.createElement(_NonJsLinks2.default, { file: props.file })
	        )
	      )
	    )
	  );
	}

	exports.default = (0, _reactRedux.connect)((0, _utils.combine)({
	  textTracks: (0, _selectors2.textTracks)({
	    file: (0, _selectors.prop)('file'),
	    defaultTextTrackFileId: (0, _selectors.prop)('page.defaultTextTrackFileId')
	  })
	}))(MediaPage);


	function pageWraperClassName(className, page, textTracks, playerState) {
	  return (0, _classnames2.default)(className, {
	    'has_text_tracks': !!textTracks.activeFileId,
	    'is_idle': playerState.isPlaying && playerState.userIsIdle,
	    // TODO: handle playerState.focusInsideControls
	    'is_control_bar_hovered': playerState.userHoveringControls,
	    'is_control_bar_hidden': playerState.controlsHidden,
	    'unplayed': !playerState.hasPlayed && !page.autoplay,
	    'has_played': playerState.hasPlayed
	  });
	}

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.MediaPlayerControls = MediaPlayerControls;

	var _playerStateClassNames = __webpack_require__(464);

	var _playerStateClassNames2 = _interopRequireDefault(_playerStateClassNames);

	var _PlayerControls = __webpack_require__(398);

	var _PlayerControls2 = _interopRequireDefault(_PlayerControls);

	var _utils = __webpack_require__(372);

	var _selectors = __webpack_require__(465);

	var _selectors2 = __webpack_require__(429);

	var _actions = __webpack_require__(466);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MediaPlayerControls(props) {
	  var actions = props.playerActions;
	  var playerState = props.playerState;

	  var onTextTracksMenuItemClick = function onTextTracksMenuItemClick(value) {
	    if (value == 'off') {
	      props.updateTextTrackSettings({
	        kind: 'off'
	      });
	    } else {
	      props.updateTextTrackSettings(props.textTracks.files.find(function (textTrackFile) {
	        return textTrackFile.id == value;
	      }));
	    }
	  };

	  return _react2.default.createElement(_PlayerControls2.default, _extends({ hasProgress: true,
	    controlBarText: props.controlBarText,

	    isLoading: playerState.isLoading,
	    isPlaying: playerState.shouldPlay,
	    currentTime: playerState.currentTime,
	    duration: playerState.duration,
	    isScrubbing: playerState.isScrubbing,
	    isSeeking: playerState.isSeeking,

	    onPlayButtonClick: actions.togglePlaying,
	    onSeekStart: actions.scrubbingStarted,
	    onSeek: actions.seekTo,
	    onSeekEnd: actions.scrubbingEnded,

	    onMouseEnter: actions.controlsEntered,
	    onMouseLeave: actions.controlsLeft,
	    onFocus: actions.focusEnteredControls,
	    onBlur: actions.focusLeftControls,

	    qualityMenuItems: qualityMenuItems(props.qualities, props.file, props.activeQuality, props.t),

	    qualityMenuButtonTitle: props.t('pageflow.public.media_quality'),
	    onQualityMenuItemClick: props.updateVideoQualitySetting,

	    textTracksMenuItems: textTracksMenuItems(props.textTracks, props.t),
	    textTracksMenuButtonTitle: props.t('pageflow.public.text_tracks'),
	    onTextTracksMenuItemClick: onTextTracksMenuItemClick

	  }, props, {

	    className: className(playerState) }));
	}

	MediaPlayerControls.defaultProps = {
	  qualities: [],
	  textTracks: {
	    files: []
	  }
	};

	exports.default = (0, _reactRedux.connect)((0, _utils.combine)({
	  activeQuality: (0, _selectors.videoQualitySetting)(),
	  t: _selectors2.t
	}), {
	  updateTextTrackSettings: _actions.updateTextTrackSettings,
	  updateVideoQualitySetting: _actions.updateVideoQualitySetting
	})(MediaPlayerControls);


	function className(playerState) {
	  return (0, _classnames2.default)((0, _playerStateClassNames2.default)(playerState), { 'has_been_faded': playerState.userHasBeenIdle });
	}

	function textTracksMenuItems(textTracks, t) {
	  var offItem = {
	    value: 'off',
	    label: t('pageflow.public.text_track_modes.none'),
	    active: textTracks.mode == 'off'
	  };

	  var autoItem = {
	    value: 'auto',
	    label: t('pageflow.public.text_track_modes.auto'),
	    active: textTracks.mode == 'auto'
	  };

	  return [autoItem, offItem].concat(textTracks.files.map(function (textTrackFile) {
	    return {
	      value: textTrackFile.id,
	      label: textTrackFile.displayLabel,
	      annotation: textTrackFile.isDefault ? t('pageflow.public.text_track_modes.auto_annotation') : '',
	      active: textTracks.mode == 'user' && textTrackFile.id == textTracks.activeFileId
	    };
	  }));
	}

	function qualityMenuItems(qualities, videoFile, activeQuality, t) {
	  activeQuality = activeQuality || 'auto';

	  return availableQualities(qualities, videoFile).map(function (value) {
	    return {
	      value: value,
	      label: t('pageflow.public.video_qualities.labels.' + value),
	      annotation: t('pageflow.public.video_qualities.annotations.' + value, { defaultValue: '' }),
	      active: value == activeQuality
	    };
	  });
	}

	function availableQualities(qualities, videoFile) {
	  if (!videoFile) {
	    return [];
	  }

	  return qualities.filter(function (quality) {
	    return !!videoFile.urls[quality] || quality == 'auto';
	  });
	}

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (playerState) {
	  return (0, _classnames2.default)({
	    'is_playing': playerState.isPlaying,
	    'is_playing_delayed': playerState.hasBeenPlayingJustNow,
	    'is_paused': !playerState.isPlaying
	  });
	};

	var _classnames = __webpack_require__(305);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.playerState = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.playerActions = playerActions;
	exports.textTracks = textTracks;
	exports.videoQualitySetting = videoQualitySetting;

	var _actions = __webpack_require__(466);

	var actions = _interopRequireWildcard(_actions);

	var _selectors = __webpack_require__(393);

	var _selectors2 = __webpack_require__(337);

	var _selectors3 = __webpack_require__(430);

	var _selectors4 = __webpack_require__(429);

	var _redux = __webpack_require__(313);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var playerState = exports.playerState = (0, _selectors2.pageState)('media');

	function playerActions(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}

	function textTracks(_ref) {
	  var file = _ref.file,
	      _ref$defaultTextTrack = _ref.defaultTextTrackFileId,
	      defaultTextTrackFileId = _ref$defaultTextTrack === undefined ? function () {} : _ref$defaultTextTrack;

	  var settingsSelector = (0, _selectors3.setting)({ property: 'textTrack' });
	  var filesSelector = (0, _selectors.nestedFiles)('textTrackFiles', {
	    parent: file
	  });

	  return function (state, props) {
	    var settings = settingsSelector(state, props) || {};
	    var files = filesSelector(state, props);
	    var translate = (0, _selectors4.t)(state, props);
	    var defaultId = defaultTextTrackFileId(state, props);

	    return {
	      files: files.map(function (textTrackFile) {
	        return _extends({
	          displayLabel: displayLabel(textTrackFile, translate),
	          isDefault: defaultId && textTrackFile.id == defaultId
	        }, textTrackFile);
	      }).sort(function (file1, file2) {
	        return file1.displayLabel.localeCompare(file2.displayLabel);
	      }),
	      activeFileId: getActiveTextTrackFileId(files, defaultId, settings),
	      mode: settings.kind == 'off' ? 'off' : settings.kind ? 'user' : 'auto'
	    };
	  };
	}

	function displayLabel(textTrackFile, t) {
	  return textTrackFile.label || t('pageflow.public.languages.' + textTrackFile.srclang || 'unknown', { defaultValue: t('pageflow.public.languages.unknown') });
	}

	function getActiveTextTrackFileId(textTrackFiles, defaultTextTrackFileId, options) {
	  if (options.kind == 'off') {
	    return null;
	  }

	  var file = textTrackFiles.find(function (textTrackFile) {
	    return textTrackFile.srclang == options.srclang && textTrackFile.kind == options.kind;
	  });

	  if (file) {
	    return file.id;
	  }

	  if (defaultTextTrackFileId) {
	    var defaultTextTrackFile = textTrackFiles.find(function (textTrackFile) {
	      return textTrackFile.id == defaultTextTrackFileId;
	    });

	    return defaultTextTrackFile && defaultTextTrackFile.id;
	  }
	}

	function videoQualitySetting() {
	  return (0, _selectors3.setting)({ property: 'videoQuality' });
	}

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CONTROLS_HIDDEN = exports.FOCUS_LEFT_CONTROLS = exports.FOCUS_ENTERED_CONTROLS = exports.CONTROLS_LEFT = exports.CONTROLS_ENTERED = exports.USER_IDLE = exports.USER_INTERACTION = exports.HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT = exports.WAITING = exports.SEEKED = exports.SEEKING = exports.ENDED = exports.TIME_UPDATE = exports.PAUSED = exports.PLAYING = exports.META_DATA_LOADED = exports.BUFFER_UNDERRUN = exports.ABORT_PREBUFFERING = exports.PREBUFFERED = exports.PREBUFFER = exports.SCRUBBING_ENDED = exports.SCRUBBING_STARTED = exports.SEEK_TO = exports.FADE_OUT_AND_PAUSE = exports.PAUSE = exports.PLAY_AND_FADE_IN = exports.PLAY = exports.TOGGLE_PLAYING = undefined;
	exports.togglePlaying = togglePlaying;
	exports.play = play;
	exports.playAndFadeIn = playAndFadeIn;
	exports.pause = pause;
	exports.fadeOutAndPause = fadeOutAndPause;
	exports.seekTo = seekTo;
	exports.prebuffer = prebuffer;
	exports.prebuffered = prebuffered;
	exports.abortPrebuffering = abortPrebuffering;
	exports.bufferUnderrun = bufferUnderrun;
	exports.scrubbingStarted = scrubbingStarted;
	exports.scrubbingEnded = scrubbingEnded;
	exports.playing = playing;
	exports.paused = paused;
	exports.timeUpdate = timeUpdate;
	exports.metaDataLoaded = metaDataLoaded;
	exports.ended = ended;
	exports.seeking = seeking;
	exports.seeked = seeked;
	exports.waiting = waiting;
	exports.hasNotBeenPlayingForAMoment = hasNotBeenPlayingForAMoment;
	exports.userInteraction = userInteraction;
	exports.userIdle = userIdle;
	exports.controlsEntered = controlsEntered;
	exports.controlsLeft = controlsLeft;
	exports.focusEnteredControls = focusEnteredControls;
	exports.focusLeftControls = focusLeftControls;
	exports.controlsHidden = controlsHidden;
	exports.updateTextTrackSettings = updateTextTrackSettings;
	exports.updateVideoQualitySetting = updateVideoQualitySetting;

	var _actions = __webpack_require__(301);

	var TOGGLE_PLAYING = exports.TOGGLE_PLAYING = 'MEDIA_TOGGLE_PLAYING';
	var PLAY = exports.PLAY = 'MEDIA_PLAY';
	var PLAY_AND_FADE_IN = exports.PLAY_AND_FADE_IN = 'MEDIA_PLAY_AND_FADE_IN';
	var PAUSE = exports.PAUSE = 'MEDIA_PAUSE';
	var FADE_OUT_AND_PAUSE = exports.FADE_OUT_AND_PAUSE = 'MEDIA_FADE_OUT_AND_PAUSE';
	var SEEK_TO = exports.SEEK_TO = 'MEDIA_SEEK_TO';

	var SCRUBBING_STARTED = exports.SCRUBBING_STARTED = 'MEDIA_SCRUBBING_STARTED';
	var SCRUBBING_ENDED = exports.SCRUBBING_ENDED = 'MEDIA_SCRUBBING_ENDED';

	var PREBUFFER = exports.PREBUFFER = 'MEDIA_PREBUFFER';
	var PREBUFFERED = exports.PREBUFFERED = 'MEDIA_PREBUFFERED';
	var ABORT_PREBUFFERING = exports.ABORT_PREBUFFERING = 'MEDIA_ABORT_PREBUFFERING';

	var BUFFER_UNDERRUN = exports.BUFFER_UNDERRUN = 'MEDIA_BUFFER_UNDERRUN';

	var META_DATA_LOADED = exports.META_DATA_LOADED = 'MEDIA_META_DATA_LOADED';
	var PLAYING = exports.PLAYING = 'MEDIA_PLAYING';
	var PAUSED = exports.PAUSED = 'MEDIA_PAUSED';
	var TIME_UPDATE = exports.TIME_UPDATE = 'MEDIA_TIME_UPDATE';
	var ENDED = exports.ENDED = 'MEDIA_ENDED';

	var SEEKING = exports.SEEKING = 'MEDIA_SEEKING';
	var SEEKED = exports.SEEKED = 'MEDIA_SEEKED';
	var WAITING = exports.WAITING = 'MEDIA_WAITING';

	var HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT = exports.HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT = 'MEDIA_HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT';

	var USER_INTERACTION = exports.USER_INTERACTION = 'MEDIA_USER_INTERACTION';
	var USER_IDLE = exports.USER_IDLE = 'MEDIA_USER_IDLE';

	var CONTROLS_ENTERED = exports.CONTROLS_ENTERED = 'MEDIA_CONTROLS_ENTERED';
	var CONTROLS_LEFT = exports.CONTROLS_LEFT = 'MEDIA_CONTROLS_LEFT';
	var FOCUS_ENTERED_CONTROLS = exports.FOCUS_ENTERED_CONTROLS = 'MEDIA_FOCUS_ENTERED_CONTROLS';
	var FOCUS_LEFT_CONTROLS = exports.FOCUS_LEFT_CONTROLS = 'MEDIA_FOCUS_LEFT_CONTROLS';
	var CONTROLS_HIDDEN = exports.CONTROLS_HIDDEN = 'MEDIA_CONTROLS_HIDDEN';

	function togglePlaying() {
	  return pageAction(TOGGLE_PLAYING);
	}

	function play() {
	  return pageAction(PLAY);
	}

	function playAndFadeIn(_ref) {
	  var fadeDuration = _ref.fadeDuration;

	  return pageAction(PLAY_AND_FADE_IN, {
	    fadeDuration: fadeDuration
	  });
	}

	function pause() {
	  return pageAction(PAUSE);
	}

	function fadeOutAndPause(_ref2) {
	  var fadeDuration = _ref2.fadeDuration;

	  return pageAction(FADE_OUT_AND_PAUSE, {
	    fadeDuration: fadeDuration
	  });
	}

	function seekTo(time) {
	  return pageAction(SEEK_TO, {
	    time: time
	  });
	}

	function prebuffer() {
	  return pageAction(PREBUFFER);
	}

	function prebuffered() {
	  return pageAction(PREBUFFERED);
	}

	function abortPrebuffering() {
	  return pageAction(ABORT_PREBUFFERING);
	}

	function bufferUnderrun() {
	  return pageAction(BUFFER_UNDERRUN);
	}

	function scrubbingStarted() {
	  return pageAction(SCRUBBING_STARTED);
	}

	function scrubbingEnded() {
	  return pageAction(SCRUBBING_STARTED);
	}

	function playing() {
	  return pageAction(PLAYING);
	}

	function paused() {
	  return pageAction(PAUSED);
	}

	function timeUpdate(_ref3) {
	  var currentTime = _ref3.currentTime;

	  return pageAction(TIME_UPDATE, {
	    currentTime: currentTime
	  });
	}

	function metaDataLoaded(_ref4) {
	  var duration = _ref4.duration;

	  return pageAction(META_DATA_LOADED, {
	    duration: duration
	  });
	}

	function ended() {
	  return pageAction(ENDED);
	}

	function seeking() {
	  return pageAction(SEEKING);
	}

	function seeked() {
	  return pageAction(SEEKED);
	}

	function waiting() {
	  return pageAction(WAITING);
	}

	function hasNotBeenPlayingForAMoment(value) {
	  return pageAction(HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT);
	}

	function userInteraction() {
	  return pageAction(USER_INTERACTION);
	}

	function userIdle() {
	  return pageAction(USER_IDLE);
	}

	function controlsEntered() {
	  return pageAction(CONTROLS_ENTERED);
	}

	function controlsLeft() {
	  return pageAction(CONTROLS_LEFT);
	}

	function focusEnteredControls() {
	  return pageAction(FOCUS_ENTERED_CONTROLS);
	}

	function focusLeftControls() {
	  return pageAction(FOCUS_LEFT_CONTROLS);
	}

	function controlsHidden() {
	  return pageAction(CONTROLS_HIDDEN);
	}

	function updateTextTrackSettings(textTrack) {
	  return (0, _actions.update)({
	    property: 'textTrack',
	    value: textTrack ? {
	      srclang: textTrack.srclang,
	      kind: textTrack.kind
	    } : {}
	  });
	}

	function updateVideoQualitySetting(value) {
	  return (0, _actions.update)({
	    property: 'videoQuality',
	    value: value
	  });
	}

	function pageAction(type) {
	  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return {
	    type: type,
	    meta: {
	      collectionName: 'pages'
	    },
	    payload: payload
	  };
	}

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NonJsLinks = NonJsLinks;

	var _utils = __webpack_require__(372);

	var _selectors = __webpack_require__(429);

	var _selectors2 = __webpack_require__(468);

	var _reactRedux = __webpack_require__(359);

	function NonJsLinks(props) {
	  if (!props.file) {
	    return React.createElement('noscript', null);
	  }

	  return React.createElement(
	    'p',
	    { className: 'non_js_video' },
	    React.createElement(
	      'a',
	      { href: url(props), target: '_blank' },
	      text(props)
	    )
	  );
	}

	function url(_ref) {
	  var entrySlug = _ref.entrySlug,
	      file = _ref.file;

	  var type = file.collectionName == 'videoFiles' ? 'videos' : 'audio';
	  return '/' + entrySlug + '/' + type + '/' + file.id;
	}

	function text(_ref2) {
	  var file = _ref2.file,
	      t = _ref2.t;

	  var type = file.collectionName == 'videoFiles' ? 'video' : 'audio';
	  return t('pageflow.public.open_' + type);
	}

	exports.default = (0, _reactRedux.connect)((0, _utils.combine)({
	  t: _selectors.t,
	  entrySlug: (0, _selectors2.entryAttribute)('slug')
	}))(NonJsLinks);

/***/ },
/* 468 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.entryAttribute = entryAttribute;
	function entryAttribute(name) {
	  return function (state) {
	    return state.entry[name];
	  };
	}

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PageVideoPlayer;

	var _VideoFilePlayer = __webpack_require__(470);

	var _VideoFilePlayer2 = _interopRequireDefault(_VideoFilePlayer);

	var _createPageFilePlayer = __webpack_require__(482);

	var _createPageFilePlayer2 = _interopRequireDefault(_createPageFilePlayer);

	var _selectors = __webpack_require__(393);

	var _selectors2 = __webpack_require__(425);

	var _utils = __webpack_require__(372);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoPlayer = (0, _reactRedux.connect)((0, _utils.combine)({
	  file: (0, _selectors.file)('videoFiles', { id: (0, _selectors2.prop)('videoFileId') }),
	  posterImageFile: (0, _selectors.file)('imageFiles', { id: (0, _selectors2.prop)('posterImageFileId') })
	}))((0, _createPageFilePlayer2.default)(_VideoFilePlayer2.default));

	function PageVideoPlayer(props) {
	  var page = props.page;
	  var property = props.videoPropertyBaseName;

	  return React.createElement(VideoPlayer, { videoFileId: page[property + 'Id'],
	    posterImageFileId: page.posterImageId,
	    playerState: props.playerState,
	    playerActions: props.playerActions,
	    fit: props.fit,
	    position: [page[property + 'X'], page[property + 'Y']],
	    textTracksEnabled: props.textTracksEnabled,
	    loop: props.loop });
	}

	PageVideoPlayer.defaultProps = {
	  videoPropertyBaseName: 'videoFile',
	  fit: 'smart_contain'
	};

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (props) {
	  return React.createElement(
	    _Positioner2.default,
	    { videoFile: props.file, fit: props.fit, position: props.position },
	    React.createElement(VideoFilePlayer, { file: props.file,
	      posterImageFile: props.posterImageFile,
	      playerState: props.playerState,
	      playerActions: props.playerActions,
	      atmoDuringPlayback: props.atmoDuringPlayback,
	      defaultTextTrackFileId: props.defaultTextTrackFileId,
	      textTracksEnabled: props.textTracksEnabled,
	      loop: props.loop })
	  );
	};

	var _createFilePlayer = __webpack_require__(471);

	var _createFilePlayer2 = _interopRequireDefault(_createFilePlayer);

	var _Positioner = __webpack_require__(478);

	var _Positioner2 = _interopRequireDefault(_Positioner);

	var _sources = __webpack_require__(481);

	var _sources2 = _interopRequireDefault(_sources);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoFilePlayer = (0, _createFilePlayer2.default)({
	  tagName: 'video',
	  sources: _sources2.default,
	  poster: function poster(videoFile, posterImageFile) {
	    return posterImageFile ? posterImageFile.urls.large : videoFile.urls['poster_large'];
	  }
	});

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (_ref) {
	  var tagName = _ref.tagName,
	      sources = _ref.sources,
	      _ref$poster = _ref.poster,
	      poster = _ref$poster === undefined ? function () {} : _ref$poster,
	      _ref$emulateTextTrack = _ref.emulateTextTracksDisplay,
	      emulateTextTracksDisplay = _ref$emulateTextTrack === undefined ? false : _ref$emulateTextTrack,
	      _ref$createPlayer = _ref.createPlayer,
	      createPlayer = _ref$createPlayer === undefined ? _createPageflowPlayer2.default : _ref$createPlayer;

	  var FilePlayer = function (_React$Component) {
	    _inherits(FilePlayer, _React$Component);

	    function FilePlayer(props, context) {
	      _classCallCheck(this, FilePlayer);

	      var _this = _possibleConstructorReturn(this, (FilePlayer.__proto__ || Object.getPrototypeOf(FilePlayer)).call(this, props, context));

	      _this.updateAtmoSettings();

	      _this.setupMediaTag = function (element) {
	        _this.player = createPlayer(element, {
	          emulateTextTracksDisplay: emulateTextTracksDisplay,
	          atmoSettings: _this.atmoSettings,
	          mediaContext: _this.context.mediaContext
	        });

	        if (_this.props.playerState.currentTime > 0) {
	          _this.player.currentTime(_this.props.playerState.currentTime);
	        }

	        if (_this.props.playerState.isPlaying) {
	          _this.player.play();
	        }

	        (0, _watchPlayer2.default)(_this.player, _this.props.playerActions);
	        (0, _textTracks.updateTextTrackModes)(_this.player, _this.props.textTracks.activeFileId);
	        (0, _textTracks.updateTextTrackPosition)(_this.player, _this.props.textTrackPosition);
	      };

	      _this.disposeMediaTag = function () {
	        _this.player.dispose();
	        _this.player = null;
	      };
	      return _this;
	    }

	    _createClass(FilePlayer, [{
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate(prevProps) {
	        if (!this.player) {
	          return;
	        }

	        (0, _handlePlayStatePropChanges2.default)(this.player, prevProps.playerState, this.props.playerState, this.props.playerActions);

	        if (prevProps.textTrackPosition !== this.props.textTrackPosition) {
	          (0, _textTracks.updateTextTrackPosition)(this.player, this.props.textTrackPosition);
	        }

	        (0, _textTracks.updateTextTrackModes)(this.player, this.props.textTracks.activeFileId);
	        this.updateAtmoSettings();
	      }
	    }, {
	      key: 'updateAtmoSettings',
	      value: function updateAtmoSettings() {
	        this.atmoSettings = this.atmoSettings || {};
	        this.atmoSettings['atmo_during_playback'] = this.props.atmoDuringPlayback;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(_MediaTag2.default, { tagName: tagName,

	          sources: sources(this.props.file, this.props.quality),
	          tracks: (0, _textTracks.textTracksFromFiles)(this.props.textTracks.files, this.props.textTracksEnabled),
	          poster: poster(this.props.file, this.props.posterImageFile),
	          loop: this.props.loop,

	          onSetup: this.setupMediaTag,
	          onDispose: this.disposeMediaTag });
	      }
	    }]);

	    return FilePlayer;
	  }(_react2.default.Component);

	  FilePlayer.contextTypes = {
	    mediaContext: _react2.default.PropTypes.object
	  };

	  FilePlayer.defaultProps = {
	    textTracksEnabled: true,
	    textTracks: {
	      files: []
	    }
	  };

	  FilePlayer.propTypes = {
	    file: _react2.default.PropTypes.object.isRequired
	  };

	  var result = (0, _reactRedux.connect)((0, _utils.combine)({
	    textTracks: (0, _selectors.textTracks)({
	      file: (0, _selectors4.prop)('file'),
	      defaultTextTrackFileId: (0, _selectors4.prop)('defaultTextTrackFileId')
	    }),
	    quality: (0, _selectors2.setting)({ property: 'videoQuality' }),
	    textTrackPosition: textTrackPosition
	  }))(FilePlayer);

	  result.WrappedComponent = FilePlayer;

	  return result;
	};

	var _MediaTag = __webpack_require__(472);

	var _MediaTag2 = _interopRequireDefault(_MediaTag);

	var _createPageflowPlayer = __webpack_require__(473);

	var _createPageflowPlayer2 = _interopRequireDefault(_createPageflowPlayer);

	var _watchPlayer = __webpack_require__(474);

	var _watchPlayer2 = _interopRequireDefault(_watchPlayer);

	var _handlePlayStatePropChanges = __webpack_require__(475);

	var _handlePlayStatePropChanges2 = _interopRequireDefault(_handlePlayStatePropChanges);

	var _textTracks = __webpack_require__(476);

	var _selectors = __webpack_require__(465);

	var _selectors2 = __webpack_require__(430);

	var _selectors3 = __webpack_require__(477);

	var _selectors4 = __webpack_require__(425);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(372);

	var _reactRedux = __webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var classicPlayerControlsPresent = (0, _selectors3.widgetPresent)('classicPlayerControls');

	function textTrackPosition(state, _ref2) {
	  var playerState = _ref2.playerState;

	  if (classicPlayerControlsPresent(state) && !playerState.controlsHidden) {
	    return 'top';
	  }

	  return 'auto';
	}

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// This component acts as an isolation layer between React and
	// Video.js. During initialization, Video.js rearranges the DOM,
	// wraps the video tag into a div and adds further elements.
	//
	// While the original media tag could easily be built using React,
	// once the DOM has been changed, there is no secure way to update the
	// tag using React.
	//
	// To avoid this problem, this component allows re-rendering the
	// media tag while discarding all changes made by Video.js. This is
	// achieved by constructing the media tag as a detached DOM node and
	// replacing the inner HTML of the element.
	//
	// The `onSetup`/`onDispose` callback props can be used to
	// re-initialize Video.js on a fresh media tag.
	//
	// The component performs a deep comparison of its props to decide
	// whether the media tag has to be refreshed.
	var MediaTag = function (_React$Component) {
	  _inherits(MediaTag, _React$Component);

	  function MediaTag() {
	    _classCallCheck(this, MediaTag);

	    return _possibleConstructorReturn(this, (MediaTag.__proto__ || Object.getPrototypeOf(MediaTag)).apply(this, arguments));
	  }

	  _createClass(MediaTag, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement('div', { ref: function ref(element) {
	          return _this2.containerElement = element;
	        },
	        dangerouslySetInnerHTML: this.mediaTagHTML() });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return nextProps.tagName !== this.props.tagName || nextProps.poster !== this.props.poster || nextProps.loop !== this.props.loop || !deepEqual(nextProps.sources, this.props.sources) || !deepEqual(nextProps.tracks, this.props.tracks);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.triggerOnSetup();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      this.triggerOnDispose();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.triggerOnSetup();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.triggerOnDispose();
	    }
	  }, {
	    key: 'triggerOnSetup',
	    value: function triggerOnSetup() {
	      if (this.props.onSetup) {
	        this.props.onSetup(this.containerElement.firstElementChild);
	      }
	    }
	  }, {
	    key: 'triggerOnDispose',
	    value: function triggerOnDispose() {
	      if (this.props.onDispose) {
	        this.props.onDispose();
	      }
	    }
	  }, {
	    key: 'mediaTagHTML',
	    value: function mediaTagHTML() {
	      var wrapper = document.createElement('div');
	      var mediaElement = document.createElement(this.props.tagName);

	      mediaElement.setAttribute('preload', 'auto');
	      mediaElement.setAttribute('crossorigin', 'anonymous');

	      if (this.props.poster) {
	        mediaElement.setAttribute('poster', this.props.poster);
	      }

	      if (this.props.loop) {
	        mediaElement.setAttribute('loop', 'true');
	      }

	      this.props.sources.forEach(function (source) {
	        var sourceElement = document.createElement('source');

	        sourceElement.setAttribute('src', source.src);
	        sourceElement.setAttribute('type', source.type);

	        mediaElement.appendChild(sourceElement);
	      });

	      this.props.tracks.forEach(function (track) {
	        var trackElement = document.createElement('track');

	        trackElement.setAttribute('src', track.src);
	        trackElement.setAttribute('id', track.id);
	        trackElement.setAttribute('kind', track.kind);
	        trackElement.setAttribute('srclang', track.srclang);
	        trackElement.setAttribute('label', track.label);

	        mediaElement.appendChild(trackElement);
	      });

	      wrapper.appendChild(mediaElement);
	      return { __html: wrapper.innerHTML };
	    }
	  }]);

	  return MediaTag;
	}(_react2.default.Component);

	exports.default = MediaTag;


	MediaTag.defaultProps = {
	  tagName: 'video',
	  sources: [],
	  tracks: []
	};

	// This function assumes that that the parameters are arrays of
	// objects containing only skalar values. It is not a full deep
	// equality check, but  suffices for the use case.
	function deepEqual(a, b) {
	  if (a.length !== b.length) {
	    return false;
	  }

	  for (var i = 0; i < a.length; i++) {
	    var aItem = a[i];
	    var bItem = b[i];

	    if (Object.keys(aItem).length !== Object.keys(bItem).length) {
	      return false;
	    }

	    for (var key in aItem) {
	      if (aItem[key] !== bItem[key]) {
	        return false;
	      }
	    }
	  }

	  return true;
	}

/***/ },
/* 473 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPageflowPlayer;
	function createPageflowPlayer(element, _ref) {
	  var emulateTextTracksDisplay = _ref.emulateTextTracksDisplay,
	      atmoSettings = _ref.atmoSettings,
	      mediaContext = _ref.mediaContext;

	  var player = new pageflow.VideoPlayer(element, {
	    controlBar: false,
	    loadingSpinner: false,
	    bigPlayButton: false,
	    errorDisplay: false,
	    textTrackSettings: false,

	    html5: {
	      nativeCaptions: !emulateTextTracksDisplay
	    },

	    bufferUnderrunWaiting: true,

	    volumeFading: true,
	    hooks: pageflow.atmo.createMediaPlayerHooks(atmoSettings),

	    mediaEvents: true,
	    context: mediaContext
	  });

	  player.textTrackSettings = {
	    getValues: function getValues() {
	      return {};
	    }
	  };

	  player.addClass('video-js');
	  player.addClass('player');

	  return player;
	}

/***/ },
/* 474 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (player, actions) {
	  player.on('loadedmetadata', function () {
	    return actions.metaDataLoaded({
	      duration: player.duration()
	    });
	  });

	  player.on('play', actions.playing);
	  player.on('pause', actions.paused);
	  player.on('waiting', actions.waiting);
	  player.on('seeking', actions.seeking);
	  player.on('seeked', actions.seeked);
	  player.on('bufferunderrun', actions.bufferUnderrun);

	  player.on('timeupdate', function () {
	    return actions.timeUpdate({
	      currentTime: player.currentTime()
	    });
	  });

	  player.on('ended', actions.ended);
	};

/***/ },
/* 475 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handlePlayStatePropChanges;
	function handlePlayStatePropChanges(player, playerState, nextPlayerState, playerActions) {
	  if (!playerState.shouldPrebuffer && nextPlayerState.shouldPrebuffer) {
	    player.prebuffer().then(playerActions.prebuffered);
	  }

	  if (!playerState.shouldPlay && nextPlayerState.shouldPlay) {
	    if (nextPlayerState.fadeDuration) {
	      player.playAndFadeIn(nextPlayerState.fadeDuration);
	    } else {
	      player.play();
	    }
	  } else if (playerState.shouldPlay && !nextPlayerState.shouldPlay) {
	    if (nextPlayerState.fadeDuration) {
	      player.fadeOutAndPause(nextPlayerState.fadeDuration);
	    } else {
	      player.pause();
	    }
	  }

	  if (nextPlayerState.shouldSeekTo !== undefined && nextPlayerState.shouldSeekTo !== playerState.shouldSeekTo) {
	    player.currentTime(nextPlayerState.shouldSeekTo);
	  }
	}

/***/ },
/* 476 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateTextTrackModes = updateTextTrackModes;
	exports.updateTextTrackPosition = updateTextTrackPosition;
	exports.textTracksFromFiles = textTracksFromFiles;
	function updateTextTrackModes(player, activeTextTrackFileId) {
	  [].slice.call(player.textTracks()).forEach(function (textTrack) {
	    if (textTrack.id == 'text_track_file_' + activeTextTrackFileId) {
	      textTrack.mode = 'showing';
	    } else {
	      textTrack.mode = 'disabled';
	    }
	  });
	}

	function updateTextTrackPosition(player, position) {
	  if (position == 'top') {
	    updateCueLineSettings(player, 1);
	  } else {
	    updateCueLineSettings(player, 'auto');
	  }
	}

	function updateCueLineSettings(player, line) {
	  [].slice.call(player.textTracks()).forEach(function (textTrack) {
	    if (textTrack.mode == 'showing' && textTrack.cues) {
	      for (var i = 0; i < textTrack.cues.length; i++) {
	        textTrack.cues[i].line = line;
	      }
	    }
	  });
	}

	function textTracksFromFiles(textTrackFiles, textTracksEnabled) {
	  if (!textTracksEnabled) {
	    return [];
	  }

	  return textTrackFiles.map(function (textTrackFile) {
	    return {
	      id: 'text_track_file_' + textTrackFile.id,
	      kind: textTrackFile.kind,
	      label: textTrackFile.label,
	      srclang: textTrackFile.srclang,
	      src: textTrackFile.urls.original
	    };
	  });
	}

/***/ },
/* 477 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.widgetPresent = widgetPresent;
	function widgetPresent(typeName) {
	  return function (state) {
	    return state.widgets[typeName];
	  };
	}

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _getDimensions = __webpack_require__(479);

	var _getDimensions2 = _interopRequireDefault(_getDimensions);

	var _getCueOffsetClassName = __webpack_require__(480);

	var _getCueOffsetClassName2 = _interopRequireDefault(_getCueOffsetClassName);

	var _react = __webpack_require__(304);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Positioner = function (_React$Component) {
	  _inherits(Positioner, _React$Component);

	  function Positioner(props, state) {
	    _classCallCheck(this, Positioner);

	    var _this = _possibleConstructorReturn(this, (Positioner.__proto__ || Object.getPrototypeOf(Positioner)).call(this, props, state));

	    _this.state = {};

	    _this.bindWrapper = function (wrapper) {
	      _this.wrapper = wrapper;

	      if (wrapper) {
	        pageflow.events.on('resize', _this.measure);
	        _this.measure();
	      } else {
	        pageflow.events.off('resize', _this.measure);
	      }
	    };

	    _this.measure = function () {
	      _this.setState({
	        wrapperDimensions: {
	          width: _this.wrapper.clientWidth,
	          height: _this.wrapper.clientHeight
	        }
	      });
	    };
	    return _this;
	  }

	  _createClass(Positioner, [{
	    key: 'render',
	    value: function render() {
	      var dimensions = (0, _getDimensions2.default)(this.props.videoFile, this.props.fit, this.props.position, this.state.wrapperDimensions);

	      return _react2.default.createElement(
	        'div',
	        { ref: this.bindWrapper, className: 'videoWrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _getCueOffsetClassName2.default)(dimensions, this.state.wrapperDimensions),
	            style: style(dimensions) },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Positioner;
	}(_react2.default.Component);

	exports.default = Positioner;


	Positioner.propTypes = {
	  videoFile: _react2.default.PropTypes.object,
	  fit: _react2.default.PropTypes.oneOf(['contain', 'cover', 'smart_contain']),
	  position: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number)
	};

	function style(dimensions) {
	  return dimensions && _extends({
	    position: 'absolute'
	  }, dimensions);
	}

/***/ },
/* 479 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (videoFile, fit, position, wrapperDimensions) {
	  if (!wrapperDimensions || !wrapperDimensions.height || !fit || fit == 'contain') {
	    return;
	  }

	  var videoWidth = void 0,
	      videoHeight = void 0,
	      factor = void 0;

	  var videoRatio = videoFile.width / videoFile.height;
	  var wrapperRatio = wrapperDimensions.width / wrapperDimensions.height;

	  var scaleToFit = wrapperRatio > videoRatio ? 'width' : 'height';

	  if (scaleToFit == 'width') {
	    videoHeight = wrapperDimensions.height;
	    videoWidth = videoHeight * videoRatio;

	    factor = wrapperDimensions.width / videoWidth;
	  } else {
	    videoWidth = wrapperDimensions.width;
	    videoHeight = videoWidth / videoRatio;

	    factor = wrapperDimensions.height / videoHeight;
	  }

	  if (fit == 'smart_contain' && factor > 1.2) {
	    return;
	  }

	  var width = videoWidth * factor;
	  var height = videoHeight * factor;

	  var positionX = position[0] !== undefined && fit == 'cover' ? position[0] : 50;
	  var positionY = position[1] !== undefined && fit == 'cover' ? position[1] : 50;

	  return {
	    left: (wrapperDimensions.width - width) * positionX / 100,
	    top: (wrapperDimensions.height - height) * positionY / 100,
	    width: width,
	    height: height
	  };
	};

/***/ },
/* 480 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cueOffsetClassName;
	function cueOffsetClassName(dimensions, wrapperDimensions) {
	  if (!dimensions || !wrapperDimensions) {
	    return;
	  }

	  var sizeOfClippedBottomPart = Math.max(0, dimensions.height - wrapperDimensions.height + dimensions.top);

	  return "cue_offset cue_offset_" + Math.ceil(sizeOfClippedBottomPart / 10);
	}

/***/ },
/* 481 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (videoFile, quality) {
	  quality = quality || 'auto';

	  if (quality == 'auto') {
	    var result = [{
	      type: 'application/x-mpegURL',
	      src: videoFile.urls['hls-playlist'] + '?u=1'
	    }, {
	      type: 'video/mp4',
	      src: videoFile.urls.high + '?u=1'
	    }];

	    if (videoFile.urls['dash-playlist']) {
	      result = [{
	        type: 'application/dash+xml',
	        src: '' + videoFile.urls['dash-playlist']
	      }].concat(result);
	    }

	    return result;
	  } else {
	    if (!videoFile.urls[quality]) {
	      quality = 'high';
	    }

	    return [{
	      type: 'video/mp4',
	      src: videoFile.urls[quality] + '?u=1'
	    }];
	  }
	};

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (FilePlayer) {
	  function PageFilePlayer(props) {
	    if (props.file && props.file.isReady && props.pageIsPrepared) {
	      return React.createElement(FilePlayer, { file: props.file,
	        posterImageFile: props.posterImageFile,
	        playerState: props.playerState,
	        playerActions: props.playerActions,
	        atmoDuringPlayback: props.atmoDuringPlayback,
	        fit: props.fit,
	        position: props.position,
	        loop: props.loop,
	        defaultTextTrackFileId: props.defaultTextTrackFileId,
	        textTracksEnabled: props.textTracksEnabled });
	    } else {
	      return null;
	    }
	  }

	  return (0, _pages.connectInPage)((0, _utils.combine)({
	    pageIsPrepared: (0, _selectors.pageIsPrepared)(),
	    atmoDuringPlayback: (0, _selectors.pageAttribute)('atmoDuringPlayback'),
	    defaultTextTrackFileId: (0, _selectors.pageAttribute)('defaultTextTrackFileId')
	  }))(PageFilePlayer);
	};

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = PageBackgroundVideo;

	var _PageVideoPlayer = __webpack_require__(469);

	var _PageVideoPlayer2 = _interopRequireDefault(_PageVideoPlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PageBackgroundVideo(props) {
	  return React.createElement(_PageVideoPlayer2.default, _extends({ loop: true, fit: "cover", textTracksEnabled: false }, props));
	}

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageBackgroundAsset = PageBackgroundAsset;

	var _components = __webpack_require__(302);

	var _PageBackgroundVideo = __webpack_require__(483);

	var _PageBackgroundVideo2 = _interopRequireDefault(_PageBackgroundVideo);

	var _selectors = __webpack_require__(465);

	var _pages = __webpack_require__(310);

	var _selectors2 = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PageBackgroundAsset(_ref) {
	  var page = _ref.page,
	      playerState = _ref.playerState,
	      playerActions = _ref.playerActions;

	  if (page.backgroundType == 'video') {
	    return React.createElement(_PageBackgroundVideo2.default, { page: page,
	      playerState: playerState,
	      playerActions: playerActions });
	  } else {
	    return React.createElement(_components.PageBackgroundImage, { page: page });
	  }
	}

	exports.default = (0, _pages.connectInPage)((0, _utils.combine)({
	  page: (0, _selectors2.pageAttributes)(),
	  playerState: _selectors.playerState
	}), (0, _utils.combine)({
	  playerActions: _selectors.playerActions
	}))(PageBackgroundAsset);

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = MediaPageBackground;

	var _components = __webpack_require__(302);

	var _PageBackgroundAsset = __webpack_require__(484);

	var _PageBackgroundAsset2 = _interopRequireDefault(_PageBackgroundAsset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MediaPageBackground(props) {
	  return React.createElement(
	    _components.PageBackground,
	    null,
	    React.createElement(_PageBackgroundAsset2.default, null),
	    React.createElement(_components.PageShadow, { page: props.page })
	  );
	}

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = reducer;

	var _actions = __webpack_require__(466);

	var _actions2 = __webpack_require__(455);

	var _actions3 = __webpack_require__(300);

	function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions3.PAGE_WILL_ACTIVATE:
	      return _extends({}, state, {
	        hasPlayed: false,
	        userHasBeenIdle: false
	      });

	    case _actions.PLAY:
	      return _extends({}, state, {
	        shouldPlay: true,
	        isPlaying: true,
	        hasPlayed: true,
	        hasBeenPlayingJustNow: true,
	        fadeDuration: null,
	        isLoading: true
	      });
	    case _actions.PLAY_AND_FADE_IN:
	      return _extends({}, state, {
	        shouldPlay: true,
	        isPlaying: true,
	        hasPlayed: true,
	        hasBeenPlayingJustNow: true,
	        fadeDuration: action.payload.fadeDuration,
	        isLoading: true
	      });
	    case _actions.PAUSE:
	      return _extends({}, state, {
	        shouldPlay: false,
	        isPlaying: false,
	        fadeDuration: null,
	        isLoading: false
	      });
	    case _actions.FADE_OUT_AND_PAUSE:
	      return _extends({}, state, {
	        shouldPlay: false,
	        isPlaying: false,
	        fadeDuration: action.payload.fadeDuration,
	        isLoading: false
	      });

	    case _actions.SEEK_TO:
	      return _extends({}, state, {
	        shouldSeekTo: action.payload.time
	      });

	    case _actions.PREBUFFER:
	      return _extends({}, state, {
	        shouldPrebuffer: true
	      });
	    case _actions.PREBUFFERED:
	      return _extends({}, state, {
	        shouldPrebuffer: false
	      });

	    case _actions.WAITING:
	    case _actions.BUFFER_UNDERRUN:
	      return _extends({}, state, {
	        isLoading: true
	      });
	    case _actions.SEEKING:
	      return _extends({}, state, {
	        isSeeking: true,
	        isLoading: true
	      });
	    case _actions.SEEKED:
	      return _extends({}, state, {
	        isSeeking: false,
	        isLoading: false
	      });

	    case _actions.SCRUBBING_STARTED:
	      return _extends({}, state, {
	        isScrubbing: true
	      });
	    case _actions.SCRUBBING_ENDED:
	      return _extends({}, state, {
	        isScrubbing: false
	      });

	    case _actions.META_DATA_LOADED:
	      return _extends({}, state, {
	        duration: action.payload.duration
	      });
	    case _actions.TIME_UPDATE:
	      return _extends({}, state, {
	        currentTime: action.payload.currentTime,
	        isLoading: false
	      });
	    case _actions.ENDED:
	      return _extends({}, state, {
	        shouldPlay: false,
	        isPlaying: false
	      });

	    case _actions.HAS_NOT_BEEN_PLAYING_FOR_A_MOMENT:
	      return _extends({}, state, {
	        hasBeenPlayingJustNow: false
	      });

	    case _actions2.HOTKEY_TAB:
	    case _actions.USER_INTERACTION:
	      return _extends({}, state, {
	        userIsIdle: false,
	        controlsHidden: false
	      });
	    case _actions.USER_IDLE:
	      return _extends({}, state, {
	        userIsIdle: true,
	        userHasBeenIdle: true
	      });

	    case _actions.CONTROLS_ENTERED:
	      return _extends({}, state, {
	        userHoveringControls: true
	      });
	    case _actions.CONTROLS_LEFT:
	      return _extends({}, state, {
	        userHoveringControls: false
	      });
	    case _actions.FOCUS_ENTERED_CONTROLS:
	      return _extends({}, state, {
	        focusInsideControls: true
	      });
	    case _actions.FOCUS_LEFT_CONTROLS:
	      return _extends({}, state, {
	        focusInsideControls: false
	      });

	    case _actions.CONTROLS_HIDDEN:
	      return _extends({}, state, {
	        controlsHidden: true
	      });

	    default:
	      return state;
	  }
	}

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;

	var _togglePlaying = __webpack_require__(488);

	var _togglePlaying2 = _interopRequireDefault(_togglePlaying);

	var _handlePageDidActivate = __webpack_require__(489);

	var _handlePageDidActivate2 = _interopRequireDefault(_handlePageDidActivate);

	var _disableScrollIndicatorDuringPlayback = __webpack_require__(490);

	var _disableScrollIndicatorDuringPlayback2 = _interopRequireDefault(_disableScrollIndicatorDuringPlayback);

	var _hasNotBeenPlayingForAMoment = __webpack_require__(491);

	var _hasNotBeenPlayingForAMoment2 = _interopRequireDefault(_hasNotBeenPlayingForAMoment);

	var _idling = __webpack_require__(492);

	var _idling2 = _interopRequireDefault(_idling);

	var _fadeOutWhenPageWillDeactivate = __webpack_require__(493);

	var _fadeOutWhenPageWillDeactivate2 = _interopRequireDefault(_fadeOutWhenPageWillDeactivate);

	var _goToNextPageOnEnd = __webpack_require__(494);

	var _goToNextPageOnEnd2 = _interopRequireDefault(_goToNextPageOnEnd);

	var _controlsHidden = __webpack_require__(495);

	var _controlsHidden2 = _interopRequireDefault(_controlsHidden);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [_callee].map(regeneratorRuntime.mark);

	function _callee() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var sagas;
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          sagas = [(0, _togglePlaying2.default)(), (0, _handlePageDidActivate2.default)(options), (0, _disableScrollIndicatorDuringPlayback2.default)(), (0, _hasNotBeenPlayingForAMoment2.default)(), (0, _goToNextPageOnEnd2.default)(), (0, _fadeOutWhenPageWillDeactivate2.default)()];


	          if (options.hideControls) {
	            sagas.push([(0, _idling2.default)(), (0, _controlsHidden2.default)()]);
	          }

	          _context.next = 4;
	          return sagas;

	        case 4:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;

	var _actions = __webpack_require__(466);

	var _actions2 = __webpack_require__(455);

	var _selectors = __webpack_require__(465);

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _marked = [_callee, toggle].map(regeneratorRuntime.mark);

	function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _reduxSaga.takeEvery)([_actions2.HOTKEY_SPACE, _actions.TOGGLE_PLAYING], toggle);

	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function toggle() {
	  var state;
	  return regeneratorRuntime.wrap(function toggle$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.select)(_selectors.playerState);

	        case 2:
	          state = _context2.sent;

	          if (!state.isPlaying) {
	            _context2.next = 8;
	            break;
	          }

	          _context2.next = 6;
	          return (0, _effects.put)((0, _actions.pause)());

	        case 6:
	          _context2.next = 10;
	          break;

	        case 8:
	          _context2.next = 10;
	          return (0, _effects.put)((0, _actions.play)());

	        case 10:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee2;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(300);

	var _actions2 = __webpack_require__(466);

	var _selectors = __webpack_require__(337);

	var _marked = [_callee2, prebufferAndPlay].map(regeneratorRuntime.mark);

	function _callee2() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      autoplay = _ref.autoplay;

	  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _reduxSaga.takeEvery)(_actions.PAGE_DID_ACTIVATE, regeneratorRuntime.mark(function _callee(action) {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.race)({
	                      task: (0, _effects.call)(prebufferAndPlay, { forceAutoplay: autoplay }),
	                      cancel: (0, _effects.take)('PAGE_WILL_DEACTIVATE')
	                    });

	                  case 2:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, this);
	          }));

	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function prebufferAndPlay(_ref2) {
	  var forceAutoplay = _ref2.forceAutoplay;
	  var autoplay;
	  return regeneratorRuntime.wrap(function prebufferAndPlay$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return [(0, _effects.take)(_actions2.PREBUFFERED), (0, _effects.put)((0, _actions2.prebuffer)())];

	        case 2:
	          _context3.next = 4;
	          return (0, _effects.select)((0, _selectors.pageAttribute)('autoplay'));

	        case 4:
	          autoplay = _context3.sent;

	          if (!(autoplay !== false || forceAutoplay)) {
	            _context3.next = 10;
	            break;
	          }

	          _context3.next = 8;
	          return (0, _effects.call)(_reduxSaga.delay, 1000);

	        case 8:
	          _context3.next = 10;
	          return (0, _effects.put)((0, _actions2.play)());

	        case 10:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[1], this);
	}

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee3;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _selectors = __webpack_require__(337);

	var _marked = [_callee3].map(regeneratorRuntime.mark);

	function _callee3() {
	  return regeneratorRuntime.wrap(function _callee3$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _reduxSaga.takeEvery)(_actions.PLAY, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.select)((0, _selectors.pageIsActive)());

	                  case 2:
	                    if (!_context.sent) {
	                      _context.next = 5;
	                      break;
	                    }

	                    _context.next = 5;
	                    return (0, _effects.call)(disable);

	                  case 5:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, this);
	          }));

	        case 2:
	          _context3.next = 4;
	          return (0, _reduxSaga.takeEvery)([_actions.PAUSE, _actions.ENDED], regeneratorRuntime.mark(function _callee2() {
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	              while (1) {
	                switch (_context2.prev = _context2.next) {
	                  case 0:
	                    _context2.next = 2;
	                    return (0, _effects.select)((0, _selectors.pageIsActive)());

	                  case 2:
	                    if (!_context2.sent) {
	                      _context2.next = 5;
	                      break;
	                    }

	                    _context2.next = 5;
	                    return (0, _effects.call)(enable);

	                  case 5:
	                  case 'end':
	                    return _context2.stop();
	                }
	              }
	            }, _callee2, this);
	          }));

	        case 4:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function disable() {
	  if (pageflow.widgets.isPresent('classic_player_controls')) {
	    pageflow.events.trigger('scroll_indicator:schedule_disable');
	  } else {
	    pageflow.events.trigger('scroll_indicator:disable');
	  }
	}

	function enable() {
	  pageflow.events.trigger('scroll_indicator:enable');
	}

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee3;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _marked = [_callee3].map(regeneratorRuntime.mark);

	function _callee3() {
	  return regeneratorRuntime.wrap(function _callee3$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _reduxSaga.takeEvery)([_actions.PAUSED, _actions.ENDED], regeneratorRuntime.mark(function _callee2() {
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	              while (1) {
	                switch (_context2.prev = _context2.next) {
	                  case 0:
	                    _context2.next = 2;
	                    return (0, _effects.race)({
	                      task: (0, _effects.call)(regeneratorRuntime.mark(function _callee(action) {
	                        return regeneratorRuntime.wrap(function _callee$(_context) {
	                          while (1) {
	                            switch (_context.prev = _context.next) {
	                              case 0:
	                                _context.next = 2;
	                                return (0, _effects.call)(_reduxSaga.delay, 700);

	                              case 2:
	                                _context.next = 4;
	                                return (0, _effects.put)((0, _actions.hasNotBeenPlayingForAMoment)(false));

	                              case 4:
	                              case 'end':
	                                return _context.stop();
	                            }
	                          }
	                        }, _callee, this);
	                      })),
	                      cancel: (0, _effects.take)(_actions.PLAYING)
	                    });

	                  case 2:
	                  case 'end':
	                    return _context2.stop();
	                }
	              }
	            }, _callee2, this);
	          }));

	        case 2:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _actions2 = __webpack_require__(455);

	var _marked = [_callee, putUserIdleAfterDelay].map(regeneratorRuntime.mark);

	function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _reduxSaga.takeLatest)([_actions.PLAY, _actions.USER_INTERACTION, _actions2.HOTKEY_TAB], putUserIdleAfterDelay);

	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function putUserIdleAfterDelay(action) {
	  return regeneratorRuntime.wrap(function putUserIdleAfterDelay$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.call)(_reduxSaga.delay, 1000);

	        case 2:
	          _context2.next = 4;
	          return (0, _effects.put)((0, _actions.userIdle)());

	        case 4:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee2;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _actions2 = __webpack_require__(300);

	var _marked = [_callee2].map(regeneratorRuntime.mark);

	function _callee2() {
	  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _reduxSaga.takeEvery)(_actions2.PAGE_WILL_DEACTIVATE, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.put)((0, _actions.fadeOutAndPause)({ fadeDuration: 400 }));

	                  case 2:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, this);
	          }));

	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee2;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _selectors = __webpack_require__(337);

	var _marked = [_callee2].map(regeneratorRuntime.mark);

	function _callee2() {
	  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _reduxSaga.takeEvery)(_actions.ENDED, regeneratorRuntime.mark(function _callee() {
	            var autoChangePage, pageIsStillActive;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.select)((0, _selectors.pageAttribute)('autoChangePageOnEnded'));

	                  case 2:
	                    autoChangePage = _context.sent;
	                    _context.next = 5;
	                    return (0, _effects.select)((0, _selectors.pageIsActive)());

	                  case 5:
	                    pageIsStillActive = _context.sent;

	                    if (!(autoChangePage && pageIsStillActive)) {
	                      _context.next = 9;
	                      break;
	                    }

	                    _context.next = 9;
	                    return (0, _effects.call)(goToNextPage);

	                  case 9:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, _callee, this);
	          }));

	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[0], this);
	}

	function goToNextPage() {
	  pageflow.slides.next();
	}

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee4;

	var _reduxSaga = __webpack_require__(349);

	var _effects = __webpack_require__(345);

	var _actions = __webpack_require__(466);

	var _selectors = __webpack_require__(465);

	var _selectors2 = __webpack_require__(477);

	var _actions2 = __webpack_require__(455);

	var _marked = [_callee4].map(regeneratorRuntime.mark);

	var classicPlayerControlsPresent = (0, _selectors2.widgetPresent)('classicPlayerControls');

	function _callee4() {
	  return regeneratorRuntime.wrap(function _callee4$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return (0, _reduxSaga.takeEvery)([_actions.PLAY, _actions.USER_IDLE, _actions.CONTROLS_LEFT], regeneratorRuntime.mark(function _callee3() {
	            var state;
	            return regeneratorRuntime.wrap(function _callee3$(_context3) {
	              while (1) {
	                switch (_context3.prev = _context3.next) {
	                  case 0:
	                    _context3.next = 2;
	                    return (0, _effects.select)(_selectors.playerState);

	                  case 2:
	                    state = _context3.sent;

	                    if (!(!state.userIsIdle || state.userHoveringControls || !state.isPlaying)) {
	                      _context3.next = 5;
	                      break;
	                    }

	                    return _context3.abrupt('return');

	                  case 5:
	                    _context3.next = 7;
	                    return (0, _effects.race)({
	                      task: (0, _effects.call)(regeneratorRuntime.mark(function _callee() {
	                        return regeneratorRuntime.wrap(function _callee$(_context) {
	                          while (1) {
	                            switch (_context.prev = _context.next) {
	                              case 0:
	                                _context.next = 2;
	                                return (0, _effects.select)(classicPlayerControlsPresent);

	                              case 2:
	                                if (!_context.sent) {
	                                  _context.next = 7;
	                                  break;
	                                }

	                                _context.next = 5;
	                                return (0, _effects.call)(_reduxSaga.delay, 2500);

	                              case 5:
	                                _context.next = 9;
	                                break;

	                              case 7:
	                                _context.next = 9;
	                                return (0, _effects.call)(_reduxSaga.delay, 1200);

	                              case 9:
	                                _context.next = 11;
	                                return (0, _effects.put)((0, _actions.controlsHidden)());

	                              case 11:
	                              case 'end':
	                                return _context.stop();
	                            }
	                          }
	                        }, _callee, this);
	                      })),
	                      cancel: (0, _effects.call)(regeneratorRuntime.mark(function _callee2() {
	                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                          while (1) {
	                            switch (_context2.prev = _context2.next) {
	                              case 0:
	                                _context2.next = 2;
	                                return (0, _effects.take)([_actions.PAUSED, _actions.ENDED, _actions.USER_INTERACTION, _actions.CONTROLS_ENTERED, _actions2.HOTKEY_TAB]);

	                              case 2:
	                              case 'end':
	                                return _context2.stop();
	                            }
	                          }
	                        }, _callee2, this);
	                      }))
	                    });

	                  case 7:
	                  case 'end':
	                    return _context3.stop();
	                }
	              }
	            }, _callee3, this);
	          }));

	        case 2:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createPageFilePlayer = __webpack_require__(482);

	var _createPageFilePlayer2 = _interopRequireDefault(_createPageFilePlayer);

	var _AudioFilePlayer = __webpack_require__(497);

	var _AudioFilePlayer2 = _interopRequireDefault(_AudioFilePlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createPageFilePlayer2.default)(_AudioFilePlayer2.default);

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createFilePlayer = __webpack_require__(471);

	var _createFilePlayer2 = _interopRequireDefault(_createFilePlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createFilePlayer2.default)({
	  tagName: 'audio',

	  sources: function sources(audioFile) {
	    return [{ type: 'audio/ogg', src: audioFile.urls.ogg + '?u=1' }, { type: 'audio/mp4', src: audioFile.urls.m4a + '?u=1' }, { type: 'audio/mp3', src: audioFile.urls.mp3 + '?u=1' }];
	  },

	  emulateTextTracksDisplay: true
	});

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.register = register;

	var _components = __webpack_require__(302);

	var _media = __webpack_require__(461);

	var _registerPageType = __webpack_require__(431);

	var _registerPageType2 = _interopRequireDefault(_registerPageType);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(337);

	var _utils = __webpack_require__(372);

	var _redux = __webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PlainPage(props) {
	  var page = props.page;

	  return React.createElement(
	    _components.PageWrapper,
	    null,
	    React.createElement(_media.PageBackground, { page: page }),
	    React.createElement(
	      _components.PageForeground,
	      null,
	      React.createElement(
	        _components.PageScroller,
	        null,
	        React.createElement(_components.PageHeader, { page: page }),
	        React.createElement(_components.PageText, { page: page })
	      )
	    )
	  );
	}

	function register() {
	  (0, _registerPageType2.default)('background_image', {
	    component: (0, _pages.connectInPage)((0, _utils.combine)({
	      page: (0, _selectors.pageAttributes)()
	    }))(PlainPage),

	    reducer: (0, _redux.combineReducers)(_extends({}, _media.pageReducers)),

	    saga: regeneratorRuntime.mark(function saga() {
	      return regeneratorRuntime.wrap(function saga$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return [(0, _media.pageSaga)({ autoplay: true })];

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, saga, this);
	    })
	  });
	}

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.register = register;

	var _media = __webpack_require__(461);

	var _registerPageType = __webpack_require__(431);

	var _registerPageType2 = _interopRequireDefault(_registerPageType);

	var _pages = __webpack_require__(310);

	var _selectors = __webpack_require__(465);

	var _selectors2 = __webpack_require__(337);

	var _selectors3 = __webpack_require__(429);

	var _selectors4 = __webpack_require__(393);

	var _redux = __webpack_require__(313);

	var _utils = __webpack_require__(372);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var qualities = ['auto', '4k', 'fullhd', 'medium'];

	function VideoPage(props) {
	  return React.createElement(
	    _media.Page,
	    { className: 'videoPage',
	      page: props.page,
	      file: props.videoFile,
	      qualities: qualities,
	      playerState: props.playerState,
	      playerActions: props.playerActions,
	      controlBarText: props.t('pageflow.public.start_video') },
	    React.createElement(_media.PageVideoPlayer, { page: props.page,
	      playerState: props.playerState,
	      playerActions: props.playerActions })
	  );
	}

	function register() {
	  (0, _registerPageType2.default)('video', {

	    component: (0, _pages.connectInPage)((0, _utils.combine)({
	      page: (0, _selectors2.pageAttributes)(),
	      videoFile: (0, _selectors4.file)('videoFiles', { id: (0, _selectors2.pageAttribute)('videoFileId') }),
	      playerState: _selectors.playerState,
	      t: _selectors3.t
	    }), (0, _utils.combine)({
	      playerActions: _selectors.playerActions
	    }))(VideoPage),

	    reducer: (0, _redux.combineReducers)(_extends({}, _media.pageReducers)),

	    saga: regeneratorRuntime.mark(function saga() {
	      return regeneratorRuntime.wrap(function saga$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return [(0, _media.pageSaga)({
	                hideControls: true
	              })];

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, saga, this);
	    })

	  });
	}

/***/ },
/* 500 */
/***/ function(module, exports) {

	module.exports = pageflow;

/***/ }
/******/ ]);