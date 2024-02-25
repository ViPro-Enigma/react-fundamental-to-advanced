import React from "react";
import "../styles/Footer.css";
import { Button } from "@nextui-org/react";
import { withBackground } from "../hoc/withBackground";

class Footer extends React.Component {
  state = {
    message: "Hello World",
  };

  alertUser = () => {
    alert("DID MOUNT");
  };

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };

  render() {
    return (
      <footer>
        <h3 className="footer-text">My Footer</h3>
        <p data-testid="props-message">{this.props.message}</p>
        <p>{this.props.propsTambahan}</p>
        <p data-testid="state-message">{this.state.message}</p>
        <Button data-testid="change-message-btn" onClick={this.changeMessage}>
          Change Message
        </Button>
      </footer>
    );
  }
}

export default withBackground(Footer);
