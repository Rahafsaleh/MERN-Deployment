import axios from "axios";
import { navigate } from "@reach/router";
import { useEffect, useState } from "react";


const DeleteButton = ({ id, successCallBack }) => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        desc: "",
        skill1:"",
        skill2:"",
        skill3:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [id])
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res);
        successCallBack();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => clickFunction(id)}>Adopt {pet.name}</button>
    </>
  );
};

export default DeleteButton;