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
let test;
let stage;
let canvas;
let assetManager;
let leftKey = false;
let rightKey = false;
let ground;
let antiAir;
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
}
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    antiAir = new AntiAir_1.AntiAir(stage, assetManager);
    antiAir.positionMe(50, 50);
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
    stage.update();
}
function onKeyDown(e) {
    if (e.key == "ArrowLeft")
        leftKey = true;
    else if (e.key == "ArrowRight")
        rightKey = true;
}
function onKeyUp(e) {
    if (e.key == "ArrowRight")
        rightKey = false;
    if (e.key == "ArrowLeft")
        leftKey = false;
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
/******/ 	__webpack_require__.h = () => ("dcfa58748ec580281029")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b34b377247154d6c7f90.hot-update.js.map