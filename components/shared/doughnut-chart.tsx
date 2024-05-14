"use client";

interface DoughnutChartProps {
  accounts: Account[];
}

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Accounts",
        data: [1250.5, 2500, 180.44],
        backgroundColor: ["#bb7efe", "#ddbefe", "#c38efe"],
      },
    ],
    labels: ["Account 1", "Account 2", "Account 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
