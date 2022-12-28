import React, { Component } from "react";
import { Menu, Segment, Image } from "semantic-ui-react";
import ClientLogo from "../img/KindLifeLogo.png";
import Wallet from "./Wallet";

const Navbar = () => {
  return (
    <div>
      <Menu pointing secondary style={{ background: "#f5f5f5" }}>
        <Menu.Item name="home">
          {/* <Image src={ClientLogo} style={{ width: "10", height: "30" }} /> */}
          <img
            src={ClientLogo}
            style={{ width: "100px", height: "50px", marginLeft: "1px" }}
          />
        </Menu.Item>
        <p
          style={{
            textAlign: "center",
            marginLeft: "35%",
            marginTop: "2%",
            color: "grey",
          }}
        >
          {/* Home | Dashboard | About */}
        </p>

        <Menu.Menu position="right">
          {/* <Menu.Item name="logout" /> */}
          <Menu.Item>
            <Wallet />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
