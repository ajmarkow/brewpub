import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function kegList(props) {
  return(
    <React.Fragment>
      {props.kegList.map((keg, index) => 
      <Keg name={keg.name}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          key ={index}/>
      )}
    </React.Fragment>
  );
}

kegList.propTypes = {
  kegList: PropTypes.array
}
export default kegList;