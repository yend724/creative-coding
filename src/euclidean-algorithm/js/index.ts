(function () {
	window.addEventListener("DOMContentLoaded", () => {
		const canvas = document.getElementById(
			"canvas"
		) as HTMLCanvasElement | null;
		if (!canvas) {
			console.error("Not Found canvas element");
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			console.error("Not Found context");
			return;
		}

		let n1 = 56;
		let n2 = 36;
		const scale = Math.floor((window.innerWidth / n1) * 0.8);
		n1 = n1 * scale;
		n2 = n2 * scale;

		canvas.width = n1;
		canvas.height = n2;
		context.fillStyle = "#ccc";
		context.fillRect(0, 0, n1, n2);

		let a = n1;
		let b = n2;

		let posX = 0,
			posY = 0;

		let count = 0;
		while (b > 0) {
			const c = Math.floor(a / b);
			const d = a % b;
			for (let i = 0; i < c; i++) {
				context.fillStyle = `rgb(${Math.floor(
					Math.random() * 256
				)},${Math.floor(Math.random() * 256)},${Math.floor(
					Math.random() * 256
				)})`;
				context.fillRect(posX, posY, b, b);
				if (count % 2 === 0) {
					posX += b;
				} else {
					posY += b;
				}
			}
			a = b;
			b = d;
			count++;
		}
	});
})();
