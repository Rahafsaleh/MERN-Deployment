import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetList from "../components/PetList";

const Home = (props) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log("getting the stuff:", res);
        setPets(res.data.sort((a,b)=>a.type.localeCompare(b.type)));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Pet Shelter</h1>
      <PetList pets={pets} setPets={setPets} />
    </>
  );
};

export default Home;