import React from "react";
import Chart from "react-apexcharts";
import "./CustomerReview.css";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [520, 330, 220, 947, 1720, 2230, 2400],
      },
    ],
    options: {
      chart: {
        type: "area",
        // Remove or set a fixed height
        // height: "auto",
        height: 30,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-01-25T00:00:00.000Z",
          "2024-02-25T01:30:00.000Z",
          "2024-03-25T02:30:00.000Z",
          "2024-04-25T03:30:00.000Z",
          "2024-05-25T04:30:00.000Z",
          "2024-06-25T05:30:00.000Z",
          "2024-07-25T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div className="CustomerReview" style={{ height: "300px" }}>
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default CustomerReview;
