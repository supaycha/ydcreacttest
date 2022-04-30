import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartReact, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartReact.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function Chart() {
  const chart = {
    labels: [
      '20220103,20220109',
      '20220124,20220130',
      '20220214,20220220',
      '20220314,20220320'
    ],
    datasets: [
      20.97,
      20.97,
      12.69,
      12.69
    ]
  };

  return (
    <Line
      options={{
        responsive:true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: "title?"
          }
        }
      }}
      data={{
        labels: chart.labels,
        datasets: [{
          label: "product trend pricing",
          data: chart.datasets
        }]
      }}
    />
  );
};