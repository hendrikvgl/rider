let isPaused = false;

var pauseButton = document.getElementById("pauseButton");
pauseButton.onclick = () => {
  isPaused = !isPaused;
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const canvasHeight = 600;
const canvasWidth = 800;
const topSpeed = 3;

const wastedOverlay = document.getElementById("wastedOverlay");
const playAgainButton = document.getElementById("playAgainText");
const angleText = document.getElementById("angle");
const accText = document.getElementById("acc");
const pointsText = document.getElementById("points");
const finalPointsText = document.getElementById("finalPoints");

let targets = [];

let points = 0;

let player = {};

const movement = {
  faster: false,
  slower: false,
  left: false,
  right: false,
};

let entities = [];

const setUpGame = () => {
  isPaused = false;
  entities = [
    {
      x: 1,
      y: 1,
      h: 100,
      w: 50,
      dx: 0.4,
      dy: 0.8,
      color: "red",
    },
    {
      x: 580,
      y: 20,
      h: 50,
      w: 50,
      dx: 0.6,
      dy: 0.4,
      color: "red",
    },
    {
      x: 700,
      y: 200,
      h: 70,
      w: 90,
      dx: -0.1,
      dy: -0.1,
      color: "red",
    },
    {
      x: 400,
      y: 400,
      h: 50,
      w: 50,
      dx: 1,
      dy: -1,
      color: "red",
    },
    {
      x: 500,
      y: 100,
      h: 30,
      w: 150,
      dx: 0.8,
      dy: -0.6,
      color: "red",
    },
    {
      x: 150,
      y: 400,
      h: 80,
      w: 20,
      dx: -0.9,
      dy: 0.3,
      color: "red",
    },
    {
      x: 650,
      y: 500,
      h: 50,
      w: 50,
      dx: 1,
      dy: -0.95,
      color: "red",
    },
  ];

  player = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    r: 15,
    angle: 0,
    acc: 0,
  };

  points = 0;

  targets = [];
};

const restart = () => {
  setUpGame();
  wastedOverlay.style.display = "none";
  isPaused = false;
};

playAgainButton.onclick = restart;

const onKeyDown = ({ code }) => {
  console.log(code);
  if (code === "KeyW" || code === "ArrowUp") {
    movement.faster = true;
  }
  if (code === "KeyS" || code === "ArrowDown") {
    movement.slower = true;
  }
  if (code === "KeyA" || code === "ArrowLeft") {
    movement.left = true;
  }
  if (code === "KeyD" || code === "ArrowRight") {
    movement.right = true;
  }
  if (code === "Space") {
    restart();
  }
};

const onKeyUp = ({ code }) => {
  if (code === "KeyW" || code === "ArrowUp") {
    movement.faster = false;
  }
  if (code === "KeyS" || code === "ArrowDown") {
    movement.slower = false;
  }
  if (code === "KeyA" || code === "ArrowLeft") {
    movement.left = false;
  }
  if (code === "KeyD" || code === "ArrowRight") {
    movement.right = false;
  }
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

const determineEntityMotion = () => {
  const newEnts = entities.map((ent, index) => {
    const otherEnts = [...entities];
    delete otherEnts[index];

    const attr = { ...ent };

    let hitWall = false;
    // Wall hit up leftRight
    if (attr.x + attr.w >= canvasWidth || attr.x <= 0) {
      attr.dx = -attr.dx;
      hitWall = true;
    }

    // Wall hit up down
    if (attr.y + attr.h >= canvasHeight || attr.y <= 0) {
      attr.dy = -attr.dy;
      hitWall = true;
    }

    if (hitWall) {
      return attr;
    }

    // hits item from below
    otherEnts.forEach((item) => {
      if (
        attr.x + attr.w >= item.x &&
        attr.x <= item.x + item.w &&
        Math.abs(attr.y - (item.y + item.h)) <= 1
      ) {
        attr.dy = item.dy;
      }
    });

    // hits item from above
    otherEnts.forEach((item) => {
      if (
        attr.x + attr.w >= item.x &&
        attr.x <= item.x + item.w &&
        Math.abs(attr.y + attr.h - item.y) <= 1
      ) {
        attr.dy = item.dy;
      }
    });

    // hits item from left
    otherEnts.forEach((item) => {
      if (
        attr.y + attr.h >= item.y &&
        attr.y <= item.y + item.h &&
        Math.abs(attr.x + attr.w - item.x) <= 1
      ) {
        attr.dx = item.dx;
      }
    });

    // hits item from right
    otherEnts.some((item) => {
      if (
        attr.y + attr.h >= item.y &&
        attr.y <= item.y + item.h &&
        Math.abs(attr.x - (item.x + item.w)) <= 1
      ) {
        attr.dx = item.dx;
      }
    });

    return attr;
  });

  entities = newEnts;
};

const rectCircleColliding = (circle, rect) => {
  var distX = Math.abs(circle.x - rect.x - rect.w / 2);
  var distY = Math.abs(circle.y - rect.y - rect.h / 2);

  if (distX > rect.w / 2 + circle.r) {
    return false;
  }
  if (distY > rect.h / 2 + circle.r) {
    return false;
  }

  if (distX <= rect.w / 2) {
    return true;
  }
  if (distY <= rect.h / 2) {
    return true;
  }

  var dx = distX - rect.w / 2;
  var dy = distY - rect.h / 2;
  return dx * dx + dy * dy <= circle.r * circle.r;
};

const updateEntities = () => {
  determineEntityMotion();

  const newEnts = entities.map((ent) => ({
    ...ent,
    x: ent.x + ent.dx,
    y: ent.y + ent.dy,
  }));
  entities = newEnts;
};

const renderEntities = () => {
  entities.forEach((ent) => {
    drawRect(ent.x, ent.y, ent.w, ent.h, ent.color);
  });
};

const renderPlayer = () => {
  drawCircle(player.x, player.y, player.r, player.angle, "blue");
};

const drawRect = (posX, posY, w, h, color) => {
  ctx.beginPath();
  ctx.rect(Math.round(posX), Math.round(posY), w, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

const drawCircle = (posX, posY, radius, angle, color) => {
  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(posX, posY);
  const dX = radius * Math.sin((Math.PI * 2 * angle) / 360);
  const dY = radius * Math.cos((Math.PI * 2 * angle) / 360);
  ctx.lineTo(posX + dX, posY - dY);
  ctx.stroke();
};

const detectPlayerCollision = () => {
  if (entities.some((ent) => rectCircleColliding(player, ent))) {
    wastedOverlay.style.display = "block";
    isPaused = true;
  }
};

const determinePlayerMotion = () => {
  const newMotion = {
    angle: player.angle,
    acc: player.acc,
  };

  if (movement.faster) {
    newMotion.acc = newMotion.acc + 0.1;
  } else {
    newMotion.acc = newMotion.acc - 0.01;
  }

  if (movement.slower) {
    newMotion.acc = newMotion.acc - 0.05;
  }

  if (movement.left) {
    newMotion.angle = player.angle - 1.5;
  }
  if (movement.right) {
    newMotion.angle = player.angle + 1.5;
  }
  if (newMotion.angle > 360) {
    newMotion.angle = newMotion.angle - 360;
  }
  if (newMotion.angle < 0) {
    newMotion.angle = newMotion.angle + 360;
  }
  if (newMotion.acc <= 0) {
    newMotion.acc = 0;
  }
  if (newMotion.acc >= topSpeed) {
    newMotion.acc = topSpeed;
  }

  player.angle = newMotion.angle;
  player.acc = newMotion.acc;
};

const updatePlayer = () => {
  const newPosition = { x: player.x, y: player.y };

  const dX = player.acc * Math.sin((Math.PI * 2 * player.angle) / 360);
  const dY = player.acc * Math.cos((Math.PI * 2 * player.angle) / 360);

  newPosition.x = player.x + dX;
  newPosition.y = player.y - dY;

  if (newPosition.x - player.r < 0) {
    newPosition.x = 0 + player.r;
  }
  if (newPosition.x + player.r > canvasWidth) {
    newPosition.x = canvasWidth - player.r;
  }
  if (newPosition.y - player.r < 0) {
    newPosition.y = 0 + player.r;
  }

  if (newPosition.y + player.r > canvasHeight) {
    newPosition.y = canvasHeight - player.r;
  }

  player.x = newPosition.x;
  player.y = newPosition.y;
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

const updateTexts = () => {
  angleText.textContent = player.angle + " degrees";
  accText.textContent = player.acc.toFixed(2) + " speed";
  finalPointsText.textContent = points.toFixed(0);
  pointsText.textContent = points.toFixed(0);
};

const renderTargets = () => {
  targets.forEach((target) => {
    drawRect(target.x, target.y, target.w, target.h, "orange");
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const spawnTargets = () => {
  if (targets.length < 3) {
    const newTarget = {
      x: getRandomInt(10, canvasWidth - 10),
      y: getRandomInt(10, canvasHeight - 10),
      w: 10,
      h: 10,
    };
    targets.push(newTarget);
  }
};

const detectTargetHit = () => {
  targets.forEach((target, index) => {
    if (rectCircleColliding(player, target)) {
      targets.splice(index, 1);
      points = points + 100;
    }
  });
};

const handlePoints = () => {
  points = points - 0.01;
};

const render = () => {
  if (isPaused) {
    return;
  }
  clearCanvas();

  detectTargetHit();
  detectPlayerCollision();
  determinePlayerMotion();
  updatePlayer();
  updateEntities();
  handlePoints();

  renderPlayer();
  renderTargets();
  renderEntities();
  updateTexts();
};

setUpGame();
setInterval(render, 10);
setInterval(spawnTargets, 3000);
