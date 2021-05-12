import React, { useContext } from "react";

// import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import LoginReducer from "./components/Login/LoginReducer";
import AuthContext from "./Store/auth-context";
function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {ctx.isLoggedIn ? (
          <Home/>
        ) : (
          // <Login onLogin={loginHandler} />   {/* using useeffect */}
          <LoginReducer />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
