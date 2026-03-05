import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    brand: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    navigate("/products");
  };

  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;

