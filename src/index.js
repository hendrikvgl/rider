import { fromEvent, interval, BehaviorSubject, combineLatest } from 'rxjs';
import { tap, scan, startWith, filter } from 'rxjs/operators';
import {
    calcMotion,
    rectCircleColliding,
    getRandomInt,
    calcPlayerMotion,
} from './utils.js';
import { clearCanvas, drawCircle, drawRect } from './rendering.js';
import { INITIAL_ENTITIES } from './entities.js';

console.log('hello world');

let togglePause$ = new BehaviorSubject();
let isPaused$ = togglePause$.pipe(
    scan((previous) => !previous, false),
    startWith(false)
);

var pauseButton = document.getElementById('pauseButton');

fromEvent(pauseButton, 'click')
    .pipe(
        tap(() => {
            togglePause$.next();
        })
    )
    .subscribe();

const canvasHeight = 600;
const canvasWidth = 800;

const wastedOverlay = document.getElementById('wastedOverlay');
const playAgainButton = document.getElementById('playAgainText');
const angleText = document.getElementById('angle');
const accText = document.getElementById('acc');
const pointsText = document.getElementById('points');
const finalPointsText = document.getElementById('finalPoints');

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
    isPaused$.next(false);
    entities = [...INITIAL_ENTITIES];

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
    wastedOverlay.style.display = 'none';
    isPaused$.next(false);
};

playAgainButton.onclick = restart;

const onKeyDown = ({ code }) => {
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
    }
};

const onKeyUp = ({ code }) => {
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
};

fromEvent(document, 'keydown').pipe().subscribe(onKeyDown);
fromEvent(document, 'keyup').pipe().subscribe(onKeyUp);

const determineEntityMotion = () => {
    const newEnts = calcMotion(entities);

    entities = newEnts;
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
    drawCircle(player.x, player.y, player.r, player.angle, 'blue');
};

const detectPlayerCollision = () => {
    if (entities.some((ent) => rectCircleColliding(player, ent))) {
        wastedOverlay.style.display = 'block';
        isPaused$.next(true);
    }
};

const determinePlayerMotion = () => {
    const newMotion = calcPlayerMotion(player, movement);

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

const updateTexts = () => {
    angleText.textContent = player.angle + ' degrees';
    accText.textContent = player.acc.toFixed(2) + ' speed';
    finalPointsText.textContent = points.toFixed(0);
    pointsText.textContent = points.toFixed(0);
};

const renderTargets = () => {
    targets.forEach((target) => {
        drawRect(target.x, target.y, target.w, target.h, 'orange');
    });
};

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

const pointTick$ = interval(3000);
const tick$ = interval(10);
const runtime$ = combineLatest([tick$, isPaused$])
    .pipe(filter(([, paused]) => paused))
    .subscribe(() => {
        render();
    });

combineLatest([pointTick$, isPaused$])
    .pipe(filter(([, paused]) => paused))
    .subscribe(() => {
        spawnTargets();
    });
