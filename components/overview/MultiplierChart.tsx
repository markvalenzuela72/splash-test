import React, { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// import gsap from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);
const initialData = [
  {
    valueX: 1,
    valueY: 1,
  },
  {
    valueX: 2,
    valueY: 2,
  },
  {
    valueX: 3,
    valueY: 3,
  },
  {
    valueX: 4,
    valueY: 4,
  },
  {
    valueX: 5,
    valueY: 5,
  },
  {
    valueX: 6,
    valueY: 6,
  },
  {
    valueX: 7,
    valueY: 7,
  },
  {
    valueX: 8,
    valueY: 8,
  },
  {
    valueX: 9,
    valueY: 9,
  },
  {
    valueX: 10,
    valueY: 10,
  },
];

export default function MultiplierChart({
  isStartGame,
  setIsStartGame,
  speedValue,
}) {
  const [tooltip, setTooltip] = useState(null);
  const [point, setPoints] = useState(null);
  const [count, setCount] = useState(0);
  const [chartData, setChartData] = useState(initialData);
  const endValue = chartData[chartData.length - 1].valueY;
  const animateText = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isStartGame) {
        const newData = initialData.map((item) => ({
          ...item,
          valueY: parseFloat((Math.random() * 10).toFixed(2)),
        }));
        setChartData(newData);
        setIsStartGame(false);
      }
    }, speedValue);

    return () => clearInterval(interval);
  }, [isStartGame, speedValue]);

  // useEffect(() => {
  //   const target = endValue.toFixed(2);

  //   gsap.to(target.current, {
  //     duration: 3,
  //     textContent: endValue.toFixed(2),
  //     roundProps: endValue.toFixed(2),
  //     ease: "none",
  //   });
  // }, []);
  const CustomTooltip = ({ payload }) => {
    if (payload) {
      return (
        <div className="flex justify-center items-center bg-secondary-800 text-white w-40 h-32">
          <p>{payload[0]?.value}</p>
        </div>
      );
    }
    return null;
  };

  const updateTooltip = (e) => {
    let x = Math.round(e.cx);
    let y = Math.round(e.cy);

    tooltip.style.opacity = "1";
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
    tooltip.childNodes[0].innerHTML = e.value;
  };

  const onChartMouseMove = (chart) => {
    if (chart.isTooltipActive) {
      if (point) {
        setPoints(point);
        updateTooltip(chart);
      }
    }
  };

  const onChartMouseLeave = (e) => {
    setPoints(null);
    updateTooltip(e);
  };

  return (
    <div className="flex caption2 flex-col ui-chart">
      <div className="absolute text-5xl left-28" ref={animateText}>
        {endValue.toFixed(2)}X
      </div>
      <ResponsiveContainer width="100%" aspect={4.0 / 1.5}>
        <LineChart
          width={650}
          height={300}
          data={chartData}
          allowDecimals={true}
        >
          {/* <CartesianGrid vertical={false} opacity="0.2" /> */}
          <XAxis
            tick={{ fill: "white" }}
            axisLine={false}
            tickLine={false}
            dataKey="valueX"
          />
          <YAxis
            tickCount={10}
            tick={{ fill: "white" }}
            axisLine={false}
            tickLine={false}
            type="number"
            domain={[0, 10]}
          />
          <Tooltip
            content={<CustomTooltip />}
            viewBox={{ x: 0, y: 0, width: 20, height: 20 }}
            cursor={false}
            position="top"
            wrapperStyle={{ display: "hidden" }}
          />
          <Line
            fill="#e11d48"
            stroke="#e11d48"
            dot={true}
            type="monotone"
            dataKey="valueY"
            activeDot={(e) => {
              onChartMouseMove(e);
              onChartMouseLeave(e);
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div
        className="ui-chart-tooltip text-white flex items-center justify-center"
        ref={(ref) => setTooltip(ref)}
      >
        <div className="ui-chart-tooltip-content"></div>
      </div>
    </div>
  );
}
