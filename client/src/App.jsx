import { Route, Routes } from "react-router-dom";
import CityNav from "./CityNav";
import PlacesPage from "./PlacesPage";
import Footer from "./Footer";
import PropertyPage from "./PropertyPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col p-4 bg-gray-300 gap-4">
                <CityNav />
                <PlacesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/:location"
            element={
              <div className="min-h-screen flex flex-col p-4 bg-gray-300 gap-4">
                <CityNav />
                <PlacesPage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/property/:id"
            element={
              <div className="min-h-screen flex flex-col p-4 bg-gray-300 gap-4">
                <PropertyPage />
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
