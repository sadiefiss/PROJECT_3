/* eslint-disable react/prop-types */
//import  { useState } from "react"; 
//const apiKey = import.meta.env.VITE_REACT_API_KEY;
// eslint-disable-next-line no-empty-pattern
const Mammals = ({}) => {
  // Set up state for mammals data
  //const [mammals, setMammalsData] = useState([]);

     return ( 
      <div>
      <div>
        <a href="/details/beaver">
          <img src="/images/beaver.jpg" alt="Beaver" />
        </a>
      </div>

      <div>
        <a href="/details/bobcat">
          <img src="/images/bobcat.jpg" alt="Bobcat" />
        </a>
      </div>

      <div>
        <a href="/details/opossum">
          <img src="/images/opossum.jpg" alt="opossum" />
        </a>
      </div>

      <div>
        <a href="/details/coyote">
          <img src="/images/coyote.jpg" alt="Coyote" />
        </a>
      </div>

      <div>
        <a href="/details/white-tail-deer">
          <img src="/images/whitetaildeer.jpg" alt="White Tail Deer" />
        </a>
      </div>

      <div>
        <a href="/details/squirrel">
          <img
            src="/images/squirrel.jpg"
            alt="Squirrel"
          />
        </a>
      </div>




    
<section className="container">
{/* { mammals.length > 0 && 
<div>
    {/* map over the array of mammals  */} 
    {/* {mammals?.map(mammal => {
      return (
        <> 
        <Link to={`/details/${mammal.name }`} >
<div className="card">
    <div className="card-image">
      <img 
      src="/images/raccoon-856705_1280.jpg"
        alt="Racoon"
      />
    </div>
    <div className="card-title" key={mammal.name}>
      <h3>{mammal.name}</h3>
     
    </div>
  </div>
  </Link>
     </> )
    })} 
    </div> } */} 
  
</section>
</div>

  )
}


export default Mammals;