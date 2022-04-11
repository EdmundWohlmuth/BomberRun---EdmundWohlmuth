// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, ANTIAIR_SPEED } from "./Constants";
import { AssetManager } from "./AssetManager";
import { AntiAir } from "./AntiAir";
import { Bullet } from "./Bullet";
import { Plane } from "./Plane";
import { Bomb } from "./Bomb";
import { PointCount } from "./PointCount";

// game objects
let test:createjs.Sprite;

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// key press
let leftKey:Boolean = false;
let rightKey:Boolean = false;
let spacebar:Boolean = false;

// sprites
let ground:createjs.Sprite;
let background:createjs.Sprite;
let bunker:createjs.Sprite;
let antiAir:AntiAir;
let bullet:Bullet;
let plane:Plane;
let bomb:Bomb;
let pointCount:PointCount;

function montiorKeys():void {
    if (leftKey) {
        antiAir.direction = AntiAir.LEFT;
        antiAir.startMe();
    }
    else if (rightKey) {
        antiAir.direction = AntiAir.RIGHT;
        antiAir.startMe();
    }
    else {
        antiAir.stopMe();
    }
    if (spacebar && antiAir.state != AntiAir.STATE_SHOOTING) {
        antiAir.shootMe();
        bullet.ShootMe();
    }
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded – ready to add sprites to game");

    // construct game objects here
    background = assetManager.getSprite("sprites", "Misc/Background", 0, 0);
    stage.addChild(background);   

    ground = assetManager.getSprite("sprites", "Misc/Ground", 0, 145);
    stage.addChild(ground);    

    bunker = assetManager.getSprite("sprites", "Misc/Bunker", 0, 250);
    stage.addChild(bunker);

    pointCount = new PointCount(stage, assetManager);
    pointCount.start(0);

    plane = new Plane(stage, assetManager, pointCount);
    plane.positionMe();
    plane.speed = 5;

    bomb = new Bomb(stage, assetManager, plane, bunker);

    antiAir = new AntiAir(stage, assetManager);
    antiAir.positionMe(250,250);

    bullet = new Bullet(stage, assetManager, plane, antiAir);


    // event listeners
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");

}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    montiorKeys();
    antiAir.update();
    plane.update();
    bullet.Update();
    bomb.update();

    // update the stage
    stage.update();
}

function onKeyDown(e:KeyboardEvent):void {

    if (e.key == "a") leftKey = true;
    else if (e.key == "d") rightKey = true;
    else if (e.key == " ") spacebar = true;
}
function onKeyUp(e:KeyboardEvent):void {

    if (e.key == "a") leftKey = false;
    else if (e.key == "d") rightKey = false;  
    else if (e.key == " ") spacebar = false;
}

// --------------------------------------------------- main method
function main():void {
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();