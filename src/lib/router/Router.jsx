import { Route, Routes } from 'react-router-dom';
import Categories from '../../pages/categories/Categories';
import Game from '../../pages/game/Game';
import Home from '../../pages/home/Home';
import HowToPlay from '../../pages/how-to-play/HowToPlay';
import Layout from '../layouts/Layout';

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/how-to-play'
            element={<HowToPlay />}
          />
          <Route
            path='/categories'
            element={<Categories />}
          />
          <Route
            path='/game'
            element={<Game />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
