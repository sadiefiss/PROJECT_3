

import { Route, Routes } from 'react-router-dom';
import Mammals from './Mammals';
import MammalDetails from './MammalDetails';
//import LandingPage from './LandingPage';
import './App.css';

const App = () => {
  return (
    <> 
      <div id='header' className="bg-pink-100 text-center py-4 shadow-lg">
        <h1 className='text-orange-500 text-4xl'>
          <a href='/'> Native Pennsylvania Mammals</a>  
        </h1>
      </div>  

      <main className="py-4"> 
        <Routes> 
        {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<Mammals />} /> 
          <Route path="/details/:name" element={<MammalDetails />} /> 
        </Routes>
      </main>
    </> 
  );
};

export default App;
