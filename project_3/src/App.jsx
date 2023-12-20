
import { Route, Routes } from 'react-router-dom'
import Mammals from './Mammals';
import MammalDetails from './MammalDetails';
import './App.css'


const App = () => { 



  return (
 <> 
  <div>
     <h1>
      <a href='/'> Native Pennsylvania Mammals</a>  
      <Mammals name={'raccoon'}/> 
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
