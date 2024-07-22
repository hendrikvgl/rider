const canvasHeight = 600;
const canvasWidth = 800;

const onKeyDown = ({ movement, code, restart }) => {
    if (code === 'KeyW' || code === 'ArrowUp') {
        movement.faster = true;
    }
    if (code === 'KeyS' || code === 'ArrowDown') {
        movement.slower = true;
    }
    if (code === 'KeyA' || code === 'ArrowLeft') {
        movement.left = true;
    }
    if (code === 'KeyD' || code === 'ArrowRight') {
        movement.right = true;
    }
    if (code === 'Space') {
        restart();
        return null;
    }
    return movement;
};

const onKeyUp = ({ movement, code }) => {
    if (code === 'KeyW' || code === 'ArrowUp') {
        movement.faster = false;
    }
    if (code === 'KeyS' || code === 'ArrowDown') {
        movement.slower = false;
    }
    if (code === 'KeyA' || code === 'ArrowLeft') {
        movement.left = false;
    }
    if (code === 'KeyD' || code === 'ArrowRight') {
        movement.right = false;
    }
    return movement;
};

const updatePlayer = (player) => {
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
    return player;
};

export { onKeyDown, onKeyUp, updatePlayer };
