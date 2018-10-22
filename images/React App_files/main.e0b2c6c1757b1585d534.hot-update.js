webpackHotUpdate("main",{

/***/ "./src/components/Epcot.js":
/*!*********************************!*\
  !*** ./src/components/Epcot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RidesRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RidesRow */ "./src/components/RidesRow.js");
/* harmony import */ var _RestaurantRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestaurantRow */ "./src/components/RestaurantRow.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Map */ "./src/components/Map.js");





var _jsxFileName = "/Users/amandagorfine/Desktop/HomeWork/project-2/project2/src/components/Epcot.js";





var Epcot =
/*#__PURE__*/
function (_Component) {
  Object(_Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Epcot, _Component);

  function Epcot() {
    Object(_Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Epcot);

    return Object(_Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Epcot).apply(this, arguments));
  }

  Object(_Users_amandagorfine_Desktop_HomeWork_project_2_project2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Epcot, [{
    key: "updateHistory",
    value: function updateHistory() {
      this.props.history.push('./');
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var land = this.props.data ? this.props.data.orlando.parks[1] : ''; // console.log(rides)

      var rides = land.lands.map(function (land, i) {
        return land.attractions ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RidesRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
          land: land,
          key: i,
          onFaveToggle: function onFaveToggle() {
            return _this.props.onFaveToggle(land);
          },
          isFave: function isFave() {
            return _this.props.faves.includes();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }) : '';
      });
      var restaurants = land.lands.map(function (land, i) {
        return land.dining ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RestaurantRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
          land: land,
          key: i,
          onFaveToggle: function onFaveToggle() {
            return _this.props.onFaveToggle(land);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }) : '';
      });
      var viewport = {
        width: 600,
        height: 400,
        latitude: 28.3597,
        longitude: -81.5913,
        zoom: 16
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "epcot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Walt Disney World"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "homeButton",
        onClick: function onClick() {
          return _this.props.history.push('/');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Home "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "faveButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Favorites"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "parkContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "parkName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "parkTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Epcot")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
        viewport: viewport,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "parkPageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ridesDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "rideTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " Rides"), rides), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "restaurantDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "restaurantTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, " Dining"), restaurants))));
    }
  }]);

  return Epcot;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Epcot);

/***/ })

})
//# sourceMappingURL=main.e0b2c6c1757b1585d534.hot-update.js.map