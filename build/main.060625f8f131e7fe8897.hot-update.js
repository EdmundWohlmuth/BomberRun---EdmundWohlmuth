"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Bullet {
    constructor(stage, assetManager, plane) {
        this.stage = stage;
        this._state = Bullet.STATE_IDLE;
        this._speed = 6;
        this._sprite = assetManager.getSprite("sprites", "Ammo/Bullet", 0, 0);
        this.plane = plane;
    }
    get sprite() {
        return this._sprite;
    }
    set speed(value) {
        this._speed = value;
    }
    get state() {
        return this._state;
    }
    ShootMe() {
        if (this._state == Bullet.STATE_IDLE) {
            this._sprite.x = this.antiAir.sprite.x + 25;
            this._sprite.y = this.antiAir.sprite.y + 36;
        }
    }
    KillMe() {
        this._sprite.stop();
        this.stage.removeChild(this.sprite);
        this._state == Bullet.STATE_IDLE;
    }
    Update() {
        if (this._state = Bullet.STATE_SHOOT) {
            this._sprite.y -= this._speed;
        }
        if ((0, Toolkit_1.boxHit)(this._sprite, this.plane)) {
            this.KillMe();
        }
        else if (this._sprite.y <= 0) {
            this.KillMe();
        }
    }
}
exports.Bullet = Bullet;
Bullet.STATE_SHOOT = 0;
Bullet.STATE_DEAD = 1;
Bullet.STATE_IDLE = 2;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44ee02fc0f8cc43548f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.060625f8f131e7fe8897.hot-update.js.map