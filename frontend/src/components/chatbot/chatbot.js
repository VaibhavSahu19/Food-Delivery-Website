import React, { useState, useEffect } from 'react';

function RestaurantSearch() {
  const [query, setQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query) {
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.6457503&lng=75.8157847&str=${query.toLowerCase()}&trackingId=3b387495-8d4d-c6c1-5b56-58401f2e8fbd&submitAction=ENTER&queryUniqueId=14f2455e-6d4b-4cd0-4fd8-0341f272f10b`;
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => setRestaurants(data))
        .catch(err => console.log(err));
    }
  }, [query.toLowerCase()]);

 
  
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter your search query"
        />
        <button type="submit">Remove</button>
      </form>
      
      <ul>
  {restaurants.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.map((items) => (
    items && items.card && items.card.card && items.card.card.restaurant && items.card.card.restaurant.info &&
    items.card.card.restaurant.info.avgRating > 4.5 && (
      <li key={items.card.card.restaurant.info.name}>
        {items.card.card.restaurant.info.name}
      </li>
    )
  ))}
</ul>



    </div>
  );
}

export default RestaurantSearch;
