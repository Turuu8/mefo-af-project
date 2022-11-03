import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { formAnimation } from "../../utils/animationVariants";
import classes from "../../assets/styles/formStyles.module.scss";
import { AiOutlineClose, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Signup = () => {
  const [passTypeChange, setPassTypeChange] = useState(false);
  const [cfPassTypeChange, setCfPassTypeChange] = useState(false);
  const { setIsLoginOpen, setIsSignupOpen } = useContext(GlobalContext);
  const closeSignUpComp = () => {
    setIsSignupOpen(false);
  };
  const openLoginComp = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.form}>
      <div className={classes.form_container}>
        <div
          onClick={closeSignUpComp}
          className={classes.form_container_back}
        />
        <motion.div
          variants={formAnimation}
          initial="hidden"
          animate="visible"
          transition="transition"
          className={classes.form_container_main}
        >
          <AiOutlineClose
            onClick={closeSignUpComp}
            className={classes.closeIcon}
          />
          <h1>Signup</h1>
          <div>
            <span>Already have an account?</span>
            <button onClick={openLoginComp}>Login</button>
          </div>
          <form onSubmit={formSubmit}>
            <div className={classes.mailNumberBox}>
              <label htmlFor="username">Username:</label>
              <input id="username" type="text" placeholder="Username..." />
            </div>
            <div className={classes.mailNumberBox}>
              <label htmlFor="mailOrNumber">Email or Phone number:</label>
              <input id="mailOrNumber" type="text" placeholder="Email..." />
            </div>
            <div className={classes.passwordBox}>
              <label htmlFor="password">Password:</label>
              <div>
                <input
                  id="Password"
                  placeholder="Password..."
                  type={passTypeChange ? "text" : "password"}
                />
                <button onClick={() => setPassTypeChange(!passTypeChange)}>
                  {passTypeChange ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>
            <div className={classes.passwordBox}>
              <label htmlFor="password">Confirm password:</label>
              <div>
                <input
                  id="confirmPassword"
                  placeholder="Confirm password..."
                  type={cfPassTypeChange ? "text" : "password"}
                />
                <button onClick={() => setCfPassTypeChange(!cfPassTypeChange)}>
                  {cfPassTypeChange ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            <button type="submit" className={classes.submitBtn}>
              Sign up
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
