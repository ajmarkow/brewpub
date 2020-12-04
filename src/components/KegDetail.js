import React from 'react';
import PropTypes from 'prop-types';

function kegDetail(props){
  const {keg} = props
  return (
    <React.Fragment>
    <div className=" h-175 self-center p-4 text-white bg-blue-800 rounded-md shadow-lg">
      <em><p>{keg.abv}</p></em>
    </div>
    </React.Fragment>
  )
}

kegDetail.propTypes = {
  keg: PropTypes.object
};

export default kegDetail;