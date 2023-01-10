import React from "react";
import { Segment, Image } from "semantic-ui-react";
// import PluggLogo from "../img/pluggsvg.svg";
import PluggLogo from "../img/logo.png";

const Footer = () => {
  return (
    <Segment style={{ marginTop: "0" }}>
      <a
        href="https://www.plugg.network"
        style={{ marginLeft: "87%", color: "black" }}
      >
        Powered by Plugg
        <Image
          src={PluggLogo}
          size="mini"
          floated="right"
          style={{ bottom: "8px", right: "17px" }}
        />
      </a>
    </Segment>
  );
};

export default Footer;
