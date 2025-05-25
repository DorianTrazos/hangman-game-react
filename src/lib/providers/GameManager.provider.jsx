import { useState } from 'react';
import { GameContext } from '../contexts/game-manager.context';

const GameManager = ({ children }) => {
  const [gameState, setGameState] = useState({
    selectedCategorie: '',
    tries: 5
  });

  const setCategorie = selectedCategorie => {
    console.log(selectedCategorie);
    setGameState({ ...gameState, selectedCategorie });
  };

  return (
    <GameContext.Provider value={{ gameState, setCategorie }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameManager;
