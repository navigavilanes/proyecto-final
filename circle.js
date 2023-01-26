function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0.5;
    this.growing = true;
  
    this.grow = function() {
      if (this.growing) {
        this.r += 0.5;
      }
    };
  
    this.show = function() {
      stroke('pink');
      strokeWeight(0.5);
      noFill();
      ellipse(this.x, this.y, this.r * 3, this.r * 3);
    };
  
    this.edges = function() {
      return (
        this.x + this.r >= width ||
        this.x - this.r <= 0 ||
        this.y + this.r >= height ||
        this.y - this.r <= 0
      );
    };
  }