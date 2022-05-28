class Player {
  constructor(ctx) {
    // TODO: init player attributes: position, size, v, a, img, audio, score, tick
    this.ctx = ctx
    this.x = 50
    this.y = 200

    this.w = 50
    this.h = this.w * 1.22

    this.vx = 0
    this.vy = 0

    this.g = 0.15

    this.tick = 0

    this.img = new Image();
    this.img.src = "/img/mario.png";
    this.img.frames = 3;
    this.img.frameIndex = 0;
  }

  draw() {
    // TODO: draw player image
    // TODO: draw score
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames ,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    // TODO: move player. v + a, position + v
    // TODO: check if floor to stop falling
    // TODO: animate based on tick
    // TODO: move score
    this.x += this.vx
    this.vy += this.g
    this.y += this.vy

    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }

    if (this.y + this.h > this.ctx.canvas.height - 50) {
      this.y = this.ctx.canvas.height - 50 - this.h;
      this.vy = 0;
    }

    if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }

    if (this.x < 0) {
      this.x = 0;
      this.vx = 0;
    }

    this.tick++
    if (this.tick >= 10) {
      this.animate()
      this.tick = 0
    }
  }

  animate() {
    // TODO: increment frameIndex only if not vy
    if (this.vy === 0) {
      this.img.frameIndex++
    }
    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
  }

  hit() {
    // TODO: decrement score
  }

  isAlive() {
    // TODO: return true if score is > 0
  }

  keyDown(key) {
    if (key === KEY_UP && this.vy === 0) {
      this.vy = -5
    }

    if (key === KEY_RIGHT) {
      this.vx = 5
    }

    if (key === KEY_LEFT) {
      // TODO: less vx
      this.vx = -5
    }
  }

  keyUp(key) {
    if (key === KEY_RIGHT || key === KEY_LEFT) {
      // TODO: stop vx
      this.vx = 0
    }
  }
}
