"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

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
const Plane_1 = __webpack_require__(/*! ./Plane */ "./src/Plane.ts");
let test;
let stage;
let canvas;
let assetManager;
let leftKey = false;
let rightKey = false;
let spacebar = false;
let ground;
let background;
let antiAir;
let bullet;
let plane;
function montiorKeys() {
    if (leftKey) {
        antiAir.direction = AntiAir_1.AntiAir.LEFT;
        antiAir.startMe();
    }
    else if (rightKey) {
        antiAir.direction = AntiAir_1.AntiAir.RIGHT;
        antiAir.startMe();
    }
    else {
        antiAir.stopMe();
    }
    if (spacebar) {
        antiAir.shootMe();
        bullet.ShootMe();
    }
}
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    background = assetManager.getSprite("sprites", "Misc/Background", 0, 0);
    stage.addChild(background);
    ground = assetManager.getSprite("sprites", "Misc/Ground", 0, 145);
    stage.addChild(ground);
    plane = new Plane_1.Plane(stage, assetManager);
    plane.positionMe();
    plane.speed = 5;
    antiAir = new AntiAir_1.AntiAir(stage, assetManager);
    antiAir.positionMe(250, 250);
    antiAir.speed = Constants_1.ANTIAIR_SPEED;
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    montiorKeys();
    antiAir.update();
    plane.update();
    stage.update();
}
function onKeyDown(e) {
    if (e.key == "a")
        leftKey = true;
    else if (e.key == "d")
        rightKey = true;
    else if (e.key == " ")
        spacebar = true;
}
function onKeyUp(e) {
    if (e.key == "a")
        leftKey = false;
    else if (e.key == "d")
        rightKey = false;
    else if (e.key == " ")
        spacebar = false;
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


/***/ }),

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
        this._sprite = assetManager.getSprite("sprites", "chopper/alive", 0, 0);
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
/******/ 	__webpack_require__.h = () => ("118ab82759c3b306cd89")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b9044a0f98f5b5cebbbf.hot-update.js.map