import React, { useRef } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

const App = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar contactRef={contactRef} />
      <MainContent ref={contactRef} />
    </div>
  );
};

export default App;
