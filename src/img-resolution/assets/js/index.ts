(function () {
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

    const canvasW = window.innerWidth < 720 ? window.innerWidth : 720;
    const canvasH = canvasW;
    canvas.width = canvasW;
    canvas.height = canvasH;
    const img = new Image();

    img.src = "./assets/img/sample01.jpg";
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const myImageData = ctx.getImageData(0, 0, canvasW, canvasH);
      let decrease = true;
      let c = 1;
      const draw = (c: number) => {
        let i = 0;
        const xmax =
          canvasW % c === 0 ? canvasW - c : Math.floor(canvasW / c) * c;
        for (let y = 0; y < canvasH; y += c) {
          for (let x = 0; x < canvasW; x += c) {
            let r = myImageData.data[i];
            let g = myImageData.data[i + 1];
            let b = myImageData.data[i + 2];
            let a = myImageData.data[i + 3];
            ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
            ctx.fillRect(x, y, c, c);
            if (x === xmax) {
              i = y * canvasW * 4;
            } else {
              i += c * 4;
            }
          }
        }
      };

      draw(c);

      canvas.addEventListener("click", () => {
        if (c === 1) decrease = true;
        if (c >= canvasW / 20) decrease = false;
        decrease === true ? c++ : c--;

        draw(c);
      });
    };
  });
})();
