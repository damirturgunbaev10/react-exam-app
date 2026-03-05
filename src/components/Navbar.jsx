import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <h1 className="logo">Product Management System</h1>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/products/create">Add Product</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
