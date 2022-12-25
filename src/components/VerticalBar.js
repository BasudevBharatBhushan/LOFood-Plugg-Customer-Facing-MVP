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

import { useNavigate } from "react-router-dom";

const VerticalBar = ({ children }) => {
  const navigate = useNavigate();

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
          style={{
            background: "#555555",
          }}
        >
          <Menu.Item
            onClick={() => {
              navigate("/");
            }}
          >
            <Icon name="home" />
            Collectibles
          </Menu.Item>

          <Menu.Item
            onClick={() => {
              navigate("/activity");
            }}
          >
            <Icon name="chart bar" />
            Activity
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher style={{ marginLeft: "11%" }}>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

export default VerticalBar;
