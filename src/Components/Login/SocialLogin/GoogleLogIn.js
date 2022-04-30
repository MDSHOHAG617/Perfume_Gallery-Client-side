import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../../firebase.init";

const GoogleLogIn = () => {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <div className="d-lg-flex d-sm-block justify-content-center my-3 p-2">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-xl bg-dark text-white p-3 m-2 "
      >
        Sign In with Google
      </button>

      <button className="btn btn-xl bg-dark text-white disabled p-3 m-2 ">
        Sign In with facebook
      </button>

      <button className="btn btn-xl bg-dark text-white disabled p-3 m-2">
        Sign In with github
      </button>
    </div>
  );
};

export default GoogleLogIn;
