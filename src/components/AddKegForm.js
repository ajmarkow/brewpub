import React from 'react';
import PropTypes from "prop-types"
import {v4} from 'uuid'

function AddKegForm(props){
  function handleNewBrewSubmit(event){
    event.preventDefault();
    props.onSubmit({name:event.target.name.value, brand:event.target.brand.value,price:event.target.price.value,abv:event.target.abv.value,id:v4()});
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewBrewSubmit}>
        <label for="name" className='p-10'>Brew Name</label>
        <br></br>
          <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='name'></input>
          <br></br>
          <br></br>
          <label for="brand" className='p-10'>Brewer</label>
        <br></br>
          <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='brand'></input>
          <br></br>
          <br></br>
          <label for="price" className='p-10'>Price</label>
        <br></br>
          <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='price'></input>
          <br></br>
          <br></br>
          <label for="abv" className='p-10'>Alcohol By Volume</label>
        <br></br>
          <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='abv'></input>

          <br></br>
          <br></br>
          <br></br>
          <button type='submit' className='px-9 py-6 bg-black-600 text-white active: font-underline rounded shadow-xl hover: bg-green-500 text-white active:bg-green-600 font-bold rounded shadow-xl'>Add Keg</button>
          <br></br>
          <br></br>
        </form>
    </React.Fragment>
  );
}
AddKegForm.propTypes = {
  onSubmit: PropTypes.func
}
export default AddKegForm;