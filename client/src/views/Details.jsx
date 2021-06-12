import axios from 'axios';
import React, {useState, useEffect} from 'react';
import DeleteButton from "../components/DeleteButton";
import { navigate } from "@reach/router";


const Details = ({id}) => {
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

    return(
        <div>
            <h1>Pet Shelter</h1>
            <p>Details about:{pet.name} </p><br></br>
            <h4>Pet type:</h4><p>{pet.type}</p>
            <h4>Description:</h4><p>{pet.desc}</p>
            <h4>Skills:</h4><p>{pet.skill1}</p> <p>{pet.skill2}</p> <p>{pet.skill3}</p>
            <DeleteButton id={id} successCallBack={() => navigate("/")} />

        </div>
    )
}

export default Details;