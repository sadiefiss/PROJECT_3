

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_REACT_API_KEY;

const MammalDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [mammal, setMammalData] = useState(null);
// Function to Nav back to previous page
    const goBack = () => {
        navigate(-1);
    };
// 1. fetch mammal detials for the API
    const fetchMammal = async () => {
        const url = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${apiKey}`,
                'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (result && result.length > 0) {
                setMammalData(result[0]); // Set only the first result
            }
        } catch (error) {
            console.error(error);
        }    
    }
// 2: Use Effect hook to fetch data on component mount
    useEffect(() => {
        fetchMammal();
    }, [name]);
// Load state
    if (!mammal) {
        return <p className="text-center">Loading mammal info...</p>;
    }
// 3 render Mammal Details
    return (
        <section className="container">
            <button 
                onClick={goBack} 
                className="bottom-right bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
                Mammal List 🦌
            </button>
            <div className="text-sm text-gray-700 p-4 bg-pink-100 rounded-lg shadow-md">
             
                <img src={mammal.image} alt={mammal.name} />
                <h3 className="text-lg font-semibold text-pink-600">Diet: {mammal.characteristics.diet}</h3>
               <div>
                <p>Habitat: {mammal.characteristics.habitat}</p>
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
            </div>
        </section>
    );
};

export default MammalDetails;