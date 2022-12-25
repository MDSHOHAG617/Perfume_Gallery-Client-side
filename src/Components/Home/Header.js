import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const Header = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  return (
    <div>
      <Navbar className="p-" bg="light" expand="lg">
        <Container className="">
          <Navbar.Brand className=" fs-1 text-primary">
            Perfume-Gallery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link
                className="text-dark text-decoration-none  mx-2 fw-bold "
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-dark text-decoration-none  mx-2 fw-bold "
                to="/registration"
              >
                Registration
              </Link>

              {user ? (
                <div className="">
                  <Link
                    onClick={handleSignOut}
                    className="text-muted text-decoration-none  mx-2  "
                    to="/"
                  >
                    Logout
                  </Link>

                  <Link
                    className="text-dark text-decoration-none  mx-2 fw-bold "
                    to="/manageInventory"
                  >
                    Manage Inventory
                  </Link>
                  <Link
                    className="text-dark text-decoration-none p-1 mx-2 fw-bold "
                    to="/addItems"
                  >
                    Add Items
                  </Link>
                </div>
              ) : (
                <Link
                  className="text-dark text-decoration-none mx-2 fw-bold "
                  to="/login"
                >
                  Login
                </Link>
              )}
              <Link
                className="text-dark text-decoration-none  mx-2 fw-bold "
                to="/blogs"
              >
                Blogs
              </Link>

              {/* <Link
                className="text-dark text-decoration-none p-1 mx-2 fw-bold "
                to="/inventory"
              >
                Inventory
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
