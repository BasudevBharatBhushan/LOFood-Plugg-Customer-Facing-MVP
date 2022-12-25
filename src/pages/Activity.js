import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import VerticalBar from "../components/VerticalBar";
import Navbar from "../components/Navbar";
import { Card, Segment, Grid, Header } from "semantic-ui-react";
import "../App.css";
import PieChart from "../components/ActivityComponents/PieChart";

const Activity = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <VerticalBar>
        <div style={{ margin: "30px" }}>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  {/* <Header>Value Saved</Header> */}
                  <PieChart />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Header>Locked Rewards</Header>
                </Segment>
                <Segment>
                  <Header>UnLocked Rewards</Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </VerticalBar>
      <Footer />
    </>
  );
};

export default Activity;
