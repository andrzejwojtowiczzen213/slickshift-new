import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie1.json";

const LottieAnimation = ({ style }) => (
  <Lottie 
    animationData={animationData}
    loop
    autoplay
    style={style || { width: 300, height: 300 }}
  />
);

export default LottieAnimation; 