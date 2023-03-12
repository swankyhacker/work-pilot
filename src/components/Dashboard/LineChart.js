import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const applied = [30, 25, 12, 18, 35, 42, 50];
const rejected = [22, 18, 16, 15, 26, 36, 40];

export const data = {
  labels,
  datasets: [
    {
      label: "Rejected",
      data: rejected,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Applied",
      data: applied,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
