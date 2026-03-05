import { Link } from "react-router-dom";

function Home() {
  return ( 
    <section className="home">
    <div className="home-container">
      <h1 className="home-title">Product Management System</h1>

      <p className="home-text">
        This application allows you to manage products using CRUD operations.
        You can view, add, edit and delete products.
      </p>

      <h3 className="home-sbt">Features:</h3>
      <ul className="home-ul">
        <li className="home-li">View all products</li>
        <li className="home-li">Add a new product</li>
        <li className="home-li">Edit existing product</li>
        <li className="home-li">Delete product</li>
      </ul>

      <div className="home-buttons">
        <Link to="/products">
          <button>View Products</button>
        </Link>

        <Link to="/products/create">
          <button>Add Product</button>
        </Link>
      </div>
    </div>
    </section>
  );
}

export default Home;

