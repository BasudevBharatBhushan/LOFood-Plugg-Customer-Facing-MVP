import React from "react";
import Navbar from "../components/Navbar";
import VerticalBar from "../components/VerticalBar";
import { Segment, Header } from "semantic-ui-react";
import NFTCard from "../components/NFTCard";
const ViewNFT = () => {
  return (
    <div>
      <Navbar />
      <VerticalBar />
      <Segment style={{ marginTop: "0" }}>
        <a href="https://www.plugg.network" style={{ marginLeft: "90%" }}>
          Powered by Plugg
        </a>
      </Segment>
    </div>
  );
};

export default ViewNFT;
