import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
  };


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Welcome <strong>{currentUser.fullname}</strong>
        </h3>
        <div>
          <a href="/login" className="nav-link" onClick={logOut}>Click here to LogOut</a>
        </div>
      </header>
    </div>
  );
};

export default Profile;
