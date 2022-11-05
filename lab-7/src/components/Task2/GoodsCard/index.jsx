import './style.css';

const GoodsCard = ({ imgUrl, name, price }) => {
  return (
    <li className="goods-card">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
      <p>Price: {price}$</p>
      <button>🛒 Add To Cart</button>
    </li>
  );
};

export default GoodsCard;
