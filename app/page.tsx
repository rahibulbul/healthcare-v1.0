"use client";
import Navbar from "@/components/navbar/page";
import ToastTester from "@/components/Toasttesting/page";
import Loading from "@/components/loading/page";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="screen">
      {loading && <Loading />}
      <Navbar />
      <div className="web-container">
        <ToastTester />
      </div>
    </div>
  );
}
