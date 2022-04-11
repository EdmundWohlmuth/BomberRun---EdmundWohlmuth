"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Plane.ts":
/*!**********************!*\
  !*** ./src/Plane.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Plane {
    constructor(stage, assetManager) {
        this._speed = 4;
        this.stage = stage;
        this._state = Plane.STATE_FLYING;
        this._sprite = assetManager.getSprite("sprites", "Plane/Alive", 700, 0);
        this.width = this._sprite.getBounds().width;
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
        this._state = Plane.STATE_FLYING;
        this._sprite.x = 700;
        this._sprite.y = (0, Toolkit_1.randomMe)(0, 100);
        this._sprite.gotoAndPlay("Plane/Alive");
        this.stage.addChild(this.sprite);
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
            this._state = Plane.STATE_DYING;
            this._sprite.stop();
            this.stage.removeChild(this._sprite);
            this._state = Plane.STATE_DEAD;
        }, this, true);
        this._sprite.gotoAndPlay("Plane/Dead");
    }
    update() {
        if (this._state == Plane.STATE_FLYING) {
            let sprite = this._sprite;
            if (this._state == Plane.STATE_FLYING) {
                sprite.x = sprite.x - this.speed;
            }
        }
        else if (this._state == Plane.STATE_DEAD) {
            this.positionMe();
            console.log("Reset");
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
/******/ 	__webpack_require__.h = () => ("eb27360720add69042d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ece0119207a0cc82ada9.hot-update.js.map