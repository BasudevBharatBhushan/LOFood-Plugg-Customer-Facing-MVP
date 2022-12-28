import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Card, Segment, Grid, Header } from "semantic-ui-react";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Super Fan", "Welcome", "Buddy"],
  datasets: [
    {
      label: "Value Saved",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const PieChart = () => {
  return (
    <div
      style={{
        textAlign: "center",
        // marginLeft: "20px",

        width: "100%",
        height: "100%",
        display: "inline-block",
      }}
    >
      <Pie
        style={{ float: "left" }}
        data={data}
        options={{
          layout: {
            padding: 0,
          },
          responsive: true,
          plugins: {
            title: {
              //   fontSize: 30,
              // text: "Value Saved",
              display: true,
              font: { size: 20 },
            },
            legend: {
              labels: {
                // font: { size: 15 },
              },
              display: true,
              position: "right",
              align: "end",
            },

            datalabels: {
              formatter: (value, context) => {
                return "hello";
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
