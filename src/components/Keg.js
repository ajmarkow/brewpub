import React from "react";

function Keg() {
  return (
    <React.Fragment>
      <div className=" h-175 self-center p-4 text-white bg-green-400 rounded-md shadow-xs">
        <h4 className="text-2xl">This is a keg. Cheers! 🍻</h4>
        <br></br>
        <h5 className='text-3xl'>Name </h5>
        <br></br>
        <h5 className='text-3xl'>Brand </h5>
        <br></br>
        <h5 className='text-3xl'>Price </h5>

      </div>
    </React.Fragment>
  );
}
export default Keg;
