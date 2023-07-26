import React from 'react';
import { Link } from 'react-router-dom';

const LobbyPage = () => {
  return (
    <div>
      <h2>Lobby Page</h2>
      <Link to="/game">
      <button className="py-4 px-8 bg-green-500 text-white rounded-lg font-bold">
          Enter game
      </button>
      </Link>
    </div>
  );
};

export default LobbyPage;