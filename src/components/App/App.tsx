import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "../../pages/HomePage";
import PsychologistsPage from "../../pages/PsychologistsPage";
import FavoritesPage from "../../pages/FavoritesPage";
import Layout from "../Layout/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<PsychologistsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
