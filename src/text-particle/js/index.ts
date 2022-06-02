(() => {
  // Particle
  class Particle {
    public x: number;
    public y: number;
    public size: number;
    public originX: number;
    public originY: number;
    public gravity: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.originX = this.x;
      this.originY = this.y;
      this.gravity = Math.random() * 20 + 1;
    }

    draw() {
      context.fillStyle = "rgb(255,255,255)";
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }

    update() {
      const dx = canvasOnMouse.x - this.x;
      const dy = canvasOnMouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const canvasOnMouseRadius = canvasOnMouse.radius;
      const force = (canvasOnMouseRadius - distance) / canvasOnMouseRadius;
      const moveX = (dx / 100) * force * this.gravity;
      const moveY = (dy / 100) * force * this.gravity;

      if (distance < canvasOnMouse.radius) {
        this.x -= moveX;
        this.y -= moveY;
      } else {
        if (this.x !== this.originX) {
          const dx = this.originX - this.x;
          this.x += dx / 10;
        }
        if (this.y !== this.originY) {
          const dy = this.originY - this.y;
          this.y += dy / 10;
        }
      }
    }
  }

  // DOMContentLoaded
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d")!;
  const particleArray: Particle[] = [];
  const resizeX = 5;
  const resizeY = 5;
  const canvasOnMouse = {
    x: -9999,
    y: -9999,
    radius: 100,
  };

  canvas.addEventListener("mousemove", event => {
    canvasOnMouse.x = event.offsetX;
    canvasOnMouse.y = event.offsetY;
  });
  canvas.addEventListener("mouseleave", () => {
    canvasOnMouse.x = -9999;
    canvasOnMouse.y = -9999;
  });

  const fontSize = 30;
  context.font = `${fontSize}px sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "white";
  const text = "Particle";
  context.fillText(
    text,
    canvas.width / (2 * resizeX),
    canvas.height / (2 * resizeY)
  );
  const textCoordinates = context.getImageData(0, 0, 600, 600);
  const textCoordinatesW = textCoordinates.width;
  const textCoordinatesH = textCoordinates.height;
  for (let y = 0; y < textCoordinatesH; y++) {
    for (let x = 0; x < textCoordinatesW; x++) {
      const row = y * 4 * textCoordinatesW;
      const col = x * 4 + 3;
      const alpha = textCoordinates.data[row + col];
      if (alpha > 16) {
        particleArray.push(new Particle(x * resizeX, y * resizeY));
      }
    }
  }

  const loop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].draw();
      particleArray[i].update();
    }
    requestAnimationFrame(loop);
  };
  loop();
})();
