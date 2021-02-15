import React, { useState } from 'react';
import Layout from '../Layout';
import './App.css';

function App() {

  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <Layout>
      <h2>WELCOME TO MY PHOTOGRAPHY STORE</h2>
      <div id="splash-image">
        {!imgLoaded && <div className="loader-splash" />}
        <img 
          style={ imgLoaded ? {} : { visibility: "hidden" }} 
          src="/images/splash.jpg" alt="Mountain" 
          onLoad={() => setImgLoaded(true)}
        />
      </div>
    </Layout>
  )
}

export default App;