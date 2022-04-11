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
        this._sprite = assetManager.getSprite("sprites", "AntiAir/Move", 0, 0);
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
    }
    stopMe() {
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
                if (sprite.x < 0) {
                    sprite.x = 0;
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


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const AntiAir_1 = __webpack_require__(/*! ./AntiAir */ "./src/AntiAir.ts");
let test;
let stage;
let canvas;
let assetManager;
let ground;
let antiAir;
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    antiAir = new AntiAir_1.AntiAir(stage, assetManager);
    antiAir.positionMe(10, 100);
    antiAir.speed = Constants_1.ANTIAIR_SPEED;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    stage.update();
}
function main() {
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5cda8921ce5e0170c629")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9e02e0e05e15b5d98332.hot-update.js.map