import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS } from '../../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_AUCTION_ITEMS);

  return (
    <div className="auction-items-container">
      {data.getAllAuctionItems.map(item => (
        <div key={item._id} className="auction-item-card">
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <p>Description: {item.description}</p>
          <p>Starting Price: {item.startingPrice}</p>
          <p>Auction End Date: {item.auctionEndDate}</p>

          <h4>Bid History</h4>
          <div className="bid-history">
            {item.bidHistory.map(bid => (
              <div key={bid._id} className="bid-history-card">
                <p>Bidder: {bid.bidder.username}</p>
                <p>Amount: {bid.amount}</p>
                <p>Timestamp: {bid.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;