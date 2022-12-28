import React from "react";
import { Icon } from "semantic-ui-react";
import CountUp from "./CountUp";

const Card = ({
  title = "Card Title",
  iconName = "star outline",
  start = 200,
  end = 500,
  timer = 50,
}) => {
  return (
    <>
      <Icon
        name={iconName}
        size="huge"
        style={{ margin: "5% 35%" }}
        color="grey"
      />
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <b>{title}</b> <br />
        <span>
          <h3
            style={{
              color: "#555555",
              fontSize: "25px",
            }}
          >
            <CountUp start={start} end={end} timer={timer} />
          </h3>
        </span>
      </p>
    </>
  );
};

export default Card;
