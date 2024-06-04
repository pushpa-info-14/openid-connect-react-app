import { useAuth } from "oidc-react";
import Products from "./Products";
import Weather from "./Weather";

const LoggedIn = () => {
  const auth = useAuth();
  if (auth && auth.userData) {
    return (
      <div>
        <Products />
        <br />
        <br />
        <Weather />
        {/* <button onClick={() => auth.signOut()}>Log out!</button> */}
      </div>
    );
  }
  return (
    <div>Not logged in! Try to refresh to be redirected to auth server.</div>
  );
};

export default LoggedIn;
