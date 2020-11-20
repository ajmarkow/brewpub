import React from 'react';
import {v4} from 'uuid'

function AddKegForm(props){
  return(
    <React.Fragment>
      <label for="name" className='p-10'>Brew Name</label>
      <br></br>
        <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='Name'></input>
        <br></br>
        <br></br>
        <label for="brand" className='p-10'>Brewer</label>
      <br></br>
        <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='Description'></input>
        <br></br>
        <br></br>
        <label for="price" className='p-10'>Price</label>
      <br></br>
        <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='Description'></input>
        <br></br>
        <br></br>
        <label for="abv" className='p-10'>Alcohol By Volume</label>
      <br></br>
        <input type='text py-12' className='bg-black-300 border-2 border-black-600' name='Description'></input>

        <br></br>
        <br></br>
        <br></br>
        <button className='px-9 py-6 bg-black-600 text-white active: font-underline rounded shadow-xl hover: bg-green-500 text-white active:bg-green-600 font-bold rounded shadow-xl'>Add Keg</button>
        <br></br>
        <br></br>
    </React.Fragment>
  );
}

export default AddKegForm;