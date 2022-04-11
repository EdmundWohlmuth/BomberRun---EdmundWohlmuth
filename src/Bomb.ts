import { AssetManager } from "./AssetManager";
import { Plane } from "./Plane";
import { boxHit } from "./Toolkit";

export class Bomb {

    public _sprite:createjs.Sprite;

    private plane:Plane;
    private bunker:createjs.Sprite;
    private stage:createjs.StageGL;
    private StartY:number;

    public state:number;
    public static STATE_IDLE:number = 0;
    public static STATE_FALLING:number = 1;
    public static STATE_EXPLODING:number = 2;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, plane:Plane, bunker:createjs.Sprite) {

        this._sprite = assetManager.getSprite("sprites", "Bomb/Falling", 0, 0);
        this.plane = plane;
        this.stage = stage;
        this.bunker = bunker;
    }

    public startMe() {
        this._sprite.gotoAndPlay("Bomb/Falling");
    }

    public update():void {
        if (this.plane.state == Plane.STATE_DEAD ||
            this.plane.state == Plane.STATE_DYING) return;

            //console.log(this.plane.sprite.x);

        if (this.plane.sprite.x == 50) {
            this.stage.addChild(this._sprite);
            this.StartY = this._sprite.y;

            console.debug("bomb droped");

            createjs.Tween
            .get(this._sprite, {useTicks:true})
            .to({y: + 280}, 50)
            .call(() => {
                this._sprite.gotoAndPlay("Bomb/Falling");
                createjs.Sound.play("Explosion2");
                this.stage.removeChild(this._sprite);
                this.stage.removeChild(this.bunker);
            });           
            
        }           
    }
}