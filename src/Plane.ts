import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH } from "./Constants";
import { randomMe } from "./Toolkit";
import { PointCount } from "./PointCount";

export class Plane {

    public static STATE_FLYING:number = 0;
    public static STATE_DYING:number = 1;
    public static STATE_DEAD:number = 3;

    private _state:number;
    private _speed:number;

    private _sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private pointCount:PointCount;
    private width:number;
    private count:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, pointCount:PointCount) {
        this._speed = 4;
        this.stage = stage;
        this._state = Plane.STATE_FLYING;
        this.count = 1;

        this.pointCount = pointCount;

        this._sprite = assetManager.getSprite("sprites", "Plane/Alive", 700, 0);
        this.width = this._sprite.getBounds().width;

    }  
        // -----------------------  gets/sets -------------------------
        get sprite() {
            return this._sprite;
        }
    
        set speed(value:number) {
            this._speed = value;
        }
        get speed() {
            return this._speed;
        }  
        get state() {
            return this._state;
        }

        // -------------------------- public meathods -------------------

        public positionMe() { // sets and creates object on first run and whenever plane is destroyed
            this._state = Plane.STATE_FLYING;

            this._sprite.x = 700;
            this._sprite.y = randomMe(0, 100);
            
            this._sprite.gotoAndPlay("Plane/Alive");       
            this.stage.addChild(this.sprite);
        }
 
        public killMe() { // called from Bullet.ts
            if ((this._state == Plane.STATE_DYING) || (this._state == Plane.STATE_DEAD)) return;

            this._sprite.on("animationend", () => { // run when animation is finshed
                this._state = Plane.STATE_DYING;
                this._sprite.stop();
                this.stage.removeChild(this._sprite);
                this._state = Plane.STATE_DEAD;
                createjs.Sound.play("Explosion1")                
            }, this, true);                   
            this._sprite.gotoAndPlay("Plane/Dead");
        }

        public update() {
            if (this._state == Plane.STATE_FLYING && this._sprite.x > -130) {
                let sprite:createjs.Sprite = this._sprite;

                sprite.x = sprite.x - this.speed;
                createjs.Sound.play("Fly");
                // console.log(this._sprite.x + "," + this._sprite.y)
                
            }
            else if (this._sprite.x < -130) return;
           
            else if (this._state == Plane.STATE_DEAD) {               
                this.positionMe(); 
                this.pointCount.updatePoints();
                                             
               // console.log("Reset");
               // console.log("Count: " + this.count++)
            }
        } // it's 11:28 and EVERYTHING is falling into place
          // conclusion - procrastinate more
}

