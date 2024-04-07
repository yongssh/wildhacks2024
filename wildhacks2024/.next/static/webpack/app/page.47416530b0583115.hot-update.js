"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Timer.js":
/*!*********************************!*\
  !*** ./src/components/Timer.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/\nfunction Timer() {\n    _s();\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [displayUserInput, setDisplayUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pauseTimer, setPauseTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const startCountdown = ()=>{\n        let inputMinutes = parseInt(userInput, 10);\n        if (inputMinutes <= 0 || inputMinutes > 120) {\n            setDisplayMessage(true);\n        } else {\n            setDisplayMessage(false);\n            setMinutes(inputMinutes);\n            setSeconds(0);\n        }\n    };\n    const stopCountdown = ()=>{\n        pauseTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = setInterval(()=>{\n            if (seconds === 0) {\n                if (minutes !== 0) {\n                    setSeconds(59);\n                    setMinutes(minutes - 1);\n                }\n            } else {\n                setSeconds(seconds - 1);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        seconds,\n        minutes,\n        displayMessage\n    ]);\n    const timerMinutes = minutes < 10 ? \"0\".concat(minutes) : minutes;\n    const timerSeconds = seconds < 10 ? \"0\".concat(seconds) : seconds;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"timer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: userInput,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: startCountdown,\n                children: \"Start Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message\",\n                children: displayMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"please input a whole number between 1 and 120 \"\n                }, void 0, false, {\n                    fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                    lineNumber: 60,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer\",\n                children: [\n                    timerMinutes,\n                    \":\",\n                    timerSeconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(Timer, \"BvUsMRct5HF6E1s4T2XyppaVCFs=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNqRCxtRUFBbUU7QUFFcEQsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFFN0MsTUFBTWUsb0JBQW9CLENBQUNDO1FBQ3ZCSixhQUFhSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsSUFBSUMsZUFBZUMsU0FBU1YsV0FBVztRQUV2QyxJQUFJUyxnQkFBZ0IsS0FBS0EsZUFBZSxLQUFLO1lBQ3pDWixrQkFBa0I7UUFFdEIsT0FBTztZQUNIQSxrQkFBa0I7WUFDbEJKLFdBQVdnQjtZQUNYZCxXQUFXO1FBQ2Y7SUFHSjtJQUVBLE1BQU1nQixnQkFBZ0I7UUFDbEJUO0lBRUo7SUFFQVosZ0RBQVNBLENBQUM7UUFDTixJQUFJc0IsV0FBV0MsWUFBWTtZQUV2QixJQUFJbkIsWUFBWSxHQUFHO2dCQUNmLElBQUlGLFlBQVksR0FBRztvQkFDZkcsV0FBVztvQkFDWEYsV0FBV0QsVUFBVTtnQkFDekI7WUFDSixPQUFPO2dCQUNIRyxXQUFXRCxVQUFVO1lBQ3pCO1FBQ0osR0FBRztRQUVILE9BQU8sSUFBTW9CLGNBQWNGO0lBQy9CLEdBQUc7UUFBQ2xCO1FBQVNGO1FBQVNJO0tBQWU7SUFFckMsTUFBTW1CLGVBQWV2QixVQUFVLEtBQUssSUFBWSxPQUFSQSxXQUFZQTtJQUNwRCxNQUFNd0IsZUFBZXRCLFVBQVUsS0FBSyxJQUFZLE9BQVJBLFdBQVlBO0lBRXBELHFCQUNJLDhEQUFDdUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFTYixPQUFPUDtnQkFBV3FCLFVBQVVqQjs7Ozs7OzBCQUNqRCw4REFBQ2tCO2dCQUFPSixXQUFVO2dCQUFXSyxTQUFTZjswQkFBZ0I7Ozs7OzswQkFDdEQsOERBQUNTO2dCQUFJQyxXQUFVOzBCQUNWdEIsZ0NBQWtCLDhEQUFDcUI7OEJBQUk7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUNWSDtvQkFBYTtvQkFBRUM7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0FsRXdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanM/YzhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbi8vaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvaG93LXRvLWNyZWF0ZS1wb3B1cC1ib3gtaW4tcmVhY3Rqcy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXIoKSB7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2Rpc3BsYXlNZXNzYWdlLCBzZXREaXNwbGF5TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rpc3BsYXlVc2VySW5wdXQsIHNldERpc3BsYXlVc2VySW5wdXRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGF1c2VUaW1lciwgc2V0UGF1c2VUaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dE1pbnV0ZXMgPSBwYXJzZUludCh1c2VySW5wdXQsIDEwKTtcblxuICAgICAgICBpZiAoaW5wdXRNaW51dGVzIDw9IDAgfHwgaW5wdXRNaW51dGVzID4gMTIwKSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5TWVzc2FnZSh0cnVlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TWludXRlcyhpbnB1dE1pbnV0ZXMpOyBcbiAgICAgICAgICAgIHNldFNlY29uZHMoMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcENvdW50ZG93biA9ICgpID0+IHtcbiAgICAgICAgcGF1c2VUaW1lcigpXG4gICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKDU5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbc2Vjb25kcywgbWludXRlcywgZGlzcGxheU1lc3NhZ2VdKTsgXG5cbiAgICBjb25zdCB0aW1lck1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgICBjb25zdCB0aW1lclNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3VzZXJJbnB1dH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydEJ0blwiIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufT5TdGFydCBDb3VudGRvd248L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIHtkaXNwbGF5TWVzc2FnZSAmJiA8ZGl2PnBsZWFzZSBpbnB1dCBhIHdob2xlIG51bWJlciBiZXR3ZWVuIDEgYW5kIDEyMCA8L2Rpdj4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5cbiAgICAgICAgICAgICAgICB7dGltZXJNaW51dGVzfTp7dGltZXJTZWNvbmRzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICBcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGltZXIiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiZGlzcGxheU1lc3NhZ2UiLCJzZXREaXNwbGF5TWVzc2FnZSIsImRpc3BsYXlVc2VySW5wdXQiLCJzZXREaXNwbGF5VXNlcklucHV0IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwicGF1c2VUaW1lciIsInNldFBhdXNlVGltZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdGFydENvdW50ZG93biIsImlucHV0TWludXRlcyIsInBhcnNlSW50Iiwic3RvcENvdW50ZG93biIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZXJNaW51dGVzIiwidGltZXJTZWNvbmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Timer.js\n"));

/***/ })

});