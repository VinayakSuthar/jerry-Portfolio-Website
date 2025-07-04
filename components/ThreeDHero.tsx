"use client";
import Spline from "@splinetool/react-spline/next";

export default function Hero3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 ">
      <Spline scene="https://prod.spline.design/SiyiA0eIyTMbcKHQ/scene.splinecode" />
    </div>
  );
}
