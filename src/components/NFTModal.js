import React, { useState } from "react";
import { Button, Icon, Modal, Segment } from "semantic-ui-react";
// import { Web3Auth } from "@web3auth/modal";

const NFTModal = ({ firstReward, secondReward, couponCode }) => {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  return (
    <>
      <Button color="black" fluid onClick={() => setFirstOpen(true)}>
        View Rewards
      </Button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Reward Details</Modal.Header>
        <Modal.Content>
          <h4>{firstReward}</h4>

          <Button
            fluid
            inverted
            color="grey"
            onClick={() => setSecondOpen(true)}
          >
            <span style={{ color: "black" }}> Redeem Now</span>{" "}
            <Icon name="#ABB0B8" />
          </Button>
        </Modal.Content>

        <Modal.Content>
          <h4>{secondReward}</h4>
          <Button disabled fluid>
            <span style={{ color: "black" }}>Redeem Now</span>
          </Button>
          <i>It will be activated after 5 sucessfull order</i>
        </Modal.Content>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="mini"
        >
          <Modal.Header>Coupon Code</Modal.Header>
          <Modal.Content>
            <h5 style={{ fontSize: "18px" }}>FLAT {couponCode}% OFF </h5>
            <b>
              <p
                style={{
                  border: "2px dotted #bbb",
                  textAlign: "center",
                  marginBottom: "1px",
                  borderRadius: "10px",
                  color: "#676767",
                }}
              >
                {/* LOPLUGG30 */}
                LOPLUGG{couponCode}
              </p>
            </b>
            <i style={{ fontSize: "12px" }}>
              Copy & Paste this coupon code while checking out
            </i>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon="check"
              content="Close"
              color="blue"
              onClick={() => setSecondOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  );
};

export default NFTModal;
