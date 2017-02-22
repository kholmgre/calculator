/******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Calculator_1 = __webpack_require__(3);
	var Index = (function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement(Calculator_1.default, null);
	    };
	    return Index;
	}(React.Component));
	ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var InputView = (function (_super) {
	    __extends(InputView, _super);
	    function InputView() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    InputView.prototype.render = function () {
	        if (this.props.input.length == 0) {
	            return React.createElement("div", null);
	        }
	        return (React.createElement("div", null,
	            React.createElement("div", null, this.props.input.reduce(function (acc, val) {
	                if (val === '+' || val === '-') {
	                    return acc + ' ' + val;
	                }
	                else {
	                    if (acc.charAt(acc.length - 1) === '-' || acc.charAt(acc.length - 1) === '+') {
	                        return acc + ' ' + val;
	                    }
	                    else {
	                        return acc + val;
	                    }
	                }
	            })),
	            React.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } },
	                React.createElement("div", null, this.props.result))));
	    };
	    return InputView;
	}(React.Component));
	var Numbers = (function (_super) {
	    __extends(Numbers, _super);
	    function Numbers() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Numbers.prototype.render = function () {
	        var _this = this;
	        var generateInputElements = function (numbers) {
	            var mapped = numbers.map(function (a, i) {
	                var createElementFromNumber = function (n) {
	                    return React.createElement("input", { type: "button", key: n, className: "number_button", onClick: function () { _this.props.onNumberClick(n); }, value: n });
	                };
	                var elements = a.map(function (n) { return createElementFromNumber(n); });
	                return React.createElement("div", { className: "button_row", key: i }, elements);
	            });
	            return React.createElement("div", null, mapped);
	        };
	        var numbersArr = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
	        var numbers = generateInputElements(numbersArr);
	        return (React.createElement("div", { className: "numbers" }, numbers));
	    };
	    return Numbers;
	}(React.Component));
	var Calculator = (function (_super) {
	    __extends(Calculator, _super);
	    function Calculator() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            input: [],
	            finished: false,
	            result: 0
	        };
	        return _this;
	    }
	    Calculator.prototype.reset = function () {
	        this.setState({ input: [], finished: false, result: 0 });
	    };
	    Calculator.prototype.result = function () {
	        var result = eval(this.state.input.reduce(function (acc, val) {
	            if (val === '+' || val === '-') {
	                return acc + ' ' + val;
	            }
	            else {
	                return acc + val;
	            }
	        }));
	        this.setState({ result: result, finished: true });
	    };
	    Calculator.prototype.input = function (str) {
	        if (this.state.finished === true) {
	            this.reset();
	        }
	        this.setState({ input: this.state.input.concat([str.toString()]) });
	    };
	    Calculator.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null,
	            React.createElement(InputView, { input: this.state.input, result: this.state.result }),
	            React.createElement(Numbers, { onNumberClick: this.input.bind(this) }),
	            React.createElement("div", { className: "button_row" },
	                React.createElement("input", { type: "button", className: "number_button", value: "=", onClick: this.result.bind(this) }),
	                React.createElement("input", { type: "button", className: "number_button", value: "+", onClick: function () { _this.input("+"); } }),
	                React.createElement("input", { type: "button", className: "number_button", value: "-", onClick: function () { _this.input("-"); } }),
	                React.createElement("input", { type: "button", className: "number_button", value: "C", onClick: function () { _this.reset(); } }))));
	    };
	    return Calculator;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Calculator;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map