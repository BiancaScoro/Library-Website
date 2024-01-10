import React from 'react'
import LoaderImg from "../../components/assets/loading.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader flex flex-column">
      <img src={LoaderImg} alt="loader" /> 
    </div>
  )
}

export default Loader