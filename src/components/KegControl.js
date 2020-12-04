import React from "react";
import AddKegForm from "./AddKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisible: false,
        fullListOfBrews: [],
        currentBrew: null
      };
    }

    handleKegClick = () => {
  if (this.state.currentBrew != null) {
    this.setState({
      formVisible: false,
      currentBrew: null
    });  
  } else {
    this.setState(prevState => ({formVisible:!prevState.formVisible
    }));
  }
}

    handleUpdatingCurrentBrew = (id) => {
      const currentBrew= this.state.fullListOfBrews.filter(brew => brew.id === id)[0];
      this.setState({currentBrew: currentBrew})
    }

    addNewBrew = (addedBrew) => {
      const updatedFullListOfBrews = this.state.fullListOfBrews.concat(addedBrew)
      this.setState({
        fullListOfBrews: updatedFullListOfBrews,
        formVisible: false
      })
    }
    
    render(){
      let selectedVisibleState = null;
      let buttonText = null;

      if (this.state.currentBrew != null) {
        selectedVisibleState = <KegDetail keg={this.state.currentBrew} />
        buttonText= "Back to Full Brew Selection"
      }

      else if (this.state.formVisible) {
        selectedVisibleState = <AddKegForm onSubmit={this.addNewBrew} />
        buttonText="See our Selection of Brews"
      } else {
        selectedVisibleState = <KegList kegList={this.state.fullListOfBrews} onBrewSelection={this.handleUpdatingCurrentBrew}/>;
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
