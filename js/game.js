class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;

    this.background = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = [];
    this.tick = 0;

    this.audio = new Audio("audio/theme.mp3");
    this.audio.loop = true
    this.gameOverAudio = new Audio("audio/game-over.mp3");

    this.setListeners();
  }

  start() {
    this.audio.play()
    this.interval = setInterval(() =>{
      this.clear()
      this.draw()
      this.move()
      this.tick++
      if (this.tick >= Math.random() * 200 + 50) {
        this.addEnemy()
        this.tick = 0
      }
    }, 1000 / 60)
    // TODO: init game loop: clear, draw, move, check collisions and randomly add enemy based on ticks
  }

  stop() {
    // TODO: pause audio, stop interval, set interval to null
    clearInterval(this.interval)
    this.interval= null
    this.audio.pause()
  }

  clear() {
    // TODO: clear entire canvas
    // TODO: clear not visible enemies (tip: filter)
    this.ctx.clearRect(
      0,0, this.ctx.canvas.with, this.ctx.canvas.height
    )
  }

  draw() {
    // TODO: draw everything
    this.background.draw()
    this.player.draw()
    this.enemies.forEach((enemy) => {
      enemy.draw()
    })
  }

  move() {
    // TODO: move everything
    this.background.move()
    this.player.move()
    this.enemies.forEach((enemy) => {
      enemy.move()
    })
  }

  addEnemy() {
    // TODO: create new enemy and add it to this.enemies
    const enemy = new Enemy (this.ctx)
    this.enemies.push(enemy)
  }

  checkCollisions() {
    // TODO: check if any enemy "collides" with player
    // TODO: check if game over
  }

  gameOver() {
    // TODO: play game over audio
    // TODO: stop game
    // TODO: write "game over"
    // TODO: restart player and enemies
  }

  setListeners() {
    // TODO: proxy "keydown" key to player keyDown method
    // TODO: proxy "keyup" key to player keyUp method
    document.addEventListener('keydown', (e) => {
      this.player.keyDown(e.keyCode)
    })
    document.addEventListener('keyup', (e) => {
      this.player.keyUp(e.keyCode)
    })
  }
}
