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
        this._sprite.y = (0, Toolkit_1.randomMe)(0, 100);
    }
    startMe() {
    }
    stopMe() {
        this;
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


/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointHit = exports.boxHit = exports.randomMe = void 0;
function randomMe(low, high) {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
}
exports.randomMe = randomMe;
function boxHit(sprite1, sprite2) {
    let width1 = sprite1.getBounds().width;
    let height1 = sprite1.getBounds().height;
    let width2 = sprite2.getBounds().width;
    let height2 = sprite2.getBounds().height;
    if ((sprite1.x + width1 > sprite2.x) &&
        (sprite1.y + height1 > sprite2.y) &&
        (sprite1.x < sprite2.x + width2) &&
        (sprite1.y < sprite2.y + height2)) {
        return true;
    }
    else {
        return false;
    }
}
exports.boxHit = boxHit;
function pointHit(sprite1, sprite2, sprite1HitX = 0, sprite1HitY = 0, stage = null) {
    if (stage != null) {
        let markerPoint = sprite1.localToGlobal(sprite1HitX, sprite1HitY);
        let marker = new createjs.Shape();
        marker.graphics.beginFill("#FF00EC");
        marker.graphics.drawRect(0, 0, 4, 4);
        marker.regX = 2;
        marker.regY = 2;
        marker.x = markerPoint.x;
        marker.y = markerPoint.y;
        marker.cache(0, 0, 4, 4);
        stage.addChild(marker);
    }
    let point = sprite1.localToLocal(sprite1HitX, sprite1HitY, sprite2);
    if (sprite2.hitTest(point.x, point.y)) {
        return true;
    }
    else {
        return false;
    }
}
exports.pointHit = pointHit;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b884a8d6fa29d0b3112")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a9baed15c49c1d27001f.hot-update.js.map