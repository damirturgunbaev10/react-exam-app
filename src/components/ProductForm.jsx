import { useState } from "react";

function ProductFrom({ product, onSave, onCancel }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand || "");

  return (
    <div>
      <h2>Edit Product</h2>

      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div>
        <label>Brand</label>
        <input value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>

      <button onClick={onCancel}>Cancel</button>
      <button onClick={() => onSave({ title, price: parseFloat(price), brand })}>
        Save Changes
      </button>
    </div>
  );
}

export default ProductFrom;