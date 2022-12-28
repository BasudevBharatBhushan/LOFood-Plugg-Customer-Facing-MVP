import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import VerticalBar from "../components/VerticalBar";
import Navbar from "../components/Navbar";
import { Segment, Grid, Header, Image, Icon } from "semantic-ui-react";
import "../App.css";
import PieChart from "../components/ActivityComponents/PieChart";
import Gauge from "../components/ActivityComponents/Gauge";
import GoldNFT from "../img/Gold.png";
import SilverNFT from "../img/Silver.png";
import DiamondNFT from "../img/cropDiamond.gif";
import Card from "../components/ActivityComponents/Card";
import CountUp from "../components/ActivityComponents/CountUp";

const Activity = () => {
  useEffect(() => {}, []);
  const uv = 100;
  return (
    <>
      <Navbar />
      <VerticalBar>
        <div class="container">
          <div class="box" id="box-1">
            <h3
              style={{
                marginLeft: "30px",
                marginBottom: "0",
                color: "rgba(107, 103, 103, 0.888)",
              }}
            >
              <span style={{ fontSize: "25px" }}>Total Value Saved</span> <br />
              <span style={{ color: "#555555", marginLeft: "5px" }}>
                ₹500.00
              </span>
            </h3>
            <div className="container1_1">
              <div id="box1_1">
                <PieChart />
              </div>
              <div id="box1_2">
                <div id="box1_2_1">
                  <Image
                    size="small"
                    floated="right"
                    style={{ borderRadius: "6px", marginBottom: "3px" }}
                    src={GoldNFT}
                  />
                  <p className="NFTLabel">Buddy NFT</p>
                </div>
                <div id="box1_2_2">
                  <Image
                    size="small"
                    floated="right"
                    src={DiamondNFT}
                    style={{ borderRadius: "6px", marginBottom: "3px" }}
                  />
                  <p className="NFTLabel">Super Fan</p>
                </div>
                <div id="box1_2_3">
                  <Image
                    size="small"
                    floated="right"
                    src={SilverNFT}
                    style={{ borderRadius: "6px", marginBottom: "3px" }}
                  />
                  <p className="NFTLabel">Welcome NFT</p>
                </div>
              </div>
            </div>
          </div>
          <div class="box" id="box-2">
            <Card
              title={"No. of NFT Received"}
              iconName={"star outline"}
              start={0}
              end={3}
              timer={1}
            />
          </div>
          <div class="box" id="box-3">
            <Gauge
              value="20/100"
              title={"No. of Unlocked Rewards"}
              arcLength={[20, 80]}
            />
          </div>
          <div class="box" id="box-4">
            <Card
              title={"No. of Rewards Received"}
              iconName={"gift"}
              start={20}
              end={100}
              timer={20}
            />
          </div>
          <div class="box" id="box-4">
            <Gauge
              value="40/60"
              title={"No. of Rewards Redemmed"}
              arcLength={[40, 60]}
            />
          </div>
        </div>
      </VerticalBar>

      <Footer />
    </>
  );
};

export default Activity;
