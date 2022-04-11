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
    constructor(stage, assetManager, antiAir, plane) {
        this.stage = stage;
        this.antiAir = antiAir;
        this.plane = plane;
        this._state = Bullet.STATE_IDLE;
        this._speed = 6;
        this.sprite = assetManager.getSprite("sprites", "Ammo/Bullet", 0, 0);
    }
    set speed(value) {
        this._speed = value;
    }
    get state() {
        return this._state;
    }
    ShootMe() {
        if (this._state == Bullet.STATE_IDLE) {
            this.sprite.x = this.antiAir.sprite.x;
            this.sprite.y = this.antiAir.sprite.y;
            this.sprite.play();
            this.stage.addChild(this.sprite);
            this._state = Bullet.STATE_SHOOT;
        }
    }
    KillMe() {
        this.sprite.stop();
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
const Bullet_1 = __webpack_require__(/*! ./Bullet */ "./src/Bullet.ts");
const Plane_1 = __webpack_require__(/*! ./Plane */ "./src/Plane.ts");
const Bomb_1 = __webpack_require__(/*! ./Bomb */ "./src/Bomb.ts");
let test;
let stage;
let canvas;
let assetManager;
let leftKey = false;
let rightKey = false;
let spacebar = false;
let ground;
let background;
let bunker;
let antiAir;
let bullet;
let plane;
let bomb;
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
    bullet = new Bullet_1.Bullet(stage, assetManager, plane);
    stage.addChild(bullet);
    bunker = assetManager.getSprite("sprites", "Misc/Bunker", 0, 250);
    stage.addChild(bunker);
    plane = new Plane_1.Plane(stage, assetManager);
    plane.positionMe();
    plane.speed = 5;
    bomb = new Bomb_1.Bomb(stage, assetManager, plane, bunker);
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
    bullet.Update();
    bomb.update();
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5904f81f9db505be14e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9f517feee1fd860788e3.hot-update.js.map