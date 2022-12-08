import { useAuth } from "./API/useAuth";
import { useEffect, useContext } from "react";
import { BagDropDown, Footer, Loading } from "./components";
import { AnimatePresence } from "framer-motion";
import { PageRender } from "./custom/PageRender";
import { Header } from "./components/layouts/Header";
import { PrivateRouter } from "./custom/PrivateRouter";
import { GlobalContext } from "./context/GlobalContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { Bag, Home, Login, Signup, Payment, ResetPassword, ForgotPassword } from "./pages";
import Account from "./pages/main/account";
import { useProduct } from "./API/useProduct";

const App = () => {
  const location = useLocation();
  const { refreshToken } = useAuth();
  const { allProducts } = useProduct();
  const userLoggedIn = localStorage.getItem("UserLoggedIn");
  const {
    loading: { loading },
    onBag: { onBagOpen },
    loginOpen: { isLoginOpen },
    signupOpen: { isSignupOpen },
    forPassOpen: { isForPassOpen },
    selectedProducts: { selectedPros },
  } = useContext(GlobalContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    if (userLoggedIn) {
      refreshToken("/auth/refresh_token");
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    allProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <AnimatePresence>{onBagOpen && <BagDropDown products={selectedPros} />}</AnimatePresence>
      <div>
        <Header />
        <div>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route element={<PrivateRouter />}>
                <Route path="/account" element={<Account />} />
                <Route path="/payment" element={<Payment />} />
              </Route>
              <Route path="/:page" element={<PageRender />} />
              <Route path="/:page/:id" element={<PageRender />} />
              <Route path="/reset_password/:token" element={<ResetPassword />} />
              <Route path="/bag" element={<Bag />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
      {isForPassOpen && <ForgotPassword />}
    </div>
  );
};

export default App;
