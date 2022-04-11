// game constants
export const STAGE_WIDTH:number = 800;
export const STAGE_HEIGHT:number = 400;
export const FRAME_RATE:number = 30;
export const ANTIAIR_SPEED:number = 5;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/spritesheets/sprites.json",
        id:"sprites",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/sprites.png",
        id:"sprites",
        data:0
    },
    {
        type:"json",
        src:"./lib/spritesheets/glyphs/glyphs.json",
        id:"glyphs",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/glyphs/glyphs.png",
        id:"glyphs",
        data:0
    },
    {
        type:"sound",
        src:"./lib/sounds/Explosion.wav",
        id:"Explosion1",
        data:4
    }, 
    {
        type:"sound",
        src:"./lib/sounds/Explosion2.wav",
        id:"Explosion2",
        data:4
    }, 
    {
        type:"sound",
        src:"./lib/sounds/Explosion3.wav",
        id:"Explosion3",
        data:4
    }, 
    {
        type:"sound",
        src:"./lib/sounds/fly.wav",
        id:"Fly",
        data:4
    }   
];