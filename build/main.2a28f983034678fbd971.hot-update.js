"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/PointCount.ts":
/*!***************************!*\
  !*** ./src/PointCount.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointCount = void 0;
class PointCount {
    constructor(stage, assetManager) {
        this._points = 0;
        this.txtPoints = new createjs.BitmapText("10", assetManager.getSpriteSheet("glyphs"));
        this.txtPoints.x = 20;
        this.txtPoints.y = 20;
        stage.addChild(this.txtPoints);
    }
    get points() {
        return this._points;
    }
    start(startingPoints, plane) {
        this._points = startingPoints;
    }
    updatePoints() {
        this._points++;
    }
}
exports.PointCount = PointCount;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2e5ca5ce051370b34a6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2a28f983034678fbd971.hot-update.js.map