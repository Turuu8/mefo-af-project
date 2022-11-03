import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { formAnimation } from "../../utils/animationVariants";
import classes from "../../assets/styles/formStyles.module.scss";
import { AiOutlineClose, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Login = () => {
  const [passTypeChange, setPassTypeChange] = useState(false);
  const { setIsLoginOpen, setIsSignupOpen } = useContext(GlobalContext);
  const typeChange = () => {
    setPassTypeChange(!passTypeChange);
  };
  const closeLoginComp = () => {
    setIsLoginOpen(false);
  };
  const openSignupComp = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.form}>
      <div className={classes.form_container}>
        <div onClick={closeLoginComp} className={classes.form_container_back} />
        <motion.div
          variants={formAnimation}
          initial="hidden"
          animate="visible"
          transition="transition"
          className={classes.form_container_main}
        >
          <AiOutlineClose
            onClick={closeLoginComp}
            className={classes.closeIcon}
          />
          <h1>Login</h1>
          <div>
            <span>Need an account?</span>
            <button onClick={openSignupComp}>Sign up</button>
          </div>
          <form onSubmit={formSubmit}>
            <div className={classes.mailNumberBox}>
              <label htmlFor="mailOrNumber">Email or Phone number:</label>
              <input id="mailOrNumber" type="text" placeholder="Email..." />
            </div>
            <div className={classes.passwordBox}>
              <label htmlFor="password">Password:</label>
              <div>
                <input
                  id="password"
                  placeholder="Password..."
                  type={passTypeChange ? "text" : "password"}
                />
                <button onClick={typeChange}>
                  {passTypeChange ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>
            <button type="submit" className={classes.submitBtn}>
              Login
            </button>
          </form>
          <button>Forgot password</button>
        </motion.div>
      </div>
    </div>
  );
};
