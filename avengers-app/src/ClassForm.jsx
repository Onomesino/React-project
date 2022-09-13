import React, { useState } from 'react';

function ClassForm() {
    const [name,setName]= useState("");
    const [surname,setSurname]= useState("");
    const [password,setPassword]= useState("");
    const [email,setEmail]= useState("");
    const [students, setStudents] = useState([
        { name: ("Esther"), surname:("Onomesino"),email: ("onomesino"), password: ("gold") },
    ]);

const setClick = (e)=> {
    e.preventDefault();
    var work = [name,email,password]
    console.log(work);
    setStudents ([...students,{name,email,password,surname}])
}




    return ( 
        <>
        <h1>REGISTERATION FORMS</h1>
        <form action="form">

            <label>NAME:</label>
            <input 
            type="text" 
            value={name}
            name="name"
            onChange={(e)=>{setName(e.target.value)}} />

              <br/>
<label>SURNAME:</label>
            <input
             type="text"
             value={surname}
             name="surname" 
             onChange={
                (e)=>{setSurname(e.target.value)}
                } />
             
              <br/>
<label>PASSWORD:</label>
            <input
             type="password"
             value={password}
             name="password"
             onChange={
                (e)=>{setPassword(e.target.value)}
                } /> 


             <br/>
<label>EMAIL:</label>
            <input
             type="text"
             value={email}
             name="name"
             onChange={
                (e)=>{setEmail(e.target.value)}
                } />

                 <br/>
                 <button onClick={setClick}>submit</button>

        </form>
        {students.map((inputs,index)=>{
            return(
                <>
                <h2>Name:{inputs.name}</h2>
                <h2>Surname:{inputs.surname}</h2>
                <h2>Password:{inputs.password}</h2>
                <h2>Email:{inputs.email}</h2>
                </>
            )
        })}
        </>
     );

    }
export default ClassForm;