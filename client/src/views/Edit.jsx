import { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
// import DeleteButton from "../components/DeleteButton";
import PetForm from "../components/PetForm";


const Edit = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    type:"",
    desc:"",
    skill1:"",
    skill2:"",
    skill3:"",


  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`).then((res) => {
      console.log("got results", res);
      setFormInputs(res.data);
    });
  }, [id]);

  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pets/${id}`, formInputs)
      .then((res) => {
        console.log("sending res:", res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; 
        const errorArr = []; 
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  const changeFunction = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>Edit {formInputs.name}</h1>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <PetForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Edit"}
      />
      {/* <DeleteButton id={id} successCallBack={() => navigate("/")} /> */}
    </>
  );
};

export default Edit;