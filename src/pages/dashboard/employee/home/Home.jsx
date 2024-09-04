
import React, { useEffect, useState } from "react";
import "./style.css";
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiDayCloudy,
  WiNightCloudy,
} from "react-icons/wi"; // Weather Icons
import Toast from "../../../../components/toast/Toast";
import { fetchUsername } from "../../../../api/authService";
import ChartBox from "../../../../components/chartBox/ChartBox"; // Ensure this is correctly imported
import { fetchDummyChartData, fetchDummyEvents } from "../../../../api/dashboard/employee/empDashService"; // Import your chart data function
import { Tooltip } from "react-tooltip";
import { Link, useLocation } from "react-router-dom";

const EmployeeDashboard = () => {
  const [userFullName, setUserFullName] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState("info");
  const [toastMessage, setToastMessage] = useState("Weather updated!");
  const [cityName, setCityName] = useState("Birmingham");
  const [latitude, setLatitude] = useState(52.4862);
  const [longitude, setLongitude] = useState(-1.8904);
  const [temperature, setTemperature] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState("");
  const [isDayTime, setIsDayTime] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [chartData, setChartData] = useState(null);

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  // Fetch user's full name

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchDummyEvents(setEvents, showToast);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchUsername(showToast).then((fullName) => {
      if (fullName) setUserFullName(fullName);
    });
  }, []);

  // Fetch chart data
  useEffect(() => {
    const getChartData = async () => {
      try {
        const data = await fetchDummyChartData();
        setChartData(data);
      } catch (error) {
        console.error("Failed to fetch chart data", error);
      }
    };
    getChartData();
  }, []);

  // Fetch weather data using Open-Meteo
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true`
        );
        const weatherData = await weatherResponse.json();

        const currentWeather = weatherData.current_weather;
        setTemperature(Math.round(currentWeather.temperature)); // Set temperature
        const weatherCode = currentWeather.weathercode;

        const newWeatherStatus = getWeatherStatusFromCode(weatherCode);
        setWeatherStatus(newWeatherStatus);

        const now = new Date();
        const hours = now.getHours();
        setIsDayTime(hours >= 6 && hours <= 18); // Daytime logic

        setCurrentTime(now); // Update current time

        // Update toast background color and message based on weather status
        const newToastType = getToastTypeFromWeather(newWeatherStatus);
        showToast(newToastType, `Weather updated: ${newWeatherStatus}`);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 120000); // Update every 2 minutes
    return () => clearInterval(interval);
  }, [latitude, longitude]);

  // Update the clock every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  // Helper function to get the correct toast background color based on weather
  const getToastTypeFromWeather = (weatherStatus) => {
    if (weatherStatus.includes("Clear")) {
      return "success"; // Green for clear weather
    } else if (weatherStatus.includes("Cloudy") || weatherStatus.includes("Fog")) {
      return "warning"; // Yellow for cloudy or foggy weather
    } else if (weatherStatus.includes("Rain") || weatherStatus.includes("Thunderstorm")) {
      return "error"; // Red for rain or thunderstorms
    } else {
      return "info"; // Blue for unknown or default weather
    }
  };

  const getWeatherStatusFromCode = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return "Clear Sky";
      case 1:
      case 2:
      case 3:
        return "Partly Cloudy";
      case 45:
      case 48:
        return "Fog";
      case 51:
      case 53:
      case 55:
        return "Drizzle";
      case 61:
      case 63:
      case 65:
        return "Rain";
      case 71:
      case 73:
      case 75:
        return "Snow";
      case 95:
        return "Thunderstorm";
      default:
        return "Unknown Weather";
    }
  };

  const getDateSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handle 11th to 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatFullDate = (date) => {
    const day = date.getDate();
    const dayWithSuffix = day + getDateSuffix(day);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${dayWithSuffix} ${month} ${year}`;
  };

  const getWeatherIcon = () => {
    if (weatherStatus.includes("Clear")) {
      return isDayTime ? (
        <WiDaySunny className="text-yellow-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content="Clear Sky" />
      ) : (
        <WiNightClear className="text-blue-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content="Clear Night" />
      );
    } else if (weatherStatus.includes("Cloudy")) {
      return isDayTime ? (
        <WiDayCloudy className="text-gray-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content="Partly Cloudy" />
      ) : (
        <WiNightCloudy className="text-gray-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content="Cloudy Night" />
      );
    } else if (weatherStatus.includes("Rain")) {
      return <WiRain className="text-blue-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content="Rain" />;
    } else {
      return <WiCloudy className="text-gray-500 text-4xl" data-tooltip-id="tooltip" data-tooltip-content={weatherStatus} />;
    }
  };

  if (!chartData || !chartData.dummyNetIncome || !chartData.dummyNetExpense) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="px-5 py-2">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-between h-[100px]">
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-semibold text-slate-400">
              Welcome back!
            </span>
            <span className="text-2xl font-semibold text-slate-700">
              {userFullName || "User Full Name"}
            </span>
          </div>
        </div>

        {/* Event Section */}
        <div className="flex flex-row gap-5 w-full h-full">
          <div className="flex-1 justify-between w-full h-[400px] ">
            <div className="flex flex-row gap-3 p-4 border-2 border-slate-200 rounded-lg w-full h-full">
              <div className="flex-1 h-full">
                <div className="h-full w-full flex flex-col">
                  <h2 className="text-2xl mb-2 font-semibold text-slate-700">
                    Today's Event
                  </h2>
                  <div className="h-full w-full overflow-y-auto">
                    {events.length === 0 ? (
                      <div className="text-center text-gray-500 py-4">
                        No events available
                      </div>
                    ) : (
                      events.map((event) => (
                        <div key={event.id} className="flex flex-col cursor-pointer border-2 border-gray-200 hover:bg-slate-200 duration-500 rounded-lg p-3 overflow-y-auto">
                          <span className="text-lg font-semibold">{event.title}</span>
                          <span className="text-base">{event.body}</span>
                          <span className="text-sm">{event.place}</span>
                          <span className="text-sm">{event.time}</span>
                          <span className="text-sm">{event.date}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div>{getWeatherIcon()}</div>
                <div className="flex">
                  <span className="text-3xl font-semibold text-slate-700">
                    {temperature !== null ? `${temperature}°C` : "Loading..."}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl">{cityName}</span>
                  <span className="text-sm">{currentTime.toLocaleTimeString()}</span>
                  <span className="text-sm">{formatFullDate(currentTime)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="w-[700px] h-[400px] border-2 border-slate-200 rounded-lg p-4 grid grid-cols-2 gap-4">
            <div className="w-[300px] h-[170px] p-2 border-2 border-gray-200 cursor-pointer rounded-lg hover:shadow-ui-perfect duration-500">
              <ChartBox {...chartData.dummyNetIncome} unit="£" />
            </div>
            <div className="w-[300px] h-[170px] p-2 border-2 border-gray-200 cursor-pointer rounded-lg hover:shadow-ui-perfect duration-500">
              <ChartBox {...chartData.dummyNetExpense} unit="£" />
            </div>
            <div className="w-[300px] h-[170px] p-2 border-2 border-gray-200 cursor-pointer rounded-lg hover:shadow-ui-perfect duration-500">
              <ChartBox {...chartData.dummyNetInsurance} unit="£" />
            </div>
            <div className="w-[300px] h-[170px] p-2 border-2 border-gray-200 cursor-pointer rounded-lg hover:shadow-ui-perfect duration-500">
              <ChartBox {...chartData.dummyNetUser} />
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>

      {toastVisible && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setToastVisible(false)}
        />
      )}
      <Tooltip id="tooltip" place="top" type="dark" effect="solid" />
    </div>
  );
};

export default EmployeeDashboard;
