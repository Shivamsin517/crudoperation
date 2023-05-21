import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const ReactUpdate = () => {
    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const history=useNavigate()
    
    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    },[])
    const updateHandler=(e)=>{
        e.preventDefault()
        console.log('id',id)
        axios.put(`https://63342e5190a73d0fede8d1b9.mockapi.io/crud-you/userdata/${id}`,{
            name:name,
            email:email
        }).then(()=>{history('/Read')})
    }
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
        <button onClick={updateHandler} class="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default ReactUpdate