import { Sprite } from "/sprite.js";

let img1;
let timer;

let keys = {
    left : false,
    right : false,
    down : false,
    up: false
}

function handleKeyDown(event){
    event.preventDefault()
    if(event.code == "ArrowRight") {
        keys.right = true;
    }

    if(event.code == "ArrowLeft") {
        keys.left = true;
    }

    if(event.code == "ArrowUp") {
        keys.up = true;
    }

    if(event.code == "ArrowDown") {
        keys.down = true;
    }
    console.log(keys);

};

function handleKeyUp(event) {
    event.preventDefault()
    if(event.code == "ArrowRight") {
        keys.right = false;
    }

    if(event.code == "ArrowLeft") {
        keys.left = false;
    }

    if(event.code == "ArrowUp") {
        keys.up = false;
    }

    if(event.code == "ArrowDown") {
        keys.down = false;
    }
    console.log(keys);
};

function load() {
    document.addEventListener('keydown', handleKeyDown, false)
    document.addEventListener('keyup', handleKeyUp, false)

    img1 = new Sprite('images/heros.png')

    timer = 0;
}

function update(dt) {
    timer += dt

    if(keys.down) {
        img1.y++
    }
    if(keys.up) {
        img1.y--
    }
    if(keys.right) {
        img1.x++
    }
    if(keys.left) {
        img1.x--
    }

}

function draw(pCtx) {
    img1.draw(pCtx)
}

export {load, update, draw}