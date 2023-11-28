import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS } from '../../utils/queries';
import { PLACE_BID_MUTATION } from '../../utils/mutations';

const AuctionItem = () => {
  const { loading, data } = useQuery(QUERY_AUCTION_ITEMS);
  console.log(data);
  const auctionItem = data?.getAllAuctionItems || [];
  const [bidAmount, setBidAmount] = useState('');

  const handleBidChange = (event) => {
    const inputValue = event.target.value;
    setBidAmount(inputValue);
  };

  const handleBidSubmit = (event, itemId) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(`Submitting bid of ${bidAmount} for item with ID: ${itemId}`);
    setBidAmount('');
  };

  return (
    <div className="auction-items-container">
      {auctionItem.map((item) => (
        <div key={item._id} className="auction-item-card">
          <h3>{item.name}</h3>
          <img src={item.imageURL} alt={item.name} />
          <p>Description: {item.description}</p>
          <p>Starting Price: {item.startingPrice}</p>
          <p>Auction End Date: {item.auctionEndDate}</p>

          <h4>Bid History</h4>
          <div className="bid-history">
            {item.bidHistory ? (
              item.bidHistory.map((bid) => (
                <div key={bid._id} className="bid-history-card">
                  <p>Bidder: {bid.bidder.username}</p>
                  <p>Amount: {bid.amount}</p>
                  <p>Timestamp: {bid.timestamp}</p>
                </div>
              ))
            ) : (
              <div> No bid history </div>
            )}
          </div>
          <div>
            <form onSubmit={(event) => handleBidSubmit(event, item._id)}>
              <input
                type="string"
                value={bidAmount}
                onChange={handleBidChange}
                placeholder="Enter Bid Amount"
              />
              <button type="submit">Bitches be bidding!</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionItem;
