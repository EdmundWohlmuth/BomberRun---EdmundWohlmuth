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
        this.stage = stage;
        this.bunker = assetManager.getSprite("sprites", "Misc/Bunker", 0, 0);
    }
    startMe() {
        this._sprite.gotoAndPlay("Bomb/Falling");
    }
    update() {
        if (this.plane.state == Plane_1.Plane.STATE_DEAD ||
            this.plane.state == Plane_1.Plane.STATE_DYING)
            return;
        if (this.plane.sprite.x == 50) {
            this.stage.addChild(this._sprite);
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
/******/ 	__webpack_require__.h = () => ("5a3616c72d473b3b4e0e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2d867601aa487c51f964.hot-update.js.map