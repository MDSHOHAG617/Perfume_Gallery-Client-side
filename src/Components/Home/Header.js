import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../firebase.init";

const Header = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast("sign out successfully ");
    });
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="">Perfume-Gallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link className="text-dark text-decoration-none p-1 mx-2 " to="/">
                Home
              </Link>
              {user ? (
                <Link
                  onClick={handleSignOut}
                  className="text-muted text-decoration-none p-1 mx-2 "
                  to="/"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  className="text-dark text-decoration-none p-1 mx-2 "
                  to="/login"
                >
                  Login
                </Link>
              )}
              <Link
                className="text-dark text-decoration-none p-1 mx-2 "
                to="/registration"
              >
                Registration
              </Link>
              {/* <Link
                className="text-dark text-decoration-none p-1 mx-2 "
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
