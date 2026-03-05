import { useState } from "react";
import { toast } from "react-toastify";

function ProductCard({ product, products, setProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    brand: product.brand,
    description: product.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setProducts(products.map(p => p.id === product.id ? {...p, ...data} : p));
      setIsModalOpen(false);
      toast.success("Product updated successfully!");
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async () => {
    if (!window.confirm("Delete this product?")) return;
    await fetch(`https://dummyjson.com/products/${product.id}`, { method: "DELETE" });
    setProducts(products.filter(p => p.id !== product.id));
    toast.success("Product deleted successfully!");
  };

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>

      <button onClick={() => setIsModalOpen(true)}>Edit</button>
      <button onClick={deleteProduct}>Delete</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Edit Product</h2>
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
            <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <div className="modal-buttons">
              <button onClick={updateProduct}>Save</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;