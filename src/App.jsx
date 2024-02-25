import { lazy, Suspense } from "react";
import WishlistPage from "./pages/WishlistPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
// import CounterPage from "./pages/CounterPage";

const CounterPage = lazy(() => import("./pages/CounterPage"));

function App() {
  return (
    <Routes>
      <Route element={<WishlistPage />} path="/wishlist" />
      <Route element={<SignUpPage />} path="/auth/sign-up" />
      <Route
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <CounterPage />
          </Suspense>
        }
        path="/"
      />
      <Route element={<ProfilePage />} path="/profile/:nama" />
    </Routes>
  );
}

export default App;
