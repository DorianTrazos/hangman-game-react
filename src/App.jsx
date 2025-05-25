import { BrowserRouter } from 'react-router-dom';
import GameManager from './lib/providers/GameManager.provider';
import Router from './lib/router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GameManager>
        <Router />
      </GameManager>
    </BrowserRouter>
  );
};

export default App;
