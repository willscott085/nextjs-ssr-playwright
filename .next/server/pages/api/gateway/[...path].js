"use strict";
(() => {
var exports = {};
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "http-proxy"
const external_http_proxy_namespaceObject = require("http-proxy");
var external_http_proxy_default = /*#__PURE__*/__webpack_require__.n(external_http_proxy_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/gateway/[...path].jsx

const API_URL = "https://api.test.qogita.com";
const proxy = external_http_proxy_default().createProxy();
const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
};
async function handler(request, response) {
    request.url = request.url?.replace("/api/gateway", "");
    return new Promise((resolve, reject)=>{
        proxy.once("proxyRes", resolve).once("error", reject).web(request, response, {
            changeOrigin: true,
            target: API_URL
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(169));
module.exports = __webpack_exports__;

})();