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
const AntiAir_1 = __webpack_require__(/*! ./AntiAir */ "./src/AntiAir.ts");
const Plane_1 = __webpack_require__(/*! ./Plane */ "./src/Plane.ts");
class Bullet {
    constructor(stage, assetManager, plane, antiAir) {
        this.stage = stage;
        this._state = Bullet.STATE_IDLE;
        this._speed = 5;
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
            createjs.Sound.play("Explosion3");
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
            if (this.plane.state == Plane_1.Plane.STATE_FLYING) {
                this._sprite.x = this.antiAir.sprite.x + 55;
                this._sprite.y = this.antiAir.sprite.y + 70;
                this.plane.killMe();
                this.antiAir.state = AntiAir_1.AntiAir.STATE_MOVING;
            }
        }
        else if (this._sprite.y <= 0) {
            this.KillMe();
        }
        if (this._sprite.y >= 50) {
            this.antiAir.state = AntiAir_1.AntiAir.STATE_MOVING;
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
/******/ 	__webpack_require__.h = () => ("61457cca132a7223f01e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0846a9ab6cd540fce390.hot-update.js.map