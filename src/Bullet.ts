import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH } from "./Constants";
import { boxHit } from "./Toolkit";
import { AntiAir } from "./AntiAir";
import { Plane } from "./Plane";

export class Bullet {
    
    public static STATE_SHOOT:number = 0;
    public static STATE_DEAD:number = 1;
    public static STATE_IDLE:number = 2;

    private _sprite:createjs.Sprite;
    private antiAir:AntiAir;
    private plane:Plane;
    private stage:createjs.Stage;

    private _speed:number;
    private _state:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, plane:Plane, antiAir:AntiAir) {
        this.stage = stage;
        this._state = Bullet.STATE_IDLE;
        this._speed = 6;
        this._sprite = assetManager.getSprite("sprites",  "Ammo/Bullet", 0, 0);
        this._sprite.scaleX = 0.5;
        this._sprite.scaleY = 0.5;

        this.plane = plane;
        this.antiAir = antiAir;
    }

    get sprite() {   
        return this._sprite;
    }

    set speed(value:number) {
        this._speed = value;
    }

    get state():number {
        return this._state;
    }

    public ShootMe() {
 
       if (this._state == Bullet.STATE_IDLE) {         
            this._sprite.x = this.antiAir.sprite.x + 55; 
            this._sprite.y = this.antiAir.sprite.y + 70;
            this.stage.addChild(this._sprite);
            this._state = Bullet.STATE_SHOOT;
            createjs.Sound.play("Explosion3")           
        }  
    }
  
    public KillMe() {
        this._sprite.stop();
        this.stage.removeChild(this.sprite);
        this._state = Bullet.STATE_IDLE;
    }

    public Update():void {
         if (this._state == Bullet.STATE_SHOOT) {         
             this._sprite.y -= this._speed;
         }

         if (boxHit(this._sprite, this.plane.sprite)) { // check if bullet hit
             this.KillMe();
             if (this.plane.state == Plane.STATE_FLYING) {
                this._sprite.x = this.antiAir.sprite.x + 55; 
                this._sprite.y = this.antiAir.sprite.y + 70;
                this.plane.killMe(); // kills plane object
                this.antiAir.state = AntiAir.STATE_MOVING;
             }            
         } 
         else if(this._sprite.y <= 0) {
             this.KillMe();            // kills bullet object if it misses
             this.antiAir.state = AntiAir.STATE_MOVING;
         }
    }
}