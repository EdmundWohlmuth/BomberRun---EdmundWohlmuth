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
    constructor(stage, assetManager, plane, antiAir) {
        this.stage = stage;
        this._state = Bullet.STATE_IDLE;
        this._speed = 8;
        this._sprite = assetManager.getSprite("sprites", "Ammo/Bullet", 0, 0);
        this._sprite.scaleX = 0.5;
        this._sprite.scaleY = 0.5;
        this.plane = plane;
        this.antiAir = antiAir;
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
            this._sprite.x = this.antiAir.sprite.x + 55;
            this._sprite.y = this.antiAir.sprite.y + 70;
            this.stage.addChild(this._sprite);
            this._state = Bullet.STATE_SHOOT;
        }
    }
    KillMe() {
        this._sprite.stop();
        this.stage.removeChild(this.sprite);
        this._state = Bullet.STATE_IDLE;
    }
    Update() {
        if (this._state == Bullet.STATE_SHOOT) {
            this._sprite.y -= this._speed;
        }
        if ((0, Toolkit_1.boxHit)(this._sprite, this.plane.sprite)) {
            this.KillMe();
            this.plane.killMe();
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
/******/ 	__webpack_require__.h = () => ("ec184f19242b2c8bcc33")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a9b3c54764a318a5c89d.hot-update.js.map