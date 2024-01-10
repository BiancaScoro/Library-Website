import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import {useGlobalContext} from "../../context";
import {useNavigate} from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("The joy of cooking")
      setResultTitle("Type something...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form-input" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control" placeholder="Type Something..." ref={searchText} />
              <button type="submit" className="flex flex-column" onClick={handleSubmit}> <FaSearch className="text-yellow" size={32} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm