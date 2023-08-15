import React, { useState } from 'react';

const ProductCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
