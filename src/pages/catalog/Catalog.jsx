// Catalog.js

import React, { useEffect,  } from 'react'; //dodati useState/
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../redux/actions';

const Catalog = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <div>
      <h2>Catalog</h2>

      {catalog.map((advert) => (
        <div key={advert.id}>
          <img src={advert.img} alt={advert.make} style={{ width: '100px' }} />
          <h3>{advert.make} {advert.model}</h3>
          <p>{advert.description}</p>
          <p>Rental Price: ${advert.rentalPrice}/hour</p>

          <Link to={`/catalog/${advert.id}`}>
            <button>Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
