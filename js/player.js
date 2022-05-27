class Player {
  constructor(ctx) {
    // TODO: init player attributes: position, size, v, a, img, audio, score, tick
  }

  draw() {
    // TODO: draw player image
    // TODO: draw score
  }

  move() {
    // TODO: move player. v + a, position + v
    // TODO: check if floor to stop falling
    // TODO: animate based on tick
    // TODO: move score
  }

  animate() {
    // TODO: increment frameIndex only if not vy
  }

  hit() {
    // TODO: decrement score
  }

  isAlive() {
    // TODO: return true if score is > 0
  }

  keyDown(key) {
    if (key === KEY_UP && this.vy === 0) {
      // TODO: jump and play jump sound
    }

    if (key === KEY_RIGHT) {
      // TODO: more vx
    }

    if (key === KEY_LEFT) {
      // TODO: less vx
    }
  }

  keyUp(key) {
    if (key === KEY_RIGHT || key === KEY_LEFT) {
      // TODO: stop vx
    }
  }
}
