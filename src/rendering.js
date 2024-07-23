const canvas = document.getElementById('canvas');
const setupGraphics = () => {
    canvas.innerHTML = '';
    const player = document.createElement('div');
    const innerDiv = document.createElement('div');
    innerDiv.id = 'visor';
    player.appendChild(innerDiv);
    player.id = 'player';
    player.style.position = 'absolute';
    canvas.appendChild(player);
    return player;
};

const drawRect = (posX, posY, w, h, color, id) => {
    if (!id) {
        return;
    }
    let ent = document.getElementById(id);
    if (!ent) {
        const div = document.createElement('div');
        div.id = id;
        div.style.position = 'absolute';
        canvas.appendChild(div);
        ent = div;
    }

    ent.style.left = `${posX}px`;
    ent.style.top = `${posY}px`;
    ent.style.backgroundColor = color;
    ent.style.width = `${w}px`;
    ent.style.height = `${h}px`;
};

const drawCircle = (posX, posY, radius, angle, color) => {
    let player = document.getElementById('player');
    if (!player) {
        player = setupGraphics();
    }
    player.style.left = `${posX - 15}px`;
    player.style.top = `${posY - 15}px`;
    player.style.backgroundColor = color;
    player.style.rotate = `${angle}deg`;
};

export { drawCircle, drawRect, setupGraphics };
