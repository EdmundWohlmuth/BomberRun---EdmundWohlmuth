"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Plane.ts":
/*!**********************!*\
  !*** ./src/Plane.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
class Plane {
    constructor(stage, assetManager) {
        this._speed = 4;
        this.stage = stage;
        this._state = Plane.STATE_FLYING;
        this._sprite = assetManager.getSprite("sprites", "Plane/Alive", 700, 0);
        this.width = this._sprite.getBounds().width;
        stage.addChild(this._sprite);
    }
    get sprite() {
        return this._sprite;
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get state() {
        return this._state;
    }
    positionMe() {
        this._sprite.x = 700;
        this._sprite.y = 10;
    }
    startMe() {
    }
    stopMe() {
    }
    killMe() {
        if ((this._state == Plane.STATE_DYING) || (this._state == Plane.STATE_DEAD))
            return;
        this.stopMe();
        this._sprite.on("animationend", () => {
            this._state = Plane.STATE_DEAD;
            this._sprite.stop();
            this.stage.removeChild(this._sprite);
        });
        this._sprite.gotoAndPlay("Plane/Dead");
    }
    update() {
        if (this._state == Plane.STATE_FLYING) {
            let sprite = this._sprite;
            if (this._state == Plane.STATE_FLYING) {
                sprite.x = sprite.x - this.speed;
            }
        }
    }
}
exports.Plane = Plane;
Plane.STATE_FLYING = 0;
Plane.STATE_DYING = 1;
Plane.STATE_DEAD = 3;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4288e4b18588a4148f6e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0c8ef6769a7ae06181f3.hot-update.js.map