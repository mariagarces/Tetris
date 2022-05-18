import { useState, useEffect } from "react";
import { createStage } from "../common/helpers/createStage";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = (prevStage) => {
            const newStage = prevStage.map((row) =>
                row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            player.tetrominoe.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.position.y][x + player.position.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });

            if (player.collided) {
                resetPlayer();
            }

            return newStage;
        };

        setStage((prev) => updateStage(prev));
    }, [player, resetPlayer]);

    return [stage, setStage];
};
