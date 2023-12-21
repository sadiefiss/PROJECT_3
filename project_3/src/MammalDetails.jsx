// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// const apiKey = import.meta.env.VITE_REACT_API_KEY;


// const MammalDetails = () => {
// //useParams to extract the id parameter from url.log the id from the console
//     const{name} = useParams()
// console.log(name)
// //initialize state to manage  the data
//   const [mammal, setMammalData] = useState(null);
// //async function to fetch mammal details based on the extracted id perameter from the API
// const fetchMammal = async () => {
//     const url = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${name}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key':`${apiKey}`,
//             'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         //console.log(response)
//         const result = await response.json();
//         console.log(result)
//         setMammalData(result);
//     } catch (error) {
//         console.error(error);
//     }    
// }
// useEffect(() => {
//     fetchMammal();
// }, [] );
// if(!mammal ) {
//     return <p> loading mammal info ...</p>
// }
// return(
//   <section className="container ">
// {
// mammal.map ((mammal) => (   

//     <div key={mammal.name}>
// <div className="card-image">
//           <img src={mammal.image} alt={mammal.name} />
//         </div>
//         <div className="card-title">
//           {/* <div key={mammal.name}> */}
          
//           <h3>Diet: {mammal.characteristics.diet}</h3>
//         <h4>Characteristics:</h4>
//         <p>Age of Sexual Maturity: {mammal.age_of_sexual_maturity}</p>
//         <p>Age of Weaning: {mammal.characteristics.age_of_weaning}</p>
//         <p>Biggest Threat: {mammal.characteristics.biggest_threat}</p>
//         <p>Color: {mammal.characteristics.color}</p>
//         <p>Estimated Population Size: {mammal.characteristics.estimated_population_size}</p>
//         <p>Gestation Period: {mammal.characteristics.gestation_period}</p>
//         <p>Group Behavior: {mammal.characteristics.group_behavior}</p>
//         <p>Habitat: {mammal.characteristics.habitat}</p>
//         <p>Height: {mammal.characteristics.height}</p>
//         <p>Length: {mammal.characteristics.length}</p>
//         <p>Lifespan: {mammal.characteristics.lifespan}</p>
//         <p>Litter Size: {mammal.characteristics.litter_size}</p>
//         <p>Location: {mammal.characteristics.location}</p>
//         <p>Most Distinctive Feature: {mammal.characteristics.most_distinctive_feature}</p>
//         <p>Name of Young: {mammal.characteristics.name_of_young}</p>
//         <p>Predators: {mammal.characteristics.predators}</p>
//         <p>Skin Type: {mammal.characteristics.skin_type}</p>
//         <p>Top Speed: {mammal.characteristics.top_speed}</p>
//         <p>Type: {mammal.characteristics.type}</p>
//         <p>Weight: {mammal.characteristics.weight}</p>
//         <h4>Taxonomy:</h4>
//         <p>Class: {mammal.taxonomy.class}</p>
//         <p>Family: {mammal.taxonomy.family}</p>
//         <p>Genus: {mammal.taxonomy.genus}</p>
//         <p>Kingdom: {mammal.taxonomy.kingdom}</p>
//         <p>Order: {mammal.taxonomy.order}</p>
//         <p>Phylum: {mammal.taxonomy.phylum}</p>
//         <p>Scientific Name: {mammal.taxonomy.scientific_name}</p>
//  <h4></h4>
//         <p>
//         {/* {} */}
//         </p> 
//         <a
//           href= {mammal.homepage}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Read More
//         </a>
//         </div>
//         </div>
        
// ))
// }
//     </section>  
    
  
    
// ); 
// }
// export default MammalDetails  




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
        //console.log(response)
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
  <section className="container ">
{
mammal.map ((mammal) => (   

    <div key={mammal.name}>
<div className="card-image">
          <img src={mammal.image} alt={mammal.name} />
        </div>
        <div className="text-sm text-gray-700 p-4 bg-pink-100 rounded-lg shadow-md">
  <h3 className="text-lg font-semibold text-pink-600">Diet: {mammal.characteristics.diet}</h3>
  <h4 className="text-md font-semibold text-pink-500 mt-2">Characteristics:</h4>
  <p>Age of Sexual Maturity: {mammal.age_of_sexual_maturity}</p>
  <p>Age of Weaning: {mammal.characteristics.age_of_weaning}</p>
  <p>Biggest Threat: {mammal.characteristics.biggest_threat}</p>
  <p>Color: {mammal.characteristics.color}</p>
  <p>Estimated Population Size: {mammal.characteristics.estimated_population_size}</p>
  <p>Gestation Period: {mammal.characteristics.gestation_period}</p>
  <p>Group Behavior: {mammal.characteristics.group_behavior}</p>
  <p>Habitat: {mammal.characteristics.habitat}</p>
  <p>Height: {mammal.characteristics.height}</p>
  <p>Length: {mammal.characteristics.length}</p>
  <p>Lifespan: {mammal.characteristics.lifespan}</p>
  <p>Litter Size: {mammal.characteristics.litter_size}</p>
  <p>Location: {mammal.characteristics.location}</p>
  <p>Most Distinctive Feature: {mammal.characteristics.most_distinctive_feature}</p>
  <p>Name of Young: {mammal.characteristics.name_of_young}</p>
  <p>Predators: {mammal.characteristics.predators}</p>
  <p>Skin Type: {mammal.characteristics.skin_type}</p>
  <p>Top Speed: {mammal.characteristics.top_speed}</p>
  <p>Type: {mammal.characteristics.type}</p>
  <p>Weight: {mammal.characteristics.weight}</p>
  <h4 className="text-md font-semibold text-pink-500 mt-2">Taxonomy:</h4>
  <p>Class: {mammal.taxonomy.class}</p>
  <p>Family: {mammal.taxonomy.family}</p>
  <p>Genus: {mammal.taxonomy.genus}</p>
  <p>Kingdom: {mammal.taxonomy.kingdom}</p>
  <p>Order: {mammal.taxonomy.order}</p>
  <p>Phylum: {mammal.taxonomy.phylum}</p>
  <p>Scientific Name: {mammal.taxonomy.scientific_name}</p>
</div>

        <a
          href= {mammal.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        </div>
       
        
))
}
    </section>  
    
  
    
); 
}
export default MammalDetails 
