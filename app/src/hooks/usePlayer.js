import { useCallback, useState } from "react";

import { TETROMINOES, getRandomTetrominoe } from "../common/constants/tetrominoes";
import { checkCollision } from "../common/helpers/checkCollision";
import { STAGE_WIDTH } from "../common/helpers/createStage";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetrominoe: TETROMINOES[0].shape,
        collided: false,
    });

    const rotate = (matrix, direction) => {

        // Transpose matrix
        const rotatedTetro = matrix.map((_, index) =>
            matrix.map(col => col[index]),
        );

        // Reverse each row
        if (direction > 0) return rotatedTetro.map(row => row.reverse());
        return rotatedTetro.reverse();
    }

    const playerRotate = (stage, direction) => {
        const clonedPlayer = { ...player };
        clonedPlayer.tetrominoe = rotate(clonedPlayer.tetrominoe, direction);

        const pos = clonedPlayer.position.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetrominoe[0].length) {
                rotate(clonedPlayer.tetrominoe, -direction);
                clonedPlayer.position.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

    const updatePlayerPosition = ({ x, y, collided }) => {
        setPlayer((prev) => ({
            ...prev,
            position: { x: (prev.position.x += x), y: (prev.position.y += y) },
            collided,
        }));
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            position: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetrominoe: getRandomTetrominoe().shape,
            collided: false,
        });
    }, []);

    return [player, updatePlayerPosition, resetPlayer, playerRotate];
};
