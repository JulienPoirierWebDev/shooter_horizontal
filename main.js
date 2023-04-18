import { draw, update, load } from "/game.js"
const canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

let lastUpdate = Date.now()


function run() {
    let now = Date.now();
    let dt = (now - lastUpdate) / 1000

    requestAnimationFrame(run)
    update(dt)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    draw(ctx)

}

function init() {
    load()
    requestAnimationFrame(run)
}

init()