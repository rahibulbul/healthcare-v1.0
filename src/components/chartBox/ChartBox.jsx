import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = (props) => {
  const [selectedTimeline, setSelectedTimeline] = useState("weekly");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTimelineChange = (timeline) => {
    setSelectedTimeline(timeline);
    setIsMenuVisible(false); // Automatically hide the menu after selection
  };

  const currentData = props.timeline[selectedTimeline] || [];
  const totalIncome =
    currentData.length > 0
      ? currentData.reduce((sum, item) => sum + item[props.dataKey], 0)
      : 0;
  const percentageChange =
    currentData.length > 1
      ? ((totalIncome - currentData[0][props.dataKey]) /
        currentData[0][props.dataKey]) *
      100
      : 0;

  // Determine the unit (e.g., "$" for income, "" for users, etc.)
  const unit = props.unit || "";

  return (
    <div className="ChartBox">
      <div className="BoxInfo">
        <div className="title">
          <i className={`ph ${props.icon}`}></i>
          <span>{props.title}</span>
        </div>
        <div className="BoxMenu" ref={menuRef}>
          <i
            className="ph ph-dots-three-vertical"
            onClick={handleMenuToggle}
          ></i>
          <div className={`BoxMenu-panel ${isMenuVisible ? "show" : ""}`}>
            <span onClick={() => handleTimelineChange("weekly")}>Weekly</span>
            <span onClick={() => handleTimelineChange("monthly")}>Monthly</span>
            <span onClick={() => handleTimelineChange("yearly")}>Yearly</span>
          </div>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={currentData}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  fontWeight: "600",
                  cursor: 'pointer'
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 55, y: 85 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="details">
          <span
            className="total"
            style={{
              color: totalIncome < 0 ? "#d93d3d" : "#4bb592",
            }}
          >
            {unit}
            {totalIncome || 0}
          </span>
          <span
            className="percentage py-1 px-2 rounded-xl"
            style={{
              color: percentageChange < 0 ? "white" : "white",
              backgroundColor: percentageChange < 0 ? "#d93d3d" : "#4bb592",
            }}
          >
            {percentageChange.toFixed(2) || 0}%
          </span>
          <span className="timeline" style={{ color: props.color }}>
            {selectedTimeline.charAt(0).toUpperCase() +
              selectedTimeline.slice(1)}
          </span>
          <span className="view-link">
            <Link to="#" className="view-all" style={{ color: props.color }}>
              {props.viewAll}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
