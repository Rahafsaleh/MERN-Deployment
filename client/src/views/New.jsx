import axios from "axios";
import { navigate } from "@reach/router";
import { useState } from "react";
import AuthorForm from "../components/PetForm";

const New = (props) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
  });
  const [errors, setErrors] = useState([]);

  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pets", formInputs)
      .then((res) => {
        console.log("sending res:", res);
        navigate("/");
      })
    //   .catch(err=>console.log(err))
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
      <h1>Know a pet needing a home ?</h1>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <AuthorForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Add Pet"}
      />
    </>
  );
};

export default New;