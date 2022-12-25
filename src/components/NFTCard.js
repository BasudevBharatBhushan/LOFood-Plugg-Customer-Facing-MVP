import React from "react";
import { Card, Icon, Image, Segment, Header, Button } from "semantic-ui-react";
import polygonlogo from "../img/polygonLogo.ico";
import NFTModal from "./NFTModal";
import "../App.css";

const NFTCard = ({
  nftImage,
  nftTitle,
  firstReward,
  secondReward,
  couponCode,
  exclusivity,
  rewardShow,
}) => {
  return (
    <div className="cardDiv">
      <Card className="nftCard">
        <Image src={nftImage} fluid className="nftimage" />

        <Segment attached className="titleSegment">
          <b style={{ fontSize: "20px" }}>{nftTitle} </b>
          <span style={{ fontSize: "10px", color: "grey" }}>{exclusivity}</span>
          <a href="https://mumbai.polygonscan.com/token/0x28c05ed93f56a0c97ec3cb348e9a19a1b87c4b72">
            <Image
              className="chainlogo"
              src={polygonlogo}
              circular
              style={{
                width: "21% ",
                margin: "0",
                padding: "0",
              }}
              floated="right"
            />
          </a>
        </Segment>

        <NFTModal
          className="nftModal"
          firstReward={firstReward}
          secondReward={secondReward}
          couponCode={couponCode}
          rewardShow={rewardShow}
        />
      </Card>
    </div>
  );
};

export default NFTCard;
