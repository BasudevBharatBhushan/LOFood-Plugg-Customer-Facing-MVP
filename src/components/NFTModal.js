import React, { useState } from "react";
import { Button, Icon, Modal, Segment } from "semantic-ui-react";

const NFTModal = ({ firstReward, secondReward, couponCode, rewardShow }) => {
  function ModalExampleModal() {
    const [open, setOpen] = React.useState(false);

    return (
      <Modal
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button fluid inverted color="grey">
            <span style={{ color: "black" }}> Redeem Now</span>{" "}
            <Icon name="#ABB0B8" />
          </Button>
        }
      >
        <Modal.Header>Coupon Code</Modal.Header>
        <Modal.Content>
          {/* <h5 style={{ fontSize: "18px" }}>FLAT {couponCode}% OFF </h5> */}

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
              LOPLUGGITC
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
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  console.log(rewardShow);
  return (
    <>
      <Button
        style={{ background: "#962261" }}
        fluid
        onClick={() => setFirstOpen(true)}
      >
        <span style={{ color: "white" }}>View Rewards</span>
      </Button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Reward Details</Modal.Header>

        {rewardShow === 0 ? ( //0 rewards disabled
          <>
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
              {ModalExampleModal()}
            </Modal.Content>
          </>
        ) : rewardShow == 1 ? ( //1 Reward disabled
          <>
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
          </>
        ) : (
          //All rewards are disabled
          <>
            <Modal.Content>
              <h4>{firstReward}</h4>

              <Button disabled fluid>
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
          </>
        )}

        {/* <Modal.Content>
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
        </Modal.Content> */}

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
