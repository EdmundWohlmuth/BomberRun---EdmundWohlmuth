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
        this.txtPoints = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.txtPoints.letterSpacing = 1;
        this.txtPoints.x = 20;
        this.txtPoints.y = 20;
        stage.addChild(this.txtPoints);
    }
    get points() {
        return this._points;
    }
    start(startingPoints) {
        this._points = startingPoints;
    }
    updatePoints() {
        this._points++;
        this.txtPoints.text = String(this._points);
        console.log("Points: " + this.points);
    }
}
exports.PointCount = PointCount;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4959726fb05c8ed96c45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.85b376a4813f453ad673.hot-update.js.map