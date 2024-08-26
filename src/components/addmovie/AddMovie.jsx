import React, { useState } from 'react'

const AddMovie = (add) => {
    const addmovie= (add) => {
        const [show,setShow] = useState(false);
        const [title, setTitle] = useState(""); 
        const [rate, setRate] = useState(""); 
        const [description, setDescription] = useState("");
        const [posterUrl, setPosterUrl] = useState("");  
        const handelShow = ()=>{setShow(true)}
        const handleClose = ()=>{setShow(false)}
        const handelAddMovie = () =>{
      let movie ={title, rate,description,posterUrl}
      //add(movie);
      handleClose();

        }
    }








  return (
    <div>AddMovie</div>
  )
}

export default AddMovie

