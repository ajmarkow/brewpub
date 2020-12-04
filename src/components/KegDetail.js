import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
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

      </div>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;
