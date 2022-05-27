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
    this.audio.play();

    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();

      this.tick++;

      if (this.tick > Math.random() * 300 + 100) {
        this.tick = 0;
        this.addEnemy();
      }
    }, 1000 / 60);
  }

  stop() {
    this.audio.pause();

    clearInterval(this.interval);
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.enemies = this.enemies.filter((e) => e.isVisible());
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.enemies.forEach((e) => e.draw());
  }

  move() {
    this.background.move();
    this.player.move();
    this.enemies.forEach((e) => e.move());
  }

  addEnemy() {
    const enemy = new Enemy(this.ctx);

    this.enemies.push(enemy);
  }

  checkCollisions() {
    this.enemies = this.enemies.filter((enemy) => {
      if (enemy.collides(this.player)) {
        this.player.hit();
        return false;
      }

      return true;
    });

    if (!this.player.isAlive()) {
      this.gameOver();
    }
  }

  gameOver() {
    this.gameOverAudio.play();
    this.stop();

    this.ctx.font = "60px Roboto";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width * 0.3,
      this.ctx.canvas.height / 2
    );

    this.player = new Player(ctx);
    this.enemies = [];
  }

  setListeners() {
    document.addEventListener("keydown", (event) => {
      this.player.keyDown(event.keyCode);
    });

    document.addEventListener("keyup", (event) => {
      this.player.keyUp(event.keyCode);
    });
  }
}
