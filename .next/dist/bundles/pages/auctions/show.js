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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/auction_market/components/Header.js';




/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"],
        { style: { marginTop: '10px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { 'class': 'fas fa-gavel fa-2x', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
            { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { style: { color: 'green' }, className: 'item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    'Auction Market'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu,
            { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
                { route: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { style: { color: 'green' }, className: 'item', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        'Auctions'
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
                { route: '/auctions/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { style: { color: 'green' }, className: 'item', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        '+'
                    )
                )
            )
        )
    );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/auction_market/components/Layout.js';





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
                rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin: 'anonymous', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        }),
        props.children
    );
});

/***/ }),

/***/ "./components/PlaceBidForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_auction__ = __webpack_require__("./ethereum/auction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/auction_market/components/PlaceBidForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PlaceBidForm = function (_Component) {
    _inherits(PlaceBidForm, _Component);

    function PlaceBidForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, PlaceBidForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlaceBidForm.__proto__ || Object.getPrototypeOf(PlaceBidForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var auction, accounts;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                auction = Object(__WEBPACK_IMPORTED_MODULE_3__ethereum_auction__["a" /* default */])(_this.props.address);


                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return auction.methods.bid().send({
                                    from: accounts[0],
                                    value: __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].replaceRoute('/auctions/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PlaceBidForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"],
                { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            }
                        },
                        'Bidding Amount'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"], {
                        value: this.state.value,
                        onChange: function onChange(event) {
                            return _this3.setState({ value: event.target.value });
                        },
                        label: 'ether',
                        labelPosition: 'right',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                    { positive: true, loading: this.state.loading, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    },
                    'Place Bid!'
                )
            );
        }
    }]);

    return PlaceBidForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PlaceBidForm);

/***/ }),

/***/ "./ethereum/auction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_Auction_json__ = __webpack_require__("./ethereum/build/Auction.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_Auction_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__build_Auction_json__);



/* harmony default export */ __webpack_exports__["a"] = (function (address) {
    return new __WEBPACK_IMPORTED_MODULE_0__web3__["a" /* default */].eth.Contract(JSON.parse(__WEBPACK_IMPORTED_MODULE_1__build_Auction_json___default.a.interface), address);
});

/***/ }),

/***/ "./ethereum/build/Auction.json":
/***/ (function(module, exports) {

module.exports = {"assembly":{".code":[{"begin":403,"end":4456,"name":"PUSH","value":"80"},{"begin":403,"end":4456,"name":"PUSH","value":"40"},{"begin":403,"end":4456,"name":"MSTORE"},{"begin":1019,"end":1218,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1019,"end":1218,"name":"POP"},{"begin":1019,"end":1218,"name":"PUSH","value":"40"},{"begin":1019,"end":1218,"name":"MLOAD"},{"begin":1019,"end":1218,"name":"PUSH","value":"40"},{"begin":1019,"end":1218,"name":"DUP1"},{"begin":1019,"end":1218,"name":"PUSHSIZE"},{"begin":1019,"end":1218,"name":"DUP4"},{"begin":1019,"end":1218,"name":"CODECOPY"},{"begin":1019,"end":1218,"name":"DUP2"},{"begin":1019,"end":1218,"name":"ADD"},{"begin":1019,"end":1218,"name":"PUSH","value":"40"},{"begin":1019,"end":1218,"name":"MSTORE"},{"begin":1019,"end":1218,"name":"DUP1"},{"begin":1019,"end":1218,"name":"MLOAD"},{"begin":1019,"end":1218,"name":"PUSH","value":"20"},{"begin":1019,"end":1218,"name":"SWAP1"},{"begin":1019,"end":1218,"name":"SWAP2"},{"begin":1019,"end":1218,"name":"ADD"},{"begin":1019,"end":1218,"name":"MLOAD"},{"begin":1104,"end":1109,"name":"PUSH","value":"0"},{"begin":1104,"end":1118,"name":"DUP1"},{"begin":1104,"end":1118,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1104,"end":1118,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1104,"end":1118,"name":"DUP4"},{"begin":1104,"end":1118,"name":"AND"},{"begin":1104,"end":1118,"name":"OR"},{"begin":1104,"end":1118,"name":"SWAP1"},{"begin":1104,"end":1118,"name":"SSTORE"},{"begin":1128,"end":1140,"name":"PUSH","value":"2"},{"begin":1128,"end":1156,"name":"DUP1"},{"begin":1128,"end":1156,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"SWAP2"},{"begin":1128,"end":1140,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1128,"end":1156,"name":"AND"},{"begin":-1,"end":-1,"name":"DUP3"},{"begin":-1,"end":-1,"name":"DUP1"},{"begin":1128,"end":1156,"name":"MUL"},{"begin":1128,"end":1156,"name":"OR"},{"begin":1128,"end":1156,"name":"SWAP1"},{"begin":1128,"end":1156,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1187,"end":1190,"name":"TIMESTAMP"},{"begin":1187,"end":1205,"name":"ADD"},{"begin":1174,"end":1184,"name":"PUSH","value":"1"},{"begin":1174,"end":1205,"name":"SSTORE"},{"begin":403,"end":4456,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":403,"end":4456,"name":"PUSH","value":"0"},{"begin":403,"end":4456,"name":"CODECOPY"},{"begin":403,"end":4456,"name":"PUSH","value":"0"},{"begin":403,"end":4456,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a723058204aa7a61446694586eeab80529ca6416fb2ea242f8ddf29621a3af8188eee56250029",".code":[{"begin":403,"end":4456,"name":"PUSH","value":"80"},{"begin":403,"end":4456,"name":"PUSH","value":"40"},{"begin":403,"end":4456,"name":"MSTORE"},{"begin":403,"end":4456,"name":"PUSH","value":"4"},{"begin":403,"end":4456,"name":"CALLDATASIZE"},{"begin":403,"end":4456,"name":"LT"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"1"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"PUSH","value":"FFFFFFFF"},{"begin":403,"end":4456,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":403,"end":4456,"name":"PUSH","value":"0"},{"begin":403,"end":4456,"name":"CALLDATALOAD"},{"begin":403,"end":4456,"name":"DIV"},{"begin":403,"end":4456,"name":"AND"},{"begin":403,"end":4456,"name":"PUSH","value":"1998AEEF"},{"begin":403,"end":4456,"name":"DUP2"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"2"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"2A24F46C"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"3"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"4051DDAC"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"4"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"62EA82DB"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"5"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"7FB45099"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"6"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"8DA5CB5B"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"7"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"8FA8B790"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"8"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"91F90157"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"9"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"D57BDE79"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"10"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"PUSH","value":"F77282AB"},{"begin":403,"end":4456,"name":"EQ"},{"begin":403,"end":4456,"name":"PUSH [tag]","value":"11"},{"begin":403,"end":4456,"name":"JUMPI"},{"begin":403,"end":4456,"name":"tag","value":"1"},{"begin":403,"end":4456,"name":"JUMPDEST"},{"begin":403,"end":4456,"name":"PUSH","value":"0"},{"begin":403,"end":4456,"name":"DUP1"},{"begin":403,"end":4456,"name":"REVERT"},{"begin":1699,"end":2455,"name":"tag","value":"2"},{"begin":1699,"end":2455,"name":"JUMPDEST"},{"begin":1699,"end":2455,"name":"PUSH [tag]","value":"12"},{"begin":1699,"end":2455,"name":"PUSH [tag]","value":"13"},{"begin":1699,"end":2455,"name":"JUMP"},{"begin":1699,"end":2455,"name":"tag","value":"12"},{"begin":1699,"end":2455,"name":"JUMPDEST"},{"begin":1699,"end":2455,"name":"PUSH","value":"40"},{"begin":1699,"end":2455,"name":"DUP1"},{"begin":1699,"end":2455,"name":"MLOAD"},{"begin":1699,"end":2455,"name":"SWAP2"},{"begin":1699,"end":2455,"name":"ISZERO"},{"begin":1699,"end":2455,"name":"ISZERO"},{"begin":1699,"end":2455,"name":"DUP3"},{"begin":1699,"end":2455,"name":"MSTORE"},{"begin":1699,"end":2455,"name":"MLOAD"},{"begin":1699,"end":2455,"name":"SWAP1"},{"begin":1699,"end":2455,"name":"DUP2"},{"begin":1699,"end":2455,"name":"SWAP1"},{"begin":1699,"end":2455,"name":"SUB"},{"begin":1699,"end":2455,"name":"PUSH","value":"20"},{"begin":1699,"end":2455,"name":"ADD"},{"begin":1699,"end":2455,"name":"SWAP1"},{"begin":1699,"end":2455,"name":"RETURN"},{"begin":484,"end":506,"name":"tag","value":"3"},{"begin":484,"end":506,"name":"JUMPDEST"},{"begin":484,"end":506,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"14"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"14"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":484,"end":506,"name":"POP"},{"begin":484,"end":506,"name":"PUSH [tag]","value":"15"},{"begin":484,"end":506,"name":"PUSH [tag]","value":"16"},{"begin":484,"end":506,"name":"JUMP"},{"begin":484,"end":506,"name":"tag","value":"15"},{"begin":484,"end":506,"name":"JUMPDEST"},{"begin":484,"end":506,"name":"PUSH","value":"40"},{"begin":484,"end":506,"name":"DUP1"},{"begin":484,"end":506,"name":"MLOAD"},{"begin":484,"end":506,"name":"SWAP2"},{"begin":484,"end":506,"name":"DUP3"},{"begin":484,"end":506,"name":"MSTORE"},{"begin":484,"end":506,"name":"MLOAD"},{"begin":484,"end":506,"name":"SWAP1"},{"begin":484,"end":506,"name":"DUP2"},{"begin":484,"end":506,"name":"SWAP1"},{"begin":484,"end":506,"name":"SUB"},{"begin":484,"end":506,"name":"PUSH","value":"20"},{"begin":484,"end":506,"name":"ADD"},{"begin":484,"end":506,"name":"SWAP1"},{"begin":484,"end":506,"name":"RETURN"},{"begin":4184,"end":4449,"name":"tag","value":"4"},{"begin":4184,"end":4449,"name":"JUMPDEST"},{"begin":4184,"end":4449,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"17"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"17"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":4184,"end":4449,"name":"POP"},{"begin":4184,"end":4449,"name":"PUSH [tag]","value":"18"},{"begin":4184,"end":4449,"name":"PUSH [tag]","value":"19"},{"begin":4184,"end":4449,"name":"JUMP"},{"begin":4184,"end":4449,"name":"tag","value":"18"},{"begin":4184,"end":4449,"name":"JUMPDEST"},{"begin":4184,"end":4449,"name":"PUSH","value":"40"},{"begin":4184,"end":4449,"name":"DUP1"},{"begin":4184,"end":4449,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":4184,"end":4449,"name":"DUP8"},{"begin":4184,"end":4449,"name":"AND"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"MSTORE"},{"begin":4184,"end":4449,"name":"PUSH","value":"20"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"ADD"},{"begin":4184,"end":4449,"name":"DUP7"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"MSTORE"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"ADD"},{"begin":4184,"end":4449,"name":"DUP5"},{"begin":4184,"end":4449,"name":"PUSH","value":"3"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"GT"},{"begin":4184,"end":4449,"name":"ISZERO"},{"begin":4184,"end":4449,"name":"PUSH [tag]","value":"20"},{"begin":4184,"end":4449,"name":"JUMPI"},{"begin":4184,"end":4449,"name":"INVALID"},{"begin":4184,"end":4449,"name":"tag","value":"20"},{"begin":4184,"end":4449,"name":"JUMPDEST"},{"begin":4184,"end":4449,"name":"PUSH","value":"FF"},{"begin":4184,"end":4449,"name":"AND"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"MSTORE"},{"begin":4184,"end":4449,"name":"PUSH","value":"20"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"ADD"},{"begin":4184,"end":4449,"name":"SWAP4"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"SWAP4"},{"begin":4184,"end":4449,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":4184,"end":4449,"name":"AND"},{"begin":4184,"end":4449,"name":"PUSH","value":"40"},{"begin":4184,"end":4449,"name":"DUP1"},{"begin":4184,"end":4449,"name":"DUP4"},{"begin":4184,"end":4449,"name":"ADD"},{"begin":4184,"end":4449,"name":"SWAP2"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"SWAP2"},{"begin":4184,"end":4449,"name":"MSTORE"},{"begin":4184,"end":4449,"name":"MLOAD"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"DUP2"},{"begin":4184,"end":4449,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"SUB"},{"begin":4184,"end":4449,"name":"PUSH","value":"60"},{"begin":4184,"end":4449,"name":"ADD"},{"begin":4184,"end":4449,"name":"SWAP4"},{"begin":-1,"end":-1,"name":"POP"},{"begin":4184,"end":4449,"name":"SWAP2"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":4184,"end":4449,"name":"RETURN"},{"begin":671,"end":707,"name":"tag","value":"5"},{"begin":671,"end":707,"name":"JUMPDEST"},{"begin":671,"end":707,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"21"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"21"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":671,"end":707,"name":"PUSH [tag]","value":"15"},{"begin":671,"end":707,"name":"PUSH","value":"4"},{"begin":671,"end":707,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":671,"end":707,"name":"AND"},{"begin":671,"end":707,"name":"PUSH [tag]","value":"23"},{"begin":671,"end":707,"name":"JUMP"},{"begin":568,"end":593,"name":"tag","value":"6"},{"begin":568,"end":593,"name":"JUMPDEST"},{"begin":568,"end":593,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"24"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"24"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":568,"end":593,"name":"POP"},{"begin":568,"end":593,"name":"PUSH [tag]","value":"25"},{"begin":568,"end":593,"name":"PUSH [tag]","value":"26"},{"begin":568,"end":593,"name":"JUMP"},{"begin":568,"end":593,"name":"tag","value":"25"},{"begin":568,"end":593,"name":"JUMPDEST"},{"begin":568,"end":593,"name":"PUSH","value":"40"},{"begin":568,"end":593,"name":"MLOAD"},{"begin":568,"end":593,"name":"DUP1"},{"begin":568,"end":593,"name":"DUP3"},{"begin":568,"end":593,"name":"PUSH","value":"3"},{"begin":568,"end":593,"name":"DUP2"},{"begin":568,"end":593,"name":"GT"},{"begin":568,"end":593,"name":"ISZERO"},{"begin":568,"end":593,"name":"PUSH [tag]","value":"27"},{"begin":568,"end":593,"name":"JUMPI"},{"begin":568,"end":593,"name":"INVALID"},{"begin":568,"end":593,"name":"tag","value":"27"},{"begin":568,"end":593,"name":"JUMPDEST"},{"begin":568,"end":593,"name":"PUSH","value":"FF"},{"begin":568,"end":593,"name":"AND"},{"begin":568,"end":593,"name":"DUP2"},{"begin":568,"end":593,"name":"MSTORE"},{"begin":568,"end":593,"name":"PUSH","value":"20"},{"begin":568,"end":593,"name":"ADD"},{"begin":568,"end":593,"name":"SWAP2"},{"begin":568,"end":593,"name":"POP"},{"begin":568,"end":593,"name":"POP"},{"begin":568,"end":593,"name":"PUSH","value":"40"},{"begin":568,"end":593,"name":"MLOAD"},{"begin":568,"end":593,"name":"DUP1"},{"begin":568,"end":593,"name":"SWAP2"},{"begin":568,"end":593,"name":"SUB"},{"begin":568,"end":593,"name":"SWAP1"},{"begin":568,"end":593,"name":"RETURN"},{"begin":458,"end":478,"name":"tag","value":"7"},{"begin":458,"end":478,"name":"JUMPDEST"},{"begin":458,"end":478,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"28"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"28"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":458,"end":478,"name":"POP"},{"begin":458,"end":478,"name":"PUSH [tag]","value":"29"},{"begin":458,"end":478,"name":"PUSH [tag]","value":"30"},{"begin":458,"end":478,"name":"JUMP"},{"begin":458,"end":478,"name":"tag","value":"29"},{"begin":458,"end":478,"name":"JUMPDEST"},{"begin":458,"end":478,"name":"PUSH","value":"40"},{"begin":458,"end":478,"name":"DUP1"},{"begin":458,"end":478,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":458,"end":478,"name":"SWAP1"},{"begin":458,"end":478,"name":"SWAP3"},{"begin":458,"end":478,"name":"AND"},{"begin":458,"end":478,"name":"DUP3"},{"begin":458,"end":478,"name":"MSTORE"},{"begin":458,"end":478,"name":"MLOAD"},{"begin":458,"end":478,"name":"SWAP1"},{"begin":458,"end":478,"name":"DUP2"},{"begin":458,"end":478,"name":"SWAP1"},{"begin":458,"end":478,"name":"SUB"},{"begin":458,"end":478,"name":"PUSH","value":"20"},{"begin":458,"end":478,"name":"ADD"},{"begin":458,"end":478,"name":"SWAP1"},{"begin":458,"end":478,"name":"RETURN"},{"begin":1439,"end":1526,"name":"tag","value":"8"},{"begin":1439,"end":1526,"name":"JUMPDEST"},{"begin":1439,"end":1526,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"31"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"31"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1439,"end":1526,"name":"POP"},{"begin":1439,"end":1526,"name":"PUSH [tag]","value":"32"},{"begin":1439,"end":1526,"name":"PUSH [tag]","value":"33"},{"begin":1439,"end":1526,"name":"JUMP"},{"begin":1439,"end":1526,"name":"tag","value":"32"},{"begin":1439,"end":1526,"name":"JUMPDEST"},{"begin":1439,"end":1526,"name":"STOP"},{"begin":632,"end":660,"name":"tag","value":"9"},{"begin":632,"end":660,"name":"JUMPDEST"},{"begin":632,"end":660,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"34"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"34"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":632,"end":660,"name":"POP"},{"begin":632,"end":660,"name":"PUSH [tag]","value":"29"},{"begin":632,"end":660,"name":"PUSH [tag]","value":"36"},{"begin":632,"end":660,"name":"JUMP"},{"begin":604,"end":626,"name":"tag","value":"10"},{"begin":604,"end":626,"name":"JUMPDEST"},{"begin":604,"end":626,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"37"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"37"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":604,"end":626,"name":"POP"},{"begin":604,"end":626,"name":"PUSH [tag]","value":"15"},{"begin":604,"end":626,"name":"PUSH [tag]","value":"39"},{"begin":604,"end":626,"name":"JUMP"},{"begin":2540,"end":4178,"name":"tag","value":"11"},{"begin":2540,"end":4178,"name":"JUMPDEST"},{"begin":2540,"end":4178,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"40"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"40"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2540,"end":4178,"name":"POP"},{"begin":2540,"end":4178,"name":"PUSH [tag]","value":"32"},{"begin":2540,"end":4178,"name":"PUSH [tag]","value":"42"},{"begin":2540,"end":4178,"name":"JUMP"},{"begin":1699,"end":2455,"name":"tag","value":"13"},{"begin":1699,"end":2455,"name":"JUMPDEST"},{"begin":1746,"end":1750,"name":"PUSH","value":"0"},{"begin":1279,"end":1284,"name":"DUP1"},{"begin":1279,"end":1284,"name":"SLOAD"},{"begin":1746,"end":1750,"name":"DUP2"},{"begin":1746,"end":1750,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1279,"end":1284,"name":"AND"},{"begin":1265,"end":1275,"name":"CALLER"},{"begin":1265,"end":1284,"name":"EQ"},{"begin":1265,"end":1284,"name":"ISZERO"},{"begin":1257,"end":1285,"name":"PUSH [tag]","value":"44"},{"begin":1257,"end":1285,"name":"JUMPI"},{"begin":1257,"end":1285,"name":"PUSH","value":"0"},{"begin":1257,"end":1285,"name":"DUP1"},{"begin":1257,"end":1285,"name":"REVERT"},{"begin":1257,"end":1285,"name":"tag","value":"44"},{"begin":1257,"end":1285,"name":"JUMPDEST"},{"begin":2037,"end":2050,"name":"PUSH","value":"1"},{"begin":2021,"end":2033,"name":"PUSH","value":"2"},{"begin":2021,"end":2033,"name":"SLOAD"},{"begin":2021,"end":2033,"name":"PUSH","value":"FF"},{"begin":2021,"end":2033,"name":"AND"},{"begin":2021,"end":2050,"name":"PUSH","value":"3"},{"begin":2021,"end":2050,"name":"DUP2"},{"begin":2021,"end":2050,"name":"GT"},{"begin":2021,"end":2050,"name":"ISZERO"},{"begin":2021,"end":2050,"name":"PUSH [tag]","value":"47"},{"begin":2021,"end":2050,"name":"JUMPI"},{"begin":2021,"end":2050,"name":"INVALID"},{"begin":2021,"end":2050,"name":"tag","value":"47"},{"begin":2021,"end":2050,"name":"JUMPDEST"},{"begin":2021,"end":2050,"name":"EQ"},{"begin":2013,"end":2051,"name":"PUSH [tag]","value":"48"},{"begin":2013,"end":2051,"name":"JUMPI"},{"begin":2013,"end":2051,"name":"PUSH","value":"0"},{"begin":2013,"end":2051,"name":"DUP1"},{"begin":2013,"end":2051,"name":"REVERT"},{"begin":2013,"end":2051,"name":"tag","value":"48"},{"begin":2013,"end":2051,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2136,"end":2146,"name":"CALLER"},{"begin":2131,"end":2147,"name":"PUSH","value":"0"},{"begin":2131,"end":2147,"name":"SWAP1"},{"begin":2131,"end":2147,"name":"DUP2"},{"begin":2131,"end":2147,"name":"MSTORE"},{"begin":2131,"end":2135,"name":"PUSH","value":"5"},{"begin":2131,"end":2147,"name":"PUSH","value":"20"},{"begin":2131,"end":2147,"name":"MSTORE"},{"begin":2131,"end":2147,"name":"PUSH","value":"40"},{"begin":2131,"end":2147,"name":"SWAP1"},{"begin":2131,"end":2147,"name":"KECCAK256"},{"begin":2131,"end":2147,"name":"SLOAD"},{"begin":2212,"end":2222,"name":"PUSH","value":"3"},{"begin":2212,"end":2222,"name":"SLOAD"},{"begin":2150,"end":2159,"name":"CALLVALUE"},{"begin":2131,"end":2159,"name":"SWAP1"},{"begin":2131,"end":2159,"name":"SWAP2"},{"begin":2131,"end":2159,"name":"ADD"},{"begin":2131,"end":2159,"name":"SWAP1"},{"begin":2199,"end":2222,"name":"DUP2"},{"begin":2199,"end":2222,"name":"GT"},{"begin":2178,"end":2293,"name":"PUSH [tag]","value":"49"},{"begin":2178,"end":2293,"name":"JUMPI"},{"begin":2178,"end":2293,"name":"PUSH","value":"40"},{"begin":2178,"end":2293,"name":"DUP1"},{"begin":2178,"end":2293,"name":"MLOAD"},{"begin":2178,"end":2293,"name":"PUSH","value":"8C379A000000000000000000000000000000000000000000000000000000000"},{"begin":2178,"end":2293,"name":"DUP2"},{"begin":2178,"end":2293,"name":"MSTORE"},{"begin":2178,"end":2293,"name":"PUSH","value":"20"},{"begin":2178,"end":2293,"name":"PUSH","value":"4"},{"begin":2178,"end":2293,"name":"DUP3"},{"begin":2178,"end":2293,"name":"ADD"},{"begin":2178,"end":2293,"name":"MSTORE"},{"begin":2178,"end":2293,"name":"PUSH","value":"1D"},{"begin":2178,"end":2293,"name":"PUSH","value":"24"},{"begin":2178,"end":2293,"name":"DUP3"},{"begin":2178,"end":2293,"name":"ADD"},{"begin":2178,"end":2293,"name":"MSTORE"},{"begin":2178,"end":2293,"name":"PUSH","value":"546865726520616C726561647920697320612068696768657220626964000000"},{"begin":2178,"end":2293,"name":"PUSH","value":"44"},{"begin":2178,"end":2293,"name":"DUP3"},{"begin":2178,"end":2293,"name":"ADD"},{"begin":2178,"end":2293,"name":"MSTORE"},{"begin":2178,"end":2293,"name":"SWAP1"},{"begin":2178,"end":2293,"name":"MLOAD"},{"begin":2178,"end":2293,"name":"SWAP1"},{"begin":2178,"end":2293,"name":"DUP2"},{"begin":2178,"end":2293,"name":"SWAP1"},{"begin":2178,"end":2293,"name":"SUB"},{"begin":2178,"end":2293,"name":"PUSH","value":"64"},{"begin":2178,"end":2293,"name":"ADD"},{"begin":2178,"end":2293,"name":"SWAP1"},{"begin":2178,"end":2293,"name":"REVERT"},{"begin":2178,"end":2293,"name":"tag","value":"49"},{"begin":2178,"end":2293,"name":"JUMPDEST"},{"begin":2317,"end":2327,"name":"CALLER"},{"begin":2312,"end":2328,"name":"PUSH","value":"0"},{"begin":2312,"end":2328,"name":"DUP2"},{"begin":2312,"end":2328,"name":"DUP2"},{"begin":2312,"end":2328,"name":"MSTORE"},{"begin":2312,"end":2316,"name":"PUSH","value":"5"},{"begin":2312,"end":2328,"name":"PUSH","value":"20"},{"begin":2312,"end":2328,"name":"MSTORE"},{"begin":2312,"end":2328,"name":"PUSH","value":"40"},{"begin":2312,"end":2328,"name":"SWAP1"},{"begin":2312,"end":2328,"name":"KECCAK256"},{"begin":2312,"end":2341,"name":"DUP3"},{"begin":2312,"end":2341,"name":"SWAP1"},{"begin":2312,"end":2341,"name":"SSTORE"},{"begin":2351,"end":2364,"name":"PUSH","value":"4"},{"begin":2351,"end":2377,"name":"DUP1"},{"begin":2351,"end":2377,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":2351,"end":2377,"name":"AND"},{"begin":2351,"end":2377,"name":"SWAP1"},{"begin":2351,"end":2377,"name":"SWAP2"},{"begin":2351,"end":2377,"name":"OR"},{"begin":2351,"end":2377,"name":"SWAP1"},{"begin":2351,"end":2377,"name":"SSTORE"},{"begin":2387,"end":2397,"name":"PUSH","value":"3"},{"begin":2387,"end":2410,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":1699,"end":2455,"name":"JUMP","value":"[out]"},{"begin":484,"end":506,"name":"tag","value":"16"},{"begin":484,"end":506,"name":"JUMPDEST"},{"begin":484,"end":506,"name":"PUSH","value":"1"},{"begin":484,"end":506,"name":"SLOAD"},{"begin":484,"end":506,"name":"DUP2"},{"begin":484,"end":506,"name":"JUMP","value":"[out]"},{"begin":4184,"end":4449,"name":"tag","value":"19"},{"begin":4184,"end":4449,"name":"JUMPDEST"},{"begin":4236,"end":4243,"name":"PUSH","value":"0"},{"begin":4316,"end":4321,"name":"SLOAD"},{"begin":4316,"end":4321,"name":"PUSH","value":"1"},{"begin":4335,"end":4345,"name":"SLOAD"},{"begin":4359,"end":4371,"name":"PUSH","value":"2"},{"begin":4359,"end":4371,"name":"SLOAD"},{"begin":4385,"end":4395,"name":"PUSH","value":"3"},{"begin":4385,"end":4395,"name":"SLOAD"},{"begin":4409,"end":4422,"name":"PUSH","value":"4"},{"begin":4409,"end":4422,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":4316,"end":4321,"name":"SWAP5"},{"begin":4316,"end":4321,"name":"DUP6"},{"begin":4316,"end":4321,"name":"AND"},{"begin":4316,"end":4321,"name":"SWAP6"},{"begin":4335,"end":4345,"name":"SWAP4"},{"begin":4335,"end":4345,"name":"SWAP5"},{"begin":4359,"end":4371,"name":"PUSH","value":"FF"},{"begin":4359,"end":4371,"name":"SWAP1"},{"begin":4359,"end":4371,"name":"SWAP4"},{"begin":4359,"end":4371,"name":"AND"},{"begin":4359,"end":4371,"name":"SWAP4"},{"begin":4385,"end":4395,"name":"SWAP2"},{"begin":4385,"end":4395,"name":"SWAP3"},{"begin":4409,"end":4422,"name":"AND"},{"begin":4409,"end":4422,"name":"SWAP1"},{"begin":4184,"end":4449,"name":"JUMP","value":"[out]"},{"begin":671,"end":707,"name":"tag","value":"23"},{"begin":671,"end":707,"name":"JUMPDEST"},{"begin":671,"end":707,"name":"PUSH","value":"5"},{"begin":671,"end":707,"name":"PUSH","value":"20"},{"begin":671,"end":707,"name":"MSTORE"},{"begin":671,"end":707,"name":"PUSH","value":"0"},{"begin":671,"end":707,"name":"SWAP1"},{"begin":671,"end":707,"name":"DUP2"},{"begin":671,"end":707,"name":"MSTORE"},{"begin":671,"end":707,"name":"PUSH","value":"40"},{"begin":671,"end":707,"name":"SWAP1"},{"begin":671,"end":707,"name":"KECCAK256"},{"begin":671,"end":707,"name":"SLOAD"},{"begin":671,"end":707,"name":"DUP2"},{"begin":671,"end":707,"name":"JUMP","value":"[out]"},{"begin":568,"end":593,"name":"tag","value":"26"},{"begin":568,"end":593,"name":"JUMPDEST"},{"begin":568,"end":593,"name":"PUSH","value":"2"},{"begin":568,"end":593,"name":"SLOAD"},{"begin":568,"end":593,"name":"PUSH","value":"FF"},{"begin":568,"end":593,"name":"AND"},{"begin":568,"end":593,"name":"DUP2"},{"begin":568,"end":593,"name":"JUMP","value":"[out]"},{"begin":458,"end":478,"name":"tag","value":"30"},{"begin":458,"end":478,"name":"JUMPDEST"},{"begin":458,"end":478,"name":"PUSH","value":"0"},{"begin":458,"end":478,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":458,"end":478,"name":"AND"},{"begin":458,"end":478,"name":"DUP2"},{"begin":458,"end":478,"name":"JUMP","value":"[out]"},{"begin":1439,"end":1526,"name":"tag","value":"33"},{"begin":1439,"end":1526,"name":"JUMPDEST"},{"begin":1369,"end":1374,"name":"PUSH","value":"0"},{"begin":1369,"end":1374,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1369,"end":1374,"name":"AND"},{"begin":1355,"end":1365,"name":"CALLER"},{"begin":1355,"end":1374,"name":"EQ"},{"begin":1347,"end":1375,"name":"PUSH [tag]","value":"52"},{"begin":1347,"end":1375,"name":"JUMPI"},{"begin":1347,"end":1375,"name":"PUSH","value":"0"},{"begin":1347,"end":1375,"name":"DUP1"},{"begin":1347,"end":1375,"name":"REVERT"},{"begin":1347,"end":1375,"name":"tag","value":"52"},{"begin":1347,"end":1375,"name":"JUMPDEST"},{"begin":1490,"end":1502,"name":"PUSH","value":"2"},{"begin":1490,"end":1519,"name":"DUP1"},{"begin":1490,"end":1519,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1490,"end":1519,"name":"AND"},{"begin":1505,"end":1519,"name":"PUSH","value":"3"},{"begin":1490,"end":1519,"name":"OR"},{"begin":1490,"end":1519,"name":"SWAP1"},{"begin":1490,"end":1519,"name":"SSTORE"},{"begin":1439,"end":1526,"name":"JUMP","value":"[out]"},{"begin":632,"end":660,"name":"tag","value":"36"},{"begin":632,"end":660,"name":"JUMPDEST"},{"begin":632,"end":660,"name":"PUSH","value":"4"},{"begin":632,"end":660,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":632,"end":660,"name":"AND"},{"begin":632,"end":660,"name":"DUP2"},{"begin":632,"end":660,"name":"JUMP","value":"[out]"},{"begin":604,"end":626,"name":"tag","value":"39"},{"begin":604,"end":626,"name":"JUMPDEST"},{"begin":604,"end":626,"name":"PUSH","value":"3"},{"begin":604,"end":626,"name":"SLOAD"},{"begin":604,"end":626,"name":"DUP2"},{"begin":604,"end":626,"name":"JUMP","value":"[out]"},{"begin":2540,"end":4178,"name":"tag","value":"42"},{"begin":2540,"end":4178,"name":"JUMPDEST"},{"begin":2840,"end":2857,"name":"PUSH","value":"0"},{"begin":2840,"end":2857,"name":"DUP1"},{"begin":2668,"end":2682,"name":"PUSH","value":"3"},{"begin":2652,"end":2664,"name":"PUSH","value":"2"},{"begin":2652,"end":2664,"name":"SLOAD"},{"begin":2652,"end":2664,"name":"PUSH","value":"FF"},{"begin":2652,"end":2664,"name":"AND"},{"begin":2652,"end":2682,"name":"PUSH","value":"3"},{"begin":2652,"end":2682,"name":"DUP2"},{"begin":2652,"end":2682,"name":"GT"},{"begin":2652,"end":2682,"name":"ISZERO"},{"begin":2652,"end":2682,"name":"PUSH [tag]","value":"57"},{"begin":2652,"end":2682,"name":"JUMPI"},{"begin":2652,"end":2682,"name":"INVALID"},{"begin":2652,"end":2682,"name":"tag","value":"57"},{"begin":2652,"end":2682,"name":"JUMPDEST"},{"begin":2652,"end":2682,"name":"EQ"},{"begin":2652,"end":2703,"name":"DUP1"},{"begin":2652,"end":2703,"name":"PUSH [tag]","value":"58"},{"begin":2652,"end":2703,"name":"JUMPI"},{"begin":2652,"end":2703,"name":"POP"},{"begin":2693,"end":2703,"name":"PUSH","value":"1"},{"begin":2693,"end":2703,"name":"SLOAD"},{"begin":2686,"end":2689,"name":"TIMESTAMP"},{"begin":2686,"end":2703,"name":"LT"},{"begin":2686,"end":2703,"name":"ISZERO"},{"begin":2652,"end":2703,"name":"tag","value":"58"},{"begin":2652,"end":2703,"name":"JUMPDEST"},{"begin":2631,"end":2751,"name":"ISZERO"},{"begin":2631,"end":2751,"name":"ISZERO"},{"begin":2631,"end":2751,"name":"PUSH [tag]","value":"59"},{"begin":2631,"end":2751,"name":"JUMPI"},{"begin":2631,"end":2751,"name":"PUSH","value":"40"},{"begin":2631,"end":2751,"name":"DUP1"},{"begin":2631,"end":2751,"name":"MLOAD"},{"begin":2631,"end":2751,"name":"PUSH","value":"8C379A000000000000000000000000000000000000000000000000000000000"},{"begin":2631,"end":2751,"name":"DUP2"},{"begin":2631,"end":2751,"name":"MSTORE"},{"begin":2631,"end":2751,"name":"PUSH","value":"20"},{"begin":2631,"end":2751,"name":"PUSH","value":"4"},{"begin":2631,"end":2751,"name":"DUP3"},{"begin":2631,"end":2751,"name":"ADD"},{"begin":2631,"end":2751,"name":"MSTORE"},{"begin":2631,"end":2751,"name":"PUSH","value":"16"},{"begin":2631,"end":2751,"name":"PUSH","value":"24"},{"begin":2631,"end":2751,"name":"DUP3"},{"begin":2631,"end":2751,"name":"ADD"},{"begin":2631,"end":2751,"name":"MSTORE"},{"begin":2631,"end":2751,"name":"PUSH","value":"41756374696F6E206E6F742079657420656E6465642E00000000000000000000"},{"begin":2631,"end":2751,"name":"PUSH","value":"44"},{"begin":2631,"end":2751,"name":"DUP3"},{"begin":2631,"end":2751,"name":"ADD"},{"begin":2631,"end":2751,"name":"MSTORE"},{"begin":2631,"end":2751,"name":"SWAP1"},{"begin":2631,"end":2751,"name":"MLOAD"},{"begin":2631,"end":2751,"name":"SWAP1"},{"begin":2631,"end":2751,"name":"DUP2"},{"begin":2631,"end":2751,"name":"SWAP1"},{"begin":2631,"end":2751,"name":"SUB"},{"begin":2631,"end":2751,"name":"PUSH","value":"64"},{"begin":2631,"end":2751,"name":"ADD"},{"begin":2631,"end":2751,"name":"SWAP1"},{"begin":2631,"end":2751,"name":"REVERT"},{"begin":2631,"end":2751,"name":"tag","value":"59"},{"begin":2631,"end":2751,"name":"JUMPDEST"},{"begin":2792,"end":2797,"name":"PUSH","value":"0"},{"begin":2792,"end":2797,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2792,"end":2797,"name":"AND"},{"begin":2778,"end":2788,"name":"CALLER"},{"begin":2778,"end":2797,"name":"EQ"},{"begin":2778,"end":2797,"name":"DUP1"},{"begin":2778,"end":2821,"name":"PUSH [tag]","value":"60"},{"begin":2778,"end":2821,"name":"JUMPI"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2806,"end":2816,"name":"CALLER"},{"begin":2820,"end":2821,"name":"PUSH","value":"0"},{"begin":2801,"end":2817,"name":"SWAP1"},{"begin":2801,"end":2817,"name":"DUP2"},{"begin":2801,"end":2817,"name":"MSTORE"},{"begin":2801,"end":2805,"name":"PUSH","value":"5"},{"begin":2801,"end":2817,"name":"PUSH","value":"20"},{"begin":2801,"end":2817,"name":"MSTORE"},{"begin":2801,"end":2817,"name":"PUSH","value":"40"},{"begin":2801,"end":2817,"name":"DUP2"},{"begin":2801,"end":2817,"name":"KECCAK256"},{"begin":2801,"end":2817,"name":"SLOAD"},{"begin":2801,"end":2821,"name":"GT"},{"begin":2778,"end":2821,"name":"tag","value":"60"},{"begin":2778,"end":2821,"name":"JUMPDEST"},{"begin":2770,"end":2822,"name":"ISZERO"},{"begin":2770,"end":2822,"name":"ISZERO"},{"begin":2770,"end":2822,"name":"PUSH [tag]","value":"61"},{"begin":2770,"end":2822,"name":"JUMPI"},{"begin":2770,"end":2822,"name":"PUSH","value":"0"},{"begin":2770,"end":2822,"name":"DUP1"},{"begin":2770,"end":2822,"name":"REVERT"},{"begin":2770,"end":2822,"name":"tag","value":"61"},{"begin":2770,"end":2822,"name":"JUMPDEST"},{"begin":2914,"end":2928,"name":"PUSH","value":"3"},{"begin":2898,"end":2910,"name":"PUSH","value":"2"},{"begin":2898,"end":2910,"name":"SLOAD"},{"begin":2898,"end":2910,"name":"PUSH","value":"FF"},{"begin":2898,"end":2910,"name":"AND"},{"begin":2898,"end":2928,"name":"PUSH","value":"3"},{"begin":2898,"end":2928,"name":"DUP2"},{"begin":2898,"end":2928,"name":"GT"},{"begin":2898,"end":2928,"name":"ISZERO"},{"begin":2898,"end":2928,"name":"PUSH [tag]","value":"63"},{"begin":2898,"end":2928,"name":"JUMPI"},{"begin":2898,"end":2928,"name":"INVALID"},{"begin":2898,"end":2928,"name":"tag","value":"63"},{"begin":2898,"end":2928,"name":"JUMPDEST"},{"begin":2898,"end":2928,"name":"EQ"},{"begin":2895,"end":4027,"name":"ISZERO"},{"begin":2895,"end":4027,"name":"PUSH [tag]","value":"64"},{"begin":2895,"end":4027,"name":"JUMPI"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2967,"end":2977,"name":"CALLER"},{"begin":2999,"end":3015,"name":"PUSH","value":"0"},{"begin":2999,"end":3015,"name":"DUP2"},{"begin":2999,"end":3015,"name":"DUP2"},{"begin":2999,"end":3015,"name":"MSTORE"},{"begin":2999,"end":3003,"name":"PUSH","value":"5"},{"begin":2999,"end":3015,"name":"PUSH","value":"20"},{"begin":2999,"end":3015,"name":"MSTORE"},{"begin":2999,"end":3015,"name":"PUSH","value":"40"},{"begin":2999,"end":3015,"name":"DUP2"},{"begin":2999,"end":3015,"name":"KECCAK256"},{"begin":2999,"end":3015,"name":"DUP1"},{"begin":2999,"end":3015,"name":"SLOAD"},{"begin":3173,"end":3193,"name":"SWAP2"},{"begin":3173,"end":3193,"name":"SWAP1"},{"begin":3173,"end":3193,"name":"SSTORE"},{"begin":2895,"end":4027,"name":"PUSH [tag]","value":"69"},{"begin":2895,"end":4027,"name":"JUMP"},{"begin":2895,"end":4027,"name":"tag","value":"64"},{"begin":2895,"end":4027,"name":"JUMPDEST"},{"begin":3259,"end":3264,"name":"PUSH","value":"0"},{"begin":3259,"end":3264,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":3259,"end":3264,"name":"AND"},{"begin":3245,"end":3255,"name":"CALLER"},{"begin":3245,"end":3264,"name":"EQ"},{"begin":3242,"end":4018,"name":"ISZERO"},{"begin":3242,"end":4018,"name":"PUSH [tag]","value":"66"},{"begin":3242,"end":4018,"name":"JUMPI"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":3329,"end":3334,"name":"PUSH","value":"0"},{"begin":3329,"end":3334,"name":"SLOAD"},{"begin":3360,"end":3370,"name":"PUSH","value":"3"},{"begin":3360,"end":3370,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":3329,"end":3334,"name":"SWAP1"},{"begin":3329,"end":3334,"name":"SWAP2"},{"begin":3329,"end":3334,"name":"AND"},{"begin":3329,"end":3334,"name":"SWAP1"},{"begin":3242,"end":4018,"name":"PUSH [tag]","value":"69"},{"begin":3242,"end":4018,"name":"JUMP"},{"begin":3242,"end":4018,"name":"tag","value":"66"},{"begin":3242,"end":4018,"name":"JUMPDEST"},{"begin":3461,"end":3474,"name":"PUSH","value":"4"},{"begin":3461,"end":3474,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":3461,"end":3474,"name":"AND"},{"begin":3447,"end":3457,"name":"CALLER"},{"begin":3447,"end":3474,"name":"EQ"},{"begin":3443,"end":4005,"name":"ISZERO"},{"begin":3443,"end":4005,"name":"PUSH [tag]","value":"68"},{"begin":3443,"end":4005,"name":"JUMPI"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":3509,"end":3522,"name":"PUSH","value":"4"},{"begin":3509,"end":3522,"name":"SLOAD"},{"begin":3549,"end":3559,"name":"CALLER"},{"begin":3509,"end":3522,"name":"PUSH","value":"0"},{"begin":3544,"end":3560,"name":"SWAP1"},{"begin":3544,"end":3560,"name":"DUP2"},{"begin":3544,"end":3560,"name":"MSTORE"},{"begin":3544,"end":3548,"name":"PUSH","value":"5"},{"begin":3544,"end":3560,"name":"PUSH","value":"20"},{"begin":3544,"end":3560,"name":"MSTORE"},{"begin":3544,"end":3560,"name":"PUSH","value":"40"},{"begin":3544,"end":3560,"name":"DUP2"},{"begin":3544,"end":3560,"name":"KECCAK256"},{"begin":3544,"end":3564,"name":"DUP2"},{"begin":3544,"end":3564,"name":"SWAP1"},{"begin":3544,"end":3564,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":3509,"end":3522,"name":"SWAP1"},{"begin":3509,"end":3522,"name":"SWAP2"},{"begin":3509,"end":3522,"name":"AND"},{"begin":3509,"end":3522,"name":"SWAP1"},{"begin":3443,"end":4005,"name":"PUSH [tag]","value":"69"},{"begin":3443,"end":4005,"name":"JUMP"},{"begin":3443,"end":4005,"name":"tag","value":"68"},{"begin":3443,"end":4005,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":3735,"end":3745,"name":"CALLER"},{"begin":3775,"end":3791,"name":"PUSH","value":"0"},{"begin":3775,"end":3791,"name":"DUP2"},{"begin":3775,"end":3791,"name":"DUP2"},{"begin":3775,"end":3791,"name":"MSTORE"},{"begin":3775,"end":3779,"name":"PUSH","value":"5"},{"begin":3775,"end":3791,"name":"PUSH","value":"20"},{"begin":3775,"end":3791,"name":"MSTORE"},{"begin":3775,"end":3791,"name":"PUSH","value":"40"},{"begin":3775,"end":3791,"name":"DUP2"},{"begin":3775,"end":3791,"name":"KECCAK256"},{"begin":3775,"end":3791,"name":"DUP1"},{"begin":3775,"end":3791,"name":"SLOAD"},{"begin":3967,"end":3987,"name":"SWAP2"},{"begin":3967,"end":3987,"name":"SWAP1"},{"begin":3967,"end":3987,"name":"SSTORE"},{"begin":3443,"end":4005,"name":"tag","value":"69"},{"begin":3443,"end":4005,"name":"JUMPDEST"},{"begin":4062,"end":4075,"name":"PUSH","value":"4"},{"begin":4062,"end":4075,"name":"SLOAD"},{"begin":4077,"end":4087,"name":"PUSH","value":"3"},{"begin":4077,"end":4087,"name":"SLOAD"},{"begin":4049,"end":4088,"name":"PUSH","value":"40"},{"begin":4049,"end":4088,"name":"DUP1"},{"begin":4049,"end":4088,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":4062,"end":4075,"name":"SWAP1"},{"begin":4062,"end":4075,"name":"SWAP4"},{"begin":4062,"end":4075,"name":"AND"},{"begin":4049,"end":4088,"name":"DUP4"},{"begin":4049,"end":4088,"name":"MSTORE"},{"begin":4049,"end":4088,"name":"PUSH","value":"20"},{"begin":4049,"end":4088,"name":"DUP4"},{"begin":4049,"end":4088,"name":"ADD"},{"begin":4049,"end":4088,"name":"SWAP2"},{"begin":4049,"end":4088,"name":"SWAP1"},{"begin":4049,"end":4088,"name":"SWAP2"},{"begin":4049,"end":4088,"name":"MSTORE"},{"begin":4049,"end":4088,"name":"DUP1"},{"begin":4049,"end":4088,"name":"MLOAD"},{"begin":4049,"end":4088,"name":"PUSH","value":"DAEC4582D5D9595688C8C98545FDD1C696D41C6AEAEB636737E84ED2F5C00EDA"},{"begin":4049,"end":4088,"name":"SWAP3"},{"begin":4049,"end":4088,"name":"DUP2"},{"begin":4049,"end":4088,"name":"SWAP1"},{"begin":4049,"end":4088,"name":"SUB"},{"begin":4049,"end":4088,"name":"SWAP1"},{"begin":4049,"end":4088,"name":"SWAP2"},{"begin":4049,"end":4088,"name":"ADD"},{"begin":4049,"end":4088,"name":"SWAP1"},{"begin":4049,"end":4088,"name":"LOG1"},{"begin":4138,"end":4163,"name":"PUSH","value":"40"},{"begin":4138,"end":4163,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":4138,"end":4156,"name":"DUP4"},{"begin":4138,"end":4156,"name":"AND"},{"begin":4138,"end":4156,"name":"SWAP1"},{"begin":4138,"end":4163,"name":"PUSH","value":"8FC"},{"begin":4138,"end":4163,"name":"DUP4"},{"begin":4138,"end":4163,"name":"ISZERO"},{"begin":4138,"end":4163,"name":"MUL"},{"begin":4138,"end":4163,"name":"SWAP1"},{"begin":4138,"end":4163,"name":"DUP4"},{"begin":4138,"end":4163,"name":"SWAP1"},{"begin":4138,"end":4163,"name":"PUSH","value":"0"},{"begin":4138,"end":4163,"name":"DUP2"},{"begin":4138,"end":4163,"name":"DUP2"},{"begin":4138,"end":4163,"name":"DUP2"},{"begin":4138,"end":4163,"name":"DUP6"},{"begin":4138,"end":4156,"name":"DUP9"},{"begin":4138,"end":4163,"name":"DUP9"},{"begin":4138,"end":4163,"name":"CALL"},{"begin":4138,"end":4163,"name":"SWAP4"},{"begin":4138,"end":4163,"name":"POP"},{"begin":4138,"end":4163,"name":"POP"},{"begin":4138,"end":4163,"name":"POP"},{"begin":4138,"end":4163,"name":"POP"},{"begin":4138,"end":4163,"name":"ISZERO"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"70"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":45,"end":61,"name":"RETURNDATASIZE"},{"begin":42,"end":43,"name":"PUSH","value":"0"},{"begin":39,"end":40,"name":"DUP1"},{"begin":24,"end":62,"name":"RETURNDATACOPY"},{"begin":77,"end":93,"name":"RETURNDATASIZE"},{"begin":74,"end":75,"name":"PUSH","value":"0"},{"begin":67,"end":94,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"70"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":4138,"end":4163,"name":"POP"},{"begin":2540,"end":4178,"name":"POP"},{"begin":2540,"end":4178,"name":"POP"},{"begin":2540,"end":4178,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b5060405160408061066483398101604052805160209091015160008054600160a060020a031916600160a060020a038316179055600280546001919060ff1916828002179055505042016001556105f88061006c6000396000f3006080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631998aeef81146100a85780632a24f46c146100c45780634051ddac146100eb57806362ea82db146101645780637fb45099146101855780638da5cb5b146101be5780638fa8b790146101ef57806391f9015714610206578063d57bde791461021b578063f77282ab14610230575b600080fd5b6100b0610245565b604080519115158252519081900360200190f35b3480156100d057600080fd5b506100d961033e565b60408051918252519081900360200190f35b3480156100f757600080fd5b50610100610344565b6040518086600160a060020a0316600160a060020a0316815260200185815260200184600381111561012e57fe5b60ff16815260200183815260200182600160a060020a0316600160a060020a031681526020019550505050505060405180910390f35b34801561017057600080fd5b506100d9600160a060020a036004351661036d565b34801561019157600080fd5b5061019a61037f565b604051808260038111156101aa57fe5b60ff16815260200191505060405180910390f35b3480156101ca57600080fd5b506101d3610388565b60408051600160a060020a039092168252519081900360200190f35b3480156101fb57600080fd5b50610204610397565b005b34801561021257600080fd5b506101d36103bd565b34801561022757600080fd5b506100d96103cc565b34801561023c57600080fd5b506102046103d2565b600080548190600160a060020a031633141561026057600080fd5b600160025460ff16600381111561027357fe5b1461027d57600080fd5b50336000908152600560205260409020546003543490910190811161030357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f546865726520616c726561647920697320612068696768657220626964000000604482015290519081900360640190fd5b3360008181526005602052604090208290556004805473ffffffffffffffffffffffffffffffffffffffff1916909117905560035550600190565b60015481565b600054600154600254600354600454600160a060020a039485169460ff90931692169091929394565b60056020526000908152604090205481565b60025460ff1681565b600054600160a060020a031681565b600054600160a060020a031633146103ae57600080fd5b6002805460ff19166003179055565b600454600160a060020a031681565b60035481565b600080600360025460ff1660038111156103e857fe5b14806103f657506001544210155b151561046357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f41756374696f6e206e6f742079657420656e6465642e00000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316331480610489575033600090815260056020526040812054115b151561049457600080fd5b600360025460ff1660038111156104a757fe5b14156104c85750503360008181526005602052604081208054919055610546565b600054600160a060020a03163314156104f4575050600054600354600160a060020a0390911690610546565b600454600160a060020a031633141561052f575050600454336000908152600560205260408120819055600160a060020a0390911690610546565b505033600081815260056020526040812080549190555b60045460035460408051600160a060020a039093168352602083019190915280517fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda9281900390910190a1604051600160a060020a0383169082156108fc029083906000818181858888f193505050501580156105c7573d6000803e3d6000fd5b5050505600a165627a7a723058204aa7a61446694586eeab80529ca6416fb2ea242f8ddf29621a3af8188eee56250029","functionHashes":{"auctionEnd()":"2a24f46c","auctionState()":"7fb45099","bid()":"1998aeef","bids(address)":"62ea82db","cancelAuction()":"8fa8b790","finalizeAuction()":"f77282ab","getSummary()":"4051ddac","highestBid()":"d57bde79","highestBidder()":"91f90157","owner()":"8da5cb5b"},"gasEstimates":{"creation":[61024,305600],"external":{"auctionEnd()":406,"auctionState()":517,"bid()":61549,"bids(address)":597,"cancelAuction()":20783,"finalizeAuction()":null,"getSummary()":1640,"highestBid()":560,"highestBidder()":691,"owner()":647},"internal":{}},"interface":"[{\"constant\":false,\"inputs\":[],\"name\":\"bid\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"auctionEnd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint8\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"bids\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"auctionState\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"cancelAuction\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBidder\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBid\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalizeAuction\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_biddingTime\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"bidder\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"HighestBidIncreased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AuctionEnded\",\"type\":\"event\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"bid\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"auctionEnd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint8\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"bids\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"auctionState\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"cancelAuction\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBidder\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBid\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finalizeAuction\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_biddingTime\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"bidder\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"HighestBidIncreased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AuctionEnded\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{\"bid()\":{\"notice\":\"Bid on the auction with the value sent together with this transaction. The value will only be refunded if the  auction is not won.\"},\"finalizeAuction()\":{\"notice\":\"End the auction and send the highest bid to the auction owner.\"}}}},\"settings\":{\"compilationTarget\":{\"\":\"Auction\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x36cb353d58051d7f9f959a91bd3aa4940c1c9156ab5013d0a4922d50c529bf58\",\"urls\":[\"bzzr://3e0e6bab1d8fc9256ef36aeb5a7fc321e4314d828e8ad629c0e07811b63a78dd\"]}},\"version\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x664 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 SWAP2 SWAP1 PUSH1 0xFF NOT AND DUP3 DUP1 MUL OR SWAP1 SSTORE POP POP TIMESTAMP ADD PUSH1 0x1 SSTORE PUSH2 0x5F8 DUP1 PUSH2 0x6C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA3 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x1998AEEF DUP2 EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0x2A24F46C EQ PUSH2 0xC4 JUMPI DUP1 PUSH4 0x4051DDAC EQ PUSH2 0xEB JUMPI DUP1 PUSH4 0x62EA82DB EQ PUSH2 0x164 JUMPI DUP1 PUSH4 0x7FB45099 EQ PUSH2 0x185 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x1BE JUMPI DUP1 PUSH4 0x8FA8B790 EQ PUSH2 0x1EF JUMPI DUP1 PUSH4 0x91F90157 EQ PUSH2 0x206 JUMPI DUP1 PUSH4 0xD57BDE79 EQ PUSH2 0x21B JUMPI DUP1 PUSH4 0xF77282AB EQ PUSH2 0x230 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB0 PUSH2 0x245 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xD0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD9 PUSH2 0x33E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x100 PUSH2 0x344 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP7 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x12E JUMPI INVALID JUMPDEST PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x20 ADD SWAP6 POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x170 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD9 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x36D JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x191 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19A PUSH2 0x37F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x1AA JUMPI INVALID JUMPDEST PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1CA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D3 PUSH2 0x388 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1FB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x204 PUSH2 0x397 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x212 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1D3 PUSH2 0x3BD JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x227 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD9 PUSH2 0x3CC JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x23C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x204 PUSH2 0x3D2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP2 SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ ISZERO PUSH2 0x260 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x2 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x273 JUMPI INVALID JUMPDEST EQ PUSH2 0x27D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x3 SLOAD CALLVALUE SWAP1 SWAP2 ADD SWAP1 DUP2 GT PUSH2 0x303 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1D PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x546865726520616C726561647920697320612068696768657220626964000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP3 SWAP1 SSTORE PUSH1 0x4 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x3 SSTORE POP PUSH1 0x1 SWAP1 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP5 DUP6 AND SWAP5 PUSH1 0xFF SWAP1 SWAP4 AND SWAP3 AND SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x3AE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x3 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x4 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x3 PUSH1 0x2 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x3E8 JUMPI INVALID JUMPDEST EQ DUP1 PUSH2 0x3F6 JUMPI POP PUSH1 0x1 SLOAD TIMESTAMP LT ISZERO JUMPDEST ISZERO ISZERO PUSH2 0x463 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x41756374696F6E206E6F742079657420656E6465642E00000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ DUP1 PUSH2 0x489 JUMPI POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD GT JUMPDEST ISZERO ISZERO PUSH2 0x494 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x3 PUSH1 0x2 SLOAD PUSH1 0xFF AND PUSH1 0x3 DUP2 GT ISZERO PUSH2 0x4A7 JUMPI INVALID JUMPDEST EQ ISZERO PUSH2 0x4C8 JUMPI POP POP CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD SWAP2 SWAP1 SSTORE PUSH2 0x546 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ ISZERO PUSH2 0x4F4 JUMPI POP POP PUSH1 0x0 SLOAD PUSH1 0x3 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 PUSH2 0x546 JUMP JUMPDEST PUSH1 0x4 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ ISZERO PUSH2 0x52F JUMPI POP POP PUSH1 0x4 SLOAD CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP2 SWAP1 SSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 PUSH2 0x546 JUMP JUMPDEST POP POP CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD SWAP2 SWAP1 SSTORE JUMPDEST PUSH1 0x4 SLOAD PUSH1 0x3 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP4 AND DUP4 MSTORE PUSH1 0x20 DUP4 ADD SWAP2 SWAP1 SWAP2 MSTORE DUP1 MLOAD PUSH32 0xDAEC4582D5D9595688C8C98545FDD1C696D41C6AEAEB636737E84ED2F5C00EDA SWAP3 DUP2 SWAP1 SUB SWAP1 SWAP2 ADD SWAP1 LOG1 PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND SWAP1 DUP3 ISZERO PUSH2 0x8FC MUL SWAP1 DUP4 SWAP1 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x5C7 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4a 0xa7 0xa6 EQ 0x46 PUSH10 0x4586EEAB80529CA6416F 0xb2 0xea 0x24 0x2f DUP14 0xdf 0x29 PUSH3 0x1A3AF8 XOR DUP15 0xee JUMP 0x25 STOP 0x29 ","runtimeBytecode":"6080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631998aeef81146100a85780632a24f46c146100c45780634051ddac146100eb57806362ea82db146101645780637fb45099146101855780638da5cb5b146101be5780638fa8b790146101ef57806391f9015714610206578063d57bde791461021b578063f77282ab14610230575b600080fd5b6100b0610245565b604080519115158252519081900360200190f35b3480156100d057600080fd5b506100d961033e565b60408051918252519081900360200190f35b3480156100f757600080fd5b50610100610344565b6040518086600160a060020a0316600160a060020a0316815260200185815260200184600381111561012e57fe5b60ff16815260200183815260200182600160a060020a0316600160a060020a031681526020019550505050505060405180910390f35b34801561017057600080fd5b506100d9600160a060020a036004351661036d565b34801561019157600080fd5b5061019a61037f565b604051808260038111156101aa57fe5b60ff16815260200191505060405180910390f35b3480156101ca57600080fd5b506101d3610388565b60408051600160a060020a039092168252519081900360200190f35b3480156101fb57600080fd5b50610204610397565b005b34801561021257600080fd5b506101d36103bd565b34801561022757600080fd5b506100d96103cc565b34801561023c57600080fd5b506102046103d2565b600080548190600160a060020a031633141561026057600080fd5b600160025460ff16600381111561027357fe5b1461027d57600080fd5b50336000908152600560205260409020546003543490910190811161030357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f546865726520616c726561647920697320612068696768657220626964000000604482015290519081900360640190fd5b3360008181526005602052604090208290556004805473ffffffffffffffffffffffffffffffffffffffff1916909117905560035550600190565b60015481565b600054600154600254600354600454600160a060020a039485169460ff90931692169091929394565b60056020526000908152604090205481565b60025460ff1681565b600054600160a060020a031681565b600054600160a060020a031633146103ae57600080fd5b6002805460ff19166003179055565b600454600160a060020a031681565b60035481565b600080600360025460ff1660038111156103e857fe5b14806103f657506001544210155b151561046357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f41756374696f6e206e6f742079657420656e6465642e00000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316331480610489575033600090815260056020526040812054115b151561049457600080fd5b600360025460ff1660038111156104a757fe5b14156104c85750503360008181526005602052604081208054919055610546565b600054600160a060020a03163314156104f4575050600054600354600160a060020a0390911690610546565b600454600160a060020a031633141561052f575050600454336000908152600560205260408120819055600160a060020a0390911690610546565b505033600081815260056020526040812080549190555b60045460035460408051600160a060020a039093168352602083019190915280517fdaec4582d5d9595688c8c98545fdd1c696d41c6aeaeb636737e84ed2f5c00eda9281900390910190a1604051600160a060020a0383169082156108fc029083906000818181858888f193505050501580156105c7573d6000803e3d6000fd5b5050505600a165627a7a723058204aa7a61446694586eeab80529ca6416fb2ea242f8ddf29621a3af8188eee56250029","srcmap":"403:4053:0:-;;;1019:199;8:9:-1;5:2;;;30:1;27;20:12;5:2;1019:199:0;;;;;;;;;;;;;;;;;;;1104:5;:14;;-1:-1:-1;;;;;;1104:14:0;-1:-1:-1;;;;;1104:14:0;;;;;1128:12;:28;;-1:-1:-1;;1128:12:0;-1:-1:-1;;1128:28:0;-1:-1:-1;;1128:28:0;;;;-1:-1:-1;;1187:3:0;:18;1174:10;:31;403:4053;;;;;;","srcmapRuntime":"403:4053:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1699:756;;;;;;;;;;;;;;;;;;;;;;484:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;484:22:0;;;;;;;;;;;;;;;;;;;;4184:265;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4184:265:0;;;;;;;;-1:-1:-1;;;;;4184:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4184:265:0;;;;;;;;;;;;;;;;;-1:-1:-1;4184:265:0;-1:-1:-1;;4184:265:0;671:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;671:36:0;;;-1:-1:-1;;;;;671:36:0;;;568:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;568:25:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;458:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;458:20:0;;;;;;;;-1:-1:-1;;;;;458:20:0;;;;;;;;;;;;;;1439:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1439:87:0;;;;;;632:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;632:28:0;;;;604:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;604:22:0;;;;2540:1638;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2540:1638:0;;;;1699:756;1746:4;1279:5;;1746:4;;-1:-1:-1;;;;;1279:5:0;1265:10;:19;;1257:28;;;;;;2037:13;2021:12;;;;:29;;;;;;;;;2013:38;;;;;;-1:-1:-1;2136:10:0;2131:16;;;;:4;:16;;;;;;2212:10;;2150:9;2131:28;;;;2199:23;;2178:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2317:10;2312:16;;;;:4;:16;;;;;:29;;;2351:13;:26;;-1:-1:-1;;2351:26:0;;;;;;2387:10;:23;-1:-1:-1;;;1699:756:0:o;484:22::-;;;;:::o;4184:265::-;4236:7;4316:5;;4335:10;4359:12;;4385:10;;4409:13;;-1:-1:-1;;;;;4316:5:0;;;;4335:10;;4359:12;;;;;4385:10;;4409:13;;4184:265::o;671:36::-;;;;;;;;;;;;;:::o;568:25::-;;;;;;:::o;458:20::-;;;-1:-1:-1;;;;;458:20:0;;:::o;1439:87::-;1369:5;;-1:-1:-1;;;;;1369:5:0;1355:10;:19;1347:28;;;;;;1490:12;:29;;-1:-1:-1;;1490:29:0;1505:14;1490:29;;;1439:87::o;632:28::-;;;-1:-1:-1;;;;;632:28:0;;:::o;604:22::-;;;;:::o;2540:1638::-;2840:17;;2668:14;2652:12;;;;:30;;;;;;;;;:51;;;;2693:10;;2686:3;:17;;2652:51;2631:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2792:5;;-1:-1:-1;;;;;2792:5:0;2778:10;:19;;:43;;-1:-1:-1;2806:10:0;2820:1;2801:16;;;:4;:16;;;;;;:20;2778:43;2770:52;;;;;;;;2914:14;2898:12;;;;:30;;;;;;;;;2895:1132;;;-1:-1:-1;;2967:10:0;2999:16;;;;:4;:16;;;;;;;3173:20;;;2895:1132;;;3259:5;;-1:-1:-1;;;;;3259:5:0;3245:10;:19;3242:776;;;-1:-1:-1;;3329:5:0;;3360:10;;-1:-1:-1;;;;;3329:5:0;;;;3242:776;;;3461:13;;-1:-1:-1;;;;;3461:13:0;3447:10;:27;3443:562;;;-1:-1:-1;;3509:13:0;;3549:10;3509:13;3544:16;;;:4;:16;;;;;:20;;;-1:-1:-1;;;;;3509:13:0;;;;3443:562;;;-1:-1:-1;;3735:10:0;3775:16;;;;:4;:16;;;;;;;3967:20;;;3443:562;4062:13;;4077:10;;4049:39;;;-1:-1:-1;;;;;4062:13:0;;;4049:39;;;;;;;;;;;;;;;;;;;;;4138:25;;-1:-1:-1;;;;;4138:18:0;;;:25;;;;;;;;;;;;:18;:25;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4138:25:0;2540:1638;;:::o"}

/***/ }),

/***/ "./ethereum/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);


var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else {
  var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/f2e6f5bf8bac405ab171ef1957f81da3");

  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "./pages/auctions/show.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_auction__ = __webpack_require__("./ethereum/auction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PlaceBidForm__ = __webpack_require__("./components/PlaceBidForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);

var _jsxFileName = '/home/ziwei/Documents/ethereum/ziwei_DAPPs/auction_market/pages/auctions/show.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AuctionShow = function (_Component) {
    _inherits(AuctionShow, _Component);

    function AuctionShow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, AuctionShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AuctionShow.__proto__ || Object.getPrototypeOf(AuctionShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loadingFinalize: false,
            loadingCancel: false
        }, _this.finalize = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var auction, accounts;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                auction = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_auction__["a" /* default */])(_this.props.address);


                                _this.setState({ loadingFinalize: true, errorMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return auction.methods.finalizeAuction().send({
                                    from: accounts[0]
                                });

                            case 9:

                                __WEBPACK_IMPORTED_MODULE_7__routes__["Router"].replaceRoute('/auctions/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                _this.setState({ loadingFinalize: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.cancel = function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(event) {
                var auction, accounts;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();

                                auction = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_auction__["a" /* default */])(_this.props.address);


                                _this.setState({ loadingCancel: true, errorMessage: '' });

                                _context2.prev = 3;
                                _context2.next = 6;
                                return __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].eth.getAccounts();

                            case 6:
                                accounts = _context2.sent;
                                _context2.next = 9;
                                return auction.methods.cancelAuction().send({
                                    from: accounts[0]
                                });

                            case 9:

                                __WEBPACK_IMPORTED_MODULE_7__routes__["Router"].replaceRoute('/auctions/' + _this.props.address);
                                _context2.next = 15;
                                break;

                            case 12:
                                _context2.prev = 12;
                                _context2.t0 = _context2['catch'](3);

                                _this.setState({ errorMessage: _context2.t0.message });

                            case 15:
                                _this.setState({ loadingCancel: false });

                            case 16:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[3, 12]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AuctionShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                owner = _props.owner,
                auctionEnd = _props.auctionEnd,
                auctionState = _props.auctionState,
                highestBid = _props.highestBid,
                highestBidder = _props.highestBidder;


            var auctionEndTime = new Date(auctionEnd * 1000).toString();

            var getCurrentState = function getCurrentState(x, y) {
                var currentState = '';
                if (x !== 3 && y * 1000 < Date.now()) {
                    currentState = 'Ended';
                } else {
                    switch (x) {
                        case 0:
                            currentState = 'Started';
                            break;
                        case 1:
                            currentState = 'Running';
                            break;
                        case 2:
                            currentState = 'Ended';
                            break;
                        case 3:
                            currentState = 'Canceled';
                            break;
                    }
                }

                return currentState;
            };

            var currentState = getCurrentState(Number(auctionState), Number(auctionEnd));

            var items = [{
                header: owner,
                meta: 'Address of Owner',
                description: 'The owner created this auction.',
                style: { overflowWrap: 'break-word' }
            }, {
                header: auctionEndTime,
                meta: 'Auction ending time and date',
                description: 'This auction will end at this time and date.',
                style: { overflowWrap: 'break-word' }
            }, {
                header: currentState,
                meta: 'The state this auction is currently in',
                description: 'An auction has four states: Started, Running, Ended, Canceled',
                style: { overflowWrap: 'break-word' }
            }, {
                header: __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].utils.fromWei(highestBid, 'ether'),
                meta: 'Highest bid in (ether)',
                description: 'The highest bidding amount in ether .',
                style: { overflowWrap: 'break-word' }
            }, {
                header: highestBidder,
                meta: 'Highest Bidder',
                description: 'The person who bids the highest amount.',
                style: { overflowWrap: 'break-word' }
            }];

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 148
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h3',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 149
                        }
                    },
                    'Auction Show'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 151
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column,
                        { width: 10, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 152
                            }
                        },
                        this.renderCards()
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column,
                        { width: 6, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 156
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PlaceBidForm__["a" /* default */], { address: this.props.address, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 157
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                            { onClick: this.finalize, color: 'teal', style: { marginTop: '70px' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 159
                                }
                            },
                            'Finallize'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                            { onClick: this.cancel, loading: this.state.loadingCancel, negative: true, style: { marginTop: '70px', float: 'right' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 160
                                }
                            },
                            'Cacel auction'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 161
                                }
                            },
                            this.state.errorMessage
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { style: { marginTop: '70px' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 163
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'h5',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 164
                                    }
                                },
                                'Action Description'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'ul',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 165
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'li',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 166
                                        }
                                    },
                                    'An auction will only accept bids when it is in the ',
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'b',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 166
                                            }
                                        },
                                        'Running'
                                    ),
                                    ' state.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'li',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 167
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'b',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 167
                                            }
                                        },
                                        'Place bids'
                                    ),
                                    ': If you never place a bid on this auction before, please enter an amount higher than the current highest bid; If you have already placed a bid on this auction, you can add an extra amount to increase your bid amount.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'li',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 168
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'b',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 168
                                            }
                                        },
                                        'Finalize'
                                    ),
                                    ': Only finalize if the auction is canceled or after the auction ends. If you are not the highest bidder, you will get all your bidding amount sent back to you.'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'li',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 169
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'b',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 169
                                            }
                                        },
                                        'Cancel auction'
                                    ),
                                    ': ',
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'b',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 169
                                            }
                                        },
                                        'Only the auction owner'
                                    ),
                                    ' can cancel the auction in case of emergencies. This is to protect the bidders from any financial loss.'
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(props) {
                var auction, summary;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                auction = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_auction__["a" /* default */])(props.query.address);
                                _context3.next = 3;
                                return auction.methods.getSummary().call();

                            case 3:
                                summary = _context3.sent;
                                return _context3.abrupt('return', {
                                    address: props.query.address,
                                    owner: summary[0],
                                    auctionEnd: summary[1],
                                    auctionState: summary[2],
                                    highestBid: summary[3],
                                    highestBidder: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getInitialProps(_x3) {
                return _ref4.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return AuctionShow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuctionShow);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/auctions/new', '/auctions/new').add('/auctions/:address', '/auctions/show');

module.exports = routes;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/auctions/show.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=show.js.map