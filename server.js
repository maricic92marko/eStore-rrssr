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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = FetchApi;

var _isomorphicFetch = __webpack_require__(22);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(23).polyfill();

function FetchApi(method, url, data) {

    if (method.toLowerCase() === 'get') {
        return (0, _isomorphicFetch2.default)(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.warn(error);
            return null;
        });
    } else {
        return (0, _isomorphicFetch2.default)(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)

        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
            console.warn(error);
            return null;
        });
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductListItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QuantityInput = __webpack_require__(5);

var _QuantityInput2 = _interopRequireDefault(_QuantityInput);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductListItem(props) {
  try {
    return _react2.default.createElement(
      'div',
      { className: 'product-list-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'product-list-item-btn', to: {
            pathname: '/productdetails?id=' + props.product.id
          } },
        _react2.default.createElement(
          'h3',
          null,
          props.product.name
        ),
        _react2.default.createElement('img', { height: 100,
          alt: '',
          title: props.product.name,
          src: props.product.image
        }),
        _react2.default.createElement('br', null),
        props.product.snizenje === 1 ? _react2.default.createElement(
          'div',
          { className: 'price-snizenje' },
          '-',
          props.product.price,
          'RSD'
        ) : _react2.default.createElement(
          'div',
          { className: 'price' },
          props.product.price,
          'RSD'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'quantity-container' },
        _react2.default.createElement(_QuantityInput2.default, {
          product: props.product,
          cart: props.cart,
          addMultipleitemsToCart: props.addMultipleitemsToCart,
          removeFromCart: props.removeFromCart
        })
      )
    );
  } catch (e) {
    console.log(e);
    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuantityInput = function (_Component) {
    _inherits(QuantityInput, _Component);

    function QuantityInput(props) {
        _classCallCheck(this, QuantityInput);

        var _this = _possibleConstructorReturn(this, (QuantityInput.__proto__ || Object.getPrototypeOf(QuantityInput)).call(this, props));

        debugger;
        if (_this.props.cartItem) {
            _this.state = {
                duzina: _this.props.cartItem.duzina,
                sirina: _this.props.cartItem.sirina,
                metar: _this.props.cartItem.metar,
                komad: _this.props.cartItem.quantity
            };
        } else {
            _this.state = {
                duzina: undefined,
                sirina: undefined,
                metar: undefined,
                komad: undefined
            };
        }

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(QuantityInput, [{
        key: 'handleChange',
        value: function handleChange(event) {
            debugger;
            if (event.target.value > -1) {
                var name = event.target.name;
                if (event.target.value > 100 && name === 'komad') {
                    this.setState({ komad: 99 });
                } else {
                    this.setState(_defineProperty({}, name, event.target.value));
                }
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            debugger;
            var val = void 0;
            var priceSum = void 0;
            if (this.props.product.metric_unit === 'm2') {
                if (!this.state.duzina || this.state.duzina === 0 || !this.state.sirina || this.state.sirina === 0) {
                    alert('Morate uneti dužinu i širinu!');
                    return;
                }
                val = this.state.duzina * this.state.sirina;
                if (val < 100) {
                    alert('Vaša porudžbina će biti po ceni od 1 metara kvadratnog jer je to najmanja obračuska jedinica ovog proizvoda za naručivanje!');
                    val = 100;
                }
                priceSum = val * Math.round(this.state.komad) * this.props.product.price;
            } else if (this.props.product.metric_unit === 'm') {
                if (!this.state.metar || this.state.metar === 0) {
                    alert('Morate uneti dužinu!');
                    return;
                }
                val = this.state.metar;
                if (val < 150) {
                    alert('Vaša porudžbina će biti po ceni od 1.5 metara jer je to najmanja obračuska jedinica ovog proizvoda za naručivanje!');
                    val = 150;
                }
                priceSum = val * Math.round(this.state.komad) * this.props.product.price;
            } else {
                val = Math.round(this.state.komad);

                priceSum = val * this.props.product.price;
            }

            if (val < this.props.product.min_qty) {
                this.props.product.quantity = 0;
                alert('Ne mozete naručiti manje od ' + this.props.product.min_qty + ' ' + this.props.product.metric_unit);
            } else {
                debugger;
                this.props.product.quantity = Math.round(this.state.komad);
                this.props.product.duzina = this.state.duzina;
                this.props.product.sirina = this.state.sirina;
                this.props.product.metar = this.state.metar;
                this.props.product.priceSum = priceSum;
                debugger;

                this.props.addMultipleitemsToCart(this.props.product);

                this.setState({
                    duzina: undefined,
                    sirina: undefined,
                    metar: undefined,
                    komad: undefined
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                return _react2.default.createElement(
                    'div',
                    { className: 'Quantity' },
                    this.props.product.metric_unit === 'm' ? _react2.default.createElement(
                        'div',
                        { className: 'Quantity_m_wrapper' },
                        _react2.default.createElement('input', {
                            className: 'Quantity_Input',
                            name: 'metar',
                            type: 'number',
                            value: this.state.metar,
                            onChange: this.handleChange,
                            placeholder: 'cm'
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            'cm'
                        ),
                        _react2.default.createElement('br', null)
                    ) : null,
                    this.props.product.metric_unit === 'm2' ? _react2.default.createElement(
                        'div',
                        { className: 'Quantity_m2_wrapper' },
                        _react2.default.createElement('input', {
                            className: 'Quantity_Input',
                            name: 'duzina',
                            type: 'number',
                            value: this.state.duzina,
                            onChange: this.handleChange,
                            placeholder: 'cm'
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Du\u017Eina cm'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('input', {
                            className: 'Quantity_Input',
                            name: 'sirina',
                            type: 'number',
                            value: this.state.sirina,
                            onChange: this.handleChange,
                            placeholder: 'cm'
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            '\u0160irina cm'
                        ),
                        _react2.default.createElement('br', null)
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'Quantity_komad_wrapper' },
                        _react2.default.createElement('input', {
                            className: 'Quantity_Input',
                            name: 'komad',
                            type: 'number',
                            value: this.state.komad,
                            onChange: this.handleChange
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Koli\u010Dina'
                        )
                    ),
                    this.state.komad > 0 ? _react2.default.createElement(
                        'button',
                        { className: 'submit_item_btn', onClick: function onClick() {
                                return _this2.handleSubmit();
                            } },
                        'Potvrdi'
                    ) : _react2.default.createElement(
                        'button',
                        { className: 'submit_item_btn', onClick: function onClick() {
                                return alert('morate uneti količinu!');
                            } },
                        'Potvrdi'
                    )
                );
            } catch (e) {

                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return QuantityInput;
}(_react.Component);

exports.default = QuantityInput;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductMenu = function (_Component) {
    _inherits(ProductMenu, _Component);

    function ProductMenu(props) {
        _classCallCheck(this, ProductMenu);

        var _this = _possibleConstructorReturn(this, (ProductMenu.__proto__ || Object.getPrototypeOf(ProductMenu)).call(this, props));

        _this.state = {
            class_menu_toggle: false,
            product_menu_toggle: false,
            class_id: 0 };

        _this.onMouseLeaveHandlerClass = _this.onMouseLeaveHandlerClass.bind(_this);
        _this.onMouseEnterHandlerProduct = _this.onMouseEnterHandlerProduct.bind(_this);
        _this.onMouseLeaveHandlerProduct = _this.onMouseLeaveHandlerProduct.bind(_this);
        _this.onMouseClickHandlerProduct = _this.onMouseClickHandlerProduct.bind(_this);
        return _this;
    }

    _createClass(ProductMenu, [{
        key: 'onMouseLeaveHandlerClass',
        value: function onMouseLeaveHandlerClass() {

            this.setState({ class_menu_toggle: false, product_menu_toggle: false });
        }
    }, {
        key: 'onMouseClickHandlerProduct',
        value: function onMouseClickHandlerProduct(id, length) {

            if (length > 0) {
                this.setState({ class_id: id, product_menu_toggle: this.state.product_menu_toggle ? false : true, class_menu_toggle: true });
            }
        }
    }, {
        key: 'onMouseEnterHandlerProduct',
        value: function onMouseEnterHandlerProduct(id, length) {

            if (length > 0) {
                this.setState({ class_id: id, product_menu_toggle: true, class_menu_toggle: true });
            }
        }
    }, {
        key: 'onMouseLeaveHandlerProduct',
        value: function onMouseLeaveHandlerProduct(id) {

            this.setState({ product_menu_toggle: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                return _react2.default.createElement(
                    'div',
                    { className: 'products-drop-menu' },
                    _react2.default.createElement(
                        'ul',
                        { id: 'classList', className: 'class-drop-menu-list',
                            onMouseLeave: this.onMouseLeaveHandlerClass },
                        this.props.classes.map(function (pClass) {
                            return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    { /*onMouseLeave={()=>{this.onMouseLeaveHandlerProduct()}}*/
                                        className: 'class-drop-menu-list-item' },
                                    _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { to: { pathname: '/ProductList?id=' + pClass.id } },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            pClass.class_name
                                        )
                                    ),
                                    _react2.default.createElement('img', { onClick: function onClick() {
                                            _this2.onMouseClickHandlerProduct(pClass.id, _this2.props.products.filter(function (product) {
                                                return product.class_id === pClass.id;
                                            }).length ? _this2.props.products.filter(function (product) {
                                                return product.class_id === pClass.id;
                                            }).length : 0);
                                        },
                                        alt: '', src: '/products/white-arrow-right.png' })
                                ),
                                _this2.state.product_menu_toggle && _this2.state.class_menu_toggle ? _react2.default.createElement(
                                    'ul',
                                    { onMouseEnter: function onMouseEnter() {
                                            return _this2.onMouseEnterHandlerProduct(_this2.state.class_id, 1);
                                        },
                                        onMouseLeave: function onMouseLeave() {
                                            _this2.onMouseLeaveHandlerProduct(_this2.state.class_id, 1);
                                        },
                                        className: 'products-drop-menu-list' },
                                    _this2.props.products.filter(function (product) {
                                        return product.class_id === pClass.id && product.class_id === _this2.state.class_id;
                                    }).map(function (product) {
                                        return _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                _reactRouterDom.NavLink,
                                                { to: {
                                                        pathname: '/ProductDetails?id=' + product.id
                                                    } },
                                                product.name
                                            )
                                        );
                                    })
                                ) : null
                            );
                        }),
                        _react2.default.createElement(
                            'li',
                            { className: 'class-drop-menu-list-item' },
                            _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { to: {
                                        pathname: '/ProductList?id=-1'
                                    } },
                                ' Svi proizvodi'
                            )
                        )
                    )
                );
            } catch (e) {
                console.log(e);
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return ProductMenu;
}(_react.Component);

exports.default = ProductMenu;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(15);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _CartPage = __webpack_require__(18);

var _CartPage2 = _interopRequireDefault(_CartPage);

var _OrderPage = __webpack_require__(20);

var _OrderPage2 = _interopRequireDefault(_OrderPage);

var _CheckoutPage = __webpack_require__(24);

var _CheckoutPage2 = _interopRequireDefault(_CheckoutPage);

var _AlertPage = __webpack_require__(25);

var _AlertPage2 = _interopRequireDefault(_AlertPage);

var _ProductDetailsPage = __webpack_require__(27);

var _ProductDetailsPage2 = _interopRequireDefault(_ProductDetailsPage);

var _ProductListPage = __webpack_require__(29);

var _ProductListPage2 = _interopRequireDefault(_ProductListPage);

var _InfoContactPage = __webpack_require__(31);

var _InfoContactPage2 = _interopRequireDefault(_InfoContactPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _HomePage2.default
}, {
    path: '/cart',
    exact: true,
    component: _CartPage2.default
}, {
    path: '/orders',
    exact: true,
    component: _OrderPage2.default
}, {
    path: '/checkout',
    exact: true,
    component: _CheckoutPage2.default
}, {
    path: '/alerts:uuid?:email?',
    exact: true,
    component: _AlertPage2.default
}, {
    path: '/productlist:id?',
    component: _ProductListPage2.default
}, {
    path: '/productdetails:id?',
    component: _ProductDetailsPage2.default
}, {
    path: '/infocontact',
    exact: true,
    component: _InfoContactPage2.default
}];

exports.default = routes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QuantityInput = __webpack_require__(5);

var _QuantityInput2 = _interopRequireDefault(_QuantityInput);

var _reactRouterDom = __webpack_require__(1);

var _cartFunctions = __webpack_require__(19);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sort(items) {
    debugger;
    var cart = [].concat(items).sort(function (a, b) {
        return a.id - b.id;
    });
    return cart;
}

function Cart(props) {
    //const [cart, setCart] = useContext(CartContext)
    debugger;
    var cart = props.cart,
        removeAllFromCart = props.removeAllFromCart,
        addMultipleitemsToCart = props.addMultipleitemsToCart;

    var handleSubmit = function handleSubmit(item) {
        removeAllFromCart(item);
    };

    try {
        return _react2.default.createElement(
            'div',
            { className: 'cart' },
            cart && cart.length && window.location.pathname === '/cart' ? _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'CheckOutLink', to: '/checkout' },
                'Naru\u010Di'
            ) : null,
            cart && cart.length ? _react2.default.createElement(
                'table',
                { className: 'cartTable' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    Sort(cart).map(function (item) {
                        return _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement('img', { alt: '', className: 'cartImg', src: item.image })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(_QuantityInput2.default, {
                                    product: item,
                                    cartItem: item,
                                    setCart: function setCart(value) {
                                        return addMultipleitemsToCart(value);
                                    },
                                    cart: cart,
                                    key: item.cartItemId
                                })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                item.name
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                item.metricUnitName + ': ' + item.price,
                                'RSD'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                ' Ukupno:',
                                Math.round(item.priceSum * 100) / 100,
                                'RSD'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    {
                                        'data-value': item,
                                        className: 'remove_item_btn',
                                        onClick: function onClick() {
                                            return handleSubmit(item);
                                        } },
                                    'Ukloni iz korpe'
                                )
                            )
                        );
                    })
                )
            ) : _react2.default.createElement(
                'h2',
                null,
                'Korpa je prazna'
            )
        );
    } catch (e) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }
}

function mapStateToProps(state) {
    debugger;
    return {

        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: function addToCart(item) {
            dispatch({ type: 'ADD', payload: item });
        },
        removeFromCart: function removeFromCart(item) {
            dispatch({ type: 'REMOVE', payload: item });
        },
        removeAllFromCart: function removeAllFromCart(item) {
            dispatch({ type: 'REMOVEALL', payload: item });
        },
        addMultipleitemsToCart: function addMultipleitemsToCart(item) {
            debugger;
            dispatch({ type: 'ADDMULTIPLE', payload: item });
        },
        loadProducts: function loadProducts(products) {
            dispatch({ type: 'UPDATEPRODUCTS', payload: products });
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cart = __webpack_require__(8);

var _cart2 = _interopRequireDefault(_cart);

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chekout = function (_Component) {
  _inherits(Chekout, _Component);

  function Chekout(props) {
    _classCallCheck(this, Chekout);

    var _this = _possibleConstructorReturn(this, (Chekout.__proto__ || Object.getPrototypeOf(Chekout)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.submitOrder = _this.submitOrder.bind(_this);
    return _this;
  }

  _createClass(Chekout, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      event.preventDefault();

      var val = document.forms["CheckoutForm"].getElementsByTagName("input");
      this.submitOrder(val);
    }
  }, {
    key: 'submitOrder',
    value: function submitOrder(values) {
      var _this2 = this;

      event.preventDefault();
      if (values !== undefined) {
        if (this.props.cart.length < 1) {
          alert('Cart is empty');
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/Cart' });
        } else {
          (0, _api2.default)('POST', 'https://api.rolten.info/createorder', {
            order: {
              Firstname: values.Firstname.value,
              Lastname: values.Lastname.value,
              PravnoLice: values.PravnoLice.value,
              phone: values.phone.value,
              Grad: values.Grad.value,
              Ulica: values.Ulica.value,
              Drzava: values.Drzava.value,
              email: values.email.value,
              order_items_attributes: this.props.cart.map(function (item) {
                return {
                  product_id: item.id,
                  qty: item.quantity,
                  duzina: item.duzina,
                  sirina: item.sirina,
                  metar: item.metar
                };
              })
            }
          }).then(function (json) {
            if (json.errors) {
              alert('something went wrong!');
              document.location.href = '/';
            }
            debugger;
            _this2.props.clearCart(_this2.props.cart);
            alert(json);
            document.location.href = '/';
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'Chekout' },
        _react2.default.createElement(
          'div',
          { className: 'CheckoutForm' },
          _react2.default.createElement(
            'form',
            { name: 'CheckoutForm', onSubmit: function onSubmit(e) {
                _this3.handleSubmit(e);
              } },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'Firstname' },
                'Ime* '
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'Firstname', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'Lastname' },
                'Prezime* '
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'Lastname', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'PravnoLice' },
                'Pravno Lice(Opciono)'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'PravnoLice', maxlength: '100', component: 'input', type: 'text' })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'email' },
                'Email*'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'email', maxlength: '50', component: 'input', type: 'email', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'phone' },
                'Telefon*'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'phone', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'Grad' },
                'Grad/Naselje*'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'Grad', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'Ulica' },
                'Ulica i broj*'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'Ulica', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { htmlFor: 'Drzava' },
                'Drzava*'
              ),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { name: 'Drzava', maxlength: '50', component: 'input', type: 'text', required: true })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { className: 'SubmitOrder-btn', type: 'submit' },
                'Naru\u010Di'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Chekout-cart' },
          _react2.default.createElement(_cart2.default, null)
        )
      );
    }
  }]);

  return Chekout;
}(_react.Component);

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
function mapDispatchToProps(dispatch) {

  return {
    clearCart: function clearCart(item) {
      dispatch({ type: 'CLEAR', payload: item });
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Chekout);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(12);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(13);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(39);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

var _redux = __webpack_require__(40);

var _reactRedux = __webpack_require__(2);

var _Reducers = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {

    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    /*const promise = activeRoute.fetchInitialData 
    ? activeRoute.fetchInitialData('get', 'http://localhost:5000/initial_state')
    : Promise.resolve()*/

    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) || undefined;
    var full_url = req.protocol + '://' + req.get('host') + req.url;
    var url = new URL(full_url);
    var url_data = void 0;

    if (activeRoute !== undefined) {
        url_data = url.searchParams;
    }

    var promise = (0, _api2.default)('get', 'https://api.rolten.info/initial_state').then(function (json) {
        return json;
    });
    console.log(promise);
    if (!promise) {
        promise = Promise.resolve();
    }
    promise.then(function (data) {

        var RootReducer = (0, _redux.combineReducers)({
            products: _Reducers.productsReducer,
            currentClass: _Reducers.setClassReducer,
            cart: _Reducers.cartReducer,
            classes: _Reducers.classReducer,
            product_id: _Reducers.productIdReducer,
            // form: formReducer,
            store_info: _Reducers.storeInfoReducer,
            slider_images: _Reducers.sliderReducer
        });

        var preloadedState = void 0;

        if (!preloadedState) {
            preloadedState = data;
        }

        var store = (0, _redux.createStore)(RootReducer, preloadedState);
        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: { url_data: url_data } },
                _react2.default.createElement(_App2.default, null)
            )
        ));

        res.send('\n                <!DOCTYPE html>\n                <html>\n                    <head>\n                        <title>SSR with RR</title> \n                        <link rel="stylesheet" href="/main.css">\n                        <script src=\'/bundle.js\' defer></script>\n                        <script>window.__INITIAL_DATA__=' + (0, _serializeJavascript2.default)(data) + '</script>\n                        </head>      \n                    <body>\n                        <div id=\'app\'>' + markup + '</div>\n                    </body>\n                </html>\n                ');
    }).catch(next);
});

app.listen(3000, function () {
    console.log('server is listening on port :3000');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(1);

var _NoMatch = __webpack_require__(33);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Navbar = __webpack_require__(34);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(37);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'page-container' },
                _react2.default.createElement(_Navbar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'page-body' },
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _routes2.default.map(function (_ref) {
                            var path = _ref.path,
                                exact = _ref.exact,
                                C = _ref.component,
                                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

                            return _react2.default.createElement(_reactRouterDom.Route, {
                                key: path,
                                path: path,
                                exact: exact,
                                render: function render(props) {
                                    return _react2.default.createElement(C, _extends({}, props, rest));
                                }
                            });
                        }),
                        _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
                                return _react2.default.createElement(_NoMatch2.default, props);
                            } })
                    )
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomePage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'home-page' },
    _react2.default.createElement(_index2.default, null)
  );
}

exports.default = HomePage;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _imageSlider = __webpack_require__(17);

var _imageSlider2 = _interopRequireDefault(_imageSlider);

var _ProductListItem = __webpack_require__(4);

var _ProductListItem2 = _interopRequireDefault(_ProductListItem);

var _productsMenu = __webpack_require__(6);

var _productsMenu2 = _interopRequireDefault(_productsMenu);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductClassList = function (_Component) {
    _inherits(ProductClassList, _Component);

    function ProductClassList() {
        _classCallCheck(this, ProductClassList);

        return _possibleConstructorReturn(this, (ProductClassList.__proto__ || Object.getPrototypeOf(ProductClassList)).apply(this, arguments));
    }

    _createClass(ProductClassList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                slider_images = _props.slider_images,
                classes = _props.classes,
                products = _props.products,
                addMultipleitemsToCart = _props.addMultipleitemsToCart,
                removeFromCart = _props.removeFromCart,
                cart = _props.cart,
                setClassReducer = _props.setClassReducer;


            return _react2.default.createElement(
                'div',
                { className: 'ImageSlider-ProductClassList' },
                _react2.default.createElement(
                    'div',
                    { className: 'ProductMenu' },
                    _react2.default.createElement(_productsMenu2.default, {
                        products: products,
                        classes: classes })
                ),
                _react2.default.createElement(_imageSlider2.default, { slider_images: slider_images,
                    products: products }),
                products.filter(function (product) {
                    return Boolean(product.snizenje) === true;
                }).length > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'snizenja_container' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Proizvodi na sni\u017Eenju'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'snizenja' },
                        products.filter(function (product) {
                            return Boolean(product.snizenje) === true;
                        }).map(function (product) {
                            return _react2.default.createElement(_ProductListItem2.default, {
                                product: product,
                                cart: cart,
                                addMultipleitemsToCart: addMultipleitemsToCart,
                                removeFromCart: removeFromCart,
                                cartItem: cart.filter(function (cartItem) {
                                    return cartItem.id === product.id;
                                })[0],
                                key: product.id
                            });
                        })
                    )
                ) : null,
                products.filter(function (product) {
                    return Boolean(product.snizenje) === true;
                }).length > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'najprodavaniji_container' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Najprodavaniji proizvodi'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'najprodavaniji' },
                        products.sort(function (a, b) {
                            return b.quantity_sold - a.quantity_sold;
                        }).slice(0, 10).map(function (product) {
                            return _react2.default.createElement(_ProductListItem2.default, {
                                product: product,
                                cart: cart,
                                addMultipleitemsToCart: addMultipleitemsToCart,
                                removeFromCart: removeFromCart,
                                cartItem: cart.filter(function (cartItem) {
                                    return cartItem.id === product.id;
                                })[0],
                                key: product.id
                            });
                        })
                    )
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'ProductClassList-wraper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ProductClassList' },
                        classes.map(function (pClass) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'ProductClassLink-wraper' },
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { className: 'ProductClassLink',
                                        onClick: function onClick() {
                                            setClassReducer(pClass.id);
                                        },
                                        to: {
                                            pathname: '/productlist?id=' + pClass.id
                                        } },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        pClass.class_name.toUpperCase()
                                    ),
                                    _react2.default.createElement('img', { alt: ' ', src: pClass.image_path })
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ProductClassList;
}(_react.Component);

function mapStateToProps(state) {

    return {
        cart: state.cart,
        products: state.products,
        classes: state.classes,
        slider_images: state.slider_images
    };
}

function mapDispatchToProps(dispatch) {

    return {

        classReducer: function classReducer(product_class) {
            debugger;
            dispatch({ type: 'CLASS', payload: product_class });
        },
        setClassReducer: function setClassReducer(class_id) {
            debugger;
            dispatch({ type: 'SETCLASS', payload: class_id });
        },
        removeFromCart: function removeFromCart(item) {
            dispatch({ type: 'REMOVE', payload: item });
        },
        addMultipleitemsToCart: function addMultipleitemsToCart(item) {
            debugger;
            dispatch({ type: 'ADDMULTIPLE', payload: item });
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductClassList);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageSlider = function (_Component) {
    _inherits(ImageSlider, _Component);

    function ImageSlider(props) {
        _classCallCheck(this, ImageSlider);

        var _this = _possibleConstructorReturn(this, (ImageSlider.__proto__ || Object.getPrototypeOf(ImageSlider)).call(this, props));

        _this.state = {

            sliderImages: _this.props.slider_images,
            produts: _this.props.products,
            count: 0,
            opimg: 1,
            imgid: 1

        };

        _this.nextImage = _this.nextImage.bind(_this);
        _this.previousImage = _this.previousImage.bind(_this);
        _this.setCount = _this.setCount.bind(_this);

        return _this;
    }

    _createClass(ImageSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var images = this.props.slider_images;

            if (images && images.length > 0) {
                this.setState({ sliderImages: images, imgid: (Math.floor(Math.random() * Math.round(images.length / 2 - 1)) + 1) * 2 });
            }

            this.myInterval = setInterval(this.setCount(), 15);
        }
    }, {
        key: 'setCount',
        value: function setCount() {
            if (Math.round(this.state.count) === 8) {
                this.setState({ imgid: this.state.imgid + 1, count: 0 });
                if (this.state.imgid > this.state.sliderImages.length - 1) {
                    this.setState({ imgid: 0, count: 0 });
                }
            }
            this.setState({ count: this.state.count + 0.015 });
        }
    }, {
        key: 'nextImage',
        value: function nextImage() {
            if (this.state.imgid < this.state.sliderImages.length - 1) {
                this.setState({ count: 0, imgid: this.state.imgid + 1 });
            }
        }
    }, {
        key: 'previousImage',
        value: function previousImage() {
            if (this.state.imgid > 0) {
                this.setState({ count: 0, imgid: this.state.imgid - 1 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                return _react2.default.createElement(
                    'div',
                    { className: 'ImageSlider-wraper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ImageSlider',
                            style: { 'transform': 'translateX(-' + this.state.imgid * 100 + '%)' } },
                        this.state.sliderImages.map(function (image) {
                            return image.product_id ? _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { to: {
                                        pathname: image.page_link + '?id=' + image.product_id
                                    } },
                                _react2.default.createElement('img', { src: image.image_path, alt: '', className: 'SliderImg', id: 'SliderImg' })
                            ) : _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { to: {
                                        pathname: image.page_link + '?id=' + image.class_id
                                    } },
                                _react2.default.createElement('img', { src: image.image_path, alt: '', className: 'SliderImg', id: 'SliderImg' })
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'button',
                        { id: 'btnPrevious',
                            onClick: function onClick() {
                                return _this2.previousImage();
                            }, className: 'ImageSlider-btnPrevious' },
                        _react2.default.createElement('img', { src: '/products/iconfinder_arrow-left.png' })
                    ),
                    _react2.default.createElement(
                        'button',
                        { id: 'btnNext',
                            onClick: function onClick() {
                                return _this2.nextImage();
                            }, className: 'ImageSlider-btnNext' },
                        _react2.default.createElement('img', { src: '/products/iconfinder_arrow-right.png' })
                    )
                );
            } catch (e) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return ImageSlider;
}(_react.Component);

exports.default = ImageSlider;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CartPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _cart = __webpack_require__(8);

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CartPage(props) {

  return _react2.default.createElement(
    'div',
    { className: 'cartPage' },
    _react2.default.createElement(_cart2.default, null)
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cartWithotItem = function cartWithotItem(cart, item) {
    return cart.filter(function (cartItem) {
        return cartItem.cartItemId !== item.cartItemId;
    });
};
/*
const itemInCart = (cart,item)=>cart.filter(cartItem=> cartItem.id === 
    item.id)[0]
*/

var addToCart = exports.addToCart = function addToCart(cart, item) {
    debugger;

    var add = item.quantity;
    if (cart.length > 0) {
        item.cartItemId = cart[cart.length - 1].cartItemId + 1;
    } else {
        item.cartItemId = 0;
    }
    if (add >= 1) {
        return [].concat(_toConsumableArray(cartWithotItem(cart, item)), [_extends({}, item, { quantity: parseFloat(add) })]);
    } else {
        return cart;
    }
};

var removeAllFromCart = exports.removeAllFromCart = function removeAllFromCart(cart, item) {
    return [].concat(_toConsumableArray(cartWithotItem(cart, item)));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = OrdePage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _order = __webpack_require__(21);

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrdePage(props) {

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_order2.default, { id: props.location.search })
    );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

var _checkout = __webpack_require__(9);

var _checkout2 = _interopRequireDefault(_checkout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_React$Component) {
    _inherits(Order, _React$Component);

    function Order() {
        _classCallCheck(this, Order);

        return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).apply(this, arguments));
    }

    _createClass(Order, [{
        key: 'componentDidMount',

        //state = {order: null}


        value: function componentDidMount() {
            debugger;
            var _props = this.props,
                changeOrder = _props.changeOrder,
                products = _props.products;

            if (!products) {
                var url = " http://localhost:5000/user_order_list" + this.props.id;
                (0, _api2.default)('get', url).then(function (json) {
                    console.log(json);
                    debugger;
                    changeOrder(json);
                });
                debugger;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            debugger;
            // const {order} = this.state
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_checkout2.default, null)
            );
        }
    }]);

    return Order;
}(_react2.default.Component);
/*
function mapStateToProps(state){
    return{
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch){
    debugger
    return{
        
        loadProducts: (products)=>{
            debugger
        dispatch({ type: 'LOAD', payload: products})
        },
        addToCart:(item)=>{
            dispatch({type:'ADD',payload:item})
        },
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE',payload:item})
        },
        addMultipleitemsToCart: (item)=>{
            debugger
            dispatch({type: 'ADDMULTIPLE', payload:item})
        },
        changeOrder: (item)=>{
            debugger
            dispatch({type: 'CHANGEORDER', payload:item})
        }
        
    }*/

exports.default = Order;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckoutPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkout = __webpack_require__(9);

var _checkout2 = _interopRequireDefault(_checkout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckoutPage() {
  return _react2.default.createElement(
    'div',
    { className: 'chekout-page' },
    _react2.default.createElement(_checkout2.default, null)
  );
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AlertPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _alerts = __webpack_require__(26);

var _alerts2 = _interopRequireDefault(_alerts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AlertPage(props) {

    var uuid = void 0;
    var email = void 0;

    if (false) {
        var url_string = window.location.href;
        var url = new URL(url_string);
        uuid = url.searchParams.get("uuid");
        email = url.searchParams.get("email");
    } else {
        uuid = props.staticContext.url_data.get('uuid');
        email = props.staticContext.url_data.get('email');
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_alerts2.default, { uuid: uuid,
            email: email })
    );
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(3);

var _api2 = _interopRequireDefault(_api);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_Component) {
    _inherits(index, _Component);

    function index(props) {
        _classCallCheck(this, index);

        var _this = _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));

        _this.cancelOrder = _this.cancelOrder.bind(_this);
        {
             false ? _this.cancelOrder() : null;
        }
        return _this;
    }

    _createClass(index, [{
        key: 'cancelOrder',
        value: function cancelOrder() {
            debugger;
            if (this.props.uuid.length > 0) {
                var url = 'http://api.rolten.info/cancel_order?uuid=' + this.props.uuid + '&email=' + this.props.email;
                (0, _api2.default)('get', url).then(function (json) {
                    debugger;
                    alert(json.result);
                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            try {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
                );
            } catch (e) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return index;
}(_react.Component);

exports.default = index;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductDetailsPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _productDetails = __webpack_require__(28);

var _productDetails2 = _interopRequireDefault(_productDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductDetailsPage(props) {
  debugger;

  var product_id = void 0;
  if (false) {

    var url_string = window.location.href;
    var url = new URL(url_string);
    product_id = url.searchParams.get("id");
  } else {
    product_id = props.staticContext.url_data.get('id');
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_productDetails2.default, { product_id: parseInt(product_id) })
  );
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _QuantityInput = __webpack_require__(5);

var _QuantityInput2 = _interopRequireDefault(_QuantityInput);

var _ProductListItem = __webpack_require__(4);

var _ProductListItem2 = _interopRequireDefault(_ProductListItem);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDetails = function (_React$Component) {
    _inherits(ProductDetails, _React$Component);

    function ProductDetails() {
        _classCallCheck(this, ProductDetails);

        return _possibleConstructorReturn(this, (ProductDetails.__proto__ || Object.getPrototypeOf(ProductDetails)).apply(this, arguments));
    }

    _createClass(ProductDetails, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                var product_id = this.props.product_id;
                var product = this.props.products.filter(function (product) {
                    return product.id === parseInt(product_id);
                })[0];
                var imgPathList = void 0;
                if (product.img_path_list) {
                    imgPathList = product.img_path_list.split(',');
                    imgPathList.push(product.image);
                }
                var productImgChange = function productImgChange(e) {
                    var curProduct = document.getElementById("descriptionImg");
                    curProduct.src = e.target.src;
                };
                return _react2.default.createElement(
                    'div',
                    { className: 'product-item-description' },
                    _react2.default.createElement(
                        'div',
                        { className: 'product-item-description-item' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            product.name
                        ),
                        Boolean(product.snizenje) ? _react2.default.createElement(
                            'div',
                            { className: 'price-snizenje' },
                            '-',
                            product.price,
                            ' RSD Sni\u017Eeno'
                        ) : _react2.default.createElement(
                            'div',
                            null,
                            product.price,
                            'RSD'
                        ),
                        _react2.default.createElement(_QuantityInput2.default, {
                            product: product,
                            addToCart: this.props.addToCart,
                            cartItem: this.props.cart.filter(function (cartItem) {
                                return cartItem.id === product.id;
                            })[0],
                            addMultipleitemsToCart: this.props.addMultipleitemsToCart,
                            removeFromCart: this.props.removeFromCart
                        }),
                        _react2.default.createElement('img', {
                            id: 'descriptionImg',
                            alt: '',
                            title: product.name,
                            src: product.image
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'p',
                            null,
                            product.description
                        ),
                        imgPathList ? _react2.default.createElement(
                            'div',
                            { className: 'product-item-description-images' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                imgPathList.map(function (path) {
                                    return _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement('img', { onClick: function onClick(e) {
                                                productImgChange(e);
                                            }, alt: '', src: path })
                                    );
                                })
                            )
                        ) : null
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'product-item-description-class-items-wraper' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Similar Products'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'product-item-description-class-items' },
                            this.props.products.filter(function (product1) {
                                return product1.class_id === product.class_id && product1.id !== product.id;
                            }).map(function (product) {
                                return _react2.default.createElement(_ProductListItem2.default, {
                                    product_qty: product.quantity,
                                    product: product,
                                    addMultipleitemsToCart: _this2.props.addMultipleitemsToCart,
                                    removeFromCart: _this2.props.removeFromCart,
                                    cartItem: _this2.props.cart.filter(function (cartItem) {
                                        return cartItem.id === product.id;
                                    })[0],
                                    key: product.id
                                });
                            })
                        )
                    )
                );
            } catch (e) {
                console.log(e);
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return ProductDetails;
}(_react2.default.Component);

function mapStateToProps(state) {

    return {
        cart: state.cart,
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {

    return {
        productIdReducer: function productIdReducer(id) {

            dispatch({ type: 'ID', payload: id });
        },
        removeFromCart: function removeFromCart(item) {
            dispatch({ type: 'REMOVE', payload: item });
        },
        addMultipleitemsToCart: function addMultipleitemsToCart(item) {
            dispatch({ type: 'ADDMULTIPLE', payload: item });
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetails);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductListPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductListing = __webpack_require__(30);

var _ProductListing2 = _interopRequireDefault(_ProductListing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductListPage(props) {

  var class_id = void 0;
  if (false) {

    var url_string = window.location.href;
    var url = new URL(url_string);
    class_id = url.searchParams.get("id");
    console.log(class_id);
  } else {
    class_id = props.staticContext.url_data.get('id');
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ProductListing2.default, { classid: parseInt(class_id) })
  );
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductListItem = __webpack_require__(4);

var _ProductListItem2 = _interopRequireDefault(_ProductListItem);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductListing = function (_React$Component) {
    _inherits(ProductListing, _React$Component);

    function ProductListing() {
        _classCallCheck(this, ProductListing);

        return _possibleConstructorReturn(this, (ProductListing.__proto__ || Object.getPrototypeOf(ProductListing)).apply(this, arguments));
    }

    _createClass(ProductListing, [{
        key: 'render',
        value: function render() {
            debugger;
            try {
                debugger;
                var _props = this.props,
                    addMultipleitemsToCart = _props.addMultipleitemsToCart,
                    removeFromCart = _props.removeFromCart,
                    cart = _props.cart;
                var _props2 = this.props,
                    products = _props2.products,
                    classid = _props2.classid;

                debugger;
                var prod = void 0;
                if (classid !== undefined) {
                    if (classid !== -1) {
                        console.log(77777777777777);
                        prod = products.filter(function (product) {
                            return product.class_id === classid;
                        });
                    } else {
                        console.log(88888888888);
                        prod = products;
                    }
                }
                console.log(prod);

                return _react2.default.createElement(
                    'div',
                    { className: 'product-listing' },
                    prod.map(function (product) {
                        return _react2.default.createElement(_ProductListItem2.default, {
                            product: product,
                            addMultipleitemsToCart: addMultipleitemsToCart,
                            removeFromCart: removeFromCart,
                            cartItem: cart.filter(function (cartItem) {
                                return cartItem.id === product.id;
                            })[0],
                            key: product.id
                        });
                    })
                );
            } catch (e) {

                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return ProductListing;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products,
        currentClass: state.currentClass
    };
}

function mapDispatchToProps(dispatch) {

    return {
        removeFromCart: function removeFromCart(item) {
            dispatch({ type: 'REMOVE', payload: item });
        },
        addMultipleitemsToCart: function addMultipleitemsToCart(item) {
            dispatch({ type: 'ADDMULTIPLE', payload: item });
        },
        setClassReducer: function setClassReducer(currentClass) {
            dispatch({ type: 'SETCLASS', payload: currentClass });
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListing);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InfoContactPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _infoContact = __webpack_require__(32);

var _infoContact2 = _interopRequireDefault(_infoContact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InfoContactPage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_infoContact2.default, null)
    );
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = InfoContact;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InfoContact() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'informacije i kontakti'
        )
    );
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
    return _react2.default.createElement(
        'div',
        null,
        'Four oh Four'
    );
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _searchInput = __webpack_require__(35);

var _searchInput2 = _interopRequireDefault(_searchInput);

var _hamburgerMenu = __webpack_require__(36);

var _hamburgerMenu2 = _interopRequireDefault(_hamburgerMenu);

var _productsMenu = __webpack_require__(6);

var _productsMenu2 = _interopRequireDefault(_productsMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = { width: 0, height: 0, product_menu_toggle: false };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.onClickHandlerProducts = _this.onClickHandlerProducts.bind(_this);
    _this.onMouseLeaveHandlerProducts = _this.onMouseLeaveHandlerProducts.bind(_this);
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.count = _this.count.bind(_this);
    _this.price = _this.price.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'count',
    value: function count(cart) {
      debugger;
      if (cart && cart.length > 0) {
        return cart.reduce(function (acc, item) {

          return parseInt(acc) + parseInt(item.quantity);
        }, 0);
      } else {
        return 0;
      }
    }
  }, {
    key: 'price',
    value: function price(cart) {
      debugger;
      if (cart && cart.length > 0) {
        return cart.reduce(function (acc, item) {
          return Math.round((acc + item.priceSum) * 100) / 100;
        }, 0);
      } else {
        return 0;
      }
    }
  }, {
    key: 'onClickHandlerProducts',
    value: function onClickHandlerProducts() {
      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 50 || window.localStorage.href !== '/') {
        this.setState({ product_menu_toggle: this.state.product_menu_toggle ? false : true });
      }
    }
  }, {
    key: 'onMouseLeaveHandlerProducts',
    value: function onMouseLeaveHandlerProducts() {
      this.setState({ product_menu_toggle: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cart = _props.cart,
          products = _props.products,
          classes = _props.classes;


      return _react2.default.createElement(
        'div',
        { id: 'Header-part', className: 'Header-part' },
        _react2.default.createElement(
          'div',
          { className: 'Header-top' },
          this.state.width > 1000 ? _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            _react2.default.createElement('img', { className: 'logoMali', src: '/products/logoMali.png' }),
            _react2.default.createElement('img', { className: 'logoVeliki', src: '/products/logoVeliki.png' })
          ) : this.state.width > 350 ? _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            _react2.default.createElement('img', { className: 'logoMali', src: '/products/logoMali.png' })
          ) : null,
          _react2.default.createElement(
            'div',
            { className: 'cartBag' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'cartLink', to: '/cart' },
              _react2.default.createElement(
                'div',
                { className: 'cartBagImg' },
                _react2.default.createElement('img', { alt: '', src: './products/Online-Shopping-Cart-PNG-Free-Commercial-Use-Image.png' }),
                _react2.default.createElement(
                  'span',
                  { className: 'quantityProducts' },
                  this.count(cart)
                )
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'priceTag' },
              'Korpa $',
              this.price(cart)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Header-botom' },
          this.state.width < 1000 ? _react2.default.createElement(_hamburgerMenu2.default, {
            products: products,
            classes: classes }) : _react2.default.createElement(
            'ul',
            { className: 'Header-botom-ul' },
            _react2.default.createElement(
              'li',
              { className: 'products-menu-link',
                onClick: this.onClickHandlerProducts
              },
              _react2.default.createElement(
                'p',
                null,
                'Proizvodi'
              ),
              _react2.default.createElement('img', { alt: ' ', src: '/products/controls-burger-white.png' })
            ),
            _react2.default.createElement(
              'li',
              { className: 'bot-menu-link' },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/InfoContact' },
                'Informacije i kontakti'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'bot-menu-link' },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/cart' },
                'Korpa'
              )
            )
          ),
          this.state.product_menu_toggle ? _react2.default.createElement(
            'div',
            {
              onMouseEnter: this.onMouseEnterHandlerProducts,
              onMouseLeave: this.onMouseLeaveHandlerProducts,
              className: 'products-menu-container' },
            _react2.default.createElement(_productsMenu2.default, {
              products: products,
              classes: classes })
          ) : null,
          _react2.default.createElement(_searchInput2.default, {
            products: products })
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

function mapStateToProps(state) {
  debugger;
  return {
    cart: state.cart,
    products: state.products,
    classes: state.classes
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Navbar);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchInput = function (_Component) {
    _inherits(searchInput, _Component);

    function searchInput(props) {
        _classCallCheck(this, searchInput);

        var _this = _possibleConstructorReturn(this, (searchInput.__proto__ || Object.getPrototypeOf(searchInput)).call(this, props));

        _this.state = {
            products: _this.props.products,
            value: "",
            searcherItems: []

        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.onMouseLeaveHandler = _this.onMouseLeaveHandler.bind(_this);

        return _this;
    }

    _createClass(searchInput, [{
        key: 'handleChange',
        value: function handleChange(event) {
            debugger;
            var myValue = event.target.value;
            if (myValue.length > 0) {

                this.setState({ value: myValue, searcherItems: this.props.products.filter(function (product) {
                        return product.name.toUpperCase().indexOf(myValue.toUpperCase()) > -1;
                    }) });
            } else {
                this.setState({ value: '', searcherItems: [] });
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            return this.state.value;
        }
    }, {
        key: 'onMouseLeaveHandler',
        value: function onMouseLeaveHandler() {
            this.setState({ value: '', searcherItems: [] });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                var claerSearch = function claerSearch() {
                    var searchIn = document.getElementById("searchIn");
                    searchIn.value = '';
                    _this2.setState({ value: "", searcherItems: [] });
                };
                return _react2.default.createElement(
                    'div',
                    { onMouseLeave: this.onMouseLeaveHandler,
                        className: 'searchInput' },
                    _react2.default.createElement(
                        'div',
                        { className: 'searchInput-input' },
                        _react2.default.createElement('img', { onClick: this.handleSubmit, alt: '', src: './products/icons-search-white.png', className: 'searchIcon' }),
                        _react2.default.createElement('input', { id: 'searchIn', onChange: this.handleChange, type: 'text', placeholder: 'Search' })
                    ),
                    this.state.value.length > 0 ? _react2.default.createElement(
                        'div',
                        { onClick: claerSearch,
                            className: 'autocomplete_menu' },
                        this.state.searcherItems.map(function (item) {
                            return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: {
                                            pathname: '/ProductDetails?id=' + item.id } },
                                    item.name
                                )
                            );
                        })
                    ) : null
                );
            } catch (e) {

                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return searchInput;
}(_react.Component);

exports.default = searchInput;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _productsMenu = __webpack_require__(6);

var _productsMenu2 = _interopRequireDefault(_productsMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hamburgerMenu = function (_React$Component) {
    _inherits(hamburgerMenu, _React$Component);

    function hamburgerMenu(props) {
        _classCallCheck(this, hamburgerMenu);

        var _this = _possibleConstructorReturn(this, (hamburgerMenu.__proto__ || Object.getPrototypeOf(hamburgerMenu)).call(this, props));

        _this.state = { menu_toggle: false, product_menu_toggle: false };

        _this.onMouseLeaveHandlerProducts = _this.onMouseLeaveHandlerProducts.bind(_this);
        _this.onMouseClickHandlerProducts = _this.onMouseClickHandlerProducts.bind(_this);
        _this.toggleHamburgerMenu = _this.toggleHamburgerMenu.bind(_this);
        _this.onMouseLeaveHamburgerMenu = _this.onMouseLeaveHamburgerMenu.bind(_this);
        _this.onMouseEnterHandlerProducts = _this.onMouseEnterHandlerProducts.bind(_this);

        return _this;
    }

    _createClass(hamburgerMenu, [{
        key: 'onMouseLeaveHandlerProducts',
        value: function onMouseLeaveHandlerProducts() {

            this.setState({ product_menu_toggle: false });
        }
    }, {
        key: 'onMouseClickHandlerProducts',
        value: function onMouseClickHandlerProducts() {

            this.setState({ product_menu_toggle: this.state.product_menu_toggle ? false : true });
        }
    }, {
        key: 'toggleHamburgerMenu',
        value: function toggleHamburgerMenu() {

            this.setState({ menu_toggle: this.state.menu_toggle ? false : true });
            if (!this.state.menu_toggle) {
                this.setState({ product_menu_toggle: false });
            }
        }
    }, {
        key: 'onMouseLeaveHamburgerMenu',
        value: function onMouseLeaveHamburgerMenu() {
            this.setState({ menu_toggle: false });
        }
    }, {
        key: 'onMouseEnterHandlerProducts',
        value: function onMouseEnterHandlerProducts() {
            this.setState({ menu_toggle: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            try {
                return _react2.default.createElement(
                    'div',
                    { className: 'Hambrger-Menu-Container' },
                    _react2.default.createElement(
                        'div',
                        { onClick: function onClick() {
                                return _this2.toggleHamburgerMenu();
                            },

                            className: 'Hambrger-Menu' },
                        _react2.default.createElement('div', { className: 'Hambrger-Menu-Icon' }),
                        _react2.default.createElement('div', { className: 'Hambrger-Menu-Icon' }),
                        _react2.default.createElement('div', { className: 'Hambrger-Menu-Icon' })
                    ),
                    this.state.menu_toggle ? _react2.default.createElement(
                        'div',
                        {
                            onMouseLeave: function onMouseLeave() {
                                return _this2.onMouseLeaveHamburgerMenu();
                            },
                            className: 'Hambrger-Menu-List' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                {
                                    className: 'hamburger-menu-link',
                                    onClick: function onClick() {
                                        return _this2.onMouseClickHandlerProducts();
                                    } },
                                'Proizvodi'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'hamburger-menu-link' },
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/' },
                                    'Po\u010Detna'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'hamburger-menu-link' },
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/InfoContact' },
                                    'Informacije i kontakti'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'hamburger-menu-link' },
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/cart' },
                                    'Korpa'
                                )
                            )
                        )
                    ) : null,
                    this.state.product_menu_toggle && this.state.menu_toggle ? _react2.default.createElement(
                        'div',
                        {
                            onMouseEnter: function onMouseEnter() {
                                return _this2.onMouseEnterHandlerProducts();
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this2.onMouseLeaveHandlerProducts();
                            },
                            className: 'Hambrger-Menu-List-ProductMenu' },
                        _react2.default.createElement(_productsMenu2.default, {
                            products: this.props.products,
                            classes: this.props.classes })
                    ) : null
                );
            } catch (e) {
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
        }
    }]);

    return hamburgerMenu;
}(_react2.default.Component);

exports.default = hamburgerMenu;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactScrollUpButton = __webpack_require__(38);

var _reactScrollUpButton2 = _interopRequireDefault(_reactScrollUpButton);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.handleClickFb = _this.handleClickFb.bind(_this);
    _this.handleClickTw = _this.handleClickTw.bind(_this);
    _this.handleClickLi = _this.handleClickLi.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'handleClickFb',
    value: function handleClickFb(e) {
      var url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
      window.open(url, 'facebook-share-dialog', 'width=800,height=600');
      return false;
    }
  }, {
    key: 'handleClickTw',
    value: function handleClickTw(e) {
      var url = "https://twitter.com/share?url=" + window.location.href;
      window.open(url);
      return false;
    }
  }, {
    key: 'handleClickLi',
    value: function handleClickLi(e) {
      var url = 'https://www.linkedin.com/shareArticle?mini=true&amp;url=' + window.location.href;
      window.open(url);
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store_info = _props.store_info,
          classes = _props.classes,
          setClassReducer = _props.setClassReducer;

      return _react2.default.createElement(
        'div',
        { className: 'footer-part' },
        _react2.default.createElement(
          'div',
          { className: 'footerlinkList' },
          _react2.default.createElement(
            'p',
            null,
            'Proizvodi'
          ),
          classes.map(function (pClass) {
            return _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'footerlinks',
                onClick: function onClick() {
                  setClassReducer(pClass.id);
                },
                to: {
                  pathname: '/ProductList',
                  product_class: pClass.id
                } },
              pClass.class_name
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'footerPageLinks' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            'Po\u010Detna'
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/InfoContact' },
            'Informacije i kontakti'
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/cart' },
            'Korpa'
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: { pathname: '/ProductList', product_class: 'svi' } },
            'Svi proizvodi'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footerContacts' },
          _react2.default.createElement(
            'p',
            null,
            'Email:',
            ' ' + store_info.store_mail
          ),
          _react2.default.createElement(
            'p',
            null,
            'Telefon:',
            ' ' + store_info.store_phone
          ),
          _react2.default.createElement(
            'p',
            null,
            'Adresa:',
            ' ' + store_info.store_address
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'shareButtons' },
          _react2.default.createElement(
            'span',
            { onClick: this.handleClickFb, title: 'Share on Facebook' },
            _react2.default.createElement('img', { alt: '', src: '/products/icons-facebook-grey.png' })
          ),
          _react2.default.createElement(
            'span',
            { onClick: this.handleClickTw, title: 'Share on Twitter' },
            _react2.default.createElement('img', { alt: '', src: '/products/icons-twitter-grey.png' })
          ),
          _react2.default.createElement(
            'span',
            { onClick: this.handleClickLi, title: 'Share on LinkedIn' },
            _react2.default.createElement('img', { alt: '', src: '/products/icons-linkedin-grey.png' })
          )
        ),
        _react2.default.createElement(_reactScrollUpButton2.default, null)
      );
    }
  }]);

  return Footer;
}(_react.Component);

function mapStateToProps(state) {
  debugger;
  return {
    store_info: state.store_info,
    classes: state.classes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setClassReducer: function setClassReducer(class_id) {
      dispatch({ type: 'SETCLASS', payload: class_id });
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Footer);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-up-button");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.productsReducer = productsReducer;
exports.setClassReducer = setClassReducer;
exports.storeInfoReducer = storeInfoReducer;
exports.sliderReducer = sliderReducer;
exports.classReducer = classReducer;
exports.cartReducer = cartReducer;
exports.productIdReducer = productIdReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function productsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    var setProductQuantity = function setProductQuantity(products, item) {
        var Sort = function Sort(items) {

            var prod = [].concat(items).sort(function (a, b) {
                return a.id - b.id;
            });
            return prod;
        };

        var productsWithotItem = function productsWithotItem(products, item) {
            return products.filter(function (cartItem) {
                return cartItem.id !== item.id;
            });
        };
        var prod = Sort([].concat(_toConsumableArray(productsWithotItem(products, item)), [_extends({}, item, { quantity: 0 })]));
        return prod;
    };

    switch (action.type) {
        case 'UPDATEPRODUCTS':
            return setProductQuantity(state, action.payload);
        case 'LOADPRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

function setClassReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {
        case 'SETCLASS':
            return action.payload;
        default:
            return state;
    }
}

function storeInfoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {
        case 'STOREINFO':
            return action.payload;
        default:
            return state;
    }
}

function sliderReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {
        case 'SLIDER':
            return action.payload;
        default:
            return state;
    }
}

function classReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {
        case 'CLASS':
            return action.payload;
        default:
            return state;
    }
}

var itemInCart = function itemInCart(cart, item) {
    return cart.filter(function (cartItem) {
        return cartItem.id === item.id;
    })[0];
};

var cartWithotItem = function cartWithotItem(cart, item) {
    return cart.filter(function (cartItem) {
        return cartItem.cartItemId !== item.cartItemId;
    });
};

var addMultipleitemsToCart = function addMultipleitemsToCart(cart, item) {
    debugger;

    var add = item.quantity;
    if (cart.length > 0) {
        item.cartItemId = cart[cart.length - 1].cartItemId + 1;
    } else {
        item.cartItemId = 0;
    }
    if (add >= 1) {
        return [].concat(_toConsumableArray(cartWithotItem(cart, item)), [_extends({}, item, { quantity: parseFloat(add) })]);
    } else {
        return cart;
    }
};

var changeOrder = function changeOrder(cart, items) {

    var order = JSON.parse(items);
    cart = order;
    return cart;
    //})
};

var addToCart = function addToCart(cart, item) {

    var cartItem = itemInCart(cart, item);
    return cartItem === undefined ? [].concat(_toConsumableArray(cartWithotItem(cart, item)), [_extends({}, item, { quantity: 1 })]) : [].concat(_toConsumableArray(cartWithotItem(cart, item)), [_extends({}, item, { quantity: cartItem.quantity + 1 })]);
};

var removeFromCart = function removeFromCart(cart, item) {
    return item.quantity === 1 ? [].concat(_toConsumableArray(cartWithotItem(cart, item))) : [].concat(_toConsumableArray(cartWithotItem(cart, item)), [_extends({}, item, { quantity: item.quantity - 1 })]);
};

var removeAllFromCart = function removeAllFromCart(cart, item) {
    return [].concat(_toConsumableArray(cartWithotItem(cart, item)));
};

var clearCart = function clearCart(cart, item) {
    return [];
};

function cartReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD':
            return addToCart(state, action.payload);
        case 'ADDMULTIPLE':
            return addMultipleitemsToCart(state, action.payload);
        case 'REMOVE':
            return removeFromCart(state, action.payload);
        case 'REMOVEALL':
            return removeAllFromCart(state, action.payload);
        case 'CHANGEORDER':
            return changeOrder(state, action.payload);
        case 'CLEAR':
            return clearCart(state, action.payload);
        default:
            return state;
    }
}

function productIdReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ID':
            return action.payload;
        default:
            return state;
    }
}

/***/ })
/******/ ]);