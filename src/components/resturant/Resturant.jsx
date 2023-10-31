import React, { useState, useEffect } from 'react';

export default function Restaurant() {
  const [recipes, setRecipes] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  const fetchData = async (query) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    let data = await response.json();
    setRecipes(data.recipes);
  }

  useEffect(() => {
    if (selectedButton) {
      fetchData(selectedButton);
    }
  }, [selectedButton]);

  return (
    <div className='row mt-4'>
      <button onClick={() => setSelectedButton('pizza')}>Pizza</button>
      <button onClick={() => setSelectedButton('salad')}>Salad</button>
      <button onClick={() => setSelectedButton('onion')}>Onion</button>
      {recipes.map((ele) => (
        <div className='col-md-4' key={ele.recipe_id}>
          <h2>{ele.title}</h2>
          <img src={ele.image_url} className='w-50' alt={ele.title} />
        </div>
      ))}
    </div>
  );
}
