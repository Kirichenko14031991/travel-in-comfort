import React from 'react';
import { Link } from 'react-router-dom';
import { HomeWrap, HomeMainText, HomeDescription, HomeButton} from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <HomeMainText>Welcome to our Car Rental Service</HomeMainText>
      <HomeDescription>Discover a wide range of cars available for rent. Find the perfect one for your needs!</HomeDescription>

      <Link to="/catalog">
        <HomeButton>Explore Catalog</HomeButton>
      </Link>

      <HomeDescription>For inquiries, you can contact us at <a href="tel:+380730000000">+380730000000</a>.</HomeDescription>
    </HomeWrap>
  );
};

export default Home;
