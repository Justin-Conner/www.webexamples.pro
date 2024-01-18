const NUM_OBJECTS = 10;

function emit(x, y) {
  const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
  const intensity = Math.max(0, 1 - distance / canvas.width * 2) ** 2;
  const r = 255 * intensity;
  const g = 255 * intensity;
  const b = 255 * intensity;

  return [r, g, b, 255];
}


function createGlowingObject() {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;

  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const index = (y * canvas.width + x) * 4;
      const [r, g, b, a] = emit(x, y);
      imageData.data[index] = r;
      imageData.data[index + 1] = g;
      imageData.data[index + 2] = b;
      imageData.data[index + 3] = a;
    }
  }

  context.putImageData(imageData, 0, 0);

  const div = document.createElement('div');
  div.className = 'glow';
  div.style.backgroundImage = `url(${canvas.toDataURL()})`;
  document.body.appendChild(div);

  return div;
}

function animateGlowingObject(obj, x, y) {
  const speed = Math.random() * 2 + 1;
  const angle = Math.random() * Math.PI / 2 - Math.PI / 4;
  const vx = speed * Math.cos(angle);
  const vy = speed * Math.sin(angle);
  const ax = 0;
  const ay = 0.05;

  let posX = x;
  let posY = y;

  const update = () => {
    posX += vx;
    posY += vy;
    vx += ax;
    vy += ay;

    obj.style.left = `${posX}px`;
    obj.style.top = `${posY}px`;

    if (posY > window.innerHeight) {
      document.body.removeChild(obj);
      cancelAnimationFrame(frameId);
    } else {
      frameId = requestAnimationFrame(update);
    }
  };

  let frameId = requestAnimationFrame(update);
}

for (let i = 0; i < NUM_OBJECTS; i++) {
  const obj = createGlowingObject();
  const x = -200;
  const y = Math.random() * window.innerHeight;
  animateGlowingObject(obj, x, y);
}
