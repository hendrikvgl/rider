import {
    fromEvent,
    interval,
    BehaviorSubject,
    combineLatest,
    Subject,
    tap,
    filter,
    map,
    withLatestFrom,
} from 'rxjs';
import {
    calcMotion,
    rectCircleColliding,
    getRandomInt,
    calcPlayerMotion,
} from './utils.js';
import { clearCanvas, drawCircle, drawRect } from './rendering.js';
import { INITIAL_ENTITIES } from './entities.js';
import { onKeyDown, onKeyUp, updatePlayer } from './player.js';

let isPaused$ = new BehaviorSubject(false);

var pauseButton = document.getElementById('pauseButton');

fromEvent(pauseButton, 'click')
    .pipe(
        withLatestFrom(isPaused$),
        tap(([, paused]) => {
            isPaused$.next(!paused);
        })
    )
    .subscribe();

const canvasHeight = 600;
const canvasWidth = 800;

const INITIAL_MOVEMENT = {
    faster: false,
    slower: false,
    left: false,
    right: false,
};

const INITIAL_PLAYER = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    r: 15,
    angle: 0,
    acc: 0,
};

const wastedOverlay = document.getElementById('wastedOverlay');
const playAgainButton = document.getElementById('playAgainText');
const angleText = document.getElementById('angle');
const accText = document.getElementById('acc');
const pointsText = document.getElementById('points');
const finalPointsText = document.getElementById('finalPoints');

const points$ = new BehaviorSubject(0);
const player$ = new BehaviorSubject({ ...INITIAL_PLAYER });
const entities$ = new BehaviorSubject(INITIAL_ENTITIES);
const targets$ = new BehaviorSubject([]);
const movement$ = new BehaviorSubject({ ...INITIAL_MOVEMENT });

const restart$ = new Subject();

restart$
    .pipe(
        tap(() => {
            isPaused$.next(true);
            movement$.next(INITIAL_MOVEMENT);
            player$.next({ ...INITIAL_PLAYER });
            entities$.next(INITIAL_ENTITIES);
            targets$.next([]);

            points$.next(0);
            wastedOverlay.style.display = 'none';
            isPaused$.next(false);
        })
    )
    .subscribe();

playAgainButton.onclick = () => restart$.next();

fromEvent(document, 'keydown')
    .pipe(
        withLatestFrom(movement$),
        map(([{ code }, movement]) => {
            const newMovement = onKeyDown({
                movement: movement,
                code,
                restart: () => restart$.next(),
            });
            if (newMovement) {
                movement$.next(newMovement);
            }
        })
    )
    .subscribe();

fromEvent(document, 'keyup')
    .pipe(
        withLatestFrom(movement$),
        map(([{ code }, movement]) => {
            const newMovement = onKeyUp({
                movement: movement,
                code,
            });
            if (newMovement) {
                movement$.next(newMovement);
            }
        })
    )
    .subscribe();

const movedEntitites$ = entities$.pipe(
    filter((ents) => !!ents),
    map(calcMotion),
    map((ents) =>
        ents.map((ent) => ({
            ...ent,
            x: ent.x + ent.dx,
            y: ent.y + ent.dy,
        }))
    ),
    tap((ents) => {
        ents.forEach((ent) => drawRect(ent.x, ent.y, ent.w, ent.h, ent.color));
    })
);

combineLatest(player$, movedEntitites$)
    .pipe(
        tap(([player, entities]) => {
            if (entities.some((ent) => rectCircleColliding(player, ent))) {
                wastedOverlay.style.display = 'block';
                isPaused$.next(true);
            }
        })
    )
    .subscribe();

const movedPlayer$ = player$.pipe(
    withLatestFrom(movement$),
    map(([player, movement]) => {
        const newMotion = calcPlayerMotion(player, movement);

        player.angle = newMotion.angle;
        player.acc = newMotion.acc;
        return player;
    }),
    map(updatePlayer),
    tap((player) => {
        drawCircle(player.x, player.y, player.r, player.angle, 'blue');
    })
);

combineLatest(points$, player$)
    .pipe(
        tap(([points, player]) => {
            angleText.textContent = player.angle + ' degrees';
            accText.textContent = player.acc.toFixed(2) + ' speed';
            finalPointsText.textContent = points.toFixed(0);
            pointsText.textContent = points.toFixed(0);
        })
    )
    .subscribe();

combineLatest(player$, targets$)
    .pipe(
        // filter(([player, targets]) => !!player || !!targets),
        withLatestFrom(points$),
        tap(([[player, targets], points]) => {
            targets.forEach((target, index) => {
                drawRect(target.x, target.y, target.w, target.h, 'orange');

                if (rectCircleColliding(player, target)) {
                    const newTargets = [...targets.splice(index, 1)];
                    targets$.next(newTargets);
                    points$.next(points + 100);
                }
            });
        })
    )
    .subscribe();

const pointTick$ = interval(3000);
const tick$ = interval(10);
tick$
    .pipe(
        withLatestFrom(isPaused$, movedEntitites$, movedPlayer$, points$),
        filter(([, paused]) => !paused),
        tap(([, , movedEntities, movedPlayer, points]) => {
            clearCanvas();
            entities$.next(movedEntities);
            player$.next(movedPlayer);
            points$.next(points - 0.01);
        })
    )
    .subscribe();

pointTick$
    .pipe(
        withLatestFrom(isPaused$, targets$),
        filter(([, isPaused, targets]) => !isPaused && targets.length <= 3),
        tap(([, , targets]) => {
            const newTarget = {
                x: getRandomInt(10, canvasWidth - 10),
                y: getRandomInt(10, canvasHeight - 10),
                w: 10,
                h: 10,
            };
            console.log(targets);
            targets$.next([...targets, newTarget]);
        })
    )
    .subscribe();
