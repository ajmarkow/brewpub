import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  console.log(props);
  return (
    <React.Fragment>
      <div className=" h-175 self-center p-4 text-white bg-blue-800 rounded-md shadow-lg">
        <h4 className="text-3xl text-bold">Cheers! 🍻</h4>
        <br></br>
        <h5 className="text-2xl">Name: {keg.name}</h5>
        <br></br>
        <h5 className="text-2xl">Brand: {keg.brand}</h5>
        <br></br>
        <h5 className="text-2xl">Price: ${keg.price}</h5>
        <br></br>
        <h5 className="text-2xl">Alcohol By Volume: {keg.abv} %</h5>
        <br></br>
        <h5 className="text-2xl">Fluid Oz Remaining: {props.fluidOunces} oz</h5>
        <br></br>
        <button
          onClick={() => onClickingDelete(keg.id)}
          className="px-9 py-6 bg-black text-white active:bg-red-600 font-bold rounded shadow-xl hover: bg-red-500 text-white active:bg-red-600 font-bold rounded shadow-xl"
        >
          Remove Brew
        </button>
      </div>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  removeBrew: PropTypes.func,
};

export default KegDetail;