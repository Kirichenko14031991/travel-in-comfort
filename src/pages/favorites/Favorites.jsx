// Favorites.js

import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet. Explore the catalog and add some!</p>
      ) : (
        <ul>
          {favorites.map((advert) => (
            <li key={advert.id}>
              <img src={advert.img} alt={advert.make} style={{ width: '100px' }} />
              <h3>{advert.make} {advert.model}</h3>
              <p>{advert.description}</p>
              <p>Rental Price: ${advert.rentalPrice}/hour</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
