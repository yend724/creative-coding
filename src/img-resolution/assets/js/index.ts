import { range } from "./modules/range";

(function () {
  let mouseX = 0,
    mouseY = 0;

  window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement | null;
    if (!canvas) {
      console.error("Not canvas");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("Not context 2d");
      return;
    }

    const canvasW = window.innerWidth < 600 ? window.innerWidth : 600;
    const canvasH = canvasW;
    canvas.width = canvasW;
    canvas.height = canvasH;
    const rect = canvas.getBoundingClientRect();
    const canvasX = rect.left;
    const canvasY = rect.top;
    let canvasOnMouseX = range(mouseX - canvasX, 1, canvasW);
    let canvasOnMouseY = range(mouseY - canvasY, 1, canvasH);
    let tileCountX = Math.ceil(canvasW / canvasOnMouseX);
    let tileCountY = Math.ceil(canvasH / canvasOnMouseY);
    let tileWidth = Math.ceil(canvasW / tileCountX);
    let tileHeight = Math.ceil(canvasH / tileCountY);

    const img = new Image();
    img.src = "./assets/img/sample01.jpg";

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const myImageData = ctx.getImageData(0, 0, canvasW, canvasH);
      draw(myImageData);

      const loop = () => {
        canvasOnMouseX = range(mouseX - canvasX, 1, canvasW);
        canvasOnMouseY = range(mouseY - canvasY, 1, canvasH);
        tileCountX = Math.ceil(canvasW / canvasOnMouseX);
        tileCountY = Math.ceil(canvasH / canvasOnMouseY);
        tileWidth = Math.ceil(canvasW / tileCountX);
        tileHeight = Math.ceil(canvasH / tileCountY);
        draw(myImageData);
        requestAnimationFrame(loop);
      };
      loop();
    };

    const draw = (myImageData: ImageData) => {
      let i = 0;
      for (let y = 0; y < canvasH; y += tileHeight) {
        for (let x = 0; x < canvasW; x += tileWidth) {
          let r = myImageData.data[i];
          let g = myImageData.data[i + 1];
          let b = myImageData.data[i + 2];
          let a = myImageData.data[i + 3];
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillRect(x, y, tileWidth, tileHeight);
          i = 4 * (600 * y + x);
        }
      }
    };
  });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX; //X座標
    mouseY = e.pageY; //Y座標
  });
})();
