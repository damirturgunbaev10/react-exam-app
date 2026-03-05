import { useState } from "react";

function ProductCard({ product, products, setProducts }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(product.title);

  const deleteProduct = async () => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    await fetch(`https://dummyjson.com/products/${product.id}`, {
      method: "DELETE",
    });

    const updated = products.filter((p) => p.id !== product.id);
    setProducts(updated);
  };

  const updateProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();

    const updated = products.map((p) =>
      p.id === product.id ? { ...p, title: data.title } : p
    );

    setProducts(updated);
    setEditing(false);
  };

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} width="150" />

      {editing ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <h3>{product.title}</h3>
      )}

      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>

      {editing ? (
        <button onClick={updateProduct}>Save</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}

      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}

export default ProductCard;

