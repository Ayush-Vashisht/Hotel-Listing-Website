import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlacePage from "./PlacePage";

export default function PropertyPage() {
  const [places, setPlaces] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get("/").then(({ data }) => {
      setPlaces(data.places);
    });
  }, []);
  console.log(id);
  return (
    <>
      {id &&
        places
          .filter((place) => place.id == id)
          .map((place, key) => <PlacePage key={key} place={place} />)}
      <div></div>
    </>
  );
}
