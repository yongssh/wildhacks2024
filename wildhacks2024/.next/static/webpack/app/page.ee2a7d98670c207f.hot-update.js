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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/\nfunction Timer() {\n    _s();\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [displayUserInput, setDisplayUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pauseTimer, setPauseTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const startCountdown = ()=>{\n        let inputMinutes = parseInt(userInput, 10);\n        if (displayUserInput) {\n            if (inputMinutes <= 0 || inputMinutes > 120) {\n                setDisplayMessage(true);\n            } else {\n                setDisplayMessage(false);\n                setDisplayUserInput(false);\n                setMinutes(inputMinutes);\n                setSeconds(0);\n            }\n        } else {\n            setPauseTimer(false);\n        }\n    };\n    const stopCountdown = ()=>{\n        pauseTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = setInterval(()=>{\n            if (!pauseTimer) {\n                if (seconds === 0) {\n                    if (minutes !== 0) {\n                        setSeconds(59);\n                        setMinutes(minutes - 1);\n                        setDisplayUserInput(true);\n                    }\n                } else {\n                    setSeconds(seconds - 1);\n                }\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        seconds,\n        minutes,\n        displayMessage\n    ]);\n    const timerMinutes = minutes < 10 ? \"0\".concat(minutes) : minutes;\n    const timerSeconds = seconds < 10 ? \"0\".concat(seconds) : seconds;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"timer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: userInput,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: startCountdown,\n                children: \"Start Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message\",\n                children: displayMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"please input a whole number between 1 and 120 \"\n                }, void 0, false, {\n                    fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                    lineNumber: 70,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer\",\n                children: [\n                    timerMinutes,\n                    \":\",\n                    timerSeconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n}\n_s(Timer, \"BvUsMRct5HF6E1s4T2XyppaVCFs=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNqRCxtRUFBbUU7QUFFcEQsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFFN0MsTUFBTWUsb0JBQW9CLENBQUNDO1FBQ3ZCSixhQUFhSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsSUFBSUMsZUFBZUMsU0FBU1YsV0FBVztRQUV2QyxJQUFJRixrQkFBa0I7WUFDbEIsSUFBSVcsZ0JBQWdCLEtBQUtBLGVBQWUsS0FBSztnQkFDekNaLGtCQUFrQjtZQUV0QixPQUFPO2dCQUNIQSxrQkFBa0I7Z0JBQ2xCRSxvQkFBb0I7Z0JBRXBCTixXQUFXZ0I7Z0JBQ1hkLFdBQVc7WUFDZjtRQUVKLE9BQU87WUFDSFEsY0FBYztRQUVsQjtJQUdKO0lBRUEsTUFBTVEsZ0JBQWdCO1FBQ2xCVDtJQUVKO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ04sSUFBSXNCLFdBQVdDLFlBQVk7WUFDdkIsSUFBSSxDQUFDWCxZQUFZO2dCQUNiLElBQUlSLFlBQVksR0FBRztvQkFDZixJQUFJRixZQUFZLEdBQUc7d0JBQ2ZHLFdBQVc7d0JBQ1hGLFdBQVdELFVBQVU7d0JBQ3JCTyxvQkFBb0I7b0JBQ3hCO2dCQUNKLE9BQU87b0JBQ0hKLFdBQVdELFVBQVU7Z0JBQ3pCO1lBQ0o7UUFDSixHQUFHO1FBRUgsT0FBTyxJQUFNb0IsY0FBY0Y7SUFDL0IsR0FBRztRQUFDbEI7UUFBU0Y7UUFBU0k7S0FBZTtJQUVyQyxNQUFNbUIsZUFBZXZCLFVBQVUsS0FBSyxJQUFZLE9BQVJBLFdBQVlBO0lBQ3BELE1BQU13QixlQUFldEIsVUFBVSxLQUFLLElBQVksT0FBUkEsV0FBWUE7SUFFcEQscUJBQ0ksOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNiLE9BQU9QO2dCQUFXcUIsVUFBVWpCOzs7Ozs7MEJBQ2pELDhEQUFDa0I7Z0JBQU9KLFdBQVU7Z0JBQVdLLFNBQVNmOzBCQUFnQjs7Ozs7OzBCQUN0RCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1Z0QixnQ0FBa0IsOERBQUNxQjs4QkFBSTs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDQTtnQkFBSUMsV0FBVTs7b0JBQ1ZIO29CQUFhO29CQUFFQzs7Ozs7Ozs7Ozs7OztBQU1oQztHQTVFd0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcz9jOGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuLy9odHRwczovL3d3dy5nZWVrc2ZvcmdlZWtzLm9yZy9ob3ctdG8tY3JlYXRlLXBvcHVwLWJveC1pbi1yZWFjdGpzL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZGlzcGxheU1lc3NhZ2UsIHNldERpc3BsYXlNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGlzcGxheVVzZXJJbnB1dCwgc2V0RGlzcGxheVVzZXJJbnB1dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXVzZVRpbWVyLCBzZXRQYXVzZVRpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFVzZXJJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGFydENvdW50ZG93biA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0TWludXRlcyA9IHBhcnNlSW50KHVzZXJJbnB1dCwgMTApO1xuXG4gICAgICAgIGlmIChkaXNwbGF5VXNlcklucHV0KSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRNaW51dGVzIDw9IDAgfHwgaW5wdXRNaW51dGVzID4gMTIwKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UodHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldERpc3BsYXlVc2VySW5wdXQoZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgc2V0TWludXRlcyhpbnB1dE1pbnV0ZXMpOyBcbiAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQYXVzZVRpbWVyKGZhbHNlKTtcblxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3BDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHBhdXNlVGltZXIoKVxuICAgICAgICBcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBhdXNlVGltZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWludXRlcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kcyg1OSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKG1pbnV0ZXMgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXlVc2VySW5wdXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW3NlY29uZHMsIG1pbnV0ZXMsIGRpc3BsYXlNZXNzYWdlXSk7IFxuXG4gICAgY29uc3QgdGltZXJNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gICAgY29uc3QgdGltZXJTZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0+U3RhcnQgQ291bnRkb3duPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheU1lc3NhZ2UgJiYgPGRpdj5wbGVhc2UgaW5wdXQgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiAxIGFuZCAxMjAgPC9kaXY+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICAgICAge3RpbWVyTWludXRlc306e3RpbWVyU2Vjb25kc31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRpbWVyIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImRpc3BsYXlNZXNzYWdlIiwic2V0RGlzcGxheU1lc3NhZ2UiLCJkaXNwbGF5VXNlcklucHV0Iiwic2V0RGlzcGxheVVzZXJJbnB1dCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInBhdXNlVGltZXIiLCJzZXRQYXVzZVRpbWVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3RhcnRDb3VudGRvd24iLCJpbnB1dE1pbnV0ZXMiLCJwYXJzZUludCIsInN0b3BDb3VudGRvd24iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyTWludXRlcyIsInRpbWVyU2Vjb25kcyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Timer.js\n"));

/***/ })

});