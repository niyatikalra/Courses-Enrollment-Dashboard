import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  className="nav-link px-2 link-secondary"
                  value="Courses"

                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="nav-link px-2 link-body-emphasis"
                  value="Dashboard"
                  
                >
                  Dashboard
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
           
              </a>
        
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
