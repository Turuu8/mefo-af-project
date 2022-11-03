import { useContext } from "react";
import { Login, Signup } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";

export const Home = () => {
  const { isLoginOpen, isSignupOpen } = useContext(GlobalContext);
  return (
    <>
      <div>home</div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
    </>
  );
};
