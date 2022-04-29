import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // let navigate = useNavigate();
  // let location = useLocation();

  // let from = location.state?.from?.pathname || "/";
  // const location = useLocation();
  // const from = location.state?.from?.pathName || "/";

  if (error) {
    return (
      <div className="bg-danger text-center p-5 m-5 fs-2 text-white">
        <p>{error.message}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <img
        className="text-center img-fluid"
        src={
          "https://i.pinimg.com/originals/45/12/4d/45124d126d0f0b6d8f5c4d635d466246.gif"
        }
        alt=""
      />
    );
  }
  if (user) {
    return (
      <div className="bg-danger p-5 m-5 container fs-2">
        <p>Signed In User {user.email}</p>
      </div>
    );
  }

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Form
        onSubmit={handleForm}
        className="container w-50 mt-5 bg-light p-5 rounded"
      >
        <h1 className="mb-5">Please Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Link className="text-decoration-none " to="/registration">
          <span>New to perfume gallery?</span>{" "}
        </Link>
        <br />
        <button
          onClick={() => signInWithEmailAndPassword(email, password)}
          className="btn btn-primary mt-3"
          type="submit"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
