import React from "react";
import AddKegForm from "./AddKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formVisible: false,
      };
    }

    handleKegClick = () => {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
    
    render() {
      let selectedVisibleState = null;
      let buttonText = null;
      addTicketButton = <button onClick={this.handleClick}>Add ticket</button> // new code


      if (this.state.!formVisible) {
        selectedVisibleState = <Keglist />;
        buttonText="See our Selection of Brews"
      } else {
        selectedVisibleState = <AddKegForm/>;
        ButtonText="Add a New Keg to the Pub"
      }

      return(
        <React.Fragment>
          {selectedVisibleState}
          <br></br>
          <h1>DOO DOO</h1>
          {addTicketButton}
          <button className='bg-black shadow-2xl' onClick={this.handleKegClick}>{buttonText}</button>
        </React.Fragment>
      );
    }


  }

export default KegControl;
