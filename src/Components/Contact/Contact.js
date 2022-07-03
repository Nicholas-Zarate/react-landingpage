import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import './Contact.css';
import {database} from './firebase'
import {ref,push,child,update} from "firebase/database";


//Contact Component
export default function Contact(props) {

  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [zip, setZip] = useState("");

  const handleNameInput = event => {
    setName(event.target.value);
  };

  const handleOrgInput = event => {
    setOrg(event.target.value);
  };

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };

  const handleZipInput = event => {
    setZip(event.target.value);
  }

  const firebaseSubmit = () => {
    let obj = {
        name : name,
        org: org,
        email: email
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
  }

  const emailSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      org: org,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const handleSubmit = () => {
    firebaseSubmit();
    //emailSubmit();

  };


  return (
    <div>
    <div id="a2"/>
    <Grid container className="contactContainer" columns={{xs:2, md:4}}>
      <Grid item className="contactSectionA"xs={2}>
        <div id='apple'>
         <form onSubmit={handleSubmit}>
          <div className="cont_input">
            <label htmlFor="name" >Name :</label>
            <input onChange={handleNameInput} type="text" id="input_name" required/>
          </div>
          <div className="cont_input">
            <label htmlFor="org" >Business or Organization :</label>
            <input onChange={handleOrgInput} type="text" id="input_text" required/>
          </div>
          <div className="cont_input">
            <label htmlFor="email" >Contact email:</label>
            <input onChange={handleEmailInput} type="text" id="input_email" required/>
          </div>
          <div className="cont_input">
            <label htmlFor="zip" >Zip code: </label>
            <input onChange={handleZipInput} type="text" id="input_zip" required/>
          </div>

          <div className="submit_cont">
          <button type="submit">{status}</button>
          </div>
        </form>
        </div>
      </Grid>

      <Grid item className="contactSectionB" xs={2}>

      hello
      </Grid>



    </Grid>
    </div>

  )
}
