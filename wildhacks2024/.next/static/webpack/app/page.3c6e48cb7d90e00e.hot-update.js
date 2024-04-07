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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/\nfunction Timer() {\n    _s();\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pauseTimer, setPauseTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const startCountdown = ()=>{\n        let inputMinutes = parseInt(userInput, 10);\n        if (pauseTimer) {\n            setPauseTimer(false);\n        }\n        if (inputMinutes <= 0 || inputMinutes > 120) {\n            setDisplayMessage(true);\n        } else {\n            setDisplayMessage(false);\n            setMinutes(inputMinutes);\n            setSeconds(0);\n        }\n    // if (pauseTimer) {\n    //     setPauseTimer(false);\n    // } else {\n    //     if (inputMinutes <= 0 || inputMinutes > 120) {\n    //         setDisplayMessage(true);\n    //     } else {\n    //         setDisplayMessage(false);\n    //         setMinutes(inputMinutes); \n    //         setSeconds(0);\n    //     }\n    // }\n    };\n    const stopCountdown = ()=>{\n        setPauseTimer(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = setInterval(()=>{\n            if (!pauseTimer) {\n                if (seconds === 0) {\n                    if (minutes !== 0) {\n                        setSeconds(59);\n                        setMinutes(minutes - 1);\n                    }\n                } else {\n                    setSeconds(seconds - 1);\n                }\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        seconds,\n        minutes,\n        displayMessage,\n        pauseTimer\n    ]);\n    const timerMinutes = minutes < 10 ? \"0\".concat(minutes) : minutes;\n    const timerSeconds = seconds < 10 ? \"0\".concat(seconds) : seconds;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"timer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: userInput,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: startCountdown,\n                children: \"Start\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"pauseBtn\",\n                onClick: stopCountdown,\n                children: \"Stop\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message\",\n                children: displayMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"please input a whole number between 1 and 120 \"\n                }, void 0, false, {\n                    fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                    lineNumber: 84,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer\",\n                children: [\n                    timerMinutes,\n                    \":\",\n                    timerSeconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(Timer, \"tUvbVJxExwON53PnK+0AINPPzJc=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNqRCxtRUFBbUU7QUFFcEQsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1hLG9CQUFvQixDQUFDQztRQUN2QkosYUFBYUksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ25DO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ25CLElBQUlDLGVBQWVDLFNBQVNWLFdBQVc7UUFFdkMsSUFBSUUsWUFBWTtZQUNaQyxjQUFjO1FBRWxCO1FBRUEsSUFBSU0sZ0JBQWdCLEtBQUtBLGVBQWUsS0FBSztZQUN6Q1Ysa0JBQWtCO1FBRXRCLE9BQU87WUFDSEEsa0JBQWtCO1lBRWxCSixXQUFXYztZQUNYWixXQUFXO1FBQ2Y7SUFHQSxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBRTVCLFdBQVc7SUFDWCxxREFBcUQ7SUFDckQsbUNBQW1DO0lBRW5DLGVBQWU7SUFDZixvQ0FBb0M7SUFFcEMscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixRQUFRO0lBRVIsSUFBSTtJQUdSO0lBRUEsTUFBTWMsZ0JBQWdCO1FBQ2xCUixjQUFjO0lBRWxCO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ04sSUFBSW9CLFdBQVdDLFlBQVk7WUFDdkIsSUFBSSxDQUFDWCxZQUFZO2dCQUNiLElBQUlOLFlBQVksR0FBRztvQkFDZixJQUFJRixZQUFZLEdBQUc7d0JBQ2ZHLFdBQVc7d0JBQ1hGLFdBQVdELFVBQVU7b0JBQ3pCO2dCQUNKLE9BQU87b0JBQ0hHLFdBQVdELFVBQVU7Z0JBQ3pCO1lBQ0o7UUFDSixHQUFHO1FBRUgsT0FBTyxJQUFNa0IsY0FBY0Y7SUFDL0IsR0FBRztRQUFDaEI7UUFBU0Y7UUFBU0k7UUFBZ0JJO0tBQVc7SUFFakQsTUFBTWEsZUFBZXJCLFVBQVUsS0FBSyxJQUFZLE9BQVJBLFdBQVlBO0lBQ3BELE1BQU1zQixlQUFlcEIsVUFBVSxLQUFLLElBQVksT0FBUkEsV0FBWUE7SUFFcEQscUJBQ0ksOERBQUNxQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNiLE9BQU9QO2dCQUFXcUIsVUFBVWpCOzs7Ozs7MEJBQ2pELDhEQUFDa0I7Z0JBQU9KLFdBQVU7Z0JBQVdLLFNBQVNmOzBCQUFnQjs7Ozs7OzBCQUN0RCw4REFBQ2M7Z0JBQU9KLFdBQVU7Z0JBQVdLLFNBQVNaOzBCQUFlOzs7Ozs7MEJBQ3JELDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDVnBCLGdDQUFrQiw4REFBQ21COzhCQUFJOzs7Ozs7Ozs7OzswQkFHNUIsOERBQUNBO2dCQUFJQyxXQUFVOztvQkFDVkg7b0JBQWE7b0JBQUVDOzs7Ozs7Ozs7Ozs7O0FBTWhDO0dBMUZ3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzP2M4Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG4vL2h0dHBzOi8vd3d3LmdlZWtzZm9yZ2Vla3Mub3JnL2hvdy10by1jcmVhdGUtcG9wdXAtYm94LWluLXJlYWN0anMvXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICAgIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtkaXNwbGF5TWVzc2FnZSwgc2V0RGlzcGxheU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3BhdXNlVGltZXIsIHNldFBhdXNlVGltZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXJ0Q291bnRkb3duID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXRNaW51dGVzID0gcGFyc2VJbnQodXNlcklucHV0LCAxMCk7XG5cbiAgICAgICAgaWYgKHBhdXNlVGltZXIpIHtcbiAgICAgICAgICAgIHNldFBhdXNlVGltZXIoZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRNaW51dGVzIDw9IDAgfHwgaW5wdXRNaW51dGVzID4gMTIwKSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5TWVzc2FnZSh0cnVlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UoZmFsc2UpO1xuXG4gICAgICAgICAgICBzZXRNaW51dGVzKGlucHV0TWludXRlcyk7IFxuICAgICAgICAgICAgc2V0U2Vjb25kcygwKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gaWYgKHBhdXNlVGltZXIpIHtcbiAgICAgICAgLy8gICAgIHNldFBhdXNlVGltZXIoZmFsc2UpO1xuXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpZiAoaW5wdXRNaW51dGVzIDw9IDAgfHwgaW5wdXRNaW51dGVzID4gMTIwKSB7XG4gICAgICAgIC8vICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UodHJ1ZSk7XG5cbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgc2V0RGlzcGxheU1lc3NhZ2UoZmFsc2UpO1xuXG4gICAgICAgIC8vICAgICAgICAgc2V0TWludXRlcyhpbnB1dE1pbnV0ZXMpOyBcbiAgICAgICAgLy8gICAgICAgICBzZXRTZWNvbmRzKDApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcENvdW50ZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0UGF1c2VUaW1lcih0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwYXVzZVRpbWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnV0ZXMgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWludXRlcyhtaW51dGVzIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfSwgW3NlY29uZHMsIG1pbnV0ZXMsIGRpc3BsYXlNZXNzYWdlLCBwYXVzZVRpbWVyXSk7IFxuXG4gICAgY29uc3QgdGltZXJNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gICAgY29uc3QgdGltZXJTZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGF1c2VCdG5cIiBvbkNsaWNrPXtzdG9wQ291bnRkb3dufT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheU1lc3NhZ2UgJiYgPGRpdj5wbGVhc2UgaW5wdXQgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiAxIGFuZCAxMjAgPC9kaXY+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICAgICAge3RpbWVyTWludXRlc306e3RpbWVyU2Vjb25kc31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRpbWVyIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImRpc3BsYXlNZXNzYWdlIiwic2V0RGlzcGxheU1lc3NhZ2UiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJwYXVzZVRpbWVyIiwic2V0UGF1c2VUaW1lciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXJ0Q291bnRkb3duIiwiaW5wdXRNaW51dGVzIiwicGFyc2VJbnQiLCJzdG9wQ291bnRkb3duIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lck1pbnV0ZXMiLCJ0aW1lclNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Timer.js\n"));

/***/ })

});