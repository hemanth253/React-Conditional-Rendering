import React from "react";

import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 && (
        <h1>This means render only when current hours is greater than 12</h1>
      )}
    </div>
  );
}

export default App;
