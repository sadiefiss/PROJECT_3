
import { Route, Routes } from 'react-router-dom'
import Mammals from './Mammals';
import MammalDetails from './MammalDetails';
import './App.css'


const App = () => { 



  return (
 <> 
   <div id='header'>
     <h1 className='text-orange-500'>
      <a href='/'> Native Pennsylvania Mammals</a>  
   
     </h1>
    </div>  

   <main> 

  <Routes> 
     <Route path="/" element={ <Mammals /> } /> 
     <Route path="/details/:name" element={ <MammalDetails />} /> 
  </Routes>
</main>

    </> 
  );
};

export default App;
