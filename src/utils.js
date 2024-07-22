const canvasHeight = 600;
const canvasWidth = 800;
const topSpeed = 3;

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

const calcPlayerMotion = (player, movement) => {
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

    return newMotion;
};

const calcMotion = (entities) =>
    entities?.map((ent, index) => {
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export { calcMotion, rectCircleColliding, getRandomInt, calcPlayerMotion };
