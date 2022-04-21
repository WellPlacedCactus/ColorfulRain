
class Part {

  constructor(x, y, r, vx, vy, h) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
    this.h = h;
    this.dead = false;
  }

  die() {
    this.dead = true;
  }

  tick() {
    
    // fall
    this.vy += 0.1;

    // move
    this.x += this.vx;
    this.y += this.vy;

    // bounce
    if (this.y > canvas.height) {
      if (this.vx < 0) this.vx *= -1;
      this.vx *= 2;
      this.vy *= -1;
    }

    // die
    if (this.x > canvas.width) {
      this.die();
    }
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.closePath();

    c.fillStyle = `hsl(${this.h}, 100%, 50%)`;
    c.fill();
  }
}