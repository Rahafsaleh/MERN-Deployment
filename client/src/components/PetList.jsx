// import DeleteButton from "../components/DeleteButton";
import { Link, navigate } from "@reach/router";

const PetList = ({ pets, setPets }) => {
  const removeFromDom = (id) => {
    setPets(pets.filter((pet) => pet._id !== id));
  };
  return (
    <>
        <div>
            <p>These pets are looking for a good home</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {pets.length > 0 &&
        pets.map((pet) => {
          return (
              <tbody key = {pet._id}>
                  <tr>
                      <td>{pet.name}</td>
                      <td>{pet.type}</td>
                      <td>   <button ><Link to={`/edit/${pet._id}`}>Edit</Link> </button>
                      <button ><Link to={`/details/${pet._id}`}>Details</Link> </button>
              {/* <DeleteButton
                id={pet._id}
                successCallBack={() => removeFromDom(pet._id)}
              /> */}
            </td>
                  </tr>

              </tbody>
          )})}
            </table>
        </div>

    </>
  );
};

export default PetList;