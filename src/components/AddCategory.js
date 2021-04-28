import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories})=>{
    const [inputValue, setInputValue]=useState('');
    console.log(inputValue);

    const handleInputChanges=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
         if (inputValue.trim().length>2) {
            setCategories(cat=>[inputValue,...cat]);
            setInputValue('');
         }
    }

   return(

       <form onSubmit={handleSubmit}>
           <h2>Add Category</h2>
           <input
               value={inputValue}
               onChange={handleInputChanges}
               type="text"/>

       </form>

   )

}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
