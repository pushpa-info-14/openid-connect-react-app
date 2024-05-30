import { AuthProvider } from "oidc-react";
import "./App.css";
import logo from "./assets/react.svg";
import LoggedIn from "./LoggedIn";

const oidcConfig = {
  onSignIn: async (user: any) => {
    alert("You just signed in, congratz! Check out the console!");
    console.log(user);
    //window.location.hash = "";
    window.location.replace("http://localhost:5173");
  },
  authority: "https://localhost:7275",
  clientId: "reactapp",
  clientSecret: "reactappsecret",
  responseType: "code",
  redirectUri: "http://localhost:5173/home/callback",
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>OIDC React</p>
          <LoggedIn />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
