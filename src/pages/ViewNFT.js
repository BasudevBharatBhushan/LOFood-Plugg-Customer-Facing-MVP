import React from "react";
import Navbar from "../components/Navbar";
import VerticalBar from "../components/VerticalBar";
import { Segment, Header, Image, Grid } from "semantic-ui-react";
import NFTCard from "../components/NFTCard";

import GoldNFT from "../img/Gold.png";
import SilverNFT from "../img/Silver.png";
import DiamondNFT from "../img/cropDiamond.gif";
import Footer from "../components/Footer";

const ViewNFT = () => {
  return (
    <div>
      <Navbar />
      <VerticalBar>
        <Segment basic>
          <Grid columns={3} divided="vertically">
            <Grid.Row>
              <Grid.Column>
                <NFTCard
                  nftImage={SilverNFT}
                  nftTitle={"Welcome"}
                  exclusivity={"Airdrop NFT"}
                  firstReward={"10% OFF on 1st Order"}
                  secondReward={"Free Movie Tickets #"}
                  couponCode={"10"}
                  rewardShow={1}
                />
              </Grid.Column>

              <Grid.Column>
                <NFTCard
                  nftImage={DiamondNFT}
                  nftTitle={"STAR USER"}
                  exclusivity={"Exclusive"}
                  firstReward={"40% OFF on your 3 orders"}
                  secondReward={"Free 1 Night Stay at ITC"}
                  couponCode={"40"}
                  rewardShow={2}
                />
              </Grid.Column>
              <Grid.Column>
                <NFTCard
                  nftImage={GoldNFT}
                  nftTitle={"LO Buddy NFT"}
                  exclusivity={"Rarity 30/100"}
                  firstReward={"10% OFF on your all orders"}
                  secondReward={"Ticket to Sunburn"}
                  couponCode={"30"}
                  rewardShow={0}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </VerticalBar>
      <Footer />
    </div>
  );
};

export default ViewNFT;
