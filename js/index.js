const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

// TODO: start/stop game on button click
// TODO: change button text based on game interval
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    if (game.interval){
        game.stop()
        btn.innerText = 'START'
    } else {
        game.start()
        btn.innerText = 'STOP'
    }
})

