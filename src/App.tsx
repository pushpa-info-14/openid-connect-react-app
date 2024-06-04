import { AuthProvider } from "oidc-react";
import "./App.css";
import logo from "./assets/react.svg";
import newUi from "./assets/new-ui.png";
import LoggedIn from "./components/LoggedIn";
import "bootstrap/dist/css/bootstrap.min.css";

const oidcConfig = {
  onSignIn: async (user: any) => {
    //alert("You just signed in, congratz! Check out the console!");
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
      <div className="container">
        <header className="App-header"></header>
        <img src={newUi} className="img-fluid" alt="New UI" />
        {/* <img src={logo} className="App-logo" alt="logo" />
          <p>OpenId Connect React App</p> */}
        <LoggedIn />
      </div>
    </AuthProvider>
  );
}

export default App;
