import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { AppContext } from "../../../App";

const CardChart = ({ data }: { data: number[] }) => {
  const [{ dateDaily }] = useContext(AppContext);

  return (
    <Line
      data={{
        labels: dateDaily.slice(-20),
        datasets: [
          {
            label: "Confirmed",
            data: data.map((x, i) => data[i - 1] - x).slice(-20),
            borderColor: "#4285f4",
            fill: false,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        animation: {
          duration: 2000,
          easing: "easeInOutQuint",
        },
        tooltips: {
          enabled: true,
          mode: "nearest",
        },

        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

export default CardChart;
