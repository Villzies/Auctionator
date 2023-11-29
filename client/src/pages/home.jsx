import React from 'react';
import AuctionItem from '../components/AuctionItem'; 

const Home = () => {
  return (
    <div>
  <div className="auction-item-container">
      <a href="#" className="block max-w-sm p-6 border-gray-200 rounded-lg">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
<AuctionItem />
      </a>
      </div>
  </div>
  );
};

export default Home;
