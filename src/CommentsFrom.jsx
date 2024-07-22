import { useState } from "react";

export default function CommentsForm() {
  let [formElement, setformElement] = useState({
    username: "",
    remark: "",
    rating: 5,
  });
  let changeHandler = (event) =>{
    setformElement((curdata) =>{
        return {...curdata, [event.target.name] : event.target.value};
    })
  }

  let submitHandler = (event) =>{
    event.preventDefault();
    console.log(formElement);
    setformElement(() =>{
        return {username : "",remark :"", rating :5};
    })
  }
  return (
    <>
    <h2>Give your valueable comment</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" value={formElement.username} onChange={changeHandler}/>
        <br /><br />

        <label htmlFor="remark">Remark</label>
        <textarea id="remark" name="remark" placeholder="Enter your remark" value={formElement.remark} onChange={changeHandler}/>
        <br /><br />

        <label htmlFor="rating">Rating</label>
        <input type="number" min={1} max={5} id="rating" name="rating" placeholder="Enter your rating" value={formElement.rating} onChange={changeHandler}/>
        <button>Submit</button>
        <br /><br />

      </form>
    </>
  );
}
