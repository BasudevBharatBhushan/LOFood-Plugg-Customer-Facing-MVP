import React from "react";
import { Card, Icon, Image, Segment, Header, Button } from "semantic-ui-react";
import polygonlogo from "../img/polygonLogo.ico";
import NFTModal from "./NFTModal";

const NFTCard = ({
  nftImage,
  nftTitle,
  firstReward,
  secondReward,
  couponCode,
}) => {
  return (
    <div>
      <Card>
        <Image src={nftImage} fluid />

        <Segment size="big" attached style={{ marginTop: "0px" }}>
          <b>{nftTitle}</b>
          <Image
            src={polygonlogo}
            cicular
            style={{
              width: "21% ",
              margin: "0",
              padding: "0",
              display: "relative",
            }}
            floated="right"
          />
        </Segment>

        <NFTModal
          firstReward={firstReward}
          secondReward={secondReward}
          couponCode={couponCode}
        />
      </Card>
    </div>
  );
};

export default NFTCard;
