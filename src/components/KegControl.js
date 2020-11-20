import React from "react";
import AddKegForm from "./AddKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisible: false
      };
    }

    handleKegClick = () => {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
    
    render(){
      let selectedVisibleState = null;
      let buttonText = null;

      if (this.state.formVisible) {
        selectedVisibleState = <AddKegForm />
        buttonText="See our Selection of Brews"
      } else {
        selectedVisibleState = <KegList/>
        buttonText="Add a New Brew"

    }
    return(
      <React.Fragment>
        {selectedVisibleState}
        <button className ='px-9 py-6 bg-black text-white active:bg-red-600 font-bold rounded shadow-xl hover: bg-red-500 text-white active:bg-red-600 font-bold rounded shadow-xl' onClick={this.handleKegClick}>{buttonText}</button>
      </React.Fragment>
    );
  }



  }

export default KegControl;
