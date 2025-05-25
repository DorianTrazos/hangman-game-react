import { useContext } from 'react';
import { GameContext } from '../../lib/contexts/game-manager.context';

const Header = () => {
  const {
    gameState: { selectedCategorie }
  } = useContext(GameContext);

  return (
    <>
      <h1>{selectedCategorie}</h1>
    </>
  );
};

export default Header;
