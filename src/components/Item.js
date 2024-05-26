import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)
  const cartClass = isAdded ? 'in-cart' : ''

  function handleClick(){
    setIsAdded(!isAdded)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{isAdded ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
