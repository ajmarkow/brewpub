import React from "react";

function Header() {
  const name = "The Brewpub"
  const myStyle={
    fontFamily: 'Alfa Slab One'

  }
  return(
    <React.Fragment>
        <div className="self-center w-80 p-4 text-white bg-purple-600 rounded-md shadow-xs">
          <h3 style={myStyle}>{name}</h3>
        </div>
    </React.Fragment>
  );
}

export default Header;