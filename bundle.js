/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nNeara.addSafeUrlPrefix('https://forecast.weather.gov');\nNeara.addSafeUrlPrefix('https://wiki.openstreetmap.org');\nNeara.addSafeUrlPrefix('https://www.google.com/maps');\nwindow.TestPlugin = {\n    getPoleLocationInfo: (weatherFinderData) => __awaiter(void 0, void 0, void 0, function* () {\n        const lat = weatherFinderData.getLat();\n        const long = weatherFinderData.getLong();\n        // Get the timezone and street address from a third-party api\n        // Get your own trial API key from https://www.geoapify.com/\n        let timezone = \"(Unknown)\";\n        let streetAddress = \"(Unknown)\";\n        const API_KEY = \"your-api-key\";\n        const API_ENDPOINT = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${API_KEY}`;\n        var requestOptions = {\n            method: 'GET',\n        };\n        fetch(API_ENDPOINT, requestOptions)\n            .then(response => response.json())\n            .then(result => {\n            // API returnd timezone and street address\n            console.log(result);\n            timezone = result.features[0].properties.timezone.name;\n            streetAddress = result.features[0].properties.formatted;\n            // Update the Neara data structure with the values\n            weatherFinderData.setTimezone(timezone);\n            weatherFinderData.setStreetAddress(streetAddress);\n        })\n            .catch(error => console.log('error', error));\n        // Set the \"powered by\" logo URL to the OpenStreetMap logo\n        weatherFinderData.setPoweredByLogoUrl('https://wiki.openstreetmap.org/w/images/c/c8/Public-images-osm_logo.png');\n        // Extract the current forecast from a div in the iframe webpage\n        // Get a reference to the iframe element in the Neara environment\n        const iframe = document.getElementById('neara-iframe-weather-iframe');\n        // Listen for messages from the iframe\n        window.addEventListener(\"message\", (event) => {\n            if (event.source === iframe.contentWindow) {\n                const messageData = event.data;\n                if (messageData.content) {\n                    // The code in the iframe sent a message\n                    // containing the textContent of the div with id \"current-conditions\"\n                    // Set the current forecast in the Neara data structure\n                    weatherFinderData.setCurrentConditions(messageData.content);\n                }\n            }\n        });\n    }),\n};\nNeara.setPermittedPluginFunctions([\n    'TestPlugin.getPoleLocationInfo',\n]);\n\n\n\n//# sourceURL=webpack://plugin/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;