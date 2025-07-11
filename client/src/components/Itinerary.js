import React from 'react';

function Itinerary({ plan }) {
  return (
    <div>
      <h2>Your Itinerary:</h2>
      <pre>{plan}</pre>
    </div>
  );
}

export default Itinerary;
