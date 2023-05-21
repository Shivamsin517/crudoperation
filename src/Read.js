import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://63342e5190a73d0fede8d1b9.mockapi.io/crud-you/userdata")
      .then((res) => {
        setData(res.data);
      });
  };
  const deleteHandler=(id)=>{
    axios.delete(`https://63342e5190a73d0fede8d1b9.mockapi.io/crud-you/userdata/${id}`).then(()=>{
       getData()
    })
   
  }
  const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
  } 
  
  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr>
                <th scope="row">{value.id}</th>
                <td>{value.name}</td>
                <td>{value.email}</td>

                <th scope="col">
               <Link onClick={()=>{setToLocalStorage(value.id,value.name,value.email)}} to='/ReactUpdate'><button  type="button" class="btn btn-primary">
                    edit
                  </button></Link>
                </th>
                <th scope="col">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      deleteHandler(value.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
