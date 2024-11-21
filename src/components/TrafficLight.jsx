import { useEffect, useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const colors = ["green", "yellow", "red", "yellow"];
    const durations = [3000, 2000, 5000, 2000];
    let index = 0;

    const cycleColors = () => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
      setTimeout(cycleColors, durations[index]);
    };

    cycleColors();

    return () => clearTimeout(); 
  }, []);

  return (
    <div className="traffic-light">
      <div className={`bulb ${color === "green" ? "active" : ""} green`}></div>
      <div
        className={`bulb ${color === "yellow" ? "active" : ""} yellow`}
      ></div>
      <div className={`bulb ${color === "red" ? "active" : ""} red`}></div>
    </div>
  );
};

export default TrafficLight;
