"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/AntiAir.ts":
/*!************************!*\
  !*** ./src/AntiAir.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AntiAir = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class AntiAir {
    constructor(stage, assetManager) {
        this._speed = 4;
        this._direction;
        this.stage = stage;
        this._state = AntiAir.STATE_IDLE;
        this._sprite = assetManager.getSprite("sprites", "AntiAir/move", 0, 0);
        this._sprite.play();
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
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }
    get state() {
        return this._state;
    }
    startMe() {
        if (this._state == AntiAir.STATE_IDLE) {
            this._state = AntiAir.STATE_MOVING;
        }
    }
    stopMe() {
        if (this._state == AntiAir.STATE_MOVING) {
            this._state = AntiAir.STATE_IDLE;
        }
    }
    shootMe() {
        this._state = AntiAir.STATE_SHOOTING;
        this._sprite.on("animationend", () => {
            this._state = AntiAir.STATE_MOVING;
            this.sprite.stop();
        });
        this.sprite.gotoAndPlay("AntiAir/shoot");
    }
    positionMe(x, y) {
        this._sprite.x = x;
        this._sprite.y = y;
    }
    update() {
        if (this._state == AntiAir.STATE_MOVING) {
            let sprite = this._sprite;
            if (this._direction == AntiAir.LEFT) {
                sprite.x = sprite.x - this._speed;
                if (sprite.x < 60) {
                    sprite.x = 60;
                }
            }
            else if (this._direction == AntiAir.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                    sprite.x = (Constants_1.STAGE_WIDTH - this.width);
                }
            }
        }
    }
}
exports.AntiAir = AntiAir;
AntiAir.LEFT = 1;
AntiAir.RIGHT = 2;
AntiAir.STATE_IDLE = 0;
AntiAir.STATE_MOVING = 1;
AntiAir.STATE_SHOOTING = 2;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("091b272e2d86222d6cc8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c8b1b47ee4e43fe45ccf.hot-update.js.map