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

/***/ "./components/SoneComponents/components/Menu/Menu.jsx":
/*!************************************************************!*\
  !*** ./components/SoneComponents/components/Menu/Menu.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LocaleSwitcher/LocaleSwitcher */ \"./components/SoneComponents/components/LocaleSwitcher/LocaleSwitcher.jsx\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.module.css */ \"./components/SoneComponents/components/Menu/Menu.module.css\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Menu = (param)=>{\n    let { toggleMenu  } = param;\n    _s();\n    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const menuItems = [\n        {\n            \"title\": \"Home\",\n            \"link\": \"/\"\n        },\n        {\n            \"title\": \"Projects\",\n            \"link\": \"/projects\"\n        },\n        {\n            \"title\": \"About\",\n            \"link\": \"/about\"\n        },\n        {\n            \"title\": \"Contact\",\n            \"link\": \"/contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().SoneMenuButton),\n                \"data-isopen\": isMenuOpen,\n                onClick: ()=>{\n                    setMenuOpen(!isMenuOpen);\n                    toggleMenu(!isMenuOpen);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().SoneMenuButtonLine)\n                    }, void 0, false, {\n                        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().SoneMenuButtonLine)\n                    }, void 0, false, {\n                        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sone-menu-content\",\n                \"data-visible\": isMenuOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sone-menu-content--left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:contact@soneworkshop.com\",\n                                    children: \"contact@soneworkshop.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"tel:+33157840051\",\n                                    children: \"+33157840051\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sone-menu-content--right\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: menuItems.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: item.link,\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 33\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bogdanf/Workspace/react-sanity-simple-starter/components/SoneComponents/components/Menu/Menu.jsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Menu, \"TC/rkDPmGL8x/0VA9MWFa2OwDU0=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvbmVDb21wb25lbnRzL2NvbXBvbmVudHMvTWVudS9NZW51LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ1c7QUFDc0I7QUFFeEI7QUFFdEMsTUFBTUssT0FBTyxTQUFvQjtRQUFuQixFQUFFQyxXQUFVLEVBQUU7O0lBQ3hCLE1BQU0sQ0FBRUMsWUFBWUMsWUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU1PLFlBQVk7UUFDZDtZQUNJLFNBQVM7WUFDVCxRQUFRO1FBQ1o7UUFDQTtZQUNJLFNBQVM7WUFDVCxRQUFRO1FBQ1o7UUFDQTtZQUNJLFNBQVM7WUFDVCxRQUFRO1FBQ1o7UUFDQTtZQUNJLFNBQVM7WUFDVCxRQUFRO1FBQ1o7S0FDSDtJQUNELHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQ0dDLFdBQVdQLHdFQUFxQjtnQkFDaENTLGVBQWFOO2dCQUNiTyxTQUFTLElBQU07b0JBQ1hOLFlBQVksQ0FBQ0Q7b0JBQ2JELFdBQVcsQ0FBQ0M7Z0JBQ2hCOztrQ0FFQSw4REFBQ1E7d0JBQUtKLFdBQVdQLDRFQUF5Qjs7Ozs7O2tDQUMxQyw4REFBQ1c7d0JBQUtKLFdBQVdQLDRFQUF5Qjs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ007Z0JBQUlDLFdBQVU7Z0JBQW9CTSxnQkFBY1Y7O2tDQUU3Qyw4REFBQ0c7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDTzswQ0FDRyw0RUFBQ0M7b0NBQUVDLE1BQUs7OENBQWtDOzs7Ozs7Ozs7OzswQ0FFOUMsOERBQUNGOzBDQUNHLDRFQUFDQztvQ0FBRUMsTUFBSzs4Q0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtuQyw4REFBQ1Y7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNVO3NDQUNJWixVQUFVYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtnQ0FDNUIscUJBQ0ksOERBQUNDOzhDQUNHLDRFQUFDekIsa0RBQUlBO3dDQUFDb0IsTUFBTUcsS0FBS0csSUFBSTtrREFBR0gsS0FBS0ksS0FBSzs7Ozs7O21DQUQ3Qkg7Ozs7OzRCQUlqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVosOERBQUNyQixzRUFBY0E7Ozs7Ozs7QUFLM0I7R0FsRU1FO0tBQUFBO0FBb0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29uZUNvbXBvbmVudHMvY29tcG9uZW50cy9NZW51L01lbnUuanN4PzgwYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2NhbGVTd2l0Y2hlciBmcm9tICcuLi9Mb2NhbGVTd2l0Y2hlci9Mb2NhbGVTd2l0Y2hlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZW51Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1lbnUgPSAoeyB0b2dnbGVNZW51IH0pID0+IHtcbiAgICBjb25zdCBbIGlzTWVudU9wZW4sIHNldE1lbnVPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSG9tZVwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL3Byb2plY3RzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFib3V0XCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYWJvdXRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2NvbnRhY3RcIlxuICAgICAgICB9XG4gICAgXVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNvbmVNZW51QnV0dG9ufSBcbiAgICAgICAgICAgICAgICBkYXRhLWlzb3Blbj17aXNNZW51T3Blbn0gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNZW51T3BlbighaXNNZW51T3BlbilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudSghaXNNZW51T3BlbilcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNvbmVNZW51QnV0dG9uTGluZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlNvbmVNZW51QnV0dG9uTGluZX0+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNZW51IENvbnRlbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29uZS1tZW51LWNvbnRlbnQnIGRhdGEtdmlzaWJsZT17aXNNZW51T3Blbn0+XG4gICAgICAgICAgICAgICAgey8qIE1lbnUgQ29udGVudCAtIExlZnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmUtbWVudS1jb250ZW50LS1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QHNvbmV3b3Jrc2hvcC5jb21cIj5jb250YWN0QHNvbmV3b3Jrc2hvcC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzMzMTU3ODQwMDUxXCI+KzMzMTU3ODQwMDUxPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIE1lbnUgQ29udGVudCAtIFJpZ2h0ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb25lLW1lbnUtY29udGVudC0tcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTG9jYWxlIFN3aXRjaGV0ICovfVxuICAgICAgICAgICAgPExvY2FsZVN3aXRjaGVyIC8+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvY2FsZVN3aXRjaGVyIiwic3R5bGVzIiwiTWVudSIsInRvZ2dsZU1lbnUiLCJpc01lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJtZW51SXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJTb25lTWVudUJ1dHRvbiIsImRhdGEtaXNvcGVuIiwib25DbGljayIsInNwYW4iLCJTb25lTWVudUJ1dHRvbkxpbmUiLCJkYXRhLXZpc2libGUiLCJoNSIsImEiLCJocmVmIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImxpbmsiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SoneComponents/components/Menu/Menu.jsx\n"));

/***/ })

});