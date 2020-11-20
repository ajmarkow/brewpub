import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div className=" h-175 self-center p-4 text-white bg-green-400 rounded-md shadow-lg">
        <h4 className="text-3xl">This is a keg. Cheers! 🍻</h4>
        <br></br>
        <h5 className="text-2xl">Name: {props.name}</h5>
        <br></br>
        <h5 className="text-2xl">Brand: {props.brand}</h5>
        <br></br>
        <h5 className="text-2xl">Price: {props.price}</h5>
        <br></br>
        <h5 className="text-2xl">Alcohol By Volume: {props.abv}</h5>
      </div>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
};

export default Keg;
