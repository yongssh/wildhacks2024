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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var react_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-popup */ \"(app-pages-browser)/./node_modules/react-popup/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import 'reactjs-popup/dist/index.css';\n//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/\nfunction Timer() {\n    _s();\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const startCountdown = ()=>{\n        let inputMinutes = parseInt(userInput, 10);\n        setMinutes(inputMinutes);\n        setSeconds(0);\n    // if (inputMinutes <= 0 || inputMinutes > 120) {\n    //     Popup.alert('testing!');\n    // } else {\n    //     setMinutes(inputMinutes); \n    //     setSeconds(0);\n    // }\n    // setMinutes(parseInt(userInput, 10)); \n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = setInterval(()=>{\n            //clearInterval(interval);\n            if (seconds === 0) {\n                if (minutes !== 0) {\n                    setSeconds(59);\n                    setMinutes(minutes - 1);\n                } else {\n                // fill in\n                // let minutes = displayMessage ? 24 : 4;\n                // let seconds = 59;\n                // setSeconds(seconds);\n                // setMinutes(minutes);\n                // setDisplayMessage(!displayMessage);\n                }\n            } else {\n                setSeconds(seconds - 1);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        seconds,\n        minutes,\n        displayMessage\n    ]);\n    const timerMinutes = minutes < 10 ? \"0\".concat(minutes) : minutes;\n    const timerSeconds = seconds < 10 ? \"0\".concat(seconds) : seconds;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"timer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: userInput,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: startCountdown,\n                children: \"Start Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message\",\n                children: displayMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Break time! New session starts in: \"\n                }, void 0, false, {\n                    fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                    lineNumber: 68,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer\",\n                children: [\n                    timerMinutes,\n                    \":\",\n                    timerSeconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(Timer, \"8Iga69HxEpMfN3aPvK97od4Gbyw=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2hCO0FBQ0Q7QUFDaEMseUNBQXlDO0FBQ3pDLG1FQUFtRTtBQUVwRCxTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNYSxvQkFBb0IsQ0FBQ0M7UUFDdkJGLGFBQWFFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLE1BQU1DLGlCQUFpQjtRQUNuQixJQUFJQyxlQUFlQyxTQUFTUixXQUFXO1FBRXZDTCxXQUFXWTtRQUNYVixXQUFXO0lBRVgsaURBQWlEO0lBQ2pELCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixJQUFJO0lBRUosd0NBQXdDO0lBRTVDO0lBRUFQLGdEQUFTQSxDQUFDO1FBQ04sSUFBSW1CLFdBQVdDLFlBQVk7WUFDdkIsMEJBQTBCO1lBRTFCLElBQUlkLFlBQVksR0FBRztnQkFDZixJQUFJRixZQUFZLEdBQUc7b0JBQ2ZHLFdBQVc7b0JBQ1hGLFdBQVdELFVBQVU7Z0JBQ3pCLE9BQU87Z0JBQ0gsVUFBVTtnQkFFVix5Q0FBeUM7Z0JBQ3pDLG9CQUFvQjtnQkFFcEIsdUJBQXVCO2dCQUN2Qix1QkFBdUI7Z0JBQ3ZCLHNDQUFzQztnQkFDMUM7WUFDSixPQUFPO2dCQUNIRyxXQUFXRCxVQUFVO1lBQ3pCO1FBQ0osR0FBRztRQUVILE9BQU8sSUFBTWUsY0FBY0Y7SUFDL0IsR0FBRztRQUFDYjtRQUFTRjtRQUFTSTtLQUFlO0lBRXJDLE1BQU1jLGVBQWVsQixVQUFVLEtBQUssSUFBWSxPQUFSQSxXQUFZQTtJQUNwRCxNQUFNbUIsZUFBZWpCLFVBQVUsS0FBSyxJQUFZLE9BQVJBLFdBQVlBO0lBRXBELHFCQUNJLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFTWixPQUFPTDtnQkFBV2tCLFVBQVVoQjs7Ozs7OzBCQUNqRCw4REFBQ2lCO2dCQUFPSixXQUFVO2dCQUFXSyxTQUFTZDswQkFBZ0I7Ozs7OzswQkFDdEQsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUNWakIsZ0NBQWtCLDhEQUFDZ0I7OEJBQUk7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUNWSDtvQkFBYTtvQkFBRUM7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0F2RXdCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanM/YzhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFBvcHVwIGZyb20gJ3JlYWN0LXBvcHVwJztcbi8vIGltcG9ydCAncmVhY3Rqcy1wb3B1cC9kaXN0L2luZGV4LmNzcyc7XG4vL2h0dHBzOi8vd3d3LmdlZWtzZm9yZ2Vla3Mub3JnL2hvdy10by1jcmVhdGUtcG9wdXAtYm94LWluLXJlYWN0anMvXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICAgIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtkaXNwbGF5TWVzc2FnZSwgc2V0RGlzcGxheU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhcnRDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dE1pbnV0ZXMgPSBwYXJzZUludCh1c2VySW5wdXQsIDEwKTtcblxuICAgICAgICBzZXRNaW51dGVzKGlucHV0TWludXRlcyk7IFxuICAgICAgICBzZXRTZWNvbmRzKDApO1xuXG4gICAgICAgIC8vIGlmIChpbnB1dE1pbnV0ZXMgPD0gMCB8fCBpbnB1dE1pbnV0ZXMgPiAxMjApIHtcbiAgICAgICAgLy8gICAgIFBvcHVwLmFsZXJ0KCd0ZXN0aW5nIScpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgc2V0TWludXRlcyhpbnB1dE1pbnV0ZXMpOyBcbiAgICAgICAgLy8gICAgIHNldFNlY29uZHMoMCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHNldE1pbnV0ZXMocGFyc2VJbnQodXNlcklucHV0LCAxMCkpOyBcblxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvL2NsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKG1pbnV0ZXMgLSAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIGluXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG1pbnV0ZXMgPSBkaXNwbGF5TWVzc2FnZSA/IDI0IDogNDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHNlY29uZHMgPSA1OTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXREaXNwbGF5TWVzc2FnZSghZGlzcGxheU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbc2Vjb25kcywgbWludXRlcywgZGlzcGxheU1lc3NhZ2VdKTtcblxuICAgIGNvbnN0IHRpbWVyTWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuICAgIGNvbnN0IHRpbWVyU2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dXNlcklucHV0fSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0QnRuXCIgb25DbGljaz17c3RhcnRDb3VudGRvd259PlN0YXJ0IENvdW50ZG93bjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlNZXNzYWdlICYmIDxkaXY+QnJlYWsgdGltZSEgTmV3IHNlc3Npb24gc3RhcnRzIGluOiA8L2Rpdj4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5cbiAgICAgICAgICAgICAgICB7dGltZXJNaW51dGVzfTp7dGltZXJTZWNvbmRzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICBcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3REb20iLCJQb3B1cCIsIlRpbWVyIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImRpc3BsYXlNZXNzYWdlIiwic2V0RGlzcGxheU1lc3NhZ2UiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdGFydENvdW50ZG93biIsImlucHV0TWludXRlcyIsInBhcnNlSW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lck1pbnV0ZXMiLCJ0aW1lclNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Timer.js\n"));

/***/ })

});