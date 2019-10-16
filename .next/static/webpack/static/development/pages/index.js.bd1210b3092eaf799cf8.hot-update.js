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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import Link from 'next/link'



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
        return __jsx("div", {
          key: i,
          className: "jsx-4264868884"
        }, __jsx("div", {
          className: "jsx-4264868884" + " " + "channel"
        }, __jsx("h2", {
          className: "jsx-4264868884"
        }, vehicle.Name), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          route: "usados",
          as: vehicle.Href,
          key: i
        }, __jsx("a", {
          className: "jsx-4264868884"
        }, __jsx("img", {
          src: 'https://ecuador.patiotuerca.com/' + vehicle.ImageURL,
          alt: "",
          className: "jsx-4264868884"
        }))), __jsx("div", {
          className: "jsx-4264868884"
        }, __jsx("p", {
          className: "jsx-4264868884"
        }, "Modelos:"), vehicle.Models.map(function (model, x) {
          return __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            href: "usados",
            as: model.Href,
            key: x
          }, __jsx("a", {
            className: "jsx-4264868884"
          }, __jsx("div", {
            className: "jsx-4264868884"
          }, model.Name)));
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4264868884"
      }, ".channels.jsx-4264868884{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-4264868884{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-4264868884 img.jsx-4264868884{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-4264868884{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c3VhcmlvL0RvY3VtZW50cy9uZXh0anMvYXV0b3MuanMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUc0QixBQU1DLEFBTUksQUFLTixZQUNJLENBakJGLENBTU0sSUFNdUIsU0FYOUIsQ0FpQkcsTUFYTCxNQUxpRCxJQWlCbkQsQ0FYWSxRQVlILEtBUFAsV0FDYixFQU9BLHdCQVpBLEdBTkEiLCJmaWxlIjoiL1VzZXJzL3VzdWFyaW8vRG9jdW1lbnRzL25leHRqcy9hdXRvcy5qcy9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmVoaWNsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gPExpbmsgcm91dGU9J2NoYW5uZWwnIHBhcmFtcz17e3NsdWc6c2x1ZyhjaGFubmVsLnRpdGxlKSwgaWQ6Y2hhbm5lbC5pZH19IHByZWZldGNoPjwvTGluaz5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxuICAgICAgICB7dmVoaWNsZXMubWFwKCh2ZWhpY2xlLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgIDxoMj57dmVoaWNsZS5OYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwidXNhZG9zXCIgYXM9e3ZlaGljbGUuSHJlZn0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9lY3VhZG9yLnBhdGlvdHVlcmNhLmNvbS8nICsgdmVoaWNsZS5JbWFnZVVSTH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5Nb2RlbG9zOjwvcD5cbiAgICAgICAgICAgICAgICB7dmVoaWNsZS5Nb2RlbHMubWFwKChtb2RlbCwgeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInVzYWRvc1wiIGFzPXttb2RlbC5IcmVmfSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID57bW9kZWwuTmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2hhbm5lbHMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5jaGFubmVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/usuario/Documents/nextjs/autos.js/components/ChannelGrid.jsx */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.bd1210b3092eaf799cf8.hot-update.js.map