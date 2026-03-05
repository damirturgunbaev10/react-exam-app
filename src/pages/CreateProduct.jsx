import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    brand: "",
  });

  useEffect(() => {
    setFormData({
      title: "",
      price: "",
      description: "",
      brand: "",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error("Failed to add product");
    toast.success("Product added successfully!");
    setFormData({ title: "", price: "", description: "", brand: "" });
    navigate("/products");
  } catch (err) {
    toast.error("Failed to add product");
  }
};



  return (
    <div className="create-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;