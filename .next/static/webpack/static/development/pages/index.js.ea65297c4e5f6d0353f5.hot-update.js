webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.jsx":
/*!************************************!*\
  !*** ./components/ChannelGrid.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// import {Link} from '../routes';



var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelGrid, _React$Component);

  function ChannelGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var vehicles = this.props.vehicles; // <Link route='channel' params={{slug:slug(channel.title), id:channel.id}} prefetch></Link>

      return __jsx("div", {
        className: "jsx-4264868884" + " " + "channels"
      }, vehicles.map(function (vehicle, i) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "usados",
          as: vehicle.Href,
          key: i
        }, __jsx("a", {
          className: "jsx-4264868884" + " " + "channel"
        }, __jsx("h2", {
          className: "jsx-4264868884"
        }, vehicle.Name), __jsx("img", {
          src: 'https://ecuador.patiotuerca.com/' + vehicle.ImageURL,
          alt: "",
          className: "jsx-4264868884"
        }), __jsx("p", {
          className: "jsx-4264868884"
        }, "Modelos:")));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4264868884"
      }, ".channels.jsx-4264868884{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-4264868884{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-4264868884 img.jsx-4264868884{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-4264868884{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c3VhcmlvL0RvY3VtZW50cy9uZXh0anMvYXV0b3MuanMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUc0QixBQU1DLEFBTUksQUFLTixZQUNJLENBakJGLENBTU0sSUFNdUIsU0FYOUIsQ0FpQkcsTUFYTCxNQUxpRCxJQWlCbkQsQ0FYWSxRQVlILEtBUFAsV0FDYixFQU9BLHdCQVpBLEdBTkEiLCJmaWxlIjoiL1VzZXJzL3VzdWFyaW8vRG9jdW1lbnRzL25leHRqcy9hdXRvcy5qcy9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge3ZlaGljbGVzfSA9IHRoaXMucHJvcHM7XG4gICAgICAvLyA8TGluayByb3V0ZT0nY2hhbm5lbCcgcGFyYW1zPXt7c2x1ZzpzbHVnKGNoYW5uZWwudGl0bGUpLCBpZDpjaGFubmVsLmlkfX0gcHJlZmV0Y2g+PC9MaW5rPlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgIHt2ZWhpY2xlcy5tYXAoKHZlaGljbGUsIGkpID0+IChcbiAgICAgICAgICA8TGluayBocmVmPVwidXNhZG9zXCIgYXM9e3ZlaGljbGUuSHJlZn0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cbiAgICAgICAgICAgICAgPGgyPnt2ZWhpY2xlLk5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2VjdWFkb3IucGF0aW90dWVyY2EuY29tLycrdmVoaWNsZS5JbWFnZVVSTH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPHA+TW9kZWxvczo8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuY2hhbm5lbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/usuario/Documents/nextjs/autos.js/components/ChannelGrid.jsx */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.ea65297c4e5f6d0353f5.hot-update.js.map