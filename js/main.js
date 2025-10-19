import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import TWEEN from 'TWEEN';
import { lessonGroups } from './levels.js?v=1.0.6';

const ICONS = {
    moveForward: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V4M12 4L6 10M12 4L18 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    turnLeft: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4L3 11L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 11H21V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    turnRight: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L21 11L14 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 11H3V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    jump: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><g clip-path="url(#b099d7245b)"><path fill="#ffffff" d="M 236.789062 41.847656 C 234.324219 38.355469 229.492188 37.515625 225.988281 39.972656 C 222.488281 42.429688 221.644531 47.25 224.109375 50.746094 C 244.246094 79.304688 231.957031 110.273438 227.441406 119.558594 L 226.84375 119.714844 C 226.371094 119.777344 225.898438 119.863281 225.425781 119.988281 C 224.992188 120.101562 224.570312 120.242188 224.15625 120.398438 L 202.375 125.976562 C 201.703125 126.023438 201.027344 126.113281 200.351562 126.277344 C 199.625 126.453125 198.933594 126.695312 198.273438 126.988281 C 189.375 119.65625 163.773438 102.605469 119.433594 103.96875 C 115.152344 104.101562 111.792969 107.667969 111.925781 111.933594 C 112.054688 116.203125 115.613281 119.601562 119.910156 119.425781 C 167.707031 117.96875 189.707031 139.957031 190.589844 140.859375 C 190.910156 141.195312 191.261719 141.492188 191.628906 141.761719 C 192.738281 146.90625 197.917969 173.167969 195.195312 204.386719 C 194.476562 212.632812 193.210938 221.226562 191.167969 229.867188 L 152.851562 222.878906 C 146.273438 221.675781 139.964844 226.027344 138.761719 232.589844 C 137.558594 239.15625 141.917969 245.449219 148.496094 246.648438 L 197.742188 255.628906 C 198.476562 255.761719 199.207031 255.828125 199.929688 255.828125 C 205.144531 255.824219 209.890625 252.453125 211.488281 247.328125 C 215.761719 233.617188 218.152344 219.890625 219.320312 206.984375 C 219.367188 206.453125 219.414062 205.929688 219.457031 205.402344 C 222.902344 205.894531 226.390625 206.3125 229.667969 206.628906 C 230.347656 213.082031 230.894531 219.660156 231.238281 226.226562 L 220.289062 222.453125 C 219.019531 230.238281 217.238281 238.1875 214.863281 246.148438 L 239.78125 254.734375 C 241.070312 255.179688 242.40625 255.398438 243.734375 255.398438 C 246.203125 255.398438 248.652344 254.644531 250.71875 253.1875 C 253.902344 250.949219 255.8125 247.316406 255.847656 243.425781 C 256.335938 190.285156 240.90625 131.191406 240.222656 128.601562 C 244.632812 120.261719 263.511719 79.746094 236.789062 41.847656 Z M 236.789062 41.847656 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#ffffff" d="M 225.207031 95.707031 C 225.246094 96.417969 225.253906 97.128906 225.226562 97.839844 C 225.195312 98.550781 225.132812 99.261719 225.035156 99.964844 C 224.9375 100.671875 224.804688 101.371094 224.636719 102.0625 C 224.46875 102.753906 224.269531 103.4375 224.035156 104.109375 C 223.800781 104.78125 223.535156 105.441406 223.234375 106.089844 C 222.9375 106.734375 222.605469 107.367188 222.242188 107.980469 C 221.882812 108.59375 221.492188 109.191406 221.070312 109.765625 C 220.652344 110.34375 220.203125 110.894531 219.730469 111.429688 C 219.253906 111.960938 218.757812 112.46875 218.230469 112.949219 C 217.707031 113.433594 217.160156 113.890625 216.589844 114.320312 C 216.019531 114.75 215.429688 115.148438 214.824219 115.523438 C 214.214844 115.894531 213.585938 116.234375 212.945312 116.546875 C 212.300781 116.855469 211.644531 117.132812 210.976562 117.378906 C 210.304688 117.625 209.625 117.839844 208.933594 118.019531 C 208.242188 118.199219 207.546875 118.34375 206.839844 118.453125 C 206.136719 118.566406 205.425781 118.640625 204.714844 118.683594 C 204 118.722656 203.289062 118.730469 202.574219 118.703125 C 201.859375 118.675781 201.152344 118.609375 200.445312 118.511719 C 199.734375 118.414062 199.035156 118.28125 198.339844 118.117188 C 197.648438 117.949219 196.964844 117.75 196.289062 117.515625 C 195.613281 117.28125 194.953125 117.015625 194.304688 116.714844 C 193.65625 116.417969 193.023438 116.089844 192.410156 115.726562 C 191.792969 115.367188 191.195312 114.976562 190.617188 114.558594 C 190.042969 114.140625 189.484375 113.695312 188.953125 113.21875 C 188.417969 112.746094 187.910156 112.25 187.425781 111.726562 C 186.941406 111.203125 186.484375 110.65625 186.054688 110.089844 C 185.625 109.519531 185.222656 108.933594 184.847656 108.324219 C 184.476562 107.71875 184.132812 107.09375 183.824219 106.453125 C 183.511719 105.8125 183.234375 105.15625 182.984375 104.488281 C 182.738281 103.820312 182.527344 103.140625 182.347656 102.453125 C 182.167969 101.761719 182.019531 101.066406 181.910156 100.363281 C 181.796875 99.660156 181.722656 98.953125 181.679688 98.242188 C 181.640625 97.53125 181.632812 96.820312 181.660156 96.105469 C 181.6875 95.394531 181.753906 94.6875 181.851562 93.980469 C 181.949219 93.277344 182.082031 92.578125 182.25 91.882812 C 182.414062 91.191406 182.617188 90.507812 182.851562 89.835938 C 183.085938 89.164062 183.351562 88.503906 183.652344 87.859375 C 183.949219 87.210938 184.28125 86.582031 184.640625 85.964844 C 185.003906 85.351562 185.394531 84.757812 185.8125 84.179688 C 186.234375 83.605469 186.679688 83.050781 187.15625 82.519531 C 187.628906 81.988281 188.128906 81.480469 188.65625 80.996094 C 189.179688 80.511719 189.726562 80.054688 190.296875 79.628906 C 190.867188 79.199219 191.453125 78.796875 192.0625 78.425781 C 192.671875 78.054688 193.296875 77.710938 193.941406 77.402344 C 194.582031 77.089844 195.238281 76.8125 195.910156 76.566406 C 196.578125 76.320312 197.261719 76.109375 197.953125 75.929688 C 198.640625 75.75 199.339844 75.605469 200.046875 75.492188 C 200.75 75.382812 201.460938 75.304688 202.171875 75.265625 C 202.886719 75.222656 203.597656 75.214844 204.3125 75.246094 C 205.023438 75.273438 205.734375 75.335938 206.441406 75.433594 C 207.148438 75.53125 207.851562 75.664062 208.542969 75.832031 C 209.238281 75.996094 209.921875 76.199219 210.597656 76.433594 C 211.273438 76.664062 211.933594 76.933594 212.582031 77.230469 C 213.230469 77.527344 213.863281 77.859375 214.476562 78.21875 C 215.09375 78.578125 215.691406 78.96875 216.265625 79.386719 C 216.84375 79.808594 217.398438 80.253906 217.933594 80.726562 C 218.464844 81.199219 218.976562 81.699219 219.460938 82.222656 C 219.945312 82.746094 220.402344 83.289062 220.832031 83.859375 C 221.261719 84.425781 221.664062 85.015625 222.039062 85.621094 C 222.410156 86.230469 222.75 86.855469 223.0625 87.496094 C 223.375 88.136719 223.652344 88.789062 223.898438 89.457031 C 224.148438 90.128906 224.359375 90.804688 224.539062 91.496094 C 224.71875 92.183594 224.867188 92.882812 224.976562 93.585938 C 225.085938 94.289062 225.164062 94.996094 225.207031 95.707031 Z M 225.207031 95.707031 " fill-opacity="1" fill-rule="nonzero"/><path fill="#ffffff" d="M 191.3125 213.023438 C 186.128906 212.832031 181.210938 216.007812 179.429688 221.152344 C 179.027344 222.3125 178.816406 223.492188 178.773438 224.65625 L 188.949219 226.511719 C 189.9375 221.980469 190.710938 217.46875 191.3125 213.023438 Z M 191.3125 213.023438 " fill-opacity="1" fill-rule="nonzero"/><path fill="#ffffff" d="M 207.34375 262.320312 L 208.957031 262.320312 L 208.957031 303.390625 L 207.34375 303.390625 Z M 207.34375 262.320312 " fill-opacity="1" fill-rule="nonzero"/><path fill="#ffffff" d="M 217.03125 270.878906 L 218.644531 270.878906 L 218.644531 311.945312 L 217.03125 311.945312 Z M 217.03125 270.878906 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#ac1b2c8439)"><path fill="#ffffff" d="M 212.1875 278.578125 L 213.800781 278.578125 L 213.800781 337.507812 L 212.1875 337.507812 Z M 212.1875 278.578125 " fill-opacity="1" fill-rule="nonzero"/></g></svg>`,
    completed: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

const COMMAND_COLORS = {
    moveForward: 'icon-blue',
    turnLeft: 'icon-yellow',
    turnRight: 'icon-yellow',
    jump: 'icon-red'
};

// --- REFERENCIAS AL DOM ---
const codeArea = document.getElementById('code-area');
const codeOutput = document.getElementById('code-output');
const codeOutputIcons = document.getElementById('code-output-icons');
const runButton = document.getElementById('run-button');
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackMessage = document.getElementById('feedback-message');
const retryButton = document.getElementById('retry-button');
const nextLevelButton = document.getElementById('next-level-button');
const loadingOverlay = document.getElementById('loading-overlay');
const mainContainer = document.querySelector('.main-container');
const commandPanel = document.getElementById('command-panel');
const modeSelectionOverlay = document.getElementById('mode-selection-overlay');
const modeIconsBtn = document.getElementById('mode-icons-btn');
const modeTextBtn = document.getElementById('mode-text-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const levelListContainer = document.getElementById('level-list');
const modeSwitchBtn = document.getElementById('mode-switch-btn');
const levelHintText = document.getElementById('level-hint-text');
const codeOutputContainer = document.getElementById('code-output-container');

// --- ESTADO DEL JUEGO ---
let commandQueue = [];
let isRunning = false;
const startFlatLevel = window.startLevel || 0;
let currentGroupIndex = 0;
let currentLevelIndex = 0;
let codingMode = '';
const TILE_SIZE = 2, JUMP_HEIGHT = 2.0, ROBOT_FLOAT_HEIGHT = TILE_SIZE * 0.4;
let characterState = {};

// --- ESTADO 3D ---
let scene, camera, renderer, controls, character, gems = [];
let worldGroup = new THREE.Group();

function init() {
    const startPosition = findLevelFromFlatIndex(startFlatLevel);
    currentGroupIndex = startPosition.groupIndex;
    currentLevelIndex = startPosition.levelIndex;

    generateLevelMenu();
    init3D();
    loadLevel(currentGroupIndex, currentLevelIndex);
    attachEventListeners();
    loadingOverlay.style.display = 'none';
    mainContainer.style.visibility = 'visible';
}

function setupModeSelection() {
    modeIconsBtn.addEventListener('click', () => startGame('icons'));
    modeTextBtn.addEventListener('click', () => startGame('text'));
}

function startGame(mode) {
    codingMode = mode;
    modeSelectionOverlay.style.display = 'none';
    init();
}

function loadLevel(groupIndex, levelIndex) {
    const group = lessonGroups[groupIndex];
    if (!group || !group.levels[levelIndex]) {
         console.error("Level not found!");
         return;
    }
    const level = group.levels[levelIndex];

    currentGroupIndex = groupIndex;
    currentLevelIndex = levelIndex;
    
    levelHintText.textContent = level.hint;

    scene.remove(worldGroup);
    worldGroup = new THREE.Group();
    scene.add(worldGroup);
    gems = [];

    createWorld(level);
    createCommands(level);

    TWEEN.removeAll();
    characterState = { ...level.start, rotation: 0 };
    const startPos = gridToWorld(characterState.row, characterState.col, level.gridSize);
    character.position.set(startPos.x, ROBOT_FLOAT_HEIGHT, startPos.z);
    character.rotation.y = characterState.rotation;
    
    isRunning = false;
    commandQueue = [];
    updateCodeOutput();
    feedbackOverlay.style.display = 'none';
    runButton.disabled = false;
    updateLevelMenuHighlight();
}

function generateLevelMenu() {
    levelListContainer.innerHTML = '';
    let flatIndexCounter = 0;
    lessonGroups.forEach((group, groupIdx) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'level-group';
        groupDiv.innerHTML = `<h3>${group.title}</h3><p>${group.description}</p>`;
        const ul = document.createElement('ul');
        group.levels.forEach((level, levelIdx) => {
            const li = document.createElement('li');
            li.textContent = `Nivel ${levelIdx + 1}`;
            li.dataset.groupIdx = groupIdx;
            li.dataset.levelIdx = levelIdx;
            
            if (flatIndexCounter < startFlatLevel) {
                li.classList.add('level-completed');
                li.innerHTML += ICONS.completed;
            }

            li.addEventListener('click', () => {
                loadLevel(groupIdx, levelIdx);
                closeMenu();
            });
            ul.appendChild(li);
            flatIndexCounter++;
        });
        groupDiv.appendChild(ul);
        levelListContainer.appendChild(groupDiv);
    });
}

function updateLevelMenuHighlight() {
    document.querySelectorAll('#level-list li').forEach(li => {
        const isCurrent = li.dataset.groupIdx == currentGroupIndex && li.dataset.levelIdx == currentLevelIndex;
        li.classList.toggle('current-level', isCurrent);
    });
}

function init3D() {
    const canvas = document.getElementById('stage-canvas');
    const stage = document.getElementById('stage');
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    scene.fog = new THREE.Fog(0x87CEEB, 20, 50);

    camera = new THREE.PerspectiveCamera(60, stage.clientWidth / stage.clientHeight, 0.1, 1000);
    camera.position.set(8, 9, 12);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(stage.clientWidth, stage.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    character = new THREE.Group();
    scene.add(character);

    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x7B8A9B });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x00FFFF, emissive: 0x66FFFF, metalness: 0.8, roughness: 0.2 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(TILE_SIZE * 0.6, TILE_SIZE * 0.7, TILE_SIZE * 0.5), bodyMat);
    body.castShadow = true;
    character.add(body);

    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(TILE_SIZE * 0.15, TILE_SIZE * 0.4, TILE_SIZE * 0.15), bodyMat);
    leftArm.position.set(-TILE_SIZE * 0.4, 0, 0);
    leftArm.castShadow = true;
    character.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(TILE_SIZE * 0.15, TILE_SIZE * 0.4, TILE_SIZE * 0.15), bodyMat);
    rightArm.position.set(TILE_SIZE * 0.4, 0, 0);
    rightArm.castShadow = true;
    character.add(rightArm);

    const head = new THREE.Mesh(new THREE.BoxGeometry(TILE_SIZE * 0.45, TILE_SIZE * 0.4, TILE_SIZE * 0.4), bodyMat);
    head.position.y = TILE_SIZE * 0.55;
    head.castShadow = true;
    character.add(head);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(TILE_SIZE * 0.1, 16, 16), eyeMat);
    eye.position.set(0, 0, -TILE_SIZE * 0.2); 
    head.add(eye);
    
    animate();
}

function createWorld(level) {
    const { gridSize, layout } = level;
    controls.target.set(0, 0, (gridSize.rows / -2) * TILE_SIZE + TILE_SIZE);

    const grassMat = new THREE.MeshLambertMaterial({ color: 0x556B2F });
    const pathMat = new THREE.MeshLambertMaterial({ color: 0xD2B48C });
    const rockMat = new THREE.MeshLambertMaterial({ color: 0x808080 });
    const cubeGeo = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, TILE_SIZE);
    const rockGeo = new THREE.DodecahedronGeometry(TILE_SIZE * 0.4, 0);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

    for(let r = 0; r < gridSize.rows; r++) {
        for(let c = 0; c < gridSize.cols; c++) {
            const tileChar = layout[r][c];
            const pos = gridToWorld(r, c, gridSize);
            let tile;
            let addBorder = false;
            
            if (tileChar === 'p') {
                tile = new THREE.Mesh(cubeGeo, pathMat);
                addBorder = true;
            } else if (tileChar === 'g') {
                tile = new THREE.Mesh(cubeGeo, grassMat);
                addBorder = true;
            } else if (tileChar === 'r') {
                tile = new THREE.Mesh(rockGeo, rockMat);
            }
            if (tile) {
                tile.position.set(pos.x, (tileChar === 'r' ? TILE_SIZE / 4 : -TILE_SIZE/2), pos.z);
                tile.receiveShadow = true;
                worldGroup.add(tile);
                if (addBorder) {
                    const edges = new THREE.EdgesGeometry(cubeGeo);
                    const line = new THREE.LineSegments(edges, edgeMaterial);
                    line.position.copy(tile.position);
                    worldGroup.add(line);
                }
            }
        }
    }
    
    const gemGeo = new THREE.OctahedronGeometry(TILE_SIZE * 0.4, 0);
    const gemMat = new THREE.MeshStandardMaterial({ color: 0x00FFFF, emissive: 0x44FFFF, metalness: 0.8, roughness: 0.2 });
    level.gems.forEach(g => {
        const gem = new THREE.Mesh(gemGeo, gemMat);
        const gemPos = gridToWorld(g.row, g.col, gridSize);
        gem.position.set(gemPos.x, TILE_SIZE * 1.3, gemPos.z);
        gem.castShadow = true;
        gem.userData = { row: g.row, col: g.col, collected: false };
        worldGroup.add(gem);
        gems.push(gem);
    });
}

function createCommands(level) {
    commandPanel.innerHTML = '';
    level.commands.forEach(commandName => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        if (codingMode === 'icons') {
            btn.innerHTML = ICONS[commandName];
            btn.classList.add(COMMAND_COLORS[commandName]);
        } else {
            btn.textContent = commandName;
        }
        btn.dataset.command = commandName;
        btn.addEventListener('click', () => {
            if (isRunning) return;
            commandQueue.push(commandName);
            updateCodeOutput();
        });
        commandPanel.appendChild(btn);
    });
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update();
    gems.forEach(gem => {
        if (gem.visible) gem.rotation.y += 0.02;
    });
    renderer.render(scene, camera);
}

async function runCode() {
    if (commandQueue.length === 0 || isRunning) return;
    isRunning = true;
    runButton.disabled = true;

    const level = lessonGroups[currentGroupIndex].levels[currentLevelIndex];
    characterState = { ...level.start, rotation: 0 };
    gems.forEach(g => { g.visible = true; g.userData.collected = false; });
    const startPos = gridToWorld(characterState.row, characterState.col, level.gridSize);
    await animateTo(character.position, { y: ROBOT_FLOAT_HEIGHT, x: startPos.x, z: startPos.z }, 300);
    await animateTo(character.rotation, { y: characterState.rotation }, 300);

    for (const command of commandQueue) {
        if (command === 'moveForward') {
            const { row: oldRow, col: oldCol, dir } = characterState;
            let nextRow = oldRow, nextCol = oldCol;

            if (dir === 0) nextRow++;
            else if (dir === 1) nextCol++;
            else if (dir === 2) nextRow--;
            else if (dir === 3) nextCol--;
            
            if (nextRow >= 0 && nextRow < level.gridSize.rows &&
                nextCol >= 0 && nextCol < level.gridSize.cols &&
                level.layout[nextRow][nextCol] === 'p') {
                characterState.row = nextRow;
                characterState.col = nextCol;
            } else {
                const bumpDistance = TILE_SIZE * 0.2;
                const currentPos = { ...character.position };
                const bumpTarget = { ...currentPos };

                if (dir === 0) bumpTarget.z -= bumpDistance;
                else if (dir === 1) bumpTarget.x += bumpDistance;
                else if (dir === 2) bumpTarget.z += bumpDistance;
                else if (dir === 3) bumpTarget.x -= bumpDistance;
                
                await animateTo(character.position, bumpTarget, 100);
                await animateTo(character.position, currentPos, 100);
                continue; 
            }
        } else if (command === 'turnLeft') {
            characterState.dir = (characterState.dir - 1 + 4) % 4;
            characterState.rotation += Math.PI / 2;
            await animateTo(character.rotation, { y: characterState.rotation }, 300);
        } else if (command === 'turnRight') {
            characterState.dir = (characterState.dir + 1) % 4;
            characterState.rotation -= Math.PI / 2;
            await animateTo(character.rotation, { y: characterState.rotation }, 300);
        } else if (command === 'jump') {
            const currentY = character.position.y;
            await animateTo(character.position, { y: currentY + JUMP_HEIGHT }, 300, TWEEN.Easing.Quadratic.Out);
            
            gems.forEach(gem => {
                const gemData = gem.userData;
                if (!gemData.collected && gemData.row === characterState.row && gemData.col === characterState.col) {
                    gemData.collected = true;
                    gem.visible = false;
                }
            });

            await animateTo(character.position, { y: currentY }, 300, TWEEN.Easing.Quadratic.In);
        }
        
        const targetPos = gridToWorld(characterState.row, characterState.col, level.gridSize);
        await animateTo(character.position, { x: targetPos.x, z: targetPos.z }, 400);
    }
    
    const gemsCollected = gems.filter(g => g.userData.collected).length;
    const isCorrect = (JSON.stringify(commandQueue) === JSON.stringify(level.solution)) && (gemsCollected === level.gems.length);
    showFeedback(isCorrect ? '¡Felicidades!' : 'Vuelve a intentarlo', isCorrect);
}

function attachEventListeners() {
    window.addEventListener('resize', () => {
        const stage = document.getElementById('stage');
        if(!stage || !camera || !renderer) return;
        camera.aspect = stage.clientWidth / stage.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(stage.clientWidth, stage.clientHeight);
    });
    runButton.addEventListener('click', runCode);
    retryButton.addEventListener('click', () => loadLevel(currentGroupIndex, currentLevelIndex));
    nextLevelButton.addEventListener('click', () => {
        let nextGroup = currentGroupIndex;
        let nextLevel = currentLevelIndex + 1;
        if (nextLevel >= lessonGroups[nextGroup].levels.length) {
            nextGroup++;
            nextLevel = 0;
        }
        
        if (lessonGroups[nextGroup] && lessonGroups[nextGroup].levels[nextLevel]) {
            const flatIndex = getFlatIndex(nextGroup, nextLevel);
            saveProgress(flatIndex);
            loadLevel(nextGroup, nextLevel);
        }
    });
    hamburgerBtn.addEventListener('click', openMenu);
    closeSidebarBtn.addEventListener('click', closeMenu);
    sidebarOverlay.addEventListener('click', closeMenu);
    modeSwitchBtn.addEventListener('click', () => {
        codingMode = codingMode === 'icons' ? 'text' : 'icons';
        // Recargar comandos y UI de código sin reiniciar todo el nivel
        const level = lessonGroups[currentGroupIndex].levels[currentLevelIndex];
        createCommands(level);
        updateCodeOutput();
        updateModeSwitchButtonText();
    });
}

function openMenu() {
    sidebar.classList.add('open');
    sidebarOverlay.style.display = 'block';
}
function closeMenu() {
    sidebar.classList.remove('open');
    sidebarOverlay.style.display = 'none';
}

function showFeedback(message, isSuccess) {
    feedbackMessage.textContent = message;
    feedbackOverlay.className = 'overlay ' + (isSuccess ? 'success' : 'fail');
    
    const hasNextLevel = (lessonGroups[currentGroupIndex].levels[currentLevelIndex + 1] !== undefined) || (lessonGroups[currentGroupIndex + 1] !== undefined);
    nextLevelButton.style.display = isSuccess && hasNextLevel ? 'block' : 'none';
    
    feedbackOverlay.style.display = 'flex';
}

function updateModeSwitchButtonText(){
     modeSwitchBtn.textContent = `Cambiar a Modo ${codingMode === 'icons' ? 'Texto' : 'Iconos'}`;
}

function saveProgress(flatLevelIndex) {
    fetch('api/save_level.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: flatLevelIndex })
    })
    .then(response => response.json())
    .then(data => {
        if (!data.success) {
            console.error('Failed to save progress:', data.error);
        }
    })
    .catch(error => console.error('Error saving progress:', error));
}

function updateCodeOutput() {
    if (codingMode === 'icons') {
        codeOutput.style.display = 'none';
        codeOutputIcons.style.display = 'flex';
        codeOutputIcons.innerHTML = commandQueue.map(cmd => `<div class="code-icon-block ${COMMAND_COLORS[cmd]}">${ICONS[cmd]}</div>`).join('');
    } else {
        codeOutput.style.display = 'block';
        codeOutputIcons.style.display = 'none';
        codeOutput.innerHTML = commandQueue.map(cmd => `<div>${cmd}<span>()</span></div>`).join('');
    }
    codeOutputContainer.scrollTop = codeOutputContainer.scrollHeight;
}

function gridToWorld(row, col, gridSize) {
    const x = (col - (gridSize.cols -1) / 2) * TILE_SIZE;
    const z = (row - (gridSize.rows -1) / 2) * -TILE_SIZE;
    return { x, z };
}

function animateTo(target, newPos, duration, easing = TWEEN.Easing.Quadratic.InOut) {
    return new Promise(resolve => {
        new TWEEN.Tween(target).to(newPos, duration).easing(easing).onComplete(resolve).start();
    });
}

function findLevelFromFlatIndex(flatIndex) {
    let count = 0;
    for (let i = 0; i < lessonGroups.length; i++) {
        for (let j = 0; j < lessonGroups[i].levels.length; j++) {
            if (count === flatIndex) {
                return { groupIndex: i, levelIndex: j };
            }
            count++;
        }
    }
    return { groupIndex: 0, levelIndex: 0 }; // Fallback
}

function getFlatIndex(groupIndex, levelIndex) {
    let count = 0;
    for (let i = 0; i < groupIndex; i++) {
        count += lessonGroups[i].levels.length;
    }
    count += levelIndex;
    return count;
}

setupModeSelection();

