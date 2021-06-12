const PetForm = ({
    formInputs,
    changeFunction,
    submitFunction,
    buttonText,
  }) => {
    return (
      <>
        <form onSubmit={submitFunction}>
          <p>
            Pet Name:{" "}
            <input
              type="text"
              name="name"
              value={formInputs.name}
              onChange={changeFunction}
            />
          </p>
          <p>
            Pet Type:{" "}
            <input
              type="text"
              name="type"
              value={formInputs.type}
              onChange={changeFunction}
            />
          </p>
          <p>
            Pet Description:{" "}
            <input
              type="text"
              name="desc"
              value={formInputs.desc}
              onChange={changeFunction}
            />
          </p>
          <p>Skills (Optional)</p>
          <p>
            Skill 1:{" "}
            <input
              type="text"
              name="skill1"
              value={formInputs.skill1}
              onChange={changeFunction}
            />
          </p>
          <p>
            Skill 2:{" "}
            <input
              type="text"
              name="skill2"
              value={formInputs.skill2}
              onChange={changeFunction}
            />
          </p>
          <p>
            Skill 3:{" "}
            <input
              type="text"
              name="skill3"
              value={formInputs.skill3}
              onChange={changeFunction}
            />
          </p>
  
          <button type="submit">{buttonText}</button>
        </form>
      </>
    );
  };
  
  export default PetForm;