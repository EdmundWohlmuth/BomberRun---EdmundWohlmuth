"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
class Bullet {
    constructor(stage, assetManager) {
        this.stage = stage;
        this._state = Bullet.STATE_IDLE;
        this._speed = 6;
        this._sprite = assetManager.getSprite("sprites", "Ammo/Bullet", 0, 0);
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
    }
    KillMe() {
        this._sprite.stop();
        this.stage.removeChild(this.sprite);
        this._state == Bullet.STATE_IDLE;
    }
    Update() {
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
/******/ 	__webpack_require__.h = () => ("dff2c160f95cf444288b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.aba9d16583054ac4caf1.hot-update.js.map