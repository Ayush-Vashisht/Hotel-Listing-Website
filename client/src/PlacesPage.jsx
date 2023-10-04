import { useEffect, useState } from "react";
import PlacePage from "./PlacePage";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  const [located, setLocated] = useState(false);
  const { location } = useParams();
  useEffect(() => {
    axios.get("/").then(({ data }) => {
      setPlaces(data.places);
    });
  }, []);
  if (location == "mumbai") setLocated(true);
  return (
    <>
    {console.log(location)}
    {console.log(located)}
      {located ? (
        <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
          {places
            .filter((place) => place.Location === location)
            .slice(0, 6)
            .map((place, key) => (
              <Link key={key} to={`/property/${place.id}`}>
                <PlacePage place={place} />
              </Link>
            ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 ">
            {places.length > 0 &&
              places.slice(0, 6).map((place, key) => (
                <Link key={key} to={`/property/${place.id}`}>
                  <PlacePage place={place} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
