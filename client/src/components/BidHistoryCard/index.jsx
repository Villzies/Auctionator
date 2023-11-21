import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BID_HISTORY } from '../utils/queries';

function BidHistory() {
  const { data } = useQuery(QUERY_USER_BID_HISTORY);
  let userBidHistory;

  if (data) {
    userBidHistory = data.userBidHistory;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {userBidHistory ? (
          <>
            <h2>
              Bid History for {userBidHistory.username}
            </h2>
            {userBidHistory.bids.map((bid) => (
              <div key={bid._id} className="my-2">
                <h3>
                  {bid.itemName} - ${bid.amount}
                </h3>
                <p>Bidder: {bid.bidder}</p>
                <p>Timestamp: {bid.timestamp}</p>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default BidHistory;
