import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <Link to='/categories'>
        <button>PLAY</button>
      </Link>
      <Link to='/how-to-play'>
        <button>How To Play</button>
      </Link>
    </>
  );
};

export default Home;
