import { useState } from "react";

export default function Form() {
//   let [fullName, setfullName] = useState("Prakash");
//   let [username, setusername] = useState("");
  let [formElement , setformElement] = useState({
    fullName : "",
    username : "",
    password : "",
  })

//   let handleChange = (event) => {
//     console.log(event);
//     console.log(event.target.value);
//     setfullName(event.target.value);
//   };
//   let handleChangeUsername = (event) => {
//     console.log(event);
//     console.log(event.target.value);
//     setusername(event.target.value);
//   };

let handleChange = (event) =>{
    // console.log(event.target);
    // console.log(event.target.name);
    setformElement((curdata) =>{
        return {...curdata,[event.target.name] : event.target.value};
    })
}
 let submitHandler = (event) =>{
    event.preventDefault();
    console.log(formElement);
    setformElement({
        fullName : "",
        username : "",
        password : "",
    })
 }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="fullname">Fullname </label>
        <input
          type="text"
          placeholder="enter your fullname"
          value={formElement.fullName}
          onChange={handleChange}
          id="fullname"
          name="fullName"
        />
        <br /><br />

        <label htmlFor="username">Username </label>
        <input
          type="text"
          placeholder="enter your username"
          value={formElement.username}
          onChange={handleChange}
          id="username"
          name="username"
        />
        <br /><br />
        <label htmlFor="password">password </label>
        <input
          type="password"
          placeholder="enter your password"
          value={formElement.password}
          onChange={handleChange}
          id="password"
          name="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
