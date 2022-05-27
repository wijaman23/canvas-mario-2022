class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;

    this.background = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = [];
    this.tick = 0;

    this.audio = new Audio("audio/theme.mp3");
    this.gameOverAudio = new Audio("audio/game-over.mp3");

    this.setListeners();
  }

  start() {
    // TODO: play audio
    // TODO: init game loop: clear, draw, move, check collisions and randomly add enemy based on ticks
  }

  stop() {
    // TODO: pause audio, stop interval, set interval to null
  }

  clear() {
    // TODO: clear entire canvas
    // TODO: clear not visible enemies (tip: filter)
  }

  draw() {
    // TODO: draw everything
  }

  move() {
    // TODO: move everything
  }

  addEnemy() {
    // TODO: create new enemy and add it to this.enemies
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
  }
}
