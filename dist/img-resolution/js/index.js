/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img-resolution/js/modules/range.ts":
/*!************************************************!*\
  !*** ./src/img-resolution/js/modules/range.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "range": function() { return /* binding */ range; }
/* harmony export */ });
var range = function range(tag, min, max) {
  if (tag < min) tag = min;
  if (tag > max) tag = max;
  return tag;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************************!*\
  !*** ./src/img-resolution/js/index.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/range */ "./src/img-resolution/js/modules/range.ts");


(function () {
  var mouseX = 0,
      mouseY = 0;
  window.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");

    if (!canvas) {
      console.error("Not canvas");
      return;
    }

    var ctx = canvas.getContext("2d");

    if (!ctx) {
      console.log("Not context 2d");
      return;
    }

    var canvasW = window.innerWidth < 600 ? window.innerWidth : 600;
    var canvasH = canvasW;
    canvas.width = canvasW;
    canvas.height = canvasH;
    var rect = canvas.getBoundingClientRect();
    var canvasX = rect.left;
    var canvasY = rect.top;
    var canvasOnMouseX = (0,_modules_range__WEBPACK_IMPORTED_MODULE_0__.range)(mouseX - canvasX, 1, canvasW);
    var canvasOnMouseY = (0,_modules_range__WEBPACK_IMPORTED_MODULE_0__.range)(mouseY - canvasY, 1, canvasH);
    var tileCountX = Math.ceil(canvasW / canvasOnMouseX);
    var tileCountY = Math.ceil(canvasH / canvasOnMouseY);
    var tileWidth = Math.ceil(canvasW / tileCountX);
    var tileHeight = Math.ceil(canvasH / tileCountY);
    var img = new Image();
    img.src = "./img/sample01.jpg";

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      var myImageData = ctx.getImageData(0, 0, canvasW, canvasH);
      draw(myImageData);

      var loop = function loop() {
        ctx.clearRect(0, 0, canvasW, canvasH);
        canvasOnMouseX = (0,_modules_range__WEBPACK_IMPORTED_MODULE_0__.range)(mouseX - canvasX, 1, canvasW);
        canvasOnMouseY = (0,_modules_range__WEBPACK_IMPORTED_MODULE_0__.range)(mouseY - canvasY, 1, canvasH);
        tileCountX = Math.ceil(canvasW / canvasOnMouseX);
        tileCountY = Math.ceil(canvasH / canvasOnMouseY);
        tileWidth = Math.ceil(canvasW / tileCountX);
        tileHeight = Math.ceil(canvasH / tileCountY);
        draw(myImageData);
        requestAnimationFrame(loop);
      };

      loop();
    };

    var draw = function draw(myImageData) {
      var i = 0;

      for (var y = 0; y < canvasH; y += tileHeight) {
        for (var x = 0; x < canvasW; x += tileWidth) {
          var r = myImageData.data[i];
          var g = myImageData.data[i + 1];
          var b = myImageData.data[i + 2];
          var a = myImageData.data[i + 3];
          ctx.fillStyle = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
          ctx.fillRect(x, y, tileWidth, tileHeight);
          i = 4 * (600 * y + x + tileWidth);
        }
      }
    };
  });
  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX; //X座標

    mouseY = e.pageY; //Y座標
  });
})();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2ltZy1yZXNvbHV0aW9uL2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsR0FBRCxFQUFjQyxHQUFkLEVBQTJCQyxHQUEzQixFQUEyQztBQUM5RCxNQUFJRixHQUFHLEdBQUdDLEdBQVYsRUFBZUQsR0FBRyxHQUFHQyxHQUFOO0FBQ2YsTUFBSUQsR0FBRyxHQUFHRSxHQUFWLEVBQWVGLEdBQUcsR0FBR0UsR0FBTjtBQUNmLFNBQU9GLEdBQVA7QUFDRCxDQUpNOzs7Ozs7VUNBUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxDQUFDLFlBQVk7QUFDWCxNQUFJRyxNQUFNLEdBQUcsQ0FBYjtBQUFBLE1BQ0VDLE1BQU0sR0FBRyxDQURYO0FBR0FDLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FDYixRQURhLENBQWY7O0FBR0EsUUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWEcsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsWUFBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjs7QUFDQSxRQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSRixNQUFBQSxPQUFPLENBQUNJLEdBQVIsQ0FBWSxnQkFBWjtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTyxHQUFHVixNQUFNLENBQUNXLFVBQVAsR0FBb0IsR0FBcEIsR0FBMEJYLE1BQU0sQ0FBQ1csVUFBakMsR0FBOEMsR0FBOUQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLE9BQWhCO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ1csS0FBUCxHQUFlSCxPQUFmO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQkYsT0FBaEI7QUFDQSxRQUFNRyxJQUFJLEdBQUdiLE1BQU0sQ0FBQ2MscUJBQVAsRUFBYjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxJQUFyQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxHQUFyQjtBQUNBLFFBQUlDLGNBQWMsR0FBRzNCLHFEQUFLLENBQUNJLE1BQU0sR0FBR21CLE9BQVYsRUFBbUIsQ0FBbkIsRUFBc0JQLE9BQXRCLENBQTFCO0FBQ0EsUUFBSVksY0FBYyxHQUFHNUIscURBQUssQ0FBQ0ssTUFBTSxHQUFHb0IsT0FBVixFQUFtQixDQUFuQixFQUFzQlAsT0FBdEIsQ0FBMUI7QUFDQSxRQUFJVyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVZixPQUFPLEdBQUdXLGNBQXBCLENBQWpCO0FBQ0EsUUFBSUssVUFBVSxHQUFHRixJQUFJLENBQUNDLElBQUwsQ0FBVWIsT0FBTyxHQUFHVSxjQUFwQixDQUFqQjtBQUNBLFFBQUlLLFNBQVMsR0FBR0gsSUFBSSxDQUFDQyxJQUFMLENBQVVmLE9BQU8sR0FBR2EsVUFBcEIsQ0FBaEI7QUFDQSxRQUFJSyxVQUFVLEdBQUdKLElBQUksQ0FBQ0MsSUFBTCxDQUFVYixPQUFPLEdBQUdjLFVBQXBCLENBQWpCO0FBRUEsUUFBTUcsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxJQUFBQSxHQUFHLENBQUNFLEdBQUosR0FBVSxvQkFBVjs7QUFFQUYsSUFBQUEsR0FBRyxDQUFDRyxNQUFKLEdBQWEsWUFBTTtBQUNqQnpCLE1BQUFBLEdBQUcsQ0FBQzBCLFNBQUosQ0FBY0osR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBLFVBQU1LLFdBQVcsR0FBRzNCLEdBQUcsQ0FBQzRCLFlBQUosQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJ6QixPQUF2QixFQUFnQ0UsT0FBaEMsQ0FBcEI7QUFDQXdCLE1BQUFBLElBQUksQ0FBQ0YsV0FBRCxDQUFKOztBQUVBLFVBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakI5QixRQUFBQSxHQUFHLENBQUMrQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjVCLE9BQXBCLEVBQTZCRSxPQUE3QjtBQUNBUyxRQUFBQSxjQUFjLEdBQUczQixxREFBSyxDQUFDSSxNQUFNLEdBQUdtQixPQUFWLEVBQW1CLENBQW5CLEVBQXNCUCxPQUF0QixDQUF0QjtBQUNBWSxRQUFBQSxjQUFjLEdBQUc1QixxREFBSyxDQUFDSyxNQUFNLEdBQUdvQixPQUFWLEVBQW1CLENBQW5CLEVBQXNCUCxPQUF0QixDQUF0QjtBQUNBVyxRQUFBQSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVZixPQUFPLEdBQUdXLGNBQXBCLENBQWI7QUFDQUssUUFBQUEsVUFBVSxHQUFHRixJQUFJLENBQUNDLElBQUwsQ0FBVWIsT0FBTyxHQUFHVSxjQUFwQixDQUFiO0FBQ0FLLFFBQUFBLFNBQVMsR0FBR0gsSUFBSSxDQUFDQyxJQUFMLENBQVVmLE9BQU8sR0FBR2EsVUFBcEIsQ0FBWjtBQUNBSyxRQUFBQSxVQUFVLEdBQUdKLElBQUksQ0FBQ0MsSUFBTCxDQUFVYixPQUFPLEdBQUdjLFVBQXBCLENBQWI7QUFDQVUsUUFBQUEsSUFBSSxDQUFDRixXQUFELENBQUo7QUFDQUssUUFBQUEscUJBQXFCLENBQUNGLElBQUQsQ0FBckI7QUFDRCxPQVZEOztBQVdBQSxNQUFBQSxJQUFJO0FBQ0wsS0FqQkQ7O0FBbUJBLFFBQU1ELElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNGLFdBQUQsRUFBNEI7QUFDdkMsVUFBSU0sQ0FBQyxHQUFHLENBQVI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHN0IsT0FBcEIsRUFBNkI2QixDQUFDLElBQUliLFVBQWxDLEVBQThDO0FBQzVDLGFBQUssSUFBSWMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hDLE9BQXBCLEVBQTZCZ0MsQ0FBQyxJQUFJZixTQUFsQyxFQUE2QztBQUMzQyxjQUFJZ0IsQ0FBQyxHQUFHVCxXQUFXLENBQUNVLElBQVosQ0FBaUJKLENBQWpCLENBQVI7QUFDQSxjQUFJSyxDQUFDLEdBQUdYLFdBQVcsQ0FBQ1UsSUFBWixDQUFpQkosQ0FBQyxHQUFHLENBQXJCLENBQVI7QUFDQSxjQUFJTSxDQUFDLEdBQUdaLFdBQVcsQ0FBQ1UsSUFBWixDQUFpQkosQ0FBQyxHQUFHLENBQXJCLENBQVI7QUFDQSxjQUFJTyxDQUFDLEdBQUdiLFdBQVcsQ0FBQ1UsSUFBWixDQUFpQkosQ0FBQyxHQUFHLENBQXJCLENBQVI7QUFDQWpDLFVBQUFBLEdBQUcsQ0FBQ3lDLFNBQUosa0JBQXdCTCxDQUF4QixjQUE2QkUsQ0FBN0IsY0FBa0NDLENBQWxDLGNBQXVDQyxDQUF2QztBQUNBeEMsVUFBQUEsR0FBRyxDQUFDMEMsUUFBSixDQUFhUCxDQUFiLEVBQWdCRCxDQUFoQixFQUFtQmQsU0FBbkIsRUFBOEJDLFVBQTlCO0FBQ0FZLFVBQUFBLENBQUMsR0FBRyxLQUFLLE1BQU1DLENBQU4sR0FBVUMsQ0FBVixHQUFjZixTQUFuQixDQUFKO0FBQ0Q7QUFDRjtBQUNGLEtBYkQ7QUFjRCxHQWhFRDtBQWtFQXhCLEVBQUFBLFFBQVEsQ0FBQ0YsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ2lELENBQUQsRUFBTztBQUM1Q3BELElBQUFBLE1BQU0sR0FBR29ELENBQUMsQ0FBQ0MsS0FBWCxDQUQ0QyxDQUMxQjs7QUFDbEJwRCxJQUFBQSxNQUFNLEdBQUdtRCxDQUFDLENBQUNFLEtBQVgsQ0FGNEMsQ0FFMUI7QUFDbkIsR0FIRDtBQUlELENBMUVELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1odG1sLy4vc3JjL2ltZy1yZXNvbHV0aW9uL2pzL21vZHVsZXMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtaHRtbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1odG1sL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1odG1sL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtaHRtbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLWh0bWwvLi9zcmMvaW1nLXJlc29sdXRpb24vanMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJhbmdlID0gKHRhZzogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgaWYgKHRhZyA8IG1pbikgdGFnID0gbWluO1xuICBpZiAodGFnID4gbWF4KSB0YWcgPSBtYXg7XG4gIHJldHVybiB0YWc7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3JhbmdlXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBtb3VzZVggPSAwLFxuICAgIG1vdXNlWSA9IDA7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiY2FudmFzXCJcbiAgICApIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5vdCBjYW52YXNcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNvbnRleHQgMmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzVyA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gd2luZG93LmlubmVyV2lkdGggOiA2MDA7XG4gICAgY29uc3QgY2FudmFzSCA9IGNhbnZhc1c7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzVztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSDtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNhbnZhc1ggPSByZWN0LmxlZnQ7XG4gICAgY29uc3QgY2FudmFzWSA9IHJlY3QudG9wO1xuICAgIGxldCBjYW52YXNPbk1vdXNlWCA9IHJhbmdlKG1vdXNlWCAtIGNhbnZhc1gsIDEsIGNhbnZhc1cpO1xuICAgIGxldCBjYW52YXNPbk1vdXNlWSA9IHJhbmdlKG1vdXNlWSAtIGNhbnZhc1ksIDEsIGNhbnZhc0gpO1xuICAgIGxldCB0aWxlQ291bnRYID0gTWF0aC5jZWlsKGNhbnZhc1cgLyBjYW52YXNPbk1vdXNlWCk7XG4gICAgbGV0IHRpbGVDb3VudFkgPSBNYXRoLmNlaWwoY2FudmFzSCAvIGNhbnZhc09uTW91c2VZKTtcbiAgICBsZXQgdGlsZVdpZHRoID0gTWF0aC5jZWlsKGNhbnZhc1cgLyB0aWxlQ291bnRYKTtcbiAgICBsZXQgdGlsZUhlaWdodCA9IE1hdGguY2VpbChjYW52YXNIIC8gdGlsZUNvdW50WSk7XG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIuL2ltZy9zYW1wbGUwMS5qcGdcIjtcblxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICBjb25zdCBteUltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzVywgY2FudmFzSCk7XG4gICAgICBkcmF3KG15SW1hZ2VEYXRhKTtcblxuICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXLCBjYW52YXNIKTtcbiAgICAgICAgY2FudmFzT25Nb3VzZVggPSByYW5nZShtb3VzZVggLSBjYW52YXNYLCAxLCBjYW52YXNXKTtcbiAgICAgICAgY2FudmFzT25Nb3VzZVkgPSByYW5nZShtb3VzZVkgLSBjYW52YXNZLCAxLCBjYW52YXNIKTtcbiAgICAgICAgdGlsZUNvdW50WCA9IE1hdGguY2VpbChjYW52YXNXIC8gY2FudmFzT25Nb3VzZVgpO1xuICAgICAgICB0aWxlQ291bnRZID0gTWF0aC5jZWlsKGNhbnZhc0ggLyBjYW52YXNPbk1vdXNlWSk7XG4gICAgICAgIHRpbGVXaWR0aCA9IE1hdGguY2VpbChjYW52YXNXIC8gdGlsZUNvdW50WCk7XG4gICAgICAgIHRpbGVIZWlnaHQgPSBNYXRoLmNlaWwoY2FudmFzSCAvIHRpbGVDb3VudFkpO1xuICAgICAgICBkcmF3KG15SW1hZ2VEYXRhKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgfTtcbiAgICAgIGxvb3AoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZHJhdyA9IChteUltYWdlRGF0YTogSW1hZ2VEYXRhKSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhc0g7IHkgKz0gdGlsZUhlaWdodCkge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNhbnZhc1c7IHggKz0gdGlsZVdpZHRoKSB7XG4gICAgICAgICAgbGV0IHIgPSBteUltYWdlRGF0YS5kYXRhW2ldO1xuICAgICAgICAgIGxldCBnID0gbXlJbWFnZURhdGEuZGF0YVtpICsgMV07XG4gICAgICAgICAgbGV0IGIgPSBteUltYWdlRGF0YS5kYXRhW2kgKyAyXTtcbiAgICAgICAgICBsZXQgYSA9IG15SW1hZ2VEYXRhLmRhdGFbaSArIDNdO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWA7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG4gICAgICAgICAgaSA9IDQgKiAoNjAwICogeSArIHggKyB0aWxlV2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgIG1vdXNlWCA9IGUucGFnZVg7IC8vWOW6p+aomVxuICAgIG1vdXNlWSA9IGUucGFnZVk7IC8vWeW6p+aomVxuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsicmFuZ2UiLCJ0YWciLCJtaW4iLCJtYXgiLCJtb3VzZVgiLCJtb3VzZVkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJlcnJvciIsImN0eCIsImdldENvbnRleHQiLCJsb2ciLCJjYW52YXNXIiwiaW5uZXJXaWR0aCIsImNhbnZhc0giLCJ3aWR0aCIsImhlaWdodCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYW52YXNYIiwibGVmdCIsImNhbnZhc1kiLCJ0b3AiLCJjYW52YXNPbk1vdXNlWCIsImNhbnZhc09uTW91c2VZIiwidGlsZUNvdW50WCIsIk1hdGgiLCJjZWlsIiwidGlsZUNvdW50WSIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIm15SW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZHJhdyIsImxvb3AiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpIiwieSIsIngiLCJyIiwiZGF0YSIsImciLCJiIiwiYSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZSIsInBhZ2VYIiwicGFnZVkiXSwic291cmNlUm9vdCI6IiJ9