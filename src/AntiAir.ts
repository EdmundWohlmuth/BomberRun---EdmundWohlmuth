import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH } from "./Constants";

export class AntiAir { // export class to game.ts

    public static LEFT:number = 1;
    public static RIGHT:number = 2
    public static STATE_IDLE:number = 0;
    public static STATE_MOVING:number = 1;
    public static STATE_SHOOTING:number = 2;

    private _speed:number;
    private _state:number;
    private _direction:number;

    // sprite
    private _sprite:createjs.Sprite;

    // globals
    private stage:createjs.StageGL;
    private width:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {

        this._speed = 8;
        this._direction
        this.stage = stage;
        this._state = AntiAir.STATE_IDLE;

        this._sprite = assetManager.getSprite("sprites", "AntiAir/move", 0, 0);
        this._sprite.play();

        this.width = this._sprite.getBounds().width;

        stage.addChild(this._sprite);
    } 

    // ---------------------- Gets / Sets ----------------------------

    get sprite() { 
        return this._sprite;
    }

    set speed(value:number) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }

    set direction(value:number) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }

    get state() {
        return this._state;
    } 
    set state(value:number) {
        this._state = value;
    }  
    
    // ---------------------- Public Meathods ----------------------------

    public startMe():void {
        if (this._state == AntiAir.STATE_IDLE) {
            this._state = AntiAir.STATE_MOVING;
        }
    }
    public stopMe():void {
        if (this._state == AntiAir.STATE_MOVING) {
            this._state = AntiAir.STATE_IDLE;
        }
    }

    public shootMe():void {    
        
        this._state = AntiAir.STATE_SHOOTING;
        this._sprite.on("animationend", () => {          
            this.sprite.stop();
        });
        this.sprite.gotoAndPlay("AntiAir/shoot");
    }

    public positionMe(x:number, y:number):void {
        this._sprite.x = x;
        this._sprite.y = y;
    }

    public update():void {
        if (this._state == AntiAir.STATE_MOVING) {
            let sprite:createjs.Sprite = this._sprite;

            if (this._direction == AntiAir.LEFT) {

                sprite.x = sprite.x - this._speed;
                if (sprite.x < 60) {
                    sprite.x = 60;
                }
            } else if (this._direction == AntiAir.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (STAGE_WIDTH - this.width)) {
                    sprite.x = (STAGE_WIDTH - this.width);
                }

            }
        }
    }


    // ---------------------- Private Meathdos ---------------------------

}