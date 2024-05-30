import { useAuth } from "oidc-react";
import Products from "./components/Products";

const LoggedIn = () => {
  const auth = useAuth();
  if (auth && auth.userData) {
    return (
      <div>
        <Products />
        <strong>Logged in! 🎉</strong>
        <br />
        <button onClick={() => auth.signOut()}>Log out!</button>
      </div>
    );
  }
  return (
    <div>Not logged in! Try to refresh to be redirected to auth server.</div>
  );
};

export default LoggedIn;
