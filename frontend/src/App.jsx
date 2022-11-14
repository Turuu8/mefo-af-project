import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "./context/API/useAuth";
import { PageRender } from "./custom/PageRender";
import { Header } from "./components/layouts/Header";
import { Home, Payment, ResetPassword } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const { refreshToken } = useAuth();
  const userLoggedIn = localStorage.getItem("UserLoggedIn");
  useEffect(() => {
    if (userLoggedIn) {
      refreshToken("/auth/refresh_token");
    }
  }, [userLoggedIn]);
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:id" element={<PageRender />} />
          <Route path="/reset_password/:token" element={<ResetPassword />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
