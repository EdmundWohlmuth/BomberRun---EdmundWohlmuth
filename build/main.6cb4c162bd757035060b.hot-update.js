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
        this._sprite.x = this.antiAir.sprite.x;
        this._sprite.y = this.antiAir.sprite.y;
        this._sprite.play();
        this.stage.addChild(this.sprite);
        this._state = Bullet.STATE_SHOOT;
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
/******/ 	__webpack_require__.h = () => ("045ccf1851acd1a805a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6cb4c162bd757035060b.hot-update.js.map