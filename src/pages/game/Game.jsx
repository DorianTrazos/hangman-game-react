import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../lib/contexts/game-manager.context';

const Game = () => {
  const {
    gameState: { selectedCategorie }
  } = useContext(GameContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedCategorie) {
      navigate('/');
    }
  }, [selectedCategorie]);

  return (
    <>
      <h1>Game</h1>
    </>
  );
};

export default Game;
