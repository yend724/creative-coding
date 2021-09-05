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

    const seg = 360;
    const pi2 = 2 * Math.PI;
    const r = (canvasW / 2) * 0.8;
    for (let d = 0; d < seg; d++) {
      const startDeg = pi2 * (d / 360);
      const endDeg = pi2 * ((d + 1) / 360);

      ctx.beginPath();
      ctx.fillStyle = "hsl(" + d + ", 100%, 50%)";
      ctx.moveTo(canvasW / 2, canvasH / 2);
      ctx.arc(canvasW / 2, canvasH / 2, r, startDeg, endDeg, false);
      ctx.lineTo(canvasW / 2, canvasH / 2);
      ctx.closePath();
      ctx.fill();
    }
  });
})();
