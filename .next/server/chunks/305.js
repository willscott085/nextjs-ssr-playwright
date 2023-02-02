"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlers": () => (/* binding */ handlers)
/* harmony export */ });
/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msw__WEBPACK_IMPORTED_MODULE_0__);

const API_DOMAIN = "https://api.test.qogita.com";
const handlers = [
    msw__WEBPACK_IMPORTED_MODULE_0__.rest.get(`${API_DOMAIN}/info`, (req, res, ctx)=>res(ctx.json({
            inventoryValueCurrency: "This call was mocked in the app by intercepting the call between node and Canary"
        })))
];


/***/ })

};
;