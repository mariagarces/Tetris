export const TETROMINOES = {
    0: {
        shape: [[0]],
        color: '0, 0, 0',
    },
    I: {
        shape: [
            [0, 'I12', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I34', 0, 0]
        ],
        color: '255, 195, 0',
    },
    J: {
        shape: [
            [0, 'J12', 0],
            [0, 'J', 0],
            ['J14', 'J3', 0]
        ],
        color: '22, 160, 133',
    },
    L: {
        shape: [
            [0, 'L12', 0],
            [0, 'L', 0],
            [0, 'L4', 'L23']
        ],
        color: '46, 204, 113',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T14', 'T', 'T23'],
            [0, 'T34', 0]
        ],
        color: '142, 68, 173',
    },
    O: {
        shape: [
            ['O1', 'O2'],
            ['O4', 'O3']
        ],
        color: '199, 0, 57',
    },
    Z: {
        shape: [
            ['Z14', 'Z2', 0],
            [0, 'Z4', 'Z23'],
            [0, 0, 0]
        ],
        color: '52, 152, 219',
    },
    S: {
        shape: [
            [0, 'S1', 'S23'],
            ['S14', 'S3', 0],
            [0, 0, 0]
        ],
        color: '243, 156, 18',
    }
}

export const getRandomTetrominoe = () => {
    const tetrominoes = 'IJLTOZS';
    const randomTetrominoe = tetrominoes[Math.floor(Math.random() * tetrominoes.length)]
    return TETROMINOES[randomTetrominoe];
}