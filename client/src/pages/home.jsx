import React from 'react';
import AuctionItem from '../components/AuctionItem'; 

const Home = () => {
  return (
    <div>
      <h2>Welcome to Auctionator!</h2>
      <div className="auction-item-container">
        <AuctionItem />
      </div>
    </div>
  );
};

export default Home;
