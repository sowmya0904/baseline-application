import React, { useState } from 'react';
import Blog from './components/Blog';
import './App.css';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const handleToggleSignIn = () => {
    setSignedIn(!signedIn);
  };

  return (
    <main>
      <nav className="navbar">
        <button className="btn btn-danger" onClick={handleToggleSignIn}>
          {signedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </nav>
      <Blog signedIn={signedIn} />
    </main>
  );
}

export default App;
