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

  render() {
    let selectedVisibleState = null;

    if (this.state.formVisible) {
      selectedVisibleState = <AddKegForm />;
    } else {
      selectedVisibleState = <KegList />;
    }
    return <React.Fragment>{selectedVisibleState}</React.Fragment>;
  }
}

export default KegControl;
