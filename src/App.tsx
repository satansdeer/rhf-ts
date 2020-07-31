import React from "react";
import { useForm } from 'react-hook-form'
import "./App.css";

type Profile = {
  firstname: string
  lastname: string
  age: number
}

function App() {
  const {register, handleSubmit, errors} = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <main>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input ref={register({ required: true })} id="firstname" name="firstname" type="text"/>
        {
          errors.firstname && <div className="error">Enter your name</div>
        }
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input ref={register({ required: true })} id="lastname" name="lastname" type="text"/>
        {
          errors.lastname && <div className="error">Enter your last name</div>
        }
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input ref={register({ required: true })} id="age" name="age" type="text"/>
        {
          errors.age && <div className="error">Enter your age</div>
        }
      </div>
      <button type="submit">Save</button>
    </form>
    </main>
  );
}

export default App;
