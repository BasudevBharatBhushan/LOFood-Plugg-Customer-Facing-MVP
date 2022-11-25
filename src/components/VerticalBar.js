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
          <a href="https://lofoods.fit/">
            <Menu.Item as="a" style={{ background: "black" }}>
              <Icon name="angle double right" />
              Lo Food!
            </Menu.Item>
          </a>
        </Sidebar>
        <Sidebar.Pusher style={{ marginLeft: "11%" }}>
          <Segment basic>
            <Grid columns={3} divided="vertically">
              <Grid.Row>
                <Grid.Column>
                  <NFTCard
                    nftImage={GoldNFT}
                    nftTitle={"LO GOLD NFT"}
                    exclusivity={"Rarity 30/100"}
                    firstReward={"30% OFF on your all orders"}
                    secondReward={"Ticket to Sunburn"}
                    couponCode={"30"}
                  />
                </Grid.Column>
                <Grid.Column>
                  <NFTCard
                    nftImage={SilverNFT}
                    nftTitle={"LO SILVER NFT"}
                    exclusivity={"Airdrop NFT"}
                    firstReward={"10% OFF on your all orders"}
                    secondReward={"Free Movie Tickets #"}
                    couponCode={"10"}
                  />
                </Grid.Column>
                <Grid.Column>
                  <NFTCard
                    nftImage={DiamondNFT}
                    nftTitle={"The Diamond NFT"}
                    exclusivity={"Exclusive"}
                    firstReward={"50% OFF on your all orders"}
                    secondReward={"Free 1 Night Stay at ITC"}
                    couponCode={"50"}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default VerticalBar;
