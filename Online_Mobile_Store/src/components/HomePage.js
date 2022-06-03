import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="App">
      <br/><br/><br/><br/><br/><br/>
      <h1>
        <i>
          Welcome To
          <br />
          Online Mobile Store
        </i>
      </h1>
      <br />
      <Link to={"/Login"}>
        <b>Login</b>
      </Link>
      <br />
      <br />
      <Link to={"/SignUp"}>
        <b>SignUp</b>
      </Link>
    </div>
  );
}

export default HomePage;
