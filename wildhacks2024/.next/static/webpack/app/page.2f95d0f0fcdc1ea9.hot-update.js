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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var react_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-popup */ \"(app-pages-browser)/./node_modules/react-popup/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import 'reactjs-popup/dist/index.css';\n//https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/\nfunction Timer() {\n    _s();\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [message, setMessage] = useState(\"\");\n    // const showMessage = (msg, duration) => {\n    //     setMessage(msg);\n    //     setTimeout(() => {\n    //         setMessage(\"\");\n    //     }, duration);\n    // };\n    const handleInputChange = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const startCountdown = ()=>{\n        let inputMinutes = parseInt(userInput, 10);\n        // setMinutes(inputMinutes); \n        // setSeconds(0);\n        if (inputMinutes <= 0 || inputMinutes > 120) {\n            // showMessage(\"Hello!\", 3000)\n            setDisplayMessage(true);\n        // Popup.alert('testing!');\n        } else {\n            setDisplayMessage(false);\n            setMinutes(inputMinutes);\n            setSeconds(0);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = setInterval(()=>{\n            //clearInterval(interval);\n            if (seconds === 0) {\n                if (minutes !== 0) {\n                    setSeconds(59);\n                    setMinutes(minutes - 1);\n                }\n            } else {\n                setSeconds(seconds - 1);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        seconds,\n        minutes,\n        displayMessage\n    ]); // displayMessage\n    const timerMinutes = minutes < 10 ? \"0\".concat(minutes) : minutes;\n    const timerSeconds = seconds < 10 ? \"0\".concat(seconds) : seconds;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"timer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: userInput,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"startBtn\",\n                onClick: startCountdown,\n                children: \"Start Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message\",\n                children: displayMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"please input a whole number between 1 and 120 \"\n                }, void 0, false, {\n                    fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                    lineNumber: 69,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"timer\",\n                children: [\n                    timerMinutes,\n                    \":\",\n                    timerSeconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/caterose/Desktop/CODING/WildHacks/2024/wildhacks2024/wildhacks2024/src/components/Timer.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_s(Timer, \"8Iga69HxEpMfN3aPvK97od4Gbyw=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2hCO0FBQ0Q7QUFDaEMseUNBQXlDO0FBQ3pDLG1FQUFtRTtBQUVwRCxTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyw4Q0FBOEM7SUFFOUMsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixLQUFLO0lBRUwsTUFBTWEsb0JBQW9CLENBQUNDO1FBQ3ZCRixhQUFhRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbkM7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkIsSUFBSUMsZUFBZUMsU0FBU1IsV0FBVztRQUV2Qyw2QkFBNkI7UUFDN0IsaUJBQWlCO1FBRWpCLElBQUlPLGdCQUFnQixLQUFLQSxlQUFlLEtBQUs7WUFDekMsOEJBQThCO1lBQzlCUixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQy9CLE9BQU87WUFDSEEsa0JBQWtCO1lBQ2xCSixXQUFXWTtZQUNYVixXQUFXO1FBQ2Y7SUFHSjtJQUVBUCxnREFBU0EsQ0FBQztRQUNOLElBQUltQixXQUFXQyxZQUFZO1lBQ3ZCLDBCQUEwQjtZQUUxQixJQUFJZCxZQUFZLEdBQUc7Z0JBQ2YsSUFBSUYsWUFBWSxHQUFHO29CQUNmRyxXQUFXO29CQUNYRixXQUFXRCxVQUFVO2dCQUN6QjtZQUNKLE9BQU87Z0JBQ0hHLFdBQVdELFVBQVU7WUFDekI7UUFDSixHQUFHO1FBRUgsT0FBTyxJQUFNZSxjQUFjRjtJQUMvQixHQUFHO1FBQUNiO1FBQVNGO1FBQVNJO0tBQWUsR0FBRyxpQkFBaUI7SUFFekQsTUFBTWMsZUFBZWxCLFVBQVUsS0FBSyxJQUFZLE9BQVJBLFdBQVlBO0lBQ3BELE1BQU1tQixlQUFlakIsVUFBVSxLQUFLLElBQVksT0FBUkEsV0FBWUE7SUFFcEQscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNaLE9BQU9MO2dCQUFXa0IsVUFBVWhCOzs7Ozs7MEJBQ2pELDhEQUFDaUI7Z0JBQU9KLFdBQVU7Z0JBQVdLLFNBQVNkOzBCQUFnQjs7Ozs7OzBCQUN0RCw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQ1ZqQixnQ0FBa0IsOERBQUNnQjs4QkFBSTs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDQTtnQkFBSUMsV0FBVTs7b0JBQ1ZIO29CQUFhO29CQUFFQzs7Ozs7Ozs7Ozs7OztBQU1oQztHQXhFd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcz9jOGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUG9wdXAgZnJvbSAncmVhY3QtcG9wdXAnO1xuLy8gaW1wb3J0ICdyZWFjdGpzLXBvcHVwL2Rpc3QvaW5kZXguY3NzJztcbi8vaHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvaG93LXRvLWNyZWF0ZS1wb3B1cC1ib3gtaW4tcmVhY3Rqcy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXIoKSB7XG4gICAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2Rpc3BsYXlNZXNzYWdlLCBzZXREaXNwbGF5TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICAvLyBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBcbiAgICAvLyBjb25zdCBzaG93TWVzc2FnZSA9IChtc2csIGR1cmF0aW9uKSA9PiB7XG4gICAgLy8gICAgIHNldE1lc3NhZ2UobXNnKTtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIC8vICAgICB9LCBkdXJhdGlvbik7XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFVzZXJJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGFydENvdW50ZG93biA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0TWludXRlcyA9IHBhcnNlSW50KHVzZXJJbnB1dCwgMTApO1xuXG4gICAgICAgIC8vIHNldE1pbnV0ZXMoaW5wdXRNaW51dGVzKTsgXG4gICAgICAgIC8vIHNldFNlY29uZHMoMCk7XG5cbiAgICAgICAgaWYgKGlucHV0TWludXRlcyA8PSAwIHx8IGlucHV0TWludXRlcyA+IDEyMCkge1xuICAgICAgICAgICAgLy8gc2hvd01lc3NhZ2UoXCJIZWxsbyFcIiwgMzAwMClcbiAgICAgICAgICAgIHNldERpc3BsYXlNZXNzYWdlKHRydWUpO1xuICAgICAgICAgICAgLy8gUG9wdXAuYWxlcnQoJ3Rlc3RpbmchJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5TWVzc2FnZShmYWxzZSk7XG4gICAgICAgICAgICBzZXRNaW51dGVzKGlucHV0TWludXRlcyk7IFxuICAgICAgICAgICAgc2V0U2Vjb25kcygwKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvL2NsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlY29uZHMoNTkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGVzKG1pbnV0ZXMgLSAxKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRTZWNvbmRzKHNlY29uZHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH0sIFtzZWNvbmRzLCBtaW51dGVzLCBkaXNwbGF5TWVzc2FnZV0pOyAvLyBkaXNwbGF5TWVzc2FnZVxuXG4gICAgY29uc3QgdGltZXJNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gICAgY29uc3QgdGltZXJTZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXtzdGFydENvdW50ZG93bn0+U3RhcnQgQ291bnRkb3duPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheU1lc3NhZ2UgJiYgPGRpdj5wbGVhc2UgaW5wdXQgYSB3aG9sZSBudW1iZXIgYmV0d2VlbiAxIGFuZCAxMjAgPC9kaXY+IH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XG4gICAgICAgICAgICAgICAge3RpbWVyTWludXRlc306e3RpbWVyU2Vjb25kc31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0RG9tIiwiUG9wdXAiLCJUaW1lciIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJkaXNwbGF5TWVzc2FnZSIsInNldERpc3BsYXlNZXNzYWdlIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3RhcnRDb3VudGRvd24iLCJpbnB1dE1pbnV0ZXMiLCJwYXJzZUludCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZXJNaW51dGVzIiwidGltZXJTZWNvbmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Timer.js\n"));

/***/ })

});