import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setAnimes: setCategorys}) => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;
    setInputValue(newText);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.length > 2){
      setCategorys( category => [inputValue, ...category]);
      setInputValue("");
    }

    
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Category</h2>
        <input 
          placeholder='Inserte una categoría'
          onChange={handleChange}
          value={inputValue}
          type='text'
        />
    </form>
  )
}

AddCategory.propTypes = {
  setAnimes: PropTypes.func.isRequired
}