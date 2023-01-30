import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentsAsync } from './sampSlice';

const AddStudent = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState(0);


  return (
    <div>
      <h1>Add New Student </h1>
      Email:<input onChange={(e) => setEmail(e.target.value)} /><br/><br/>
      Name:<input onChange={(e) => setName(e.target.value)} /><br/><br/>
      Grade:<input onChange={(e) => setGrade(e.target.value)} />{" "}
      <label>in :</label>{" "}
      <select onChange={(e) => setSubject(e.target.value)}>
        <option value="englsih">English</option>
        <option value="maths">Maths</option>
        <option value="ict">ICT</option>
      </select>
      <br /><br />
      <button
        onClick={() => dispatch(addStudentsAsync({ email, name, grade, subject }))}
      >
        Add
      </button><hr></hr>
    </div>
  )
}


export default AddStudent
