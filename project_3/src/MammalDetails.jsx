import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKey = import.meta.env.VITE_REACT_API_KEY;


const MammalDetails = () => {
//useParams to extract the id parameter from url.log the id from the console
    const{name} = useParams()
console.log(name)
//initialize state to manage  the data
  const [mammal, setMammalData] = useState(null);
//async function to fetch mammal details based on the extracted id perameter from the API
const fetchMammal = async () => {
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
        console.log(response)
        const result = await response.json();
        console.log(result)
        setMammalData(result);
    } catch (error) {
        console.error(error);
    }    
}
useEffect(() => {
    fetchMammal();
}, [] );
if(!mammal ) {
    return <p> loading mammal info ...</p>
}
return(
  <section className="container">
{
mammal.map ((mammal) => (   

<>
<div className="card-image">
          <img src={mammal.image} alt={mammal.name} />
        </div>
        <div className="card-title">
          <h3>{mammal.name}</h3>
          <h3>({mammal.genus})</h3>
        <h4>...</h4>
        <p>
        {/* {} */}
        </p> 
        <a
          href= {mammal.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        </div>
        </>
))
}
    </section>  
    
  
    
); 
}

export default MammalDetails