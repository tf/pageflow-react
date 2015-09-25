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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _create_containerJsx = __webpack_require__(1);

	var _create_containerJsx2 = _interopRequireDefault(_create_containerJsx);

	var _create_page_type = __webpack_require__(6);

	var _create_page_type2 = _interopRequireDefault(_create_page_type);

	var _create_page_componentJsx = __webpack_require__(9);

	var _create_page_componentJsx2 = _interopRequireDefault(_create_page_componentJsx);

	var _resolve = __webpack_require__(10);

	var _resolve2 = _interopRequireDefault(_resolve);

	var _mutate = __webpack_require__(16);

	var _mutate2 = _interopRequireDefault(_mutate);

	var _classnames = __webpack_require__(20);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _componentsPageJsx = __webpack_require__(21);

	var _componentsPageJsx2 = _interopRequireDefault(_componentsPageJsx);

	var _componentsPage_wrapperJsx = __webpack_require__(22);

	var _componentsPage_wrapperJsx2 = _interopRequireDefault(_componentsPage_wrapperJsx);

	var _componentsPage_backgroundJsx = __webpack_require__(23);

	var _componentsPage_backgroundJsx2 = _interopRequireDefault(_componentsPage_backgroundJsx);

	var _componentsPage_shadowJsx = __webpack_require__(24);

	var _componentsPage_shadowJsx2 = _interopRequireDefault(_componentsPage_shadowJsx);

	var _componentsPage_contentJsx = __webpack_require__(25);

	var _componentsPage_contentJsx2 = _interopRequireDefault(_componentsPage_contentJsx);

	var _componentsPage_headerJsx = __webpack_require__(27);

	var _componentsPage_headerJsx2 = _interopRequireDefault(_componentsPage_headerJsx);

	var _componentsPage_textJsx = __webpack_require__(28);

	var _componentsPage_textJsx2 = _interopRequireDefault(_componentsPage_textJsx);

	var _componentsBackground_imageJsx = __webpack_require__(29);

	var _componentsBackground_imageJsx2 = _interopRequireDefault(_componentsBackground_imageJsx);

	var _componentsPage_background_imageJsx = __webpack_require__(30);

	var _componentsPage_background_imageJsx2 = _interopRequireDefault(_componentsPage_background_imageJsx);

	var _componentsPage_linkJsx = __webpack_require__(32);

	var _componentsPage_linkJsx2 = _interopRequireDefault(_componentsPage_linkJsx);

	var _componentsPage_thumbnailJsx = __webpack_require__(33);

	var _componentsPage_thumbnailJsx2 = _interopRequireDefault(_componentsPage_thumbnailJsx);

	var _reactDraggable = __webpack_require__(34);

	var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

	exports['default'] = {
	  /** @api public */
	  createContainer: _create_containerJsx2['default'],

	  /** @api public */
	  createPageType: _create_page_type2['default'],

	  /** @api public */
	  createPageComponent: _create_page_componentJsx2['default'],

	  /** @api public */
	  resolve: _resolve2['default'],

	  /** @api public */
	  mutate: _mutate2['default'],

	  classNames: _classnames2['default'],

	  components: {
	    Page: _componentsPageJsx2['default'],
	    PageWrapper: _componentsPage_wrapperJsx2['default'],
	    PageBackground: _componentsPage_backgroundJsx2['default'],
	    PageShadow: _componentsPage_shadowJsx2['default'],
	    PageContent: _componentsPage_contentJsx2['default'],
	    PageHeader: _componentsPage_headerJsx2['default'],
	    PageText: _componentsPage_textJsx2['default'],
	    BackgroundImage: _componentsBackground_imageJsx2['default'],
	    PageBackgroundImage: _componentsPage_background_imageJsx2['default'],

	    PageLink: _componentsPage_linkJsx2['default'],
	    PageThumbnail: _componentsPage_thumbnailJsx2['default'],

	    Draggable: _reactDraggable2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _resolversObject_resolver = __webpack_require__(3);

	var _resolversObject_resolver2 = _interopRequireDefault(_resolversObject_resolver);

	exports['default'] = function (Component, options) {
	  options = options || {};

	  if (options.editorOnly && !PAGEFLOW_EDITOR) {
	    return (function (_React$Component) {
	      _inherits(_class, _React$Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	      }

	      _createClass(_class, [{
	        key: 'render',
	        value: function render() {
	          return false;
	        }
	      }]);

	      return _class;
	    })(_react2['default'].Component);
	  }

	  return (function (_React$Component2) {
	    _inherits(_class2, _React$Component2);

	    function _class2(props) {
	      _classCallCheck(this, _class2);

	      _get(Object.getPrototypeOf(_class2.prototype), 'constructor', this).call(this, props);

	      this._resolver = new _resolversObject_resolver2['default'](options.fragments, this._handleChange.bind(this));

	      this.state = this._resolver.get(props);
	    }

	    _createClass(_class2, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this.setState(this._resolver.get(nextProps));
	      }
	    }, {
	      key: '_handleChange',
	      value: function _handleChange() {
	        this.setState(this._resolver.get(this.props));
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(Component, _extends({}, this.state, { ref: 'component' }));
	      }
	    }]);

	    return _class2;
	  })(_react2['default'].Component);
	};

	;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _resolver = __webpack_require__(4);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	var ObjectResolver = (function (_Resolver) {
	  _inherits(ObjectResolver, _Resolver);

	  function ObjectResolver(fragment, callback, p) {
	    _classCallCheck(this, ObjectResolver);

	    _get(Object.getPrototypeOf(ObjectResolver.prototype), 'constructor', this).call(this, callback);
	    this._fragment = fragment;
	    this._resolvers = {};
	    this._p = p;
	  }

	  _createClass(ObjectResolver, [{
	    key: 'get',
	    value: function get(props) {
	      this._updateResolvers();

	      if (this._p) {
	        props = props[this._p];
	      }

	      return (0, _underscore2['default'])(this._resolvers).reduce(function (result, resolver, key) {
	        result[key] = resolver.get(props);
	        return result;
	      }, (0, _underscore2['default'])(props).clone());
	    }
	  }, {
	    key: '_updateResolvers',
	    value: function _updateResolvers() {
	      var _this = this;

	      var resolvers = this._resolvers;

	      (0, _underscore2['default'])(this._fragment).each(function (resolverProvider, key) {
	        if (!resolvers[key]) {
	          resolvers[key] = _this._createResolver(resolverProvider, key);
	        }
	      });
	    }
	  }, {
	    key: '_createResolver',
	    value: function _createResolver(provider, key) {
	      var handleChange = this._handleChange.bind(this);

	      if (typeof provider === 'object') {
	        return new ObjectResolver(provider, handleChange, key);
	      } else {
	        return provider(handleChange);
	      }
	    }
	  }]);

	  return ObjectResolver;
	})(_resolver2['default']);

	exports['default'] = ObjectResolver;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Resolver = (function () {
	  function Resolver(callback) {
	    _classCallCheck(this, Resolver);

	    this._callback = callback;
	  }

	  _createClass(Resolver, [{
	    key: "get",
	    value: function get(props) {}

	    /** @protected */
	  }, {
	    key: "_handleChange",
	    value: function _handleChange() {
	      if (this._callback) {
	        this._callback();
	      }
	    }
	  }]);

	  return Resolver;
	})();

	exports["default"] = Resolver;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(7);

	var _utilsCamelize = __webpack_require__(8);

	var _utilsCamelize2 = _interopRequireDefault(_utilsCamelize);

	exports['default'] = function (Component) {
	  return {
	    scroller: false,

	    enhance: function enhance(pageElement, configuration) {
	      this._pageHooks = _underscore2['default'].extend({}, _backbone.Events);
	      this._isPreloaded = false;

	      this._render(pageElement, configuration);
	    },

	    preload: function preload(pageElement, configuration) {
	      this._isPreloaded = true;
	      this._render(pageElement, configuration);
	    },

	    activating: function activating(elelement, configuration, options) {
	      this._pageHooks.trigger('activating', options);
	    },

	    activated: function activated() {
	      this._pageHooks.trigger('activated');
	    },

	    deactivating: function deactivating() {
	      this._pageHooks.trigger('deactivating');
	    },

	    deactivated: function deactivated() {
	      this._pageHooks.trigger('deactivated');
	    },

	    resize: function resize() {
	      this._pageHooks.trigger('resize');
	    },

	    update: function update(pageElement, configuration) {
	      this._render(pageElement, configuration.attributes);
	      pageflow.commonPageCssClasses.updateCommonPageCssClasses(pageElement, configuration);
	    },

	    _render: function _render(pageElement, configuration) {
	      _react2['default'].render(_react2['default'].createElement(Component, {
	        page: _utilsCamelize2['default'].keys(configuration),
	        pageHooks: this._pageHooks,
	        isPreloaded: this._isPreloaded
	      }), pageElement[0]);
	    }
	  };
	};

	;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function camelize(snakeCase) {
	  return snakeCase.replace(/_[a-z]/g, function (match) {
	    return match[1].toUpperCase();
	  });
	};

	camelize.keys = function (object) {
	  return _(object).reduce(function (result, value, key) {
	    result[camelize(key)] = value;
	    return result;
	  }, {});
	};

	exports["default"] = camelize;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	exports['default'] = function (Component) {
	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(_class, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        var component = this.refs.component;

	        this.context.pageHooks.on({
	          activating: function activating(options) {
	            trigger('pageWillActivate', options);
	          },

	          activated: function activated() {
	            trigger('pageDidActivate');
	          },

	          deactivating: function deactivating() {
	            trigger('pageDidDeactivate');
	          },

	          resize: function resize() {
	            trigger('pageDidResize');
	          }
	        }, this);

	        function trigger(name, options) {
	          if (typeof component[name] === 'function') {
	            component[name].call(component, options);
	          }
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.context.pageHooks.off(null, null, this);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(Component, _extends({}, this.props, { ref: 'component' }));
	      }
	    }], [{
	      key: 'contextTypes',
	      value: {
	        pageHooks: _react2['default'].PropTypes.object
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(_react2['default'].Component);
	};

	;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _resolversEditor_page_resolver = __webpack_require__(11);

	var _resolversEditor_page_resolver2 = _interopRequireDefault(_resolversEditor_page_resolver);

	var _resolversSeed_page_resolver = __webpack_require__(14);

	var _resolversSeed_page_resolver2 = _interopRequireDefault(_resolversSeed_page_resolver);

	var resolvers;

	if (PAGEFLOW_EDITOR) {
	  resolvers = {
	    page: _resolversEditor_page_resolver2['default']
	  };
	} else {
	  resolvers = {
	    page: _resolversSeed_page_resolver2['default']
	  };
	}

	exports['default'] = function (resolverName, options) {
	  var resolver = resolvers[resolverName];

	  if (!resolver) {
	    throw 'Unknown resolver ' + resolverName;
	  }

	  return function (callback) {
	    return new resolver(options, callback);
	  };
	};

	;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _backbone_model_resolver = __webpack_require__(12);

	var _backbone_model_resolver2 = _interopRequireDefault(_backbone_model_resolver);

	var _pageflow = __webpack_require__(13);

	var _pageflow2 = _interopRequireDefault(_pageflow);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	exports['default'] = function (options, callback) {
	  return new _backbone_model_resolver2['default'](_underscore2['default'].extend({
	    collection: function collection() {
	      return _pageflow2['default'].pages;
	    },
	    idAttribute: 'perma_id',
	    attributesForProps: ['perma_id', 'type'],
	    includeConfiguration: true
	  }, options), callback);
	};

	;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _resolver = __webpack_require__(4);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	/**
	 * Resolve a foreign key to an object of attributes.
	 */

	var BackboneModelResolver = (function (_Resolver) {
	  _inherits(BackboneModelResolver, _Resolver);

	  function BackboneModelResolver(options, callback) {
	    _classCallCheck(this, BackboneModelResolver);

	    _get(Object.getPrototypeOf(BackboneModelResolver.prototype), 'constructor', this).call(this, callback);
	    this._options = _underscore2['default'].extend({
	      idAttribute: 'id',
	      attributesForProps: ['id'],
	      includeConfiguration: false
	    }, options);
	  }

	  _createClass(BackboneModelResolver, [{
	    key: 'get',
	    value: function get(props) {
	      this._updateModel(props);
	      this._updateSubscription();

	      return this._getPropsFromModel();
	    }
	  }, {
	    key: '_updateModel',
	    value: function _updateModel(props) {
	      this._prevModel = this._model;
	      this._model = this._getModel(props);
	    }
	  }, {
	    key: '_getModel',
	    value: function _getModel(props) {
	      var collection = this._options.collection();
	      return collection.findWhere(this._getIdConditions(props));
	    }
	  }, {
	    key: '_getIdConditions',
	    value: function _getIdConditions(props) {
	      var conditions = {};
	      conditions[this._options.idAttribute] = this._getModelId(props);
	      return conditions;
	    }
	  }, {
	    key: '_getModelId',
	    value: function _getModelId(props) {
	      return props[this._options.property];
	    }
	  }, {
	    key: '_updateSubscription',
	    value: function _updateSubscription() {
	      if (this._prevModel === this._model) {
	        return;
	      }

	      if (this._prevModel) {
	        this._stopListening(this._prevModel);
	      }

	      if (this._model) {
	        this._startListening(this._model);
	      }
	    }
	  }, {
	    key: '_startListening',
	    value: function _startListening(model) {
	      model.on(this._getSubscribedEvents(), this._handleChange, this);

	      if (this._options.includeConfiguration) {
	        model.configuration.on('change', this._handleChange, this);
	      }
	    }
	  }, {
	    key: '_stopListening',
	    value: function _stopListening(model) {
	      model.off(null, null, this);

	      if (this._options.includeConfiguration) {
	        model.configuration.off('change', this._handleChange, this);
	      }
	    }
	  }, {
	    key: '_getSubscribedEvents',
	    value: function _getSubscribedEvents() {
	      return (0, _underscore2['default'])(this._options.attributesForProps).map(function (attribute) {
	        return 'change:' + attribute;
	      }).join(' ');
	    }
	  }, {
	    key: '_getPropsFromModel',
	    value: function _getPropsFromModel() {
	      var props = null;
	      var model = this._model;

	      if (model) {
	        props = model.pick(this._options.attributesForProps);

	        if (this._options.includeConfiguration) {
	          _underscore2['default'].extend(props, model.configuration.attributes);
	        }
	      }

	      return props;
	    }
	  }]);

	  return BackboneModelResolver;
	})(_resolver2['default']);

	exports['default'] = BackboneModelResolver;
	;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = pageflow;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _seed_resolver = __webpack_require__(15);

	var _seed_resolver2 = _interopRequireDefault(_seed_resolver);

	var _pageflow = __webpack_require__(13);

	var _pageflow2 = _interopRequireDefault(_pageflow);

	exports['default'] = function (options, callback) {
	  return new _seed_resolver2['default'](_.extend({
	    seed: function seed() {
	      return _pageflow2['default'].pages;
	    },
	    idAttribute: 'perma_id',
	    attributesForProps: ['perma_id', { type: 'template' }],
	    includeConfiguration: true
	  }, options), callback);
	};

	;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _resolver = __webpack_require__(4);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	/**
	 * Resolves a foreign key to an object of attributes from the seed
	 * data.
	 */

	var SeedResolver = (function (_Resolver) {
	  _inherits(SeedResolver, _Resolver);

	  function SeedResolver(options, callback) {
	    var _this = this;

	    _classCallCheck(this, SeedResolver);

	    _get(Object.getPrototypeOf(SeedResolver.prototype), 'constructor', this).call(this, callback);
	    this._options = _underscore2['default'].extend({
	      idAttribute: 'id',
	      attributesForProps: ['id'],
	      includeConfiguration: false
	    }, options);

	    this._attributesById = (0, _underscore2['default'])(this._options.seed()).reduce(function (result, attributes) {
	      var id = attributes[_this._options.idAttribute];
	      result[id] = attributes;
	      return result;
	    }, {});
	  }

	  _createClass(SeedResolver, [{
	    key: 'get',
	    value: function get(props) {
	      var attributes = this._getAttributes(props);
	      return this._getProps(attributes);
	    }
	  }, {
	    key: '_getAttributes',
	    value: function _getAttributes(props) {
	      return this._attributesById[this._getModelId(props)];
	    }
	  }, {
	    key: '_getModelId',
	    value: function _getModelId(props) {
	      return props[this._options.property];
	    }
	  }, {
	    key: '_getProps',
	    value: function _getProps(attributes) {
	      var props;

	      if (!attributes) {
	        return null;
	      }

	      props = this._getPropsFromAttributes(attributes);

	      if (this._options.includeConfiguration) {
	        _underscore2['default'].extend(props, attributes.configuration);
	      }

	      return props;
	    }
	  }, {
	    key: '_getPropsFromAttributes',
	    value: function _getPropsFromAttributes(attributes) {
	      return (0, _underscore2['default'])(this._options.attributesForProps).reduce(function (result, name) {
	        if (typeof name === 'string') {
	          result[name] = attributes[name];
	        } else {
	          (0, _underscore2['default'])(name).each(function (name, key) {
	            result[key] = attributes[name];
	          });
	        }

	        return result;
	      }, {});
	    }
	  }]);

	  return SeedResolver;
	})(_resolver2['default']);

	exports['default'] = SeedResolver;
	;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mutationsUpdate_page_mutation = __webpack_require__(17);

	var _mutationsUpdate_page_mutation2 = _interopRequireDefault(_mutationsUpdate_page_mutation);

	var _mutationsUpdate_page_link_mutation = __webpack_require__(19);

	var _mutationsUpdate_page_link_mutation2 = _interopRequireDefault(_mutationsUpdate_page_link_mutation);

	var mutations = {
	  updatePage: _mutationsUpdate_page_mutation2['default'],
	  updatePageLink: _mutationsUpdate_page_link_mutation2['default']
	};

	exports['default'] = function (mutationName, props) {
	  var mutation = mutations[mutationName];

	  if (!mutation) {
	    throw 'Unknown mutation ' + mutationName;
	  }

	  return new mutation(props).perform();
	};

	;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mutation = __webpack_require__(18);

	var _mutation2 = _interopRequireDefault(_mutation);

	var _pageflow = __webpack_require__(13);

	var _pageflow2 = _interopRequireDefault(_pageflow);

	var _default = (function (_Mutation) {
	  _inherits(_default, _Mutation);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'perform',
	    value: function perform() {
	      this._getPage().configuration.set(this.props.attributes);
	    }
	  }, {
	    key: '_getPage',
	    value: function _getPage() {
	      var page = _pageflow2['default'].pages.get(this.props.pageId);

	      if (!page) {
	        throw new Error('Could not find page with id ' + this.props.pageId + '.');
	      }

	      return page;
	    }
	  }]);

	  return _default;
	})(_mutation2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _default = function _default(props) {
	  _classCallCheck(this, _default);

	  this.props = props;
	};

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mutation = __webpack_require__(18);

	var _mutation2 = _interopRequireDefault(_mutation);

	var _pageflow = __webpack_require__(13);

	var _pageflow2 = _interopRequireDefault(_pageflow);

	var _default = (function (_Mutation) {
	  _inherits(_default, _Mutation);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'perform',
	    value: function perform() {
	      this._getPageLink().set(this.props.attributes);
	    }
	  }, {
	    key: '_getPageLink',
	    value: function _getPageLink() {
	      var pageLink = this._getPage().pageLinks().get(this.props.id);

	      if (!pageLink) {
	        throw new Error('Could not find page link with id ' + this.props.pageLinkId + '.');
	      }

	      return pageLink;
	    }
	  }, {
	    key: '_getPage',
	    value: function _getPage() {
	      var _props$id$split = this.props.id.split(':');

	      var _props$id$split2 = _slicedToArray(_props$id$split, 1);

	      var pageId = _props$id$split2[0];

	      var page = _pageflow2['default'].pages.get(pageId);

	      if (!page) {
	        throw new Error('Could not find page with id ' + pageId + '.');
	      }

	      return page;
	    }
	  }]);

	  return _default;
	})(_mutation2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);

	  function Page() {
	    _classCallCheck(this, Page);

	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Page, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      // TODO: Should be moved to PageContent once React switches to parent based contexts.
	      this._pageScroller = this._pageScroller || _.extend({
	        disable: function disable() {
	          this.trigger('disable');
	        },
	        enable: function enable() {
	          this.trigger('enable');
	        }
	      }, Backbone.Events);

	      return {
	        pageHooks: this.props.pageHooks,
	        pageScroller: this._pageScroller,
	        pageIsPreloaded: this.props.isPreloaded
	      };
	    }
	  }], [{
	    key: 'childContextTypes',
	    value: {
	      pageHooks: _react2['default'].PropTypes.object,
	      pageScroller: _react2['default'].PropTypes.object,
	      pageIsPreloaded: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  return Page;
	})(_react2['default'].Component);

	exports['default'] = Page;
	;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _default = (function (_Component) {
	  _inherits(_default, _Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "content_and_background" },
	        this.props.children
	      );
	    }
	  }]);

	  return _default;
	})(_react.Component);

	exports["default"] = _default;
	;
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _default = (function (_Component) {
	  _inherits(_default, _Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "backgroundArea" },
	        this.props.children
	      );
	    }
	  }]);

	  return _default;
	})(_react.Component);

	exports["default"] = _default;
	;
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PageShadow = (function (_React$Component) {
	  _inherits(PageShadow, _React$Component);

	  function PageShadow() {
	    _classCallCheck(this, PageShadow);

	    _get(Object.getPrototypeOf(PageShadow.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(PageShadow, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        { className: "shadow_wrapper" },
	        _react2["default"].createElement("div", { className: "shadow", style: this.style() })
	      );
	    }
	  }, {
	    key: "style",
	    value: function style() {
	      if ('gradientOpacity' in this.props.page) {
	        return {
	          opacity: this.props.page.gradientOpacity / 100
	        };
	      }
	    }
	  }]);

	  return PageShadow;
	})(_react2["default"].Component);

	exports["default"] = PageShadow;
	;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _scroller = __webpack_require__(26);

	var _scroller2 = _interopRequireDefault(_scroller);

	var _create_page_componentJsx = __webpack_require__(9);

	var _create_page_componentJsx2 = _interopRequireDefault(_create_page_componentJsx);

	var PageContent = (function (_Component) {
	  _inherits(PageContent, _Component);

	  function PageContent() {
	    _classCallCheck(this, PageContent);

	    _get(Object.getPrototypeOf(PageContent.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PageContent, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'content' },
	        React.createElement(
	          _scroller2['default'],
	          { ref: 'scroller' },
	          React.createElement(
	            'div',
	            { className: 'contentWrapper' },
	            this.props.children
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;

	      this.context.pageScroller.on('disable', function () {
	        _this.refs.scroller.disable();
	      }, this);

	      this.context.pageScroller.on('enable', function () {
	        _this.refs.scroller.enable();
	      }, this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.pageScroller.off(null, null, this);
	    }
	  }, {
	    key: 'pageWillActivate',
	    value: function pageWillActivate(options) {
	      this.refs.scroller.resetPosition({ position: options.position });
	    }
	  }, {
	    key: 'pageDidActivate',
	    value: function pageDidActivate() {
	      this.refs.scroller.enable();
	    }
	  }, {
	    key: 'pageWillDeactivate',
	    value: function pageWillDeactivate() {
	      this.refs.scroller.disable();
	    }
	  }], [{
	    key: 'contextTypes',
	    value: {
	      pageScroller: React.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return PageContent;
	})(_react.Component);

	exports['default'] = PageContent;
	;

	exports['default'] = (0, _create_page_componentJsx2['default'])(PageContent);
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	/** @api private */

	var Scroller = (function (_Component) {
	  _inherits(Scroller, _Component);

	  function Scroller() {
	    _classCallCheck(this, Scroller);

	    _get(Object.getPrototypeOf(Scroller.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Scroller, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { ref: "wrapper", className: "scroller" },
	        React.createElement(
	          "div",
	          null,
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (typeof jQuery !== 'undefined') {
	        var element = jQuery(React.findDOMNode(this.refs.wrapper));

	        element.scroller();
	        window.sss = this.scroller = element.scroller('instance');
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      this.scroller.refresh();
	    }
	  }, {
	    key: "enable",
	    value: function enable() {
	      this.scroller.enable();
	      this.scroller.afterAnimationHook();
	    }
	  }, {
	    key: "disable",
	    value: function disable() {
	      this.scroller.disable();
	    }
	  }, {
	    key: "resetPosition",
	    value: function resetPosition(options) {
	      this.scroller.resetPosition(options);
	    }
	  }, {
	    key: "resetPosition",
	    value: function resetPosition(options) {
	      this.scroller.resetPosition(options);
	    }
	  }]);

	  return Scroller;
	})(_react.Component);

	;

	exports["default"] = Scroller;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        { className: "page_header" },
	        _react2["default"].createElement(
	          "h2",
	          null,
	          _react2["default"].createElement(
	            "span",
	            { className: "tagline" },
	            this.props.page.tagline
	          ),
	          _react2["default"].createElement(
	            "span",
	            { className: "title" },
	            this.props.page.title
	          ),
	          _react2["default"].createElement(
	            "span",
	            { className: "subtitle" },
	            this.props.page.subtitle
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(_react2["default"].Component);

	exports["default"] = _default;
	;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var PageText = (function (_Component) {
	  _inherits(PageText, _Component);

	  function PageText() {
	    _classCallCheck(this, PageText);

	    _get(Object.getPrototypeOf(PageText.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(PageText, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "contentText" },
	        React.createElement("p", { dangerouslySetInnerHTML: this.text() })
	      );
	    }
	  }, {
	    key: "text",
	    value: function text() {
	      return { __html: this.props.page.text };
	    }
	  }]);

	  return PageText;
	})(_react.Component);

	exports["default"] = PageText;
	;

	exports["default"] = PageText;
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(5);

	var _underscore2 = _interopRequireDefault(_underscore);

	/**
	 * Display an element with a background image.
	 */

	var BackgroundImage = (function (_React$Component) {
	  _inherits(BackgroundImage, _React$Component);

	  function BackgroundImage() {
	    _classCallCheck(this, BackgroundImage);

	    _get(Object.getPrototypeOf(BackgroundImage.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(BackgroundImage, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.cssClass(), style: this.style() });
	    }
	  }, {
	    key: 'cssClass',
	    value: function cssClass() {
	      return (0, _underscore2['default'])([this.props.className, this.props.loaded ? 'load_image' : null, this.imageCssClass()]).compact().join(' ');
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
	  }], [{
	    key: 'propTypes',
	    value: {
	      /** The id of the image file to display */
	      imageFileId: _react2['default'].PropTypes.number.isRequired,

	      /** Background position */
	      position: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),

	      /** Additional CSS classes. */
	      className: _react2['default'].PropTypes.string,

	      /** Used to lazy load images. */
	      loaded: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: [50, 50]
	    },
	    enumerable: true
	  }]);

	  return BackgroundImage;
	})(_react2['default'].Component);

	exports['default'] = BackgroundImage;
	;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lazy_background_imageJsx = __webpack_require__(31);

	var _lazy_background_imageJsx2 = _interopRequireDefault(_lazy_background_imageJsx);

	var PageBackgroundImage = (function (_React$Component) {
	  _inherits(PageBackgroundImage, _React$Component);

	  function PageBackgroundImage() {
	    _classCallCheck(this, PageBackgroundImage);

	    _get(Object.getPrototypeOf(PageBackgroundImage.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PageBackgroundImage, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_lazy_background_imageJsx2['default'], { imageFileId: this.props.page.backgroundImageId,
	        position: [this.props.page.backgroundImageX, this.props.page.backgroundImageY],
	        className: 'background background_image' });
	    }
	  }]);

	  return PageBackgroundImage;
	})(_react2['default'].Component);

	exports['default'] = PageBackgroundImage;
	;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _create_page_componentJsx = __webpack_require__(9);

	var _create_page_componentJsx2 = _interopRequireDefault(_create_page_componentJsx);

	var _background_imageJsx = __webpack_require__(29);

	var _background_imageJsx2 = _interopRequireDefault(_background_imageJsx);

	var LazyBackgroundImage = (function (_React$Component) {
	  _inherits(LazyBackgroundImage, _React$Component);

	  _createClass(LazyBackgroundImage, null, [{
	    key: 'contextTypes',
	    value: {
	      pageIsPreloaded: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  function LazyBackgroundImage(props) {
	    _classCallCheck(this, LazyBackgroundImage);

	    _get(Object.getPrototypeOf(LazyBackgroundImage.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(LazyBackgroundImage, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_background_imageJsx2['default'], _extends({}, this.props, { loaded: this.context.pageIsPreloaded }));
	    }
	  }]);

	  return LazyBackgroundImage;
	})(_react2['default'].Component);

	;

	exports['default'] = (0, _create_page_componentJsx2['default'])(LazyBackgroundImage);
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PageLink = (function (_React$Component) {
	  _inherits(PageLink, _React$Component);

	  function PageLink() {
	    _classCallCheck(this, PageLink);

	    _get(Object.getPrototypeOf(PageLink.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PageLink, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'a',
	        { href: this._href(), onClick: this._handleClick.bind(this) },
	        this.props.children
	      );
	    }
	  }, {
	    key: '_href',
	    value: function _href() {
	      if (this._targetPage()) {
	        return '#' + this._targetPage().perma_id;
	      } else {
	        return '#missing';
	      }
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick(event) {
	      if (this._targetPage()) {
	        pageflow.slides.goToByPermaId(this._targetPage().perma_id, {
	          transition: this.props.pageLink.page_transition
	        });
	      }
	      event.preventDefault();
	    }
	  }, {
	    key: '_targetPage',
	    value: function _targetPage() {
	      return this.props.pageLink.targetPage;
	    }
	  }]);

	  return PageLink;
	})(_react2['default'].Component);

	exports['default'] = PageLink;
	;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lazy_background_imageJsx = __webpack_require__(31);

	var _lazy_background_imageJsx2 = _interopRequireDefault(_lazy_background_imageJsx);

	var PageTumbnail = (function (_React$Component) {
	  _inherits(PageTumbnail, _React$Component);

	  function PageTumbnail() {
	    _classCallCheck(this, PageTumbnail);

	    _get(Object.getPrototypeOf(PageTumbnail.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PageTumbnail, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_lazy_background_imageJsx2['default'], { className: 'page_thumbnail',
	        imageFileId: this.imageFileId() });
	    }
	  }, {
	    key: 'imageFileId',
	    value: function imageFileId() {
	      return this.props.customThumbnailId || this.props.page && this.props.page.thumbnail_image_id || this.props.page && this.props.page.background_image_id || 'none';
	    }
	  }, {
	    key: 'cssClass',
	    value: function cssClass() {
	      return _(['page_thumbnail', this.imageCssClass()]).compact().join(' ');
	    }
	  }, {
	    key: 'imageCssClass',
	    value: function imageCssClass() {
	      return ['pageflow_image_file_link_thumbnail', this.props.page && this.props.page.background_image_id || 'none'].join('_');
	    }
	  }]);

	  return PageTumbnail;
	})(_react2['default'].Component);

	exports['default'] = PageTumbnail;
	;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var emptyFunction = function(){};
	var assign = __webpack_require__(36);
	var classNames = __webpack_require__(37);

	//
	// Helpers. See Element definition below this section.
	//

	function createUIEvent(draggable, p) {
	  // State changes are often (but not always!) async. We want the latest value.
	  var state = draggable._pendingState || draggable.state;
	  return {
	    node: draggable.getDOMNode(),
	    position: p || {
	      top: state.clientY,
	      left: state.clientX
	    }
	  };
	}

	function canDragY(draggable) {
	  return draggable.props.axis === 'both' ||
	      draggable.props.axis === 'y';
	}

	function canDragX(draggable) {
	  return draggable.props.axis === 'both' ||
	      draggable.props.axis === 'x';
	}

	function isFunction(func) {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}

	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array, callback) {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}

	function matchesSelector(el, selector) {
	  var method = findInArray([
	    'matches',
	    'webkitMatchesSelector',
	    'mozMatchesSelector',
	    'msMatchesSelector',
	    'oMatchesSelector'
	  ], function(method){
	    return isFunction(el[method]);
	  });

	  return el[method].call(el, selector);
	}

	/**
	 * simple abstraction for dragging events names
	 * */
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    end: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    end: 'mouseup'
	  }
	};

	// Default to mouse events
	var dragEventFor = eventsFor['mouse'];

	/**
	 * get {clientX, clientY} positions of control
	 * */
	function getControlPosition(e) {
	  var position = (e.touches && e.touches[0]) || e;
	  return {
	    clientX: position.clientX,
	    clientY: position.clientY
	  };
	}

	function addEvent(el, event, handler) {
	  if (!el) { return; }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    el['on' + event] = handler;
	  }
	}

	function removeEvent(el, event, handler) {
	  if (!el) { return; }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    el['on' + event] = null;
	  }
	}

	function outerHeight(node) {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = window.getComputedStyle(node);
	  height += int(computedStyle.borderTopWidth);
	  height += int(computedStyle.borderBottomWidth);
	  return height;
	}

	function outerWidth(node) {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = window.getComputedStyle(node);
	  width += int(computedStyle.borderLeftWidth);
	  width += int(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node) {
	  var height = node.clientHeight;
	  var computedStyle = window.getComputedStyle(node);
	  height -= int(computedStyle.paddingTop);
	  height -= int(computedStyle.paddingBottom);
	  return height;
	}

	function innerWidth(node) {
	  var width = node.clientWidth;
	  var computedStyle = window.getComputedStyle(node);
	  width -= int(computedStyle.paddingLeft);
	  width -= int(computedStyle.paddingRight);
	  return width;
	}

	function isNum(num) {
	  return typeof num === 'number' && !isNaN(num);
	}

	function int(a) {
	  return parseInt(a, 10);
	}

	function getBoundPosition(draggable, clientX, clientY) {
	  var bounds = JSON.parse(JSON.stringify(draggable.props.bounds));
	  var node = draggable.getDOMNode();
	  var parent = node.parentNode;

	  if (bounds === 'parent') {
	    var nodeStyle = window.getComputedStyle(node);
	    var parentStyle = window.getComputedStyle(parent);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + int(parentStyle.paddingLeft) +
	            int(nodeStyle.borderLeftWidth) + int(nodeStyle.marginLeft),
	      top: -node.offsetTop + int(parentStyle.paddingTop) +
	            int(nodeStyle.borderTopWidth) + int(nodeStyle.marginTop),
	      right: innerWidth(parent) - outerWidth(node) - node.offsetLeft,
	      bottom: innerHeight(parent) - outerHeight(node) - node.offsetTop
	    };
	  }

	  // Keep x and y below right and bottom limits...
	  if (isNum(bounds.right)) clientX = Math.min(clientX, bounds.right);
	  if (isNum(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);

	  // But above left and top limits.
	  if (isNum(bounds.left)) clientX = Math.max(clientX, bounds.left);
	  if (isNum(bounds.top)) clientY = Math.max(clientY, bounds.top);

	  return [clientX, clientY];
	}

	function snapToGrid(grid, pendingX, pendingY) {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}

	// Useful for preventing blue highlights all over everything when dragging.
	var userSelectStyle = ';user-select: none;-webkit-user-select:none;-moz-user-select:none;' +
	  '-o-user-select:none;-ms-user-select:none;';

	function addUserSelectStyles(draggable) {
	  if (!draggable.props.enableUserSelectHack) return;
	  var style = document.body.getAttribute('style') || '';
	  document.body.setAttribute('style', style + userSelectStyle);
	}

	function removeUserSelectStyles(draggable) {
	  if (!draggable.props.enableUserSelectHack) return;
	  var style = document.body.getAttribute('style') || '';
	  document.body.setAttribute('style', style.replace(userSelectStyle, ''));
	}

	function createCSSTransform(style) {
	  // Replace unitless items with px
	  var x = style.x + 'px';
	  var y = style.y + 'px';
	  return {
	    transform: 'translate(' + x + ',' + y + ')',
	    WebkitTransform: 'translate(' + x + ',' + y + ')',
	    OTransform: 'translate(' + x + ',' + y + ')',
	    msTransform: 'translate(' + x + ',' + y + ')',
	    MozTransform: 'translate(' + x + ',' + y + ')'
	  };
	}


	//
	// End Helpers.
	//

	//
	// Define <Draggable>
	//

	module.exports = React.createClass({
	  displayName: 'Draggable',

	  propTypes: {
	    /**
	     * `axis` determines which axis the draggable can move.
	     *
	     * 'both' allows movement horizontally and vertically.
	     * 'x' limits movement to horizontal axis.
	     * 'y' limits movement to vertical axis.
	     *
	     * Defaults to 'both'.
	     */
	    axis: React.PropTypes.oneOf(['both', 'x', 'y']),

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
	     *   var App = React.createClass({
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
	    bounds: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        left: React.PropTypes.Number,
	        right: React.PropTypes.Number,
	        top: React.PropTypes.Number,
	        bottom: React.PropTypes.Number
	      }),
	      React.PropTypes.oneOf(['parent', false])
	    ]),

	    /**
	     * By default, we add 'user-select:none' attributes to the document body
	     * to prevent ugly text selection during drag. If this is causing problems
	     * for your app, set this to `false`.
	     */
	    enableUserSelectHack: React.PropTypes.bool,

	    /**
	     * `handle` specifies a selector to be used as the handle that initiates drag.
	     *
	     * Example:
	     *
	     * ```jsx
	     *   var App = React.createClass({
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
	    handle: React.PropTypes.string,

	    /**
	     * `cancel` specifies a selector to be used to prevent drag initialization.
	     *
	     * Example:
	     *
	     * ```jsx
	     *   var App = React.createClass({
	     *       render: function () {
	     *           return(
	     *               <Draggable cancel=".cancel">
	     *                   <div>
	     *                     <div className="cancel">You can't drag from here</div>
	     *            <div>Dragging here works fine</div>
	     *                   </div>
	     *               </Draggable>
	     *           );
	     *       }
	     *   });
	     * ```
	     */
	    cancel: React.PropTypes.string,

	    /**
	     * `grid` specifies the x and y that dragging should snap to.
	     *
	     * Example:
	     *
	     * ```jsx
	     *   var App = React.createClass({
	     *       render: function () {
	     *           return (
	     *               <Draggable grid={[25, 25]}>
	     *                   <div>I snap to a 25 x 25 grid</div>
	     *               </Draggable>
	     *           );
	     *       }
	     *   });
	     * ```
	     */
	    grid: React.PropTypes.arrayOf(React.PropTypes.number),

	    /**
	     * `start` specifies the x and y that the dragged item should start at
	     *
	     * Example:
	     *
	     * ```jsx
	     *      var App = React.createClass({
	     *          render: function () {
	     *              return (
	     *                  <Draggable start={{x: 25, y: 25}}>
	     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	     *                  </Draggable>
	     *              );
	     *          }
	     *      });
	     * ```
	     */
	    start: React.PropTypes.shape({
	      x: React.PropTypes.number,
	      y: React.PropTypes.number
	    }),

	    /**
	     * `moveOnStartChange`, if true (default false) will move the element if the `start`
	     * property changes.
	     */
	    moveOnStartChange: React.PropTypes.bool,


	    /**
	     * `zIndex` specifies the zIndex to use while dragging.
	     *
	     * Example:
	     *
	     * ```jsx
	     *   var App = React.createClass({
	     *       render: function () {
	     *           return (
	     *               <Draggable zIndex={100}>
	     *                   <div>I have a zIndex</div>
	     *               </Draggable>
	     *           );
	     *       }
	     *   });
	     * ```
	     */
	    zIndex: React.PropTypes.number,

	    /**
	     * Called when dragging starts.
	     * If this function returns the boolean false, dragging will be canceled.
	     *
	     * Example:
	     *
	     * ```js
	     *  function (event, ui) {}
	     * ```
	     *
	     * `event` is the Event that was triggered.
	     * `ui` is an object:
	     *
	     * ```js
	     *  {
	     *    position: {top: 0, left: 0}
	     *  }
	     * ```
	     */
	    onStart: React.PropTypes.func,

	    /**
	     * Called while dragging.
	     * If this function returns the boolean false, dragging will be canceled.
	     *
	     * Example:
	     *
	     * ```js
	     *  function (event, ui) {}
	     * ```
	     *
	     * `event` is the Event that was triggered.
	     * `ui` is an object:
	     *
	     * ```js
	     *  {
	     *    position: {top: 0, left: 0}
	     *  }
	     * ```
	     */
	    onDrag: React.PropTypes.func,

	    /**
	     * Called when dragging stops.
	     *
	     * Example:
	     *
	     * ```js
	     *  function (event, ui) {}
	     * ```
	     *
	     * `event` is the Event that was triggered.
	     * `ui` is an object:
	     *
	     * ```js
	     *  {
	     *    position: {top: 0, left: 0}
	     *  }
	     * ```
	     */
	    onStop: React.PropTypes.func,

	    /**
	     * A workaround option which can be passed if onMouseDown needs to be accessed,
	     * since it'll always be blocked (due to that there's internal use of onMouseDown)
	     */
	    onMouseDown: React.PropTypes.func,
	  },

	  componentWillReceiveProps: function(newProps) {
	    // React to changes in the 'start' param.
	    if (newProps.moveOnStartChange && newProps.start) {
	      this.setState(this.getInitialState(newProps));
	    }
	  },

	  componentWillUnmount: function() {
	    // Remove any leftover event handlers
	    removeEvent(document, dragEventFor['move'], this.handleDrag);
	    removeEvent(document, dragEventFor['end'], this.handleDragEnd);
	    removeUserSelectStyles(this);
	  },

	  getDefaultProps: function () {
	    return {
	      axis: 'both',
	      bounds: false,
	      handle: null,
	      cancel: null,
	      grid: null,
	      moveOnStartChange: false,
	      start: {x: 0, y: 0},
	      zIndex: NaN,
	      enableUserSelectHack: true,
	      onStart: emptyFunction,
	      onDrag: emptyFunction,
	      onStop: emptyFunction,
	      onMouseDown: emptyFunction
	    };
	  },

	  getInitialState: function (props) {
	    // Handle call from CWRP
	    props = props || this.props;
	    return {
	      // Whether or not we are currently dragging.
	      dragging: false,

	      // Offset between start top/left and mouse top/left while dragging.
	      offsetX: 0, offsetY: 0,

	      // Current transform x and y.
	      clientX: props.start.x, clientY: props.start.y
	    };
	  },

	  handleDragStart: function (e) {
	    // Make it possible to attach event handlers on top of this one
	    this.props.onMouseDown(e);

	    // Short circuit if handle or cancel prop was provided and selector doesn't match
	    if ((this.props.handle && !matchesSelector(e.target, this.props.handle)) ||
	      (this.props.cancel && matchesSelector(e.target, this.props.cancel))) {
	      return;
	    }

	    // Call event handler. If it returns explicit false, cancel.
	    var shouldStart = this.props.onStart(e, createUIEvent(this));
	    if (shouldStart === false) return;

	    var dragPoint = getControlPosition(e);

	    // Add a style to the body to disable user-select. This prevents text from
	    // being selected all over the page.
	    addUserSelectStyles(this);

	    // Initiate dragging. Set the current x and y as offsets
	    // so we know how much we've moved during the drag. This allows us
	    // to drag elements around even if they have been moved, without issue.
	    this.setState({
	      dragging: true,
	      offsetX: dragPoint.clientX - this.state.clientX,
	      offsetY: dragPoint.clientY - this.state.clientY
	    });


	    // Add event handlers
	    addEvent(document, dragEventFor['move'], this.handleDrag);
	    addEvent(document, dragEventFor['end'], this.handleDragEnd);
	  },

	  handleDragEnd: function (e) {
	    // Short circuit if not currently dragging
	    if (!this.state.dragging) {
	      return;
	    }

	    removeUserSelectStyles(this);

	    // Turn off dragging
	    this.setState({
	      dragging: false
	    });

	    // Call event handler
	    this.props.onStop(e, createUIEvent(this));

	    // Remove event handlers
	    removeEvent(document, dragEventFor['move'], this.handleDrag);
	    removeEvent(document, dragEventFor['end'], this.handleDragEnd);
	  },

	  handleDrag: function (e) {
	    var dragPoint = getControlPosition(e);

	    // Calculate X and Y
	    var clientX = dragPoint.clientX - this.state.offsetX;
	    var clientY = dragPoint.clientY - this.state.offsetY;

	    // Snap to grid if prop has been provided
	    if (Array.isArray(this.props.grid)) {
	      var coords = snapToGrid(this.props.grid, clientX, clientY);
	      clientX = coords[0], clientY = coords[1];
	    }

	    if (this.props.bounds) {
	      var pos = getBoundPosition(this, clientX, clientY);
	      clientX = pos[0], clientY = pos[1];
	    }

	    // Call event handler. If it returns explicit false, cancel.
	    var shouldUpdate = this.props.onDrag(e, createUIEvent(this, {
	      top: clientY,
	      left: clientX
	    }));
	    if (shouldUpdate === false) return this.handleDragEnd();

	    // Update transform
	    this.setState({
	      clientX: clientX,
	      clientY: clientY
	    });
	  },

	  onMouseDown: function(ev) {
	    // Prevent 'ghost click' which happens 300ms after touchstart if the event isn't cancelled.
	    // We don't cancel the event on touchstart because of #37; we might want to make a scrollable item draggable.
	    // More on ghost clicks: http://ariatemplates.com/blog/2014/05/ghost-clicks-in-mobile-browsers/
	    if (dragEventFor == eventsFor['touch']) {
	      return ev.preventDefault();
	    }

	    return this.handleDragStart.apply(this, arguments);
	  },

	  onTouchStart: function(ev) {
	    // We're on a touch device now, so change the event handlers
	    dragEventFor = eventsFor['touch'];

	    return this.handleDragStart.apply(this, arguments);
	  },

	  // Intended for use by a parent component. Resets internal state on this component. Useful for
	  // <Resizable> and other components in case this element is manually resized and start/moveOnStartChange
	  // don't work for you.
	  resetState: function() {
	    this.setState({
	      offsetX: 0, offsetY: 0, clientX: 0, clientY: 0
	    });
	  },

	  render: function () {
	    // Create style object. We extend from existing styles so we don't
	    // remove anything already set (like background, color, etc).
	    var childStyle = this.props.children.props.style || {};

	    // Add a CSS transform to move the element around. This allows us to move the element around
	    // without worrying about whether or not it is relatively or absolutely positioned.
	    // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	    // has a clean slate.
	    var transform = createCSSTransform({
	      // Set left if horizontal drag is enabled
	      x: canDragX(this) ?
	        this.state.clientX :
	        0,

	      // Set top if vertical drag is enabled
	      y: canDragY(this) ?
	        this.state.clientY :
	        0
	    });

	    // Workaround IE pointer events; see #51
	    // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	    var touchHacks = {
	      touchAction: 'none'
	    };

	    var style = assign({}, childStyle, transform, touchHacks);

	    // Set zIndex if currently dragging and prop has been provided
	    if (this.state.dragging && !isNaN(this.props.zIndex)) {
	      style.zIndex = this.props.zIndex;
	    }

	    var className = classNames((this.props.children.props.className || ''), 'react-draggable', {
	      'react-draggable-dragging': this.state.dragging,
	      'react-draggable-dragged': this.state.dragged
	    });

	    // Reuse the child provided
	    // This makes it flexible to use whatever element is wanted (div, ul, etc)
	    return React.cloneElement(React.Children.only(this.props.children), {
	      style: style,
	      className: className,

	      onMouseDown: this.onMouseDown,
	      onTouchStart: this.onTouchStart,
	      onMouseUp: this.handleDragEnd,
	      onTouchEnd: this.handleDragEnd
	    });
	  }
	});


/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }
/******/ ]);