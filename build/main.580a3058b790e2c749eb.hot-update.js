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
        console.log(this.points);
    }
}
exports.PointCount = PointCount;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e355b0bdba19d808c699")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.580a3058b790e2c749eb.hot-update.js.map