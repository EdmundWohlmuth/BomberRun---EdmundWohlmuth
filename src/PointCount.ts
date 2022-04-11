import { AssetManager } from "./AssetManager";
import { Plane } from "./Plane";

export class PointCount {

    private _points:number;
    private txtPoints:createjs.BitmapText;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        this._points = 0;

        this.txtPoints = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.txtPoints.letterSpacing = 1;
        this.txtPoints.x = 20;
        this.txtPoints.y = 20;
        stage.addChild(this.txtPoints);
    }

    // get set

    get points() {
        return this._points;
    }

    public start(startingPoints:number):void {
        this._points = startingPoints;       
    }

    public updatePoints():void {
        this._points++;
        this.txtPoints.text = String(this._points); 
        console.log("Points: " + this.points);
    }
}