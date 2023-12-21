

// import { Route, Routes } from 'react-router-dom';
// import Mammals from './Mammals';
// import MammalDetails from './MammalDetails';
// //import LandingPage from './LandingPage';
// import './App.css';


import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Mammals from './Mammals';
import MammalDetails from './MammalDetails';


const App = () => {
  return (
    <> 
  <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/mammals" element={<Mammals />} />
      <Route path="/details/:name" element={<MammalDetails />} />
    </Routes>

      <div id='header' className="bg-pink-100 text-center py-4 shadow-lg">
        <h1 className='text-black text-4xl 	accent-color: transparent;'>
          <a href='/'> Native Pennsylvania Mammals;</a>  
        </h1>
      </div>  

      <main className="py-4"> 
        <Routes> 
    
          <Route path="/" element={<Mammals />} /> 
          <Route path="/details/:name" element={<MammalDetails />} /> 
        </Routes>
      </main>
    </> 
  );
};

export default App;
