import React from "react";
import Navbar from "../components/Navbar";
import VerticalBar from "../components/VerticalBar";
import { Segment, Header, Image } from "semantic-ui-react";
import NFTCard from "../components/NFTCard";
import PluggLogo from "../img/logo.png";

const ViewNFT = () => {
  return (
    <div>
      <Navbar />
      <VerticalBar />
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
    </div>
  );
};

export default ViewNFT;
