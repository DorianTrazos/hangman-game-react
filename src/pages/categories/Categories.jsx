import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Back from '../../components/back/Back';
import { CATEGORIES } from '../../constants/game-categories';
import { GameContext } from '../../lib/contexts/game-manager.context';

const Categories = () => {
  const {
    gameState: { selectedCategorie },
    setCategorie
  } = useContext(GameContext);
  return (
    <>
      <Back />
      <h1>Categories</h1>
      {selectedCategorie && <h2>Your Picked {selectedCategorie}</h2>}
      {!selectedCategorie && <h2>Select Categorie To Play</h2>}
      <ul>
        {CATEGORIES.map(categorie => (
          <Link
            to='/game'
            key={categorie.id}
          >
            <li onClick={() => setCategorie(categorie.value)}>
              {categorie.value}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Categories;
