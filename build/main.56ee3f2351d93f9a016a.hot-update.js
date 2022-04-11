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
        this.bunker = bunker;
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
                this.stage.removeChild(this._sprite);
                this.stage.removeChild(this.bunker);
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
/******/ 	__webpack_require__.h = () => ("d1baef9bfc2fe019eb9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.56ee3f2351d93f9a016a.hot-update.js.map