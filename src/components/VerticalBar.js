import React from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid,
  Transition,
} from "semantic-ui-react";
import NFTCard from "./NFTCard";

import GoldNFT from "../img/Gold.png";
import SilverNFT from "../img/Silver.png";
import DiamondNFT from "../img/cropDiamond.gif";

const VerticalBar = () => {
  return (
    <div style={{ height: "80vh", marginBottom: "0px" }}>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Collectibles
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ marginLeft: "11%" }}>
          <Segment basic>
            <Grid columns={3} divided="vertically">
              <Grid.Row>
                <Transition.Group>
                  <Grid.Column>
                    <NFTCard
                      nftImage={GoldNFT}
                      nftTitle={"Gold Membership"}
                      firstReward={"Free 1 Night Stay at ITC"}
                      secondReward={"50% off on your all orders"}
                      couponCode={"50"}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <NFTCard
                      nftImage={SilverNFT}
                      nftTitle={"Gold Membership"}
                      firstReward={"50% off on your all orders"}
                      secondReward={"Free 1 Night Stay at ITC"}
                      couponCode={"50"}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <NFTCard
                      nftImage={DiamondNFT}
                      nftTitle={"Gold Membership"}
                      firstReward={""}
                      secondReward={"50% off on your all orders"}
                      couponCode={"50"}
                    />
                  </Grid.Column>
                </Transition.Group>
              </Grid.Row>
            </Grid>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default VerticalBar;
