"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bomb = void 0;
const Plane_1 = __webpack_require__(/*! ./Plane */ "./src/Plane.ts");
class Bomb {
    constructor(stage, assetManager, plane, bunker) {
        this._sprite = assetManager.getSprite("sprites", "Bomb/Falling", 0, 0);
        this.plane = plane;
        this.bunker = assetManager.getSprite("sprites", "Misc/Bunker", 0, 0);
    }
    startMe() {
        this._sprite.gotoAndPlay("Bomb/Falling");
    }
    update() {
        if (this.plane.state == Plane_1.Plane.STATE_DEAD ||
            this.plane.state == Plane_1.Plane.STATE_DYING)
            return;
        console.log(this.plane.sprite.x);
        if (this.plane.sprite.x == 50 && !createjs.Tween.hasActiveTweens(this._sprite)) {
            this.StartY = this._sprite.y;
            console.debug("bomb droped");
            createjs.Tween
                .get(this._sprite, { useTicks: true })
                .to({ y: -110 }, 50)
                .call(() => {
                this._sprite.y = this.StartY;
                this._sprite.gotoAndPlay("Bomb/Falling");
            });
        }
    }
}
exports.Bomb = Bomb;
Bomb.STATE_IDLE = 0;
Bomb.STATE_FALLING = 1;
Bomb.STATE_EXPLODING = 2;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec5123ae908497553b50")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.067bf72f81ad35bbbd9d.hot-update.js.map