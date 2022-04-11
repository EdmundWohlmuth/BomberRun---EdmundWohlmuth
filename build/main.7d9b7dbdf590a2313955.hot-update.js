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
    set points(value) {
        this._points = value;
    }
    start(startingPoints, plane) {
        this._points = startingPoints;
    }
    updatePoints() {
        this._points++;
        console.log("Points: " + this.points);
    }
}
exports.PointCount = PointCount;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c69352a184f6af8f55db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7d9b7dbdf590a2313955.hot-update.js.map