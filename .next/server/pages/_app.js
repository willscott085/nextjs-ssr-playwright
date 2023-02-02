"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "requestInterceptor": () => (/* binding */ requestInterceptor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const requestInterceptor =  true ? (async ()=>{
    const { setupServer  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 99));
    const { handlers  } = await __webpack_require__.e(/* import() */ 305).then(__webpack_require__.bind(__webpack_require__, 305));
    const requestInterceptor = setupServer(...handlers);
    requestInterceptor.listen({
        onUnhandledRequest: "warn"
    });
    return requestInterceptor;
})() : 0;
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 386:
/***/ ((module) => {

module.exports = require("msw");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99:
/***/ ((module) => {

module.exports = import("msw/node");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(484));
module.exports = __webpack_exports__;

})();