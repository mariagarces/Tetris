
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetrominoe.length; y += 1) {
        for (let x = 0; x < player.tetrominoe[0].length; x += 1) {
            if (player.tetrominoe[y][x] !== 0) {
                if (!stage[y + player.position.y + moveY] ||
                    !stage[y + player.position.y + moveY][x + player.position.x + moveX] ||
                    stage[y + player.position.y + moveY][x + player.position.x + moveX][1] !== 'clear') {
                    return true
                }
            }
        }
    }
    return false;
};