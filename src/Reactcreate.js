import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reactcreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 const history= useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('https://63342e5190a73d0fede8d1b9.mockapi.io/crud-you/userdata',{
        name:name,email:email
    }).then(()=>{ history('/Read')})
    setName('')
    setEmail('')
   
  };
  return (
    <div>
      <form>
        <div class="mb-3 col-4 m-1">
          <label  for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="email"
            class="form-control"
          />
        </div>
        <div class="mb-3 col-4 m-1">
          <label for="exampleFormControlTextarea1" class="form-label">
            email
          </label>
          <textarea value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>
        <button onClick={submitHandler} class="btn btn-primary" type="submit">
          submit
        </button>
      </form>
      
    </div>
  );
};

export default Reactcreate;
