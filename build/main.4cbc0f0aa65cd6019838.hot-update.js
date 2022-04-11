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
                .to({ y: +280 }, 50)
                .call(() => {
                this._sprite.gotoAndPlay("Bomb/Falling");
                createjs.Sound.play("Explosion2");
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
/******/ 	__webpack_require__.h = () => ("63c4329d47863fde3b35")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4cbc0f0aa65cd6019838.hot-update.js.map