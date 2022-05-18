import { useCallback, useState } from "react";

import { TETROMINOES, getRandomTetrominoe } from "../common/constants/tetrominoes";
import { STAGE_WIDTH } from "../common/helpers/createStage";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetrominoe: TETROMINOES[0].shape,
        collided: false,
    });

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

    return [player, updatePlayerPosition, resetPlayer];
};
