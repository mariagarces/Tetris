import React, { useState } from "react";
import { createStage } from "../common/helpers/createStage";
import { checkCollision } from "../common/helpers/checkCollision";

// Components
import Stage from "./Stage";

// Styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);

    const movePlayer = (direction) => {
        if (!checkCollision(player, stage, { x: direction, y: 0 })) {
            updatePlayerPosition({ x: direction, y: 0 });
        }
    }

    const startGame = () => {
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPosition({ x: 0, y: 1, collided: false });
        } else {
            if (player.position.y < 1) {
                console.log('game over');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x: 0, y: 0, collided: true })
        }
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} >
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    <div>
                        <p>Lines</p>
                        <p>0000</p>
                    </div>
                    <button onClick={startGame}>start game</button>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
