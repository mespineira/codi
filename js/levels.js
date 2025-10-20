// --- ESTRUCTURA DE LECCIONES POR GRUPO ---
export const lessonGroups = [
    {
        title: "Introducción",
        description: "Aprende los conceptos básicos de movimiento y acciones.",
        levels: [
            { // Nivel 1
                hint: "Objetivo: El robot debe llegar hasta la gema y recogerla. ¡Usa el salto al final del camino!",
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                hint: "Objetivo: ¡Hay dos gemas! Usa el comando de giro para seguir el camino y no te olvides de saltar para recogerlas.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                hint: "Objetivo: El camino es más largo y tiene más giros. ¡Planifica bien tu ruta para coger las dos gemas!",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
                
            },
            { // Nivel 4 - NUEVO NIVEL
                hint: "¡Cuidado con el hueco! Usa el nuevo comando 'saltar y avanzar' para superarlo y llegar a la gema.",
                gridSize: { rows: 4, cols: 4 },
                layout: [
                    'pggg', // p=path, h=hole
                    'hggg',
                    'pppg',
                    'ggpp'
                ],
                start: { row: 0, col: 0, dir: 0 }, // Empezando a la izquierda, mirando a la derecha
                gems: [{ row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jumpForward'],
                solution: ['jumpForward', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'turnRight', 'moveForward', 'jump']

            }
        ]
    },
    {
        title: "Condicionales",
        description: "Aprende los conceptos básicos condicionales",
        levels: [
            { // Nivel 1
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
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
        title: "Bucle for",
        description: "Aprende los conceptos básicos de bucles for",
        levels: [
            { // Nivel 1
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 4
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 5
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 6
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
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
        title: "Funciones",
        description: "Aprende los conceptos básicos de Funciones",
        levels: [
            { // Nivel 1
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 3, cols: 3 },
                layout: ['gpg', 'gpg', 'gpg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }],
                commands: ['moveForward', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump']
            },
            { // Nivel 2
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggg'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 2, col: 3 }],
                commands: ['moveForward', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'jump']
            },
            { // Nivel 3
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 4
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 5
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
                gridSize: { rows: 4, cols: 4 },
                layout: ['gprg', 'gprg', 'gppp', 'gggp'],
                start: { row: 0, col: 1, dir: 0 },
                gems: [{ row: 2, col: 1 }, { row: 3, col: 3 }],
                commands: ['moveForward', 'turnLeft', 'turnRight', 'jump'],
                solution: ['moveForward', 'moveForward', 'jump', 'turnRight', 'moveForward', 'moveForward', 'turnLeft', 'moveForward', 'jump']
            },
            { // Nivel 6
                hint: "Objetivo: Este es un nivel de prueba para condicionales.",
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

