import { Link } from "react-router-dom";

function Home() {
  return ( 
    <section className="home">
    <div className="home__container">
      <h1 className="home__title">Product Management System</h1>

      <p className="home__text">
        This application allows you to manage products using CRUD operations.
        You can view, add, edit and delete products.
      </p>

      <h3 className="home__sbt">Features:</h3>
      <ul className="home__ul">
        <li className="home__li">View all products</li>
        <li className="home__li">Add a new product</li>
        <li className="home__li">Edit existing product</li>
        <li className="home__li">Delete product</li>
      </ul>

      <div className="home__buttons">
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

