"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next-intl/dist/development/server.react-client.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-intl/dist/development/server.react-client.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar index = __webpack_require__(/*! ./server/react-client/index.js */ \"./node_modules/next-intl/dist/development/server/react-client/index.js\");\n\n\n\nexports.getFormatter = index.getFormatter;\nexports.getLocale = index.getLocale;\nexports.getMessages = index.getMessages;\nexports.getNow = index.getNow;\nexports.getRequestConfig = index.getRequestConfig;\nexports.getTimeZone = index.getTimeZone;\nexports.getTranslations = index.getTranslations;\nexports.unstable_setRequestLocale = index.unstable_setRequestLocale;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZGV2ZWxvcG1lbnQvc2VydmVyLnJlYWN0LWNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFlBQVksbUJBQU8sQ0FBQyw4R0FBZ0M7Ozs7QUFJcEQsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZGV2ZWxvcG1lbnQvc2VydmVyLnJlYWN0LWNsaWVudC5qcz9mMzZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGluZGV4ID0gcmVxdWlyZSgnLi9zZXJ2ZXIvcmVhY3QtY2xpZW50L2luZGV4LmpzJyk7XG5cblxuXG5leHBvcnRzLmdldEZvcm1hdHRlciA9IGluZGV4LmdldEZvcm1hdHRlcjtcbmV4cG9ydHMuZ2V0TG9jYWxlID0gaW5kZXguZ2V0TG9jYWxlO1xuZXhwb3J0cy5nZXRNZXNzYWdlcyA9IGluZGV4LmdldE1lc3NhZ2VzO1xuZXhwb3J0cy5nZXROb3cgPSBpbmRleC5nZXROb3c7XG5leHBvcnRzLmdldFJlcXVlc3RDb25maWcgPSBpbmRleC5nZXRSZXF1ZXN0Q29uZmlnO1xuZXhwb3J0cy5nZXRUaW1lWm9uZSA9IGluZGV4LmdldFRpbWVab25lO1xuZXhwb3J0cy5nZXRUcmFuc2xhdGlvbnMgPSBpbmRleC5nZXRUcmFuc2xhdGlvbnM7XG5leHBvcnRzLnVuc3RhYmxlX3NldFJlcXVlc3RMb2NhbGUgPSBpbmRleC51bnN0YWJsZV9zZXRSZXF1ZXN0TG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next-intl/dist/development/server.react-client.js\n"));

/***/ }),

/***/ "./node_modules/next-intl/dist/development/server/react-client/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-intl/dist/development/server/react-client/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n/**\n * Allows to import `next-intl/server` in non-RSC environments.\n *\n * This is mostly relevant for testing, since e.g. a `generateMetadata`\n * export from a page might use `next-intl/server`, but the test\n * only uses the default export for a page.\n */\n\nfunction notSupported(message) {\n  return () => {\n    throw new Error(\"`\".concat(message, \"` is not supported in Client Components.\"));\n  };\n}\nfunction getRequestConfig() {\n  return notSupported('getRequestConfig');\n}\nconst getFormatter = notSupported('getFormatter');\nconst getNow = notSupported('getNow');\nconst getTimeZone = notSupported('getTimeZone');\nconst getMessages = notSupported('getMessages');\nconst getLocale = notSupported('getLocale');\n\n// The type of `getTranslations` is not assigned here because it\n// causes a type error. The types use the `react-server` entry\n// anyway, therefore this is irrelevant.\nconst getTranslations = notSupported('getTranslations');\nconst unstable_setRequestLocale = notSupported('unstable_setRequestLocale');\n\nexports.getFormatter = getFormatter;\nexports.getLocale = getLocale;\nexports.getMessages = getMessages;\nexports.getNow = getNow;\nexports.getRequestConfig = getRequestConfig;\nexports.getTimeZone = getTimeZone;\nexports.getTranslations = getTranslations;\nexports.unstable_setRequestLocale = unstable_setRequestLocale;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZGV2ZWxvcG1lbnQvc2VydmVyL3JlYWN0LWNsaWVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3QvZGV2ZWxvcG1lbnQvc2VydmVyL3JlYWN0LWNsaWVudC9pbmRleC5qcz9mMjliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBBbGxvd3MgdG8gaW1wb3J0IGBuZXh0LWludGwvc2VydmVyYCBpbiBub24tUlNDIGVudmlyb25tZW50cy5cbiAqXG4gKiBUaGlzIGlzIG1vc3RseSByZWxldmFudCBmb3IgdGVzdGluZywgc2luY2UgZS5nLiBhIGBnZW5lcmF0ZU1ldGFkYXRhYFxuICogZXhwb3J0IGZyb20gYSBwYWdlIG1pZ2h0IHVzZSBgbmV4dC1pbnRsL3NlcnZlcmAsIGJ1dCB0aGUgdGVzdFxuICogb25seSB1c2VzIHRoZSBkZWZhdWx0IGV4cG9ydCBmb3IgYSBwYWdlLlxuICovXG5cbmZ1bmN0aW9uIG5vdFN1cHBvcnRlZChtZXNzYWdlKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChtZXNzYWdlLCBcImAgaXMgbm90IHN1cHBvcnRlZCBpbiBDbGllbnQgQ29tcG9uZW50cy5cIikpO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0UmVxdWVzdENvbmZpZygpIHtcbiAgcmV0dXJuIG5vdFN1cHBvcnRlZCgnZ2V0UmVxdWVzdENvbmZpZycpO1xufVxuY29uc3QgZ2V0Rm9ybWF0dGVyID0gbm90U3VwcG9ydGVkKCdnZXRGb3JtYXR0ZXInKTtcbmNvbnN0IGdldE5vdyA9IG5vdFN1cHBvcnRlZCgnZ2V0Tm93Jyk7XG5jb25zdCBnZXRUaW1lWm9uZSA9IG5vdFN1cHBvcnRlZCgnZ2V0VGltZVpvbmUnKTtcbmNvbnN0IGdldE1lc3NhZ2VzID0gbm90U3VwcG9ydGVkKCdnZXRNZXNzYWdlcycpO1xuY29uc3QgZ2V0TG9jYWxlID0gbm90U3VwcG9ydGVkKCdnZXRMb2NhbGUnKTtcblxuLy8gVGhlIHR5cGUgb2YgYGdldFRyYW5zbGF0aW9uc2AgaXMgbm90IGFzc2lnbmVkIGhlcmUgYmVjYXVzZSBpdFxuLy8gY2F1c2VzIGEgdHlwZSBlcnJvci4gVGhlIHR5cGVzIHVzZSB0aGUgYHJlYWN0LXNlcnZlcmAgZW50cnlcbi8vIGFueXdheSwgdGhlcmVmb3JlIHRoaXMgaXMgaXJyZWxldmFudC5cbmNvbnN0IGdldFRyYW5zbGF0aW9ucyA9IG5vdFN1cHBvcnRlZCgnZ2V0VHJhbnNsYXRpb25zJyk7XG5jb25zdCB1bnN0YWJsZV9zZXRSZXF1ZXN0TG9jYWxlID0gbm90U3VwcG9ydGVkKCd1bnN0YWJsZV9zZXRSZXF1ZXN0TG9jYWxlJyk7XG5cbmV4cG9ydHMuZ2V0Rm9ybWF0dGVyID0gZ2V0Rm9ybWF0dGVyO1xuZXhwb3J0cy5nZXRMb2NhbGUgPSBnZXRMb2NhbGU7XG5leHBvcnRzLmdldE1lc3NhZ2VzID0gZ2V0TWVzc2FnZXM7XG5leHBvcnRzLmdldE5vdyA9IGdldE5vdztcbmV4cG9ydHMuZ2V0UmVxdWVzdENvbmZpZyA9IGdldFJlcXVlc3RDb25maWc7XG5leHBvcnRzLmdldFRpbWVab25lID0gZ2V0VGltZVpvbmU7XG5leHBvcnRzLmdldFRyYW5zbGF0aW9ucyA9IGdldFRyYW5zbGF0aW9ucztcbmV4cG9ydHMudW5zdGFibGVfc2V0UmVxdWVzdExvY2FsZSA9IHVuc3RhYmxlX3NldFJlcXVlc3RMb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next-intl/dist/development/server/react-client/index.js\n"));

/***/ }),

/***/ "./node_modules/next-intl/dist/server.react-client.js":
/*!************************************************************!*\
  !*** ./node_modules/next-intl/dist/server.react-client.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./development/server.react-client.js */ \"./node_modules/next-intl/dist/development/server.react-client.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC1pbnRsL2Rpc3Qvc2VydmVyLnJlYWN0LWNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsb0pBQWdFO0FBQ2xFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LWludGwvZGlzdC9zZXJ2ZXIucmVhY3QtY2xpZW50LmpzPzFjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zZXJ2ZXIucmVhY3QtY2xpZW50LmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGV2ZWxvcG1lbnQvc2VydmVyLnJlYWN0LWNsaWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next-intl/dist/server.react-client.js\n"));

/***/ }),

/***/ "./components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx":
/*!********************************************************************************!*\
  !*** ./components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _i18n_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../i18n.config */ \"./i18n.config.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-intl/server */ \"./node_modules/next-intl/dist/server.react-client.js\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl_server__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// import { useSearchParams } from 'react-router-dom';\nconst LocaleSwitcher = ()=>{\n    // const params = useSearchParams();\n    // console.log(\"params: \", params)\n    // const availableTranslations = useMemo<Translation[]>(\n    //   () =>\n    //     i18n.languages.reduce<Translation[]>((acc, cur) => {\n    //       const availableTranslation = translations?.find(\n    //         (translation) => translation.language === cur.id,\n    //       );\n    //       if (availableTranslation) {\n    //         acc.push(availableTranslation);\n    //       }\n    //       return acc;\n    //     }, []),\n    //   [translations],\n    // );\n    console.log(\"i18n: \", _i18n_config__WEBPACK_IMPORTED_MODULE_1__.i18n);\n    console.log(\"getLocale: \", next_intl_server__WEBPACK_IMPORTED_MODULE_4__.getLocale);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"some-language-wrapper\",\n        children: _i18n_config__WEBPACK_IMPORTED_MODULE_1__.i18n.languages.map((version)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: version.id,\n                locale: version.id,\n                children: version.id\n            }, version.id, false, {\n                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LocaleSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocaleSwitcher);\nvar _c;\n$RefreshReg$(_c, \"LocaleSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvbmVDb21wb25lbnRzL2NvbXBvbmVudHMvTG9jYWxlU3dpdGNoZXIvTG9jYWxlU3dpdGNoZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUNsQjtBQUNIO0FBQ21CO0FBQzdDLHNEQUFzRDtBQUd0RCxNQUFNSSxpQkFBaUIsSUFBTTtJQUMzQixvQ0FBb0M7SUFFcEMsa0NBQWtDO0lBRWxDLHdEQUF3RDtJQUN4RCxVQUFVO0lBQ1YsMkRBQTJEO0lBQzNELHlEQUF5RDtJQUN6RCw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLEtBQUs7SUFFTEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVOLDhDQUFJQTtJQUMxQkssUUFBUUMsR0FBRyxDQUFDLGVBQWVILHVEQUFTQTtJQUVwQyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDWlIsNERBQWtCLENBQUMsQ0FBQ1csd0JBQ25CLDhEQUFDVixrREFBSUE7Z0JBRUhXLE1BQU1ELFFBQVFFLEVBQUU7Z0JBQ2hCQyxRQUFRSCxRQUFRRSxFQUFFOzBCQU9qQkYsUUFBUUUsRUFBRTtlQVRORixRQUFRRSxFQUFFOzs7Ozs7Ozs7O0FBY3pCO0tBeENNVDtBQTBDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NvbmVDb21wb25lbnRzL2NvbXBvbmVudHMvTG9jYWxlU3dpdGNoZXIvTG9jYWxlU3dpdGNoZXIuanN4P2ExZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uLy4uLy4uL2kxOG4uY29uZmlnJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSBcIm5leHQtaW50bC9zZXJ2ZXJcIjtcbi8vIGltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmNvbnN0IExvY2FsZVN3aXRjaGVyID0gKCkgPT4ge1xuICAvLyBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICAvLyBjb25zb2xlLmxvZyhcInBhcmFtczogXCIsIHBhcmFtcylcblxuICAvLyBjb25zdCBhdmFpbGFibGVUcmFuc2xhdGlvbnMgPSB1c2VNZW1vPFRyYW5zbGF0aW9uW10+KFxuICAvLyAgICgpID0+XG4gIC8vICAgICBpMThuLmxhbmd1YWdlcy5yZWR1Y2U8VHJhbnNsYXRpb25bXT4oKGFjYywgY3VyKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IGF2YWlsYWJsZVRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb25zPy5maW5kKFxuICAvLyAgICAgICAgICh0cmFuc2xhdGlvbikgPT4gdHJhbnNsYXRpb24ubGFuZ3VhZ2UgPT09IGN1ci5pZCxcbiAgLy8gICAgICAgKTtcbiAgLy8gICAgICAgaWYgKGF2YWlsYWJsZVRyYW5zbGF0aW9uKSB7XG4gIC8vICAgICAgICAgYWNjLnB1c2goYXZhaWxhYmxlVHJhbnNsYXRpb24pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIHJldHVybiBhY2M7XG4gIC8vICAgICB9LCBbXSksXG4gIC8vICAgW3RyYW5zbGF0aW9uc10sXG4gIC8vICk7XG5cbiAgY29uc29sZS5sb2coXCJpMThuOiBcIiwgaTE4bilcbiAgY29uc29sZS5sb2coXCJnZXRMb2NhbGU6IFwiLCBnZXRMb2NhbGUpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbWUtbGFuZ3VhZ2Utd3JhcHBlclwiPlxuICAgICAge2kxOG4ubGFuZ3VhZ2VzLm1hcCgodmVyc2lvbikgPT4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIGtleT17dmVyc2lvbi5pZH1cbiAgICAgICAgICBocmVmPXt2ZXJzaW9uLmlkfVxuICAgICAgICAgIGxvY2FsZT17dmVyc2lvbi5pZH1cbiAgICAgICAgICAvLyBjbGFzc05hbWU9e2BmbGV4IGgtOCB3LTIwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIHVwcGVyY2FzZSAke1xuICAgICAgICAgIC8vICAgcGFyYW1zPy5sYW5nID09IHZlcnNpb24uaWRcbiAgICAgICAgICAvLyAgICAgPyAnYmctd2hpdGUgdGV4dC1ibGFjaydcbiAgICAgICAgICAvLyAgICAgOiAnYmctYmxhY2sgdGV4dC13aGl0ZSdcbiAgICAgICAgICAvLyB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHt2ZXJzaW9uLmlkfVxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVN3aXRjaGVyO1xuIl0sIm5hbWVzIjpbImkxOG4iLCJMaW5rIiwiUmVhY3QiLCJnZXRMb2NhbGUiLCJMb2NhbGVTd2l0Y2hlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsYW5ndWFnZXMiLCJtYXAiLCJ2ZXJzaW9uIiwiaHJlZiIsImlkIiwibG9jYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx\n"));

/***/ })

});