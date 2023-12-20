/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react"; 
import { Link } from 'react-router-dom' 
const apiKey = import.meta.env.VITE_REACT_API_KEY;
const Mammals = ({name}) => {
  // Set up state for mammals data
  const [mammals, setMammalsData] = useState([]);

// Simulating data fetching with a setTimeout
    const fetchMammals = async () => { 
console.log(apiKey)
        const url = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':`${apiKey}`,
                'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMammalsData(result);
        } catch (error) {
            console.error(error);
        }       
    }
  
console.log(mammals)
console.log(mammals.length)
   useEffect(() =>  {
    fetchMammals(); // Call the fetchMammals function

}, []); // The empty dependency array ensures that useEffect runs only once on component mount

     return ( 
      <div>
      <div>
        <a href="/details/beaver">
          <img src="/images/beaver.jpg" alt="Beaver" />
        </a>
      </div>

      <div>
        <a href="/details/bobcat">
          <img src="/images/bobcat-4656314_1280.jpg" alt="Bobcat" />
        </a>
      </div>

      <div>
        <a href="/details/eastern-cotton-tail">
          <img src="/images/bunny-6187026_1280.jpg" alt="Eastern Cotton Tail" />
        </a>
      </div>

      <div>
        <a href="/details/coyote">
          <img src="/images/coyote-7143398_1280.jpg" alt="Coyote" />
        </a>
      </div>

      <div>
        <a href="/details/white-tail-deer">
          <img src="/images/deer-5386973_1280.jpg" alt="White Tail Deer" />
        </a>
      </div>

      <div>
        <a href="/details/eastern-gray-squirrel">
          <img
            src="/images/eastern-gray-squirrel-4586908_1280.jpg"
            alt="Eastern Gray Squirrel"
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