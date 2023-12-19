/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
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
    
<section className="container">
{ mammals.length > 0 && 
<div>
    {/* map over the array of mammals  */} 
    {mammals?.map(mammal => {
      return (
        <>
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
     </> )
    })} 
    </div> }
  
</section>

  )
}


export default Mammals;