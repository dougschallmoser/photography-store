import { useState } from 'react';
import Layout from '../../common/Layout';
import './App.css';

function App() {

  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <Layout>
      <h3>WELCOME TO MY</h3>
      <h1>PHOTOGRAPHY STORE</h1>
      <div id="splash-image">
        {!imgLoaded && <div data-testid="loader" className="loader-splash" />}
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