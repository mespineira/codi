// --- ESTRUCTURA DE LECCIONES POR GRUPO ---
export const lessonGroups = [
    {
        title: "Introducción",
        description: "Aprende los conceptos básicos de movimiento y acciones.",
        levels: [
            { // Nivel 1
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            }
        ]
    },
    {
        title: "Condicionales",
        description: "Aprende los conceptos básicos condicionales",
        levels: [
            { // Nivel 1
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            }
        ]
    },
    // Aquí se añadirán futuros grupos
];
