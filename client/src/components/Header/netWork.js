export default function network(canvas) {
	if (!canvas) return () => {}; // Si no hay canvas, devolver una función vacía

	const ctx = canvas.getContext('2d');
	let animationId; // Para controlar requestAnimationFrame
	let isRunning = true; // Flag para detener la animación

	// Función para redimensionar el canvas
	function resizeCanvas() {
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
	}

	resizeCanvas();
	const handleResize = () => resizeCanvas();
	window.addEventListener('resize', handleResize);

	// Crear puntos para el efecto
	const points = [];
	const numPoints = 60;

	for (let i = 0; i < numPoints; i++) {
		points.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5
		});
	}

	// Función de dibujo
	function draw() {
		if (!isRunning) return; // Detener si ya no está corriendo

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Dibujar conexiones
		for (let i = 0; i < numPoints; i++) {
			for (let j = i + 1; j < numPoints; j++) {
				const dx = points[i].x - points[j].x;
				const dy = points[i].y - points[j].y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < 100) {
					ctx.strokeStyle = '#8db4f040';
					ctx.beginPath();
					ctx.moveTo(points[i].x, points[i].y);
					ctx.lineTo(points[j].x, points[j].y);
					ctx.stroke();
				}
			}
		}

		// Dibujar puntos
		for (let i = 0; i < numPoints; i++) {
			ctx.fillStyle = '#8db5f0';
			ctx.beginPath();
			ctx.arc(points[i].x, points[i].y, 2, 0, Math.PI * 2);
			ctx.fill();

			// Actualizar posiciones
			points[i].x += points[i].vx;
			points[i].y += points[i].vy;

			// Rebotar en los bordes
			if (points[i].x < 0 || points[i].x > canvas.width) points[i].vx *= -1;
			if (points[i].y < 0 || points[i].y > canvas.height) points[i].vy *= -1;
		}

		animationId = requestAnimationFrame(draw);
	}

	// Iniciar animación
	draw();

	// Función de cleanup: Detiene la animación y remueve listeners
	return () => {
		isRunning = false;
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		window.removeEventListener('resize', handleResize);
	};
}
