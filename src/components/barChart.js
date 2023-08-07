import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

let delayed;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  return (
    <div style={{ width: "30%", height: "30%" }}>
      <Bar
        height={300}
        width={100}
        data={{
          labels: ["Total Leads", "Application Count", "Admission Count"],
          datasets: [
            {
              label: "This Year",
              barPercentage: 0.5,
              backgroundColor: "#5B9BD5",
              data: [10, 12, 7],
            },
            {
              label: "Last Year",
              barPercentage: 0.5,
              backgroundColor: "#ED7D31",
              data: [4, 5, 8],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          animation: {
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
