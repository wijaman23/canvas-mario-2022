class Enemy {
  constructor(ctx) {
    this.ctx = ctx;

    const fromSky = Math.random() > 0.5;

    this.x = fromSky
      ? Math.random() * this.ctx.canvas.width
      : this.ctx.canvas.width;
    this.y = fromSky ? 0 : this.ctx.canvas.height * 0.85;
    this.r = 20;
    this.vx = 0;
    this.vy = 0;
    this.ay = fromSky ? 0.2 : 0;
    this.ax = fromSky ? 0 : -0.2;

    new Audio("./audio/fireball.wav").play();

    // TODO: init enemy. set x,y randomly top or right.
    // TODO: play fireball audio
  }

  draw() {
    // TODO: draw circle
  }

  move() {
    // TODO: move, add a to v and v to position
  }

  isVisible() {
    // TODO: return if enemy is inside the canvas based on x and y
  }

  collides(p) {
    const colX = false; // TODO: check X collision between this and p
    const colY = false; // TODO: check Y collision between this and p

    return colX && colY;
  }
}
